# 403 Error Using Verified Domain

Source: https://resend.com/docs/knowledge-base/403-error-domain-mismatch

Learn how to resolve a 403 error caused by using a domain in your API request that doesn't match your verified domain.

A 403 error can occur when there's a mismatch between the domain you're using in your API request and the domain you've verified in Resend.

## The Problem

You've verified a domain (or subdomain) in Resend, but your API request is using a different domain.

**Example scenario:**

- You verified `sending.domain.com` in Resend
- Your API request is using `domain.com` (i.e., without the `sending` subdomain)

## How to Identify This Issue

1. Check which domain you've verified in your [Resend Domains page](https://resend.com/domains).
2. Compare it with the domain you're using in [your API request's](https://resend.com/logs) `from` field.

## Solution

You have two options to resolve this:

**Option 1: Update your API request** (Recommended)

Update your API call to use the verified domain. For example, if you verified `sending.domain.com`, make sure your `from` field uses that exact domain:

```javascript theme={"theme":{"light":"github-light","dark":"vesper"}}
resend.emails.send({
  from: 'onboarding@sending.domain.com', // Use your verified domain
  to: 'user@example.com',
  subject: 'Hello World',
  html: '<p>Hello World</p>',
});
```

**Option 2: Delete and re-add the domain**

1. Delete the domain you've added in Resend
2. Add and verify the domain that matches what you're using in your API request

Make sure the domain in your API request exactly matches the domain you've
verified in Resend, including any subdomains.

## Still Having Issues?

If you've verified that your domain matches and you're still getting a 403 error:

1. Verify that your domain is fully verified in the [Resend Domains page](https://resend.com/domains).
2. Double-check that the domain in your API request's `from` field exactly matches your verified domain
3. Ensure your API key has the necessary permissions.
4. [Contact Resend support](https://resend.com/help) with details about your error
