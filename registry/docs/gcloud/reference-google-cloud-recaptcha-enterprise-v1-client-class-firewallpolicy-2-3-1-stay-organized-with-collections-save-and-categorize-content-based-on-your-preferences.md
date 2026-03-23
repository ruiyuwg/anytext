-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Recaptcha Enterprise V1 Client - Class FirewallPolicy (2.3.1) Stay organized with collections Save and categorize content based on your preferences.

2.3.1 (latest) 2.3.0 2.2.1 2.1.3 2.0.1 1.17.2 1.16.1 1.15.0 1.14.0 1.13.0 1.12.2 1.8.0 1.7.0 1.6.0 1.5.2 1.4.2 1.3.2 1.2.6

Reference documentation and code samples for the Google Cloud Recaptcha Enterprise V1 Client class FirewallPolicy.

A FirewallPolicy represents a single matching pattern and resulting actions to take.

Generated from protobuf message `google.cloud.recaptchaenterprise.v1.FirewallPolicy`

## Namespace

Google \\ Cloud \\ RecaptchaEnterprise \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ name`

`string`  

Identifier. The resource name for the FirewallPolicy in the format `projects/{project}/firewallpolicies/{firewallpolicy}`.

`↳ description`

`string`  

Optional. A description of what this policy aims to achieve, for convenience purposes. The description can at most include 256 UTF-8 characters.

`↳ path`

`string`  

Optional. The path for which this policy applies, specified as a glob pattern. For more information on glob, see the [manual page](https://man7.org/linux/man-pages/man7/glob.7.html). A path has a max length of 200 characters.

`↳ condition`

`string`  

Optional. A CEL (Common Expression Language) conditional expression that specifies if this policy applies to an incoming user request. If this condition evaluates to true and the requested path matched the path pattern, the associated actions should be executed by the caller. The condition string is checked for CEL syntax correctness on creation. For more information, see the [CEL spec](https://github.com/google/cel-spec) and its [language definition](https://github.com/google/cel-spec/blob/master/doc/langdef.md). A condition has a max length of 500 characters.

`↳ actions`

`array<[FirewallAction](/php/docs/reference/cloud-recaptcha-enterprise/latest/V1.FirewallAction)>`  

Optional. The actions that the caller should take regarding user access. There should be at most one terminal action. A terminal action is any action that forces a response, such as `AllowAction`, `BlockAction` or `SubstituteAction`. Zero or more non-terminal actions such as `SetHeader` might be specified. A single policy can contain up to 16 actions.

### getName

Identifier. The resource name for the FirewallPolicy in the format `projects/{project}/firewallpolicies/{firewallpolicy}`.

**Returns**

**Type**

**Description**

`string`

### setName

Identifier. The resource name for the FirewallPolicy in the format `projects/{project}/firewallpolicies/{firewallpolicy}`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDescription

Optional. A description of what this policy aims to achieve, for convenience purposes. The description can at most include 256 UTF-8 characters.

**Returns**

**Type**

**Description**

`string`

### setDescription

Optional. A description of what this policy aims to achieve, for convenience purposes. The description can at most include 256 UTF-8 characters.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPath

Optional. The path for which this policy applies, specified as a glob pattern. For more information on glob, see the [manual page](https://man7.org/linux/man-pages/man7/glob.7.html).

A path has a max length of 200 characters.

**Returns**

**Type**

**Description**

`string`

### setPath

Optional. The path for which this policy applies, specified as a glob pattern. For more information on glob, see the [manual page](https://man7.org/linux/man-pages/man7/glob.7.html).

A path has a max length of 200 characters.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCondition

Optional. A CEL (Common Expression Language) conditional expression that specifies if this policy applies to an incoming user request. If this condition evaluates to true and the requested path matched the path pattern, the associated actions should be executed by the caller. The condition string is checked for CEL syntax correctness on creation. For more information, see the [CEL spec](https://github.com/google/cel-spec) and its [language definition](https://github.com/google/cel-spec/blob/master/doc/langdef.md).

A condition has a max length of 500 characters.

**Returns**

**Type**

**Description**

`string`

### setCondition

Optional. A CEL (Common Expression Language) conditional expression that specifies if this policy applies to an incoming user request. If this condition evaluates to true and the requested path matched the path pattern, the associated actions should be executed by the caller. The condition string is checked for CEL syntax correctness on creation. For more information, see the [CEL spec](https://github.com/google/cel-spec) and its [language definition](https://github.com/google/cel-spec/blob/master/doc/langdef.md).

A condition has a max length of 500 characters.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getActions

Optional. The actions that the caller should take regarding user access.

There should be at most one terminal action. A terminal action is any action that forces a response, such as `AllowAction`, `BlockAction` or `SubstituteAction`. Zero or more non-terminal actions such as `SetHeader` might be specified. A single policy can contain up to 16 actions.

**Returns**

**Type**

**Description**

`[Google\Protobuf\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/RepeatedField)<[FirewallAction](/php/docs/reference/cloud-recaptcha-enterprise/latest/V1.FirewallAction)>`

### setActions

Optional. The actions that the caller should take regarding user access.

There should be at most one terminal action. A terminal action is any action that forces a response, such as `AllowAction`, `BlockAction` or `SubstituteAction`. Zero or more non-terminal actions such as `SetHeader` might be specified. A single policy can contain up to 16 actions.

**Parameter**

**Name**

**Description**

`var`

`array<[FirewallAction](/php/docs/reference/cloud-recaptcha-enterprise/latest/V1.FirewallAction)>`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
