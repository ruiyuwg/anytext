# Event Types

Source: https://resend.com/docs/webhooks/event-types

List of supported event types and their payload.

## Email Events

```
  [`email.bounced`](/webhooks/emails/bounced)



  Occurs whenever the recipient's mail server **permanently rejected the
  email**.





  

  [`email.clicked`](/webhooks/emails/clicked)



  Occurs whenever the **recipient clicks on an email link**.





  

  [`email.complained`](/webhooks/emails/complained)



  Occurs whenever the email was successfully **delivered, but the recipient
  marked it as spam**.





  

  [`email.delivered`](/webhooks/emails/delivered)



  Occurs whenever Resend **successfully delivered the email** to the
  recipient's mail server.





  

  [`email.delivery_delayed`](/webhooks/emails/delivery-delayed)



  Occurs whenever the **email couldn't be delivered due to a temporary
  issue**. Delivery delays can occur, for example, when the recipient's
  inbox is full, or when the receiving email server experiences a transient
  issue.





  

  [`email.failed`](/webhooks/emails/failed)



  Occurs whenever the **email failed to send due to an error**. This event
  is triggered when there are issues such as invalid recipients, API key
  problems, domain verification issues, email quota limits, or other sending
  failures.





  

  [`email.opened`](/webhooks/emails/opened)



  Occurs whenever the **recipient opened the email**.





  

  [`email.received`](/webhooks/emails/received)



  Occurs whenever Resend **successfully receives an email**.





  

  [`email.scheduled`](/webhooks/emails/scheduled)



  Occurs whenever the **email is scheduled to be sent**.





  

  [`email.sent`](/webhooks/emails/sent)



  Occurs whenever the **API request was successful**. Resend will attempt to
  deliver the message to the recipient's mail server.





  

  [`email.suppressed`](/webhooks/emails/suppressed)



  Occurs whenever the **email is suppressed** by Resend.
```

## Domain Events

```
  [`domain.created`](/webhooks/domains/created)



  Occurs when a **domain was successfully created**.





  

  [`domain.updated`](/webhooks/domains/updated)



  Occurs when a **domain was successfully updated**.





  

  [`domain.deleted`](/webhooks/domains/deleted)



  Occurs when a **domain was successfully deleted**.
```

## Contact Events

```
  [`contact.created`](/webhooks/contacts/created)



  Occurs whenever a **contact was successfully created**.



  *Note: When importing multiple contacts using CSV, these events won't be
  triggered. [Contact support](https://resend.com/contact) if you have any
  questions.*





  

  [`contact.updated`](/webhooks/contacts/updated)



  Occurs whenever a **contact was successfully updated**.





  

  [`contact.deleted`](/webhooks/contacts/deleted)



  Occurs whenever a **contact was successfully deleted**.
```
