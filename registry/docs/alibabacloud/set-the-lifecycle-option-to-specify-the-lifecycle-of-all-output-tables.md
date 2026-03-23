This topic describes the configuration options provided by PyODPS.

You can use `odps.options` to obtain the configuration options provided by PyODPS.

```
from odps import options
# Set the lifecycle option to specify the lifecycle of all output tables.
options.lifecycle = 30
# Set the tunnel.string_as_binary option to True to use bytes instead of Unicode to download data of the STRING type.
options.tunnel.string_as_binary = True
# When you execute PyODPS DataFrames in MaxCompute, you can refer to the following configuration to set the limit to a relatively large value during a sort operation.
options.df.odps.sort.limit = 100000000
```

## General configurations

  

Option

Description

Default value

end\_point

The endpoint of MaxCompute.

None

default\_project

The default project.

None

log\_view\_host

The hostname of Logview.

None

log\_view\_hours

The retention time of Logview. Unit: hours.

24

local\_timezone

The time zone that is used. True indicates local time, and False indicates UTC. The time zone of `pytz` can also be used.

None

lifecycle

The lifecycle of all tables.

None

temp\_lifecycle

The lifecycle of temporary tables.

1

biz\_id

The user ID.

None

verbose

Specifies whether to display logs.

False

verbose\_log

The log receiver.

None

chunk\_size

The size of the write buffer.

1496

retry\_times

The number of request retries.

4

pool\_connections

The number of cached connections in the connection pool.

10

pool\_maxsize

The maximum capacity of the connection pool.

10

connect\_timeout

The connection timeout period.

5

read\_timeout

The read timeout period.

120

api\_proxy

The API proxy server.

None

data\_proxy

The data proxy server.

None

completion\_size

The limit on the number of object completion listing items.

10

notebook\_repr\_widget

Specifies whether to use interactive graphs.

True

sql.settings

Global hints for MaxCompute SQL.

None

sql.use\_odps2\_extension

Specifies whether to enable MaxCompute 2.0 language extension.

False

## Data upload and download configurations

  

Option

Description

Default value

tunnel.endpoint

The endpoint of MaxCompute Tunnel.

None

tunnel.use\_instance\_tunnel

Specifies whether to use InstanceTunnel to obtain execution results.

True

tunnel.limit\_instance\_tunnel

Specifies whether to limit the number of data records obtained by using InstanceTunnel.

None

tunnel.string\_as\_binary

Specifies whether to use bytes instead of Unicode for data of the STRING type.

False

## DataFrame configurations

  

Option

Description

Default value

interactive

Specifies whether DataFrames are used in an interactive environment.

Depends on the detection value.

df.analyze

Specifies whether to enable functions that are not built in MaxCompute.

True

df.optimize

Specifies whether to enable full DataFrame optimization.

True

df.optimizes.pp

Specifies whether to enable DataFrame predicate pushdown optimization.

True

df.optimizes.cp

Specifies whether to enable DataFrame column pruning optimization.

True

df.optimizes.tunnel

Specifies whether to enable DataFrame tunnel optimization.

True

df.quote

Specifies whether to use a pair of grave accents (` `` `) to mark field and table names in the backend of MaxCompute SQL.

True

df.libraries

The resource name of the third-party library that is used for DataFrame operations.

None

df.supersede\_libraries

Specifies whether to use the self-uploaded NumPy to replace the version in the service.

False

df.odps.sort.limit

The default limit on the number of items that are added during a sort operation of DataFrames.

10000

## Machine learning configurations

  

Option

Description

Default value

ml.xflow\_settings

The XFlow execution configuration.

None

ml.xflow\_project

The default XFlow project name.

algo\_public

ml.use\_model\_transfer

Specifies whether to use ModelTransfer to obtain the Predictive Model Markup Language (PMML) files of models.

False

ml.model\_volume

The name of the volume used by ModelTransfer.

pyodps\_volume
