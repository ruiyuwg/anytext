This topic describes how to upgrade to Cloud Data Transfer (CDT) billing. CDT provides centralized billing and statistical analysis for your data transfers.

## **Usage notes**

-   After you upgrade to CDT billing, all existing and new **pay-by-data-transfer** instances are billed by CDT. Pay-by-bandwidth instances continue to be billed by the original cloud services.
    
    You can go to the **Expenses And Costs** console and view your CDT bills on the **Bill Details** page.
    
-   After you upgrade to CDT billing, you receive a free quota of 220 GB of Internet traffic per month. Of this quota, 20 GB per month can be used in regions in **the Chinese mainland**, and 200 GB per month can be used in regions **outside the Chinese mainland**.
    

## **Procedure**

1.  Log on to the [CDT console](https://cdt.console.alibabacloud.com/overview) to view the details in the ****Upgrade to CDT Billing for Cloud Services**** section.
    
    **Not upgraded**: The service does not use CDT billing by default. You can manually upgrade the service to CDT billing to take advantage of CDT offers.
    
    **Upgraded by default**: The service uses CDT billing by default. Data transfer fees for pay-by-data-transfer instances are billed by CDT.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9931398471/p961269.png)
    
2.  You can manually upgrade a service to CDT billing. This topic uses Elastic Compute Service (ECS) as an example.
    
    In the **Actions** column, click **Upgrade**. In the dialog box that appears, click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8420547371/p890764.png)
    
3.  In the **Monthly Internet Data Transfer** section, view the total traffic and a ranking of services by traffic usage for the current month and region.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6569447371/p890743.png)
    

## **Changes in bills after you upgrade to CDT billing**

After you upgrade to CDT billing, all existing and new **pay-by-data-transfer** instances are billed by CDT. Pay-by-bandwidth instances continue to be billed by the original cloud services.

Log on to the [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/) console. In the left navigation pane, choose **Bills** > **Bill Details**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6569447371/p890865.png)

For more information about the fields in CDT bills, see [Query bills and usage](/help/en/cdt/query-bills).

## **Related topics**

After you switch a cloud service to CDT billing, you can split its bills by tag. For more information, see [Split bills by tag using CDT](/help/en/cdt/user-guide/use-cdt-to-split-bills-by-tag).
