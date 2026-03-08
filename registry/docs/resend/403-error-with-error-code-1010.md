# 403 Error with Error Code 1010

Source: https://resend.com/docs/knowledge-base/403-error-1010

Learn how to resolve a 403 error caused by a missing User-Agent header when sending requests to the Resend API.

You may receive a 403 error with error code 1010 (`Access denied`) when sending requests to the Resend API. This happens because requests without a `User-Agent` header are blocked before they reach the API.

## The Problem

The Resend API requires all HTTP requests to include a `User-Agent` header. When your HTTP client doesn't send one, the request is rejected with a 403 status code and error 1010 before it ever reaches the API.

This can be confusing because:

- The error doesn't come from the Resend API itself
- Tools like `curl` automatically include a `User-Agent` header, so requests from the command line work fine
- The error message doesn't clearly indicate that the missing header is the cause

## How to Identify This Issue

- You're getting a 403 error, but your API key and domain are correct
- The error response contains an error code of `1010`
- The same request works when using `curl` from the command line

## Solution

Add a `User-Agent` header to your HTTP requests.

**Example with Node.js `fetch`:**

```javascript theme={"theme":{"light":"github-light","dark":"vesper"}}
fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer re_123456789',
    'Content-Type': 'application/json',
    'User-Agent': 'my-app/1.0',
  },
  body: JSON.stringify({
    from: 'you@yourdomain.com',
    to: 'user@example.com',
    subject: 'Hello World',
    html: '<p>Hello World</p>',
  }),
});
```

If you're using a [Resend SDK](/sdks), the `User-Agent` header is already
included automatically. This issue typically only affects direct HTTP requests
made without an SDK.

## Still Having Issues?

If you've added a `User-Agent` header and you're still getting a 403 error:

1. Verify that the header is being sent correctly by inspecting your outgoing request.
2. Ensure your API key is valid and has the necessary permissions.
3. Check that your domain is verified in the [Resend Domains page](https://resend.com/domains).
4. [Contact Resend support](https://resend.com/help) with details about your error.
