# Mutual TLS

[Skip to content](#%5Ftop)

### Tags

[ mTLS ](https://developers.cloudflare.com/search/?tags=mTLS)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/cloudflare-one/access-controls/service-credentials/mutual-tls-authentication.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Mutual TLS

[Mutual TLS (mTLS) authentication ↗](https://www.cloudflare.com/learning/access-management/what-is-mutual-tls/) ensures that traffic is both secure and trusted in both directions between a client and server. It allows requests that do not log in with an identity provider (like IoT devices) to demonstrate that they can reach a given resource. Client certificate authentication is also a second layer of security for team members who both log in with an identity provider (IdP) and present a valid client certificate.

With a root certificate authority (CA) in place, Access only allows requests from devices with a corresponding client certificate. When a request reaches the application, Access responds with a request for the client to present a certificate. If the device fails to present the certificate, the request is not allowed to proceed. If the client does have a certificate, Access completes a key exchange to verify.

![mTLS handshake diagram](https://developers.cloudflare.com/_astro/mtls.BbZYLY1o_tux4L.webp)

Important

The mTLS certificate is used only to verify the client certificate. It does not control the SSL certificate presented during the [server hello ↗](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/).

## Enforce mTLS authentication

### Prerequisites

- An [Access application](https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/self-hosted-public-app/) for the hostname that you would like to secure with mTLS.
- A CA that issues client certificates for your devices.
  - The CA certificate can be from a publicly trusted CA or self-signed.
  - In the certificate `Basic Constraints`, the attribute `CA` must be set to `TRUE`.
  - The certificate must use one of the signature algorithms listed below:\
    Allowed signature algorithms\
    `x509.SHA1WithRSA`\
    `x509.SHA256WithRSA`\
    `x509.SHA384WithRSA`\
    `x509.SHA512WithRSA`\
    `x509.ECDSAWithSHA1`\
    `x509.ECDSAWithSHA256`\
    `x509.ECDSAWithSHA384`\
    `x509.ECDSAWithSHA512`

### Add mTLS to your Access application

1. In [Cloudflare One ↗](https://one.dash.cloudflare.com/), go to **Access controls** > **Service credentials** > **Mutual TLS**.
2. Select **Add mTLS Certificate**.
3. Enter any name for the root CA.
4. In **Certificate content**, paste the contents of your root CA.\
   If the client certificate is directly signed by the root CA, you only need to upload the root. If the client certificate is signed by an intermediate certificate, you must upload the entire CA chain (intermediate and root). For example:

```
-----BEGIN CERTIFICATE-----  
<intermediate.pem>  
-----END CERTIFICATE-----  
-----BEGIN CERTIFICATE-----  
<rootCA.pem>  
-----END CERTIFICATE-----  
```

Do not include any SSL/TLS server certificates; Access only uses the CA chain to verify the connection between the user's device and Cloudflare.

1. In **Associated hostnames**, enter the fully-qualified domain names (FQDN) that will use this certificate.\
   These FQDNs will be the hostnames used for the resources being protected in the [Access policy](https://developers.cloudflare.com/cloudflare-one/access-controls/policies/). You must associate the Root CA with the FQDN that the application being protected uses.
2. Save the policy.
3. Go to **Access controls** > **Policies**.
4. [Create an Access policy](https://developers.cloudflare.com/cloudflare-one/access-controls/policies/policy-management/#create-a-policy) using one of the following [selectors](https://developers.cloudflare.com/cloudflare-one/access-controls/policies/#selectors):
   - **Valid Certificate**: Any client certificate that can authenticate with the Root CA will be allowed to proceed.
   - **Common Name**: Only client certificates with a specific common name will be allowed to proceed.
5. If this is for a client who does not need to log in through an IdP, set the policy **Action** to *Service Auth*.\
   **Example mTLS policy**\
   | Action       | Rule type | Selector    | Value    |\
   | ------------ | --------- | ----------- | -------- |\
   | Service Auth | Include   | Common Name | John Doe |
6. Save the policy, then go to **Access controls** > **Applications**.
7. Select the application you would like to enforce mTLS on and select **Configure**. The application must be included in the **Associated hostnames** list from Step 5.
8. In the **Policies** tab, add your mTLS policy.
9. Save the application.

You can now authenticate to the application using a client certificate. For instructions on how to present a client certificate, refer to [Test mTLS](#test-mtls).

## Test mTLS

### Test using cURL

To test the application protected by an mTLS policy:

1. First, attempt to curl the site without a client certificate. This curl command example is for the site `example.com` that has an [Access application and policy](#add-mtls-to-your-access-application) set for `https://auth.example.com`:\
   Terminal window

```
curl -sv https://auth.example.com  
```

Without a client certificate in the request, a `403 forbidden` response displays and the site cannot be accessed.
2\. Now, add your client certificate and key to the request:\
Terminal window

```
curl -sv https://auth.example.com --cert example.pem --key key.pem  
```

When the authentication process completes successfully, a `CF_Authorization Set-Cookie` header returns in the response.

Warning

Cloudflare Gateway cannot inspect traffic to mTLS-protected domains. If a device has the Cloudflare One Client turned on and passes HTTP requests through Gateway, access will be blocked unless you [bypass HTTP inspection](https://developers.cloudflare.com/cloudflare-one/traffic-policies/http-policies/#do-not-inspect) for the domain.

### Test in a browser

To access an mTLS-protected application in a browser, the client certificate must be imported into your browser's certificate manager. Instructions vary depending on the browser. Your browser may use the operating system's root store or its own internal trust store.

The following example demonstrates how to add a client certificate to the macOS system keychain:

Important

The command adds the client certificate to the trusted store on your device. Only proceed if you are comfortable doing so and intend to keep these testing certificates safeguarded.

1. Navigate to the directory containing the client certificate and key.
   1. Open the `client.pem` file in Keychain Access. If prompted, enter your local password.
   2. In **Keychain**, choose the access option that suits your needs and select **Add**.
   3. In the list of certificates, locate the newly installed certificate. Keychain Access will mark this certificate as not trusted. Right-click the certificate and select **Get Info**.
   4. Select **Trust**. Under **When using this certificate**, select *Always Trust*.

Assuming your browser uses the macOS system store, you can now connect to the mTLS application through the browser.

## Generate mTLS certificates

You can use open source private key infrastructure (PKI) tools to generate certificates to test the mTLS feature in Cloudflare Access.

### OpenSSL

This section covers how to use [OpenSSL ↗](https://www.openssl.org/) to generate a root and intermediate certificate, and then issue client certificates that can authenticate against the CA chain.

#### Generate the root CA

1. Generate the root CA private key:\
   Terminal window

```
 openssl genrsa -aes256 -out rootCA.key 4096  
```

When prompted, enter a password to use with `rootCA.key`.
2\. Create a self-signed root certificate called `rootCA.pem`:\
Terminal window

```
openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 3650 -out rootCA.pem  
```

You will be prompted to enter your private key password and fill in some optional fields. For testing purposes, you can leave the optional fields blank.

#### Generate an intermediate certificate

1. Generate the intermediate CA private key:\
   Terminal window

```
 openssl genrsa -aes256 -out intermediate.key 4096  
```

When prompted, enter a password to use with `intermediate.key`.
2\. Create a certificate signing request (CSR) for the intermediate certificate:\
Terminal window

```
openssl req -new -sha256 -key intermediate.key -out intermediate.csr  
```

You will be prompted to enter your private key password and fill in some optional fields. For testing purposes, you can leave the optional fields blank.
3\. Create a CA Extension file called `v3_intermediate_ca.ext`. For example,

```
subjectKeyIdentifier = hash  
authorityKeyIdentifier = keyid:always,issuer  
basicConstraints = critical, CA:true  
keyUsage = critical, cRLSign, keyCertSign  
```

Make sure that `basicConstraints` includes the `CA:true` property. This property allows the intermediate certificate to act as a CA and sign client certificates.
4\. Sign the intermediate certificate with the root CA:\
Terminal window

```
 openssl x509 -req -in intermediate.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out intermediate.pem -days 1825 -sha256 -extfile v3_intermediate_ca.ext  
```

#### Create a CA chain file

1. Combine the intermediate and root certificates into a single file:\
   Terminal window

```
cat intermediate.pem rootCA.pem > ca-chain.pem  
```

The intermediate certificate should be at the top of the file, followed by its signing certificate.
2\. Upload the contents of `ca-chain.pem` to Cloudflare Access. For instructions, refer to [Add mTLS to your Access application](#add-mtls-to-your-access-application).

#### Generate a client certificate

1. Generate a private key for the client:\
   Terminal window

```
 openssl genrsa -out client.key 2048  
```

2. Create a CSR for the client certificate:\
   Terminal window

```
openssl req -new -key client.key -out client.csr  
```

You will be prompted to fill in some optional fields. For testing purposes, you can set **Common Name** to something like `John Doe`.
3\. Sign the client certificate with the intermediate certificate:\
Terminal window

```
 openssl x509 -req -in client.csr -CA intermediate.pem -CAkey intermediate.key -CAcreateserial -out client.pem -days 365 -sha256  
```

4. Validate the client certificate against the certificate chain:\
   Terminal window

```
openssl verify -CAfile ca-chain.pem client.pem  
```

```
client.pem: OK  
```

You can now use the client certificate (`client.pem`) and its key (`client.key`) to [test mTLS](#test-mtls).

### Cloudflare PKI

This guide uses [Cloudflare's PKI toolkit ↗](https://github.com/cloudflare/cfssl) to generate a root CA and client certificates from JSON files.

#### 1. Install dependencies

The process requires two packages from Cloudflare's PKI toolkit:

- `cf-ssl`
- `cfssljson`

You can install these packages from the [Cloudflare SSL GitHub repository ↗](https://github.com/cloudflare/cfssl). You will need a working installation of Go, version 1.12 or later. Alternatively, you can [download the packages ↗](https://github.com/cloudflare/cfssl) directly. Use the instructions under Installation to install the toolkit, and ensure that you install all of the utility programs in the toolkit.

#### 2. Generate the root CA

1. Create a new directory to store the root CA.
2. Within that directory, create two new files:
   - **CSR**. Create a file named `ca-csr.json` and add the following JSON blob, then save the file.
   ```
   {  
     "CN": "Access Testing CA",  
     "key": {  
       "algo": "rsa",  
       "size": 4096  
     },  
     "names": [  
       {  
         "C": "US",  
         "L": "Austin",  
         "O": "Access Testing",  
         "OU": "TX",  
         "ST": "Texas"  
       }  
     ]  
   }  
   ```
   - **config**. Create a file named `ca-config.json` and add the following JSON blob, then save the file.
   ```
   {  
     "signing": {  
       "default": {  
         "expiry": "8760h"  
       },  
       "profiles": {  
         "server": {  
           "usages": ["signing", "key encipherment", "server auth"],  
           "expiry": "8760h"  
         },  
         "client": {  
           "usages": ["signing", "key encipherment", "client auth"],  
           "expiry": "8760h"  
         }  
       }  
     }  
   }  
   ```
3. Now, run the following command to generate the root CA with those files.\
   Terminal window

```
cfssl gencert -initca ca-csr.json | cfssljson -bare ca  
```

4. The command will output a root certificate (`ca.pem`) and its key (`ca-key.pem`).\
   Terminal window

```
ls  
```

```
ca-config.json ca-csr.json ca-key.pem ca.csr  ca.pem  
```

5. Upload the contents of `ca.pem` to Cloudflare Access. For instructions, refer to [Add mTLS to your Access application](#add-mtls-to-your-access-application).

#### 3. Generate a client certificate

To generate a client certificate that will authenticate against the uploaded root CA:

1. Create a file named `client-csr.json` and add the following JSON blob:

```
{  
  "CN": "James Royal",  
  "hosts": [""],  
  "key": {  
    "algo": "rsa",  
    "size": 4096  
  },  
  "names": [  
    {  
      "C": "US",  
      "L": "Austin",  
      "O": "Access",  
      "OU": "Access Admins",  
      "ST": "Texas"  
    }  
  ]  
}  
```

2. Now, use the following command to generate a client certificate with the Cloudflare PKI toolkit:\
   Terminal window

```
cfssl gencert -ca=ca.pem -ca-key=ca-key.pem  -config=ca-config.json -profile=client client-csr.json | cfssljson -bare client  
```

The command will output a client certificate file (`client.pem`) and its key (`client-key.pem`). You can now use these files to [test mTLS](#test-mtls).

#### Create a certificate revocation list

You can use the Cloudflare PKI toolkit to generate a certificate revocation list (CRL), as well. This list will contain client certificates that are revoked.

1. Get the serial number from the client certificate generated earlier. Add that serial number, or any others you intend to revoke, in hex format in a text file. This example uses a file named `serials.txt`.
2. Create the CRL with the following command.\
   Terminal window

```
cfssl gencrl serials.txt ../mtls-test/ca.pem ../mtls-test/ca-key.pem | base64 -D > ca.crl  
```

You will need to add the CRL to your server or enforce the revocation in a Cloudflare Worker. An example Worker Script can be found on the [Cloudflare GitHub repository ↗](https://github.com/cloudflare/access-crl-worker-template).

## Forward a client certificate

In addition to enforcing mTLS authentication for your host, you can also forward a client certificate to your origin server as an HTTP header. This setup is often helpful for server logging.

To avoid adding the certificate to every single request, the certificate is only forwarded on the first request of an mTLS connection.

Warning

This process is only available on accounts with [Cloudflare Access](https://developers.cloudflare.com/cloudflare-one/).

### Cloudflare API

The most common approach to forwarding a certificate is to use the Cloudflare API to [update an mTLS certificate's hostname settings](https://developers.cloudflare.com/api/resources/zero%5Ftrust/subresources/access/subresources/certificates/subresources/settings/methods/update/).

Required API token permissions

At least one of the following [token permissions](https://developers.cloudflare.com/fundamentals/api/reference/permissions/)is required:

- `Access: Mutual TLS Certificates Write`

Update an mTLS certificate's hostname settings

```

curl "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/access/certificates/settings" \

  --request PUT \

  --header "X-Auth-Email: $CLOUDFLARE_EMAIL" \

  --header "X-Auth-Key: $CLOUDFLARE_API_KEY" \

  --json '{

    "settings": [

        {

            "hostname": "<HOSTNAME>",

            "china_network": false,

            "client_certificate_forwarding": true

        }

    ]

  }'


```

Once `client_certificate_forwarding` is set to `true`, every request within an mTLS connection will now include the following headers:

- `Cf-Client-Cert-Der-Base64`
- `Cf-Client-Cert-Sha256`

### Managed Transforms

You can also [modify HTTP response headers](https://developers.cloudflare.com/rules/transform/response-header-modification/) using Managed Transforms to pass along **TLS client auth headers**.

### Cloudflare Workers

Additionally, Workers can provide details around the [client certificate](https://developers.cloudflare.com/workers/runtime-apis/bindings/mtls/).

JavaScript

```

const tlsHeaders = {

    'X-CERT-ISSUER-DN': request.cf.tlsClientAuth.certIssuerDN,

    'X-CERT-SUBJECT-DN': request.cf.tlsClientAuth.certSubjectDN,

    'X-CERT-ISSUER-DN-L': request.cf.tlsClientAuth.certIssuerDNLegacy,

    'X-CERT-SUBJECT-DN-L': request.cf.tlsClientAuth.certSubjectDNLegacy,

    'X-CERT-SERIAL': request.cf.tlsClientAuth.certSerial,

    'X-CERT-FINGER': request.cf.tlsClientAuth.certFingerprintSHA1,

    'X-CERT-VERIFY': request.cf.tlsClientAuth.certVerify,

    'X-CERT-NOTBE': request.cf.tlsClientAuth.certNotBefore,

    'X-CERT-NOTAF': request.cf.tlsClientAuth.certNotAfter

};


```

## Known limitations

mTLS does not currently work for:

- Cloudflare Pages site served on a [custom domain](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- Cloudflare R2 public bucket served on a [custom domain](https://developers.cloudflare.com/r2/buckets/public-buckets/#connect-a-bucket-to-a-custom-domain)

## Notifications for mutual TLS certificates

Cloudflare will send the following [notifications](https://developers.cloudflare.com/notifications/) before your mutual TLS certificates expire:

Access mTLS Certificate Expiration Alert

**Who is it for?**

[Access](https://developers.cloudflare.com/cloudflare-one/access-controls/policies/) customers that use client certificates for mutual TLS authentication. This notification will be sent 30 and 14 days before the expiration of the certificate.

**Other options / filters**

None.

**Included with**

Purchase of [Access](https://developers.cloudflare.com/cloudflare-one/access-controls/service-credentials/mutual-tls-authentication/) and/or [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/security/certificate-management/enforce-mtls/).

**What should you do if you receive one?**

Upload a [renewed certificate](https://developers.cloudflare.com/cloudflare-one/access-controls/service-credentials/mutual-tls-authentication/#add-mtls-authentication-to-your-access-configuration).

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/cloudflare-one/","name":"Cloudflare One"}},{"@type":"ListItem","position":3,"item":{"@id":"/cloudflare-one/access-controls/","name":"Access controls"}},{"@type":"ListItem","position":4,"item":{"@id":"/cloudflare-one/access-controls/service-credentials/","name":"Service credentials"}},{"@type":"ListItem","position":5,"item":{"@id":"/cloudflare-one/access-controls/service-credentials/mutual-tls-authentication/","name":"Mutual TLS"}}]}
```
