# Encryption and TLS

Every **deployment** on Vercel is served over an HTTPS connection. Vercel automatically generates [SSL](https://en.wikipedia.org/wiki/Transport_Layer_Security) certificates for these unique URLs at no cost.

The CDN automatically forwards any HTTP requests to your **deployment** to HTTPS using the `308` status code:

```bash
HTTP/1.1 308 Moved Permanently
Content-Type: text/plain
Location: https://<your-deployment-host>
```

*An example showing how all \`HTTP\` requests are forwarded to \`HTTPS\`.*

HTTPS redirection is an industry standard and can't be disabled. This ensures that all web content is served over a secure connection, protecting your users' data and privacy.

> **💡 Note:** If your client needs to establish a WebSocket connection, connect using HTTPS
> directly. The WSS protocol doesn't support redirects.

## Supported TLS versions

​Vercel supports TLS version [1.2](https://en.wikipedia.org/wiki/Transport_Layer_Security#TLS_1.2) and TLS version [1.3](https://en.wikipedia.org/wiki/Transport_Layer_Security#TLS_1.3).

## TLS resumption

​Vercel supports both Session Identifiers and Session Tickets for [TLS session resumption](https://hpbn.co/transport-layer-security-tls/#tls-session-resumption). This improves Time to First Byte (TTFB) for returning visitors.

## OCSP stapling

Vercel [staples an OCSP response](https://en.wikipedia.org/wiki/OCSP_stapling) to each TLS handshake. This lets clients skip the network request to check certificate revocation, improving TTFB for first-time visitors.

## Supported ciphers

To protect data integrity, Vercel only supports strong ciphers with [forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy).

Supported cipher algorithms:

- `TLS_AES_128_GCM_SHA256` (TLS 1.3)
- `TLS_AES_256_GCM_SHA384` (TLS 1.3)
- `TLS_CHACHA20_POLY1305_SHA256` (TLS 1.3)
- `ECDHE-ECDSA-AES128-GCM-SHA256` (TLS 1.2)
- `ECDHE-RSA-AES128-GCM-SHA256` (TLS 1.2)
- `ECDHE-ECDSA-AES256-GCM-SHA384` (TLS 1.2)
- `ECDHE-RSA-AES256-GCM-SHA384` (TLS 1.2)
- `ECDHE-ECDSA-CHACHA20-POLY1305` (TLS 1.2)
- `ECDHE-RSA-CHACHA20-POLY1305` (TLS 1.2)
- `DHE-RSA-AES256-GCM-SHA384` (TLS 1.2)

This is the [recommended configuration from Mozilla](https://wiki.mozilla.org/Security/Server_Side_TLS#Intermediate_compatibility_.28recommended.29).

## Post-quantum cryptography

Vercel offers the `X25519MLKEM768` key exchange mechanism during TLS handshakes to protect your deployments against future quantum computing attacks. Your browser negotiates this mechanism automatically if you use:

- Chrome 131 and above
- Firefox 132 and above
- Safari 26 and above

## Support for HSTS

The `.vercel.app` domain (and therefore all of its sub domains, which are the unique URLs set when creating a deployment) support [HSTS](https://developer.mozilla.org/docs/Web/HTTP/Headers/Strict-Transport-Security) automatically and are preloaded.

```bash
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload;
```

*The default \`Strict-Transport-Security\` header for \*.vercel.app*

Custom domains use HSTS, but only for the particular subdomain.

```bash
Strict-Transport-Security: max-age=63072000;
```

*The default \`Strict-Transport-Security\` header for custom domains*

You can modify the `Strict-Transport-Security` header by configuring [custom response headers](/docs/headers/cache-control-headers#custom-response-headers) in your project.

You can set the `max-age` parameter to a different value. It controls how long the client remembers that your site is HTTPS-only. Since Vercel doesn't allow HTTP connections, there's no reason to shorten it.

> **💡 Note:** You can test whether your site qualifies for HSTS Preloading
> [here](https://hstspreload.org/). It also allows submitting the domain to
> Google Chrome's hardcoded HSTS list. Making it onto that list means your site
> will become even faster, as it is always accessed over HTTPS right away,
> instead of the browser following the redirection issued by the CDN.

## How Vercel handles certificates

Vercel uses a wildcard certificate issued for `.vercel.app` to handle all deployment URLs. Vercel generates these certificates through [LetsEncrypt](https://letsencrypt.org/) and keeps them updated automatically.

When you generate custom certificates with `vercel certs issue`, Vercel stores the keys in the database and [encrypts them at rest](https://en.wikipedia.org/wiki/Data_at_rest#Encryption) within the CDN.

When a hostname is requested, the CDN reads the certificate and key from the database to establish the secure connection. Both are cached in memory for optimal SSL termination performance.

## Full specification

For a complete breakdown, see the [SSL Labs report for vercel.com](https://www.ssllabs.com/ssltest/analyze.html?d=vercel.com). You can select any IP address — the results are the same for all.

title: "CDN security"
description: "Learn how Vercel"
last\_updated: "2026-03-08T05:03:11.909Z"
source: "https://vercel.com/docs/cdn-security"
