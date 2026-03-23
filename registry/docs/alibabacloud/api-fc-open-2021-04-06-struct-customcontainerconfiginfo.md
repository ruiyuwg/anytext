Parameter

Type

Description

Example

object

The function configurations for a custom container.

args

string

The startup argument of the container.

\["-arg1", "value1"\]

command

string

The startup command of the container.

\["/code/myserver"\]

image

string

The endpoint of the container image.

registry-vpc.cn-hangzhou.aliyuncs.com/fc-demo/helloworld:v1beta1

accelerationType

string

Specifies whether to enable image acceleration. Valid values:

-   Default: enables image acceleration.
-   None: disables image acceleration.

Default

accelerationInfo

[AccelerationInfo](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-struct-accelerationinfo)

The information about the acceleration of the custom container.

instanceID

string

The ID of the image repository for the Container Registry Enterprise Edition. You must specify this parameter if you use an image of Container Registry Enterprise Edition.

cri-xxxxxxxxxx

webServerMode

boolean

Specifies whether to enable web server mode.

-   true (default): enables web server mode. In this case, web servers must be implemented in container images to listen for and process requests.
-   false: disables web server mode. In this case, the container exits the process after running and the exit code must be 0.

true
