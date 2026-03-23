# Setting up a custom domain

Use this guide to add a custom domain to your Vercel project, configure DNS records, and verify that everything is working.

> **💡 Note:** This guide requires a [linked Vercel project](/docs/cli/project-linking). Run
> `vercel link` in your project directory if you haven't already.

## Quick reference

Use this block when you already know what you're doing and want the full command sequence. Use the steps below for context and checks.

```bash filename="terminal"
# 1. Check your existing domains
vercel domains ls

# 2. Add the domain to your project
vercel domains add example.com my-project

# 3. Check what DNS records are needed
vercel domains inspect example.com

# 4. Configure DNS records (apex domain)
vercel dns add example.com '@' A 76.76.21.21

# 4b. OR configure DNS records (subdomain)
vercel dns add example.com www CNAME cname.vercel-dns-0.com

# 5. Verify DNS configuration
vercel domains inspect example.com

# 6. Verify SSL certificate was provisioned
vercel certs ls

# 7. Test the domain
vercel httpstat /
vercel curl /
```

## 1. Check your existing domains

List the domains already configured on your team to avoid conflicts:

```bash filename="terminal"
vercel domains ls
```

This shows all domains across your projects, including their DNS status and verification state.

## 2. Add the domain to your project

Add your custom domain and associate it with your project:

```bash filename="terminal"
vercel domains add example.com my-project
```

If the domain is already assigned to another project in your team, use the `--force` flag to reassign it:

```bash filename="terminal"
vercel domains add example.com my-project --force
```

For a `www` subdomain, add that separately:

```bash filename="terminal"
vercel domains add www.example.com my-project
```

If you add both `example.com` and `www.example.com`, configure a redirect from one to the other in your [Vercel project settings](/docs/domains/deploying-and-redirecting#redirecting-domains) to avoid duplicate content.

## 3. Check what DNS records are needed

After adding the domain, inspect it to see the required DNS configuration:

```bash filename="terminal"
vercel domains inspect example.com
```

This shows the current DNS verification status and the exact records you need to configure. The output tells you whether the domain needs an A record, CNAME record, or nameserver delegation.

## 4. Configure DNS records

The records you add depend on whether you're configuring an apex domain (like `example.com`) or a subdomain (like `www.example.com`).

For an **apex domain**, add an A record:

```bash filename="terminal"
vercel dns add example.com '@' A 76.76.21.21
```

For a **subdomain**, add a CNAME record:

```bash filename="terminal"
vercel dns add example.com www CNAME cname.vercel-dns-0.com
```

> **💡 Note:** The DNS values shown above (`76.76.21.21` and `cname.vercel-dns-0.com`) are
> Vercel's general-purpose values. Your project may have specific values. Run
> `vercel domains inspect example.com` to see the exact records recommended for
> your domain. These commands work when your domain's nameservers are pointed to
> Vercel. If you manage DNS with an external provider, add these records through
> your provider's dashboard instead.

To verify your DNS records were added:

```bash filename="terminal"
vercel dns ls
```

## 5. Verify DNS configuration

Run `inspect` again to check that the domain is properly configured and verified:

```bash filename="terminal"
vercel domains inspect example.com
```

DNS propagation can take a few minutes. If the domain isn't verified yet, wait and run the command again.

## 6. Verify SSL certificate

Vercel automatically provisions an SSL certificate after DNS verification succeeds. Check that the certificate was issued:

```bash filename="terminal"
vercel certs ls
```

Look for your domain in the output. The certificate typically provisions within a few minutes of DNS verification.

## 7. Test the domain

Verify your domain is serving traffic correctly:

```bash filename="terminal"
vercel httpstat /
```

This shows a full timing breakdown for a request to your production deployment. If you need to check the response body:

```bash filename="terminal"
vercel curl /
```

## When you're using an external DNS provider

If your domain's nameservers point to an external DNS provider (like Cloudflare or Route 53), you can't use `vercel dns add` to configure records. Instead:

1. Add the domain to your project with `vercel domains add`
2. Run `vercel domains inspect` to see the required records
3. Add those records through your external DNS provider's interface
4. Run `vercel domains inspect` again to verify Vercel detected the records

## Related

- [vercel domains](/docs/cli/domains)
- [vercel dns](/docs/cli/dns)
- [vercel certs](/docs/cli/certs)
- [Domains overview](/docs/domains)
- [Deploying a project from the CLI](/docs/projects/deploy-from-cli)

title: "Supported domains"

last\_updated: "2026-03-23T09:40:08.697Z"
source: "https://vercel.com/docs/domains/supported-domains"

# Supported domains

Vercel supports the following top-level domains (TLDs) for [purchase](/docs/domains/working-with-domains#buying-a-domain-through-vercel) as custom domains. Refer to the table below for information on which TLDs can be transferred into Vercel and which TLDs support WHOIS privacy.

title: "Troubleshooting domains"
description: "Learn about common reasons for domain misconfigurations and how to troubleshoot your domain on Vercel."
last\_updated: "2026-03-23T09:40:08.737Z"
source: "https://vercel.com/docs/domains/troubleshooting"
