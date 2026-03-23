# email.bounced

Source: https://resend.com/docs/webhooks/emails/bounced

Received when an email bounces.

Event triggered whenever the recipient's mail server **permanently rejected the email**.

```
Unique identifier for the broadcast campaign (if applicable)



ISO 8601 timestamp when the email was created



Unique identifier for the specific email



Sender email address and name in the format "Name
\<[email@domain.com](mailto:email@domain.com)>"



Array of impacted recipient email addresses



Email subject line



Unique identifier for the template used (if applicable)
```

">
Object of tag key-value pairs associated with the email.

````
Example:

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "category": "welcome",
  "user_id": "1234567890"
}
```



Bounce details from the receiving server


  
    Array of SMTP diagnostic responses from the receiving server, including the status code and reason for the bounce (e.g., `smtp; 550 5.5.0 Requested action not taken: mailbox unavailable`)
  

  
    Detailed bounce message from the receiving server
  

  
    Bounce sub-type (e.g., `Suppressed`, `MessageRejected`)
  

  
    Bounce type (e.g., `Permanent`, `Temporary`)
  

  
    Learn more about [bounce types and subtypes](/dashboard/emails/email-bounces).
  
````

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "type": "email.bounced",
  "created_at": "2024-11-22T23:41:12.126Z",
  "data": {
    "broadcast_id": "8b146471-e88e-4322-86af-016cd36fd216",
    "created_at": "2024-11-22T23:41:11.894719+00:00",
    "email_id": "56761188-7520-42d8-8898-ff6fc54ce618",
    "from": "Acme <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"],
    "subject": "Sending this example",
    "template_id": "43f68331-0622-4e15-8202-246a0388854b",
    "bounce": {
      "message": "The recipient's email address is on the suppression list because it has a recent history of producing hard bounces.",
      "subType": "Suppressed",
      "type": "Permanent"
    },
    "tags": {
      "category": "confirm_email"
    }
  }
}
```

# email.clicked

Source: https://resend.com/docs/webhooks/emails/clicked

Received when an email link is clicked.

Event triggered whenever the **recipient clicks on an email link**.

```
Unique identifier for the broadcast campaign (if applicable)



ISO 8601 timestamp when the email was created



Unique identifier for the specific email



Sender email address and name in the format "Name
\<[email@domain.com](mailto:email@domain.com)>"



Array of impacted recipient email addresses



Email subject line



Unique identifier for the template used (if applicable)
```

">
Object of tag key-value pairs associated with the email.

````
Example:

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "category": "welcome",
  "user_id": "1234567890"
}
```



Click tracking details


  
    IP address of the user who clicked the link
  

  
    The URL that was clicked
  

  
    ISO 8601 timestamp when the click occurred
  

  
    User agent string of the browser that clicked the link
  
````

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "type": "email.clicked",
  "created_at": "2024-11-22T23:41:12.126Z",
  "data": {
    "broadcast_id": "8b146471-e88e-4322-86af-016cd36fd216",
    "created_at": "2024-11-22T23:41:11.894719+00:00",
    "email_id": "56761188-7520-42d8-8898-ff6fc54ce618",
    "from": "Acme <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"],
    "click": {
      "ipAddress": "122.115.53.11",
      "link": "https://resend.com",
      "timestamp": "2024-11-24T05:00:57.163Z",
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15"
    },
    "subject": "Sending this example",
    "template_id": "43f68331-0622-4e15-8202-246a0388854b",
    "tags": {
      "category": "confirm_email"
    }
  }
}
```

# email.complained

Source: https://resend.com/docs/webhooks/emails/complained

Received when an email is marked as spam.

Event triggered whenever the email was successfully **delivered, but the recipient marked it as spam**.

```
Unique identifier for the broadcast campaign (if applicable)



ISO 8601 timestamp when the email was created



Unique identifier for the specific email



Sender email address and name in the format "Name
\<[email@domain.com](mailto:email@domain.com)>"



Array of impacted recipient email addresses



Email subject line



Unique identifier for the template used (if applicable)
```

">
Object of tag key-value pairs associated with the email.

````
Example:

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "category": "welcome",
  "user_id": "1234567890"
}
```
````

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "type": "email.complained",
  "created_at": "2024-02-22T23:41:12.126Z",
  "data": {
    "broadcast_id": "8b146471-e88e-4322-86af-016cd36fd216",
    "created_at": "2024-02-22T23:41:11.894719+00:00",
    "email_id": "56761188-7520-42d8-8898-ff6fc54ce618",
    "from": "Acme <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"],
    "subject": "Sending this example",
    "template_id": "43f68331-0622-4e15-8202-246a0388854b",
    "tags": {
      "category": "confirm_email"
    }
  }
}
```

# email.delivered

Source: https://resend.com/docs/webhooks/emails/delivered

Received when an email is delivered.

Event triggered whenever Resend **successfully delivered the email** to the recipient's mail server.

Learn more about what to do [when an email is delivered, but the recipient
does not receive
it](/knowledge-base/what-if-an-email-says-delivered-but-the-recipient-has-not-received-it).

```
Unique identifier for the broadcast campaign (if applicable)



ISO 8601 timestamp when the email was created



Unique identifier for the specific email



Sender email address and name in the format "Name
\<[email@domain.com](mailto:email@domain.com)>"



Array of impacted recipient email addresses



Email subject line



Unique identifier for the template used (if applicable)
```

">
Object of tag key-value pairs associated with the email.

````
Example:

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "category": "welcome",
  "user_id": "1234567890"
}
```
````

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "type": "email.delivered",
  "created_at": "2024-02-22T23:41:12.126Z",
  "data": {
    "broadcast_id": "8b146471-e88e-4322-86af-016cd36fd216",
    "created_at": "2024-02-22T23:41:11.894719+00:00",
    "email_id": "56761188-7520-42d8-8898-ff6fc54ce618",
    "from": "Acme <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"],
    "subject": "Sending this example",
    "template_id": "43f68331-0622-4e15-8202-246a0388854b",
    "tags": {
      "category": "confirm_email"
    }
  }
}
```

# email.delivery\_delayed

Source: https://resend.com/docs/webhooks/emails/delivery-delayed

Received when an email delivery is delayed.

Event triggered whenever the **email couldn't be delivered due to a temporary issue**.

Delivery delays can occur, for example, when the recipient's inbox is full, or when the receiving email server experiences a transient issue.

```
Unique identifier for the broadcast campaign (if applicable)



ISO 8601 timestamp when the email was created



Unique identifier for the specific email



Sender email address and name in the format "Name
\<[email@domain.com](mailto:email@domain.com)>"



Array of impacted recipient email addresses



Email subject line



Unique identifier for the template used (if applicable)
```

">
Object of tag key-value pairs associated with the email.

````
Example:

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "category": "welcome",
  "user_id": "1234567890"
}
```
````

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "type": "email.delivery_delayed",
  "created_at": "2024-02-22T23:41:12.126Z",
  "data": {
    "broadcast_id": "8b146471-e88e-4322-86af-016cd36fd216",
    "created_at": "2024-02-22T23:41:11.894719+00:00",
    "email_id": "56761188-7520-42d8-8898-ff6fc54ce618",
    "from": "Acme <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"],
    "subject": "Sending this example",
    "template_id": "43f68331-0622-4e15-8202-246a0388854b",
    "tags": {
      "category": "confirm_email"
    }
  }
}
```

# email.failed

Source: https://resend.com/docs/webhooks/emails/failed

Received when an email fails to send.

Event triggered whenever the **email failed to send due to an error**.

This event is triggered when there are issues such as invalid recipients, API key problems, domain verification issues, email quota limits, or other sending failures.

```
Unique identifier for the broadcast campaign (if applicable)



ISO 8601 timestamp when the email was created



Unique identifier for the specific email



Sender email address and name in the format "Name
\<[email@domain.com](mailto:email@domain.com)>"



Array of impacted recipient email addresses



Email subject line



Unique identifier for the template used (if applicable)
```

">
Object of tag key-value pairs associated with the email.

````
Example:

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "category": "welcome",
  "user_id": "1234567890"
}
```



Failure details


  
    Reason for the email failure (e.g., `reached_daily_quota`)
  
````

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "type": "email.failed",
  "created_at": "2024-11-22T23:41:12.126Z",
  "data": {
    "broadcast_id": "8b146471-e88e-4322-86af-016cd36fd216",
    "created_at": "2024-11-22T23:41:11.894719+00:00",
    "email_id": "56761188-7520-42d8-8898-ff6fc54ce618",
    "from": "Acme <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"],
    "subject": "Sending this example",
    "template_id": "43f68331-0622-4e15-8202-246a0388854b",
    "failed": {
      "reason": "reached_daily_quota"
    },
    "tags": {
      "category": "confirm_email"
    }
  }
}
```

# email.opened

Source: https://resend.com/docs/webhooks/emails/opened

Received when an email is opened.

Event triggered whenever the **recipient opened the email**.

Open rates are not always accurate. Learn more about [why open rates may not
be accurate](/knowledge-base/why-are-my-open-rates-not-accurate).

```
Unique identifier for the broadcast campaign (if applicable)



ISO 8601 timestamp when the email was created



Unique identifier for the specific email



Sender email address and name in the format "Name
\<[email@domain.com](mailto:email@domain.com)>"



Array of impacted recipient email addresses



Email subject line



Unique identifier for the template used (if applicable)
```

">
Object of tag key-value pairs associated with the email.

````
Example:

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "category": "welcome",
  "user_id": "1234567890"
}
```
````

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "type": "email.opened",
  "created_at": "2024-02-22T23:41:12.126Z",
  "data": {
    "broadcast_id": "8b146471-e88e-4322-86af-016cd36fd216",
    "created_at": "2024-02-22T23:41:11.894719+00:00",
    "email_id": "56761188-7520-42d8-8898-ff6fc54ce618",
    "from": "Acme <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"],
    "subject": "Sending this example",
    "template_id": "43f68331-0622-4e15-8202-246a0388854b",
    "tags": {
      "category": "confirm_email"
    }
  }
}
```

# email.received

Source: https://resend.com/docs/webhooks/emails/received

Received when an inbound email is received.

Event triggered whenever Resend **successfully receives an email**.

Webhooks do not include the email body, headers, or attachments, only their
metadata. You must call the [Received emails
API](/api-reference/emails/retrieve-received-email) or the [Attachments
API](/api-reference/emails/list-received-email-attachments) to retrieve them.
This design choice supports large attachments in serverless environments that
have limited request body sizes.

```
Unique identifier for the broadcast campaign (if applicable)



ISO 8601 timestamp when the email was created



Unique identifier for the specific email



Sender email address and name in the format "Name
\<[email@domain.com](mailto:email@domain.com)>"



Array of impacted recipient email addresses



Email subject line



Unique identifier for the template used (if applicable)
```

">
Object of tag key-value pairs associated with the email.

````
Example:

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "category": "welcome",
  "user_id": "1234567890"
}
```
````

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "type": "email.received",
  "created_at": "2024-02-22T23:41:12.126Z",
  "data": {
    "email_id": "56761188-7520-42d8-8898-ff6fc54ce618",
    "created_at": "2024-02-22T23:41:11.894719+00:00",
    "from": "Acme <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"],
    "bcc": [],
    "cc": [],
    "message_id": "<example+123>",
    "subject": "Sending this example",
    "attachments": [
      {
        "id": "2a0c9ce0-3112-4728-976e-47ddcd16a318",
        "filename": "avatar.png",
        "content_type": "image/png",
        "content_disposition": "inline",
        "content_id": "img001"
      }
    ]
  }
}
```

# email.scheduled

Source: https://resend.com/docs/webhooks/emails/scheduled

Received when an email is scheduled to be sent.

Event triggered whenever the **email is scheduled to be sent**.

```
Unique identifier for the broadcast campaign (if applicable)



ISO 8601 timestamp when the email was created



Unique identifier for the specific email



Sender email address and name in the format "Name
\<[email@domain.com](mailto:email@domain.com)>"



Array of impacted recipient email addresses



Email subject line



Unique identifier for the template used (if applicable)
```

">
Object of tag key-value pairs associated with the email.

````
Example:

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "category": "welcome",
  "user_id": "1234567890"
}
```
````

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "type": "email.scheduled",
  "created_at": "2024-02-22T23:41:12.126Z",
  "data": {
    "broadcast_id": "8b146471-e88e-4322-86af-016cd36fd216",
    "created_at": "2024-02-22T23:41:11.894719+00:00",
    "email_id": "56761188-7520-42d8-8898-ff6fc54ce618",
    "from": "Acme <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"],
    "subject": "Sending this example",
    "template_id": "43f68331-0622-4e15-8202-246a0388854b",
    "tags": {
      "category": "confirm_email"
    }
  }
}
```

# email.sent

Source: https://resend.com/docs/webhooks/emails/sent

Received when an email is sent.

Event triggered whenever the **API request was successful**. Resend will attempt to deliver the message to the recipient's mail server.

```
Unique identifier for the broadcast campaign (if applicable)



ISO 8601 timestamp when the email was created



Unique identifier for the specific email



Sender email address and name in the format "Name
\<[email@domain.com](mailto:email@domain.com)>"



Array of impacted recipient email addresses



Email subject line



Unique identifier for the template used (if applicable)
```

">
Object of tag key-value pairs associated with the email.

````
Example:

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "category": "welcome",
  "user_id": "1234567890"
}
```
````

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "type": "email.sent",
  "created_at": "2024-02-22T23:41:12.126Z",
  "data": {
    "broadcast_id": "8b146471-e88e-4322-86af-016cd36fd216",
    "created_at": "2024-02-22T23:41:11.894719+00:00",
    "email_id": "56761188-7520-42d8-8898-ff6fc54ce618",
    "from": "Acme <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"],
    "subject": "Sending this example",
    "template_id": "43f68331-0622-4e15-8202-246a0388854b",
    "tags": {
      "category": "confirm_email"
    }
  }
}
```

# email.suppressed

Source: https://resend.com/docs/webhooks/emails/suppressed

Received when an email is suppressed.

Event triggered whenever the **email is suppressed** by Resend.

Learn more about [suppressed
emails](/knowledge-base/why-are-my-emails-landing-on-the-suppression-list).

```
Unique identifier for the broadcast campaign (if applicable)



ISO 8601 timestamp when the email was created



Unique identifier for the specific email



Sender email address and name in the format "Name
\<[email@domain.com](mailto:email@domain.com)>"



Array of impacted recipient email addresses



Email subject line



Unique identifier for the template used (if applicable)
```

">
Object of tag key-value pairs associated with the email.

````
Example:

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "category": "welcome",
  "user_id": "1234567890"
}
```
````

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "type": "email.suppressed",
  "created_at": "2024-11-22T23:41:12.126Z",
  "data": {
    "broadcast_id": "8b146471-e88e-4322-86af-016cd36fd216",
    "created_at": "2024-11-22T23:41:11.894719+00:00",
    "email_id": "56761188-7520-42d8-8898-ff6fc54ce618",
    "from": "Acme <onboarding@resend.dev>",
    "to": ["delivered@resend.dev"],
    "subject": "Sending this example",
    "template_id": "43f68331-0622-4e15-8202-246a0388854b",
    "suppressed": {
      "message": "Resend has suppressed sending to this address because it is on the account-level suppression list. This does not count toward your bounce rate metric",
      "type": "OnAccountSuppressionList"
    },
    "tags": {
      "category": "confirm_email"
    }
  }
}
```
