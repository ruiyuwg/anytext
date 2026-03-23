This topic describes the elements you can configure in a lifecycle rule for OSS objects.

Each lifecycle rule has three parts:

-   **Rule metadata** — an ID and a status (enabled or disabled). Disabled rules are stored but never executed.
    
-   **A filter** — identifies the objects the rule applies to, by prefix, tag, or a combination of both.
    
-   **One or more actions** — what OSS does when the condition is met: convert the storage class (`Transition`) or delete the object (`Expiration`), for both current and noncurrent versions.
    

## Example

The following lifecycle configuration defines three rules:

```
<LifecycleConfiguration>
  <Rule>
    <ID>rule1</ID>
    <Prefix>logs/</Prefix>
    <Status>Enabled</Status>
    <Filter>
      <Not>
        <Prefix>logs1/</Prefix>
        <Tag><Key>key1</Key><Value>value1</Value></Tag>
      </Not>
    </Filter>
    <Expiration>
      <Days>10</Days>
    </Expiration>
  </Rule>
  <Rule>
    <ID>rule2</ID>
    <Prefix>doc/</Prefix>
    <Status>Disabled</Status>
    <Expiration>
      <CreatedBeforeDate>2017-12-31T00:00:00.000Z</CreatedBeforeDate>
    </Expiration>
  </Rule>
  <Rule>
    <ID>rule3</ID>
    <Prefix>logs2/</Prefix>
    <Tag><Key>xx</Key><Value>1</Value></Tag>
    <Status>Enabled</Status>
    <Transition>
      <Days>60</Days>
      <StorageClass>Archive</StorageClass>
    </Transition>
  </Rule>
</LifecycleConfiguration>
```

-   **rule1**: Deletes objects with the prefix `logs/` that were last modified 10 or more days ago. Objects with the prefix `logs1/` and the tag `key1:value1` are excluded.
    
-   **rule2**: Configured to delete objects with the prefix `doc/` modified before December 31, 2017 — but the rule is `Disabled` and has no effect.
    
-   **rule3**: Converts objects with the prefix `logs2/` and the tag `xx:1` to Archive storage class 60 days after they were last modified.
    

## ID

**Attribute**

**Value**

**Type**

String

**Required**

No

**Max length**

255 bytes

The unique identifier for the lifecycle rule. If omitted or left blank, OSS generates a unique ID automatically.

## Status

**Attribute**

**Value**

**Type**

Enum

**Values**

`Enabled`, `Disabled`

Controls whether the rule is active. Only rules with `Status` set to `Enabled` are executed by OSS.

## Prefix

**Attribute**

**Value**

**Type**

String

**Required**

No

Scopes the rule to objects whose names start with the specified prefix. Omit or leave blank to apply the rule to all objects in the bucket.

## Filter

**Attribute**

**Value**

**Type**

Container

**Required**

No

Specifies filter conditions for the rule. An object must satisfy all conditions in the `Filter` element to match the rule.

### Not

Use `Not` to exclude specific objects from a rule that targets objects by prefix or tag. Objects matching the prefix and tags inside `Not` are skipped.

> **Note:** The `Not` element applies only to the rule it is defined in. Other rules in the same lifecycle configuration are not affected.

**Example:** The following configuration demonstrates how `Not` scopes an exclusion to a single rule.

-   **rule1**: Deletes objects with the prefix `dir1/` after 30 days.
    
-   **rule2**: Configured to convert objects with the prefix `dir1/` to Infrequent Access (IA) storage after 20 days — excluding objects under `dir1/dir2/` via `Not` — but the rule is `Disabled` and has no effect.
    

```
<LifecycleConfiguration>
  <Rule>
    <ID>rule1</ID>
    <Prefix>dir1/</Prefix>
    <Status>Enabled</Status>
    <Expiration>
      <Days>30</Days>
    </Expiration>
  </Rule>
  <Rule>
    <ID>rule2</ID>
    <Prefix>dir1/</Prefix>
    <Status>Disabled</Status>
    <Filter>
      <Not>
        <Prefix>dir1/dir2/</Prefix>
      </Not>
    </Filter>
    <Transition>
      <Days>20</Days>
      <StorageClass>IA</StorageClass>
    </Transition>
  </Rule>
</LifecycleConfiguration>
```

Result: `Not` applies only to rule2. Objects under `dir1/` are still deleted after 30 days by rule1 — the exclusion in rule2 does not protect them from rule1.

For more information, see [Lifecycle rules based on the last modified time](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time#section-l72-nys-r4j).

## Time

Lifecycle rules use one of two child elements to specify when an action triggers.

**Child element**

**Type**

**Description**

`<Days>`

Integer

Number of days after an object's last modified date. The action triggers N days after the object was last modified.

`<CreatedBeforeDate>`

ISO 8601 date

A fixed date. The action applies to objects last modified before this date. Format: `YYYY-MM-DDT00:00:00.000Z`.

Use `Days` for rolling retention windows and `CreatedBeforeDate` for one-time bulk transitions or deletions up to a specific point in time.

## Operation

Configure one or more operation elements in a lifecycle rule. When the time condition is met, OSS executes the specified operations on matching objects.

The behavior of each operation depends on the versioning state of the bucket.

### Behavior by versioning state

**Operation**

**Versioning disabled**

**Versioning enabled**

**Versioning suspended**

**Transition**

Converts the storage class of the object.

Converts the storage class of the current version.

Same behavior as versioning enabled.

**Expiration**

Permanently deletes the object.

If the current version is not a delete marker: OSS inserts a new delete marker with a unique version ID as the current version; the original current version becomes a noncurrent version. If the current version is a delete marker and noncurrent versions exist: no action is taken. If the current version is a delete marker and it is the only version: OSS removes the delete marker if `ExpiredObjectDeleteMarker` is set to `true`, or if a rule to delete the current version is configured.

Same as versioning enabled, except the inserted delete marker has a null version ID. If a null-version-ID version already exists as the current version, it is overwritten — ensuring only one null version ID exists at a time.

**NoncurrentVersionTransition**

No effect.

Converts the storage class of noncurrent versions after the specified `NoncurrentDays`.

Same behavior as versioning enabled.

**NoncurrentVersionExpiration**

No effect.

Permanently deletes noncurrent versions after the specified `NoncurrentDays`.

Same behavior as versioning enabled.

### Transition

Converts the storage class of matching objects when the time condition is met. For supported target storage classes, see [Convert storage classes automatically through lifecycle rules](/help/en/oss/user-guide/convert-storage-classes#section-yuy-2b0-giv).

**Child element**

**Type**

**Description**

`<StorageClass>`

Enum

The target storage class. For supported values, see [Convert storage classes automatically through lifecycle rules](/help/en/oss/user-guide/convert-storage-classes#section-yuy-2b0-giv).

### Expiration

Deletes or expires matching objects when the time condition is met. Behavior in versioned buckets is described in the table above.

**Constraints:**

-   For the current version of an object: when a lifecycle rule deletes it, or when a delete operation is performed without specifying a version ID, the current version is demoted to a noncurrent version. A delete marker is inserted as the new current version.
    
-   For noncurrent versions: when a lifecycle rule deletes them, or when a delete operation specifies a version ID, the noncurrent versions are permanently deleted. After deletion, only a single delete marker remains as the current version — this is an expired delete marker.
    
-   `ExpiredObjectDeleteMarker` cannot be used in rules that include tag filters.
    

### NoncurrentVersionExpiration

Permanently deletes noncurrent versions of matching objects after they have been noncurrent for the number of days specified in `<NoncurrentDays>`.

**Child element**

**Type**

**Description**

`<NoncurrentDays>`

Integer

The retention period, in days, counted from the moment a version transitions from current to noncurrent.

**How OSS determines when a version becomes noncurrent:** OSS uses the creation time of the version's successor (the version that replaced it) as the start of the noncurrent period.

**Example:** A version becomes noncurrent on May 1, 2019 (because a PutObject operation creates a new current version on that date). With `NoncurrentDays` set to `3`, OSS permanently deletes the noncurrent version on May 4, 2019.

### NoncurrentVersionTransition

Converts the storage class of noncurrent versions of matching objects after they have been noncurrent for the number of days specified in `<NoncurrentDays>`.

**Child element**

**Type**

**Description**

`<NoncurrentDays>`

Integer

The time period, in days, from when a version becomes noncurrent until the storage class conversion is performed.

`<StorageClass>`

Enum

The target storage class.
