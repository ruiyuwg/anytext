# Send emails with Django

Source: https://resend.com/docs/send-with-django

Learn how to send your first email using Django and the Resend Python SDK.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## 1. Install

Get the [django-anymail](https://anymail.dev/en/stable/esps/resend/) package with Resend support.

```bash Pip theme={"theme":{"light":"github-light","dark":"vesper"}}
pip install django-anymail[resend]
```

## 2. Configure

Add Anymail to your Django settings.

```py settings.py theme={"theme":{"light":"github-light","dark":"vesper"}}
import os

INSTALLED_APPS = [
    # ...
    "anymail",
]

EMAIL_BACKEND = "anymail.backends.resend.EmailBackend"
ANYMAIL = {
    "RESEND_API_KEY": os.environ.get("RESEND_API_KEY"),
}
DEFAULT_FROM_EMAIL = "onboarding@resend.dev"
```

## 3. Send email using HTML

The easiest way to send an email is by using the `html_message` parameter.

```py views.py theme={"theme":{"light":"github-light","dark":"vesper"}}
from django.core.mail import send_mail
from django.http import JsonResponse

def send_email(request):
    send_mail(
        subject="Hello from Django + Resend",
        message="This is a plain text message.",
        from_email="Acme <onboarding@resend.dev>",
        recipient_list=["delivered@resend.dev"],
        html_message="<strong>it works!</strong>",
    )

    return JsonResponse({"message": "Email sent successfully"})
```

## 4. Send email using a template

For more complex emails, you can use Django's template system.

First, create an HTML template at `templates/emails/welcome.html`:

```html templates/emails/welcome.html theme={"theme":{"light":"github-light","dark":"vesper"}}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Welcome Email</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h1>Welcome, {{ user_name }}!</h1>
    <p>Thank you for joining our service.</p>
    <p>Your account email: <strong>{{ user_email }}</strong></p>
    <p>
      <a
        href="{{ dashboard_url }}"
        style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;"
      >
        Go to Dashboard
      </a>
    </p>
  </body>
</html>
```

Then render and send the template:

```py views.py theme={"theme":{"light":"github-light","dark":"vesper"}}
from django.core.mail import EmailMessage
from django.http import JsonResponse
from django.template.loader import render_to_string

def send_template_email(request):
    html_content = render_to_string('emails/welcome.html', {
        'user_name': 'Django Developer',
        'user_email': 'delivered@resend.dev',
        'dashboard_url': 'https://example.com/dashboard',
    })

    message = EmailMessage(
        subject="Welcome to Our Service!",
        body=html_content,
        from_email="Acme <onboarding@resend.dev>",
        to=["delivered@resend.dev"],
    )
    message.content_subtype = "html"
    message.send()

    return JsonResponse({"message": "Email sent successfully"})
```

## 5. Try it yourself

```
Full Django web application



Basic email sending



Send emails with file attachments



Send emails using Resend hosted templates



Schedule emails for future delivery



Manage contacts and audiences



Create and manage sending domains



Receive and process inbound emails



Double opt-in subscription flow
```
