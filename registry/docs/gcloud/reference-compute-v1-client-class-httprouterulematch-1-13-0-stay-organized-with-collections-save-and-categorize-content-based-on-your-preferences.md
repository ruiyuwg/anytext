-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Compute V1 Client - Class HttpRouteRuleMatch (1.13.0) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.1 2.0.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.1 1.21.0 1.20.0 1.19.0 1.18.1 1.17.0 1.16.2 1.14.0 1.13.0 1.12.1 1.11.1 1.10.1 1.9.1 1.8.3 1.7.1 1.6.1 1.5.0

Reference documentation and code samples for the Compute V1 Client class HttpRouteRuleMatch.

HttpRouteRuleMatch specifies a set of criteria for matching requests to an HttpRouteRule. All specified criteria must be satisfied for a match to occur.

Generated from protobuf message `google.cloud.compute.v1.HttpRouteRuleMatch`

## Namespace

Google \\ Cloud \\ Compute \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ full_path_match`

`string`  

For satisfying the matchRule condition, the path of the request must exactly match the value specified in fullPathMatch after removing any query parameters and anchor that may be part of the original URL. fullPathMatch must be from 1 to 1024 characters. Only one of prefixMatch, fullPathMatch or regexMatch must be specified.

`↳ header_matches`

`array<[Google\Cloud\Compute\V1\HttpHeaderMatch](/php/docs/reference/cloud-compute/1.13.0/V1.HttpHeaderMatch)>`  

Specifies a list of header match criteria, all of which must match corresponding headers in the request.

`↳ ignore_case`

`bool`  

Specifies that prefixMatch and fullPathMatch matches are case sensitive. The default value is false. ignoreCase must not be used with regexMatch. Not supported when the URL map is bound to a target gRPC proxy.

`↳ metadata_filters`

`array<[Google\Cloud\Compute\V1\MetadataFilter](/php/docs/reference/cloud-compute/1.13.0/V1.MetadataFilter)>`  

Opaque filter criteria used by the load balancer to restrict routing configuration to a limited set of xDS compliant clients. In their xDS requests to the load balancer, xDS clients present node metadata. When there is a match, the relevant routing configuration is made available to those proxies. For each metadataFilter in this list, if its filterMatchCriteria is set to MATCH\_ANY, at least one of the filterLabels must match the corresponding label provided in the metadata. If its filterMatchCriteria is set to MATCH\_ALL, then all of its filterLabels must match with corresponding labels provided in the metadata. If multiple metadata filters are specified, all of them need to be satisfied in order to be considered a match. metadataFilters specified here is applied after those specified in ForwardingRule that refers to the UrlMap this HttpRouteRuleMatch belongs to. metadataFilters only applies to load balancers that have loadBalancingScheme set to INTERNAL\_SELF\_MANAGED. Not supported when the URL map is bound to a target gRPC proxy that has validateForProxyless field set to true.

`↳ path_template_match`

`string`  

If specified, the route is a pattern match expression that must match the :path header once the query string is removed. A pattern match allows you to match - The value must be between 1 and 1024 characters - The pattern must start with a leading slash ("/") - There may be no more than 5 operators in pattern Precisely one of prefix\_match, full\_path\_match, regex\_match or path\_template\_match must be set.

`↳ prefix_match`

`string`  

For satisfying the matchRule condition, the request's path must begin with the specified prefixMatch. prefixMatch must begin with a /. The value must be from 1 to 1024 characters. Only one of prefixMatch, fullPathMatch or regexMatch must be specified.

`↳ query_parameter_matches`

`array<[Google\Cloud\Compute\V1\HttpQueryParameterMatch](/php/docs/reference/cloud-compute/1.13.0/V1.HttpQueryParameterMatch)>`  

Specifies a list of query parameter match criteria, all of which must match corresponding query parameters in the request. Not supported when the URL map is bound to a target gRPC proxy.

`↳ regex_match`

`string`  

For satisfying the matchRule condition, the path of the request must satisfy the regular expression specified in regexMatch after removing any query parameters and anchor supplied with the original URL. For more information about regular expression syntax, see Syntax. Only one of prefixMatch, fullPathMatch or regexMatch must be specified. Regular expressions can only be used when the loadBalancingScheme is set to INTERNAL\_SELF\_MANAGED.

### getFullPathMatch

For satisfying the matchRule condition, the path of the request must exactly match the value specified in fullPathMatch after removing any query parameters and anchor that may be part of the original URL. fullPathMatch must be from 1 to 1024 characters. Only one of prefixMatch, fullPathMatch or regexMatch must be specified.

**Returns**

**Type**

**Description**

`string`

### hasFullPathMatch

### clearFullPathMatch

### setFullPathMatch

For satisfying the matchRule condition, the path of the request must exactly match the value specified in fullPathMatch after removing any query parameters and anchor that may be part of the original URL. fullPathMatch must be from 1 to 1024 characters. Only one of prefixMatch, fullPathMatch or regexMatch must be specified.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getHeaderMatches

Specifies a list of header match criteria, all of which must match corresponding headers in the request.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setHeaderMatches

Specifies a list of header match criteria, all of which must match corresponding headers in the request.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Compute\V1\HttpHeaderMatch](/php/docs/reference/cloud-compute/1.13.0/V1.HttpHeaderMatch)>`  

**Returns**

**Type**

**Description**

`$this`

### getIgnoreCase

Specifies that prefixMatch and fullPathMatch matches are case sensitive. The default value is false. ignoreCase must not be used with regexMatch. Not supported when the URL map is bound to a target gRPC proxy.

**Returns**

**Type**

**Description**

`bool`

### hasIgnoreCase

### clearIgnoreCase

### setIgnoreCase

Specifies that prefixMatch and fullPathMatch matches are case sensitive. The default value is false. ignoreCase must not be used with regexMatch. Not supported when the URL map is bound to a target gRPC proxy.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getMetadataFilters

Opaque filter criteria used by the load balancer to restrict routing configuration to a limited set of xDS compliant clients. In their xDS requests to the load balancer, xDS clients present node metadata. When there is a match, the relevant routing configuration is made available to those proxies. For each metadataFilter in this list, if its filterMatchCriteria is set to MATCH\_ANY, at least one of the filterLabels must match the corresponding label provided in the metadata. If its filterMatchCriteria is set to MATCH\_ALL, then all of its filterLabels must match with corresponding labels provided in the metadata. If multiple metadata filters are specified, all of them need to be satisfied in order to be considered a match. metadataFilters specified here is applied after those specified in ForwardingRule that refers to the UrlMap this HttpRouteRuleMatch belongs to. metadataFilters only applies to load balancers that have loadBalancingScheme set to INTERNAL\_SELF\_MANAGED. Not supported when the URL map is bound to a target gRPC proxy that has validateForProxyless field set to true.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setMetadataFilters

Opaque filter criteria used by the load balancer to restrict routing configuration to a limited set of xDS compliant clients. In their xDS requests to the load balancer, xDS clients present node metadata. When there is a match, the relevant routing configuration is made available to those proxies. For each metadataFilter in this list, if its filterMatchCriteria is set to MATCH\_ANY, at least one of the filterLabels must match the corresponding label provided in the metadata. If its filterMatchCriteria is set to MATCH\_ALL, then all of its filterLabels must match with corresponding labels provided in the metadata. If multiple metadata filters are specified, all of them need to be satisfied in order to be considered a match. metadataFilters specified here is applied after those specified in ForwardingRule that refers to the UrlMap this HttpRouteRuleMatch belongs to. metadataFilters only applies to load balancers that have loadBalancingScheme set to INTERNAL\_SELF\_MANAGED. Not supported when the URL map is bound to a target gRPC proxy that has validateForProxyless field set to true.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Compute\V1\MetadataFilter](/php/docs/reference/cloud-compute/1.13.0/V1.MetadataFilter)>`  

**Returns**

**Type**

**Description**

`$this`

### getPathTemplateMatch

If specified, the route is a pattern match expression that must match the :path header once the query string is removed. A pattern match allows you to match - The value must be between 1 and 1024 characters - The pattern must start with a leading slash ("/") - There may be no more than 5 operators in pattern Precisely one of prefix\_match, full\_path\_match, regex\_match or path\_template\_match must be set.

**Returns**

**Type**

**Description**

`string`

### hasPathTemplateMatch

### clearPathTemplateMatch

### setPathTemplateMatch

If specified, the route is a pattern match expression that must match the :path header once the query string is removed. A pattern match allows you to match - The value must be between 1 and 1024 characters - The pattern must start with a leading slash ("/") - There may be no more than 5 operators in pattern Precisely one of prefix\_match, full\_path\_match, regex\_match or path\_template\_match must be set.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPrefixMatch

For satisfying the matchRule condition, the request's path must begin with the specified prefixMatch. prefixMatch must begin with a /. The value must be from 1 to 1024 characters. Only one of prefixMatch, fullPathMatch or regexMatch must be specified.

**Returns**

**Type**

**Description**

`string`

### hasPrefixMatch

### clearPrefixMatch

### setPrefixMatch

For satisfying the matchRule condition, the request's path must begin with the specified prefixMatch. prefixMatch must begin with a /. The value must be from 1 to 1024 characters. Only one of prefixMatch, fullPathMatch or regexMatch must be specified.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getQueryParameterMatches

Specifies a list of query parameter match criteria, all of which must match corresponding query parameters in the request. Not supported when the URL map is bound to a target gRPC proxy.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setQueryParameterMatches

Specifies a list of query parameter match criteria, all of which must match corresponding query parameters in the request. Not supported when the URL map is bound to a target gRPC proxy.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Compute\V1\HttpQueryParameterMatch](/php/docs/reference/cloud-compute/1.13.0/V1.HttpQueryParameterMatch)>`  

**Returns**

**Type**

**Description**

`$this`

### getRegexMatch

For satisfying the matchRule condition, the path of the request must satisfy the regular expression specified in regexMatch after removing any query parameters and anchor supplied with the original URL. For more information about regular expression syntax, see Syntax. Only one of prefixMatch, fullPathMatch or regexMatch must be specified. Regular expressions can only be used when the loadBalancingScheme is set to INTERNAL\_SELF\_MANAGED.

**Returns**

**Type**

**Description**

`string`

### hasRegexMatch

### clearRegexMatch

### setRegexMatch

For satisfying the matchRule condition, the path of the request must satisfy the regular expression specified in regexMatch after removing any query parameters and anchor supplied with the original URL. For more information about regular expression syntax, see Syntax. Only one of prefixMatch, fullPathMatch or regexMatch must be specified. Regular expressions can only be used when the loadBalancingScheme is set to INTERNAL\_SELF\_MANAGED.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
