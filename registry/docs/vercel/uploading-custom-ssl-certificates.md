# Uploading Custom SSL Certificates

> **🔒 Permissions Required**: Uploading Custom SSL Certificates

By default, Vercel provides all domains with custom SSL certificates. However, Enterprise teams can upload a custom SSL certificate. This allows for Enterprise teams to serve their own SSL certificate on a **Custom Domain** on Vercel's global network, rather than the automatically generated certificate.

Custom SSL certificates can be uploaded through the [**Domains** section in the sidebar on your team's dashboard](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fdomains\&title=Go+to+team%27s+domains+page), or by using the [Vercel REST API](/docs/rest-api/reference/endpoints/certs/upload-a-cert#upload-a-cert).

Uploading a custom certificate follows a three step process:

1. Providing the private key for the certificate
2. Providing the certificate itself
3. Providing the Certificate Authority root certificate such as one of [Let's Encrypt's ISRG root certificates](https://letsencrypt.org/certificates/). This will be provided by your certificate issuer and is different to the core certificate. This may be included in their download process or available for download on their website.

The content of each element must be copied and pasted into the input box directly. The certificate and private key can be extracted from the [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail) files that are provided by your certificate issuer, and should be in the following format:

```text filename="certificate.pem"
-----BEGIN CERTIFICATE-----
<Certificate body will be here>
-----END CERTIFICATE-----
```

```text filename="private-key.pem"
-----BEGIN PRIVATE KEY-----
<Private key body will be here>
-----END PRIVATE KEY-----
```

## SSL best practices

When uploading your SSL certificate, you should note the following:

1. The automatically generated certificate will remain in place, but a custom certificate is prioritized over the existing certificate. This means that if a custom certificate is uploaded and then later removed, Vercel will revert to the automatically generated certificate.
2. You can include canonical names CN's (CN's) for other subdomains on the certificate without needing to add these domains to Vercel. The certificate will be served on these domains if or when they are added.
3. Wildcards certificates can be uploaded.
4. Certificates with an explicitly defined subdomain are prioritized over a wildcard certificate when both are valid for a given subdomain.
5. Vercel cannot automatically renew custom certificates. If a custom certificate is within 5 days of expiration, an automatically generated certificate will be served in its place to prevent downtime.
6. Certificates imported to Vercel require the Subject Alternative Name (SAN) to be present

## Using self-signed certificates

In rare cases, you may need to upload a self-signed certificate to Vercel. You can generate a custom self-signed certificate for your domain with OpenSSL:

```bash
openssl req -x509 -newkey rsa:4096 \
  -keyout key.pem -out cert.pem \
  -sha256 -days 360 -nodes \
  -subj "/CN=sub.example.com" \
  -addext "subjectAltName=DNS:sub.example.com"
```

This generates a `key.pem` file containing the private key and a `cert.pem` file containing the self-signed certificate. When uploading this certificate to Vercel, use `cert.pem` also for the Certificate Authority field.

title: "Domain Connect"
description: "Learn how to integrate your service with Vercel DNS using the Domain Connect protocol to automatically configure DNS records for your users."
last\_updated: "2026-03-23T09:40:08.616Z"
source: "https://vercel.com/docs/domains/domain-connect"
