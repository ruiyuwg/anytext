# Rate limits

Rate limits protect your services from abuse

Supabase Auth enforces rate limits on authentication endpoints to prevent abuse. Some rate limits are customizable, and you can configure them in your project [**Authentication** > **Rate Limits**](/dashboard/project/_/auth/rate-limits).

You can also manage rate limits using the Management API:

```bash
# Get your access token from https://supabase.com/dashboard/account/tokens
export SUPABASE_ACCESS_TOKEN="your-access-token"
export PROJECT_REF="your-project-ref"

# Get current rate limits
curl -X GET "https://api.supabase.com/v1/projects/$PROJECT_REF/config/auth" \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
  | jq 'to_entries | map(select(.key | startswith("rate_limit_"))) | from_entries'

# Update rate limits
curl -X PATCH "https://api.supabase.com/v1/projects/$PROJECT_REF/config/auth" \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "rate_limit_anonymous_users": 10,
    "rate_limit_email_sent": 10,
    "rate_limit_sms_sent": 10,
    "rate_limit_verify": 10,
    "rate_limit_token_refresh": 10,
    "rate_limit_otp": 10,
    "rate_limit_web3": 10
  }'
```

## Rate limit behavior

Supabase Auth uses a token bucket algorithm for endpoint operations that are limited by IP address.

Each bucket has a maximum capacity of 30 requests. When the bucket is full, brief bursts of up to 30 requests can be allowed in a short period. Once the bucket empties, requests are rate limited until tokens refill. The rate limit defines the rate at which the bucket is refilled.

This means a client that has been idle will tolerate a brief spike in traffic, but sustained request above the rate limit are denied. When rate limits are exceeded, a **429 Too Many Requests** error is returned.

The table below shows the rate limit quotas and additional details for authentication endpoints.

| Operation                          | Path                                                           | Limited By                            | Customizable     | Limit                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------------- | -------------------------------------------------------------- | ------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Endpoints that trigger email sends | `/auth/v1/signup` `/auth/v1/recover` `/auth/v1/user`           | Sum of combined requests project-wide | Custom SMTP Only | auth.rate\_limits.email.inbuilt\_smtp\_per\_hour emails per hour with the built-in email provider. You can only change this with a custom SMTP setup. The rate limit is only applied on `/auth/v1/user` if this endpoint is called to update the user's email address.                                                 |
| Send One-Time-Passwords (OTP)      | `/auth/v1/otp`                                                 | Sum of combined requests project-wide | Yes              | Defaults to auth.rate\_limits.otp.requests\_per\_hour OTPs per hour.                                                                                                                                                                                                                                                   |
| Send OTPs or magic links           | `/auth/v1/otp`                                                 | Last request of the user              | Yes              | Defaults to auth.rate\_limits.otp.period window before a new request is allowed to the same user.                                                                                                                                                                                                                      |
| Signup confirmation request        | `/auth/v1/signup`                                              | Last request of the user              | Yes              | Defaults to auth.rate\_limits.signup\_confirmation.period window before a new request is allowed to the same user.                                                                                                                                                                                                     |
| Password Reset Request             | `/auth/v1/recover`                                             | Last request of the user              | Yes              | Defaults to auth.rate\_limits.password\_reset.period window before a new request is allowed to the same user.                                                                                                                                                                                                          |
| Verification requests              | `/auth/v1/verify`                                              | IP Address                            | No               | auth.rate\_limits.verification.requests\_per\_hour requests per hour (with bursts up to auth.rate\_limits.verification.requests\_burst requests)                                                                                                                                |
| Token refresh requests             | `/auth/v1/token`                                               | IP Address                            | No               | auth.rate\_limits.token\_refresh.requests\_per\_hour requests per hour (with bursts up to auth.rate\_limits.token\_refresh.requests\_burst requests)                                                                                                                            |
| Create or Verify an MFA challenge  | `/auth/v1/factors/:id/challenge` `/auth/v1/factors/:id/verify` | IP Address                            | No               | auth.rate\_limits.mfa.requests\_per\_hour requests per hour (with bursts up to auth.rate\_limits.verification.mfa requests)                                                                                                                                                     |
| Anonymous sign-ins                 | `/auth/v1/signup`                                              | IP Address                            | No               | auth.rate\_limits.anonymous\_signin.requests\_per\_hour requests per hour (with bursts up to auth.rate\_limits.anonymous\_signin.requests\_burst requests). Rate limit only applies if this endpoint is called without passing in an email or phone number in the request body. |
