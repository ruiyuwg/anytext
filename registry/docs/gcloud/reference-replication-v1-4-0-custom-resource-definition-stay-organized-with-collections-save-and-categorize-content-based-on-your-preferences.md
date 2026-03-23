This page documents AlloyDB Omni version **15.7.1** using the **Kubernetes** deployment option. [Choose a different deployment option](/alloydb/omni/docs/choose-deployment).

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Databases](https://docs.cloud.google.com/docs/databases)
-   [AlloyDB Omni](https://docs.cloud.google.com/alloydb/omni/docs)
-   [For Kubernetes: 15.7.1](https://docs.cloud.google.com/alloydb/omni/kubernetes/15.7.1/docs/overview)
-   [Reference](https://docs.cloud.google.com/alloydb/omni/kubernetes/15.7.1/docs/choose-compatible-versions)

Send feedback

# Replication v1.4.0 custom resource definition Stay organized with collections Save and categorize content based on your preferences.

Select a documentation version: 15.7.1keyboard\_arrow\_down

-   [Current (17.5.0)](/alloydb/omni/kubernetes/current/docs/reference/kubernetes-crds-1.4.0/replication)
-   [17.5.0](/alloydb/omni/kubernetes/17.5.0/docs/reference/kubernetes-crds-1.4.0/replication)
-   [16.9.0](/alloydb/omni/kubernetes/16.9.0/docs/reference/kubernetes-crds-1.4.0/replication)
-   [16.8.0](/alloydb/omni/kubernetes/16.8.0/docs/reference/kubernetes-crds-1.4.0/replication)
-   [16.3.0](/alloydb/omni/kubernetes/16.3.0/docs/reference/kubernetes-crds-1.4.0/replication)
-   [15.13.0](/alloydb/omni/kubernetes/15.13.0/docs/reference/kubernetes-crds-1.4.0/replication)
-   [15.12.0](/alloydb/omni/kubernetes/15.12.0/docs/reference/kubernetes-crds-1.4.0/replication)
-   [15.7.1](/alloydb/omni/kubernetes/15.7.1/docs/reference/kubernetes-crds-1.4.0/replication)

## Spec schema

ReplicationSpec defines the desired state of Replication.

```
dbcluster:
  name: string
downstream:
  control: string
  host: string
  password:
    name: string
    namespace: string
  port: integer
  replicationSlotName: string
  username: string
upstream:
  applicationName: string
  logicalReplication:
    databaseName: string
    pluginName: string
  password:
    name: string
    namespace: string
  replicationSlotName: string
  synchronous: string
  username: string
```

Field

Type  
Required or optional

Description

`dbcluster`

`object`  
_Optional_

DBCluster is the DBCluster that this Replication belongs to.

`dbcluster.name`

`string`  
_Optional_

Name of the referent. For more information, see [Names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).

`downstream`

`object`  
_Optional_

Downstream contains specifications for replication downstream database.

`downstream.control`

`string`  
_Required_

Control specifies the replication operation to be taken on this database. The allowed values are setup, promote, and rewind.

`downstream.host`

`string`  
_Required_

Host is the upstream database's connection endpoint that this database can access for replication.

`downstream.password`

`object`  
_Required_

Password is the reference to the secret storing upstream database's replication user password.

`downstream.password.name`

`string`  
_Optional_

name is unique within a namespace to reference a secret resource.

`downstream.password.namespace`

`string`  
_Optional_

namespace defines the space within which the secret name must be unique.

`downstream.port`

`integer`  
_Optional_

Port is the upstream database's port that this database can access for replication. Default is 5432.

`downstream.replicationslotname`

`string`  
_Required_

ReplicationSlotName is the name of the replication slot created on the upstream database. It is used by this database for replication.

`downstream.username`

`string`  
_Required_

Username is the name of the replication user created on the upstream database. It is used by this database to connect to upstream for replication.

`upstream`

`object`  
_Optional_

Upstream contains spec for replication upstream database.

`upstream.applicationName`

`string`  
_Optional_

applicationName is the identifier of the synchronous replication connection. This value is required if Synchronous is set to "true".

`upstream.logicalReplication`

`object`  
_Optional_

LogicalReplication specifies the logical replication configuration for the replication slot. If empty, the replication slot is configured as a physical replication slot.

`upstream.logicalReplication.databaseName`

`string`  
_Optional_

DatabaseName is the database associated with this slot. Only changes from this database are streamed through the slot.

`upstream.logicalReplication.pluginName`

`string`  
_Optional_

PluginName is the decoding plugin associated with this slot. See [Logical Decoding Explanation](https://www.postgresql.org/docs/current/logicaldecoding-explanation.html#LOGICALDECODING-EXPLANATION-OUTPUT-PLUGINS) for details.

`upstream.password`

`object`  
_Required_

Password is the reference to the secret storing replication user password. If Password isn't provided, a password is generated and stored in a secret shown in status.

`upstream.password.name`

`string`  
_Optional_

name is unique within a namespace to reference a secret resource.

`upstream.password.namespace`

`string`  
_Optional_

namespace defines the space within which the secret name must be unique.

`upstream.replicationslotname`

`string`  
_Optional_

ReplicationSlotName is the name of the replication slot to be used for replication. If this isn't provided, a replication slot name is generated and shown in status.

`upstream.synchronous`

`string`  
_Optional_

Synchronous specifies whether the replication slot must be configured for synchronous replication. If true, the applicationName is added to the list of synchronous standbys. This defaults to `false`.  
**Note: This might have a negative impact on performance.**

`upstream.username`

`string`  
_Optional_

Username is the name of the replication user to be used for replication. If this isn't provided, a username is generated and shown in status.

## Status schema

ReplicationStatus defines the observed state of Replication.

```
conditions:
- lastTransitionTime: string
  message: string
  observedGeneration: integer
  reason: string
  status: string
  type: string
criticalIncidents:
- code: string
  createTime: string
  message: string
  messageTemplateParams: object
  resource:
    component: string
    location:
      cluster: string
      group: string
      kind: string
      name: string
      namespace: string
      version: string
  stackTrace:
  - component: string
    message: string
  transientUntil: string
downstream:
  physicalDownstream:
    passwordResourceVersion: string
    setupStrategies:
      endedAt: string
      message: string
      retries: integer
      startedAt: string
      state: string
      strategy: string
    state: string
observedGeneration: integer
reconciled: boolean
upstream:
  host: string
  password:
    name: string
    namespace: string
  port: integer
  replicationSlotName: string
  username: string
```

Field

Type  
Required or optional

Description

`conditions[]`

`object`  
_Optional_

Conditions represents the latest available observations of the entity's current state.

`conditions[].lastTransitionTime`

`string`  
_Required_

lastTransitionTime is the last time the condition transitioned from one status to another, which occurs when the underlying condition changed. If the time when the underlying condition changed is unknown, use the time when the API field changed.

`conditions[].message`

`string`  
_Required_

message is a human readable message indicating details about the transition. This can be an empty string.

`conditions[].observedGeneration`

`integer`  
_Optional_

observedGeneration represents the .metadata.generation that the condition was set based upon. For example, if .metadata.generation is 12, but the .status.conditions\[x\].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.

`conditions[].reason`

`string`  
_Required_

reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types can define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value must be a CamelCase string. This field might not be empty.

`conditions[].status`

`string`  
_Required_

status of the condition, one of True, False, Unknown.

`conditions[].type`

`string`  
_Required_

type of condition in CamelCase or in foo.example.com/CamelCase. Many .condition.type values are consistent across resources like Available. Because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regular expression that it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt).

`criticalIncidents[]`

`object`  
_Required_

CriticalIncidents is a flat list of all active Critical Incidents.

`criticalIncidents[].code`

`string`  
_Required_

Code is the error code of this particular error. Error codes are `DBSE+numeric` strings, like `DBSE1012`.

`criticalIncidents[].createTime`

`string`  
_Required_

CreateTime is the timestamp when this Incident was created at the origin.

`criticalIncidents[].message`

`string`  
_Optional_

Message describes the incident or error that occurred.

`criticalIncidents[].messageTemplateParams`

`object`  
_Optional_

MessageTemplateParams contains key-value pairs necessary for generating a user-friendly data-driven version of Message in the user interface.

`criticalIncidents[].resource`

`object`  
_Required_

Resource contains information about the Database Service component that reported the incident, as well as information about the Kubernetes resource.

`criticalIncidents[].resource.component`

`string`  
_Required_

Component is an internal identifier of the Database Service subsystem that reported the incident.

`criticalIncidents[].resource.location`

`object`  
_Optional_

Location.

`criticalIncidents[].resource.location.cluster`

`string`  
_Optional_

The name of the cluster of the affected Kubernetes resource.

`criticalIncidents[].resource.location.group`

`string`  
_Optional_

The Group name of the Kubernetes resource.

`criticalIncidents[].resource.location.kind`

`string`  
_Optional_

The Kind of the Kubernetes resource.

`criticalIncidents[].resource.location.name`

`string`  
_Optional_

The name of the affected Kubernetes resource.

`criticalIncidents[].resource.location.namespace`

`string`  
_Optional_

The namespace of the affected Kubernetes resource.

`criticalIncidents[].resource.location.version`

`string`  
_Optional_

The Version of the Kubernetes resource.

`criticalIncidents[].stackTrace[]`

`object`  
_Optional_

An unstructured list of messages from the stack trace.

`criticalIncidents[].stackTrace[].component`

`string`  
_Optional_

The name of a Database Service component that logged the message.

`criticalIncidents[].stackTrace.message`

`string`  
_Optional_

Logged message.

`criticalIncidents[].transientUntil`

`string`  
_Optional_

TransientUntil, if present, indicates that the issue must be considered transient until the specified time.

`downstream`

`object`  
_Optional_

Downstream contains the observed state of the replication downstream database.

`downstream.physicalDownstream`

`object`  
_Optional_

`downstream.physicalDownstream.passwordResourceVersion`

`string`  
_Optional_

PasswordResourceVersion is the resource version of the secret password. This version represents when the password was last updated on the database.

`downstream.physicalDownstream.setupStrategies`

`object`  
_Optional_

SetupStrategies contains information on the execution of each attempted setup strategy. They appear in this list in the same order as the strategies were defined in the spec.

`downstream.physicalDownstream.setupStrategies.endedAt`

`string`  
_Optional_

EndedAt is the time at which the most recent attempt of this strategy ended.

`downstream.physicalDownstream.setupStrategies.message`

`string`  
_Optional_

Message is a description of why the setup attempt is in the state it is.

`downstream.physicalDownstream.setupStrategies.retries`

`integer`  
_Optional_

Retries is the number of times this strategy has been retried.

`downstream.physicalDownstream.setupStrategies.startedAt`

`string`  
_Optional_

StartedAt is the time at which the most recent attempt of this strategy was started.

`downstream.physicalDownstream.setupStrategies.state`

`string`  
_Required_

State is the current state of this setup strategy. It accepts the following values:  
`InProgress`: The strategy is currently executing.  
`Success`: The strategy has successfully completed and no more setup strategies will be attempted.  
`Error`: The strategy has failed but will be retried. The Retries field will show how many times this strategy has been retried.  
`Fallback`: The strategy has failed and will not be reattempted. Instead we will fallback to the next available strategy if it exists.  
`Unknown`  

`downstream.physicalDownstream.setupStrategies.strategy`

`string`  
_Required_

Strategy is the name of the strategy type this status is for.

`downstream.physicalDownstream.state`

`object`  
_Optional_

State is the state of replication as seen in the pg\_stat\_wal\_receiver table of the downstream database server.

`observedgeneration`

`integer`  
_Optional_

Internal: The generation observed by the controller.

`reconciled`

`boolean`  
_Optional_

Internal: Whether the resource was reconciled by the controller.

`upstream`

`object`  
_Optional_

Upstream contains the observed state of the replication upstream database.

`upstream.host`

`string`  
_Optional_

Host is this database's connection endpoint that the downstream databases can access for replication.

`upstream.password`

`object`  
_Optional_

Password is the reference to the secret storing this database's replication user password.

`upstream.password.name`

`string`  
_Optional_

name is unique within a namespace to reference a secret resource.

`upstream.password.namespace`

`string`  
_Optional_

namespace defines the space within which the secret name must be unique.

`upstream.port`

`integer`  
_Optional_

Port is this database's port that downstream databases can access for replication.

`upstream.replicationslotname`

`string`  
_Optional_

ReplicationSlotName is the name of the replication slot created on this database. Downstream databases can use this replication slot for replication.

`upstream.username`

`string`  
_Optional_

Username is the name of the replication user on this database. Downstream databases can use this user to connect to this database for replication.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-23 UTC.
