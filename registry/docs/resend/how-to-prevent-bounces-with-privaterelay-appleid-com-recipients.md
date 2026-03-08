# How to prevent bounces with @privaterelay.appleid.com recipients?

Source: https://resend.com/docs/knowledge-base/sending-apple-private-relay

Sending to Apple Private Email Relay requires specific configuration steps to ensure your emails get delivered

If your website or application supports Sign In with Apple, your customers have the option to receive emails from you via Apple’s Private Email Relay service. This feature allows users to keep their actual email addresses private when they sign up or log in.

When a user selects the Hide My Email option, Apple assigns them a unique, randomly generated email address under the `@privaterelay.appleid.com` domain, which you can link to that specific user.

To ensure your emails are delivered through Apple’s Private Email Relay, you must first access the Apple Developer Portal and navigate to `Certificates, Identifiers & Profiles` > `More` > `Sign in with Apple for Email Communication` > `Configure`.

**Apple Offers Multiple Hide My Email Services**

Starting with iOS 15, Apple provides two separate Hide My Email services—one through Sign in with Apple and another via iCloud+.

This guide is specifically for apps and websites utilizing Sign in with Apple, which generates a unique email address for account creation and login purposes.

## Register your sending domains

Apple mandates that you list the domains from which you will send emails to its service. Additionally, if your return-path domain differs from your sending domain, you must include that as well.

If you use Resend, note that its return-path domain is different since it operates through a subdomain. You will find this subdomain in your Domain settings, formatted as `send.yourdomain.tld` or `send.yoursubdomain.yourdomain.tld` for MX and SPF records. Ensure you add both your primary domain and the subdomain as Apple Email Sources.

## Register your email addresses

Alongside your Sending Domains, Apple requires registration of all email addresses used to send messages from those domains.

You can add these email addresses one by one or in a comma-separated list. If you use other email sources outside of Resend to send messages to Private Relay addresses, include those as well.

## Authenticate your sending domains

Since Resend mandates SPF and DKIM authentication for all domains sending emails through its service, your domain will automatically meet Apple’s authentication requirements.

## Still experiencing bounces from @privaterelay.appleid.com?

At times, emails sent to `@privaterelay.appleid.com` may still bounce. While the bounce messages may not always contain detailed explanations, common reasons include:

- The user has deleted their Hide My Email address from Apple’s settings.
- The user has exceeded their daily limit of 100 emails sent to and from their Hide My Email address.
- A misconfiguration in your settings—double-check that all Sending Domains and From Addresses are correctly registered and authenticated with Apple.

Apple allows the account owner and admins in the Apple Developer Portal to receive notifications if messages fail to deliver through the relay. You can enable this setting in the portal.

***

Once you have completed these three steps, you will be ready to send emails to customers using Hide My Email addresses via Apple’s Private Email Relay service.

For additional details on Apple Private Email Relay and configuration options, refer to Apple’s official documentation:

- [Apple: Configure Private Email Relay Service](https://developer.apple.com/help/account/configure-app-capabilities/configure-private-email-relay-service/)
- [Apple: Communicating Using the Private Email Relay Service](https://developer.apple.com/documentation/signinwithapple/communicating-using-the-private-email-relay-service/)
