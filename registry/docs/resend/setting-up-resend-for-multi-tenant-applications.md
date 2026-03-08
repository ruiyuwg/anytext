# Setting up Resend for Multi-Tenant Applications

Source: https://resend.com/docs/knowledge-base/setting-up-resend-for-multi-tenants

Learn how to configure Resend for SaaS platforms where tenants send emails from their own domains.

Many SaaS platforms need to send emails on behalf of their tenants: whether it's transactional notifications, onboarding sequences, or marketing campaigns from a tenant's own domain. This guide walks through the two main approaches to configuring Resend for multi-tenant email sending.

There is no single "right" approach. Both options described below are valid
and widely used. The best choice depends on your product's requirements, how
much control you want over the sending experience, and your tenants' needs.

## At a glance

| Factor                   | Single Account                                | Separate Accounts / BYOK                   |
| ------------------------ | --------------------------------------------- | ------------------------------------------ |
| **Setup complexity**     | Low: fully API-driven                         | Higher: manual account creation per tenant |
| **Sending isolation**    | Shared: one bad actor affects all             | Full: each tenant is isolated              |
| **Billing**              | Single plan covers all tenants                | Each tenant manages their own plan         |
| **Per-tenant analytics** | Not available natively                        | Each tenant has own dashboard              |
| **Webhook routing**      | Via tags or `from` domain                     | Each account has its own webhooks          |
| **Deliverability**       | Shared sender reputation                      | Independent sender reputation              |
| **Rate limits**          | Aggregate volume: likely requires an increase | Each tenant uses their own limits          |
| **Troubleshooting**      | Full visibility into all tenant emails        | Requires access to tenant's account        |

## Option A: Single Resend account

### How it works

In this approach, you manage everything from a single Resend account. You add each tenant's domain to your account, verify it, and create domain-scoped API keys so that each tenant can only send from their own domain. All sending, billing, and analytics flow through your account.

### Setting up a tenant domain

When a tenant signs up and wants to send from their own domain, you create and verify the domain via the API.

```ts theme={"theme":{"light":"github-light","dark":"vesper"}}
const domain = await resend.domains.create({ name: 'tenant-domain.com' });

// After the tenant adds DNS records, trigger verification
await resend.domains.verify(domain.id);
```

Domain verification is asynchronous: DNS records need to propagate before
verification succeeds. You can use [webhooks](/webhooks/introduction) to
listen for `domain.verified` events instead of polling.

### Creating a domain-scoped API key

Once the domain is verified, create an API key scoped to that domain. This ensures the tenant can only send from their own domain.

```ts theme={"theme":{"light":"github-light","dark":"vesper"}}
const apiKey = await resend.apiKeys.create({
  name: 'Tenant: tenant-domain.com',
  permission: 'sending_access',
  domain_id: domain.id,
});
```

The API key token is only returned once at creation time. Store it securely:
you will not be able to retrieve it again.

### Pros

- Seamless, fully API-driven setup: no manual steps required
- Domain-scoped API keys limit each tenant to their own domain
- Single account to manage billing, monitoring, and configuration

### Cons

- No per-tenant volume breakdown or analytics in the dashboard
- All tenants share your account's sender reputation
- Aggregate sending volume will likely require a [rate-limit increase](/knowledge-base/account-quotas-and-limits) as you onboard tenants

  If one tenant engages in poor sending practices (spam, high bounce rates), it
  can affect deliverability for all tenants on your account. In severe cases,
  the entire account may be suspended.

## Option B: Separate accounts (BYOK)

### How it works

In the Bring Your Own Key (BYOK) model, each tenant creates their own Resend account, adds their domain, and provides you with their API key. Your application stores each tenant's API key and uses it when sending on their behalf.

```ts theme={"theme":{"light":"github-light","dark":"vesper"}}
// Initialize a Resend client with the tenant's own API key
const resend = new Resend(tenantApiKey);

await resend.emails.send({
  from: 'notifications@tenant-domain.com',
  to: 'user@example.com',
  subject: 'Your order has shipped',
  html: '<p>Your order #1234 is on its way.</p>',
});
```

### Pros

- Full sending isolation: each tenant's reputation and deliverability are independent
- No liability for tenant sending behavior on your account
- Tenants who already use Resend can reuse their existing account
- Each tenant has their own dashboard with analytics and logs
- Each tenant uses their own rate limits, so you're less likely to need increases

### Cons

- Requires each tenant to create a Resend account and manage their own plan
- More onboarding friction for tenants unfamiliar with email infrastructure

  Team creation is not currently available via the API. Each tenant will need to
  create their Resend account manually through the
  [dashboard](https://resend.com/signup).

## Billing implications

With **Option A**, you pay a single plan that covers all tenant sending volume. Your total email count is the aggregate of all tenants' emails, so choose a plan that accommodates your combined volume.

With **Option B**, each tenant is responsible for their own Resend plan and billing. This removes billing complexity from your side but means tenants need to manage their own subscription. See [Resend pricing](/knowledge-base/what-is-resend-pricing) and [account quotas and limits](/knowledge-base/account-quotas-and-limits) for details.

## Deliverability considerations

Sender reputation is tied to the sending account and its associated domains and IPs. This is the most important distinction between the two approaches.

With **Option A**, all tenants share the same sender reputation. If a single tenant sends to stale lists, generates high bounce rates, or triggers spam complaints, it can degrade deliverability for every tenant on your account. In the worst case, your entire account could be suspended.

With **Option B**, each tenant has a fully independent sender reputation. A problem with one tenant has zero impact on others. However, each tenant is responsible for following best practices on their own.

Regardless of which approach you choose, each new tenant domain should follow a [warm-up schedule](/knowledge-base/warming-up). Using a [subdomain](/knowledge-base/is-it-better-to-send-emails-from-a-subdomain-or-the-root-domain) for sending is also a good practice to protect the tenant's root domain reputation.

## Webhook routing

### Option A: Tags for tenant identification

When using a single account, use [tags](/dashboard/emails/tags) when sending emails to identify which tenant triggered the message. Tags are included in webhook payloads, making it easy to route events back to the correct tenant.

```ts theme={"theme":{"light":"github-light","dark":"vesper"}}
await resend.emails.send({
  from: 'notifications@tenant-domain.com',
  to: 'user@example.com',
  subject: 'Welcome aboard',
  html: '<p>Thanks for signing up.</p>',
  tags: [{ name: 'tenant_id', value: 'tenant_abc123' }],
});
```

When you receive a [webhook](/webhooks/introduction) event, the `tags` array in the payload will include `tenant_id`, allowing you to route the event to the appropriate tenant in your system.

### Option B: Natural isolation

With separate accounts, each tenant configures their own webhooks in their Resend dashboard. Events are naturally isolated: you don't need to tag or filter anything.

## Migrating between approaches

If your needs change, you can migrate from one approach to the other.

**A to B (Single Account → Separate Accounts):**

- Each tenant creates their own Resend account
- Tenants add and verify their domains in their new accounts
- You replace the shared API key with each tenant's individual key in your application
- Remove the tenant domains from your original account

**B to A (Separate Accounts → Single Account):**

- Add each tenant's domain to your central account and verify DNS records
- Create domain-scoped API keys for each tenant
- Update your application to use the new keys
- Tenants can deactivate their individual accounts

  When moving a domain between accounts, it will need to be deleted from the
  original account before being re-verified in the second account. Plan for
  potential sending interruptions during the DNS propagation window.

## We want your feedback

Multi-tenant email is a complex space, and we're always looking to make it easier. If you're building a multi-tenant application and have feedback on your experience, we'd love to hear from you.

We're tracking interest for improved multi-tenant capabilities. Share your use
case at <support@resend.com>.

## Related resources

```
Add and verify tenant domains programmatically.



Create domain-scoped API keys for tenant isolation.



Set up webhooks to receive real-time email event notifications.



Use tags to organize emails and route webhook events by tenant.
```

# Should I add an unsubscribe link to all of my emails sent with Resend?

Source: https://resend.com/docs/knowledge-base/should-i-add-an-unsubscribe-link

Learn best practices about using unsubscribe links.

Transactional emails are generally exempt from including an unsubscribe link. Unlike marketing emails, transactional emails serve a functional purpose, such as account confirmation, password resets, and order confirmations.

As a best practice, we recommend telling recipients how to opt out of receiving future email from you if the content is more related to nurturing relationships with your customers, rather than pragmatic, action-oriented emails.

Laws enforced by the FTC and GDPR prioritize giving recipients an easy way to give and withdraw their consent to receiving email marketing content. Additionally, not having an option for opting out of emails risks recipients complaining or marking the email as spam, which can hurt your reputation as a sender.

Here is more on how to [manually add and manage unsubscribe links](https://resend.com/docs/dashboard/emails/add-unsubscribe-to-transactional-emails).

If you're using [Resend Broadcasts](https://resend.com/docs/dashboard/audiences/managing-unsubscribe-list), the unsubscribe headers are added automatically to your emails. You can include the Unsubscribe Footer in your Broadcasts, which will be automatically replaced with the correct link for each contact or use `{{{RESEND_UNSUBSCRIBE_URL}}}` as a link target should you want to customize the unsubscribe footer.
