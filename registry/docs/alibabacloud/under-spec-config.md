Defining log collection settings as a Kubernetes CustomResourceDefinition (CRD) unifies management across all clusters, including Container Service for Kubernetes (ACK) and self-managed ones. This approach replaces inconsistent, error-prone manual processes with versioned automation through `kubectl` and CI/CD pipelines. LoongCollector's built-in hot reloading applies changes instantly without restarts, directly boosting operational efficiency and system maintainability.

> The legacy AliyunLogConfig CRD is no longer maintained. Use the new `AliyunPipelineConfig` CRD instead. For a comparison of the new and legacy versions, see [CRD types](/help/en/sls/use-crd-to-manage-collection-configurations/#d38448c5c15vn).

**Important**

Collection configurations created using a CRD can only be modified by updating the corresponding CRD. Changes made in the Simple Log Service (SLS) console are not synchronized to the CRD and do not take effect.

## **Usage notes**

-   **Operating environment:**
    
    -   Supports ACK (managed and dedicated editions) and self-managed Kubernetes clusters.
        
    -   Kubernetes version **1.16.0 or later** that supports `Mount propagation: HostToContainer`.
        
    -   **Container runtime (Docker and Containerd only)**
        
        -   Docker:
            
            -   Requires access permissions for docker.sock.
                
            -   Standard output collection supports only the JSON log driver.
                
            -   Supports only the overlay and overlay2 storage drivers. For other types, you must manually mount the log directories.
                
        -   Containerd: Requires access permissions for containerd.sock.
            
-   **Resource requirements:** LoongCollector (Logtail) runs with \`system-cluster-critical\` high priority. Do not deploy it if cluster resources are insufficient, because it may evict existing pods on the node.
    
    -   **CPU**: Reserve at least **0.1 Core**.
        
    -   **Memory**: At least **150 MB** for the collection component and at least **100 MB** for the controller component.
        
    -   Actual usage depends on the collection rate, the number of monitored directories and files, and the extent of any sending blockages. Ensure that actual usage remains below 80% of the configured limit.
        
-   **Permissions:** The Alibaba Cloud account or RAM user used for deployment must have the `**AliyunLogFullAccess**` permission.
    
    > To create custom policies, see the [AliyunCSManagedLogRolePolicy](/help/en/ram/developer-reference/aliyuncsmanagedlogrolepolicy) system policy. Copy the permissions from this policy and grant them to the target RAM user or role to configure fine-grained permissions.
    

## **Collection configuration workflow**

1.  [**Install LoongCollector**](#9b3c2215b3gup)**:** Deploy LoongCollector as a DaemonSet to ensure that a collection container runs on each node in the cluster. This enables unified collection of logs from all containers on that node.
    
2.  **[Create a logstore](#cdd8676d8d7ie)****:** A logstore is a storage unit for log data. Multiple logstores can be created in a project.
    
3.  **Create a collection configuration YAML file:** [Use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster). Create the collection configuration file in one of the following two methods:
    
    -   **Method 1: Use the collection configuration generator**
        
        Use the [collection configuration generator](https://sls.console.alibabacloud.com/lognext/crd-generator) in the SLS console to visually enter parameters and automatically generate a standard YAML file.
        
    -   **Method 2: Manually write the YAML file**
        
        Write a YAML file based on the examples and workflows in this topic. Start with a minimal configuration and progressively adding processing logic and advanced features.
        
        > For more information about complex use cases not covered in this topic or fields that require deep customization, see [AliyunPipelineConfig parameters](/help/en/sls/kubernetes-cr-parameter-description) for a complete list of fields, value rules, and plugin capabilities.
        
    
    A complete collection configuration usually includes the following parts:
    
    -   [**Minimal configuration (Required)**](#e058a26344f5o): Builds the data tunnel from the cluster to SLS. It includes two parts:
        
        -   Inputs `(inputs)`: Defines the source of the logs. Container logs include the following two log sources. To collect other types of logs, such as MySQL query results, see [Input plugins](/help/en/sls/developer-reference/api-sls-2020-12-30-createlogtailpipelineconfig#%E8%BE%93%E5%85%A5%E6%8F%92%E4%BB%B6).
            
            -   Container standard output (stdout and stderr): Log content that the container program prints to the console.
                
            -   Text log files: Log files written to a specified path inside the container.
                
        -   Outputs `(flushers)`: Defines the log target. Sends collected logs to the specified logstore.
            
            > If the target project or logstore does not exist, the system automatically creates it. You can also manually create a [project](/help/en/sls/manage-a-project/) and a [logstore](/help/en/sls/manage-a-logstore) in advance.
            
    -   [**Common processing configurations (Optional)**](#c2edb62a0f3wi): Defines the `processors` field to perform structured parsing (such as regular expression or delimiter parsing), masking, or filtering on raw logs.
        
        > This topic describes only native processing plugins that cover common log processing use cases. For more features, see [Extended processing plugins](/help/en/sls/developer-reference/api-sls-2020-12-30-createlogtailpipelineconfig#%E6%89%A9%E5%B1%95%E5%A4%84%E7%90%86%E6%8F%92%E4%BB%B6).
        
    -   [**Other advanced configurations (Optional)**](#f78307b71bpsr): Implements features such as multi-line log collection and log tag enrichment to meet more fine-grained collection requirements.
        
    
    **Structure example:**
    
    ```
    apiVersion: telemetry.alibabacloud.com/v1alpha1 # Use the default value. Do not modify.
    kind: ClusterAliyunPipelineConfig               # Use the default value. Do not modify.
    metadata:
      name: test-config                             # Set the resource name. It must be unique within the Kubernetes cluster.
    spec:
      project:                                      # Set the name of the target project.
        name: k8s-your-project                      
      config:                                       # Set the Logtail collection configuration.
        inputs:                                     # Set the input plugins for the Logtail collection configuration.
          ...
        processors:                                 # Set the processing plugins for the Logtail collection configuration.
          ...
        flushers:                                   # Set the output plugins for the Logtail collection configuration.
          ...
    ```
    
4.  **Apply the configuration**
    
    ```
    kubectl apply -f <your_yaml>
    ```
    

## **Install LoongCollector (Logtail)**

> LoongCollector is a new-generation log collection agent launched by SLS. It is an upgraded version of Logtail. The two cannot coexist. To install Logtail, see [Install and configure Logtail](/help/en/sls/install-run-upgrade-and-uninstall-logtail).

This topic describes only the basic installation steps for LoongCollector. For detailed parameters, see [Installation and configuration](/help/en/sls/loongcollector-installation-kubernetes-1). If you have already installed LoongCollector or Logtail, skip this step and proceed to create a [logstore](#cdd8676d8d7ie) to store the collected logs.

## **ACK cluster**

Install LoongCollector from the Container Service for Kubernetes (ACK) console. By default, logs are sent to an SLS project under the **current Alibaba Cloud account**.

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the target cluster to open its details page.
    
3.  In the navigation pane on the left, click **Add-ons**.
    
4.  On the **Logs and Monitoring** tab, find **loongcollector** and click **Install**.
    
    **Note**
    
    For a new cluster, on the **Advanced Options** section, select **Enable Log Service**. Then **Create Project** or **Select Project**.
    
    After the installation is complete, SLS automatically creates related resources in the region where the ACK cluster resides. Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) to view them.
    
    **Resource type**
    
    **Resource name**
    
    **Function**
    
    Project
    
    `k8s-log-${cluster_id}`
    
    A resource management unit that isolates logs for different services.
    
    > To create a project for more flexible log resource management, see [Create a project](/help/en/sls/manage-a-project/#89b98c40c765r).
    
    Machine group
    
    `k8s-group-${cluster_id}`
    
    A collection of log collection nodes.
    
    **Important**
    
    LoongCollector will not create a logstore named config-operation-log. If a logstore with this name already exists, LoongCollector stops writing logs to it.
    

## **Self-managed cluster**

1.  Connect to the Kubernetes cluster and run the corresponding command for your region to download LoongCollector and its dependent components:
    
    Regions in China:
    
    ```
    wget https://aliyun-observability-release-cn-shanghai.oss-cn-shanghai.aliyuncs.com/loongcollector/k8s-custom-pkg/3.0.12/loongcollector-custom-k8s-package.tgz; tar xvf loongcollector-custom-k8s-package.tgz; chmod 744 ./loongcollector-custom-k8s-package/k8s-custom-install.sh
    ```
    
    Regions outside China:
    
    ```
    wget https://aliyun-observability-release-ap-southeast-1.oss-ap-southeast-1.aliyuncs.com/loongcollector/k8s-custom-pkg/3.0.12/loongcollector-custom-k8s-package.tgz; tar xvf loongcollector-custom-k8s-package.tgz; chmod 744 ./loongcollector-custom-k8s-package/k8s-custom-install.sh
    ```
    
2.  Go to the `loongcollector-custom-k8s-package` directory and modify the `./loongcollector/values.yaml` configuration file.
    
    ```
    # ===================== Required parameters =====================
    # The name of the project that manages the collected logs. Example: k8s-log-custom-sd89ehdq.
    projectName: ""
    # The region of the project. Example for Shanghai: cn-shanghai
    region: ""
    # The UID of the Alibaba Cloud account that owns the project. Enclose the UID in quotation marks. Example: "123456789"
    aliUid: ""
    # The network type. Optional parameters: Internet (public network) and Intranet (internal network). Default value: Internet.
    net: Internet
    # The AccessKey ID and AccessKey secret of the Alibaba Cloud account or RAM user. The account or user must have the AliyunLogFullAccess system policy.
    accessKeyID: ""
    accessKeySecret: ""
    # The custom cluster ID. The ID can contain only uppercase letters, lowercase letters, digits, and hyphens (-).
    clusterID: ""
    ```
    
3.  In the `loongcollector-custom-k8s-package` directory, run the following command to install LoongCollector and other dependent components:
    
    ```
    bash k8s-custom-install.sh install
    ```
    
4.  After the installation is complete, check the running status of the components.
    
    > If the pod fails to start, check whether the values.yaml configuration is correct and whether the relevant images were pulled successfully.
    
    ```
    # Check the pod status.
    kubectl get po -n kube-system | grep loongcollector-ds
    ```
    
    SLS also automatically creates the following resources. Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) to view them.
    
    **Resource type**
    
    **Resource name**
    
    **Function**
    
    Project
    
    The value of `projectName` defined in the values.yaml file
    
    A resource management unit that isolates logs for different services.
    
    Machine group
    
    `k8s-group-${cluster_id}`
    
    A collection of log collection nodes.
    
    **Important**
    
    LoongCollector will not create a logstore named config-operation-log. If a logstore with this name already exists, LoongCollector stops writing logs to it.
    

## **Create a logstore**

If you have already created a logstore, skip this step and proceed to [configure collection](#e058a26344f5o).

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com) and click the name of the target project.
    
2.  In the navigation pane on the left, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9082198571/p1012026.png)**Log Storage** and click **+**.
    
3.  On the Create Logstore page, configure the following core parameters:
    
    -   **Logstore Name**: Set a name that is unique within the project. This name cannot be changed after creation.
        
    -   **Logstore Type**: Choose Standard or Query based on a comparison of their specifications.
        
    -   **Billing Mode**:
        
        -   **pay-by-feature**: Billed independently for each resource, such as storage, indexing, and read/write operations. Suitable for small-scale use cases or when feature usage is uncertain.
            
        -   ****pay-by-ingested-data**:** Billed only by the amount of raw data ingested. Provides a 30-day free storage period and free features such as data transformation and delivery. The cost model is simple and suitable for use cases where the storage period is close to 30 days or the data processing pipeline is complex.
            
    -   **Data Retention Period**: Set the number of days to retain logs. The value ranges from 1 to 3650 days. A value of 3650 indicates permanent storage. The default is 30 days.
        
4.  Keep the default settings for other configurations and click **OK**. For more information about other configurations, see [Manage logstores](/help/en/sls/manage-a-logstore).
    

## **Minimal configuration**

In [spec.config](/help/en/sls/kubernetes-cr-parameter-description#c801b53fd5xu4), you configure the input (**inputs**) and output (**flushers**) plugins to define the core log collection path: the source of the logs and their target.

## **Container standard output - new version**

**Purpose**: Collects container standard output logs (stdout/stderr) that are printed directly to the console.

`**inputs**` **plugin**

The starting point of the collection configuration. Defines the log source. Currently, only one input plugin can be configured.

-   **Type** `_String_` **(Required)**
    
    The plugin type. Set to `input_container_stdio`.
    
-   **IgnoringStderr** `_boolean_` (Optional)
    
    Specifies whether to ignore the standard error stream (stderr). Default value: `false`.
    
    -   `true`: Does not collect stderr.
        
    -   `false`: Collects stderr.
        
-   **IgnoringStdout** `_boolean_` (Optional)
    
    Specifies whether to ignore the standard output stream (stdout). Default value: `false`.
    
    -   `true`: Does not collect stdout.
        
    -   `false`: Collects stdout.
        

## Example

```
apiVersion: telemetry.alibabacloud.com/v1alpha1
kind: ClusterAliyunPipelineConfig
metadata:
  # Set the resource name. It must be unique within the Kubernetes cluster and is also the name of the created Logtail collection configuration.
  name: new-stdio-config
spec:
  project:
    name: test-not-exist
  logstores:
    - name: new-stdio-logstore

  # Define the LoongCollector (Logtail) collection and processing configuration.
  config:
    # --- Input plugin: Defines where to collect logs from ---
    inputs:
      # Use the input_container_stdio plugin to collect container standard output.
      - Type: input_container_stdio
        IgnoringStderr: false
        IgnoringStdout: false

    # --- Processing plugins (Optional): Define how to parse and process logs ---
    processors: []

    # --- Output plugin: Defines where to send logs ---
    flushers: # If you don't need to send to multiple targets, just configure one flusher.
    - Type: flusher_sls    # Specifies the use of the SLS output plugin.
    Logstore: new-stdio-logstore1
    - Type: flusher_sls    # Specifies the use of the SLS output plugin.
    Logstore: new-stdio-logstore2
 
```

`**flushers**` **output plugin**

Configure the `flusher_sls` plugin to send collected logs to a specified logstore in a project. Currently, up to five output plugins can be configured.

-   **Type** `_String_` **(Required)**
    
    The plugin type. Set to `flusher_sls`.
    
-   **Logstore** `_String_` **(Required)**
    
    The name of the target logstore. This determines the actual storage location of the logs.
    
    **Note**
    
    -   The specified logstore must exist or be declared in [spec.logstores](/help/en/sls/kubernetes-cr-parameter-description#471f2ca341s6j).
        
    -   After you configure multiple output targets, the collection configuration is no longer visible in the collection configuration list of the current logstore. To view, modify, or delete the multi-target distribution configuration, see [How do I manage multi-target distribution configurations?](/help/en/sls/host-text-log-collection-auto-install#9002c3418e8gb)
        
    

## **Collect container text files**

**Purpose**: Collects logs written to a specific file path within a container, such as traditional access.log or app.log files.

`**inputs**` **plugin**

The starting point of the collection configuration. Defines the log source. Currently, only one input plugin can be configured.

-   **Type** `_String_` **(Required)**
    
    The plugin type. Set to `input_file`.
    
-   **FilePaths** `_String_` **(Required)**
    
    A list of paths to the log files that you want to collect.
    
    -   Currently, only one path can be configured.
        
    -   Supports wildcard characters:
        
        -   `*`: Matches file names in a single-level directory.
            
        -   `**`: Recursively matches multi-level subdirectories. Can only appear once and must be before the file name.
            
-   **MaxDirSearchDepth** `_integer_` (Optional)
    
    When the path contains `**`, specifies the maximum directory depth. Default value: `0`. Value range: 0 to 1000.
    
-   **FileEncoding** `_String_` (Optional)
    
    The file encoding format. Default value: `utf8`. The supported values are:
    
    -   utf8
        
    -   gbk
        
-   **EnableContainerDiscovery** `_boolean_` (Optional)
    
    Specifies whether to enable the container discovery feature. Default value: `true`.
    
    **Note**
    
    This parameter is effective only when LoongCollector (Logtail) runs in DaemonSet mode and the collection file path is a path within the container.
    

## Example

```
apiVersion: telemetry.alibabacloud.com/v1alpha1
kind: ClusterAliyunPipelineConfig
metadata:
  name: easy-row-config
spec:
  # Specify the target project to which logs are sent.
  project:
    name: test-not-exist
  logstores:
    - name: easy-row-logstore

  # Define the LoongCollector (Logtail) collection and processing configuration.
  config:
    # Log sample (optional)
    sample: ''
    # --- Input plugin: Defines where to collect logs from ---
    inputs:
      # Use the input_file plugin to collect container text files.
      - Type: input_file         
        # ... Specific configuration for the input plugin ...
        # File path within the container
        FilePaths:
          - /var/log/text1.log
        # Maximum directory monitoring depth  
        MaxDirSearchDepth: 0
        FileEncoding: utf8  
        # Enable the container discovery feature.
        EnableContainerDiscovery: true
        

    # --- Processing plugins (Optional): Define how to parse and process logs ---
    processors: []    

    # --- Output plugin: Defines where to send logs ---
    flushers: # If you don't need to send to multiple targets, just configure one flusher.
    - Type: flusher_sls        # Specifies the use of the SLS output plugin.
    Logstore: easy-row-logstore1
    - Type: flusher_sls        # Specifies the use of the SLS output plugin.
    Logstore: easy-row-logstore2
```

`**flushers**` **output plugin**

Configure the `flusher_sls` plugin to send collected logs to a specified logstore in a project. Currently, up to five output plugins can be configured.

-   **Type** `_String_` **(Required)**
    
    The plugin type. Set to `flusher_sls`.
    
-   **Logstore** `_String_` **(Required)**
    
    The name of the target logstore. This determines the actual storage location of the logs.
    
    **Note**
    
    -   The specified logstore must exist or be declared in [spec.logstores](/help/en/sls/kubernetes-cr-parameter-description#471f2ca341s6j).
        
    -   After you configure multiple output targets, the collection configuration is no longer visible in the collection configuration list of the current logstore. To view, modify, or delete the multi-target distribution configuration, see [How do I manage multi-target distribution configurations?](/help/en/sls/host-text-log-collection-auto-install#9002c3418e8gb)
        
    

## **Common processing configurations**

After completing the [minimal configuration](#e058a26344f5o), add processing plugins to perform structured parsing, masking, or filtering on raw logs.

**Core configuration**: Add `processors` to [spec.config](/help/en/sls/kubernetes-cr-parameter-description#c801b53fd5xu4) to configure processing plugins. Multiple plugins can be added simultaneously.

> This topic describes only native processing plugins that cover common log processing use cases. For information about more features, see [Extended processing plugins](/help/en/sls/developer-reference/api-sls-2020-12-30-createlogtailpipelineconfig#%E6%89%A9%E5%B1%95%E5%A4%84%E7%90%86%E6%8F%92%E4%BB%B6).

**Important**

For Logtail 2.0 and later versions and the LoongCollector component, we recommend that you follow these plugin combination rules:

-   Use native plugins first.
    
-   If native plugins cannot meet your needs, configure extension plugins after the native plugins.
    
-   Native plugins can only be used before extension plugins.
    

### **Structured configuration**

## Regular expression parsing

Extracts log fields using a regular expression and parses the log into key-value pairs.

**Key fields**

**Example**

**Type** `_String_` **(Required)**

The plugin type. Set to `processor_parse_regex_native`.

```
 # ...Under spec.config...
 processors:
  # Use the regular expression parsing plugin to parse log content.
  - Type: processor_parse_regex_native
    # Specify the source of the raw log field, usually content.
    SourceKey: content

    # The regular expression is used to match and extract log fields.
    Regex: >-
      (\S+)\s-\s(\S+)\s$$([^]]+)$$\s"
      (\w+)\s(\S+)\s([^"]+)"
      \s(\d+)\s(\d+)\s"
      ([^"]+)"\s"
      ([^"]+).*

    # A list of extracted fields, corresponding to the regex groups in order.
    Keys:
      - remote_addr
      - remote_user
      - time_local
      - request_method
      - request_uri
      - request_protocol
      - status
      - body_bytes_sent
      - http_referer
      - http_user_agent

    # Specifies whether to keep the source field if parsing fails.
    KeepingSourceWhenParseFail: true

    # Specifies whether to keep the source field if parsing succeeds.
    KeepingSourceWhenParseSucceed: true

    # If the source field is kept, specify a new name for it.
    RenamedSourceKey: fail
```

**SourceKey** `_String_` **(Required)**

The source field name.

**Regex** `_String_` **(Required)**

The regular expression to match the log.

**Keys** `_String_` **(Required)**

A list of extracted fields.

**KeepingSourceWhenParseFail** `_boolean_` (Optional)

Specifies whether to keep the source field if parsing fails. Default value: `false`.

**KeepingSourceWhenParseSucceed** `_boolean_` (Optional)

Specifies whether to keep the source field if parsing succeeds. Default value: `false`.

**RenamedSourceKey** `_String_` (Optional)

If the source field is kept, this is the field name used to store the source field. By default, the name is not changed.

## Delimiter parsing

Structures log content using a delimiter, parsing it into multiple key-value pairs. Supports single-character and multi-character delimiters.

**Key fields**

**Example**

**Type** `_String_` **(Required)**

The plugin type. Set to `processor_parse_delimiter_native`.

```
# ...Under spec.config...
processors:
  # Delimiter parsing plugin configuration
  - Type: processor_parse_delimiter_native
    # Source of the raw field, usually content
    SourceKey: content

    Separator: ','

    Quote: '"'

    # Define the extracted field names in order.
    Keys:
      - time
      - ip
      - request
      - status
      - size
      - user_agent

```

**SourceKey** `_String_` **(Required)**

The source field name.

**Separator** `_String_` **(Required)**

The field separator. For example, CSV uses a comma (,).

**Keys** `_[String]_` **(Required)**

A list of extracted fields.

**Quote** `_String_` (Optional)

The quote character used to wrap field content that contains special characters, such as commas.

**AllowingShortenedFields** `boolean` (Optional)

Specifies whether to allow the number of extracted fields to be less than the number of keys. Default value: `true`. If not allowed, this scenario is treated as a parsing failure.

**OverflowedFieldsTreatment** `_String_` (Optional)

Specifies the behavior when the number of extracted fields is greater than the number of keys. Default value: `extend`. The supported values are:

-   `extend`: Keeps the extra fields. Each extra field is added to the log as a separate field. The field name for an extra field is `_column$i_`, where `$i` represents the extra field's ordinal number, starting from 0.
    
-   `keep`: Keeps the extra fields, but adds the extra content as a single field to the log. The field name is `_column0_`.
    
-   `discard`: Discards the extra fields.
    

**KeepingSourceWhenParseFail** `_boolean_` (Optional)

Specifies whether to keep the source field if parsing fails. Default value: `false`.

**KeepingSourceWhenParseSucceed** `_boolean_` (Optional)

Specifies whether to keep the source field if parsing succeeds. Default value: `false`.

**RenamedSourceKey** `_String_` (Optional)

If the source field is kept, this is the field name used to store the source field. By default, the name is not changed.

## Standard JSON parsing

Structures object-type JSON logs, parsing them into key-value pairs.

**Key fields**

**Example**

**Type** `_String_` **(Required)**

The plugin type. Set to `processor_parse_json_native`.

```
# ...Under spec.config...
processors:
  # JSON parsing plugin configuration
  - Type: processor_parse_json_native
    # Source of the raw log field
    SourceKey: content
```

**SourceKey** `_String_` **(Required)**

The source field name.

**KeepingSourceWhenParseFail** `_boolean_` (Optional)

Specifies whether to keep the source field if parsing fails. Default value: `false`.

**KeepingSourceWhenParseSucceed** `_boolean_` (Optional)

Specifies whether to keep the source field if parsing succeeds. Default value: `false`.

**RenamedSourceKey** `_String_` (Optional)

If the source field is kept, this is the field name used to store the source field. By default, the name is not changed.

## Nested JSON parsing

Parses nested JSON logs into key-value pairs by specifying an expansion depth.

**Key fields**

**Example**

**Type** `_String_` **(Required)**

The plugin type. Set to `processor_json`.

```
# ...Under spec.config...
processors:
  # Configure the JSON field expansion plugin.
  - Type: processor_json
    # Specify the name of the raw field to parse.
    SourceKey: content
    
    ExpandDepth: 0

    ExpandConnector: '_'

    Prefix: expand

    IgnoreFirstConnector: false

    # Specifies whether to expand array elements into separate fields.
    ExpandArray: false

    # Specifies whether to keep the raw field content.
    KeepSource: true

    # Specifies whether to report an error if the raw field is missing.
    NoKeyError: true

    # Specifies whether to use the raw field name as a prefix for the expanded field names.
    UseSourceKeyAsPrefix: false

    # Specifies whether to keep the raw log data if JSON parsing fails.
    KeepSourceIfParseError: true
```

**SourceKey** `_String_` **(Required)**

The source field name.

**ExpandDepth** `_integer_` (Optional)

The JSON expansion depth. Default value: 0.

-   0: Expands to the deepest level that can be parsed.
    
-   1: Expands only the current level, and so on.
    

**ExpandConnector** `_String_` (Optional)

The connector for field names during JSON expansion. Default value: underscore (\_).

**Prefix** `_String_` (Optional)

Specifies a prefix for the expanded JSON field names.

**IgnoreFirstConnector** `_String_` (Optional)

Specifies whether to ignore the first connector, which means whether to add a connector before the top-level field. Default value: `false`.

**ExpandArray** `_boolean_` (Optional)

Specifies whether to expand array types. Default value: `false`.

-   false (default): Does not expand.
    
-   true: Expands. For example, `{"k":["1","2"]}` is expanded to `{"k[0]":"1","k[1]":"2"}`.
    

**Note**

This parameter is supported in Logtail 1.8.0 and later versions.

**KeepSource** `_boolean_` (Optional)

Specifies whether to keep the raw field in the parsed log. Default value: `true`.

-   true: Keep
    
-   false: Discard
    

**NoKeyError** `_boolean_` (Optional)

Specifies whether the system reports an error if the specified raw field is not found in the raw log. Default value: `true`.

-   true: Report an error.
    
-   false: Do not report an error.
    

**UseSourceKeyAsPrefix** `_boolean_` (Optional)

Specifies whether to use the raw field name as a prefix for all expanded JSON field names.

**KeepSourceIfParseError** `_boolean_` (Optional)

Specifies whether to keep the raw log if parsing fails. Default value: `true`.

-   true: Keep
    
-   false: Discard
    

## JSON array parsing

Uses the `json_extract` function to extract JSON objects from a JSON array. For more information about JSON functions, see [JSON functions](/help/en/sls/json-functions).

**Key fields**

**Example**

**Type** `_String_` **(Required)**

The plugin type. The SPL plugin type is `processor_spl`.

```
# ...Under spec.config...
processors:
  # Use an SPL script to process log fields.
  - Type: processor_spl
    # Script timeout (unit: milliseconds)
    TimeoutMilliSeconds: 1000

    # SPL script content, used to extract elements from a JSON array in the content field.
    Script: >-
      * | extend
        json1 = json_extract(content, '$[0]'),
        json2 = json_extract(content, '$[1]')

```

**Script** `_String_` **(Required)**

The SPL script content, used to extract elements from a JSON array in the content field.

**TimeoutMilliSeconds** `_integer_` (Optional)

The script timeout period. Value range: 0 to 10000. Unit: milliseconds. Default value: 1000.

## NGINX log parsing

Structures log content based on the definition in log\_format, parsing it into multiple key-value pairs. If the default content does not meet your needs, use a custom format.

**Key fields**

**Example**

**Type** `_String_` **(Required)**

The plugin type. The plugin type for Nginx log parsing is `processor_parse_regex_native`.

```
# ...Under spec.config...
processors:
  # NGINX log parsing plugin configuration
  - Type: processor_parse_regex_native
    # Source of the raw log field
    SourceKey: content
    
    # Regular expression parsing rule
    Regex: >-
      (\S*)\s*-\s*(\S*)\s*\[
      (\d+/\S+/\d+:\d+:\d+:\d+)\s+\S+\]
      \s*"(\S+)\s+(\S+)\s+\S+"
      \s*(\S*)\s*(\S*)\s*(\S*)\s*(\S*)
      \s*"([^"]*)"\s*"([^"]*)".*
    
    # Extracted field mapping
    Keys:
      - remote_addr
      - remote_user
      - time_local
      - request_method
      - request_uri
      - request_time
      - request_length
      - status
      - body_bytes_sent
      - http_referer
      - http_user_agent
    
    # NGINX-specific configuration
    Extra:
      Format: >-
        log_format main  '$remote_addr - $remote_user [$time_local]
        "$request" ''$request_time $request_length ''$status
        $body_bytes_sent "$http_referer" ''"$http_user_agent"';
      LogType: NGINX
```

**SourceKey** `_String_` **(Required)**

The source field name.

**Regex** `_integer_` **(Required)**

The regular expression.

**Keys** `_String_` **(Required)**

A list of extracted fields.

**Extra**

-   **Format** `_String_` **(Required)**
    
    The log configuration section in the Nginx configuration file, starting with **log\_format**.
    
    > In a production environment, the `log_format` here must be consistent with the definition in the Nginx configuration file, which is usually located in the /etc/nginx/nginx.conf file.
    
-   **LogType** `_String_` **(Required)**
    
    The type of log to parse. Set to `NGINX`.
    

**KeepingSourceWhenParseFail** `_boolean_` (Optional)

Specifies whether to keep the source field if parsing fails. Default value: `false`.

**KeepingSourceWhenParseSucceed** `_boolean_` (Optional)

Specifies whether to keep the source field if parsing succeeds. Default value: `false`.

**RenamedSourceKey** `_String_` (Optional)

If the source field is kept, this is the field name used to store the source field. By default, the name is not changed.

## Apache log parsing

Structures log content based on the definition in the Apache log configuration file, parsing it into multiple key-value pairs.

**Key fields**

**Example**

**Type** `_String_` **(Required)**

The plugin type. Set to `processor_parse_regex_native`.

```
# ...Under spec.config...
processors:
  # Configure the Apache Combined log parsing plugin (based on regular expressions).
  - Type: processor_parse_regex_native
    # Source of the raw log field, usually content
    SourceKey: content

    # The regular expression is used to match and extract Apache combined format logs.
    Regex: >-
      ([0-9.-]+)\s                          # remote_addr
      ([\w.-]+)\s                           # remote_ident
      ([\w.-]+)\s                           # remote_user
      (\[[^\[\]]+\]|-)\s                    # time_local
      "((?:[^"]|\")+)"\s                     # request_method + request_uri + request_protocol
      "((?:[^"]|\")+)"\s                     # request_uri (repeated capture? check logic)
      "((?:[^"]|\")+)"\s                     # request_protocol
      (\d{3}|-)\s                           # status
      (\d+|-)\s                             # response_size_bytes
      "((?:[^"]|\")+)"\s                     # http_referer
      "((?:[^"]|\"|')+)"                     # http_user_agent

    # A list of extracted fields, corresponding to the regex groups in order.
    Keys:
      - remote_addr
      - remote_ident
      - remote_user
      - time_local
      - request_method
      - request_uri
      - request_protocol
      - status
      - response_size_bytes
      - http_referer
      - http_user_agent

    # Additional plugin information (optional, for describing the log format)
    Extra:
      Format: >-
        LogFormat "%h %l %u %t \"%r\" %>s %b
        \"%{Referer}i\" \"%{User-Agent}i\"" combined
      LogType: Apache
      SubType: combined

```

**SourceKey** `_String_` **(Required)**

The source field name.

**Regex** `_integer_` **(Required)**

The regular expression.

**Keys** `_String_` **(Required)**

A list of extracted fields.

**Extra**

-   **Format** `_String_` **(Required)**
    
    The log configuration section in the Apache configuration file, usually starting with LogFormat.
    
-   **LogType** `_String_` **(Required)**
    
    The type of log to parse. Set to `Apache`.
    
-   **SubType** `_String_` **(Required)**
    
    The log format.
    
    -   common
        
    -   combined
        
    -   custom
        

**KeepingSourceWhenParseFail** `_boolean_` (Optional)

Specifies whether to keep the source field if parsing fails. Default value: `false`.

**KeepingSourceWhenParseSucceed** `_boolean_` (Optional)

Specifies whether to keep the source field if parsing succeeds. Default value: `false`.

**RenamedSourceKey** `_String_` (Optional)

If the source field is kept, this is the field name used to store the source field. By default, the name is not changed.

### **Data masking**

Use the `processor_desensitize_native` plugin to mask sensitive data in logs.

**Key fields**

**Example**

**Type** `_String_` **(Required)**

The plugin type. Set to `processor_desensitize_native`.

```
# ...Under spec.config...
processors:
  # Configure the native log masking plugin.
  - Type: processor_desensitize_native

    # Raw field name
    SourceKey: content

    # Masking method: const indicates replacing sensitive content with a fixed string.
    Method: const

    # The target string to replace the sensitive content.
    ReplacingString: '********'

    # The expression for the content before the replaced string.
    ContentPatternBeforeReplacedString: 'password'':'''

    # The regular expression for the sensitive content itself, matching the content to be replaced.
    ReplacedContentPattern: '[^'']*'

    # Specifies whether to replace all matching items. Default value: true.
    ReplacingAll: true
```

**SourceKey** `_String_` **(Required)**

The source field name.

**Method** `_String_` **(Required)**

The masking method. The supported values are:

-   `const`: Replaces sensitive content with a constant.
    
-   `md5`: Replaces sensitive content with its MD5 hash.
    

**ReplacingString** `_String_` (Optional)

The constant string used to replace sensitive content. This is required when `Method` is set to `const`.

**ContentPatternBeforeReplacedString** `_String_` **(Required)**

The regular expression for the prefix of the sensitive content.

**ReplacedContentPattern** `_String_` **(Required)**

The regular expression for the sensitive content.

**ReplacingAll** `_boolean_` (Optional)

Specifies whether to keep the original field after successful parsing. The default value is `true`.

### **Content filtering**

Configure the `processor_filter_regex_native` plugin to match log field values based on a regular expression and keep only the logs that meet the conditions.

**Key fields**

**Example**

**Type** `_String_` **(Required)**

The plugin type. Set to `processor_filter_regex_native`.

```
# ...Under spec.config...
processors:
  # Configure the regular expression filtering plugin (can be used for log masking or sensitive word filtering).
  - Type: processor_filter_regex_native

    # Define a list of regular expressions to match the content of log fields.
    FilterRegex:
      # Example: Match content that contains "WARNING" or "ERROR" in the log field value.
      - WARNING|ERROR

    # Specify the log field name to match. The example filters the level field.
    FilterKey:
      - level
```

**FilterRegex** `_String_` **(Required)**

The regular expression to match the log field.

**FilterKey** `_String_` **(Required)**

The name of the log field to match.

### **Time parsing**

Configure the processor\_parse\_timestamp\_native plugin to parse the time field in a log and set the parsing result as the log's `__time__` field.

**Key fields**

**Example**

**Type** `_String_` **(Required)**

The plugin type. Set to `processor_parse_timestamp_native`.

```
# ...Under spec.config...
processors:
  # Configure the native time parsing plugin.
  - Type: processor_parse_timestamp_native
    # Source of the raw log field, usually content
    SourceKey: content

    # Time format definition, must exactly match the format of the time field in the log.
    SourceFormat: '%Y-%m-%d %H:%M:%S'
    
    SourceTimezone: 'GMT+00:00'
```

**SourceKey** `_String_` **(Required)**

The source field name.

**SourceFormat** `_String_` **(Required)**

Time format. Must exactly match the format of the time field in the log.

**SourceTimezone** `_String_` (Optional)

The time zone of the log time. By default, the machine's time zone is used, which is the time zone of the environment where the LoongCollector process is located.

Format:

-   `GMT+HH:MM`: East time zone
    
-   `GMT-HH:MM`: West time zone
    

## **Other advanced configurations**

For more advanced use cases, consider the following configurations:

-   **Configure multiline log collection**: When a single log entry, such as an exception stack trace, spans multiple lines, you need to enable multi-line mode and configure a regular expression for the start of a line to match the beginning of a log. This ensures that the multi-line entry is collected and stored as a single log in a SLS logstore.
    
-   **Configure log topic types**: Set different topics for different log streams to organize and categorize log data. This helps you better manage and retrieve relevant logs.
    
-   **Specify containers for collection (filtering and blacklists)**: Specify specific containers and paths for collection, including whitelist and blacklist configurations.
    
-   **Enrich log tags**: Add metadata related to environment variables and pod labels to logs as extended fields.
    

### **Configure multiline log collection**

To correctly parse log entries that span multiple lines (like Java stack traces), enable multiline mode. This ensures that related lines are grouped into a single log entry based on a defined start pattern.

**Core configuration**: In the [spec.config.inputs](/help/en/sls/kubernetes-cr-parameter-description#c801b53fd5xu4) configuration, add the `Multiline` parameter.

**Key fields**

**Example**

**Multiline**

Enables multi-line log collection.

-   **Mode**
    
    The mode selection. Default value: `custom`.
    
    -   `custom`: Indicates a custom regular expression to match the start of a line.
        
    -   `JSON`: Multi-line JSON.
        
-   **StartPattern**
    
    The regular expression for the start of a line. This is required when Mode is set to `custom`**.**
    

```
# ...Under spec.config...
inputs:
  - Type: input_file
    # Enable multi-line log collection.
    Multiline:
      # Mode selection: custom indicates a custom regular expression to match the start of a line.
      Mode: custom
      # The regular expression matches the start of each log entry (the marker for a new log).
      StartPattern: '\d+-\d+-\d+\s\d+:\d+:\d+'
```

### **Configure log topic types**

**Core configuration**: In [spec.config](/help/en/sls/kubernetes-cr-parameter-description#c801b53fd5xu4), add the `global` parameter to set the topic.

**Key fields**

**Example**

**TopicType**

The topic type. Optional values:

-   `machine_group_topic`: Machine group topic, used to distinguish logs from different machine groups.
    
-   `filepath`: File path extraction, used to distinguish log data generated by different users or applications.
    
-   `custom`: Custom, uses a custom static log topic.
    

## Machine group topic

```
spec: 
  config:
    global: 
    # Use the machine group topic to which this configuration is applied as the topic.
      TopicType: machine_group_topic              
```

## File path extraction

```
spec:  
  config:
    global: 
      TopicType: filepath
    # Topic format. Required when TopicType is set to filepath or custom.
    # The extraction results are __topic__: userA, __topic__: userB, and __topic__: userC.
      TopicFormat: \/data\/logs\/(.*)\/serviceA\/.*
```

## Custom

```
spec:  
  config:
    global: 
      TopicType: custom
    # Topic format. Required when TopicType is set to filepath or custom.
      TopicFormat: customized:// + custom topic name
```

**TopicFormat**

The topic format. This is required when TopicType is set to filepath or custom.

### **Specify containers for collection (filtering and blacklists)**

## Filtering

Collects logs only from containers that meet the specified conditions. Multiple conditions are combined with a logical AND. An empty condition is ignored. Conditions support regular expressions.

**Core configuration**: In [spec.config.inputs](/help/en/sls/kubernetes-cr-parameter-description#c801b53fd5xu4), configure the `ContainerFilters` parameter for container filtering.

**Key fields**

**Example**

**ContainerFilters**

Container filtering

-   **Pod label Blacklist/Whitelist**
    
    -   **IncludeK8sLabel**
        
        K8s pod label whitelist: Specifies the containers from which to collect logs.
        
    -   **ExcludeK8sLabel**
        
        K8s pod label blacklist: Excludes log collection from containers that meet specific conditions.
        
-   **Environment variable blacklist and whitelist**
    
    -   **IncludeEnv**
        
        Environment variable whitelist
        
    -   **ExcludeInv**
        
        Environment variable blacklist
        
-   **Pod/Namespace/Container name regex matching**
    
    -   **K8sNamespaceRegex**
        
        Namespace regex matching
        
    -   **K8sPodRegex**
        
        Pod name regex matching
        
    -   **K8sContainerRegex**
        
        Container name regex matching
        

> All regular expressions are based on the RE2 regex engine in Go, which has some limitations compared to engines like PCRE. Refer to [Appendix: Regular expression limits for container filtering](#4ff2ac681ds0w) for writing regular expressions.

```
# ...Under spec.config...
inputs:
  - Type: input_file # or input_container_stdio
    # When the input plugin type is input_file, you must set EnableContainerDiscovery to true.
    EnableContainerDiscovery: true
    # Container filtering
    ContainerFilters:
      # K8s pod label whitelist: Specifies the containers from which to collect logs.
      IncludeK8sLabel:
        # Example: Match all pods that have the app label with a value of nginx or redis.
        app: ^(nginx|redis)$

      # K8s pod label blacklist: Excludes log collection from containers that meet specific conditions.
      ExcludeK8sLabel:
        # Example: Exclude all pods with the app:test label.
        app: test
      
      # Environment variable whitelist
      IncludeEnv:
        # Match all containers with NGINX_SERVICE_PORT=80 or NGINX_SERVICE_PORT=6379.
        NGINX_SERVICE_PORT: ^(80|6379)$

      # Environment variable blacklist
      ExcludeEnv:
        # Exclude all containers with ENVIRONMENT=test.
        ENVIRONMENT: test
      
      # Namespace regex matching. Example: Match all containers in the default and nginx namespaces.
      K8sNamespaceRegex: ^(default|nginx)$
      # Pod name regex matching. Example: Match containers in all pods whose names start with nginx-log-demo.
      K8sPodRegex: ^(nginx-log-demo.*)$
      # Container name regex matching. Example: Match all containers named container-test.
      K8sContainerRegex: ^(container-test)$
```

## Blacklist

To exclude files that meet specified conditions, use the following parameters under `config.inputs` in the YAML file as needed:

**Key field details**

## Example

```
# ...Under spec.config...
inputs:
  - Type: input_file
    # File path blacklist. Excludes files that meet the specified conditions. The path must be an absolute path and supports the * wildcard character.
    ExcludeFilePaths:
      - /var/log/*.log

    # File name blacklist. Excludes files that meet the specified conditions. Supports the * wildcard character.
    ExcludeFiles:
      - test

    # Directory blacklist. Excludes files that meet the specified conditions. The path must be an absolute path and supports the * wildcard character.
    ExcludeDirs:
      - /var/log/backup*               
```

**ExcludeFilePaths**

File path blacklist. Excludes files that meet the specified conditions. The path must be an absolute path and supports the \* wildcard character.

**ExcludeFiles**

File name blacklist. Excludes files that meet the specified conditions. Supports the \* wildcard character.

**ExcludeDirs**

Directory blacklist. Excludes files that meet the specified conditions. The path must be an absolute path and supports the \* wildcard character.

### **Enrich log tags**

**Core configuration**: By configuring `ExternalEnvTag` and `ExternalK8sLabelTag` in [spec.config.inputs](/help/en/sls/kubernetes-cr-parameter-description#c801b53fd5xu4), add tags related to container environment variables and Pod labels to logs.

**Key fields**

**Example**

**ExternalEnvTag**

Maps the value of a specified environment variable to a tag field. Format: `<environment_variable_name>: <tag_name>`.

```
# ...Under spec.config...
inputs:
  - Type: input_file # or input_container_stdio
    ExternalEnvTag:
      <environment_variable_name>: <tag_name>
    
    ExternalK8sLabelTag:
      <pod_label_name>: <tag_name>          
```

**ExternalK8sLabelTag**

Maps the value of a Kubernetes pod label to a tag field. Format: `<pod_label_name>: <tag_name>`.

## **Configuration examples**

### **Collect and parse NGINX access logs into structured fields**

Parses NGINX logs and structures the log content into multiple key-value pairs based on the definition in log\_format.

Complete YAML example

```
apiVersion: telemetry.alibabacloud.com/v1alpha1
kind: ClusterAliyunPipelineConfig
metadata:
  name: nginx-config
spec:
  config:
    aggregators: []
    global: {}
    inputs:
      - Type: input_file
        FilePaths:
          - /root/log/text1.log
        MaxDirSearchDepth: 0
        FileEncoding: utf8
        EnableContainerDiscovery: true
    processors:
      - Type: processor_parse_regex_native
        SourceKey: content
        Regex: >-
          (\S*)\s*-\s*(\S*)\s*\[(\d+/\S+/\d+:\d+:\d+:\d+)\s+\S+\]\s*"(\S+)\s+(\S+)\s+\S+"\s*(\S*)\s*(\S*)\s*(\S*)\s*(\S*)\s*"([^"]*)"\s*"([^"]*)".*
        Keys:
          - remote_addr
          - remote_user
          - time_local
          - request_method
          - request_uri
          - request_time
          - request_length
          - status
          - body_bytes_sent
          - http_referer
          - http_user_agent
        Extra:
          Format: >-
            log_format main  '$remote_addr - $remote_user [$time_local]
            "$request" ''$request_time $request_length ''$status
            $body_bytes_sent "$http_referer" ''"$http_user_agent"';
          LogType: NGINX
    flushers:
      - Type: flusher_sls
        Logstore: my-log-logstore
    sample: >-
      192.168.*.* - - [15/Apr/2025:16:40:00 +0800] "GET /nginx-logo.png
      HTTP/1.1" 0.000 514 200 368 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)
      AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.*.* Safari/537.36"
  project:
    name: my-log-project
  logstores:
    - name: my-log-logstore
    
```

### **Collect and process multiline logs**

Enable multiline mode to ensure that related lines are grouped into a single log entry based on a defined start pattern. The following is an example:

Complete YAML example

```
apiVersion: telemetry.alibabacloud.com/v1alpha1
kind: ClusterAliyunPipelineConfig
metadata:
  name: multiline-config
spec:
  config:
    aggregators: []
    global: {}
    inputs:
      - Type: input_file
        FilePaths:
          - /root/log/text1.log
        MaxDirSearchDepth: 0
        FileEncoding: utf8
        Multiline:
          StartPattern: '\[\d+-\d+-\w+:\d+:\d+,\d+]\s\[\w+]\s.*'
          Mode: custom
          UnmatchedContentTreatment: single_line
        EnableContainerDiscovery: true
    processors: []
    flushers:
      - Type: flusher_sls
        Logstore: my-log-logstore
    sample: |-
      [2023-10-01T10:30:01,000] [INFO] java.lang.Exception: exception happened
          at TestPrintStackTrace.f(TestPrintStackTrace.java:3)
          at TestPrintStackTrace.g(TestPrintStackTrace.java:7)
          at TestPrintStackTrace.main(TestPrintStackTrace.java:16)
  project:
    name: my-log-project
  logstores:
    - name: my-log-logstore
```

## **FAQ**

### **How do I manage multi-target distribution configurations?**

Multi-target distribution configurations are associated with multiple logstores. Manage these configurations from the project-level management page:

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) and click the name of the target project.
    
2.  On the project page, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7938948671/p1041414.png) **Resources** > **Configurations** from the navigation pane on the left.
    
    **Note**
    
    This page provides centralized management for all collection configurations in the project, including configurations that remain after their associated logstores are accidentally deleted.
    

### **How do I send logs from an ACK cluster to a project in another Alibaba Cloud account?**

Manually install LoongCollector (Logtail) in the ACK cluster and configure it with the target Alibaba Cloud account ID or AccessKey. This enables sending container logs to an SLS project in another Alibaba Cloud account.

**Use case**: Collect log data from an ACK cluster to an SLS project in a different Alibaba Cloud account for reasons such as organizational structure, permission isolation, or unified monitoring. Manually install LoongCollector (Logtail) for cross-account configuration.

**Procedure**: The following procedure uses the manual installation of LoongCollector as an example. For information about how to install Logtail, see [Install and configure Logtail](/help/en/sls/install-run-upgrade-and-uninstall-logtail).

1.  Connect to the Kubernetes cluster and run the corresponding command for your region to download LoongCollector and its dependent components:
    
    Regions in China:
    
    ```
    wget https://aliyun-observability-release-cn-shanghai.oss-cn-shanghai.aliyuncs.com/loongcollector/k8s-custom-pkg/3.0.12/loongcollector-custom-k8s-package.tgz; tar xvf loongcollector-custom-k8s-package.tgz; chmod 744 ./loongcollector-custom-k8s-package/k8s-custom-install.sh
    ```
    
    Regions outside China:
    
    ```
    wget https://aliyun-observability-release-ap-southeast-1.oss-ap-southeast-1.aliyuncs.com/loongcollector/k8s-custom-pkg/3.0.12/loongcollector-custom-k8s-package.tgz; tar xvf loongcollector-custom-k8s-package.tgz; chmod 744 ./loongcollector-custom-k8s-package/k8s-custom-install.sh
    ```
    
2.  Go to the `loongcollector-custom-k8s-package` directory and modify the `./loongcollector/values.yaml` configuration file.
    
    ```
    # ===================== Required parameters =====================
    # The name of the project that manages the collected logs. Example: k8s-log-custom-sd89ehdq.
    projectName: ""
    # The region of the project. Example for Shanghai: cn-shanghai
    region: ""
    # The UID of the Alibaba Cloud account that owns the project. Enclose the UID in quotation marks. Example: "123456789"
    aliUid: ""
    # The network type. Optional parameters: Internet (public network) and Intranet (internal network). Default value: Internet.
    net: Internet
    # The AccessKey ID and AccessKey secret of the Alibaba Cloud account or RAM user. The account or user must have the AliyunLogFullAccess system policy.
    accessKeyID: ""
    accessKeySecret: ""
    # The custom cluster ID. The ID can contain only uppercase letters, lowercase letters, digits, and hyphens (-).
    clusterID: ""
    ```
    
3.  In the `loongcollector-custom-k8s-package` directory, run the following command to install LoongCollector and other dependent components:
    
    ```
    bash k8s-custom-install.sh install
    ```
    
4.  After the installation is complete, check the running status of the components.
    
    > If the pod fails to start, check whether the values.yaml configuration is correct and whether the relevant images were pulled successfully.
    
    ```
    # Check the pod status.
    kubectl get po -n kube-system | grep loongcollector-ds
    ```
    
    SLS also automatically creates the following resources. Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) to view them.
    
    **Resource type**
    
    **Resource name**
    
    **Function**
    
    Project
    
    The value of `projectName` defined in the values.yaml file
    
    A resource management unit that isolates logs for different services.
    
    Machine group
    
    `k8s-group-${cluster_id}`
    
    A collection of log collection nodes.
    
    **Important**
    
    LoongCollector will not create a logstore named config-operation-log. If a logstore with this name already exists, LoongCollector stops writing logs to it.
    

### **How can the same log file or container standard output be collected by multiple collection configurations at the same time?**

By default, each log source is collected only once to prevent data duplication. To allow multiple configurations to collect from the same source, enable the corresponding option in the Logtail configuration settings:

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) and go to the target project.
    
2.  In the navigation pane, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6677678571/p1010413.png)Logstores and find the target logstore.
    
3.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6677678571/p1010416.png) icon in front of its name to expand the logstore.
    
4.  Click **Logtail Configurations**. In the configuration list, find the target Logtail configuration and click **Manage Logtail Configuration** in the Actions column.
    
5.  On the Logtail Configurations page, click **Edit** and scroll down to the **Input Configurations** section:
    
    -   To collect text file logs: Enable ****Allow File to Be Collected for Multiple Times**.**
        
    -   To collect container standard output: Enable **Allow Collection by Different Logtail Configurations**.
        

## **Appendix: Regular expression limits for container filtering**

The regular expressions for **container filtering** are based on the Go RE2 engine. This engine has some syntax limitations compared to other engines, such as PCRE. Note the following limitations when you write regular expressions:

1\. Differences in named group syntax

Go uses the `(?P<name>...)` syntax for named groups. It does not support the `(?<name>...)` syntax used in PCRE.

-   Correct example: `(?P<year>\d{4})`
    
-   Incorrect syntax: `(?<year>\d{4})`
    

2\. Unsupported regular expression features

The following common but complex regular expression features are not available in RE2:

-   **Assertions:** `(?=...)`, `(?!...)`, `(?<=...)`, `(?<!...)`
    
-   **Conditional expressions:** `(?(condition)true|false)`
    
-   **Recursive matching:** `(?R)`, `(?0)`
    
-   **Subprogram references:** `(?&name)`, `(?P>name)`
    
-   **Atomic groups:** `(?>...)`
    

3\. Recommendations

When debugging regular expressions with a tool such as [Regex101](https://regex101.com/), select the Golang (RE2) mode to ensure compatibility. If you use any unsupported syntax, the plugin cannot correctly parse or match the expression.
