CLB only accepts PEM-formatted certificates. This topic covers format requirements and OpenSSL commands for converting DER, P7B, and PFX certificates to PEM.

## Supported certificate types

CLB supports **RSA certificates only**. ECDSA (Elliptic Curve) certificates are not supported.

**Algorithm**

**Supported key sizes**

**RSA**

1024, 2048, 4096 bits

## Certificate format requirements

### Root CA-issued certificates

If your certificate was issued directly by a root CA, upload only the certificate itself—no chain required.

**Format requirements:**

-   Start with `-----BEGIN CERTIFICATE-----` and end with `-----END CERTIFICATE-----`
    
-   64 characters per line (except the last line)
    
-   No spaces or blank lines
    

### Intermediate CA-issued certificates

If your certificate was issued by an intermediate CA, upload the full certificate chain. Concatenate certificates in this order:

1.  Server certificate (your certificate)
    
2.  Intermediate certificate(s)
    
3.  Root certificate (optional, usually omitted)
    

**Format requirements:**

-   No blank lines between certificates
    
-   64 characters per line (per [RFC 1421](https://tools.ietf.org/html/rfc1421))
    
-   No spaces in certificate content
    

**Example chain structure:**

```
-----BEGIN CERTIFICATE-----
(server certificate)
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
(intermediate certificate)
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
(root certificate, optional)
-----END CERTIFICATE-----
```

## Private key requirements

When uploading a server certificate, you must also upload its private key.

**RSA private key format:**

-   Must start with `-----BEGIN RSA PRIVATE KEY-----` and end with `-----END RSA PRIVATE KEY-----`
    
-   64 characters per line (except the last line)
    
-   No blank lines
    

### Encrypted or PKCS#8 private keys

CLB requires unencrypted PKCS#1 format private keys. If your private key is encrypted or in PKCS#8 format, convert it first.

**Indicators that conversion is needed:**

Header

Format

Action required

`-----BEGIN PRIVATE KEY-----`

PKCS#8 (unencrypted)

Convert to PKCS#1

`-----BEGIN ENCRYPTED PRIVATE KEY-----`

PKCS#8 (encrypted)

Decrypt and convert

`-----BEGIN RSA PRIVATE KEY-----` + `Proc-Type: 4,ENCRYPTED`

PKCS#1 (encrypted)

Decrypt

**Convert to unencrypted PKCS#1:**

```
openssl rsa -in old_server_key.pem -out new_server_key.pem
```

> **Note:** In OpenSSL 3.x, the `openssl rsa` command outputs PKCS#8 format by default. Add the `-traditional` flag to output PKCS#1:

## Convert certificate formats

## DER to PEM

DER format is commonly used on Java platforms. File extensions are typically `.der`, `.cer`, or `.crt`.

Convert a certificate:

```
openssl x509 -inform der -in certificate.cer -out certificate.pem
```

Convert a private key:

```
openssl rsa -inform DER -outform PEM -in privatekey.der -out privatekey.pem
```

## P7B to PEM

P7B format is commonly used in Windows Server and Tomcat.

Convert a certificate:

```
openssl pkcs7 -print_certs -in incertificate.p7b -out outcertificate.cer
```

## PFX to PEM

PFX format is commonly used in Windows Server.

Extract the certificate:

```
openssl pkcs12 -in certname.pfx -nokeys -out cert.pem
```

Extract the private key:

```
openssl pkcs12 -in certname.pfx -nocerts -out key.pem -nodes
```

## Related topics

-   [FAQ about CLB certificate](/help/en/slb/classic-load-balancer/user-guide/faq-about-certificate-upload-failures)
