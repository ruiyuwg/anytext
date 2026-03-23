-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface RolloutEventDataOrBuilder (0.16.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [0.16.0 (latest)](/java/docs/reference/google-cloudevent-types/latest/com.google.events.cloud.deploy.v1.RolloutEventDataOrBuilder)
-   [0.15.0](/java/docs/reference/google-cloudevent-types/0.15.0/com.google.events.cloud.deploy.v1.RolloutEventDataOrBuilder)
-   [0.14.1](/java/docs/reference/google-cloudevent-types/0.14.1/com.google.events.cloud.deploy.v1.RolloutEventDataOrBuilder)

```
public interface RolloutEventDataOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getPayload()

```
public abstract Rollout getPayload()
```

The Rollout event payload.

`.google.events.cloud.deploy.v1.Rollout payload = 1;`

**Returns**

**Type**

**Description**

`[Rollout](/java/docs/reference/google-cloudevent-types/latest/com.google.events.cloud.deploy.v1.Rollout)`

The payload.

### getPayloadOrBuilder()

```
public abstract RolloutOrBuilder getPayloadOrBuilder()
```

The Rollout event payload.

`.google.events.cloud.deploy.v1.Rollout payload = 1;`

**Returns**

**Type**

**Description**

`[RolloutOrBuilder](/java/docs/reference/google-cloudevent-types/latest/com.google.events.cloud.deploy.v1.RolloutOrBuilder)`

### hasPayload()

```
public abstract boolean hasPayload()
```

The Rollout event payload.

`.google.events.cloud.deploy.v1.Rollout payload = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the payload field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
