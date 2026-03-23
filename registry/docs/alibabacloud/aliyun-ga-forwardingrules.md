ALIYUN::GA::ForwardingRules is used to create forwarding rules.

## Syntax

```
{
  "Type": "ALIYUN::GA::ForwardingRules",
  "Properties": {
    "AcceleratorId": String,
    "ForwardingRules": List,
    "ListenerId": String
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

AcceleratorId

String

Yes

No

The ID of the Global Accelerator (GA) instance.

None.

ForwardingRules

List

Yes

No

The configurations of the forwarding rules.

For more information, see the "ForwardingRules properties" section of this topic.

ListenerId

String

Yes

No

The listener ID.

None.

## ForwardingRules syntax

```
"ForwardingRules": [
  {
    "RuleActions": List,
    "Priority": Integer,
    "ForwardingRuleName": String,
    "RuleConditions": List,
    "RuleDirection": String
  }
]
```

## ForwardingRules properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

RuleActions

List

Yes

No

The configurations of the forwarding actions.

For more information, see the "RuleActions properties" section of this topic.

RuleConditions

List

Yes

No

The configurations of the forwarding conditions.

For more information, see the "RuleConditions properties" section of this topic.

ForwardingRuleName

String

No

No

The name of the forwarding rule.

The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter.

Priority

Integer

No

No

The priority of the forwarding rule.

Valid values: **1** to **10000**. A smaller value specifies a higher priority.

RuleDirection

String

No

No

The direction in which the forwarding rule takes effect.

By default, this property is set to **request**. A value of request specifies that the forwarding rule takes effect on requests.

## RuleActions syntax

```
"RuleActions": [
  {
    "RuleActionType": String,
    "Order": Integer,
    "RuleActionValue": String
  }
]
```

## RuleActions properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Order

Integer

Yes

No

The forwarding priority.

None.

RuleActionType

String

Yes

No

The type of the forwarding action.

Valid values:

-   **ForwardGroup**: forwards a request.
    
-   **Redirect**: redirects a request.
    
-   **FixResponse**: returns a fixed response.
    
-   **Rewrite**: rewrites a request.
    
-   **AddHeader**: adds a header.
    
-   **RemoveHeader**: removes a header.
    
-   **Drop**: drops a request.
    

RuleActionValue

String

No

No

The value of the forwarding action.

You must specify different JSON strings based on the value of **RuleActionType**.

A forwarding rule can contain only one forwarding action whose type is **ForwardGroup**, **Redirect**, or **FixResponse**. You must specify a forwarding action whose type is **Rewrite**, **AddHeader**, or **RemoveHeader** before a forwarding action whose type is **ForwardGroup**.

-   If **RuleActionType** is set to **ForwardGroup**, RuleActionValue specifies the configurations of a virtual endpoint group. You can forward requests to only one virtual endpoint group. Example: `{"type":"endpointgroup", "value":"epg-bp1enpdcrqhl78g6r****"}`. The following fields are included:
    
    -   `type`: Set the value to `endpointgroup`.
        
    -   `value`: the ID of the desired virtual endpoint group.
        
-   If **RuleActionType** is set to **Redirect**, RuleActionValue specifies the redirect configurations. For a forwarding action whose type is **Redirect**, you cannot leave all the following fields empty or use the default values for all the following fields: `protocol`, `domain`, `port`, `path`, and `query`. Example: `{"protocol":"HTTP", "domain":"www.example.com", "port":"80", "path":"/a","query":"value1", "code":"301" }`. The following fields are included:
    
    -   `protocol`: the protocol over which you want to redirect a request. Default value: ${protocol}. Valid values: `${protocol}`, `HTTP`, and `HTTPS`.
        
    -   `domain`: the domain name to which you want to redirect a request. Default value: `${host}`. You can also specify a domain name. The domain name must be 3 to 128 characters in length, and can contain only lowercase letters, digits, and the following special characters: `. - ? = ~ _ - + / ^ * ! $ & ( ) [ ]`.
        
    -   `port`: the port to which you want to redirect a request. Default value: `${port}`. You can also specify a port number from 1 to 63335.
        
    -   `path`: the path to which you want to redirect a request. Default value: `${path}`. The path must be 1 to 128 characters in length. If you use a regular expression to specify the path, the path must start with a tilde (~), and can contain letters, digits, and the following special characters: `. - _ / = ? ~ ^ * $ : ( ) [ ] +`. If you do not use a regular expression to specify the path, the path must start with a forward slash (/), and can contain letters, digits, and the following special characters: `. - _ / = ? :`.
        
    -   `query`: the query string of the request that you want to redirect. Default value: `${query}`. You can also specify a query string. The query string must be 1 to 128 characters in length, and can contain lowercase letters and printable characters whose ASCII values are `greater than or equal to 32 and less than 127`. The query string cannot contain spaces or the following special characters: `[ ] { } < > \ # &`.
        
    -   `code`: the redirect code. Valid values: `301`, `302`, `303`, `307`, and `308`.
        
-   If **RuleActionType** is set to **FixResponse**, RuleActionValue specifies the configurations of a fixed response. Example: `{"code":"200", "type":"text/plain", "content":"dssacav" }`. The following fields are included:
    
    -   `code`: the HTTP response status code. The response status code must be one of the following numeric strings: `2xx`, `4xx`, and `5xx`. `x` is a digit.
        
    -   `type`: the type of the response content. Valid values: **text/plain**, **text/css**, **text/html**, **application/javascript**, and **application/json**.
        
    -   `content`: the response content. The response content can be up to 1,000 characters in length, and does not support Chinese characters.
        
-   If **RuleActionType** is set to **AddHeader**, RuleActionValue specifies the configurations of an HTTP header to be added. If a forwarding rule contains a forwarding action whose type is **AddHeader**, you must configure a forwarding action whose type is **ForwardGroup**. Example: `[{"name":"header1","type":"userdefined", "value":"value"}]`. The following fields are included:
    
    -   `name`: the name of the HTTP header. The name must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (\_). The HTTP header names in a forwarding action whose type is **AddHeader** must be unique and cannot be the same as the HTTP header names in a forwarding action whose type is **RemoveHeader**.
        
    -   `type`: the type of the HTTP header content. Valid values: `user-defined`, `ref`, and `system-defined`.
        
    -   `value`: the content of the HTTP header. You cannot leave this field empty. If `type` is set to `user-defined`, the content must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are `greater than or equal to 32 and less than 127`. The content can contain letters, digits, hyphens (-), and underscores (\_). The content cannot start or end with a space. If `type` is set to `ref`, the content must be 1 to 128 characters in length, and can contain letters, digits, hyphens (-), and underscores (\_). The content cannot start or end with a space. If `type` is set to `system-defined`, the content must be `ClientSrcIp`.
        
-   If **RuleActionType** is set to **RemoveHeader**, RuleActionValue specifies the configurations of an HTTP header to be removed. If a forwarding rule contains a forwarding action whose type is **RemoveHeader**, you must configure a forwarding action whose type is **ForwardGroup**. The header must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (\_). Example: `["header1"]`.
    
-   If **RuleActionType** is set to **Rewrite**, RuleActionValue specifies the rewrite configurations. If a forwarding rule contains a forwarding action whose type is **Rewrite**, you must configure a forwarding action whose type is **ForwardGroup**. Example: `{"domain":"value1", "path":"value2", "query":"value3"}`. The following fields are included:
    
    -   `domain`: the domain name to which you want to redirect a request. Default value: `${host}`. You can also specify a domain name. The domain name must be 3 to 128 characters in length, and can contain only lowercase letters, digits, and the following special characters: `. - ? = ~ _ - + / ^ * ! $ & ( ) [ ]`.
        
    -   `path`: the path to which you want to redirect a request. Default value: `${path}`. The path must be 1 to 128 characters in length. If you use a regular expression to specify the path, the path must start with a tilde (~), and can contain letters, digits, and the following special characters: `. - _ / = ? ~ ^ * $ : ( ) [ ] +`. If you do not use a regular expression to specify the path, the path must start with a forward slash (/), and can contain letters, digits, and the following special characters: `. - _ / = ? :`.
        
    -   `query`: the query string of the request that you want to redirect. Default value: `${query}`. You can also specify a query string. The query string must be 1 to 128 characters in length, and can contain lowercase letters and printable characters whose ASCII values are `greater than or equal to 32 and less than 127`. The query string cannot contain spaces or the following special characters: `[ ] { } < > \ # &`.
        
-   If **RuleActionType** is set to **Drop**, you do not need to specify RuleActionValue.
    

## RuleConditions syntax

```
"RuleConditions": [
  {
    "RuleConditionType": String,
    "RuleConditionValue": String
  }
]
```

## RuleConditions properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

RuleConditionType

String

No

No

The type of the forwarding condition.

Valid values:

-   **Host**: domain name
    
-   **Path**: path
    
-   **RequestHeader**: HTTP header
    
-   **Query**: query string
    
-   **Method**: HTTP request method
    
-   **Cookie**: cookie
    
-   **SourceIp**: source IP address
    

RuleConditionValue

String

No

No

The value of the forwarding condition.

You must specify different JSON strings based on the value of **RuleConditionType**.

-   If **RuleConditionType** is set to **Host**, RuleConditionValue specifies the configurations of a domain name condition. A forwarding rule can contain only one domain name condition. You can specify multiple domain names in a domain name condition. The relationship between multiple domain names is OR. The domain name must be 3 to 128 characters in length, and can contain letters, digits, hyphens (-), and periods (.). The domain name supports the asterisk (\*) and question mark (?) wildcard characters. Example: `["www.example.com", "www.aliyun.com"]`.
    
-   If **RuleConditionType** is set to **Path**, RuleConditionValue specifies the configurations of a path condition. A forwarding rule can contain multiple path conditions. The relationship between multiple path conditions is OR. You can specify multiple paths in a path condition. The relationship between multiple paths is OR. Example: `["/a", "/b/"]`. The path must be 1 to 128 characters in length, and must start with a forward slash (/). The path supports the asterisk (\*) and question mark (?) wildcard characters, and can contain letters, digits, and the following special characters: $ - \_ . + / & ~ @ : '
    
-   If **RuleConditionType** is set to **RequestHeader**, RuleConditionValue specifies the configurations of an HTTP header condition and the value of RuleConditionValue consists of key-value pairs. The header values in a forwarding condition must be unique. Example: `[{"header1":["value1","value2"]}]`.
    
    -   Key: The key of the HTTP header must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (\_).
        
    -   Value: The value of the HTTP header must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are `greater than or equal to 32 and less than 127`. The value of the HTTP header cannot start or end with a space.
        
-   If **RuleConditionType** is set to **Query**, RuleConditionValue specifies the configurations of a query string condition and the value of RuleConditionValue consists of key-value pairs. Example: `[{"query1":["value1"]}, {"query2":["value2"]}]`.
    
    -   Key: The key of the query string must be 1 to 100 characters in length, and can contain lowercase letters and printable characters whose ASCII values are `greater than or equal to 32 and less than 127`. The key cannot contain spaces or the following special characters: `[ ] { } < > \ ; / ? : @ & = + , $ % " ^ ~`.
        
    -   Value: The value of the query string must be 1 to 128 characters in length, and can contain lowercase letters and printable characters whose ASCII values are `greater than or equal to 32 and less than 127`. The value of the query string cannot contain spaces or the following special characters: `[ ] { } < > \ ; / ? : @ & = + , $ % " ^ ~`.
        
-   If **RuleConditionType** is set to **Method**, RuleConditionValue specifies the configurations of an HTTP request method condition. Valid values: **HEAD**, **GET**, **POST**, **OPTIONS**, **PUT**, **PATCH**, and **DELETE**. Example: `["GET", "OPTIONS", "POST"]`.
    
-   If **RuleConditionType** is set to **Cookie**, RuleConditionValue specifies the configurations of a cookie condition and the value of RuleConditionValue consists of key-value pairs. Example: `[{"cookie1":["value1"]}, {"cookie2":["value2"]}]`
    
    -   Key: The key of the cookie must be 1 to 100 characters in length, and can contain lowercase letters and printable characters whose ASCII values are `greater than or equal to 32 and less than 127`. The key cannot contain spaces or the following special characters: `# [ ] { } \ < > &`.
        
    -   Value: The value of the cookie must be 1 to 128 characters in length, and can contain lowercase letters and printable characters whose ASCII values are `greater than or equal to 32 and less than 127`. The value of the cookie cannot contain spaces or the following special characters: `# [ ] { } \ < > &`.
        
-   If **RuleConditionType** is set to **SourceIP**, RuleConditionValue specifies the configurations of a source IP address condition. IP addresses such as 1.1.XX.XX/32 and CIDR blocks such as 2.2.XX.XX/24 are supported. A forwarding rule can contain only one source IP address condition. You can specify multiple source IP addresses or CIDR blocks in a source IP address condition. The relationship between multiple IP addresses or CIDR blocks is OR. Example: `["1.1.XX.XX/32", "2.2.XX.XX/24"]`.
    

## Return values

Fn::GetAtt

ForwardingRuleIds: the IDs of the forwarding rules.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AcceleratorId:
    Type: String
    Description:
      en: The ID of the GA instance.
    Required: true
  ForwardingRules:
    AssociationPropertyMetadata:
      Parameter:
        AssociationPropertyMetadata:
          Parameters:
            RuleActions:
              AssociationPropertyMetadata:
                Parameters:
                  RuleActionType:
                    Type: String
                    Description:
                      en: |
                        The type of the forwarding action. Valid values:
                        * ForwardGroup: forwards a request.
                        * Redirect: redirects a request.
                        * FixResponse: returns a fixed response. 
                        * Rewrite: rewrites a request. 
                        * AddHeader: adds a header to a request. 
                        * RemoveHeaderConfig: deletes the header from a request. 
                    AllowedValues:
                      - ForwardGroup
                      - Redirect
                      - FixResponseRewrite
                      - AddHeaderRemoveHeaderConfig
                    Required: true
                  Order:
                    Type: Number
                    Description:
                      en: The forwarding priority.
                    Required: true
                  RuleActionValue:
                    Type: String
                    Description:
                      en: |-
                        The value of the forwarding action type. You must specify different JSON strings based on the RuleActionType parameter. A forwarding rule can contain only one forwarding action whose type is ForwardGroup, Redirect, or FixResponse. You must specify a forwarding action whose type is Rewrite, AddHeader, or RemoveHeader before a forwarding action whose type is ForwardGroup. 
                        * If RuleActionType is set to ForwardGroup, this parameter specifies the information of a virtual endpoint group. You can forward requests to only one virtual endpoint group. Example: {"type":"endpointgroup", "value":"epg-bp1enpdcrqhl78g6r****"}. 
                          * type: set this parameter to endpointgroup.
                          * value: set this parameter to the ID of a virtual endpoint group.
                        * If RuleActionType is set to Redirect, this parameter specifies redirecting configurations. You cannot leave all of the following parameters empty or configure all of these parameters to use the default values for a forwarding action whose type is Redirect: protocol, domain, port, path, and query. Example: {"protocol":"HTTP", "domain":"www.example.com", "port":"80", "path":"/a","query":"value1", "code":"301" }.
                          * protocol: the protocol of requests after the requests are redirected. Valid values: ${protocol} (default), HTTP, and HTTPS.
                          * domain: the domain name to which requests are redirected. Default value: ${host}. You can also enter a domain name. The domain name must be 3 to 128 characters in length, and can contain only letters, digits, and the following special characters: . - ?  = ~ _ - + / ^ * !  $ & | ( ) [ ].
                          * port: the port to which requests are redirected. Default value: ${port}. You can enter a port number that ranges from 1 to 63335.
                          * path: the path to which requests are redirected. Default value: ${path}. The path must be 1 to 128 characters in length. To use a regular expression, the path can contain letters, digits, and the following special characters: . - _ / = ?  ~ ^ * $ : ( ) [ ] + |. The path must start with a tilde (~). If you do not want to use a regular expression, the path can contain letters, digits, and the following special characters: . - _ / = ?  :. The path must start with a forward slash (/).
                          * query: the query string of the requests to be redirected. Default value: ${query}. You can also specify a query string. The query string must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The query string cannot contain uppercase letters, space characters, or the following special characters: [ ] { } < > # | &.
                          * code: the redirecting code. Valid values: 301, 302, 303, 307, and 308.
                        * If RuleActionType is set to FixResponse, this parameter specifies a fixed response. Example: {"code":"200", "type":"text/plain", "content":"dssacav" }.
                          * code: the HTTP status code to return. The response status code must be one of the following numeric strings: 2xx, 4xx, and 5xx. The letter x indicates a number from 0 to 9.
                          * type: the type of the response content. Valid values: text/plain, text/css, text/html, application/javascript, and application/json.
                          * content: the response content. The response content cannot exceed 1,000 characters in length and does not support Chinese characters.
                        * If RuleActionType is set to AddHeader, this parameter specifies an HTTP header to be added. If a forwarding rule contains a forwarding action whose type is AddHeader, you must specify another forwarding action whose type is ForwardGroup. Example: [{"name":"header1","type":"userdefined", "value":"value"}].
                          * name: the name of the HTTP header. The name must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). The name of the HTTP header specified by AddHeader must be unique and cannot be the same as the name of the HTTP header specified by RemoveHeader.
                          * type: the content type of the HTTP header. Valid values: user-defined, ref, and system-defined.
                          * value: the content of the HTTP header. You cannot leave this parameter empty. If you set type to user-defined, the content must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The content can contain letters, digits, hyphens (-), and underscores (_). The content cannot start or end with a space character. If you set type to ref, the content must be 1 to 128 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). The content cannot start or end with a space character. If you set type to system-defined, only ClientSrcIp is supported.
                        * If RuleActionType is set to RemoveHeader, this parameter specifies an HTTP header to be removed. If a forwarding rule contains a forwarding action whose type is RemoveHeader, you must specify another forwarding action whose type is ForwardGroup. The header must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). Example: ["header1"].
                        * If RuleActionType is set to Rewrite, this parameter specifies the rewriting configuration. If a forwarding rule contains a forwarding action whose type is Rewrite, you must specify another forwarding action whose type is ForwardGroup. Example: {"domain":"value1", "path":"value2", "query":"value3"}.
                          * domain: the domain name to which requests are redirected. Default value: ${host}. You can also enter a domain name. The domain name must be 3 to 128 characters in length, and can contain only lowercase letters, digits, and the following special characters: . - ?  = ~ _ - + / ^ * !  $ & | ( ) [ ].
                          * path: the path to which requests are redirected. Default value: ${path}. The path must be 1 to 128 characters in length. To use a regular expression, the path can contain letters, digits, and the following special characters: . - _ / = ?  ~ ^ * $ : ( ) [ ] + |. The path must start with a tilde (~). If you do not want to use a regular expression, the path can contain letters, digits, and the following special characters: . - _ / = ?  :. The path must start with a forward slash (/).
                          * query: the query string of the requests to be redirected. Default value: ${query}. You can also specify a query string. The query string must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The query string cannot contain uppercase letters, space characters, or the following special characters: [ ] { } < > # | &.
                    Required: false
              AssociationProperty: List[Parameters]
              Type: Json
              Description:
                en: The forwarding action.
              Required: true
              MinLength: 1
              MaxLength: 100
            Priority:
              Type: Number
              Description:
                en: 'The priority of the forwarding rule. Valid values: 1 to 10000. A lower value indicates a higher priority.'
              Required: false
              MinValue: 1
              MaxValue: 10000
            ForwardingRuleName:
              Type: String
              Description:
                en: The name of the forwarding rule. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
              Required: false
              MinLength: 2
              MaxLength: 128
            RuleConditions:
              AssociationPropertyMetadata:
                Parameters:
                  RuleConditionType:
                    Type: String
                    Description:
                      en: |-
                        The type of the forwarding conditions. Valid values:
                        * Host: domain name
                        * Path: path
                        * RequestHeader: HTTP header
                        * Query: query string
                        * Method: HTTP method
                        * Cookie: cookie
                        * SourceIP: source IP address
                    AllowedValues:
                      - Host
                      - Path
                      - RequestHeader
                      - Query
                      - Method
                      - Cookie
                      - SourceIP
                    Required: false
                  RuleConditionValue:
                    Type: String
                    Description:
                      en: The endpoint port that is mapped to the listener port.
                    Required: false
              AssociationProperty: List[Parameters]
              Type: Json
              Description:
                en: The forwarding conditions.
              Required: true
              MinLength: 1
              MaxLength: 100
            RuleDirection:
              Type: String
              Description:
                en: The direction in which the rule takes effect. You do not need to set this parameter. By default, this parameter is set to request, which indicates that the rule takes effect on requests.
              AllowedValues:
                - request
              Required: false
        Type: Json
        Required: false
    AssociationProperty: List[Parameter]
    Type: Json
    Description:
      en: Details about the forwarding rules.
    Required: true
    MinLength: 1
    MaxLength: 200
  ListenerId:
    Type: String
    Description:
      en: The ID of the listener.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::GA::ForwardingRules
    Properties:
      AcceleratorId:
        Ref: AcceleratorId
      ForwardingRules:
        Ref: ForwardingRules
      ListenerId:
        Ref: ListenerId
Outputs:
  ForwardingRuleIds:
    Description: The IDs of the endpoint groups.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ForwardingRuleIds
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "AcceleratorId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the GA instance."
      },
      "Required": true
    },
    "ForwardingRules": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "AssociationPropertyMetadata": {
            "Parameters": {
              "RuleActions": {
                "AssociationPropertyMetadata": {
                  "Parameters": {
                    "RuleActionType": {
                      "Type": "String",
                      "Description": {
                        "en": "The type of the forwarding action. Valid values:\n* ForwardGroup: forwards a request.\n* Redirect: redirects a request.\n* FixResponse: returns a fixed response. \n* Rewrite: rewrites a request. \n* AddHeader: adds a header to a request. \n* RemoveHeaderConfig: deletes the header from a request. \n"
                      },
                      "AllowedValues": [
                        "ForwardGroup",
                        "Redirect",
                        "FixResponseRewrite",
                        "AddHeaderRemoveHeaderConfig"
                      ],
                      "Required": true
                    },
                    "Order": {
                      "Type": "Number",
                      "Description": {
                        "en": "The forwarding priority."
                      },
                      "Required": true
                    },
                    "RuleActionValue": {
                      "Type": "String",
                      "Description": {
                        "en": "The value of the forwarding action type. You must specify different JSON strings based on the RuleActionType parameter. A forwarding rule can contain only one forwarding action whose type is ForwardGroup, Redirect, or FixResponse. You must specify a forwarding action whose type is Rewrite, AddHeader, or RemoveHeader before a forwarding action whose type is ForwardGroup. \n* If RuleActionType is set to ForwardGroup, this parameter specifies the information of a virtual endpoint group. You can forward requests to only one virtual endpoint group. Example: {\"type\":\"endpointgroup\", \"value\":\"epg-bp1enpdcrqhl78g6r****\"}. \n  * type: set this parameter to endpointgroup.\n  * value: set this parameter to the ID of a virtual endpoint group.\n* If RuleActionType is set to Redirect, this parameter specifies redirecting configurations. You cannot leave all of the following parameters empty or configure all of these parameters to use the default values for a forwarding action whose type is Redirect: protocol, domain, port, path, and query. Example: {\"protocol\":\"HTTP\", \"domain\":\"www.example.com\", \"port\":\"80\", \"path\":\"/a\",\"query\":\"value1\", \"code\":\"301\" }.\n  * protocol: the protocol of requests after the requests are redirected. Valid values: ${protocol} (default), HTTP, and HTTPS.\n  * domain: the domain name to which requests are redirected. Default value: ${host}. You can also enter a domain name. The domain name must be 3 to 128 characters in length, and can contain only letters, digits, and the following special characters: . - ?  = ~ _ - + / ^ * !  $ & | ( ) [ ].\n  * port: the port to which requests are redirected. Default value: ${port}. You can enter a port number that ranges from 1 to 63335.\n  * path: the path to which requests are redirected. Default value: ${path}. The path must be 1 to 128 characters in length. To use a regular expression, the path can contain letters, digits, and the following special characters: . - _ / = ?  ~ ^ * $ : ( ) [ ] + |. The path must start with a tilde (~). If you do not want to use a regular expression, the path can contain letters, digits, and the following special characters: . - _ / = ?  :. The path must start with a forward slash (/).\n  * query: the query string of the requests to be redirected. Default value: ${query}. You can also specify a query string. The query string must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The query string cannot contain uppercase letters, space characters, or the following special characters: [ ] { } < > # | &.\n  * code: the redirecting code. Valid values: 301, 302, 303, 307, and 308.\n* If RuleActionType is set to FixResponse, this parameter specifies a fixed response. Example: {\"code\":\"200\", \"type\":\"text/plain\", \"content\":\"dssacav\" }.\n  * code: the HTTP status code to return. The response status code must be one of the following numeric strings: 2xx, 4xx, and 5xx. The letter x indicates a number from 0 to 9.\n  * type: the type of the response content. Valid values: text/plain, text/css, text/html, application/javascript, and application/json.\n  * content: the response content. The response content cannot exceed 1,000 characters in length and does not support Chinese characters.\n* If RuleActionType is set to AddHeader, this parameter specifies an HTTP header to be added. If a forwarding rule contains a forwarding action whose type is AddHeader, you must specify another forwarding action whose type is ForwardGroup. Example: [{\"name\":\"header1\",\"type\":\"userdefined\", \"value\":\"value\"}].\n  * name: the name of the HTTP header. The name must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). The name of the HTTP header specified by AddHeader must be unique and cannot be the same as the name of the HTTP header specified by RemoveHeader.\n  * type: the content type of the HTTP header. Valid values: user-defined, ref, and system-defined.\n  * value: the content of the HTTP header. You cannot leave this parameter empty. If you set type to user-defined, the content must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The content can contain letters, digits, hyphens (-), and underscores (_). The content cannot start or end with a space character. If you set type to ref, the content must be 1 to 128 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). The content cannot start or end with a space character. If you set type to system-defined, only ClientSrcIp is supported.\n* If RuleActionType is set to RemoveHeader, this parameter specifies an HTTP header to be removed. If a forwarding rule contains a forwarding action whose type is RemoveHeader, you must specify another forwarding action whose type is ForwardGroup. The header must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). Example: [\"header1\"].\n* If RuleActionType is set to Rewrite, this parameter specifies the rewriting configuration. If a forwarding rule contains a forwarding action whose type is Rewrite, you must specify another forwarding action whose type is ForwardGroup. Example: {\"domain\":\"value1\", \"path\":\"value2\", \"query\":\"value3\"}.\n  * domain: the domain name to which requests are redirected. Default value: ${host}. You can also enter a domain name. The domain name must be 3 to 128 characters in length, and can contain only lowercase letters, digits, and the following special characters: . - ?  = ~ _ - + / ^ * !  $ & | ( ) [ ].\n  * path: the path to which requests are redirected. Default value: ${path}. The path must be 1 to 128 characters in length. To use a regular expression, the path can contain letters, digits, and the following special characters: . - _ / = ?  ~ ^ * $ : ( ) [ ] + |. The path must start with a tilde (~). If you do not want to use a regular expression, the path can contain letters, digits, and the following special characters: . - _ / = ?  :. The path must start with a forward slash (/).\n  * query: the query string of the requests to be redirected. Default value: ${query}. You can also specify a query string. The query string must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The query string cannot contain uppercase letters, space characters, or the following special characters: [ ] { } < > # | &."
                      },
                      "Required": false
                    }
                  }
                },
                "AssociationProperty": "List[Parameters]",
                "Type": "Json",
                "Description": {
                  "en": "The forwarding action."
                },
                "Required": true,
                "MinLength": 1,
                "MaxLength": 100
              },
              "Priority": {
                "Type": "Number",
                "Description": {
                  "en": "The priority of the forwarding rule. Valid values: 1 to 10000. A lower value indicates a higher priority."
                },
                "Required": false,
                "MinValue": 1,
                "MaxValue": 10000
              },
              "ForwardingRuleName": {
                "Type": "String",
                "Description": {
                  "en": "The name of the forwarding rule. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter."
                },
                "Required": false,
                "MinLength": 2,
                "MaxLength": 128
              },
              "RuleConditions": {
                "AssociationPropertyMetadata": {
                  "Parameters": {
                    "RuleConditionType": {
                      "Type": "String",
                      "Description": {
                        "en": "The type of the forwarding conditions. Valid values:\n* Host: domain name\n* Path: path\n* RequestHeader: HTTP header\n* Query: query string\n* Method: HTTP method\n* Cookie: cookie\n* SourceIP: source IP address"
                      },
                      "AllowedValues": [
                        "Host",
                        "Path",
                        "RequestHeader",
                        "Query",
                        "Method",
                        "Cookie",
                        "SourceIP"
                      ],
                      "Required": false
                    },
                    "RuleConditionValue": {
                      "Type": "String",
                      "Description": {
                        "en": "The endpoint port that is mapped to the listener port."
                      },
                      "Required": false
                    }
                  }
                },
                "AssociationProperty": "List[Parameters]",
                "Type": "Json",
                "Description": {
                  "en": "The forwarding conditions."
                },
                "Required": true,
                "MinLength": 1,
                "MaxLength": 100
              },
              "RuleDirection": {
                "Type": "String",
                "Description": {
                  "en": "The direction in which the rule takes effect. You do not need to set this parameter. By default, this parameter is set to request, which indicates that the rule takes effect on requests."
                },
                "AllowedValues": [
                  "request"
                ],
                "Required": false
              }
            }
          },
          "Type": "Json",
          "Required": false
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "Details about the forwarding rules."
      },
      "Required": true,
      "MinLength": 1,
      "MaxLength": 200
    },
    "ListenerId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the listener."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::GA::ForwardingRules",
      "Properties": {
        "AcceleratorId": {
          "Ref": "AcceleratorId"
        },
        "ForwardingRules": {
          "Ref": "ForwardingRules"
        },
        "ListenerId": {
          "Ref": "ListenerId"
        }
      }
    }
  },
  "Outputs": {
    "ForwardingRuleIds": {
      "Description": "The IDs of the endpoint groups.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ForwardingRuleIds"
        ]
      }
    }
  }
}
                        
```
