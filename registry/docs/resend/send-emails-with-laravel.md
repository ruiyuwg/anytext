# Send emails with Laravel

Source: https://resend.com/docs/send-with-laravel

Learn how to send your first email using Laravel.

## Prerequisites

To get the most out of this guide, you will need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

Prefer watching a video? Check out this video walkthrough below.

## 1. Install

First, install Resend for Laravel using the Composer package manager:

```bash Composer theme={"theme":{"light":"github-light","dark":"vesper"}}
composer require resend/resend-laravel
```

## 2. Configuration

### API key

Next, you should configure your Resend API key in your application's `.env` file:

```ini .env theme={"theme":{"light":"github-light","dark":"vesper"}}
RESEND_API_KEY=re_xxxxxxxxx
```

If you've upgraded your Laravel project from an older version (pre-5.5) and haven't enabled auto service provider discovery, you'll need to manually register the Resend service provider. Add the provider to the `providers` array in your `config/app.php` file:

```php config/app.php theme={"theme":{"light":"github-light","dark":"vesper"}}
'providers' => [
    // ... other providers
    Resend\Laravel\ResendServiceProvider::class,
],
```

Without this registration, the Facade may reference the core Resend PHP client instead of the Resend Laravel library, causing unexpected behavior.

### Mail driver

To use Resend as your mail driver, first create a new mailer definition, in the `mailers` array within your application's `config/mail.php` configuration file:

```php mail.php theme={"theme":{"light":"github-light","dark":"vesper"}}
'resend' => [
    'transport' => 'resend',
],
```

Next, update your application's `.env` file to use the Resend mail driver:

```ini .env theme={"theme":{"light":"github-light","dark":"vesper"}}
MAIL_MAILER=resend
MAIL_FROM_ADDRESS=onboarding@resend.dev
MAIL_FROM_NAME=Acme
```

## 3. Send an email

Resend for Laravel provides two convenient ways to send emails, using Laravel's email service or the `Resend` API facade.

### Using the Mail Facade

```php OrderShipmentController.php theme={"theme":{"light":"github-light","dark":"vesper"}}
<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\OrderShipped;
use App\Models\Order;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class OrderShipmentController extends Controller
{
    /**
     * Ship the given order.
     */
    public function store(Request $request): RedirectResponse
    {
        $order = Order::findOrFail($request->order_id);

        // Ship the order...

        Mail::to($request->user())->send(new OrderShipped($order));

        return redirect('/orders');
    }
}
```

### Using the Resend Facade

```php OrderShipmentController.php theme={"theme":{"light":"github-light","dark":"vesper"}}
<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\OrderShipped;
use App\Models\Order;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Resend\Laravel\Facades\Resend;

class OrderShipmentController extends Controller
{
    /**
     * Ship the given order.
     */
    public function store(Request $request): RedirectResponse
    {
        $order = Order::findOrFail($request->order_id);

        // Ship the order...

        Resend::emails()->send([
            'from' => 'Acme <onboarding@resend.dev>',
            'to' => [$request->user()->email],
            'subject' => 'hello world',
            'html' => (new OrderShipped($order))->render(),
        ])

        return redirect('/orders');
    }
}
```

## 4. Receiving webhook requests

By default, Resend for Laravel includes a webhook controller to respond to the `/resend/webhook` URL path. The controller will dispatch a Laravel event that corresponds to a Resend event. For example, an `email.delivered` event type will send an `EmailDelivered` Laravel event.

### Register the webhook endpoint

Register your publicly accessible HTTPS URL in the Resend dashboard.

For development, you can create a tunnel to your localhost server using a tool like
[ngrok](https://ngrok.com/download) or [VS Code Port Forwarding](https://code.visualstudio.com/docs/debugtest/port-forwarding). These tools serve your local dev environment at a public URL you can use to test your local webhook endpoint.

Example: `https://example123.ngrok.io/api/webhook`

### CSRF protection

Webhook requests from Resend need to bypass Laravel's CSRF protection. Be sure to list the URI as an exception in your application's `App\Http\Middleware\VerifyCsrfToken` middleware or list the route outside of the web middleware group:

```php theme={"theme":{"light":"github-light","dark":"vesper"}}
protected $except = [
    'resend/*',
];
```

### Verifying webhook signatures

To enable webhook verification, ensure that the `RESEND_WEBHOOK_SECRET` environment variable is set in your application's `.env` file. The **Signing secret** can be retrieved from your [Resend dashboard](https://resend.com/webhooks).

## 5. Try it yourself

```
Basic, scheduled, attachments, CID, templates, and prevent threading



Handle webhook events



Receive and process inbound emails



Double opt-in subscription flow



Manage contacts and audiences



Create and manage sending domains
```

# Send emails using Laravel with SMTP

Source: https://resend.com/docs/send-with-laravel-smtp

Learn how to send your first email using Laravel with SMTP.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## 1. Setup your environment

First, configure your Resend SMTP details in your application's `.env` file:

```ini .env theme={"theme":{"light":"github-light","dark":"vesper"}}
MAIL_MAILER=smtp
MAIL_HOST=smtp.resend.com
MAIL_PORT=587
MAIL_USERNAME=resend
MAIL_PASSWORD=re_xxxxxxxxx
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=onboarding@resend.dev
MAIL_FROM_NAME=Acme
```

## 2. Send an email

Now you're ready to send emails with Laravel's powerful email service. Here's an example of how you could send your first email using Resend SMTP:

```php OrderShipmentController.php theme={"theme":{"light":"github-light","dark":"vesper"}}
<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\OrderShipped;
use App\Models\Order;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class OrderShipmentController extends Controller
{
    /**
     * Ship the given order.
     */
    public function store(Request $request): RedirectResponse
    {
        $order = Order::findOrFail($request->order_id);

        // Ship the order...

        Mail::to($request->user())->send(new OrderShipped($order));

        return redirect('/orders');
    }
}
```

## 3. Try it yourself

```
Basic, scheduled, attachments, CID, templates, and prevent threading



Handle webhook events



Double opt-in subscription flow



Manage contacts and audiences



Create and manage sending domains
```

# Send emails using Liferay with SMTP

Source: https://resend.com/docs/send-with-liferay-smtp

Learn how to integrate Liferay with Resend SMTP.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## 1. Get the Resend SMTP credentials

When configuring your SMTP integration, you'll need to use the following credentials:

- **Host**: `smtp.resend.com`
- **Port**: `465`
- **Username**: `resend`
- **Password**: `YOUR_API_KEY`

## 2. Integrate with Liferay

After logging into your Liferay instance as the admin user, you'll need to enable the SMTP integration.

1. Navigate to **Control Panel** → **Server Administration** → **Mail**.

2. Copy-and-paste the SMTP credentials from Resend to Liferay.

- **Outgoing SMTP Server**: `smtp.resend.com`
- **Outgoing Port**: `465`
- **Enable StartTLS**: `True`
- **User Name**: `resend`
- **Password**: `YOUR_API_KEY`

Make sure to replace `YOUR_API_KEY` with an existing key or create a new [API Key](https://resend.com/api-keys).

For the additional JavaMail properties, you can use:

```
mail.smtp.auth=true
mail.smtp.starttls.enable=true
mail.smtp.starttls.required=true
```

# Send emails using Metabase with SMTP

Source: https://resend.com/docs/send-with-metabase-smtp

Learn how to integrate Metabase with Resend SMTP.

### Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## 1. Get the Resend SMTP credentials

When configuring your SMTP integration, you'll need to use the following credentials:

- **Host**: `smtp.resend.com`
- **Port**: `465`
- **Username**: `resend`
- **Password**: `YOUR_API_KEY`

## 2. Integrate with Metabase SMTP

After logging into your [Metabase Cloud](https://www.metabase.com/cloud/login) account, you’ll need to enable the SMTP integration.

1. From your Metabase Cloud Admin Panel, go to **Settings > Email** in the left menu. You should see the form below.

2. Copy-and-paste the SMTP credentials from Resend to Metabase Cloud. Finally, click the **Save** button and all of your emails will be sent through Resend.
