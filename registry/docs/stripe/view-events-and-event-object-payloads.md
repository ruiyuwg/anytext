# View events and event object payloads

View events triggered by your account and their event object payload in the Developers Dashboard.

> [Workbench](https://docs.stripe.com/workbench.md) replaces the Developers Dashboard, and we automatically enable it for all new Stripe accounts by default. Configure this setting from the [Developers](https://dashboard.stripe.com/settings/developers) settings in the Dashboard.
>
> Read about how to [view event activity](https://docs.stripe.com/workbench/overview.md#events) in Workbench.

When you send an API request, Stripe logs one or more events for your account. This page describes how to view events triggered by your account and their event object payload in the Developers Dashboard.

## How events are logged

This table describes the different ways Stripe logs an [Event](https://docs.stripe.com/api/events/types.md) for your account.

| Source    | Trigger                                                                          | Events                                                                             |
| --------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| API       | When user actions in your app or website result in an API call.                  | Logs one or more events on the [Events](https://dashboard.stripe.com/events) page. |
| Dashboard | When you call an API by modifying your Stripe resources in the Stripe Dashboard. | Logs one or more events on the [Events](https://dashboard.stripe.com/events) page. |
| API       | When you manually trigger an event with the Stripe CLI.                          | Logs one or more events on the [Events](https://dashboard.stripe.com/events) page. |
| API       | When you call an API directly with the Stripe CLI.                               | Logs one or more events on the [Events](https://dashboard.stripe.com/events) page. |

## Filter events

Use these steps to view events and their event object payload.

1. Open the [Events](https://dashboard.stripe.com/events) page.
2. To filter by event, click **Filter**, **Type**:
   - Enter an event name. For example, `payment_intent.created`.
   - Enter an event with the wild card character. For example, `payment_intent.*`.

## Next steps

- [Webhooks](https://docs.stripe.com/webhooks.md)
