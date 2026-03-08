# Send emails with Symfony

Source: https://resend.com/docs/send-with-symfony

Learn how to send your first email using the Symfony Resend Mailer Bridge.

## Prerequisites

To get the most out of this guide, you will need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## 1. Install

Get the Resend Mailer Bridge package.

```bash Composer theme={"theme":{"light":"github-light","dark":"vesper"}}
composer require symfony/resend-mailer
```

If your application relies on Resend webhook events, you should also install the Symfony Webhook Component.

```bash Composer theme={"theme":{"light":"github-light","dark":"vesper"}}
composer require symfony/webhook
```

## 2. Configuring Mailer

In your `.env.local` file, which you can create if needed, add the following:

```sh theme={"theme":{"light":"github-light","dark":"vesper"}}
MAILER_DSN=resend+api://API_KEY@default
MAILER_RESEND_SECRET=SIGNING_SECRET
```

Replace `API_KEY` with your Resend API key, and `SIGNING_SECRET` with your webhook secret, which can be retrieved from the Resend dashboard after creating a new webhook endpoint (see below).

## 3. Send your first email

In a controller, inject the `Mailer`:

```php theme={"theme":{"light":"github-light","dark":"vesper"}}
public function __construct(
    private readonly MailerInterface $mailer,
) {
}
```

In a controller action, use the `$this->mailer` to send your email:

```php theme={"theme":{"light":"github-light","dark":"vesper"}}
$this->mailer->send(
    (new Email())
        ->from('Acme <onboarding@resend.dev>')
        ->to('delivered@resend.dev')
        ->subject('Hello world')
        ->html('<strong>it works!</strong>')
);
```

Learn more about sending emails with Mailer Component in [Symfony's documentation](https://symfony.com/doc/current/mailer.html#creating-sending-messages).

## 4. Receive and handle webhooks

Thanks to the Webhook Component, you can create a webhook listener.

```php src/Webhook/ResendWebhookListener.php theme={"theme":{"light":"github-light","dark":"vesper"}}
#[AsRemoteEventConsumer('mailer_resend')]
readonly class ResendWebhookListener implements ConsumerInterface
{
    public function __construct(
        #[Autowire(param: 'kernel.project_dir')] private string $projectDir,
    ) {
    }

    public function consume(RemoteEvent $event): void
    {
        if ($event instanceof MailerDeliveryEvent) {
            $this->handleMailDelivery($event);
        } elseif ($event instanceof MailerEngagementEvent) {
            $this->handleMailEngagement($event);
        } else {
            // This is not an email event
            return;
        }
    }

    private function handleMailDelivery(MailerDeliveryEvent $event): void
    {
        // Todo
    }

    private function handleMailEngagement(MailerEngagementEvent $event): void
    {
        // Todo
    }
}
```

Bind your listener to the Webhook routing config:

```yaml config/packages/webhook.yaml theme={"theme":{"light":"github-light","dark":"vesper"}}
framework:
  webhook:
    routing:
      mailer_resend:
        service: 'mailer.webhook.request_parser.resend'
        secret: '%env(MAILER_RESEND_SECRET)%'
```

Next, register your application's webhook endpoint URL (example: `https://{app_domain}/webhook/mailer_resend`) in the [Resend Dashboard](https://resend.com/webhooks):

## 5. Try it yourself

```
Full Symfony web application



Basic, batch, and prevent-threading send



File attachments and inline images (CID)



Schedule emails for future delivery



Send emails using Resend hosted templates



Double opt-in subscription flow



Receive and process inbound emails



Manage contacts and audiences



Create and manage sending domains
```

# Send emails with Vercel Functions

Source: https://resend.com/docs/send-with-vercel-functions

Learn how to send your first email using Vercel Functions.
