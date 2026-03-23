Cloud Config is a resource auditing service that allows you to track configuration changes of your resources and continuously evaluate your resource configurations for desired settings. Cloud Config can help you evaluate a large number of resources and maintain the continuous compliance of your cloud infrastructure.

## Architecture

The following figure shows the architecture of Cloud Config.

![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0327376861/p673575.png)

## Features

**Feature**

**Description**

Manage the monitoring scope

Cloud Config monitors the changes of resources within your account, tracks configuration changes, and evaluates configuration compliance in real time. You can configure the scope of resources to monitor in the Cloud Config console. If you select All Supported Resource Types, new resource types that are supported by Cloud Config are automatically added to the monitoring scope. If you select Custom Resource Types, new resource types are not automatically added to the monitoring scope.

Manage resources

After you activate Cloud Config, you can view your resources in different regions. You can filter resources. This allows you to query the configuration details of a specified resource. You can also go to the corresponding cloud service console from the Cloud Config console to manage the resource.

View the compliance change history of a resource

Cloud Config records each configuration change of a monitored resource and displays the configuration changes over time in a configuration change history. You can view the configuration changes and the details of related events.

Evaluate resource compliance

Cloud Config allows you to create custom rules, or create rules based on templates. After you create rules, you can view the compliance results and compliance check history of each resource. You can also re-evaluate the non-compliant resources. You can edit, disable, or delete the rules that do not meet your business requirements.

Remediate non-compliant resources

You can configure template remediation or custom remediation when you create a rule. If a rule detects non-compliant resources, you can execute remediation to quickly correct non-compliant configurations. This ensures that your cloud IT system achieves autonomous and continuous compliance.

Resource delivery

Cloud Config continuously delivers resource data to Simple Log Service Logstores, Object Storage Service (OSS) buckets, or Simple Message Queue (formerly MNS) topics. This allows you to manage resource data.

Compliance packages

A compliance package contains a set of managed rules that are created by Cloud Config based on various compliance scenarios. Compliance packages help you dynamically and continuously monitor the compliance of your resources and notify you of non-compliant resource at the earliest opportunity.

Account groups

You can use the management account or delegated administrator account of a resource directory to create an account group in the Cloud Config console. This way, you can manage the resources, compliance packages, and rules of multiple members in the account group in a centralized manner.

Compliance library

The compliance library of Cloud Config provides a wide range of compliance package templates and rule templates. You can enable compliance items to continuously detect resources. You can also use the public templates provided by Operation Orchestration Service (OOS) to quickly correct non-compliant resources.

## Benefits

Cloud Config provides the following benefits:

-   Aggregated resources across multiple regions: Cloud Config provides a list of resources in different regions, and uses the list and resource APIs to quickly integrate cloud resource configurations into the CMDB of enterprises to implement unified resource management.
    
-   Event delivery: You can use multiple channels to deliver configuration changes, scheduled snapshots, and non-compliance events of your resources. This way, you can implement the global statistics and analysis of cloud resources.
    
-   A wide range of preset templates: You can start corresponding compliance items based on your requirements. Cloud Config continuously checks the destination resources and corrects non-compliant resources by using remediation templates.
    
-   Continuous compliance evaluation: Cloud Config tracks configuration changes of resources and evaluates configuration compliance. This automates the compliance review process.
    

## Usage notes

Before you use Cloud Config, take note of the following information:

-   Some of your resources may not be displayed in the resource list because Cloud Config does not support the related Alibaba Cloud services. If you set the monitoring scope to All Supported Resource Types, a new resource type is automatically added to the monitoring scope after Cloud Config supports the resource type. You can manually remove the resource type from the monitoring scope.
    
-   Cloud Config detects configuration changes at 10-minute intervals. If a change occurs in an interval and is restored to the original state within the interval, Cloud Config cannot detect the change.
    
-   Data accuracy is not guaranteed when Cloud Config is in public preview. If the resource list, configuration details, or evaluation results displayed in Cloud Config are not as expected, or you have other requirements such as support for new resource types, [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
