# Rate limits

Rate limits protect your services from abuse

Supabase Auth enforces rate limits on endpoints to prevent abuse. Some rate limits are [customizable](/dashboard/project/_/auth/rate-limits).

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

| Endpoint                                         | Path                                                           | Limited By               | Rate Limit                                                                                                                                                                                                                                                         |
| ------------------------------------------------ | -------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| All endpoints that send emails                   | `/auth/v1/signup` `/auth/v1/recover` `/auth/v1/user`\[^1]       | Sum of combined requests | Defaults to 4 emails per hour as of 14th July 2023. As of 21 Oct 2023, this has been updated to auth.rate\_limits.email.inbuilt\_smtp\_per\_hour emails per hour. You can only change this with your own custom SMTP setup. |
| All endpoints that send One-Time-Passwords (OTP) | `/auth/v1/otp`                                                 | Sum of combined requests | Defaults to auth.rate\_limits.otp.requests\_per\_hour OTPs per hour. Is customizable.                                                                                                                                       |
| Send OTPs or magic links                         | `/auth/v1/otp`                                                 | Last request of the user | Defaults to auth.rate\_limits.otp.period window before a new request is allowed to the same user. Is customizable.                                                                                                          |
| Signup confirmation request                      | `/auth/v1/signup`                                              | Last request of the user | Defaults to auth.rate\_limits.signup\_confirmation.period window before a new request is allowed to the same user. Is customizable.                                                                                         |
| Password Reset Request                           | `/auth/v1/recover`                                             | Last request of the user | Defaults to auth.rate\_limits.password\_reset.period window before a new request is allowed to the same user. Is customizable.                                                                                              |
| Verification requests                            | `/auth/v1/verify`                                              | IP Address               | auth.rate\_limits.verification.requests\_per\_hour requests per hour (with bursts up to auth.rate\_limits.verification.requests\_burst requests)                                     |
| Token refresh requests                           | `/auth/v1/token`                                               | IP Address               | auth.rate\_limits.token\_refresh.requests\_per\_hour requests per hour (with bursts up to auth.rate\_limits.token\_refresh.requests\_burst requests)                                 |
| Create or Verify an MFA challenge                | `/auth/v1/factors/:id/challenge` `/auth/v1/factors/:id/verify` | IP Address               | auth.rate\_limits.mfa.requests\_per\_hour requests per hour (with bursts up to auth.rate\_limits.verification.mfa requests)                                                          |
| Anonymous sign-ins                               | `/auth/v1/signup`\[^2]                                          | IP Address               | auth.rate\_limits.anonymous\_signin.requests\_per\_hour requests per hour (with bursts up to auth.rate\_limits.anonymous\_signin.requests\_burst requests)                           |

\[^1]: The rate limit is only applied on `/auth/v1/user` if this endpoint is called to update the user's email address.

\[^2]: The rate limit is only applied on `/auth/v1/signup` if this endpoint is called without passing in an email or phone number in the request body.
