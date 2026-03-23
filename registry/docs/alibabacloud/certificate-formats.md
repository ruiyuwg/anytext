Alibaba Cloud Content Delivery Network (CDN) allows you to upload certificates and private keys only in the PEM format and has different requirements for certificates that are issued by different certificate authorities (CAs).

## Certificates issued by a root CA

Root certificates are issued by root CAs, and can be used in web severs such as Apache, IIS, NGINX, and Tomcat. SSL certificates that are used by CDN are compatible with NGINX. Each certificate includes two files with the name extensions of `.crt` and `.key`.

Open the NGINX folder and use a text editor to open the `.crt` file. Then, you can view the certificate content. The following figure shows an example.

Figure 1. Certificate in PEM format ![PEM格式证书](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4758412161/p214015.png)

**Certificate in PEM format**

-   The certificate must start with "-----BEGIN CERTIFICATE-----" and end with "-----END CERTIFICATE-----".
    
-   Each line (except for the last line) must contain 64 characters. The last line can contain 64 or fewer characters.
    

**Requirements for certificate upload**

-   You need to upload all content of the certificate that starts with "-----BEGIN CERTIFICATE-----" and ends with "-----END CERTIFICATE-----".
    
-   Each line (except for the last line) must contain 64 characters. The last line can contain 64 or fewer characters.
    

## Certificates issued by an intermediate CA

When you configure HTTPS, you need to combine the intermediate certificates and server certificate into a complete certificate before you upload the certificate. The following figure shows an example of a complete certificate.

Figure 2. A complete certificate in PEM format![拼接后的PEM格式证书](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4758412161/p214007.png)

**Format of the certificate chain**

The certificates that are issued by an intermediate CA are in the following format:

\-----BEGIN CERTIFICATE-----

\-----END CERTIFICATE-----

\-----BEGIN CERTIFICATE-----

\-----END CERTIFICATE-----

**Combination rules**

Use a text editor to open all \*.PEM certificate files. When you combine the certificates, the first certificate must be the server certificate and the intermediate certificates follow the server certificate. Do not add space characters between certificates.

## RSA private key formats

The extension of a private key file is `.pem` or `.key`. Use a text editor to open the private key file. The following figure shows an example of a private key file.

Figure 3. RSA private key formats![RSA格式私钥](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4758412161/p214176.png)

**Private key in PEM format**

-   The private key must start with "-----BEGIN RSA PRIVATE KEY-----" and end with "-----END RSA PRIVATE KEY-----".
    
-   Each line (except for the last line) must contain 64 characters. The last line can contain 64 or fewer characters.
    

**Requirements for private key upload**

Before you upload an RSA private key, run the `openssl genrsa -out privateKey.pem 2048` command on your on-premises machine to generate a private key. The `privateKey.pem file` is the private key file.

-   The private key must start with "-----BEGIN RSA PRIVATE KEY-----" and end with "-----END RSA PRIVATE KEY-----".
    
-   Each line (except for the last line) must contain 64 characters. The last line can contain 64 or fewer characters.
    

If you want to generate a private key that starts with "-----BEGIN PRIVATE KEY-----" and ends with "-----END PRIVATE KEY-----", run the following command in OpenSSL to convert the format. Then, upload the content of the `new_server_key.pem` file and the certificate.

```
openssl rsa -in old_server_key.pem -out new_server_key.pem
```

## Convert certificate formats

The HTTPS feature supports only certificates that are in the PEM format. If your certificates are not in the PEM format, you need to convert the certificates into the PEM format. We recommend that you use OpenSSL to convert certificate formats. The following section describes how to convert certificates to the PEM format:

**Note**

-   The CRT file may be in the PEM or Distinguished Encoding Rules (DER) format. Check whether you need to convert the certificate.
    
-   PEM is a text format. It starts with " -----BEGIN \*\*\*-----" and ends with "-----END \*\*\*-----". The content between these lines is Base64-encoded. The extension of a private key file that is in PEM format is `.key`.
    

-   ### **Convert a certificate format from DER to PEM**
    
    In most cases, the DER format is used for Java.
    
    -   Convert the certificate format:
        
        ```
        openssl x509 -inform der -in certificate.cer -out certificate.pem
        ```
        
    -   Convert the private key format:
        
        ```
        openssl rsa -inform DER -outform pem -in privatekey.der -out privatekey.pem
        ```
        
    
-   ### **Convert the certificate format from P7B into PEM**
    
    In most cases, the P7B format is used for Windows Server and Tomcat.
    
    -   Convert the certificate format:
        
        ```
        openssl pkcs7 -print_certs -in incertificat.p7b -out outcertificate.cer
        ```
        
        Open the `outcertificate.cer` file. Then, copy and upload the part that starts with "-----BEGIN CERTIFICATE-----" and ends with "-----END CERTIFICATE-----".
        
    -   Convert the private key format:
        
        A certificate in the P7B format does not include a private key. When you configure an SSL certificate in the CDN console, specify the certificate information. You do not need to specify the private key information.
        
    
-   ### **Convert the certificate format from PFX to PEM**
    
    In most cases, the PFX format is used for Windows Server.
    
    -   Convert the certificate format:
        
        ```
        openssl pkcs12 -in certname.pfx -nokeys -out cert.pem
        ```
        
    -   Convert the private key format:
        
        ```
        openssl pkcs12 -in certname.pfx -nocerts -out key.pem -nodes
        ```
