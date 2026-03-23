# Implementing DMARC

Source: https://resend.com/docs/dashboard/domains/dmarc

Implement DMARC to build trust in your domain and protect against email spoofing and unauthorized use of your domain in email messages.

## Prerequisites

Since DMARC relies on DKIM and SPF, first ensure your existing emails are passing SPF and DKIM.

- DKIM verifies the email wasn't altered in transit using cryptographic authentication.
- SPF authorizes IP addresses to send email for a domain.

If you have a [verified](/dashboard/domains/introduction) domain with Resend, it means you are already passing SPF and DKIM.

For more details on understanding DMARC reports, see our [guide on how to read
a DMARC report](https://resend.com/blog/how-to-read-a-dmarc-report). You can
also use Resend's [DMARC analyzer](/dmarc-analyzer) to visualize your DMARC
reports.

## What is DMARC?

DMARC ([Domain-based Message Authentication, Reporting, and Conformance](https://dmarc.org/overview/)) is an email authentication protocol that instructs mail servers what to do if an email message fails SPF and DKIM, preventing email spoofing (forged headers). DMARC is added to a domain through a TXT record added to the domain at `_dmarc`.

By preventing spoofing, a domain can build trust with mailbox providers, as it allows them to verify that emails are authorized to send on behalf of that domain.

An email must pass either SPF or DKIM checks (but not necessarily both) to achieve DMARC compliance and be considered authenticated. A message fails DMARC if both SPF and DKIM fail on the message.

## Implementing DMARC

### 1. Add a TXT `_dmarc` Record

To start, add a flexible DMARC record to your domain.

| Name                | Type | Value                                                       |
| ------------------- | ---- | ----------------------------------------------------------- |
| \_dmarc.example.com | TXT  | `v=DMARC1; p=none; rua=mailto:dmarcreports@yourdomain.com;` |

This record is specifying a few parameters (see [Reference](#reference) section for more details):

- `v` - Version:
  This is the version of DMARC
- `p` - Policy:
  This is telling the inbox how to process messages that fail DMARC. Options are `none`, `quarantine`, `reject`. It's a best practice to use `quarantine` or `reject`, but you should only do it once you know your messages are delivering and fully passing DMARC.
- `rua` - Reporting URI of Aggregate:
  Provide a **valid address** that can receive email. The address can be a different domain than the one on which you set the DMARC policy. The aggregate report comes as an email with a `.xml` file attached that shares the IP sources of your messages and if they passed SPF or DKIM.

To ensure you don't accidentally introduce breaking changes to your email sending, we suggest starting with a policy of `p=none;` before moving to a stricter policy.

### 2. Test to Confirm Delivery and Passing

To test emails, send an email from all the applications and services your domain uses. Confirm that the messages are delivered to the inbox and that the headers show DMARC passing. Spending a few at this step is a good rule of thumb to ensure you're checking all sources of email from your domain and catch email that is sent at a different cadence than daily.

To confirm DMARC passed, you can inspect the email headers and confirm there is `dmarc=pass`.

Gradually identify email sources using tools like [Google Postmaster
Tools](https://gmail.com/postmaster/), which provides DKIM/SPF feedback.
[DMARC monitoring
services](https://dmarc.org/resources/products-and-services/) can aggregate
your email sources by collecting DMARC reports, helping you discover any
services sending email on your domain's behalf.

### 3. Upgrade Policy

Once you have verified DMARC is passing across all your sending, you should upgrade your Policy to `p=quarantine;`. This policy gives mailbox providers greater confidence in your domain since your domain only allows authenticated email.

| Policy        | Value                                            |
| ------------- | ------------------------------------------------ |
| p=none;       | Allow all email. Monitoring for DMARC failures.  |
| p=quarantine; | Send messages that fail DMARC to the spam folder |
| p=reject;     | Bounce delivery of emails that fail DMARC.       |

Once your policy is `p=quarantine;` or `p=reject;` you can explore setting up [BIMI](/dashboard/domains/bimi), which can provide established brands even greater sending credibility by displaying a logo as an avatar in an email client.

## Reference

While the DMARC protocol includes both `pct` and `ruf` parameters, they are
not widely followed by mailbox providers. These settings may not be respected
or followed.

| Parameter | Purpose                                       | Example                           |
| --------- | --------------------------------------------- | --------------------------------- |
| `v`       | Protocol version                              | `v=DMARC1`                        |
| `pct`     | Percentage of messages subjected to filtering | `pct=20`                          |
| `ruf`     | Reporting URI for forensic reports            | `ruf=mailto:authfail@example.com` |
| `rua`     | Reporting URI of aggregate reports            | `rua=mailto:aggrep@example.com`   |
| `p`       | Policy for organizational domain              | `p=quarantine`                    |
| `sp`      | Policy for subdomains of the OD               | `sp=reject`                       |
| `adkim`   | Alignment mode for DKIM                       | `adkim=s`                         |
| `aspf`    | Alignment mode for SPF                        | `aspf=r`                          |

Having issues setting up DMARC? [We can help](https://resend.com/help).
