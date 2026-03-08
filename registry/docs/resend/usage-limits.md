# Usage Limits

Source: https://resend.com/docs/api-reference/rate-limit

Learn about API rate limits, email sending quotas, and contact quotas.

The Resend API enforces three types of limits: **rate limits** control how many API requests you can make per second, **email quotas** control the total number of emails you can send per day and month, and **contact quotas** control how many marketing contacts you can store.

## Rate Limits

### Response Headers

The response headers describe your current rate limit following every request in conformance with the [sixth IETF standard draft](https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-ratelimit-headers-06):

| Header name           | Description                                                         |
| --------------------- | ------------------------------------------------------------------- |
| `ratelimit-limit`     | Maximum number of requests allowed within a window.                 |
| `ratelimit-remaining` | How many requests you have left within the current window.          |
| `ratelimit-reset`     | How many seconds until the limits are reset.                        |
| `retry-after`         | How many seconds you should wait before making a follow-up request. |

The default maximum rate limit is **2 requests per second per team**. This limit applies across all API keys associated with your team. This number can be increased for trusted senders upon request. You can view your team's current rate limit on the [Settings Usage page](https://resend.com/settings/usage).

After that, you'll hit the rate limit and receive a `429` response error code. You can find all 429 responses by filtering for 429 at the [Resend Logs page](https://resend.com/logs?status=429).

To prevent this, we recommend reducing the rate at which you request the API. This can be done by introducing a queue mechanism or reducing the number of concurrent requests per second. If you have specific requirements, [contact support](https://resend.com/contact) to request a rate increase.

## Email Quotas

### Response Headers

In addition to rate limits, the API returns headers that track your email sending quotas:

| Header name              | Description                                                        |
| ------------------------ | ------------------------------------------------------------------ |
| `x-resend-daily-quota`   | Your used daily email sending quota. Only sent to free plan users. |
| `x-resend-monthly-quota` | Your used monthly email sending quota.                             |

These headers help you monitor your usage and avoid hitting quota limits.

When you exceed your quota limits, you'll receive a `429` response error code with one of the following error types:

- **`daily_quota_exceeded`** - You have reached your daily email quota. [Upgrade your plan](https://resend.com/settings/billing) to remove the daily quota limit or wait until 24 hours have passed.
- **`monthly_quota_exceeded`** - You have reached your monthly email quota. [Upgrade your plan](https://resend.com/settings/billing) to increase the monthly email quota.

Both sent and received emails count towards these quotas. See the full list of [error codes](/api-reference/errors) for more details.

## Contact Quotas

Contact quotas restrict the number of contacts you can store for marketing emails and broadcasts. You can add more contacts beyond your plan's limit, but you won't be able to send broadcasts until you upgrade your plan.

When you attempt to send a broadcast after reaching your contact limit, you'll receive a `403` response error code with a `validation_error` type and the message: "You have reached your contacts quota. Please upgrade your plan to send more emails."

To increase your contact limit, [upgrade your Marketing plan](https://resend.com/settings/billing).
