Simple Log Service provides CustomResourceDefinitions (CRDs) for creating custom resources. You can create a CustomResource (CR) for Logtail configuration. This topic outlines the features and differences between the AliyunPipelineConfig and AliyunLogConfig CRDs.

## **Background information**

CRDs are Kubernetes API objects that allow you to create custom resources. For more information, see [Extend the Kubernetes API with CustomResourceDefinitions](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/). You can use CRDs to extend native Kubernetes APIs for specific scenarios. A CR can be created from a CRD.

Simple Log Service CRDs let you manage Logtail configurations with CRs. First, connect to your Kubernetes cluster and complete the necessary authentication. Then, submit a YAML configuration file to the kube-apiserver to create a CR that defines a Logtail configuration.

**Warning**

If you create a Logtail configuration with a CR and then modify it in the Simple Log Service console, the changes will not synchronize to the CR. To update a Logtail configuration made with a CR, you must modify the CR directly. Avoid changing it in the console to prevent inconsistencies.

**Implementation of CR-based Logtail configuration management**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0513913571/CAEQQRiBgIC3wKmivxkiIDg2MTE2OTViYzIyODRhMzM4YmJlNzU2ZTJiY2ExYzc54120738_20240115204542.090.svg)

1.  Simple Log Service creates a `Deployment` to install the `alibaba-log-controller` component. The component monitors the modifications in the `AliyunLogConfig` CRD.
    
2.  When you use kubectl or other Kubernetes tools to create, update, or delete the `AliyunLogConfig` CRD, the `alibaba-log-controller` monitors these changes and sends requests to Simple Log Service based on the CRD configuration and the Logtail configuration status. For example, it may request an update to the Logtail configuration.
    

## CRDs

To facilitate Logtail configuration management in cloud-native mode, Simple Log Service defines two CRDs: AliyunPipelineConfig and AliyunLogConfig. The following table describes the capabilities of and differences between the CRDs.

**Important**

To use AliyunPipelineConfig, the logtail components must be version 0.5.1 or later.

**CRD**

**AliyunPipelineConfig (recommended)**

**AliyunLogConfig**

ApiGroup

telemetry.alibabacloud.com/v1alpha1

log.alibabacloud.com/v1alpha1

CRD resource name

ClusterAliyunPipelineConfig

AliyunLogConfig

Scope

Cluster

Namespace

Logtail configuration format

Equivalent to [LogtailPipelineConfig](/help/en/sls/developer-reference/api-sls-2020-12-30-struct-logtailpipelineconfig)

Equivalent to [LogtailConfig](/help/en/sls/developer-reference/api-sls-2020-12-30-struct-logtailconfig)

Cross-region capability

Supported

Supported

Cross-account capability

Supported

Supported

Webhook-related parameter verification

Supported

Not supported

Configuration conflict detection

Supported

Supported for Logtail components version 0.5 and later

Configuration difficulty

Relatively low

Relatively high

Observability configuration

The Status field contains the following information: error details, update time, Logtail configuration previously applied, and point in time at which the Logtail configuration was previously applied.

The Status field contains the error code and error message.
