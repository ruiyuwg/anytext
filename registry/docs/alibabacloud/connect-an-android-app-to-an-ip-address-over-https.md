From the [Android SDK Integration Flow](/help/en/httpdns/latest/sdk-forandroid) topic, you learned the complete flow for importing the Android SDK, configuring it, parsing IP addresses, applying it to a network library, and verifying the integration. This topic describes how to integrate HTTPDNS with HttpURLConnection.

## **1\. Introduction**

This document describes how to integrate **HTTPDNS** to implement direct IP connections for **HttpURLConnection** requests on Android in **HTTPS** scenarios, including those that require Server Name Indication (SNI). For more information about the underlying principles, see [How direct IP connection with HTTPDNS works](/help/en/httpdns/latest/principle-of-accessing-httpdns-in-ip-direct-connection-mode).

**Important**

Most mainstream network development frameworks for Android have switched to **OkHttp**. OkHttp natively provides an interface for custom DNS services, which allows for a simpler and more elegant implementation of direct IP connections. We recommend that you first see [Best practices for using HTTPDNS with OkHttp on Android](/help/en/httpdns/latest/use-httpdns-and-okhttp-to-connect-an-android-app-to-an-ip-address#title-5w4-ok7-pw9) for integration. The following content provides an alternative solution that uses HttpURLConnection for scenarios where you cannot use OkHttp.

## **2\.** Integration solutions

The solution depends on whether your scenario involves **SNI**. There are two scenarios:

1.  **HTTPS scenario (SNI)**: When you create an `SSLSocket`, pass the original domain name to the server through SNI. You must also correctly handle the \`HostnameVerifier\` logic.
    
2.  **HTTPS scenario (non-SNI)**: You can use the **HostnameVerifier** interface to revert the IP address to the original domain name for verification during certificate validation.
    

The following sections describe the complete integration process and provide examples for each scenario.

### 2.1 HTTPS scenario (SNI)

In scenarios where you have deployed a multi-domain certificate and must provide the domain name to the server through SNI before the handshake, you must set the correct SNI name when you **create** the `**SSLSocket**`. This is in addition to using a `HostnameVerifier`. To do this, you can create a **custom** `**SSLSocketFactory**` and perform the following operations in its `createSocket()` method:

1.  **Replace the domain name with the IP address resolved by HTTPDNS** to establish the connection.
    
2.  Call the system or a custom `SSLCertificateSocketFactory` and set the SNI Hostname using `setHostname()` before the handshake.
    
3.  Perform certificate validation yourself. Change the domain name used for validation from the IP address back to the original domain name.
    

The official [HTTPDNS Android Demo](https://github.com/aliyun/alicloud-android-demo/tree/master/httpdns_android_demo/src/main/java/com/alibaba/httpdns/android/demo/practice/ipconn) provides sample code for using HTTPDNS with \`HttpsURLConnection\` in SNI scenarios.

**Custom** `**SSLSocketFactory**` **example**

Kotlin

```
class TlsSniSocketFactory constructor(conn: HttpsURLConnection): SSLSocketFactory() {
    private val mConn: HttpsURLConnection

    init {
        mConn = conn
    }

    override fun createSocket(plainSocket: Socket?, host: String?, port: Int, autoClose: Boolean): Socket {
        var peerHost = mConn.getRequestProperty("Host")
        if (peerHost == null) {
            peerHost = host
        }

        val address = plainSocket!!.inetAddress
        if (autoClose) {
            // We do not need the plainSocket.
            plainSocket.close()
        }

        // Create and connect the SSL socket, but do not perform hostname or certificate verification yet.
        val sslSocketFactory =
            SSLCertificateSocketFactory.getDefault(0) as SSLCertificateSocketFactory
        val ssl = sslSocketFactory.createSocket(address, R.attr.port) as SSLSocket

        // Enable TLSv1.1 and TLSv1.2 if available.
        ssl.enabledProtocols = ssl.supportedProtocols

        // Set up SNI before the handshake.
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
            // Set the SNI hostname.
            sslSocketFactory.setHostname(ssl, peerHost)
        } else {
            // No documented SNI support exists on Android earlier than 4.2. Try with reflection.
            try {
                val setHostnameMethod = ssl.javaClass.getMethod(
                    "setHostname",
                    String::class.java
                )
                setHostnameMethod.invoke(ssl, peerHost)
            } catch (e: Exception) {
            }
        }

        // Verify the hostname and certificate.
        val session = ssl.session

        if (!HttpsURLConnection.getDefaultHostnameVerifier()
                .verify(peerHost, session)
        ) throw SSLPeerUnverifiedException(
            "Cannot verify hostname: $peerHost"
        )

        return ssl
    }
}
```

Java

```
public class TlsSniSocketFactory extends SSLSocketFactory {
    
    private HttpsURLConnection mConn;
    public TlsSniSocketFactory(HttpsURLConnection conn) {
        mConn = conn;
    }

    @Override
    public Socket createSocket(Socket plainSocket, String host, int port, boolean autoClose) throws IOException {
        String peerHost = mConn.getRequestProperty("Host");
        if (peerHost == null)
            peerHost = host;

        InetAddress address = plainSocket.getInetAddress();
        if (autoClose) {
            // We do not need the plainSocket.
            plainSocket.close();
        }
        // Create and connect the SSL socket, but do not perform hostname or certificate verification yet.
        SSLCertificateSocketFactory sslSocketFactory = (SSLCertificateSocketFactory) SSLCertificateSocketFactory.getDefault(0);
        SSLSocket ssl = (SSLSocket) sslSocketFactory.createSocket(address, port);

        // Enable TLSv1.1 and TLSv1.2 if available.
        ssl.setEnabledProtocols(ssl.getSupportedProtocols());

        // Set up SNI before the handshake.
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
            // Set the SNI hostname.
            sslSocketFactory.setHostname(ssl, peerHost);
        } else {
            // No documented SNI support exists on Android earlier than 4.2. Try with reflection.
            try {
                java.lang.reflect.Method setHostnameMethod = ssl.getClass().getMethod("setHostname", String.class);
                setHostnameMethod.invoke(ssl, peerHost);
            } catch (Exception e) {

            }
        }

        // Verify the hostname and certificate.
        SSLSession session = ssl.getSession();

        if (!HttpsURLConnection.getDefaultHostnameVerifier().verify(peerHost, session))
            throw new SSLPeerUnverifiedException("Cannot verify hostname: " + peerHost);

        return ssl;
    }
}
```

**Redirection handling example**

Requests in SNI scenarios often undergo multiple **HTTP 3xx** redirections. The example shows how to use HTTPDNS to resolve the new host during redirection and continue the request.

Kotlin

```
fun recursiveRequest(path: String) {
    var conn: HttpURLConnection? = null
    try {
        val url = URL(path)
        conn = url.openConnection() as HttpURLConnection
        // Get the IP address using the sync API.
        val httpdnsResult = HttpDns.getService(accountID)
            .getHttpDnsResultForHostSync(url.host, RequestIpType.both)
        var ip: String? = null
        if (httpdnsResult.ips != null && httpdnsResult.ips.isNotEmpty()) {
            ip = httpdnsResult.ips[0]
        } else if (httpdnsResult.ipv6s != null && httpdnsResult.ipv6s.isNotEmpty()) {
            ip = httpdnsResult.ipv6s[0]
        }
        if (!TextUtils.isEmpty(ip)) {
            // If an IP address is obtained from HTTPDNS, replace the URL and set the Host header.
            val newUrl = path.replaceFirst(url.host.toRegex(), ip!!)
            conn = URL(newUrl).openConnection() as HttpURLConnection
            conn.connectTimeout = 30000
            conn.readTimeout = 30000
            conn.instanceFollowRedirects = false

            // Set the Host field in the HTTP request header.
            conn.setRequestProperty("Host", url.host)
            if (conn is HttpsURLConnection) {
                val httpsURLConnection = conn

                // For an HTTPS scenario, perform certificate validation.
                httpsURLConnection.hostnameVerifier =
                    HostnameVerifier { _, session ->
                        var host = httpsURLConnection.getRequestProperty("Host")
                        if (null == host) {
                            host = httpsURLConnection.url.host
                        }
                        HttpsURLConnection.getDefaultHostnameVerifier().verify(host, session)
                    }

                // For an SNI scenario, create an SSLSocket.
                httpsURLConnection.sslSocketFactory = TlsSniSocketFactory(httpsURLConnection)
            }
        }
        val code = conn.responseCode // Network block
        if (code in 300..399) {
            var location = conn.getHeaderField("Location")
            if (location == null) {
                location = conn.getHeaderField("location")
            }
            if (location != null) {
                if (!(location.startsWith("http://") || location
                        .startsWith("https://"))
                ) {
                    // Sometimes the host is omitted and only the path is returned. In this case, you must complete the URL.
                    val originalUrl = URL(path)
                    location = (originalUrl.protocol + "://"
                            + originalUrl.host + location)
                }
                recursiveRequest(location)
            }
        } else {
            // redirect finish.
            val dis = DataInputStream(conn.inputStream)
            var len: Int
            val buff = ByteArray(4096)
            val response = StringBuilder()
            while (dis.read(buff).also { len = it } != -1) {
                response.append(String(buff, 0, len))
            }
            Log.d(TAG, "Response: $response")
        }
    } catch (e: MalformedURLException) {
        Log.w(TAG, "recursiveRequest MalformedURLException")
    } catch (e: IOException) {
        Log.w(TAG, "recursiveRequest IOException")
    } catch (e: java.lang.Exception) {
        Log.w(TAG, "unknow exception")
    } finally {
        conn?.disconnect()
    }
}
```

Java

```
public void recursiveRequest(String path) {
    HttpURLConnection conn = null;
    try {
        URL url = new URL(path);
        conn = (HttpURLConnection) url.openConnection();
        // Get the IP address using the sync API.
        HTTPDNSResult httpdnsResult = HttpDns.getService(accountID).getHttpDnsResultForHostSync(url.getHost(), RequestIpType.both);

        String ip = null;
        if (httpdnsResult.getIps() != null && httpdnsResult.getIps().length > 0) {
            ip = httpdnsResult.getIps()[0];
        } else if (httpdnsResult.getIpv6s() != null && httpdnsResult.getIpv6s().length > 0) {
            ip = httpdnsResult.getIpv6s()[0];
        }

        if (!TextUtils.isEmpty(ip)) {
            // If an IP address is obtained from HTTPDNS, replace the URL and set the Host header.
            String newUrl = path.replaceFirst(url.getHost(), ip);
            conn = (HttpURLConnection) new URL(newUrl).openConnection();

            conn.setConnectTimeout(30000);
            conn.setReadTimeout(30000);
            conn.setInstanceFollowRedirects(false);

            // Set the Host field in the HTTP request header.
            conn.setRequestProperty("Host", url.getHost());

            if (conn instanceof HttpsURLConnection) {
                final HttpsURLConnection httpsURLConnection = (HttpsURLConnection) conn;

                // For an HTTPS scenario, perform certificate validation.
                httpsURLConnection.setHostnameVerifier(new HostnameVerifier() {
                    @Override
                    public boolean verify(String hostname, SSLSession session) {
                        String host = httpsURLConnection.getRequestProperty("Host");
                        if (null == host) {
                            host = httpsURLConnection.getURL().getHost();
                        }
                        return HttpsURLConnection.getDefaultHostnameVerifier().verify(host, session);
                    }
                });

                // For an SNI scenario, create an SSLSocket.
                httpsURLConnection.setSSLSocketFactory(new TlsSniSocketFactory(httpsURLConnection));
            }
        }

        int code = conn.getResponseCode();// Network block
        if (code >= 300 && code < 400) {
            String location = conn.getHeaderField("Location");
            if (location == null) {
                location = conn.getHeaderField("location");
            }

            if (location != null) {
                if (!(location.startsWith("http://") || location
                        .startsWith("https://"))) {
                    // Sometimes the host is omitted and only the path is returned. In this case, you must complete the URL.
                    URL originalUrl = new URL(path);
                    location = originalUrl.getProtocol() + "://"
                            + originalUrl.getHost() + location;
                }

                recursiveRequest(location);
            }
        } else {
            // redirect finish.
            DataInputStream dis = new DataInputStream(conn.getInputStream());
            int len;
            byte[] buff = new byte[4096];
            StringBuilder response = new StringBuilder();
            while ((len = dis.read(buff)) != -1) {
                response.append(new String(buff, 0, len));
            }
            Log.d(TAG, "Response: " + response.toString());
        }
    } catch (MalformedURLException e) {
        Log.w(TAG, "recursiveRequest MalformedURLException");
    } catch (IOException e) {
        Log.w(TAG, "recursiveRequest IOException");
    } catch (Exception e) {
        Log.w(TAG, "unknow exception");
    } finally {
        if (conn != null) {
            conn.disconnect();
        }
    }
}
```

### 2.2 HTTPS scenario (non-SNI)

For scenarios that use only a single-domain certificate, which means you do not have multi-domain deployments or do not need to specify a domain name with SNI, the main change is in **hostname verification**. The principle is to **hook** or implement your own `HostnameVerifier` during the certificate validation process. This lets you change the domain name used for verification from the IP address back to the original domain name.

> **Important** This solution applies only to non-SNI scenarios. If your application uses multiple certificates or multiple domain names, confirm that you do **not need** SNI. If you encounter an error such as `SSLHandshakeException: java.security.cert.CertPathValidatorException: Trust anchor for certification path not found.`, first check whether the target site requires SNI support.

The following example uses **HttpURLConnection** to show how to use the `HostnameVerifier` interface to complete certificate validation.

Kotlin

```
try {
    val url = "https://140.205.XX.XX/?sprefer=sypc00"
    val connection = URL(url).openConnection() as HttpURLConnection
    connection.setRequestProperty("Host", "m.taobao.com")
    if (connection is HttpsURLConnection) {
        connection.hostnameVerifier = HostnameVerifier { _, session ->
            /*
            * The official documentation describes this interface as follows:
            * "This is an extended verification option that implementers can provide.
            * It is to be used during a handshake if the URL's hostname does not match the
            * peer's identification hostname."
            *
            * When you use HTTPDNS, the hostname in the URL is not the remote hostname, such as m.taobao.com.
            * This causes a mismatch with the domain for which the certificate was issued.
            * Android's HttpsURLConnection provides a callback interface to handle this custom scenario.
            * After you confirm that the origin IP address from HTTPDNS matches the IP information in the session,
            * replace the domain name to be verified with the original domain name in the callback method.
            *
            */
            HttpsURLConnection.getDefaultHostnameVerifier().verify("m.taobao.com", session)
        }
    }
    connection.connect()
} catch (e: java.lang.Exception) {
    e.printStackTrace()
}
```

Java

```
try {
    String url = "https://140.205.XX.XX/?sprefer=sypc00";
    HttpURLConnection connection = (HttpURLConnection) new URL(url).openConnection();

    connection.setRequestProperty("Host", "m.taobao.com");

    if (connection instanceof HttpsURLConnection) {
        connection.setHostnameVerifier(new HostnameVerifier() {
    
           /*
            * The official documentation describes this interface as follows:
            * "This is an extended verification option that implementers can provide.
            * It is to be used during a handshake if the URL's hostname does not match the
            * peer's identification hostname."
            *
            * When you use HTTPDNS, the hostname in the URL is not the remote hostname, such as m.taobao.com.
            * This causes a mismatch with the domain for which the certificate was issued.
            * Android's HttpsURLConnection provides a callback interface to handle this custom scenario.
            * After you confirm that the origin IP address from HTTPDNS matches the IP information in the session,
            * replace the domain name to be verified with the original domain name in the callback method.
            *
            */
            @Override
            public boolean verify(String hostname, SSLSession session) {
                return HttpsURLConnection.getDefaultHostnameVerifier().verify("m.taobao.com", session);
            }
        });
    }

    connection.connect();
} catch (Exception e) {
    e.printStackTrace();
}
```

## 3\. Summary

1.  **Challenges of using HTTPDNS with HTTPS**
    
    -   Certificate validation requires a domain name match.
        
    -   SNI requires you to provide the domain name to the server before the handshake.
        
2.  **SNI scenarios**
    
    -   You must create a custom `SSLSocketFactory` to set the SNI Hostname before the handshake. You must also handle the replacement of the domain name for certificate validation in the `HostnameVerifier`.
        
3.  **Non-SNI scenarios**
    
    -   You can simply use `HostnameVerifier` to change the domain name used for validation from the IP address back to the original domain name.
        
4.  **Prioritize using OkHttp**
    
    -   If you can use OkHttp in your project, we recommend that you follow the best practices in [HTTPDNS + OkHttp Best Practices for Android](/help/en/httpdns/latest/use-httpdns-and-okhttp-to-connect-an-android-app-to-an-ip-address#title-5w4-ok7-pw9). OkHttp natively provides an interface for custom DNS, which allows for more concise code and better versatility.
        

You now know how to implement a direct IP connection for HTTPS, including SNI, using HTTPDNS with **HttpURLConnection** on Android. This topic helps you complete the integration.
