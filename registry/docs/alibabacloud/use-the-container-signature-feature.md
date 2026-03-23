The container image signing feature supports signing container images and verifying container image signatures. This feature ensures that only trusted container images are deployed and prevents unauthorized images from being started. This reinforces your asset security.

## Limits

Only the Ultimate edition of Security Center supports this feature. For more information about how to purchase and upgrade Security Center, see [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center#task-lxj-3bc-zdb) and [Upgrade and downgrade Security Center](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center#task-o55-wgb-b2b).

## Prerequisites

-   A customer master key (CMK) is created by using Key Management Service (KMS). The CMK is based on an asymmetric encryption algorithm. For more information about how to create a KMS CMK, see [Create a CMK](/help/en/kms/key-management-service/support/create-a-cmk-1#task-1939967).
    
    **Important**
    
    Only asymmetric key algorithms support the container image signing feature. When you create a KMS CMK, set **Key Spec** to RSA\_2048 and **Purpose** to Sign/Verify. For more information about the key algorithms supported by KMS CMKs, see [Description of encryption algorithms supported by KMS](/help/en/kms/key-management-service/support/overview-4#section-ulz-lvl-ugd).
    
-   A Kubernetes cluster is created, and the kritis-validation-hook component is installed in the cluster.
    
    For more information about how to create Kubernetes clusters, see [Create an ACK dedicated cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-dedicated-cluster/#task-skz-qwk-qfb).
    
    For more information about the kritis-validation-hook component, see [Introduction to kritis-validation-hook](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/introduction-to-kritis-validation-hook#task-2445013).
    
-   If this is the first time that you use the container image signing feature, you must grant Security Center the required permissions to access relevant Alibaba Cloud services.
    

## Procedure

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**. In the left-side navigation pane, choose **Protection Configuration** > **Container Protection** > **Container Image Signing**.
    
2.  **Optional:**On the **Witness** tab, create a witness.
    
    If you have created a witness, skip this step and go to Step 3.
    
    Otherwise, you can click **Create a witness** on the **Witness** tab. In the panel that appears, configure the parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    Witness
    
    Enter the name of the witness. When you configure a security policy, you must select a witness to enable the container image signing feature for the required container. We recommend that you enter an informative name.
    
    Select a certificate
    
    Select the KMS CMK that you created from the certificate list.
    
    Description
    
    Enter the description of the witness.
    
3.  On the **Security Policy** tab, click **Add Policy**. In the panel that appears, configure the parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    Policy Name
    
    Enter the name of the security policy. When you configure a security policy, you must select a witness to enable the container feature for the required cluster.
    
    We recommend that you enter an informative name.
    
    Witness
    
    Select the witness that you created from the witness list.
    
    Application Cluster
    
    Select the cluster group for which you want to enable the container image signing feature. Then, select the required **Cluster Namespace**.
    
    Policy Enabled
    
    Turn on the switch. The policy is automatically enabled after it is created.
    
    **Note**
    
    The switch is turned off by default. In this case, the policy does not take effect after it is created.
    
    Note
    
    Enter the description of the security policy.
    
    After you create and enable a security policy for a container, the container image signing feature takes effect on the container that you select when you configure the security policy. The container image based on which the container is created is labeled as **Trusted Image**.
