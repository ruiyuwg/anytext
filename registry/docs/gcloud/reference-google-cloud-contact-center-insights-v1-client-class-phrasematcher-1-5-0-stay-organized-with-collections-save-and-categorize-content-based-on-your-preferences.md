-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Contact Center Insights V1 Client - Class PhraseMatcher (1.5.0) Stay organized with collections Save and categorize content based on your preferences.

2.4.2 (latest) 2.4.1 2.3.3 2.2.1 2.1.1 2.0.1 1.9.5 1.8.0 1.7.1 1.6.2 1.5.0 1.4.1 1.3.0 1.2.1 1.1.0 1.0.3

Reference documentation and code samples for the Google Cloud Contact Center Insights V1 Client class PhraseMatcher.

The phrase matcher resource.

Generated from protobuf message `google.cloud.contactcenterinsights.v1.PhraseMatcher`

## Namespace

Google \\ Cloud \\ ContactCenterInsights \\ V1

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

The resource name of the phrase matcher. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase\_matcher}

`↳ revision_id`

`string`  

Output only. Immutable. The revision ID of the phrase matcher. A new revision is committed whenever the matcher is changed, except when it is activated or deactivated. A server generated random ID will be used. Example: locations/global/phraseMatchers/my-first-matcher@1234567

`↳ version_tag`

`string`  

The customized version tag to use for the phrase matcher. If not specified, it will default to `revision_id`.

`↳ revision_create_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. The timestamp of when the revision was created. It is also the create time when a new matcher is added.

`↳ display_name`

`string`  

The human-readable name of the phrase matcher.

`↳ type`

`int`  

Required. The type of this phrase matcher.

`↳ active`

`bool`  

Applies the phrase matcher only when it is active.

`↳ phrase_match_rule_groups`

`array<[Google\Cloud\ContactCenterInsights\V1\PhraseMatchRuleGroup](/php/docs/reference/cloud-contact-center-insights/1.5.0/V1.PhraseMatchRuleGroup)>`  

A list of phase match rule groups that are included in this matcher.

`↳ activation_update_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. The most recent time at which the activation status was updated.

`↳ role_match`

`int`  

The role whose utterances the phrase matcher should be matched against. If the role is ROLE\_UNSPECIFIED it will be matched against any utterances in the transcript.

`↳ update_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Output only. The most recent time at which the phrase matcher was updated.

### getName

The resource name of the phrase matcher.

Format: projects/{project}/locations/{location}/phraseMatchers/{phrase\_matcher}

**Returns**

**Type**

**Description**

`string`

### setName

The resource name of the phrase matcher.

Format: projects/{project}/locations/{location}/phraseMatchers/{phrase\_matcher}

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getRevisionId

Output only. Immutable. The revision ID of the phrase matcher.

A new revision is committed whenever the matcher is changed, except when it is activated or deactivated. A server generated random ID will be used. Example: locations/global/phraseMatchers/my-first-matcher@1234567

**Returns**

**Type**

**Description**

`string`

### setRevisionId

Output only. Immutable. The revision ID of the phrase matcher.

A new revision is committed whenever the matcher is changed, except when it is activated or deactivated. A server generated random ID will be used. Example: locations/global/phraseMatchers/my-first-matcher@1234567

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getVersionTag

The customized version tag to use for the phrase matcher. If not specified, it will default to `revision_id`.

**Returns**

**Type**

**Description**

`string`

### setVersionTag

The customized version tag to use for the phrase matcher. If not specified, it will default to `revision_id`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getRevisionCreateTime

Output only. The timestamp of when the revision was created. It is also the create time when a new matcher is added.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasRevisionCreateTime

### clearRevisionCreateTime

### setRevisionCreateTime

Output only. The timestamp of when the revision was created. It is also the create time when a new matcher is added.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getDisplayName

The human-readable name of the phrase matcher.

**Returns**

**Type**

**Description**

`string`

### setDisplayName

The human-readable name of the phrase matcher.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getType

Required. The type of this phrase matcher.

**Returns**

**Type**

**Description**

`int`

### setType

Required. The type of this phrase matcher.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getActive

Applies the phrase matcher only when it is active.

**Returns**

**Type**

**Description**

`bool`

### setActive

Applies the phrase matcher only when it is active.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getPhraseMatchRuleGroups

A list of phase match rule groups that are included in this matcher.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setPhraseMatchRuleGroups

A list of phase match rule groups that are included in this matcher.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\ContactCenterInsights\V1\PhraseMatchRuleGroup](/php/docs/reference/cloud-contact-center-insights/1.5.0/V1.PhraseMatchRuleGroup)>`  

**Returns**

**Type**

**Description**

`$this`

### getActivationUpdateTime

Output only. The most recent time at which the activation status was updated.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasActivationUpdateTime

### clearActivationUpdateTime

### setActivationUpdateTime

Output only. The most recent time at which the activation status was updated.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getRoleMatch

The role whose utterances the phrase matcher should be matched against. If the role is ROLE\_UNSPECIFIED it will be matched against any utterances in the transcript.

**Returns**

**Type**

**Description**

`int`

### setRoleMatch

The role whose utterances the phrase matcher should be matched against. If the role is ROLE\_UNSPECIFIED it will be matched against any utterances in the transcript.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getUpdateTime

Output only. The most recent time at which the phrase matcher was updated.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasUpdateTime

### clearUpdateTime

### setUpdateTime

Output only. The most recent time at which the phrase matcher was updated.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
