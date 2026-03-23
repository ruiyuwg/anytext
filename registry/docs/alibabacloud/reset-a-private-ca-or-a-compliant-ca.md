If you want to modify the information about a private certificate authority (CA) that is enabled, you can reset the required private root CA or private intermediate CA and enable the private CA again. This topic describes how to reset a private CA.

**Warning**

After you reset a private CA, all information about the private CA and the certificates that are issued by the private CA are deleted. Only the remaining quota for private certificates is retained for the CA. The quota that is consumed by the deleted certificates is not resumed. Proceed with caution.

1.  Log on to the [Certificate Management Service console](https://yundun.console.alibabacloud.com/?p=cas).
    
2.  In the left-side navigation pane, choose **Manage Certificates** > **PCA Certificate Management**.
    
3.  On the **Private CAs** tab, find the private root CA or private intermediate CA that you want to reset, and click **Reset** in the **Actions** column.
    
4.  In the dialog box that appears, confirm the reset information, select **Confirm that the reset operation deletes all data.**, and then click **OK**.
    
    After the private CA is reset, the status of the private CA changes to **Disabled**. You can re-enable the private CA. For more information, see [Enable a private CA](/help/en/ssl-certificate/purchase-and-enable-a-private-ca).
