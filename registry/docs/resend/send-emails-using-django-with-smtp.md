# Send emails using Django with SMTP

Source: https://resend.com/docs/send-with-django-smtp

Learn how to integrate Django with Resend SMTP.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)
- Install `virtualenv` by running `pip install virtualenv`

## 1. Setup your environment

Create and activate your new virtualenv.

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
virtualenv venv
source venv/bin/activate
```

Install dependencies.

```sh theme={"theme":{"light":"github-light","dark":"vesper"}}
pip install -r requirements.txt
```

Set your `RESEND_API_KEY` environment variable by running.

```sh theme={"theme":{"light":"github-light","dark":"vesper"}}
export RESEND_API_KEY="re_xxxxxxxxx"
```

## 2. Send email using Django's SMTP EmailMessage

Set the necessary attributes in your `settings.py` file.

```py theme={"theme":{"light":"github-light","dark":"vesper"}}
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
RESEND_SMTP_PORT = 587
RESEND_SMTP_USERNAME = 'resend'
RESEND_SMTP_HOST = 'smtp.resend.com'
```

Use Django's `get_connection` and `EmailMessage`

```py theme={"theme":{"light":"github-light","dark":"vesper"}}
import os
from django.conf import settings
from django.http import JsonResponse
from django.core.mail import EmailMessage, get_connection

# Sample Django view
def index(request):

    subject = "Hello from Django SMTP"
    recipient_list = ["delivered@resend.dev"]
    from_email = "onboarding@resend.dev"
    message = "<strong>it works!</strong>"

    with get_connection(
        host=settings.RESEND_SMTP_HOST,
        port=settings.RESEND_SMTP_PORT,
        username=settings.RESEND_SMTP_USERNAME,
        password=os.environ["RESEND_API_KEY"],
        use_tls=True,
        ) as connection:
            r = EmailMessage(
                  subject=subject,
                  body=message,
                  to=recipient_list,
                  from_email=from_email,
                  connection=connection).send()
    return JsonResponse({"status": "ok"})
```

## 3. Try it yourself

See the full source code.
