# domain.deleted

Source: https://resend.com/docs/webhooks/domains/deleted

Received when a domain is deleted.

Event triggered when a **domain was successfully deleted**.

If you're having issues verifying your domain, [review our guide on a domain
not verifying](/knowledge-base/what-if-my-domain-is-not-verifying) for
troubleshooting steps.

```
Unique identifier for the domain



Domain name (e.g., `example.com`)



Current verification status of the domain:

* `verified`: The domain is verified and can be used to send or receive emails.
* `partially_verified`: One capability (send or receive) is verified while the other is still pending verification.
* `partially_failed`: The domain is verified but one of the features (send or receive) is not verified.
* `pending`: The domain is pending verification and cannot be used to send or receive emails.
* `not_started`: Verification has not started yet, so the domain cannot be used to send or receive emails.
* `failed`: The domain failed verification.


  The `data.status` field represents an aggregated status of the domain. For
  domains that can both [send](/dashboard/emails/introduction) and
  [receive](/dashboard/receiving/introduction) emails, the status may be
  `partially_verified` (one capability verified, the other pending) or
  `partially_failed` (one capability verified, the other failed).




ISO 8601 timestamp when the domain was created



AWS region where the domain is configured.



Array of DNS record objects required for domain verification


  
    Record type purpose. Learn more about [domain verification records](/dashboard/domains/introduction).
  

  
    DNS record name/subdomain
  

  
    DNS record type
  

  
    DNS record value to be set
  

  
    Time to live for the DNS record
  

  
    Verification status of this specific record
  

  
    Priority value for MX records (optional)
  
```

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "type": "domain.deleted",
  "created_at": "2024-11-17T19:32:22.980Z",
  "data": {
    "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
    "name": "example.com",
    "status": "not_started",
    "created_at": "2024-04-26T20:21:26.347412+00:00",
    "region": "us-east-1",
    "records": [
      {
        "record": "SPF",
        "name": "send",
        "type": "MX",
        "ttl": "Auto",
        "status": "not_started",
        "value": "feedback-smtp.us-east-1.amazonses.com",
        "priority": 10
      },
      {
        "record": "SPF",
        "name": "send",
        "value": "\"v=spf1 include:amazonses.com ~all\"",
        "type": "TXT",
        "ttl": "Auto",
        "status": "not_started"
      },
      {
        "record": "DKIM",
        "name": "resend._domainkey",
        "value": "p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDsc4Lh8xilsngyKEgN2S84+21gn+x6SEXtjWvPiAAmnmggr5FWG42WnqczpzQ/mNblqHz4CDwUum6LtY6SdoOlDmrhvp5khA3cd661W9FlK3yp7+jVACQElS7d9O6jv8VsBbVg4COess3gyLE5RyxqF1vYsrEXqyM8TBz1n5AGkQIDAQA2",
        "type": "TXT",
        "status": "not_started",
        "ttl": "Auto"
      }
    ]
  }
}
```
