Parameter

Type

Description

Example

object

The configurations of cluster components.

name

string

The component name.

nginx-ingress-controller

config

string

The configuration of the component.

{\\"IngressSlbNetworkType\\":\\"internet\\"}

disabled

boolean

Specifies whether to disable automatic installation. When you create a cluster, some additional log components are automatically installed in addition to the required components. You can disable the automatic installations of a component and install the component later by calling the component API or in the corresponding console. Valid values:

-   `true`: disables the automatic installation of a component.
-   `false`: allows the automatic installation of a component.

false

version

string

The version of the component.

v1.9.3-aliyun.1
