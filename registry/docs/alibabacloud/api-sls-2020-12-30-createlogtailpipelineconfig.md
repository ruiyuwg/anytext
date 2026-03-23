Creates a Logtail pipeline configuration.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Sls/2020-12-30/CreateLogtailPipelineConfig)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Sls/2020-12-30/CreateLogtailPipelineConfig)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

log:CreateLogtailPipelineConfig

create

\*All Resource

`*`

-   log:TLSVersion

None

## Request syntax

```
POST /pipelineconfigs HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

project

string

Yes

The name of the project.

test-project

body

object

No

The content of the Logtail pipeline configuration.

configName

string

Yes

The name of the configuration.

**Note**

The configuration name must be unique within the project and cannot be modified after the configuration is created. The name must follow these rules:

-   It can contain only lowercase letters, digits, hyphens (-), and underscores (\_).
    
-   It must start and end with a lowercase letter or a digit.
    
-   It must be 2 to 128 characters in length.
    

test-config

logSample

string

No

A sample log. Multiple log entries are supported.

2022-06-14 11:13:29.796 | DEBUG | \_\_main\_\_::1 - hello world

global

object

No

The global configuration.

inputs

array<object>

Yes

The list of input plugins.

**Important** Currently, you can configure only one input plugin.

object

No

The input plugin.

**Note**

For information about the parameters of the file input plugin, see [File plugin](/help/en/sls/overview-19). For information about the parameters of other input plugins, see [Processing plugins](/help/en/sls/overview-22).

{ "Type": "input\_file", "FilePaths": \["/var/log/\*.log"\] }

processors

array<object>

No

The list of processing plugins.

**Note**

Processing plugins are classified into native processing plugins and extension processing plugins. For more information, see [Processing plugins](/help/en/sls/overview-22).

**Important**

**Note**

-   Native plugins can be used only to collect text logs.
    
-   You cannot add native plugins and extension plugins at the same time.
    
-   When you use native plugins, the following requirements must be met:
    -   The first processing plugin must be a regular expression-based parsing plugin, a separator-based parsing plugin, a JSON-based parsing plugin, an NGINX-based parsing plugin, an Apache-based parsing plugin, or an IIS-based parsing plugin.
        
    -   After the first processing plugin, you can add only one time parsing processing plugin, one filter plugin, and multiple data masking plugins.
        

object

No

The processing plugin.

**Note**

For more information about native and extension processing plugins, see [Processing plugins](/help/en/sls/overview-22).

{ "Type": "processor\_parse\_json\_native", "SourceKey": "content" }

aggregators

array<object>

No

The list of aggregation plugins.

**Important** This parameter is valid only when you use extension processing plugins. You can use a maximum of one aggregation plugin.

object

No

The aggregation plugin.

flushers

array<object>

Yes

The list of output plugins.

**Important** Currently, you can add only one flusher\_sls plugin.

object

No

The output plugin.

{ "Type": "flusher\_sls", "Logstore": "test" }

task

object

No

The task configuration.

## Global configuration

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

TopicType

string

No

None

filepath

The topic type. Valid values:

-   filepath: extracts information from the log file path as the topic. This value is valid only when the input plugin is input\_file.
    
-   machine\_group\_topic: uses the topic of the machine group to which the configuration is applied.
    
-   custom: a custom topic. For more information, see [Log topic](/help/en/sls/log-topics).
    

TopicFormat

string

No. This parameter is required if you set TopicType to filepath or custom.

/

/var/log/(.\*).log

The topic format.

EnableTimestampNanosecond

bool

No

false

false

Specifies whether to enable nanosecond precision for timestamps.

PipelineMetaTagKey

object

No

None

{"HOST\_NAME":"\_\_hostname\_\_"}

**Important** This parameter is supported only by LoongCollector 3.0.10 and later.

Controls the tags related to LoongCollector information. The key is the tag parameter name, and the value is the field name of the tag in the log. If you set the value to \_\_default\_\_, the default value is used. If you set the value to an empty string, the tag is deleted. The following tags can be configured:

-   HOST\_NAME: the hostname. This tag is added by default. The default value is "\_\_hostname\_\_".
    
-   AGENT\_TAG: the custom identifier. This tag is added by default. The default value is "\_\_user\_defined\_id\_\_".
    
-   HOST\_ID: the host ID. This tag is not added by default. The default value is "\_\_host\_id\_\_".
    
-   CLOUD\_PROVIDER: This tag is not added by default. The default value is "\_\_cloud\_provider\_\_".
    

## Input plugins

### File input plugin

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

input\_file

The plugin type. Set the value to input\_file.

FilePaths

\[string\]

Yes

/

\["/var/log/\*.log"\]

The paths of the log files that you want to collect. Currently, only one path is supported. You can use the wildcard characters (\*) and (\*\*) in the path. The double-asterisk (\*\*) wildcard character can appear only once and can be used only before the file name.

MaxDirSearchDepth

uint

No

0

0

The maximum depth of the directories that are matched by the double-asterisk (\*\*) wildcard character in a file path. This parameter is valid only when a file path contains the double-asterisk (\*\*) wildcard character. Valid values: 0 to 1000.

ExcludeFilePaths

\[string\]

No

None

\["/home/admin/\*.log"\]

The blacklist of file paths. The paths must be absolute paths. The wildcard character (\*) is supported.

ExcludeFiles

\[string\]

No

None

\["app\*.log", "password"\]

The blacklist of file names. The wildcard character (\*) is supported.

ExcludeDirs

\[string\]

No

None

\["/home/admin/dir1", "/home/admin/dir2\*"\]

The blacklist of directories. The paths must be absolute paths. The wildcard character (\*) is supported.

FileEncoding

string

No

utf8

utf8

The encoding format of the file. Valid values: utf8 and gbk.

TailSizeKB

uint

No

1024

1024

The size of the data to be collected from the end of a file when the configuration is applied for the first time. If the file size is smaller than the specified value, data is collected from the beginning of the file. Unit: KB. Valid values: 0 to 10485760.

Multiline

object

No

None

/

The multiline log aggregation options.

Multiline.Mode

string

No

custom

custom

The multiline log aggregation mode. Valid values: custom and JSON.

Multiline.StartPattern

string

Required if Multiline.Mode is set to custom

None

\\d+-\\d+-\\d+.\*

The regular expression to match the first line of a multiline log.

EnableContainerDiscovery

bool

No

false

true

Specifies whether to enable container discovery. This parameter is valid only when Logtail runs in DaemonSet mode and the collection path is a path within a container.

ContainerFilters

object

No

None

/

The container filtering options. Multiple options are combined using the AND operator. This parameter is valid only if you set EnableContainerDiscovery to true.

ContainerFilters.K8sNamespaceRegex

string

No

None

default

For containers in a Kubernetes environment, specifies the namespace of the pods where the containers to be collected reside. If you do not specify this parameter, all containers are collected. Regular expressions are supported.

ContainerFilters.K8sPodRegex

string

No

None

test-pod

For containers in a Kubernetes environment, specifies the names of the pods where the containers to be collected reside. If you do not specify this parameter, all containers are collected. Regular expressions are supported.

ContainerFilters.IncludeK8sLabel

map

No

None

/

For containers in a Kubernetes environment, specifies the labels of the pods where the containers to be collected reside. Multiple conditions are combined using the OR operator. If you do not specify this parameter, all containers are collected. Regular expressions are supported. The key in the map is the pod label name, and the value is the pod label value. The following rules apply:

-   If the value in the map is empty, pods that contain the key are matched.
    
-   If the value in the map is not empty:
    -   If the value starts with `^` and ends with `$`, pods that have a label name matching the key and a label value matching the regular expression are matched.
        
    -   In other cases, pods that have a label name matching the key and a label value matching the value are matched.
        

ContainerFilters.ExcludeK8sLabel

map

No

None

/

For containers in a Kubernetes environment, specifies the labels of the pods where the containers to be excluded reside. Multiple conditions are combined using the OR operator. If you do not specify this parameter, all containers are collected. Regular expressions are supported. The key in the map is the pod label name, and the value is the pod label value. The following rules apply:

-   If the value in the map is empty, pods that contain the key are matched.
    
-   If the value in the map is not empty:
    -   If the value starts with `^` and ends with `$`, pods that have a label name matching the key and a label value matching the regular expression are matched.
        
    -   In other cases, pods that have a label name matching the key and a label value matching the value are matched.
        

ContainerFilters.K8sContainerRegex

string

No

None

test-container

For containers in a Kubernetes environment, specifies the names of the containers to be collected. If you do not specify this parameter, all containers are collected. Regular expressions are supported.

ContainerFilters.IncludeEnv

map

No

None

/

The environment variables of the containers to be collected. Multiple conditions are combined using the OR operator. If you do not specify this parameter, all containers are collected. Regular expressions are supported. The key in the map is the environment variable name, and the value is the environment variable value. The following rules apply:

-   If the value in the map is empty, containers whose environment variables contain the key are matched.
    
-   If the value in the map is not empty:
    -   If the value starts with `^` and ends with `$`, containers that have an environment variable name matching the key and an environment variable value matching the regular expression are matched.
        
    -   In other cases, containers that have an environment variable name matching the key and an environment variable value matching the value are matched.
        

ContainerFilters.ExcludeEnv

map

No

None

/

The environment variables of the containers to be excluded. Multiple conditions are combined using the OR operator. If you do not specify this parameter, all containers are collected. Regular expressions are supported. The key in the map is the environment variable name, and the value is the environment variable value. The following rules apply:

-   If the value in the map is empty, containers whose environment variables contain the key are matched.
    
-   If the value in the map is not empty:
    -   If the value starts with `^` and ends with `$`, containers that have an environment variable name matching the key and an environment variable value matching the regular expression are matched.
        
    -   In other cases, containers that have an environment variable name matching the key and an environment variable value matching the value are matched.
        

ContainerFilters.IncludeContainerLabel

map

No

None

/

The labels of the containers to be collected. Multiple conditions are combined using the OR operator. If you do not specify this parameter, the default value is empty, which indicates that all containers are collected. Regular expressions are supported. The key in the map is the container label name, and the value is the container label value. The following rules apply:

-   If the value in the map is empty, containers that contain the key are matched.
    
-   If the value in the map is not empty:
    -   If the value starts with `^` and ends with `$`, containers that have a label name matching the key and a label value matching the regular expression are matched.
        
    -   In other cases, containers that have a label name matching the key and a label value matching the value are matched.
        

ContainerFilters.ExcludeContainerLabel

map

No

None

/

The labels of the containers to be excluded. Multiple conditions are combined using the OR operator. If you do not specify this parameter, the default value is empty, which indicates that all containers are collected. Regular expressions are supported. The key in the map is the container label name, and the value is the container label value. The following rules apply:

-   If the value in the map is empty, containers that contain the key are matched.
    
-   If the value in the map is not empty:
    -   If the value starts with `^` and ends with `$`, containers that have a label name matching the key and a label value matching the regular expression are matched.
        
    -   In other cases, containers that have a label name matching the key and a label value matching the value are matched.
        

ExternalK8sLabelTag

map

No

None

/

For containers in a Kubernetes environment, specifies the pod label-related tags that you want to add to logs. The key in the map is the pod label name, and the value is the corresponding tag name. For example, if you add `app: k8s_label_app` to the map and a pod contains the `app=serviceA` label, the information is added to the log as a tag. The added field is `__tag__:k8s_label_app: serviceA`. If the pod does not contain the `app` label, the empty field `__tag__:k8s_label_app:` is added.

ExternalEnvTag

map

No

None

/

For containers in a Kubernetes environment, specifies the container environment variable-related tags that you want to add to logs. The key in the map is the environment variable name, and the value is the corresponding tag name. For example, if you add `VERSION: env_version` to the map and a container has the `VERSION=v1.0.0` environment variable, the information is added to the log as a tag. The added field is `__tag__:env_version: v1.0.0`. If the container does not have the `VERSION` environment variable, the empty field `__tag__:env_version:` is added.

CollectingContainersMeta

bool

No

false

true

Specifies whether to enable container metadata preview.

AppendingLogPositionMeta

bool

No

false

false

Specifies whether to add the metadata of the file to which the log belongs. The metadata includes the \_\_tag\_\_:\_\_inode\_\_ field and the \_\_file\_offset\_\_ field.

AllowingIncludedByMultiConfigs

bool

No

false

false

Specifies whether to allow the current configuration to collect files that are matched by other configurations.

Tags

object

No

None

{"FileInodeTagKey":"\_\_inode\_\_"}

**Important** This parameter is supported only by LoongCollector 3.0.10 and later.

Controls the tags related to file collection. The key is the tag parameter name, and the value is the field name of the tag in the log. If you set the value to \_\_default\_\_, the default value is used. If you set the value to an empty string, the tag is deleted. The following tags can be configured:

-   FileInodeTagKey: the inode of the file. This tag is not added by default. The default value is "\_\_inode\_\_".
    
-   FilePathTagKey: the file path. This tag is added by default. The default value is "\_\_path\_\_".
    

The following parameters are valid only if you set the EnableContainerDiscovery parameter to true.

-   K8sNamespaceTagKey: the namespace of the container in which the file is located. This tag is added by default. The default value is "\_namespace\_".
    
-   K8sPodNameTagKey: the name of the pod in which the file is located. This tag is added by default. The default value is "\_pod\_name\_".
    
-   K8sPodUidTagKey: the UID of the pod in which the file is located. This tag is added by default. The default value is "\_pod\_uid\_".
    
-   ContainerNameTagKey: the name of the container in which the file is located. This tag is added by default. The default value is "\_container\_name\_".
    
-   ContainerIpTagKey: the IP address of the container in which the file is located. This tag is added by default. The default value is "\_container\_ip\_".
    
-   ContainerImageNameTagKey: the image of the container in which the file is located. This tag is added by default. The default value is "\_image\_name\_".
    

FileOffsetKey

string

No

None

\_\_file\_offset\_\_

**Important** This parameter is supported only by LoongCollector 3.0.10 and later.

The tag for the position of the log in the file. This tag is not added by default. The default value is \_\_file\_offset\_\_. If you set the value to \_\_default\_\_, the default value is used. If you set the value to an empty string, the tag is deleted. If the AppendingLogPositionMeta parameter and the Tags.FileInodeTagKey or FileOffsetKey parameter are specified at the same time, the AppendingLogPositionMeta parameter is ignored.

### Container stdout (legacy)

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

service\_docker\_stdout

The plugin type. Set the value to service\_docker\_stdout.

Stdout

Boolean

No

true

true

Specifies whether to collect stdout.

Stderr

Boolean

No

true

true

Specifies whether to collect stderr.

StartLogMaxOffset

Integer

No

128×1024

131072

The length of historical data to be collected for the first time. Unit: bytes. We recommend that you set this parameter to a value between 131072 and 1048576.

IncludeLabel

Map, where LabelKey and LabelValue are of the String type

No

None

The whitelist of container labels. This parameter specifies the containers from which you want to collect logs. By default, this parameter is left empty, which indicates that the standard output of all containers is collected. If you want to configure a whitelist of container labels, you must specify LabelKey. LabelValue is optional.

-   If LabelValue is empty, containers whose labels contain LabelKey are matched.
    
-   If LabelValue is not empty, only containers whose labels contain LabelKey=LabelValue are matched.
    
    By default, LabelValue is used for string matching. A match is found only if LabelValue is identical to the value of a container label. If the value starts with `^` and ends with `$`, it is used for regular expression matching. For example, if you set LabelKey to `io.kubernetes.container.name` and LabelValue to `^(nginx|cube)$`, containers named nginx and cube are matched.
    

Multiple whitelists are combined using the OR operator. A container is matched if its label meets the condition in any of the whitelists.

ExcludeLabel

Map, where LabelKey and LabelValue are of the String type

No

None

The blacklist of container labels. This parameter specifies the containers that you want to exclude. By default, this parameter is left empty, which indicates that no containers are excluded. If you want to configure a blacklist of container labels, you must specify LabelKey. LabelValue is optional.

-   If LabelValue is empty, containers whose labels contain LabelKey are excluded.
    
-   If LabelValue is not empty, only containers whose labels contain LabelKey=LabelValue are excluded.
    
    By default, LabelValue is used for string matching. A match is found only if LabelValue is identical to the value of a container label. If the value starts with `^` and ends with `$`, it is used for regular expression matching. For example, if you set LabelKey to `io.kubernetes.container.name` and LabelValue to `^(nginx|cube)$`, containers named nginx and cube are matched.
    

Multiple blacklists are combined using the OR operator. A container is excluded if its label meets the condition in any of the blacklists.

IncludeEnv

Map, where EnvKey and EnvValue are of the String type

No

None

The whitelist of environment variables. This parameter specifies the containers from which you want to collect logs. By default, this parameter is left empty, which indicates that the standard output of all containers is collected. If you want to configure a whitelist of environment variables, you must specify EnvKey. EnvValue is optional.

-   If EnvValue is empty, containers whose environment variables contain EnvKey are matched.
    
-   If EnvValue is not empty, only containers whose environment variables contain EnvKey=EnvValue are matched.
    
    By default, EnvValue is used for string matching. A match is found only if EnvValue is identical to the value of an environment variable. If the value starts with `^` and ends with `$`, it is used for regular expression matching. For example, if you set EnvKey to `NGINX_SERVICE_PORT` and EnvValue to \`^(80
    

ExcludeEnv

Map, where EnvKey and EnvValue are of the String type

No

None

The blacklist of environment variables. This parameter specifies the containers that you want to exclude. By default, this parameter is left empty, which indicates that no containers are excluded. If you want to configure a blacklist of environment variables, you must specify EnvKey. EnvValue is optional.

-   If EnvValue is empty, logs from containers whose environment variables contain EnvKey are excluded.
    
-   If EnvValue is not empty, only containers whose environment variables contain EnvKey=EnvValue are excluded.
    
    By default, EnvValue is used for string matching. A match is found only if EnvValue is identical to the value of an environment variable. If the value starts with `^` and ends with `$`, it is used for regular expression matching. For example, if you set EnvKey to `NGINX_SERVICE_PORT` and EnvValue to `^(80|6379)$`, containers whose service ports are 80 and 6379 are matched.
    

Multiple blacklists are combined using the OR operator. A container is excluded if its environment variable meets the condition in any of the key-value pairs.

IncludeK8sLabel

Map, where LabelKey and LabelValue are of the String type

No

None

The whitelist of Kubernetes labels (defined in template.metadata). This parameter specifies the containers from which you want to collect logs. If you want to configure a whitelist of Kubernetes labels, you must specify LabelKey. LabelValue is optional.

-   If LabelValue is empty, containers whose Kubernetes labels contain LabelKey are matched.
    
-   If LabelValue is not empty, only containers whose Kubernetes labels contain LabelKey=LabelValue are matched.
    
    By default, LabelValue is used for string matching. A match is found only if LabelValue is identical to the value of a Kubernetes label. If the value starts with `^` and ends with `$`, it is used for regular expression matching. For example, if you set LabelKey to `app` and LabelValue to `^(test1|test2)$`, containers whose Kubernetes labels contain app:test1 or app:test2 are matched.
    

Multiple whitelists are combined using the OR operator. A container is matched if its Kubernetes label meets the condition in any of the whitelists.

ExcludeK8sLabel

Map, where LabelKey and LabelValue are of the String type

No

None

The blacklist of Kubernetes labels (defined in template.metadata). This parameter specifies the containers that you want to exclude. If you want to configure a blacklist of Kubernetes labels, you must specify LabelKey. LabelValue is optional.

-   If LabelValue is empty, containers whose Kubernetes labels contain LabelKey are excluded.
    
-   If LabelValue is not empty, only containers whose Kubernetes labels contain LabelKey=LabelValue are excluded.
    
    By default, LabelValue is used for string matching. A match is found only if LabelValue is identical to the value of a Kubernetes label. If the value starts with `^` and ends with `$`, it is used for regular expression matching. For example, if you set LabelKey to `app` and LabelValue to `^(test1|test2)$`, containers whose Kubernetes labels contain app:test1 or app:test2 are matched.
    

Multiple blacklists are combined using the OR operator. A container is excluded if its Kubernetes label meets the condition in any of the blacklists.

K8sNamespaceRegex

String

No

None

^(default|nginx)$

The namespace based on which you want to collect logs from containers. Regular expressions are supported. For example, if you set this parameter to `^(default|nginx)$`, all containers in the nginx and default namespaces are matched.

K8sPodRegex

String

No

None

^(nginx-log-demo.\*)$

The pod name based on which you want to collect logs from containers. Regular expressions are supported. For example, if you set this parameter to `^(nginx-log-demo.*)$`, all containers in pods whose names start with nginx-log-demo are matched.

K8sContainerRegex

String

No

None

^(container-test)$

The container name based on which you want to collect logs. The Kubernetes container name is defined in spec.containers. Regular expressions are supported. For example, if you set this parameter to `^(container-test)$`, all containers named container-test are matched.

#### Data processing parameters

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

BeginLineRegex

String

No

None

The regular expression to match the first line of a log.

If you leave this parameter empty, the single-line mode is used.

If the beginning of a line matches the regular expression, the line is considered the first line of a new log. Otherwise, the line is appended to the previous log.

BeginLineCheckLength

Integer

No

None

The maximum length for first-line matching. Unit: bytes.

The default value is 10 × 1024 bytes.

If the regular expression for first-line matching can be matched within the first N bytes, we recommend that you set this parameter to improve matching efficiency.

BeginLineTimeoutMs

Integer

No

None

The timeout period for first-line matching. Unit: milliseconds.

The default value is 3,000 milliseconds.

If no new log is generated within 3,000 milliseconds, the matching ends, and the last log is uploaded to Simple Log Service.

MaxLogSize

Integer

No

None

The maximum length of a log**.** The default value is 0. Unit: bytes.

The default value is 512 × 1024 bytes.

If the length of a log exceeds the specified value, the system stops searching for the first line and directly uploads the log.

ExternalK8sLabelTag

Map, where LabelKey and LabelValue are of the String type

No

None

The Kubernetes label (defined in template.metadata) tags. After you configure this parameter, iLogtail adds Kubernetes label-related fields to logs.

For example, if you set LabelKey to app and LabelValue to `k8s_label_app`, and a pod contains the label `app=serviceA`, iLogtail adds this information to the log. The added field is k8s\_label\_app: serviceA. If the pod does not contain the app label, the empty field k8s\_label\_app: is added.

ExternalEnvTag

Map, where EnvKey and EnvValue are of the String type

No

None

The container environment variable tags. After you configure this parameter, iLogtail adds container environment variable-related fields to logs.

For example, if you set EnvKey to `VERSION` and EnvValue to `env_version`, and a container has the environment variable `VERSION=v1.0.0`, this information is added to the log as a tag. The added field is env\_version: v1.0.0. If the container does not have the VERSION environment variable, the empty field env\_version: is added.

#### Data processing environment variables

**Environment variable**

**Type**

**Required**

**Default value**

**Example**

**Description**

ALIYUN\_LOG\_ENV\_TAGS

String

No

None

The global environment variable tags. After you configure this parameter, iLogtail adds fields related to the environment variables of the container where iLogtail resides to logs. Separate multiple environment variable names with vertical bars (`|`).

For example, if you set this parameter to node\_name|node\_ip and the iLogtail container exposes the related environment variables, this information is added to the log as tags. The added fields are node\_ip:172.16.0.1 and node\_name:worknode.

### Container stdout (new version)

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

input\_container\_stdio

The plugin type. Set the value to `input_container_stdio`.

IgnoringStdout

Boolean

No

false

false

Specifies whether to **ignore** stdout. `false` indicates that stdout is collected. `true` indicates that stdout is not collected.

IgnoringStderr

Boolean

No

false

false

Specifies whether to **ignore** stderr. `false` indicates that stderr is collected. `true` indicates that stderr is not collected.

TailSizeKB

Integer (uint)

No

1024

2048

The size of the data to be collected from the end of a file when the configuration is applied for the first time. Unit: KB. If the file size is smaller than the specified value, data is collected from the beginning of the file. Valid values: 0 to 104857600.

AllowingIncludedByMultiConfigs

Boolean

No

false

true

Specifies whether to allow the current configuration to collect stdout logs from containers that are matched by other configurations. The default value `false` prevents duplicate collection by multiple configurations.

ContainerFilters

Object

No

None

See the Container filtering options (ContainerFilters) table below

The container filtering options. Multiple options are combined using the AND operator.

ExternalK8sLabelTag

Map, where LabelKey/LabelValue are String

No

None

{"app":"k8s\_label\_app"}

For Kubernetes scenarios: retrieves values from pod labels and appends them to logs as tags. The key of the map is the pod label name, and the value is the log field name (tag name). If a pod does not have the specified label, an empty field is appended.

ExternalEnvTag

Map, where EnvKey/EnvValue are String

No

None

{"VERSION":"env\_version"}

For container scenarios: retrieves values from container environment variables and appends them to logs as tags. The key of the map is the environment variable name, and the value is the log field name (tag name). If a container does not have the specified environment variable, an empty field is appended.

Multiline

Object

No

None

See the Multiline aggregation options (Multiline) table below

The multiline aggregation options.

#### Container filtering options (ContainerFilters)

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

IncludeK8sLabel

Map, where LabelKey/LabelValue are String

No

None

{"app":"^(test1|test2)$"}

The whitelist of Kubernetes labels (defined in the `metadata.labels` of a pod). This parameter specifies the containers from which you want to collect logs. By default, this parameter is left empty, which indicates that the standard output of all containers is collected.

-   If LabelValue is empty, containers whose Kubernetes labels contain LabelKey are matched.
    
-   If LabelValue is not empty, only containers whose Kubernetes labels contain LabelKey=LabelValue are matched.
    
    By default, LabelValue is used for string matching. A match is found only if LabelValue is identical to the value of a Kubernetes label. If the value starts with `^` and ends with `$`, it is used for regular expression matching.
    

Multiple whitelists are combined using the OR operator. A container is matched if its Kubernetes label meets the condition in any of the whitelists.

ExcludeK8sLabel

Map, where LabelKey/LabelValue are String

No

None

{"env":"^(test.\*)$"}

The blacklist of Kubernetes labels (defined in the `metadata.labels` of a pod). This parameter specifies the containers that you want to exclude. By default, this parameter is left empty, which indicates that no containers are excluded.

-   If LabelValue is empty, containers whose Kubernetes labels contain LabelKey are excluded.
    
-   If LabelValue is not empty, only containers whose Kubernetes labels contain LabelKey=LabelValue are excluded.
    
    By default, LabelValue is used for string matching. A match is found only if LabelValue is identical to the value of a Kubernetes label. If the value starts with `^` and ends with `$`, it is used for regular expression matching.
    

Multiple blacklists are combined using the OR operator. A container is excluded if its Kubernetes label meets the condition in any of the blacklists.

IncludeEnv

Map, where EnvKey/EnvValue are String

No

None

{"NGINX\_SERVICE\_PORT":"^(80|6379)$"}

The whitelist of environment variables. This parameter specifies the containers from which you want to collect logs. By default, this parameter is left empty, which indicates that the standard output of all containers is collected. If you want to configure a whitelist of environment variables, you must specify EnvKey. EnvValue is optional.

-   If EnvValue is empty, containers whose environment variables contain EnvKey are matched.
    
-   If EnvValue is not empty, only containers whose environment variables contain EnvKey=EnvValue are matched.
    
    By default, EnvValue is used for string matching. A match is found only if EnvValue is identical to the value of an environment variable. If the value starts with `^` and ends with `$`, it is used for regular expression matching.
    

Multiple whitelists are combined using the OR operator. A container is matched if its environment variable meets the condition in any of the key-value pairs.

ExcludeEnv

Map, where EnvKey/EnvValue are String

No

None

{"POD\_NAMESPACE":"kube-system"}

The blacklist of environment variables. This parameter specifies the containers that you want to exclude. By default, this parameter is left empty, which indicates that no containers are excluded. If you want to configure a blacklist of environment variables, you must specify EnvKey. EnvValue is optional.

-   If EnvValue is empty, containers whose environment variables contain EnvKey are excluded.
    
-   If EnvValue is not empty, only containers whose environment variables contain EnvKey=EnvValue are excluded.
    
    By default, EnvValue is used for string matching. A match is found only if EnvValue is identical to the value of an environment variable. If the value starts with `^` and ends with `$`, it is used for regular expression matching.
    

Multiple blacklists are combined using the OR operator. A container is excluded if its environment variable meets the condition in any of the key-value pairs.

IncludeContainerLabel

Map, where LabelKey/LabelValue are String

No

None

{"io.kubernetes.container.name":"nginx"}

The whitelist of container labels. This parameter specifies the containers from which you want to collect logs. By default, this parameter is left empty, which indicates that the standard output of all containers is collected. If you want to configure a whitelist of container labels, you must specify LabelKey. LabelValue is optional.

-   If LabelValue is empty, containers whose labels contain LabelKey are matched.
    
-   If LabelValue is not empty, only containers whose labels contain LabelKey=LabelValue are matched.
    
    By default, LabelValue is used for string matching. A match is found only if LabelValue is identical to the value of a container label. If the value starts with `^` and ends with `$`, it is used for regular expression matching.
    

Multiple whitelists are combined using the OR operator. A container is matched if its label meets the condition in any of the whitelists.

ExcludeContainerLabel

Map, where LabelKey/LabelValue are String

No

None

{"io.kubernetes.pod.namespace":"kube-system"}

The blacklist of container labels. This parameter specifies the containers that you want to exclude. By default, this parameter is left empty, which indicates that no containers are excluded. If you want to configure a blacklist of container labels, you must specify LabelKey. LabelValue is optional.

-   If LabelValue is empty, containers whose labels contain LabelKey are excluded.
    
-   If LabelValue is not empty, only containers whose labels contain LabelKey=LabelValue are excluded.
    
    By default, LabelValue is used for string matching. A match is found only if LabelValue is identical to the value of a container label. If the value starts with `^` and ends with `$`, it is used for regular expression matching.
    

Multiple blacklists are combined using the OR operator. A container is excluded if its label meets the condition in any of the blacklists.

#### Multiline aggregation options (Multiline)

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Mode

String

No

custom

custom

The multiline aggregation mode. Valid values: `custom` and `JSON`. If you set this parameter to `JSON`, logs are read and concatenated in JSON format.

StartPattern

String

No (required in custom mode)

None

\\d+-\\d+-\\d+.\*

The regular expression for the first line of a log. A match indicates the start of a new log.

UnmatchedContentTreatment

String

No

single\_line

discard

The processing method for unmatched log segments. Valid values: `discard` (discards the segment) and `single_line` (outputs each unmatched segment as a single-line log).

### MySQL input plugin

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

service\_mysql

The plugin type. Set the value to service\_mysql.

Address

string

No

127.0.0.1:3306

rm-\*.mysql.rds.aliyuncs.com

The address of the MySQL database.

User

string

No

root

root

The username that is used to log on to the MySQL database.

Password

string

No

None

The password of the user that is used to log on to the MySQL database. For security purposes, you can set the username and password to xxx. After the collection configuration is synchronized to your on-premises machine, find the configuration in the `/usr/local/ilogtail/user_log_config.json` file and modify it. For more information, see [Modify local configurations](/help/en/sls/collect-mysql-query-results).

**Important** If you modify this parameter in the console, the local configuration is overwritten after synchronization.

DataBase

string

No

/

project\_database

The name of the database.

DialTimeOutMs

int

No

5000

5000

The timeout period for connecting to the MySQL database. Unit: ms.

ReadTimeOutMs

int

No

5000

5000

The timeout period for reading the MySQL query results. Unit: ms.

StateMent

string

No

/

The SELECT statement. If you set CheckPoint to true, the WHERE clause in the SELECT statement must contain the checkpoint column (CheckPointColumn). You can use a question mark (?) as a placeholder to work with the checkpoint column. For example, you can set CheckPointColumn to id, CheckPointStart to 0, and StateMent to `SELECT * from ... where id > ?`. After each collection, the system saves the ID of the last data entry as a checkpoint. In the next collection, the question mark (?) in the query statement is replaced with the ID corresponding to the checkpoint.

Limit

bool

No

false

true

Specifies whether to use LIMIT for paging.

-   true: uses LIMIT for paging.
    
-   false (default): does not use LIMIT for paging.
    

We recommend that you use LIMIT for paging. If you set Limit to true, the system automatically appends a LIMIT clause to the SELECT statement during SQL queries.

PageSize

int

No

/

10

The number of entries to return on each page. This parameter is required if you set Limit to true.

MaxSyncSize

int

No

0

0

The maximum number of records to synchronize at a time. The default value is 0, which indicates that no limit is imposed.

CheckPoint

bool

No

false

true

Specifies whether to use a checkpoint.

-   true: uses a checkpoint.
    
-   false (default): does not use a checkpoint.
    

A checkpoint can be used as the starting point for the next data collection to implement incremental data collection.

CheckPointColumn

string

No

None

1

The name of the checkpoint column. This parameter is required if you set CheckPoint to true. **Warning** The values in this column must be incremental. Otherwise, data may fail to be collected. The maximum value in each query result is used as the input for the next query.

CheckPointColumnType

string

No

None

int

The data type of the checkpoint column. Valid values: int and time. The int type is stored as int64. The time type supports the date, datetime, and time types of MySQL. This parameter is required if you set CheckPoint to true.

CheckPointStart

string

No

None

The initial value of the checkpoint column. This parameter is required if you set CheckPoint to true.

CheckPointSavePerPage

bool

No

true

true

Specifies whether to save a checkpoint for each page.

-   true (default): saves a checkpoint for each page.
    
-   false: saves a checkpoint after each synchronization is complete.
    

IntervalMs

int

No

60000

60000

The synchronization interval. The default value is 60,000. Unit: ms.

### HTTP input plugin

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

metric\_http

The plugin type. Set the value to metric\_http.

Address

string

Yes

/

The list of URLs. **Important** The URLs must start with `http` or `https`.

IntervalMs

int

Yes

/

10

The interval between requests. Unit: ms.

Method

string

No

GET

GET

The request method. The value must be in uppercase.

Body

string

No

None

The content of the HTTP body.

Headers

map

No

None

{"key":"value"}

The content of the HTTP header. For example, `{"key":"value"}`. Replace the content with the actual value.

PerAddressSleepMs

int

No

100

100

The interval between requests for each URL in the Addresses list. Unit: ms.

ResponseTimeoutMs

int

No

5000

5000

The request timeout period. Unit: ms.

IncludeBody

bool

No

false

true

Specifies whether to collect the request body. The default value is false. If you set this parameter to true, the request body content is stored in a key named content.

FollowRedirects

bool

No

false

false

Specifies whether to automatically handle redirections.

InsecureSkipVerify

bool

No

false

false

Specifies whether to skip HTTPS security checks.

ResponseStringMatch

string

No

/

Performs a regular expression check on the returned body content. The check result is stored in a key named \_response\_match\_. If a match is found, the value is yes. If no match is found, the value is no.

### Syslog input plugin

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

service\_syslog

The plugin type. Set the value to service\_syslog.

Address

string

No

tcp://127.0.0.1:9999

The protocol, address, and port that Logtail listens on. Logtail listens on the specified protocol, address, and port and obtains log data. The format is `[tcp/udp]://[` _ip_ `]:[` _port_ `]`. If you do not configure this parameter, the default value `tcp://127.0.0.1:9999` is used. This indicates that only logs forwarded from the local machine can be received. **Note**

-   The protocol, address, and port number specified in the Logtail configuration must be the same as the forwarding rule specified in the rsyslog configuration file.
    
-   If the server where Logtail is installed has multiple IP addresses that can receive logs, you can set the address to `0.0.0.0`. This indicates that Logtail listens on all IP addresses of the server.
    

ParseProtocol

string

No

None

rfc3164

The protocol used to parse logs. The default value is empty, which indicates that logs are not parsed. Valid values:

-   Empty: does not parse logs.
    
-   rfc3164: uses the RFC3164 protocol to parse logs.
    
rfc5424: uses the RFC5424 protocol to parse logs.-   auto: automatically selects a suitable parsing protocol based on the log content.
    

IgnoreParseFailure

bool

No

true

true

The operation to perform after a parsing failure. If you do not configure this parameter, the default value `true` is used, which indicates that parsing is abandoned and the returned content field is directly populated. If you set this parameter to `false`, the log is discarded if parsing fails.

### Systemd Journal input plugin

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

service\_journal

The plugin type. Set the value to service\_journal.

JournalPaths

\[string\]

Yes

None

/var/log/journal

The Journal log path. We recommend that you set this parameter to the directory where Journal logs are stored.

SeekPosition

string

No

tail

tail

The initial collection method. Valid values: head and tail.

-   head: collects all data.
    
-   tail: collects only new data after the Logtail collection configuration is applied.
    

Kernel

bool

No

true

true

Specifies whether to collect kernel logs.

Units

\[string\]

No

None

""

The list of units to collect. By default, this parameter is left empty, which indicates that all units are collected.

ParseSyslogFacility

bool

No

false

false

Specifies whether to parse the facility field of syslog logs. If you do not configure this parameter, the field is not parsed.

ParsePriority

bool

No

false

false

Specifies whether to parse the Priority field. If you do not configure this parameter, the field is not parsed. If you set this parameter to true, the Priority field is mapped as follows: `plaintext "0": "emergency" "1": "alert" "2": "critical" "3": "error" "4": "warning" "5": "notice" "6": "informational" "7": "debug"`

UseJournalEventTime

bool

No

false

false

Specifies whether to use the field in the Journal log as the log time. If you do not configure this parameter, the collection time is used as the log time. The time difference for real-time log collection is generally within 3 seconds.

### SQL Server input plugin

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

service\_mssql

The plugin type. Set the value to service\_mssql.

Address

string

No

127.0.0.1:1433

rm-\*.sqlserver.rds.aliyuncs.com

The address of the SQL Server database.

User

string

No

root

root

The username that is used to log on to the SQL Server database.

Password

string

No

None

The password of the user that is used to log on to the SQL Server database. For security purposes, you can set the username and password to xxx. After the collection configuration is synchronized to your on-premises machine, find the configuration in the `/usr/local/ilogtail/user_log_config.json` file and modify it. For more information, see [Modify local configurations](/help/en/sls/collect-mysql-query-results).

**Important** If you modify this parameter in the console, the local configuration is overwritten after synchronization.

DataBase

string

No

/

project\_database

The name of the database.

DialTimeOutMs

int

No

5000

5000

The timeout period for connecting to the SQL Server database. Unit: ms.

ReadTimeOutMs

int

No

5000

5000

The timeout period for reading the SQL Server query results. Unit: ms.

StateMent

string

No

/

The SELECT statement. If you set CheckPoint to true, the WHERE clause in the SELECT statement must contain the checkpoint column (CheckPointColumn). You can use a question mark (?) as a placeholder to work with the checkpoint column. For example, you can set CheckPointColumn to id, CheckPointStart to 0, and StateMent to `SELECT * from ... where id > ?`. After each collection, the system saves the ID of the last data entry as a checkpoint. In the next collection, the question mark (?) in the query statement is replaced with the ID corresponding to the checkpoint.

Limit

bool

No

false

true

Specifies whether to use LIMIT for paging.

-   true: uses LIMIT for paging.
    
-   false (default): does not use LIMIT for paging.
    

We recommend that you use LIMIT for paging. If you set Limit to true, the system automatically appends a LIMIT clause to the SELECT statement during SQL queries.

PageSize

int

No

/

10

The number of entries to return on each page. This parameter is required if you set Limit to true.

MaxSyncSize

int

No

0

0

The maximum number of records to synchronize at a time. The default value is 0, which indicates that no limit is imposed.

CheckPoint

bool

No

false

true

Specifies whether to use a checkpoint.

-   true: uses a checkpoint.
    
-   false (default): does not use a checkpoint.
    

A checkpoint can be used as the starting point for the next data collection to implement incremental data collection.

CheckPointColumn

string

No

None

1

The name of the checkpoint column. This parameter is required if you set CheckPoint to true. **Warning** The values in this column must be incremental. Otherwise, data may fail to be collected. The maximum value in each query result is used as the input for the next query.

CheckPointColumnType

string

No

None

int

The data type of the checkpoint column. Valid values: int and time. The int type is stored as int64. The time type supports the date, datetime, and time types of SQL Server. This parameter is required if you set CheckPoint to true.

CheckPointStart

string

No

None

The initial value of the checkpoint column. This parameter is required if you set CheckPoint to true.

CheckPointSavePerPage

bool

No

true

true

Specifies whether to save a checkpoint for each page.

-   true (default): saves a checkpoint for each page.
    
-   false: saves a checkpoint after each synchronization is complete.
    

IntervalMs

int

No

60000

60000

The synchronization interval. The default value is 60,000. Unit: ms.

### PostgreSQL input plugin

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

service\_pgsql

The plugin type. Set the value to service\_pgsql.

Address

string

No

127.0.0.1:5432

rm-\*.pg.rds.aliyuncs.com

The address of the PostgreSQL database.

User

string

No

root

root

The username that is used to log on to the PostgreSQL database.

Password

string

No

None

The password of the user that is used to log on to the PostgreSQL database. For security purposes, you can set the username and password to xxx. After the collection configuration is synchronized to your on-premises machine, find the configuration in the `/usr/local/ilogtail/user_log_config.json` file and modify it. For more information, see [Modify local configurations](/help/en/sls/collect-mysql-query-results).

**Important** If you modify this parameter in the console, the local configuration is overwritten after synchronization.

DataBase

string

No

/

project\_database

The name of the PostgreSQL database.

DialTimeOutMs

int

No

5000

5000

The connection timeout for the PostgreSQL database, in milliseconds.

ReadTimeOutMs

int

No

5000

5000

The timeout for reading PostgreSQL query results. Unit: ms.

StateMent

string

No

/

The SELECT statement. If CheckPoint is set to true, the WHERE clause in the StateMent must include a condition for the checkpoint column. The checkpoint column is specified by the CheckPointColumn parameter. This condition must use $1 as a placeholder for the checkpoint value. For example: Set CheckPointColumn to id and StateMent to `SELECT * from ... where id > $1`

Limit

Boolean

No

false

true

Specifies whether to use Limit for paging.

-   true: Use Limit.
    
-   false (default): Do not use Limit.
    

Use Limit for paging. If set to true, the system automatically appends a LIMIT statement to SELECT statements during SQL queries.

PageSize

int

No

/

10

The page size. This parameter is required if \`Limit\` is set to \`true\`.

MaxSyncSize

int

No

0

0

The maximum number of records to sync each time. The default value is 0, which means there is no limit.

CheckPoint

bool

No

false

true

Specifies whether to use a checkpoint.

-   true: Use a checkpoint.
    
-   false: (Default) Do not use a checkpoint.
    

A checkpoint can be used as the starting point for the next data collection to enable incremental data collection.

CheckPointColumn

string

No

Empty

1

The name of the CheckPoint column. This parameter is required when CheckPoint is set to true. **Warning** The value of this column must be incremental. Otherwise, data collection issues may occur because the maximum value from each query is used as the input for the next query.

CheckPointColumnType

string

No

empty

int

The data type of the CheckPoint column. Supported values are \`int\` and \`time\`. The \`int\` type is stored as \`int64\`. The \`time\` type supports PostgreSQL time types. This parameter is required when the CheckPoint parameter is set to \`true\`.

CheckPointStart

string

No

empty

The initial value of the CheckPoint column. This parameter is required when CheckPoint is set to true.

CheckPointSavePerPage

bool

No

true

true

Specifies whether to save a checkpoint for each page.

-   true (Default): Saves a checkpoint for each page.
    
-   false: Saves a checkpoint after each sync is complete.
    

IntervalMs

int

No

60000

60000

The synchronization interval. The default value is 60000 ms.

### SNMP input plugin

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Targets

\[string\]

Yes

/

127.0.0.1

The IP addresses of the target machine group.

Port

string

No

161

161

The port used by the SNMP protocol.

Community

string

No

public

public

The community string. SNMPv1 and SNMPv2 use the community string for authentication.

UserName

string

No

Empty

root

The username. SNMPv3 supports authentication using a username.

AuthenticationProtocol

string

No

NoAuth

NoAuth

The authentication protocol. SNMPv3 supports authentication using an authentication protocol.

AuthenticationPassphrase

string

No

Empty

The authentication passphrase. The default value is empty. If you set `AuthenticationProtocol` to `MD5` or `SHA`, you must set `AuthenticationPassphrase`.

PrivacyProtocol

string

No

NoPriv

NoPriv

The privacy protocol. SNMPv3 supports authentication using a privacy protocol.

PrivacyPassphrase

string

No

Empty

The privacy protocol passphrase. By default, it is the same as the authentication passphrase. If you set `PrivacyProtocol` to `DES` or `AES`, you must set `PrivacyPassphrase`.

Timeout

int

No

5

5

The timeout period for a query operation, in seconds.

Version

int

No

2

2

The SNMP protocol version. Valid values are `1`, `2`, and `3`.

Transport

string

No

udp

udp

The SNMP communication method. Valid values are `udp` and `tcp`.

MaxRepetitions

int

No

0

0

The number of retries after a query times out.

Oids

\[string\]

No

Empty

1

The Object Identifiers (OIDs) to query on the target machine.

Fields

\[string\]

No

Empty

int

The fields to query on the target machine. The plugin looks up these fields in the local Management Information Base (MIB), translates them into Object Identifiers (OIDs), and then queries them.

Tables

\[string\]

No

Empty

The tables to query on the target machine. The plugin finds all fields within the specified tables, looks them up in the local Management Information Base (MIB), translates them into Object Identifiers (OIDs), and then queries them.

### Script output collector plugin

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

input\_command

The type of the plugin. The value is fixed to input\_command.

ScriptType

string

Yes

Empty

shell

The type of the script content. Valid values are bash, shell, python2, and python3.

User

string

Yes

/

public

The username used to run the command. Only non-root users are supported. **Note** \* Ensure the specified username exists on the machine. Configure the least privilege. Grant only rwx permissions for the folders or files to be monitored.

ScriptContent

string

Yes

Empty

The content of the script. The content can be in plain text or Base64-encoded. The length cannot exceed 512 × 1024 bytes.

ContentEncoding

string

No

PlainText

PlainText

The encoding format of the script content. This parameter is optional. Valid values:

-   PlainText (Default): The script content is plain text and not encoded.
    
-   Base64: The script content is Base64-encoded.
    

LineSplitSep

string

No

Empty

The separator used to split the script output. If you leave this parameter empty, the output is not split and is returned as a single log entry.

CmdPath

string

No

Empty

/usr/bin/bash

The execution path of the script. If this parameter is empty, a default path is used. The default paths are as follows:

-   bash: /usr/bin/bash
    
-   shell: /usr/bin/sh
    
-   python2: /usr/bin/python2
    
-   python3: /usr/bin/python3
    

TimeoutMilliSeconds

int

No

3000

3000

The timeout period for script execution. Unit: milliseconds.

IgnoreError

bool

No

false

false

Specifies whether to ignore error logs if the plugin fails to execute. The default value is false, which indicates that errors are not ignored.

Environments

\[string\]

No

The environment variables. By default, the value of os.Environ() is used. If you set this parameter, the specified environment variables are appended to the os.Environ() value.

IntervalMs

int

No

5000

5000

The interval at which data is collected or the script is executed. Unit: milliseconds.

## Native processor plugins

### Native regex parsing plugin

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

None

processor\_parse\_regex\_native

The plugin type. The value is fixed to processor\_parse\_regex\_native.

SourceKey

string

Yes

None

content

The source field name.

Regex

string

Yes

None

(\\d+-\\d+-\\d+)\\s+(.\*)

The regular expression.

Keys

\[string\]

Yes

None

\["time", "msg"\]

The list of extracted fields.

KeepingSourceWhenParseFail

bool

No

false

false

Specifies whether to keep the source field if parsing fails.

KeepingSourceWhenParseSucceed

bool

No

false

false

Specifies whether to keep the source field if parsing succeeds.

RenamedSourceKey

string

No

Empty

key

The new name for the source field if it is kept. If you leave this parameter empty, the source field is not renamed.

### Native JSON parsing plugin

**Parameter**

**Type**

**Required**

**Default Value**

**Example**

**Description**

Type

string

Yes

/

processor\_parse\_json\_native

The type of the plug-in. The value is fixed to processor\_parse\_json\_native.

SourceKey

string

Yes

/

content

The name of the source field.

KeepingSourceWhenParseFail

bool

No

false

false

Specifies whether to keep the source field if parsing fails.

KeepingSourceWhenParseSucceed

bool

No

false

false

Specifies whether to keep the source field if parsing succeeds.

RenamedSourceKey

string

No

empty

key

The new field name for the source field when it is kept. If this parameter is left empty, the source field is not renamed.

### Native separator parsing plugin

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_parse\_delimiter\_native

The type of the plug-in. The value must be processor\_parse\_delimiter\_native.

SourceKey

string

Yes

/

content

The name of the source field.

Separator

string

Yes

/

,

The separator character.

Quote

string

No

"

"

The quote character.

Keys

\[string\]

Yes

/

\["time", "msg"\]

The list of keys for the extracted fields.

AllowingShortenedFields

bool

No

true

true

Specifies whether to allow fewer extracted fields than keys. If set to false, parsing fails if the number of fields is smaller than the number of keys.

OverflowedFieldsTreatment

string

No

extend

extend

The behavior when the number of extracted fields is greater than the number of keys. Valid values:

-   extend: Keeps the extra fields and adds each one to the log as a separate field. The extra fields are named \_\_column$i\_\_, where $i is the ordinal number of the field, starting from 0.
    
-   keep: Keeps the extra fields and adds them to the log as a single field named \_\_column0\_\_.
    
-   discard: Discards the extra fields.
    

KeepingSourceWhenParseFail

bool

No

false

false

Specifies whether to keep the source field if parsing fails.

KeepingSourceWhenParseSucceed

bool

No

false

false

Specifies whether to keep the source field if parsing succeeds.

RenamedSourceKey

string

No

empty

key

The name of the field used to store the source field when the source field is kept. If you do not specify a name, the source field is not renamed.

### Native Apsara parsing plugin

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_parse\_apsara\_native

The plugin type. The value is fixed to processor\_parse\_apsara\_native.

SourceKey

string

Yes

/

content

The source field name.

Timezone

string

No

Empty

GMT+08:00

The time zone of the log. The format is GMT+HH:MM for eastern time zones or GMT-HH:MM for western time zones.

KeepingSourceWhenParseFail

bool

No

false

false

Specifies whether to keep the source field when parsing fails.

KeepingSourceWhenParseSucceed

bool

No

false

false

Specifies whether to keep the source field when parsing succeeds.

RenamedSourceKey

string

No

Empty

key

The name of the field that stores the source field if the source field is kept. If this parameter is empty, the source field is not renamed.

### Native time parsing plugin

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_parse\_timestamp\_native

The type of the plugin. The value must be processor\_parse\_timestamp\_native.

SourceKey

string

Yes

/

content

The name of the source field.

SourceFormat

string

Yes

/

%Y/%m/%d %H:%M:%S

The time format of the log. For more information, see [Time formats](/help/en/sls/time-formats).

SourceTimezone

string

No

Empty

GMT+08:00

The time zone of the log. The format is GMT+HH:MM for eastern time zones or GMT-HH:MM for western time zones.

### Native filtering plugin

**Parameter**

**Type**

**Required**

**Example**

**Default value**

**Description**

Type

string

Yes

processor\_filter\_regex\_native

/

The plugin type. The value is fixed to processor\_filter\_regex\_native.

Include

map

Yes

/

/

A whitelist for log fields. The key is a field name and the value is a regular expression. A log is collected only if the content of the specified field matches the regular expression. If you define multiple conditions, a log is collected only if it meets all of them.

### Native data masking plugin

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_desensitize\_native

The plugin type. The value is fixed to processor\_desensitize\_native.

SourceKey

string

Yes

/

content

The name of the source field.

Method

string

Yes

/

const

The data masking method. Valid values include the following: const: Replaces sensitive content with a constant string. md5: Replaces sensitive content with its MD5 value.

ReplacingString

string

No. This parameter is required when Method is set to const.

/

\*\*\*\*\*\*

The constant string used to replace sensitive content.

ContentPatternBeforeReplacedString

string

Yes

/

'password:'

The regular expression for the prefix of the sensitive content.

ReplacedContentPattern

string

Yes

/

\[^'\]\*

The regular expression for the sensitive content.

ReplacingAll

bool

No

true

true

Specifies whether to replace all matched sensitive content.

## Extension processor plugins

### Fetch fields

#### Regular expression pattern

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_regex

The type of the plugin. This is fixed to processor\_regex.

SourceKey

string

Yes

/

content

The name of the source field.

Regex

string

Yes

/

(\\d+-\\d+-\\d+)\\s+(.\*)

The regular expression. Use parentheses `()` to annotate the fields to fetch.

Keys

\[string\]

Yes

/

\["ip", "time", "method"\]

Specifies the field names for the fetched content, such as \["ip", "time", "method"\].

NoKeyError

boolean

No

false

false

Specifies whether the system reports an error if the source field does not exist in the raw log.

-   true: The system reports an error.
    
-   false (default): The system does not report an error.
    

NoMatchError

boolean

No

false

false

Specifies whether the system reports an error if the regular expression does not match the value of the source field.

-   true: The system reports an error.
    
-   false (default): The system does not report an error.
    

KeepSource

boolean

No

false

false

Specifies whether to keep the source field in the parsed log.

-   true: Keeps the source field.
    
-   false (default): Does not keep the source field.
    

FullMatch

boolean

No

true

true

Specifies whether to fetch field values only when a full match is found.

-   true (default): Field values are fetched only if all fields that you set in the Keys parameter match the value of the source field based on the regular expression in the Regex parameter.
    
-   false: Field values are fetched even if only a partial match is found.
    

KeepSourceIfParseError

boolean

No

true

false

Specifies whether to keep the source field in the log if parsing fails.

-   true (default): Keeps the source field.
    
-   false: Does not keep the source field.
    

#### Delimiter mode

**Parameter**

**Type**

**Required**

**Default Value**

**Example**

**Description**

Type

string

Yes

N/A

processor\_anchor

The type of the plug-in. This is fixed to processor\_anchor.

SourceKey

string

Yes

N/A

content

The name of the source field.

Anchors

array

Yes

N/A

The list of anchor items.

Start

string

Yes

Empty

time

The start keyword. If this parameter is empty, it matches the beginning of the string.

Stop

string

Yes

Empty

\\t

The end keyword. If this parameter is empty, it matches the end of the string.

FieldName

string

Yes

Empty

time

The name of the field for the extracted content.

FieldType

string

Yes

Empty

string

The type of the field. Valid values are string and json.

ExpandJson

boolean

No

false

false

Specifies whether to expand the JSON field.

-   true: Expand the field.
    
-   false (default): Do not expand the field.
    

ExpandConnector

string

No

\_

\_

The connector used for JSON expansion. The default value is an underscore (\_).

MaxExpandDepth

integer

No

0

0

The maximum depth for JSON expansion. The default value is 0, which means no limit.

NoAnchorError

boolean

No

false

false

Specifies whether to report an error if an anchor item is not found.

-   true: Report an error.
    
-   false (default): Do not report an error.
    

NoKeyError

boolean

No

false

false

Specifies whether to report an error if the specified source field does not exist in the raw log.

-   true: Report an error.
    
-   false (default): Do not report an error.
    

KeepSource

boolean

No

false

false

Specifies whether to keep the source field in the parsed log.

-   true: Keep the source field.
    
-   false (default): Do not keep the source field.
    

#### CSV pattern

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

None

processor\_csv

The plugin type. Set this to processor\_csv.

SourceKey

String

Yes

None

csv

The name of the source field.

SplitKeys

String array

Yes

None

\["date", "ip", "content"\]

Specify the field names for the extracted content, such as \["date", "ip", "content"\]. **Important** If the number of fields to split is smaller than the number of fields specified in the SplitKeys parameter, the excess fields in SplitKeys are ignored.

PreserveOthers

Boolean

No

false

false

Specifies whether to keep remaining content when the source data contains more fields than specified in the SplitKeys parameter.

-   true: Keep the remaining content.
    
-   false (default): Do not keep the remaining content.
    

ExpandOthers

Boolean

No

false

false

Specifies whether to parse the remaining content.

-   true: Parse the content. Use the ExpandKeyPrefix parameter to specify a prefix for the names of the extra fields.
    
-   false (default): Do not parse the content. If PreserveOthers is set to true and ExpandOthers is set to false, the remaining content is stored in the \_decode\_preserve\_ field.
    

**Note** If the content of the extra fields is not in standard CSV format, normalize it before storage.

ExpandKeyPrefix

String

No

The prefix for the names of the extra fields. For example, if you set this parameter to expand\_, the field names are expand\_1, expand\_2, and so on.

TrimLeadingSpace

Boolean

No

false

false

Specifies whether to ignore leading spaces in field values.

-   true: Ignore leading spaces.
    
-   false (default): Do not ignore leading spaces.
    

SplitSep

String

No

,

,

The separator. The default value is a comma (,).

KeepSource

Boolean

No

false

false

Specifies whether to keep the source field in the parsed log.

-   true: Keep the source field.
    
-   false (default): Do not keep the source field.
    

NoKeyError

Boolean

No

false

false

Specifies whether to report an error if the specified source field does not exist in the raw log.

-   true: Report an error.
    
-   false (default): Do not report an error.
    

#### Single-character separator pattern

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_split\_char

The type of the plugin. The value must be processor\_split\_char.

SourceKey

String

Yes

The name of the source field.

SplitSep

String

Yes

The separator. This must be a single character. A non-printable character, such as \\u0001, can be used.

SplitKeys

String array

Yes

\["ip", "time", "method"\]

Specify the field names for the extracted content. For example, \["ip", "time", "method"\].

PreserveOthers

Boolean

No

false

false

Specifies whether to keep the remaining fields when the number of split fields is greater than the number of keys in SplitKeys.

-   true: Keep the remaining fields.
    
-   false (default): Do not keep the remaining fields.
    

QuoteFlag

Boolean

No

false

false

Specifies whether to use a quote character.

-   true: Use a quote character.
    
-   false (default): Do not use a quote character.
    

Quote

String

No

/

\\u0001

The quote character. This must be a single character. A non-printable character, such as \\u0001, can be used. This parameter is valid only when QuoteFlag is set to true.

NoKeyError

Boolean

No

false

false

Specifies whether to report an error if the specified source field does not exist in the raw log.

-   true: Report an error.
    
-   false (default): Do not report an error.
    

NoMatchError

Boolean

No

false

false

Specifies whether to report an error if the specified separator does not match the separator in the log.

-   true: Report an error.
    
-   false (default): Do not report an error.
    

KeepSource

Boolean

No

false

false

Specifies whether to keep the source field in the parsed log.

-   true: Keep the source field.
    
-   false (default): Do not keep the source field.
    

#### Multi-character separator pattern

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_split\_string

The type of the plugin. This parameter is fixed to \`processor\_split\_string\`.

SourceKey

String

Yes

The name of the source field.

SplitSep

String

Yes

The separator. This must be a single character. You can set this parameter to a non-printable character, such as \`\\u0001\`.

SplitKeys

String array

Yes

\["key1","key2"\]

The field names for the extracted content, such as \`\["key1","key2"\]\`. **Note** If the number of fields to split is smaller than the number of keys in the \`SplitKeys\` parameter, the extra keys are ignored.

PreserveOthers

Boolean

No

false

false

Specifies whether to keep the remaining fields when the number of split fields is greater than the number of keys in the \`SplitKeys\` parameter.

-   \`true\`: Keep the remaining fields.
    
-   \`false\` (default): Do not keep the remaining fields.
    

ExpandOthers

Boolean

No

false

false

Specifies whether to expand the remaining fields into separate key-value pairs. This parameter takes effect only when \`PreserveOthers\` is set to \`true\`.

-   \`true\`: Expand the fields.
    
-   \`false\` (default): Do not expand the fields.
    

ExpandKeyPrefix

String

No

/

expand\_

The prefix for the names of the remaining fields. For example, if you set this parameter to \`expand\_\`, the field names are \`expand\_1\`, \`expand\_2\`, and so on.

NoKeyError

Boolean

No

false

false

Specifies whether to report an error if the source field specified in \`SourceKey\` does not exist in the raw log.

-   \`true\`: Report an error.
    
-   \`false\` (default): Do not report an error.
    

NoMatchError

Boolean

No

false

false

Specifies whether to report an error if the log content cannot be split by the separator specified in \`SplitSep\`.

-   \`true\`: Report an error.
    
-   \`false\` (default): Do not report an error.
    

KeepSource

Boolean

No

false

false

Specifies whether to keep the source field in the parsed log.

-   \`true\`: Keep the source field.
    
-   \`false\` (default): Do not keep the source field.
    

#### Key-value pair pattern

**Parameter**

**Type**

**Required**

**Default Value**

**Example**

**Description**

Type

string

Yes

/

processor\_split\_key\_value

The plug-in type. Set this to processor\_split\_key\_value.

SourceKey

string

Yes

The name of the source field.

Delimiter

string

No

\\t

\\t

The separator between key-value pairs. The default value is the tab character `\t`.

Separator

string

No

:

:

The separator between the key and the value in a key-value pair. The default value is a colon (:).

KeepSource

Boolean

No

false

false

Specifies whether to keep the source field in the log after parsing.

-   true: Keeps the source field.
    
-   false (default): Does not keep the source field.
    

ErrIfSourceKeyNotFound

Boolean

No

true

false

Specifies whether to report an error if the source field is not found in the raw log.

-   true (default): Reports an error.
    
-   false: Does not report an error.
    

DiscardWhenSeparatorNotFound

Boolean

No

false

false

Specifies whether to discard the key-value pair if the separator is not found.

-   true: Discards the pair.
    
-   false (default): Does not discard the pair.
    

ErrIfSeparatorNotFound

Boolean

No

true

false

Specifies whether to report an error if the specified separator is not found.

-   true (default): Reports an error.
    
-   false: Does not report an error.
    

ErrIfKeyIsEmpty

Boolean

No

true

false

Specifies whether to report an error if a key is empty after splitting.

-   true (default): Reports an error.
    
-   false: Does not report an error.
    

Quote

String

No

The quote character. If a value is enclosed in the specified quote characters, the content within the quotes is extracted as the value. This parameter supports multiple characters. By default, this feature is disabled. **Important** \* To use a double quotation mark (") as the quote character, you must escape it with a backslash (\\\\). When a backslash is used with the quote character inside a quoted value, the backslash is included as part of the output value.

#### Grok pattern

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_grok

The type of the plugin. This is fixed to processor\_grok.

CustomPatternDir

String array

No

The folder where the custom Grok pattern files are located. The processor\_grok plugin reads all files in the folder. If you do not add this parameter, custom Grok pattern files are not imported. **Important** After updating a custom Grok pattern file, restart Logtail for the changes to take effect.

CustomPatterns

Map

No

Custom GROK patterns. The key is the rule name and the value is the Grok expression. For more information about the default supported expressions, see [processor\_grok](https://github.com/alibaba/ilogtail/blob/main/plugins/processor/grok/processor_grok_default_patterns.go). If the expression you need is not in the link, enter a custom Grok expression in Match. If you do not add this parameter, custom GROK patterns are not used.

SourceKey

String

No

content

content

The name of the source field. The default value is the content field.

Match

String array

Yes

An array of Grok expressions. The processor\_grok plugin matches logs against the expressions in this list from top to bottom. It returns the result of the first successful match. **Note** Configuring multiple Grok expressions may affect performance. For best performance, use no more than five expressions.

TimeoutMilliSeconds

Long

No

0

The maximum time to try fetching fields using a Grok expression, in milliseconds. If you do not add this parameter or set it to 0, no timeout occurs.

IgnoreParseFailure

Boolean

No

true

true

Specifies whether to ignore logs that fail to be parsed.

-   true (default): Ignores the logs.
    
-   false: Deletes the logs.
    

KeepSource

Boolean

No

true

true

Specifies whether to keep the source field after successful parsing.

-   true (default): Keeps the source field.
    
-   false: Discards the source field.
    

NoKeyError

Boolean

No

false

true

Specifies whether the system reports an error if the source field you specified does not exist in the raw log.

-   true: Reports an error.
    
-   false (default): Does not report an error.
    

NoMatchError

Boolean

No

true

true

Specifies whether the system reports an error if none of the expressions set in the Match parameter match the log.

-   true (default): Reports an error.
    
-   false: Does not report an error.
    

TimeoutError

Boolean

No

true

true

Specifies whether the system reports an error if a match times out.

-   true (default): Reports an error.
    
-   false: Does not report an error.
    

### Add fields

**Parameter**

**Type**

**Required**

**Default**

**Example**

**Description**

Type

string

Yes

/

processor\_add\_fields

The plugin type. The value must be processor\_add\_fields.

Fields

Map

Yes

The field names and values to add. Specify the fields as key-value pairs. Multiple fields can be added.

IgnoreIfExist

Boolean

No

false

false

Specifies whether to ignore the new field if a field with the same name already exists.

-   true: Ignores the new field.
    
-   false (Default): Overwrites the existing field with the new field.
    

### Drop fields

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_drop

The type of the plug-in. The value is fixed to processor\_drop.

DropKeys

String array

Yes

The fields to drop. You can specify multiple fields.

### Rename fields

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_rename

The type of the plugin. The value is fixed to processor\_rename.

NoKeyError

Boolean

No

false

false

Specifies whether to report an error if a source field is not found in a log.

-   true: Report an error.
    
-   false: Do not report an error. This is the default value.
    

SourceKeys

String array

Yes

The source fields to rename.

DestKeys

String array

Yes

The new names for the fields.

### Package fields

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_packjson

The type of the plugin. This value is fixed to processor\_packjson.

SourceKeys

String array

Yes

The raw fields to package.

DestKey

String

No

The destination field for the packaged data.

KeepSource

Boolean

No

true

true

Specifies whether to retain the raw fields in the log after parsing.

-   true (default): Retains the raw fields.
    
-   false: Discards the raw fields.
    

AlarmIfIncomplete

Boolean

No

true

true

Specifies whether to report an error if a specified raw field does not exist in the raw log.

-   true (default): Reports an error.
    
-   false: Does not report an error.
    

### Expand JSON fields

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_json

The type of the plug-in. This value is fixed to processor\_json.

SourceKey

String

Yes

The name of the source field to parse.

NoKeyError

Boolean

No

true

true

Specifies whether to report an error if the specified source field does not exist in the raw log.

-   true (default): Reports an error.
    
-   false: Does not report an error.
    

ExpandDepth

Int

No

0

1

The expansion depth for the JSON object. The default value is 0, which indicates no limit. A value of 1 indicates the current level, and so on.

ExpandConnector

String

No

\_

\_

The connector used to join field names during JSON expansion. The default value is an underscore (\_).

Prefix

String

No

The prefix to add to the names of expanded fields.

KeepSource

Boolean

No

true

true

Specifies whether to keep the source field in the log after it is parsed.

-   true (default): Keeps the source field.
    
-   false: Discards the source field.
    

UseSourceKeyAsPrefix

Boolean

No

Specifies whether to use the source field name as the prefix for all expanded field names.

KeepSourceIfParseError

Boolean

No

true

true

Specifies whether to keep the raw log if parsing fails.

-   true (default): Keeps the raw log.
    
-   false: Discards the raw log.
    

ExpandArray

Boolean

No

false

false

Specifies whether to expand arrays. This parameter is supported in Logtail 1.8.0 and later versions.

-   false (default): Does not expand arrays.
    
-   true: Expands arrays. For example, `{"k":["1","2"]}` is expanded into `{"k[0]":"1","k[1]":"2"}`.
    

### Filter logs

**Parameter**

**Type**

**Required**

**Default Value**

**Example**

**Description**

Type

string

Yes

/

processor\_filter\_regex

The plugin type. The value is fixed to processor\_filter\_regex.

Include

JSON Object

No

The key is a log field and the value is a regular expression. A logical AND is applied between key-value pairs. A log is collected only if all specified fields match their corresponding regular expressions.

Exclude

JSON Object

No

The key is a log field and the value is a regular expression. A logical OR is applied between key-value pairs. A log is discarded if any specified field matches its corresponding regular expression.

### Fetch log time

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_gotime

The type of the plugin. The value is fixed to processor\_gotime.

SourceKey

String

Yes

The name of the source field.

SourceFormat

String

Yes

The format of the source time.

SourceLocation

Int

Yes

The time zone of the source time. If this parameter is left empty, the time zone of the host or container where Logtail is running is used.

DestKey

String

Yes

The destination field for the parsed data.

DestFormat

String

Yes

The format of the parsed time.

DestLocation

Int

No

The time zone of the parsed time. If this parameter is left empty, the local time zone is used.

SetTime

Boolean

No

true

true

Specifies whether to use the parsed time as the log time.

-   true (default): Use the parsed time as the log time.
    
-   false: Do not use the parsed time as the log time.
    

KeepSource

Boolean

No

true

true

Specifies whether to keep the source field in the log after it is parsed.

-   true (default): Keep the source field.
    
-   false: Do not keep the source field.
    

NoKeyError

Boolean

No

true

true

Specifies whether to report an error if the specified source field is not found in the raw log.

-   true (default): Report an error.
    
-   false: Do not report an error.
    

AlarmIfFail

Boolean

No

true

true

Specifies whether to report an error if parsing the log time fails.

-   true (default): Report an error.
    
-   false: Do not report an error.
    

### Transform IP addresses

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_geoip

The plugin type. This value is fixed to processor\_geoip.

SourceKey

String

Yes

The name of the source field that contains the IP address to transform.

DBPath

String

Yes

/user/data/GeoLite2-City\_20180102/GeoLite2-City.mmdb

The full path of the GeoIP database. For example, /user/data/GeoLite2-City\_20180102/GeoLite2-City.mmdb.

NoKeyError

Boolean

No

false

false

Specifies whether to report an error if the source field is missing from the raw log.

-   true: Reports an error.
    
-   false (default): Does not report an error.
    

NoMatchError

Boolean

No

true

true

Specifies whether to report an error if the IP address is invalid or not found in the database.

-   true (default): Reports an error.
    
-   false: Does not report an error.
    

KeepSource

Boolean

No

true

true

Specifies whether to keep the source field in the log after parsing.

-   true (default): Keeps the source field.
    
-   false: Does not keep the source field.
    

Language

String

No

zh-CN

zh-CN

The language property. The default value is zh-CN. **Important** Make sure your GeoIP database includes the specified language.

### Data masking

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_desensitize

The type of the plugin. The value is fixed to processor\_desensitize.

**SourceKey**

string

Yes

The name of the log field.

**Method**

string

Yes

const

The desensitization method. Valid values:

-   **const**: Replaces sensitive content with a specified string. Use the **ReplaceString** parameter to specify the string.
    
-   **md5**: Replaces sensitive content with its MD5 hash.
    

**Match**

string

No

full

full

The method to identify the sensitive content. Valid values:

-   **full** (default): Replaces the entire value of the target field.
    
-   **regex**: Uses a regular expression to identify the sensitive content.
    

**ReplaceString**

string

No

The string that replaces the sensitive content. This parameter is required if you set **Method** to **const**.

**RegexBegin**

string

No

The regular expression that matches the prefix of the sensitive content. This parameter is required if you set **Match** to **regex**.

**RegexContent**

string

No

The regular expression that matches the sensitive content. This parameter is required if you set **Match** to **regex**.

### Field value mapping

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_dict\_map

The plugin type. This value is fixed to processor\_dict\_map.

SourceKey

String

Yes

The name of the source field.

MapDict

Map

No

The mapping dictionary. Use this parameter to configure a small mapping dictionary. A local CSV dictionary file is not required. **Important** If you set the DictFilePath parameter, the settings in the MapDict parameter do not take effect.

DictFilePath

String

No

A dictionary file in CSV format. This file uses a comma (,) as the separator and double quotation marks (") to enclose field references.

DestKey

String

No

The name of the destination field.

HandleMissing

Boolean

No

false

false

Specifies whether to process a raw log if the destination field is missing.

-   true: Process the log. The system fills the field with the value of the Missing parameter.
    
-   false (default): Do not process the log.
    

Missing

String

No

Unknown

Unknown

The value to use for the destination field if it is missing from the raw log. The default value is Unknown. This parameter takes effect only when HandleMissing is set to `true`.

MaxDictSize

Int

No

1000

1000

The maximum size of the mapping dictionary. The default value is 1000, which means you can store up to 1000 mapping rules. To limit the server memory used by the plugin, decrease this value.

Mode

String

No

overwrite

overwrite

The action to take if the destination field already exists in the raw log.

-   overwrite (default): Overwrites the original field.
    
-   fill: Does not overwrite the original field.
    

### Field encryption

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_encrypt

The type of the plugin. The value is fixed to processor\_encrypt.

SourceKey

String array

Yes

The names of the source fields.

EncryptionParameters

Object

Yes

The configuration for the encryption key.

Key

String

Yes

The encryption key. The value must be a 64-character hexadecimal string.

IV

String

No

00000000000000000000000000000000

The initialization vector (IV) for encryption. The value must be a 32-character hexadecimal string. The default value is `00000000000000000000000000000000`.

KeyFilePath

Boolean

No

The path to the file that contains the encryption parameters. If this parameter is not set, the system uses the path from File Path in the **Input Settings** of the Logtail configuration.

KeepSourceValueIfError

String

No

false

false

Specifies whether to keep the original field value if encryption fails.

-   \`true\`: Keeps the original value.
    
-   \`false\` (default): Does not keep the original value.
    

If encryption fails, the field value is replaced with `ENCRYPT_ERROR`.

### String replacement

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_string\_replace

The type of the plugin. The value is fixed to processor\_string\_replace.

SourceKey

String

Yes

The name of the source field.

Method

String

Yes

Specifies the matching method. Valid values:

-   `const`: Replaces content with a string.
    
-   `regex`: Replaces content using a regular expression.
    
-   `unquote`: Removes escape characters.
    

Match

String

No

The content to match.

-   If `Method` is set to `const`, enter the string to replace. All matching strings are replaced.
    
-   If `Method` is set to `regex`, enter the regular expression to match the content to replace. All matching strings are replaced. You can also use regular expression groups to match specific groups.
    
-   If `Method` is set to `unquote`, this parameter is not required.
    

ReplaceString

String

No

The string used for replacement. The default value is "".

-   If `Method` is set to `const`, enter the string to replace the original content.
    
-   If `Method` is set to `regex`, enter the string to replace the original content. Replacement based on regular expression groups is supported.
    
-   If `Method` is set to `unquote`, this parameter is not required.
    

DestKey

String

No

Specifies a new field for the replaced content. By default, no new field is added.

### Data encoding and decoding

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_base64\_encoding

The type of the plugin. This parameter is fixed to processor\_base64\_encoding.

SourceKey

String

Yes

The name of the source field.

NewKey

String

Yes

The name of the field that stores the encoded result.

NoKeyError

Boolean

No

false

false

Specifies whether to report an error if the source field does not exist in the raw log.

-   true: Reports an error.
    
-   false (default): Does not report an error.
    

### Log to metric

**Parameter**

**Type**

**Required**

**Default value**

**Example**

**Description**

Type

string

Yes

/

processor\_log\_to\_sls\_metric

The plugin type. The value is fixed to processor\_log\_to\_sls\_metric.

MetricTimeKey

String

No

Specifies the time field in the log. This field is mapped to the `__time_nano__` field in the time series data. By default, the value of the `__time__` field is used. Make sure the specified field is a valid UNIX timestamp. Supported units include seconds (10 digits), milliseconds (13 digits), microseconds (16 digits), and nanoseconds (19 digits).

MetricLabelKeys

\[\]String

Yes

Specifies the list of keys for the `__labels__` field. The keys must follow the regular expression `^[a-zA-Z_][a-zA-Z0-9_]*$`. The values cannot contain vertical bars (|) or `#$#`. For more information, see [Time series data (Metric)](/help/en/sls/metric). Do not add the `__labels__` field to the MetricLabelKeys parameter. If the original log contains a `__labels__` field, its value is appended to the new `__labels__` field.

MetricValues

Map

Yes

Specifies the metric name and metric value. The metric name corresponds to the `__name__` field and must follow the regular expression `^[a-zA-Z_:][a-zA-Z0-9_:]*$`. The metric value corresponds to the `__value__` field and must be of the Double type. For more information, see [Time series data (Metric)](/help/en/sls/metric).

CustomMetricLabels

Map

No

Custom `__labels__` fields. The keys must follow the regular expression `^[a-zA-Z_][a-zA-Z0-9_]*$`. The values cannot contain vertical bars (|) or `#$#`. For more information, see [Time series data (Metric)](/help/en/sls/metric).

IgnoreError

Boolean

No

Specifies whether to output an error log if no logs are matched. The default value is false, which means no error log is output.

### Log to trace

**Parameter**

**Type**

**Required**

**Default Value**

**Example**

**Description**

Type

string

Yes

/

processor\_otel\_trace

The type of the plug-in. This parameter is fixed to processor\_otel\_trace.

SourceKey

String

Yes

The name of the source field.

Format

String

Yes

json

The format after transformation. Valid values: protobuf, json, and protojson.

NoKeyError

Boolean

No

false

true

Specifies whether to report an error if the source field does not exist in the log. The default value is false.

TraceIDNeedDecode

Boolean

No

Specifies whether to decode the TraceID from Base64. The default value is false. If you set Format to protojson and the TraceID is Base64-encoded, set TraceIDNeedDecode to true. Otherwise, the transformation fails.

SpanIDNeedDecode

Boolean

No

Specifies whether to decode the SpanID from Base64. The default value is false. If you set Format to protojson and the SpanID is Base64-encoded, set SpanIDNeedDecode to true. Otherwise, the transformation fails.

ParentSpanIDNeedDecode

Boolean

No

Specifies whether to decode the ParentSpanID from Base64. The default value is false. If you set Format to protojson and the ParentSpanID is Base64-encoded, set ParentSpanIDNeedDecode to true. Otherwise, the transformation fails.

## Output plugins

### SLS output plugin

**Parameter**

**Type**

**Required**

**Default Value**

**Example**

**Description**

Type

string

Yes

/

flusher\_sls

The type of the plugin. This value is fixed to flusher\_sls.

Logstore

string

Yes

/

test-logstore

The name of the Logstore.

## Response elements

**Element**

**Type**

**Description**

**Example**

None defined.

## Examples

Success response

`JSON` format

```
{}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Sls/2020-12-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Sls/2020-12-30/CreateLogtailPipelineConfig#workbench-doc-change-demo) for a complete list.
