# Retro Scan

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/cloudflare-one/email-security/retro-scan.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Retro Scan

Use Retro Scan to identify security threats that your current email provider may have missed. Cloudflare will analyze up to 14 days of historical emails in your Outlook inbox and provide a detailed report of malicious messages that may require remediation. You will receive an email notification once your report is ready.

Note

Retro Scan is only available for Microsoft 365 accounts.

To start a free scan:

1. Log in to [Cloudflare One ↗](https://one.dash.cloudflare.com/).
2. Select **Email security** > **Overview**.
3. Select **Start a free scan** > **Generate report**.
4. Enable your [Microsoft integration](https://developers.cloudflare.com/cloudflare-one/email-security/setup/post-delivery-deployment/api/m365-api/#enable-microsoft-integration). Once you enabled your Microsoft integration, you will redirected to a page where you will add your domains and specify your current email security system.
5. Generate Retro Scan report:
   - **Connect domains**: Select at least one domain from your integration, then select **Continue**.
   - **Select current solution**: Select the email security tool you are currently using, then select **Continue**.
   - **Review details**: Review the details you previously selected. Then, select **Continue**. You will be notified by email once the report is available.
6. Go to your email inbox and select the link to view the full report.
7. On the Cloudflare dashboard, select **View report**.

The dashboard will display **Overview** and **Details** pages.

### Overview

Overview displays the total scanned domains. The overview shows you:

- [Disposition evaluation](https://developers.cloudflare.com/cloudflare-one/email-security/monitoring/#disposition-evaluation)
- Malicious threat types
- Malicious targets
- Malicious threat origins

### Details

Details allows you to review the first 1,000 emails assigned a disposition.

Select an email to review [details](https://developers.cloudflare.com/cloudflare-one/email-security/investigation/search-email/#details) about the message.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/cloudflare-one/","name":"Cloudflare One"}},{"@type":"ListItem","position":3,"item":{"@id":"/cloudflare-one/email-security/","name":"Email security"}},{"@type":"ListItem","position":4,"item":{"@id":"/cloudflare-one/email-security/retro-scan/","name":"Retro Scan"}}]}
```
