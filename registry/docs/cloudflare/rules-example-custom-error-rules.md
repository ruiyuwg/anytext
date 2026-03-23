# Example custom error rules

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/rules/custom-errors/example-rules.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Example custom error rules

The provided examples use the following fields in their rule expressions:

- [http.response.code](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.code/) (Response Status Code): Represents the HTTP status code returned to the client, either set by a Cloudflare product or returned by the origin server. Use this field to customize the response for error codes returned by the origin server or by a Cloudflare product such as a Worker.
- [cf.response.1xxx\_code](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.response.1xxx%5Fcode/): Contains the specific error code for Cloudflare-generated errors. This field will only work for Cloudflare-generated errors such as [52X](https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/) and [1XXX](https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/).

### Custom JSON response for all 5XX errors

This example configures a custom JSON error response for all 5XX errors (`500`-`599`) in a zone. The HTTP status code of the custom error response will be set to `530`.

- [ Dashboard ](#tab-panel-6432)
- [ API ](#tab-panel-6433)

**Custom error rule configuration:**

- **Name**: `Custom JSON response for all 5XX errors`
- **If incoming requests match** > **Custom filter expression**:\
  | Field                | Operator                 | Value | Logic |\
  | -------------------- | ------------------------ | ----- | ----- |\
  | Response Status Code | greater than or equal to | 500   | And   |\
  | Response Status Code | less than or equal to    | 599   |       |\
  If using the Expression Editor:\
  `(http.response.code ge 500 and http.response.code le 599)`
- **Response type**: *JSON response*
- **Response code**: `530`
- **JSON response**: `{"message": "A server error occurred."}`

Required API token permissions

At least one of the following [token permissions](https://developers.cloudflare.com/fundamentals/api/reference/permissions/)is required:

- `Response Compression Write`
- `Config Settings Write`
- `Dynamic URL Redirects Write`
- `Cache Settings Write`
- `Custom Errors Write`
- `Origin Write`
- `Managed headers Write`
- `Zone Transform Rules Write`
- `Mass URL Redirects Write`
- `Magic Firewall Write`
- `L4 DDoS Managed Ruleset Write`
- `HTTP DDoS Managed Ruleset Write`
- `Sanitize Write`
- `Transform Rules Write`
- `Select Configuration Write`
- `Bot Management Write`
- `Zone WAF Write`
- `Account WAF Write`
- `Account Rulesets Write`
- `Logs Write`
- `Logs Write`

Update a zone entry point ruleset

```

curl "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/rulesets/phases/http_custom_errors/entrypoint" \

  --request PUT \

  --header "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \

  --json '{

    "rules": [

        {

            "ref": "json_response_for_5xx_errors",

            "action": "serve_error",

            "action_parameters": {

                "content": "{\"message\": \"A server error occurred.\"}",

                "content_type": "application/json",

                "status_code": 530

            },

            "expression": "http.response.code ge 500 and http.response.code lt 600",

            "enabled": true

        }

    ]

  }'


```

Use the `ref` field to get stable rule IDs across updates when using Terraform. Adding this field prevents Terraform from recreating the rule on changes. For more information, refer to [Troubleshooting](https://developers.cloudflare.com/terraform/troubleshooting/rule-id-changes/#how-to-keep-the-same-rule-id-between-modifications) in the Terraform documentation.

This `PUT` request, corresponding to the [Update a zone entry point ruleset](https://developers.cloudflare.com/api/resources/rulesets/subresources/phases/methods/update/) operation, replaces any existing rules in the `http_custom_errors` phase entry point ruleset.

### Custom HTML response with updated status code

This example configures a custom HTML error response for responses with a `500` HTTP status code, and redefines the response status code to `503`.

- [ Dashboard ](#tab-panel-6434)
- [ API ](#tab-panel-6435)

**Custom error rule configuration:**

- **Name**: `Custom HTML response for 500 errors`
- **If incoming requests match** > **Custom filter expression**:\
  | Field                | Operator | Value |\
  | -------------------- | -------- | ----- |\
  | Response Status Code | equal to | 500   |\
  If using the Expression Editor:\
  `(http.response.code eq 500)`
- **Response type**: *HTML response*
- **Response code**: `503`
- **HTML response**:

```
<!DOCTYPE html><html><head><meta charset="utf-8"><title>Application unavailable</title></head><body><h1>Application temporarily unavailable</h1><p>Please try again later.</p></body></html>  
```

Required API token permissions

At least one of the following [token permissions](https://developers.cloudflare.com/fundamentals/api/reference/permissions/)is required:

- `Response Compression Write`
- `Config Settings Write`
- `Dynamic URL Redirects Write`
- `Cache Settings Write`
- `Custom Errors Write`
- `Origin Write`
- `Managed headers Write`
- `Zone Transform Rules Write`
- `Mass URL Redirects Write`
- `Magic Firewall Write`
- `L4 DDoS Managed Ruleset Write`
- `HTTP DDoS Managed Ruleset Write`
- `Sanitize Write`
- `Transform Rules Write`
- `Select Configuration Write`
- `Bot Management Write`
- `Zone WAF Write`
- `Account WAF Write`
- `Account Rulesets Write`
- `Logs Write`
- `Logs Write`

Update a zone entry point ruleset

```

curl "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/rulesets/phases/http_custom_errors/entrypoint" \

  --request PUT \

  --header "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \

  --json '{

    "rules": [

        {

            "ref": "html_response_500_to_503",

            "action": "serve_error",

            "action_parameters": {

                "content": "<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Application unavailable</title></head><body><h1>Application temporarily unavailable</h1><p>Please try again later.</p></body></html>",

                "content_type": "text/html",

                "status_code": 503

            },

            "expression": "http.response.code eq 500",

            "enabled": true

        }

    ]

  }'


```

Use the `ref` field to get stable rule IDs across updates when using Terraform. Adding this field prevents Terraform from recreating the rule on changes. For more information, refer to [Troubleshooting](https://developers.cloudflare.com/terraform/troubleshooting/rule-id-changes/#how-to-keep-the-same-rule-id-between-modifications) in the Terraform documentation.

This `PUT` request, corresponding to the [Update a zone entry point ruleset](https://developers.cloudflare.com/api/resources/rulesets/subresources/phases/methods/update/) operation, replaces any existing rules in the `http_custom_errors` phase entry point ruleset.

### Custom HTML response for Cloudflare 1020 errors

This example configures a custom HTML error response for [Cloudflare error 1020](https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1020/) (Access Denied).

- [ Dashboard ](#tab-panel-6436)
- [ API ](#tab-panel-6437)

**Custom error rule configuration:**

- **Name**: `Custom HTML response for 1020 errors`
- **If incoming requests match** > **Custom filter expression**\
  Use the Expression Editor:\
  `(cf.response.1xxx_code eq 1020)`
- **Response type**: *HTML response*
- **HTML response**:

```
<!DOCTYPE html><html><head><meta charset="utf-8"><title>Access denied</title></head><body><h1>You do not have access to this page</h1><p>Contact us if you think this is an error.</p></body></html>  
```

Required API token permissions

At least one of the following [token permissions](https://developers.cloudflare.com/fundamentals/api/reference/permissions/)is required:

- `Response Compression Write`
- `Config Settings Write`
- `Dynamic URL Redirects Write`
- `Cache Settings Write`
- `Custom Errors Write`
- `Origin Write`
- `Managed headers Write`
- `Zone Transform Rules Write`
- `Mass URL Redirects Write`
- `Magic Firewall Write`
- `L4 DDoS Managed Ruleset Write`
- `HTTP DDoS Managed Ruleset Write`
- `Sanitize Write`
- `Transform Rules Write`
- `Select Configuration Write`
- `Bot Management Write`
- `Zone WAF Write`
- `Account WAF Write`
- `Account Rulesets Write`
- `Logs Write`
- `Logs Write`

Update a zone entry point ruleset

```

curl "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/rulesets/phases/http_custom_errors/entrypoint" \

  --request PUT \

  --header "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \

  --json '{

    "rules": [

        {

            "ref": "html_response_cf_1020",

            "action": "serve_error",

            "action_parameters": {

                "content": "<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Access denied</title></head><body><h1>You do not have access to this page</h1><p>Contact us if you think this is an error.</p></body></html>",

                "content_type": "text/html"

            },

            "expression": "cf.response.1xxx_code eq 1020",

            "enabled": true

        }

    ]

  }'


```

Use the `ref` field to get stable rule IDs across updates when using Terraform. Adding this field prevents Terraform from recreating the rule on changes. For more information, refer to [Troubleshooting](https://developers.cloudflare.com/terraform/troubleshooting/rule-id-changes/#how-to-keep-the-same-rule-id-between-modifications) in the Terraform documentation.

This `PUT` request, corresponding to the [Update a zone entry point ruleset](https://developers.cloudflare.com/api/resources/rulesets/subresources/phases/methods/update/) operation, replaces any existing rules in the `http_custom_errors` phase entry point ruleset.

### Custom error asset created from a URL

This example configures a custom error rule returning a previously created custom error asset named `500_error_template` for responses with a `500` HTTP status code.

- [ Dashboard ](#tab-panel-6438)
- [ API ](#tab-panel-6439)

**Custom error rule configuration:**

- **Name**: `Serve asset for HTTP 500 errors`
- **If incoming requests match** > **Custom filter expression**:\
  | Field                | Operator | Value |\
  | -------------------- | -------- | ----- |\
  | Response Status Code | equal to | 500   |\
  If using the Expression Editor:\
  `(http.response.code eq 500)`
- **Response type**: *Custom error asset*
- **Asset**: `500_error_template`

Required API token permissions

At least one of the following [token permissions](https://developers.cloudflare.com/fundamentals/api/reference/permissions/)is required:

- `Response Compression Write`
- `Config Settings Write`
- `Dynamic URL Redirects Write`
- `Cache Settings Write`
- `Custom Errors Write`
- `Origin Write`
- `Managed headers Write`
- `Zone Transform Rules Write`
- `Mass URL Redirects Write`
- `Magic Firewall Write`
- `L4 DDoS Managed Ruleset Write`
- `HTTP DDoS Managed Ruleset Write`
- `Sanitize Write`
- `Transform Rules Write`
- `Select Configuration Write`
- `Bot Management Write`
- `Zone WAF Write`
- `Account WAF Write`
- `Account Rulesets Write`
- `Logs Write`
- `Logs Write`

Update a zone entry point ruleset

```

curl "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/rulesets/phases/http_custom_errors/entrypoint" \

  --request PUT \

  --header "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \

  --json '{

    "rules": [

        {

            "ref": "serve_error_500_asset",

            "action": "serve_error",

            "action_parameters": {

                "asset_name": "500_error_template",

                "content_type": "text/html"

            },

            "expression": "http.response.code eq 500",

            "enabled": true

        }

    ]

  }'


```

Use the `ref` field to get stable rule IDs across updates when using Terraform. Adding this field prevents Terraform from recreating the rule on changes. For more information, refer to [Troubleshooting](https://developers.cloudflare.com/terraform/troubleshooting/rule-id-changes/#how-to-keep-the-same-rule-id-between-modifications) in the Terraform documentation.

This `PUT` request, corresponding to the [Update a zone entry point ruleset](https://developers.cloudflare.com/api/resources/rulesets/subresources/phases/methods/update/) operation, replaces any existing rules in the `http_custom_errors` phase entry point ruleset.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/rules/","name":"Rules"}},{"@type":"ListItem","position":3,"item":{"@id":"/rules/custom-errors/","name":"Custom Errors"}},{"@type":"ListItem","position":4,"item":{"@id":"/rules/custom-errors/example-rules/","name":"Example custom error rules"}}]}
```
