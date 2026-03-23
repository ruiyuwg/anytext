# Enable Email security logs

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/cloudflare-one/insights/logs/enable-logs.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Enable Email security logs

Email security allows you to configure Logpush to send detection data to an endpoint of your choice.

## Enable detection logs

Detection logs generate logs made by Email security and some of the metadata associated with the detection.

To enable detection logs, refer to [Enable destinations](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/).

If you enable detection logs using [R2](https://developers.cloudflare.com/r2/), choose **Email security alerts** when configuring the **Dataset**.

## Enable user action logs

User action logs allow you to view logs regarding all actions taken via the [API](https://developers.cloudflare.com/api/resources/email%5Fsecurity/) or the dashboard.

Before you can enable audit logs for Email security, you will have to enable logpush jobs to your storage destination. Refer to [Enable destinations](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/) to enable logs on destinations such as Cloudflare R2, HTTP, Amazon S3, and more.

Once you have configured your destination, you can set up audit logs for user action:

1. In the Cloudflare dashboard, go to the **Logpush** page.\
   [ Go to **Logpush** ](https://dash.cloudflare.com/?to=/:account/logs)
2. Select your storage destination.
3. Select the three dots > **Edit**.
4. Under **Configure logpush job**:

- **Job name**: Enter the job name, if it is not already prepopulated.
- **If logs match** > Select **Filtered logs**:
  - **Field**: Choose `ResourceType`.
  - **Operator**: Choose `starts with`.
  - **Value**: Enter `email_security`.

1. Select **Submit**.

You can now view logs via the Cloudflare dashboard.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/cloudflare-one/","name":"Cloudflare One"}},{"@type":"ListItem","position":3,"item":{"@id":"/cloudflare-one/insights/","name":"Insights"}},{"@type":"ListItem","position":4,"item":{"@id":"/cloudflare-one/insights/logs/","name":"Logs"}},{"@type":"ListItem","position":5,"item":{"@id":"/cloudflare-one/insights/logs/enable-logs/","name":"Enable Email security logs"}}]}
```
