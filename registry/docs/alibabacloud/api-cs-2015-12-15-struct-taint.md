Parameter

Type

Description

Example

object

The configuration of the node taint.

key

string

The `key` of the taint.

key

value

string

The `value` of the taint.

value

effect

string

The scheduling policy. Valid values:

-   `NoSchedule`: This taint is not tolerated. However, pods that are already scheduled to the node are not affected.
-   `NoExecute`: Pods that do not tolerate this taint are evicted after this taint is added to the node.
-   `PreferNoSchedule`: This value specifies a soft limit on pods. Existing pods on the node are not affected. The scheduler attempts to avoid scheduling pods that cannot tolerate the taint to the node.

Default value: `NoSchedule`.

NoSchedule
