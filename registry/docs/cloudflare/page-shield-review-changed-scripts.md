# Review changed scripts

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/page-shield/detection/review-changed-scripts.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Review changed scripts

Note

Available as a paid add-on for customers on an Enterprise plan.

Cloudflare analyzes the JavaScript dependencies in the pages of your domain over time.

You can configure a notification for [code change alerts](https://developers.cloudflare.com/page-shield/alerts/alert-types/#code-change-alert) to receive a daily notification about changed scripts in your domain.

When you receive such a notification:

1. Go to the client-side resources page:
   - [  New dashboard ](#tab-panel-5626)
   - [ Old dashboard ](#tab-panel-5627)
   1. In the Cloudflare dashboard, go to the **Web assets** page.\
      [ Go to **Web assets** ](https://dash.cloudflare.com/?to=/:account/:zone/security/web-assets)
   2. Select the **Client-side resources** tab.
   3. Log in to the [Cloudflare dashboard ↗](https://dash.cloudflare.com/), and select your account and domain.
   4. Go to **Security** > **Page Shield**.
2. Check the details of each changed script and validate if it is an expected change.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/page-shield/","name":"Page Shield"}},{"@type":"ListItem","position":3,"item":{"@id":"/page-shield/detection/","name":"Detection"}},{"@type":"ListItem","position":4,"item":{"@id":"/page-shield/detection/review-changed-scripts/","name":"Review changed scripts"}}]}
```
