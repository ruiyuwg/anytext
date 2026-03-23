Parameter

Type

Description

Example

object

The File Storage NAS (NAS) configurations.

groupId

integer

The group ID.

100

mountPoints

array<object>

The mount targets.

object

The mount target.

mountDir

string

The local mount directory.

/home/test

serverAddr

string

The NAS server address.

\*\*\*-uni85.cn-hangzhou.nas.aliyuncs.com:/

enableTLS

boolean

Specifies whether to use the Transport Layer Security (TLS) protocol to secure data transmission. Take note that only general-purpose NAS file systems support transmission encryption.

false

userId

integer

The account ID.

100
