# Create a policy in the dashboard

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/page-shield/policies/create-dashboard.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Create a policy in the dashboard

- [  New dashboard ](#tab-panel-5640)
- [ Old dashboard ](#tab-panel-5641)

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
6. Under **Then take action**, select the desired action:
   - *Allow*: Enforces the CSP directives configured in the policy, blocking any other resources from being loaded on your website, and logging any [policy violations](https://developers.cloudflare.com/page-shield/policies/violations/).
   - *Log*: Logs any policy violations without blocking any resources not covered by the policy.
7. To save and deploy your rule, select **Deploy**. If you are not ready to deploy your rule, select **Save as Draft**.

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
7. Under **Then take action**, select the desired action:
   - *Allow*: Enforces the CSP directives configured in the policy, blocking any other resources from being loaded on your website, and logging any [policy violations](https://developers.cloudflare.com/page-shield/policies/violations/).
   - *Log*: Logs any policy violations without blocking any resources not covered by the policy.
8. To save and deploy your rule, select **Deploy**. If you are not ready to deploy your rule, select **Save as Draft**.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/page-shield/","name":"Page Shield"}},{"@type":"ListItem","position":3,"item":{"@id":"/page-shield/policies/","name":"Policies"}},{"@type":"ListItem","position":4,"item":{"@id":"/page-shield/policies/create-dashboard/","name":"Create a policy in the dashboard"}}]}
```
