Parameter

Type

Description

Example

object

The configurations of the cluster maintenance window.

enable

boolean

Specifies whether to enable the cluster maintenance window. Valid values:

-   `true`: enables the cluster maintenance window.
-   `false`: disables the cluster maintenance window.

Default value: `false`.

false

maintenance\_time

string

The start time of the cluster maintenance window. The value follows a standard time format in Golang. Example: 15:04:05Z.

03:00:00Z

duration

string

The duration of the cluster maintenance window.

Valid values: 1 to 24.

Unit: hours.

Default value: 3.

3h

weekly\_period

string

The day of the week when maintenance is performed. Separate multiple days with commas (,).

Valid values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.

Default value: `Thursday`.

Monday,Thursday

recurrence

string

Defines a maintenance window recurrence rule by using the RFC5545 recurrence rule. Currently, only FREQ=WEEKLY is supported, and you cannot specify COUNT or UNTIL.

FREQ=WEEKLY;INTERVAL=4;BYDAY=MO,TU
