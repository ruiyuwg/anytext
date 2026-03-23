# Lists

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/waf/tools/lists/index.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Lists

Use lists to refer to a group of items (such as IP addresses) collectively, by name, in rule expressions of Cloudflare products. You can create your own custom lists or use lists managed by Cloudflare, such as [Managed IP Lists](https://developers.cloudflare.com/waf/tools/lists/managed-lists/#managed-ip-lists).

Lists have the following advantages:

- When creating a rule, using a list is easier and less error-prone than adding a long list of items such as IP addresses to a rule expression.
- When updating a set of rules that target the same group of IP addresses (or hostnames), using an IP list (or a hostname list) is easier and less error prone than editing multiple rules.
- Lists are easier to read and more informative, particularly when you use descriptive names for your lists.

When you update the content of a list, any rules that use the list are automatically updated, so you can make a single change to your list rather than modify rules individually.

Cloudflare stores your lists at the account level. You can use the same list in rules of different zones in your Cloudflare account.

## Supported lists

Cloudflare supports the following lists:

- [Custom lists](https://developers.cloudflare.com/waf/tools/lists/custom-lists/): Includes custom IP lists, hostname lists, and ASN lists.
- [Managed Lists](https://developers.cloudflare.com/waf/tools/lists/managed-lists/): Lists managed and updated by Cloudflare, such as Managed IP Lists.

Refer to each page for details.

Notes

- Bulk Redirects use [Bulk Redirect Lists](https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/concepts/#bulk-redirect-lists), a different type of list covered in the Rules documentation.
- The lists described in this page are not the same as [Zero Trust lists](https://developers.cloudflare.com/cloudflare-one/reusable-components/lists/). The two types of lists support different data types and have different validation rules (for example, regarding the list name).
- You can also use [inline lists](https://developers.cloudflare.com/ruleset-engine/rules-language/values/#inline-lists) in rule expressions. Inline lists allow you to directly include a list of values in an expression. With an inline list you do not need to configure the list items beforehand, but the items will be hardcoded in the expression.

## List names

The name of a list must comply with the following requirements:

- The name uses only lowercase letters, numbers, and the underscore (`_`) character in the name. A valid name satisfies this regular expression: `^[a-z0-9_]+$`.
- The maximum length of a list name is 50 characters.

## Work with lists

### Create and edit lists

You can [create lists in the Cloudflare dashboard](https://developers.cloudflare.com/waf/tools/lists/create-dashboard/) or using the [Lists API](https://developers.cloudflare.com/waf/tools/lists/lists-api/).

After creating a list, you can add and remove items from the list, but you cannot change the list name or type.

### Use lists in expressions

Both the Cloudflare dashboard and the Cloudflare API support lists:

- To use lists in an expression from the Cloudflare dashboard, refer to [Use lists in expressions](https://developers.cloudflare.com/waf/tools/lists/use-in-expressions/).
- To reference a list in an API expression, refer to [Lists](https://developers.cloudflare.com/ruleset-engine/rules-language/values/#lists) in the Rules language reference.

Warning

Currently, not all Cloudflare products support lists in their expressions. Refer to the documentation of each [individual product](https://developers.cloudflare.com/directory/) for details on list support.

### Search list items

You can search for list items in the dashboard or [via API](https://developers.cloudflare.com/api/resources/rules/subresources/lists/subresources/items/methods/list/).

For IP Lists, Cloudflare will return IP addresses/ranges that start with your search query (search by prefix). Currently, you cannot search for an IP address contained in a CIDR range of an IP List.

For Bulk Redirect Lists, Cloudflare will return the URL redirects in the list where the source URL or target URL contain your search query (search by substring).

## Availability

List availability varies according to the list type and your Cloudflare plan and subscriptions.

| Free                                                | Pro    | Business | Enterprise |         |
| --------------------------------------------------- | ------ | -------- | ---------- | ------- |
| Availability                                        | Yes    | Yes      | Yes        | Yes     |
| Number of custom lists (any type)                   | 1      | 10       | 10         | 1,000   |
| Max. number of list items (across all custom lists) | 10,000 | 10,000   | 10,000     | 500,000 |
| IP lists                                            | Yes    | Yes      | Yes        | Yes     |
| Other custom lists (hostnames, ASNs)                | No     | No       | No         | Yes     |
| Managed IP Lists                                    | No     | No       | No         | Yes     |

Notes:

- The number of available custom lists depends on the highest plan in your account. Any account with at least one paid plan will get the highest quota.
- Customers on Enterprise plans can create a maximum of 1,000 custom lists in total across different list types. The following additional limits apply:
  - Up to 40 hostname lists, with a maximum of 10,000 list items across all hostname lists.
  - Up to 40 ASN lists, with a maximum of 30,000 list items across all ASN lists.
- Customers on Enterprise plans may contact their account team if they need more custom lists or a larger maximum number of items across lists.
- For details on the availability of Bulk Redirect Lists, refer to the [Rules](https://developers.cloudflare.com/rules/url-forwarding/#availability) documentation.

***

## User role requirements

The following user roles have access to the list management functionality:

- Super Administrator
- Administrator
- Firewall

## Final remarks

You can only delete a list when there are no rules (enabled or disabled) that reference that list.

Cloudflare will apply the following rules when you add items to an existing list (either manually or via CSV file):

- Do not remove any existing list items before updating/adding items.
- Update items that were already in the list.
- Add items that were not present in the list.

To replace the entire contents of a list, format the data as an array and use the [Update all list items](https://developers.cloudflare.com/api/resources/rules/subresources/lists/subresources/items/methods/update/) operation in the [Lists API](https://developers.cloudflare.com/waf/tools/lists/lists-api/endpoints/).

You cannot download a list in CSV format from the Cloudflare dashboard. If you need to download the contents of a list, use the [Get list items](https://developers.cloudflare.com/api/resources/rules/subresources/lists/subresources/items/methods/list/) operation to fetch the list items.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/waf/","name":"WAF"}},{"@type":"ListItem","position":3,"item":{"@id":"/waf/tools/","name":"Additional tools"}},{"@type":"ListItem","position":4,"item":{"@id":"/waf/tools/lists/","name":"Lists"}}]}
```
