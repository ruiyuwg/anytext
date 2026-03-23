Starting with Kubernetes v1.33, new ACK managed clusters have the latest version of `ack-ram-authenticator` pre-installed as a system add-on by default, without consuming additional node resources.

## **Scope**

This change only affects new ACK managed clusters running Kubernetes v1.33 or later, including ACK managed Pro clusters and ACK managed Basic clusters.

## Change details

**Note**

For details about `ack-ram-authenticator` and its usage instructions, see [ack-ram-authenticator](/help/en/ack/product-overview/ack-ram-authenticator) and [Use ack-ram-authenticator for API server webhook authentication in an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-ack-ram-authenticator-to-help-the-api-server-in-ack-managed-clusters-complete-webhook-authentication).

For all new ACK managed clusters created with Kubernetes v1.33 or later:

-   The latest version of `ack-ram-authenticator` is pre-installed as a non-removable system add-on.
    
-   Node pool scaling operations (both manual and auto scaling) require the ack-ram-authenticator add-on. This dependency will generate a few OpenAPI access traces within the cluster virtual private cloud (VPC) network during scaling events, specifically recording worker Resource Access Management (RAM) roles verifying identity through the STS GetCallerIdentity API.
    

## **ack-ram-authenticator configuration**

#### **Custom paramete****r** **description**

**Expand to view custom parameter supported by ack-ram-authenticator**

**Parameter**

**Type**

**Description**

EnableNonBootstrapMapping

boolean

Specifies whether to enable the identity mappings configured in [Step 5: Map RAM identities to RBAC permissions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-ack-ram-authenticator-to-help-the-api-server-in-ack-managed-clusters-complete-webhook-authentication#5d10ff40fbmp2).

-   `true`: enables custom identity mappings configured in the cluster.
    
-   `false`: allows only the identity mappings required for node initialization.
    

### **Configure the custom parameter**

#### **Method 1: Terraform**

When creating clusters through Terraform, you can use the `addons` attribute in the `alicloud_cs_managed_kubernetes` resource to install the `ack-ram-authenticator` add-on with custom configuration. For more information, see [Use Terraform to manage add-ons](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/use-terraform-to-manage-plug-ins#section-fbb-o2u-055).

```
resource "alicloud_cs_managed_kubernetes" "default" {
  # Other parameters
  # ...

  addons {
    name = "ack-ram-authenticator"
    config = jsonencode(
      {
         "EnableNonBootstrapMapping": false
      }
    )
  }
}
```

#### **Method 2: OpenAPI**

When creating clusters through API, you can use the `addons` parameter in the [CreateCluster](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-createcluster) interface to specify the installation of `ack-ram-authenticator` and configure the custom parameter.

```
"addons": [
  // Other add-on configurations
  {
    "name": "ack-ram-authenticator",
    "config": "{\"EnableNonBootstrapMapping\": false}"
  }
],
```

#### **Method 3:** Console

The `ack-ram-authenticator` add-on installed by default when you create clusters through the console disables RAM identity mapping for non-node initialization scenarios. To modify this configuration, follow these steps:

**Expand to view how to modify add-on in the console**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left-side navigation pane, choose **Operations** > **Add-ons**.
    
3.  On the **Add-ons** page, click the **Security** tab, find the `ack-ram-authenticator` card, and click **Configuration** in the lower right corner. In the **ack-ram-authenticator Parameters** dialog box, select **Enable RAM identity mapping in non-node initialization scenarios**, and click **OK**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3514528471/p952327.png)
    

## Contact us

If you encounter any issues or have suggestions for our product, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to contact us.
