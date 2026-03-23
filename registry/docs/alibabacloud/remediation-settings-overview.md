Cloud Config is used to ensure the continuous compliance of resources. If a resource is evaluated as non-compliant based on a rule, Cloud Config remediates the resource configurations. If you enable the remediation feature when you create a rule, you can quickly remediate non-compliant configurations when the rule detects non-compliant resources. This ensures that your IT system in the cloud achieves autonomous and continuous compliance.

## Remediation methods

**Method**

**Description**

**Limits**

**Related service**

**Reference**

Template remediation

You can use Operation Orchestration Service (OOS) templates to remediate non-compliant resources.

You can configure only one remediation setting for a rule. Only rules that are created by using certain templates support the template remediation feature. For information about the rule templates that support template remediation, see [Rule templates](/help/en/cloud-config/latest/managed-rules).

OOS is automatically activated and is free of charge. For more information, see [Introduction to OOS](/help/en/oos/product-overview/introduction-to-oos#topic-2431412).

[Configure template remediation](/help/en/cloud-config/latest/configure-automatic-remediation)

Custom remediation

You can configure a Function Compute function and run custom code in the function to remediate non-compliant resources.

You can configure only one remediation setting for a rule. Both of the template-based rules and custom rules support the custom remediation feature.

Function Compute requires manual activation and payment. For more information, see [What is Function Compute?](/help/en/functioncompute/fc-2-0/product-overview/what-is-function-compute)

[Configure custom remediation](/help/en/cloud-config/latest/configure-manual-remediation)

## **Manage the AliyunServiceRoleForConfigRemediation service-linked role**

The first time you use the automatic remediation feature of Cloud Config to remediate non-compliant resources, Cloud Config automatically creates the AliyunServiceRoleForConfigRemediation service-linked role. For more information about the role, see [Manage the AliyunServiceRoleForConfigRemediation service-linked role](/help/en/cloud-config/latest/manage-the-aliyunserviceroleforconfigremediation-service-linked-role).

## **Usage notes**

When the automatic remediation feature takes effect, Cloud Config automatically remediates the configurations of non-compliant resources based on the parameters that you specify in the remediation setting. A remediation setting that is improperly configured may cause business continuity issues. For example, when you create the **oss-bucket-public-write-prohibited** rule and enable the automatic remediation feature for the rule, the Bucket ACL parameter of each Object Storage Service (OSS) bucket is automatically set to Private. However, if your business requires public read and write permissions on OSS buckets, data reads and writes are affected after the values of the Bucket ACL parameters are automatically remediated.
