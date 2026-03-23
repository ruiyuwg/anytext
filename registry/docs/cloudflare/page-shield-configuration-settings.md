# Configuration settings

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/page-shield/reference/settings.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Configuration settings

## Reporting endpoint

When enabled, Page Shield's client-side resource monitoring uses a Content Security Policy (CSP) [report-only HTTP header](https://developers.cloudflare.com/page-shield/reference/csp-header/) to gather information about all the scripts running on your application.

By default, reports are sent to a Cloudflare-owned endpoint:

```

https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report?<QUERY_STRING>


```

Enterprise customers with a paid add-on can change the reporting endpoint so that the CSP reports are sent to the same hostname:

```

<YOUR-HOSTNAME>/cdn-cgi/script-monitor/report?<QUERY_STRING>


```

### Prerequisites for using the same hostname for CSP reports

Using the same hostname for CSP reporting may interfere with other Cloudflare products. Before selecting this option, ensure that your Cloudflare configuration complies with the following:

- No rate limiting rules match the `cdn-cgi/*` URL path
- No custom rules match the `cdn-cgi/*` URL path

### Configure the reporting endpoint

Note

Only available to Enterprise customers with a paid add-on.

To configure the CSP reporting endpoint:

- [  New dashboard ](#tab-panel-5648)
- [ Old dashboard ](#tab-panel-5649)

1. In the Cloudflare dashboard, go to the Security **Settings** page.\
   [ Go to **Settings** ](https://dash.cloudflare.com/?to=/:account/:zone/security/settings)

2. (Optional) Filter by **Client-side abuse**.

3. Under **Continuous script monitoring** > **Configurations**, select the edit icon next to **Reporting endpoint**.

4. Select **Cloudflare-owned endpoint** or **Same hostname**.

5. Select **Save**.

6. Log in to the [Cloudflare dashboard ↗](https://dash.cloudflare.com/), and select your account and domain.

7. Go to **Security** > **Page Shield** > **Settings**.

8. Under **Reporting endpoint**, select **Cloudflare-owned endpoint** or **Same hostname**.

9. Select **Apply settings**.

## Connection target details

When connection targets are reported to Cloudflare, their URIs can sometimes include sensitive data such as session ID.

By default, Page Shield will only check the domain against malicious threat intelligence feeds. You can choose to let Page Shield use the full URI when analyzing the connections made from your domain's pages. Any sensitive data present in the URI will be logged in clear text, and any user with access to the connection monitor dashboard will be able to view it.

### Configure the connection target details to use

- [  New dashboard ](#tab-panel-5650)
- [ Old dashboard ](#tab-panel-5651)

1. In the Cloudflare dashboard, go to the Security **Settings** page.\
   [ Go to **Settings** ](https://dash.cloudflare.com/?to=/:account/:zone/security/settings)

2. (Optional) Filter by **Client-side abuse**.

3. Under **Continuous script monitoring** > **Configurations**, select the edit icon next to **Data processing**.

4. Select **Log host only** to analyze only the hostname or **Log full URI** to use the full URI.

5. Select **Save**.

6. Log in to the [Cloudflare dashboard ↗](https://dash.cloudflare.com/), and select your account and domain.

7. Go to **Security** > **Page Shield** > **Settings**.

8. Under **Connection target details**, select **Log host only** to analyze only the hostname or **Log full URI** to use the full URI in Page Shield.

9. Select **Apply settings**.

## Turn off client-side resource monitoring

When you turn off Page Shield's client-side resource monitoring, you lose visibility on the scripts running on your zone, the outbound connections made from pages in your domain, and cookies detected in HTTP traffic.

To turn off client-side resource monitoring:

- [  New dashboard ](#tab-panel-5652)
- [ Old dashboard ](#tab-panel-5653)

1. In the Cloudflare dashboard, go to the Security **Settings** page.\
   [ Go to **Settings** ](https://dash.cloudflare.com/?to=/:account/:zone/security/settings)

2. (Optional) Filter by **Client-side abuse**.

3. Next to **Continuous script monitoring**, set the toggle to **Off**.

4. Log in to the [Cloudflare dashboard ↗](https://dash.cloudflare.com/), and select your account and domain.

5. Go to **Security** > **Page Shield** > **Settings**.

6. In **Disable Page Shield**, select **Disable**.

Turning off Page Shield's client-side resource monitoring will not turn off [policies](https://developers.cloudflare.com/page-shield/policies/) (also known as content security rules). To turn off policies:

- [  New dashboard ](#tab-panel-5646)
- [ Old dashboard ](#tab-panel-5647)

1. In the Cloudflare dashboard, go to the **Security rules** page.\
   [ Go to **Security rules** ](https://dash.cloudflare.com/?to=/:account/:zone/security/security-rules)

2. (Optional) Filter by **Content security rules**.

3. For each rule/policy, select the three dots next to it > **Disable**.

4. Go to **Security** > **Page Shield** > **Policies**.

5. For each policy, set the toggle to **Off**.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/page-shield/","name":"Page Shield"}},{"@type":"ListItem","position":3,"item":{"@id":"/page-shield/reference/","name":"Reference"}},{"@type":"ListItem","position":4,"item":{"@id":"/page-shield/reference/settings/","name":"Configuration settings"}}]}
```
