# Create CIPA policy

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/learning-paths/cybersafe/gateway-onboarding/gateway-create-cipa-policy.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Create CIPA policy

## Create CIPA policy

1. Go to **Traffic policies** > **Firewall policies**.
2. Create a policy to block using the CIPA filter:\
   | Selector           | Operator | Value         | Action |\
   | ------------------ | -------- | ------------- | ------ |\
   | Content Categories | in       | *CIPA Filter* | Block  |
3. In **Logs** > **Gateway** > **DNS**, verify that you see the blocked domain.

Your environment is now protected against all of the subcategories listed in [Configuration](https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cybersafe/#configuration).

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/learning-paths/","name":"Learning Paths"}},{"@type":"ListItem","position":3,"item":{"@id":"/learning-paths/cybersafe/gateway-onboarding/","name":"Onboarding Cloudflare Gateway"}},{"@type":"ListItem","position":4,"item":{"@id":"/learning-paths/cybersafe/gateway-onboarding/gateway-create-cipa-policy/","name":"Create CIPA policy"}}]}
```
