# Domain Connect

[Domain Connect](https://www.domainconnect.org/) is an open protocol that lets third-party services automatically configure DNS records on behalf of a domain owner. Vercel supports Domain Connect as a DNS Provider, so your service can set up DNS records on Vercel-managed domains without asking users to copy and paste values manually.

This guide covers how to integrate your service with Vercel's Domain Connect implementation using the synchronous flow.

## Prerequisites

Before you start, make sure:

- The domain you're configuring uses [Vercel's nameservers](/docs/domains/managing-nameservers). Domain Connect only works for domains where Vercel is the authoritative DNS provider.
- Your service template has been onboarded with Vercel. See [Onboard your template](#onboard-your-template-with-vercel) below.
- You have an RSA key pair for signing requests. Vercel requires digital signatures on all synchronous apply requests.

## How Domain Connect works with Vercel

The Domain Connect flow between your service and Vercel follows four steps:

1. **Discovery**: Your service queries DNS to find that Vercel is the DNS provider, then fetches Vercel's Domain Connect settings.
2. **Redirect**: Your service constructs a signed URL and redirects the user to Vercel.
3. **Consent**: Vercel shows the user which DNS records will be created and asks for permission.
4. **Apply**: The user approves, Vercel creates the records, and the user is redirected back to your service.

## Step 1: Discover the DNS provider

When a user enters their domain, query the `_domainconnect` TXT record to find the DNS provider's settings endpoint:

```bash
dig TXT _domainconnect.example.com +short
```

For domains on Vercel DNS, the response is:

```
"domainconnect.vercel.com"
```

Use the returned hostname to fetch the Domain Connect settings:

```bash
curl https://domainconnect.vercel.com/v2/example.com/settings
```

```json
{
  "providerId": "vercel.com",
  "providerName": "Vercel",
  "providerDisplayName": "Vercel",
  "urlSyncUX": "https://vercel.com/domain-connect",
  "urlAPI": "https://vercel.com/api/domain-connect"
}
```

The `urlSyncUX` value is the base URL for constructing the apply URL in the next step. If `urlSyncUX` is not present in the response, the DNS provider does not support the synchronous flow.

> **💡 Note:** The settings endpoint returns a `404` if the domain is not using Vercel's
> nameservers.

## Step 2: Check template support

Before redirecting the user, verify that Vercel supports your template:

```bash
curl https://vercel.com/api/domain-connect/v2/domainTemplates/providers/your-company.com/services/your-service
```

A `200` response means Vercel has your template. A `404` means it hasn't been onboarded yet.

## Step 3: Build and sign the apply URL

Construct the apply URL using the `urlSyncUX` prefix from the settings response, your template's `providerId` and `serviceId`, and the required query parameters.

### URL format

```
{urlSyncUX}/v2/domainTemplates/providers/{providerId}/services/{serviceId}/apply?domain={domain}&{variables}&redirect_uri={redirect_uri}&state={state}&sig={signature}&key={keyHost}
```

### Query parameters

| Parameter      | Required | Description                                                                                                             |
| -------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `domain`       | Yes      | The root domain being configured (for example, `example.com`).                                                          |
| `host`         | No       | The subdomain to apply the template to. Omit for the root domain.                                                       |
| `redirect_uri` | Yes      | Where Vercel redirects the user after the flow completes. Must be HTTPS and match your template's `syncRedirectDomain`. |
| `state`        | No       | An opaque string passed back on the redirect.                                                                           |
| `groupId`      | No       | Comma-separated list of group IDs from your template. If omitted, all record groups are applied.                        |
| `sig`          | Yes      | RSA-SHA256 signature of the query string (excluding `sig` and `key` parameters), base64-encoded and URL-encoded.        |
| `key`          | Yes      | The DNS hostname (without the domain) where your public key TXT record is published. For example, `_dck1`.              |
| *variables*    | Varies   | Key-value pairs for template variables. For example, if your template uses `%domainKey%`, pass `domainKey=your_value`.  |

### Signing the request

Vercel requires a valid digital signature on every apply request. Generate the signature over the full query string (excluding `sig` and `key`), using RSA with SHA-256 and your private key.

Publish your public key as a DNS TXT record at `{key}.{syncPubKeyDomain}` in this format:

```
p=1,a=RS256,d={base64-encoded-public-key}
```

If the key is too large for a single TXT record, split it across multiple records using the `p` index:

```
p=1,a=RS256,d={first-part-of-key}
p=2,a=RS256,d={second-part-of-key}
```

### Example apply URL

Here's what a complete apply URL looks like for a mail service:

```
https://vercel.com/domain-connect/v2/domainTemplates/providers/resend.com/services/mail/apply?domain=example.com&spfDomain=bounce&region=us-east-1&domainKey=abc123&redirect_uri=https%3A%2F%2Fresend.com%2Fcallback&state=xyz&sig=V2te9z...&key=_dck1
```

## Step 4: Handle the redirect

After the user approves or cancels, Vercel redirects to your `redirect_uri` with these query parameters:

### On success

```
https://your-service.com/callback?state=xyz
```

The `state` parameter is passed back as-is.

### On error

```
https://your-service.com/callback?error=access_denied&error_description=user_cancel&state=xyz
```

| Parameter           | Description                                                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `error`             | An error code. Values follow OAuth 2.0 conventions, including `invalid_request`, `access_denied`, `server_error`, and `temporarily_unavailable`. |
| `error_description` | A developer-focused description. `user_cancel` means the user clicked Cancel.                                                                    |
| `state`             | The original `state` value, if provided.                                                                                                         |

## Create your template

A Domain Connect template is a JSON file that defines which DNS records your service needs. Each template is identified by a `providerId` (your company domain) and a `serviceId` (your service name).

### Template structure

```json filename="your-company.com.your-service.json"
{
  "providerId": "your-company.com",
  "providerName": "Your Company",
  "serviceId": "your-service",
  "serviceName": "Your Service Name",
  "version": 1,
  "syncPubKeyDomain": "your-company.com",
  "syncRedirectDomain": "your-company.com",
  "description": "Configure DNS records for Your Service.",
  "records": [
    {
      "type": "CNAME",
      "host": "www",
      "pointsTo": "proxy.your-company.com",
      "ttl": 3600
    },
    {
      "type": "TXT",
      "host": "@",
      "data": "your-service-verification=%verificationToken%",
      "ttl": 3600
    }
  ]
}
```

### Template fields

| Field                | Required | Description                                                                                                      |
| -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `providerId`         | Yes      | Your company's domain name (for example, `resend.com`). Must be unique.                                          |
| `providerName`       | Yes      | Human-readable company name shown to the user during consent.                                                    |
| `serviceId`          | Yes      | Identifier for the service (for example, `mail`). Must be unique within your `providerId`.                       |
| `serviceName`        | Yes      | Human-readable service name shown during consent.                                                                |
| `version`            | No       | Template version number. Increment when you update the template.                                                 |
| `syncPubKeyDomain`   | Yes      | The domain where your signing public key TXT records are published. Required because Vercel enforces signatures. |
| `syncRedirectDomain` | No       | Comma-separated domains allowed as `redirect_uri` targets. If you use redirects, you must set this.              |
| `description`        | No       | A description of the template for developer reference.                                                           |
| `records`            | Yes      | Array of DNS record definitions to create when the template is applied.                                          |

### Supported record types

| Type    | Fields                                                                       | Description                                                               |
| ------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `A`     | `host`, `pointsTo`, `ttl`                                                    | Maps a hostname to an IPv4 address.                                       |
| `AAAA`  | `host`, `pointsTo`, `ttl`                                                    | Maps a hostname to an IPv6 address.                                       |
| `CNAME` | `host`, `pointsTo`, `ttl`                                                    | Creates an alias from one hostname to another.                            |
| `MX`    | `host`, `pointsTo`, `ttl`, `priority`                                        | Configures a mail server for the domain.                                  |
| `TXT`   | `host`, `data`, `ttl`                                                        | Adds a text record, commonly used for verification and SPF.               |
| `SPFM`  | `host`, `spfRules`, `ttl`                                                    | Merges SPF rules into an existing SPF TXT record instead of replacing it. |
| `SRV`   | `name`, `target`, `protocol`, `service`, `priority`, `weight`, `port`, `ttl` | Specifies a service location.                                             |
| `NS`    | `host`, `pointsTo`, `ttl`                                                    | Delegates a subdomain to different nameservers.                           |

### Using variables

Template fields support `%variableName%` placeholders that get replaced with values from the apply URL query parameters. Three built-in variables are always available:

| Variable   | Description                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------ |
| `%domain%` | The root domain from the `domain` query parameter (for example, `example.com`).                  |
| `%host%`   | The subdomain from the `host` query parameter, or empty if applying to the root domain.          |
| `%fqdn%`   | The fully qualified domain name, combining `host` and `domain` (for example, `sub.example.com`). |

Custom variables are defined by using `%yourVariable%` in any record field. When a user applies the template, the corresponding query parameter (`yourVariable=value`) supplies the value.

### Grouping records

Records can be grouped using the `groupId` field. When the apply URL includes a `groupId` parameter, only records in the specified groups are created. This lets a single template support different configurations. For example, a mail template might have separate groups for DKIM, outbound SPF, and inbound MX records.

```json
{
  "records": [
    {
      "groupId": "dkim",
      "type": "TXT",
      "host": "resend._domainkey",
      "data": "p=%domainKey%",
      "ttl": 3600
    },
    {
      "groupId": "outbound",
      "type": "SPFM",
      "host": "%spfDomain%",
      "spfRules": "include:amazonses.com",
      "ttl": 3600
    }
  ]
}
```

Applying with `groupId=dkim` creates only the DKIM record. Omitting `groupId` creates all records.

## Onboard your template with Vercel

To add your template to Vercel's Domain Connect implementation:

1. Create your template JSON file following the structure above.
2. Publish your RSA public key as a DNS TXT record at `{keyHost}.{syncPubKeyDomain}`.
3. Submit your template to Vercel for review. Reach out to <domainconnect@vercel.com>. Include a link to the template(s) and a short in-product video demonstrating the flow that uses Domain Connect.
4. Also publish your template to the [Domain Connect public template repository](https://github.com/domain-connect/templates) by submitting a pull request.

> **💡 Note:** Vercel requires all synchronous apply requests to be digitally signed. Make
> sure your template includes `syncPubKeyDomain` and your public key is
> accessible via DNS.

## Troubleshooting

### "Domain not found" error

The domain must be registered on the user's Vercel account and use Vercel's nameservers. If the user is not logged into Vercel when the Domain Connect flow is initiated, Vercel will prompt the user to login.

### Signature verification fails

Verify that:

- The signature is generated from the full query string excluding only `sig` and `key`
- All query parameter values are URL-encoded before signing
- The public key TXT record is published at `{key}.{syncPubKeyDomain}` in the correct format (`p=1,a=RS256,d={base64data}`)
- The signing algorithm is RSA with SHA-256

### Settings endpoint returns 404

The domain's nameservers must point to Vercel DNS (`ns1.vercel-dns.com` through `ns4.vercel-dns.com` or their alternates). Verify with:

```bash
dig NS example.com +short
```

### Template not found

Confirm your template has been onboarded with Vercel. Check with the query template endpoint:

```bash
curl https://vercel.com/api/domain-connect/v2/domainTemplates/providers/{providerId}/services/{serviceId}
```

## Related

title: "Managing DNS Records"
description: "Learn how to add, verify, and remove DNS records for your domains on Vercel with this guide."
last\_updated: "2026-03-23T09:40:08.634Z"
source: "https://vercel.com/docs/domains/managing-dns-records"
