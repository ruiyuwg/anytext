Parameter

Type

Description

Example

object

The instance attribute configuration object.

cores

long

The number of vCPU cores for the instance type.

4

memory

float

The memory size of the instance type. Unit: GiB.

8

instance\_family\_level

string

The instance family level.

EnterpriseLevel

excluded\_instance\_types

array

The instance type that you want to exclude.

string

The instance type that you want to exclude.

ecs.c6.large

min\_cpu\_cores

long

The minimum vCPU cores required for the instance type.

4

max\_cpu\_cores

long

The maximum vCPU cores allowed for the instance type.

8

min\_memory\_size

float

The minimum required memory size. Unit: GiB.

8

max\_memory\_size

float

The maximum allowed memory size. Unit: GiB.

16

instance\_categories

array

The type of the instance.

string

The type of the instance.

General-purpose

cpu\_architectures

array

The CPU architecture of the instance type.

string

The CPU architecture of the instance type.

X86

core`deprecated`

long

\[This parameter is deprecated and replaced by cores\] The number of vCores provided by the instance type.

4

max\_price`deprecated`

float

\[This parameter is deprecated\] The maximum hourly price of the instance.

2

architectures`deprecated`

array

\[This parameter is deprecated and replaced by cpu\_architectures\] The architectures of instance types.

string

\[This parameter is deprecated and replaced by cpu\_architectures\] The architecture of the instance type.

X86

burst\_performance\_option`deprecated`

string

\[This parameter is deprecated\] Specifies whether to include burstable instance types.

Exclude

instance\_type\_families

array

The specified instance family.

string

The specified instance family.

ecs.c6

minimum\_eni\_quantity

long

The minimum required number of elastic network interfaces (ENIs) per instance.

3

minimum\_eni\_private\_ip\_address\_quantity

long

The minimum required number of IPv4 addresses per ENI.

10

minimum\_eni\_ipv6\_address\_quantity

long

The minimum required number of IPv6 addresses per ENI.

1

maximum\_gpu\_amount

long

The maximum allowed number of GPUs per instance.

8
