-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Access and resource management](https://docs.cloud.google.com/docs/access-resources)
-   [Config Connector](https://docs.cloud.google.com/config-connector/docs)
-   [API and reference](https://docs.cloud.google.com/config-connector/docs/reference/overview)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

# SpannerDatabase

**Property**

**Value**

Google Cloud Service Name

Cloud Spanner

Google Cloud Service Documentation

[/spanner/docs/](/spanner/docs)

Google Cloud REST Resource Name

v1.projects.instances.databases

Google Cloud REST Resource Documentation

[/spanner/docs/reference/rest/v1/projects.instances.databases](/spanner/docs/reference/rest/v1/projects.instances.databases)

Config Connector Resource Short Names

gcpspannerdatabase  
gcpspannerdatabases  
spannerdatabase

Config Connector Service Name

spanner.googleapis.com

Config Connector Resource Fully Qualified Name

spannerdatabases.spanner.cnrm.cloud.google.com

Can Be Referenced by IAMPolicy/IAMPolicyMember

Yes

Supports IAM Conditions

Yes

Supports IAM Audit Configs

No

IAM External Reference Format

projects/{{project}}/instances/{{instance}}/databases/{{name}}

Config Connector Default Average Reconcile Interval In Seconds

600

## Custom Resource Definition Properties

### Annotations

Fields

`cnrm.cloud.google.com/project-id`

### Spec

#### Schema

```
databaseDialect: string
ddl:
- string
enableDropProtection: boolean
encryptionConfig:
  kmsKeyRef:
    external: string
    name: string
    namespace: string
instanceRef:
  external: string
  name: string
  namespace: string
resourceID: string
versionRetentionPeriod: string
```

Fields

`databaseDialect`

_Optional_

`string`

Immutable. The dialect of the Cloud Spanner Database. If it is not provided, "GOOGLE\_STANDARD\_SQL" will be used. Possible values: \["GOOGLE\_STANDARD\_SQL", "POSTGRESQL"\].

`ddl`

_Optional_

`list (string)`

An optional list of DDL statements to run inside the newly created database. Statements can create tables, indexes, etc. These statements execute atomically with the creation of the database: if there is an error in any statement, the database is not created.

`ddl[]`

_Optional_

`string`

`enableDropProtection`

_Optional_

`boolean`

`encryptionConfig`

_Optional_

`object`

Immutable. Encryption configuration for the database.

`encryptionConfig.kmsKeyRef`

_Required\*_

`object`

Fully qualified name of the KMS key to use to encrypt this database. This key must exist in the same location as the Spanner Database.

`encryptionConfig.kmsKeyRef.external`

_Optional_

`string`

Allowed value: The \`selfLink\` field of a \`KMSCryptoKey\` resource.

`encryptionConfig.kmsKeyRef.name`

_Optional_

`string`

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names

`encryptionConfig.kmsKeyRef.namespace`

_Optional_

`string`

Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/

`instanceRef`

_Required_

`object`

The instance to create the database on.

`instanceRef.external`

_Optional_

`string`

Allowed value: The \`name\` field of a \`SpannerInstance\` resource.

`instanceRef.name`

_Optional_

`string`

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names

`instanceRef.namespace`

_Optional_

`string`

Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/

`resourceID`

_Optional_

`string`

Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of \`metadata.name\` is used as the default.

`versionRetentionPeriod`

_Optional_

`string`

The retention period for the database. The retention period must be between 1 hour and 7 days, and can be specified in days, hours, minutes, or seconds. For example, the values 1d, 24h, 1440m, and 86400s are equivalent. Default value is 1h. If this property is used, you must avoid adding new DDL statements to 'ddl' that update the database's version\_retention\_period.

\* Field is required when parent field is specified

### Status

#### Schema

```
conditions:
- lastTransitionTime: string
  message: string
  reason: string
  status: string
  type: string
observedGeneration: integer
state: string
```

Fields

`conditions`

`list (object)`

Conditions represent the latest available observation of the resource's current state.

`conditions[]`

`object`

`conditions[].lastTransitionTime`

`string`

Last time the condition transitioned from one status to another.

`conditions[].message`

`string`

Human-readable message indicating details about last transition.

`conditions[].reason`

`string`

Unique, one-word, CamelCase reason for the condition's last transition.

`conditions[].status`

`string`

Status is the status of the condition. Can be True, False, Unknown.

`conditions[].type`

`string`

Type is the type of the condition.

`observedGeneration`

`integer`

ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.

`state`

`string`

An explanation of the status of the database.

## Sample YAML(s)

### Typical Use Case

```
# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

apiVersion: spanner.cnrm.cloud.google.com/v1beta1
kind: SpannerDatabase
metadata:
  name: spannerdatabase-sample
spec:
  instanceRef:
    name: spannerdatabase-dep
  ddl:
  - "CREATE TABLE t1 (t1 INT64 NOT NULL,) PRIMARY KEY(t1)"
---
apiVersion: spanner.cnrm.cloud.google.com/v1beta1
kind: SpannerInstance
metadata:
  name: spannerdatabase-dep
  annotations:
    alpha.cnrm.cloud.google.com/reconciler: "direct"
spec:
  config: regional-us-west1
  displayName: Spanner Database Dependency
```

**Note:** If you have any trouble with instantiating the resource, refer to [Troubleshoot Config Connector](/config-connector/docs/troubleshooting).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
