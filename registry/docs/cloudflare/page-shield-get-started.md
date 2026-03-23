# Get started

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/page-shield/get-started.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Get started

## 1. Activate client-side resource monitoring

To enable client-side resource monitoring:

- [  New dashboard ](#tab-panel-5634)
- [ Old dashboard ](#tab-panel-5635)

1. In the Cloudflare dashboard, go to the Security **Settings** page.\
   [ Go to **Settings** ](https://dash.cloudflare.com/?to=/:account/:zone/security/settings)

2. (Optional) Filter by **Client-side abuse**.

3. Turn on **Continuous script monitoring**.

4. Log in to the [Cloudflare dashboard ↗](https://dash.cloudflare.com/), and select your account and domain.

5. Go to **Security** > **Page Shield**.

6. Select **Enable Page Shield**.

If you do not have access to Page Shield in the Cloudflare dashboard, check if your user has one of the [necessary roles](https://developers.cloudflare.com/page-shield/reference/roles-and-permissions/).

## 2. Review detected resources

When you enable client-side resource monitoring, it may take a while to get the list of detected scripts in your domain.

To review the scripts detected by Cloudflare:

1. Go to the client-side resources page:
   - [  New dashboard ](#tab-panel-5632)
   - [ Old dashboard ](#tab-panel-5633)
   1. In the Cloudflare dashboard, go to the **Web assets** page.\
      [ Go to **Web assets** ](https://dash.cloudflare.com/?to=/:account/:zone/security/web-assets)
   2. Select the **Client-side resources** tab.
   3. Log in to the [Cloudflare dashboard ↗](https://dash.cloudflare.com/), and select your account and domain.
   4. Go to **Security** > **Page Shield**.
2. Review the list of detected scripts, checking for any unknown or unexpected scripts.\
   [Depending on your plan](https://developers.cloudflare.com/page-shield/#availability), Cloudflare will also:
   - Inform you if a script is [considered malicious](https://developers.cloudflare.com/page-shield/how-it-works/malicious-script-detection/).
   - [Show the details](https://developers.cloudflare.com/page-shield/detection/monitor-connections-scripts/#view-details) about each detected script.

Depending on your plan, you may be able to also review the connections made by scripts in your domain's pages and check them for malicious activity.

## 3. (Optional) Configure alerts

Once you have activated Page Shield's client-side resource monitoring, you can set up one or more alerts informing you of relevant client-side changes on your zones. The [available alert types](https://developers.cloudflare.com/page-shield/alerts/alert-types/) depend on your Cloudflare plan.

To configure an alert:

1. In the Cloudflare dashboard, go to the **Notifications** page.\
   [ Go to **Notifications** ](https://dash.cloudflare.com/?to=/:account/notifications)
2. Choose **Add** and then select **Page Shield** in the **Product** dropdown.
3. Select an [alert type](https://developers.cloudflare.com/page-shield/alerts/alert-types/).
4. Enter the notification name and description.
5. (Optional) If you are an Enterprise customer with a paid add-on, you can [define the zones for which you want to filter alerts](https://developers.cloudflare.com/page-shield/alerts/#scoped-alerts) in **Policies of these zones**. This option requires that you define [policies](https://developers.cloudflare.com/page-shield/policies/) in the selected zones.
6. Select one or more notification destinations (notification email, webhooks, and connected notification services).
7. Select **Create**.

To learn how you can handle an alert, refer to [Handle a client-side resource alert](https://developers.cloudflare.com/page-shield/best-practices/handle-an-alert/).

## 4. (Optional) Define policies

Note

Only available to Enterprise customers with a paid add-on.

[Policies](https://developers.cloudflare.com/page-shield/policies/) — called content security rules in the [new security dashboard](https://developers.cloudflare.com/security/) — define allowed resources on your websites. Create policies to implement a positive security model[1](#user-content-fn-1).

### 4.1. Create a policy with the Log action

When you create a policy with the [*Log* action](https://developers.cloudflare.com/page-shield/policies/#policy-actions), Cloudflare logs any resources not covered by the policy, without blocking any resources. Use this action to validate a new policy before deploying it.

- [  New dashboard ](#tab-panel-5638)
- [ Old dashboard ](#tab-panel-5639)

Notes

Only available to Enterprise customers with a paid add-on.\
In the [new security dashboard](https://developers.cloudflare.com/security/), policies are called content security rules.

1. In the Cloudflare dashboard, go to the **Security rules** page.\
   [ Go to **Security rules** ](https://dash.cloudflare.com/?to=/:account/:zone/security/security-rules)
2. Select **Create** > **Content security rules**.
3. Enter a descriptive name for the rule in **Description**.
4. Under **If incoming requests match**, define the scope of the content security rule (or policy). You can use the Expression Builder (specifying one or more values for **Field**, **Operator**, and **Value**) or manually enter an expression using the Expression Editor. For more information, refer to [Edit expressions in the dashboard](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/edit-expressions/).
5. Under **Allow these directives**, select the desired [CSP directives](https://developers.cloudflare.com/page-shield/policies/csp-directives/) for the content security rule by enabling one or more checkboxes.
   - To manually enter an allowed source, select **Add source**.
   - To refresh the displayed sources based on detected resources, select **Refresh suggestions**.\
     Note\
     Cloudflare provides suggestions for **Default**, **Scripts**, and **Connections** directives. For the **Default** directive, suggestions are based on monitored scripts and connections resources.
6. Under **Then take action**, select *Log*.
7. To save and deploy your rule, select **Deploy**.

Note

Only available to Enterprise customers with a paid add-on.

1. Log in to the [Cloudflare dashboard ↗](https://dash.cloudflare.com) and select your account and domain.
2. Go to **Security** > **Page Shield** > **Policies**.
3. Select **Create policy**.
4. Enter a descriptive name for the rule in **Description**.
5. Under **If incoming requests match**, define the policy scope. You can use the Expression Builder (specifying one or more values for **Field**, **Operator**, and **Value**) or manually enter an expression using the Expression Editor. For more information, refer to [Edit expressions in the dashboard](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/edit-expressions/).
6. Under **Allow these directives**, select the desired [CSP directives](https://developers.cloudflare.com/page-shield/policies/csp-directives/) for the policy by enabling one or more checkboxes.
   - To manually enter an allowed source, select **Add source**.
   - To refresh the displayed sources based on Page Shield's detected resources, select **Refresh suggestions**.\
     Note\
     Page Shield provides suggestions for **Default**, **Scripts**, and **Connections** directives. For the **Default** directive, suggestions are based on monitored scripts and connections resources.
7. Under **Then take action**, select *Log*.
8. To save and deploy your rule, select **Deploy**.

### 4.2. Review policy violations

Resources not covered by the policy you created will be reported as [policy violations](https://developers.cloudflare.com/page-shield/policies/violations/). After some time, review the list of policy violations to make sure the policy is correct.

To view policy violation information:

- [  New dashboard ](#tab-panel-5636)
- [ Old dashboard ](#tab-panel-5637)

1. In the Cloudflare dashboard, go to the **Security rules** page.\
   [ Go to **Security rules** ](https://dash.cloudflare.com/?to=/:account/:zone/security/security-rules)
2. (Optional) Filter by **Content security rules**.

- In the Cloudflare dashboard, go to **Security** > **Page Shield** > **Policies**.

The displayed information includes the following:

- A sparkline next to the policy/rule name, showing violations in the past seven days.
- For policies with associated violations, an expandable details section for each policy, with the top resources present in violation events and a sparkline per top resource.

Update the policy if needed.

### 4.3. Change policy action to Allow

Once you have verified that your policy is correct, change the policy action from *Log* to *Allow*.

When you use the [*Allow* action](https://developers.cloudflare.com/page-shield/policies/#policy-actions), Cloudflare starts blocking any resources not explicitly allowed by the policy.

## Footnotes

1. A positive security model is one that defines what is allowed and rejects everything else. In contrast, a negative security model defines what will be rejected and accepts the rest. [↩](#user-content-fnref-1)

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/page-shield/","name":"Page Shield"}},{"@type":"ListItem","position":3,"item":{"@id":"/page-shield/get-started/","name":"Get started"}}]}
```
