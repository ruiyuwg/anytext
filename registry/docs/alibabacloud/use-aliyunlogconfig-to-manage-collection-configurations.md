Simple Log Service defines a CustomResourceDefinition (CRD) named AliyunLogConfig. You can configure a YAML file to create a CustomResource (CR) from the CRD to manage a Logtail configuration. This topic describes how to use AliyunLogConfig to manage a Logtail configuration.

## **Prerequisites**

-   The Logtail components V0.5.1 or later are installed in a self-managed Kubernetes cluster. For more information, see [Install Logtail components in a self-managed Kubernetes cluster](/help/en/sls/install-the-logtail-component-self-built-kubernetes-cluster).
    
    **Note**
    
    Currently, the Logtail components installed in a Container Service for Kubernetes (ACK) cluster do not support AliyunPipelineConfig.
    
-   The container from which you want to collect logs continuously generates logs.
    
    **Important**
    
    Logtail collects only incremental logs. If a log file on a server is not updated after the applied Logtail configuration is delivered to the server, Logtail does not collect logs from the file. For more information, see [Read log files](/help/en/sls/log-collection-process-of-logtail#section-u34-x5s-cfb).
    

## **Limits**

You can create a CR from the AliyunLogConfig CRD to create a Logtail configuration. If you modify the Logtail configuration in the Simple Log Service console, the modification is not synchronized to the CR. If you want to modify the Logtail configuration in the CR, you must modify the CR. If you modify the Logtail configuration only in the Simple Log Service console, Logtail configuration inconsistency may occur.

## **Procedure**

### **Create a Logtail configuration**

You must create a CR from the `AliyunLogConfig` CRD. Then, the `alibaba-log-controller` component automatically creates a Logtail configuration based on the CR. After the Logtail configuration is created, it is automatically applied, and Logtail starts to collect logs to Simple Log Service based on the Logtail configuration.

1.  [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).
    
2.  Run the following command to create a YAML file. In the following command, `cube.yaml` is a sample file name. You can specify a different file name based on your business requirements.
    

```
vim cube.yaml
```

3.  Enter the following script in the YAML file and configure the parameters based on your business requirements. For more information about CR parameters, see [CR parameters](#d548ecdb00eqv).
    

```
apiVersion: log.alibabacloud.com/v1alpha1      # The default value is used. You do not need to modify this parameter. 
kind: AliyunLogConfig                          # The default value is used. You do not need to modify this parameter. 
metadata:
  name: test-config                            # The name of the resource. The name must be unique in the current Kubernetes cluster. 
spec:
  logstore: k8s-stdout                         # The name of the Logstore. If the Logstore that you specify does not exist, Simple Log Service automatically creates a Logstore. 
  logtailConfig:                               # The Logtail configuration. 
    inputType: plugin                          # The type of the data source. 
    configName: test-config                    # The name of the Logtail configuration. 
    inputDetail:                               # The detailed settings of the Logtail configuration. 
      ...
```

4.  Run the following command to create a CR from the `AliyunLogConfig` CRD. The alibaba-log-controller component creates a Logtail configuration based on the CR. Then, the Logtail configuration is automatically applied. After the Logtail configuration is applied, Logtail starts to collect logs to Simple Log Service. In the following command, `cube.yaml` is a sample file name. You can specify a different file name based on your business requirements.
    

```
kubectl apply -f cube.yaml
```

### **View a Logtail configuration**

-   View all Logtail configurations that are created in the current Kubernetes cluster based on the CRs of the `AliyunLogConfig` CRD.
    
    You can run the following command to view the Logtail configurations:
    
    ```
    kubectl get aliyunlogconfigs
    ```
    
-   View the detailed settings and status of a Logtail configuration that is created based on a CR of the AliyunLogConfig CRD.
    
    You can run the `kubectl get aliyunlogconfigs <config_name> -o yaml` command to view the Logtail configuration. In this command, `<config_name>` is the name of the required CR. You can specify a different name based on your business requirements.
    
    Information that is similar to the following code is returned. The `status` and `statusCode` fields indicate the status of the Logtail configuration.
    
    -   If the value of the `statusCode` field is 200, the Logtail configuration is applied.
        
    -   If the value of the `statusCode` field is not 200, the Logtail configuration fails to be applied.
        
    
    ```
    apiVersion: log.alibabacloud.com/v1alpha1
    kind: AliyunLogConfig
    metadata:
      name: example-k8s-file
      namespace: kube-system
    spec:
      project: k8s-log-test
      logstore: k8s-file
      logtailConfig:
        inputType: file
        configName: example-k8s-file
        inputDetail:
          logType: common_reg_log
          logPath: /data/logs/app_1
          filePattern: test.LOG
          dockerFile: true
    status:
      status: OK
      statusCode: 200
    ```
    

### **Update a Logtail configuration**

To update a Logtail configuration, you need to only modify the YAML file that is used to create the related CR and apply the new file.

1.  [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).
    
2.  Modify the YAML file that is used to create your CR. In the following command, `cube.yaml` is a sample file name. You can specify a different file name based on your business requirements.
    

```
vim cube.yaml
```

3.  Modify parameters in the YAML file. For more information about the parameters, see [CR parameters](#d548ecdb00eqv).
    
4.  Run the following command to apply the new file. In the following command, `cube.yaml` is a sample file name. You can specify a different file name based on your business requirements.
    

```
kubectl apply -f cube.yaml
```

### **Delete a Logtail configuration**

To delete a Logtail configuration, you need to only delete the CR based on which the Logtail configuration is created. In the following command, `<config_name>` is the name of the required CR. You can specify a different name based on your business requirements.

```
kubectl delete aliyunlogconfigs <config_name>
```

**Note**

After a CR is deleted, the Logtail configuration that is created based on the CR is automatically deleted.

## CR parameters

-   ## apiVersion
    
    The value is fixed as `log.alibabacloud.com/v1alpha1`.
    
-   ## kind
    
    The value is fixed as `AliyunLogConfig`.
    
-   ## metadata
    
    **Field**
    
    **Type**
    
    **Required**
    
    **Description**
    
    name
    
    string
    
    Yes
    
    The unique identifier of the CR. We recommend that you set this field to the same value as the Spec.logtailConfig.configName field.
    
    namespace
    
    string
    
    No
    
    The namespace to which the CR belongs.
    
-   ## Spec
    
    **Field**
    
    **Type**
    
    **Required**
    
    **Description**
    
    project
    
    string
    
    No
    
    The name of the project. You must enter the name of the default project of the current cluster. You can obtain the name from the `ALICLOUD_LOG_PROJECT` environment variable that is configured for the alibaba-log-controller component.
    
    **Note**
    
    If the specified project does not exist, Simple Log Service automatically creates a project.
    
    logstore
    
    string
    
    Yes
    
    The name of the Logstore.
    
    **Note**
    
    -   If the specified Logstore does not exist, Simple Log Service automatically creates a Logstore.
        
    -   If the specified Logstore exists, the subsequent Logstore-related fields in this table do not take effect.
        
    
    logtailConfig
    
    [AliyunLogConfigDetail](#e67bca3ef8spr)
    
    Yes
    
    The detailed settings of the Logtail configuration.
    
    uid
    
    string
    
    No
    
    The ID of the account. If you collect logs across accounts, you must configure this field and include `ALICLOUD_LOG_ACCOUNT_INFOS={"<uid>":{"accessKeyID":"<your_access_key_id>","accessKeySecret":"<your_access_key_secret>"}}` in the environment variable settings for the alibaba-log-controller component.
    
    **Note**
    
    -   This field is available only if you use alibaba-log-controller V0.3.2 and later.
        
    -   This field specifies the account to which the project belongs. To collect logs to the account by using Logtail, you must configure a user identifier for your Logtail. For more information, see [Configure a user identifier](/help/en/sls/configure-a-user-identifier).
        
    
    endpoint
    
    string
    
    No
    
    The endpoint of the project. For more information, see [Endpoints](/help/en/sls/endpoints#reference-wgx-pwq-zdb). By default, the endpoint for the region where the current cluster resides is used. If the project and the cluster reside in different regions, you must configure this field.
    
    **Note**
    
    -   This field is available only if you use alibaba-log-controller V0.4.1 and later.
        
    -   This field specifies the endpoint for the region where the Logtail configuration resides. To collect logs to the project based on the endpoint by using Logtail, you must also configure the config\_server\_address and data\_server\_list fields for your Logtail. For more information, see [Logtail configuration files and record files](/help/en/sls/logtail-configuration-files-and-record-files#section-jh3-dpk-2fb).
        
    
    logstoreMode
    
    string
    
    No
    
    The type of the Logstore. For more information, see [Logstore types](/help/en/sls/manage-a-logstore#section-fmj-6qv-wuc). Default value: standard. Valid values:
    
    -   query: Query Logstore
        
    -   standard: Standard Logstore
        
    
    **Note**
    
    This field is available only if you use alibaba-log-controller V0.3.3 and later.
    
    shardCount
    
    int
    
    No
    
    The number of shards in the Logstore. For more information, see [Shards](/help/en/sls/manage-a-logstore#entry-qg7-n1f-n7l). Default value: 2. Valid values: 1 to 10.
    
    logstoreMaxSplitShard
    
    int
    
    No
    
    The maximum number of shards into which existing shards in the Logstore can be automatically split. For more information, see [Automatic Sharding](/help/en/sls/manage-a-logstore#entry-qpo-q9l-wpk). Default value: 32. Valid values: 1 to 256.
    
    logstoreAutoSplit
    
    bool
    
    No
    
    Specifies whether to enable automatic sharding for the Logstore. For more information, see [Automatic Sharding](/help/en/sls/manage-a-logstore#entry-qpo-q9l-wpk). Default value: true.
    
    lifeCycle
    
    int
    
    No
    
    The retention period of logs in the Logstore. Unit: days. For more information, see [Data Retention Period](/help/en/sls/manage-a-logstore#15bbf66271gei). Default value: 180. Valid values: 1 to 3650. If you set this field to 3650, logs are permanently stored.
    
    logstoreHotTTL
    
    int
    
    No
    
    The retention period of logs in the hot storage tier of the Logstore. Unit: days. For more information, see [Intelligent Tiered Storage](/help/en/sls/manage-a-logstore#1eb619f242eno). Default value: 0. The value of this field must be less than the value of the lifeCycle field and greater than or equal to 7.
    
    logstoreTelemetryType
    
    string
    
    No
    
    The type of observable data in the Logstore. For more information, see [telemetryType](/help/en/sls/developer-reference/api-sls-2020-12-30-createlogstore#api-detail-table-param-1.schema.properties.telemetryType-name). Default value: None. Valid values:
    
    -   None: log data
        
    -   Metrics: metric data
        
    
    logstoreAppendMeta
    
    bool
    
    No
    
    Specifies whether to record public IP addresses for the Logstore. For more information, see [Log Public IP](/help/en/sls/manage-a-logstore#entry-qle-k4t-f5c). Default value: true.
    
    logstoreEnableTracking
    
    bool
    
    No
    
    Specifies whether to enable the web tracking feature for the Logstore. For more information, see [WebTracking](/help/en/sls/manage-a-logstore#entry-ugk-fhi-cto). Default value: false.
    
    logstoreEncryptConf
    
    object
    
    No
    
    The encryption settings of the Logstore. For more information, see [Common data structures](/help/en/sls/api-common-data-structure). This field is empty by default.
    
    logstoreMeteringMode
    
    string
    
    No
    
    The billing mode of the Logstore. For more information, see [Billing Mode](/help/en/sls/manage-a-logstore#entry-5c7-k1l-26o). This field is empty by default. Valid values:
    
    -   ChargeByFunction: pay-by-feature billing mode
        
    -   ChargeByDataIngest: pay-by-ingested-data billing mode
        
    
    **Note**
    
    -   This field is available only if you use alibaba-log-controller V0.4.3 and later.
        
    -   If you set the logstoreMode field to query, you must set this field to ChargeByFunction.
        
    -   If the pay-by-ingested-data billing mode is disabled for your account, you can set this field only to ChargeByFunction.
        
    
    machineGroups
    
    array
    
    No
    
    The machine groups that are associated with the Logtail configuration. For more information, see [Introduction](/help/en/sls/machine-group-overview). When you install the logtail-ds component, Simple Log Service automatically creates a machine group named `k8s-group-${your_k8s_cluster_id}`. By default, the machine group is used.
    
    configTags
    
    map
    
    No
    
    The custom tags that are added to identify the Logtail configuration.
    
    **Note**
    
    This field is available only if you use alibaba-log-controller V0.4.2 and later.
    
    ### AliyunLogConfigDetail
    
    For more information about the fields, see [Logtail configurations](/help/en/sls/developer-reference/logtail-configurations#concept-f3n-s5q-12b). The data format of the AliyunLogConfigDetail parameter is the same as the data format of the Logtail configuration.
    
    **Field**
    
    **Type**
    
    **Required**
    
    **Description**
    
    configName
    
    string
    
    Yes
    
    The name of the Logtail configuration. The name must be unique in the project to which the Logtail configuration belongs. After the Logtail configuration is created, you cannot change the name of the Logtail configuration. We recommend that you set this field to the same value as the metadata.name field.
    
    The name must meet the following requirements:
    
    -   The name can contain only lowercase letters, digits, hyphens (-), and underscores (\_).
        
    -   The name must start and end with a lowercase letter or a digit.
        
    -   The name must be 2 to 128 characters in length.
        
    
    logSample
    
    string
    
    No
    
    The sample log. The value must be less than 1,500 bytes in length.
    
    inputType
    
    string
    
    Yes
    
    The collection method of logs. Valid values:
    
    -   plugin: Logs such as stdout and stderr and MySQL binary logs are collected by using Logtail plug-ins.
        
    -   file: Text logs are collected by using existing modes, including the full regex mode and delimiter mode.
        
    
    inputDetail
    
    Object
    
    Yes
    
    The detailed settings of the data source. For more information, see [inputDetail](/help/en/sls/developer-reference/logtail-configurations#concept-gip-ovp-w0k).
