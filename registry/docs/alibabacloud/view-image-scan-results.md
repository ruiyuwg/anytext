Security Center provides the container image scan feature to detect system vulnerabilities, application vulnerabilities, baseline risks, and malicious image samples in your images, and displays the detected risks by category. This way, you can view the overall security status of your images. This topic describes how to view and handle security risks in your images.

## Prerequisites

Container image scans are performed. For more information, see [Scan images](/help/en/security-center/user-guide/scan-images#task-1986095).

## Background information

You can use the container image scan feature to detect image system vulnerabilities, image application vulnerabilities, baseline risks, malicious image samples, and sensitive image files. You can use this feature to fix only specific image system vulnerabilities. We recommend that you handle risks in containers at the earliest opportunity based on the information provided by Security Center. The information includes fixing commands, impact descriptions, and paths to malicious files.

## View risk statistics

Security Center allows you to view the statistics of images with high, medium, and low risks, and the statistics and lists of scanned and unscanned images. This way, you can quickly identify images that are at risk.

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region in which the asset that you want to manage resides. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **Protection Configuration** > **Container Protection** > **Container Image Scan**.
    
3.  On the **Container Image Scan** page, view the following statistics:
    
    -   Numbers of images with high, medium, and low risks
        
        In the upper part of the **Container Image Scan** page, click the number below **High-risk Image**, **Medium-risk Image**, or **Low-risk Image** to go to the Image tab of the Container page. On the Image tab, view the details of images.
        
    -   Numbers of scanned images and unscanned images
        
        In the upper part of the ****Container Image Scan**** page, click the number below **Scanned Images** or **Unscanned Image/Images**. In the **Scanned Images** or **Unscanned Image/Images** panel, view the scanned images or unscanned images.
        
        **Important**
        
        The image list in the Unscanned Images panel displays the images that are not scanned and the images that failed to be scanned.
        
    -   Quota for **container image scan**
        
        If the remaining quota for **container image scan** is insufficient, click **Increase Quota** to purchase additional quotas on the buy page.
        

## View image scan results

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region in which the asset that you want to manage resides. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **Protection Configuration** > **Container Protection** > **Container Image Scan**.
    
3.  On the ****Container Image Scan**** page, click the following tabs to view the image scan results:
    
    ### **Image Vulnerability**
    
    On the **System Vulnerability** and **Image Application Vulnerability** tabs, view the image system vulnerabilities and image application vulnerabilities that are detected. You can perform the following operations:
    
    -   **Search for vulnerabilities**
        
        In the upper part of the vulnerability list, filter vulnerabilities by vulnerability priority, instance ID, repository name, namespace, digest, or vulnerability name. A vulnerability priority can be high, medium, or low. You can also select **Image Scan** or **Container Runtime Image Scan** to filter vulnerabilities.
        
        **Note**
        
        You can search for vulnerabilities by repository or vulnerability name. Fuzzy search is supported.
        
    -   **View vulnerability details**
        
        Find the vulnerability whose details you want to view and click **View** in the **Actions** column. In the panel that appears, perform the following operations based on your business requirements:
        
        -   **View the details about the Alibaba Cloud vulnerability library**
            
            Click the Common Vulnerabilities and Exposures (CVE) ID to go to the Alibaba Cloud vulnerability library. This library displays vulnerability details such as the vulnerability description, basic information, and solution to fix the vulnerability.
            
        -   **View fixing commands and impact descriptions**
            
            In the list of affected images or containers, find the image or container that you want to manage and click **Details** in the Actions column to view the fixing commands and impact descriptions of the image vulnerability.
            
            **Note**
            
            If there is a **PAI** label to the right of the **Image Address/Version**, it indicates that the image is deployed through the Platform for AI (PAI).
            
    
    ## Image Baseline Check
    
    On the **Image Baseline Check** tab, view the results of image baseline checks. You can perform the following operations:
    
    -   **Search for the results of image baseline checks**
        
        You can use the filter above the results of image baseline checks to search for results by severity. The severities include **high risk**, **medium risk**, and **low risk**. You can also enter search conditions in the search box to search for results by baseline name or category.
        
    -   **View the results of image baseline checks**
        
        In the results of image baseline checks, you can view information in the following columns: **Baseline Name/Category**, **Affected Image**, **Last Scan Time**, **First Scan Time**, and **Status**.
        
    -   **View the details of the result of an image baseline check**
        
        In the results of image baseline checks, find the baseline that you want to manage and click **Details** in the **Actions** column to view the details of the check result. You can view information about the images and containers that are affected by the baseline. The information includes the addresses and versions of the images, first check time, and numbers of baseline risks at each risk level detected on the images and containers.
        
        -   Find the image that you want to manage and click **Details** in the **Actions** column. In the **Risk Item** panel, you can view the details of the risk items of the image.
            
        -   Click the **Affected Image** or **Affected Container** tab and then click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2686639171/p808059.png) icon to export the information about affected images or containers.
            
    
    ### **Malicious Image Sample**
    
    **Important**
    
    A malicious image sample may change the memory attributes from readable and writable to readable and executable or modify the network proxy settings to intrude into your server. We recommend that you handle malicious image samples at the earliest opportunity.
    
    On the **Malicious Image Sample** tab, view the detected malicious image samples. You can perform the following operations:
    
    -   **Search for malicious image samples**
        
        In the upper-left corner of the list of malicious image samples, select **Urgent**, **Suspicious**, or **Notice** to query malicious image samples. You can also filter malicious image samples by instance ID, repository name, namespace, digest, or malicious sample name.
        
    -   **View malicious image samples**
        
        In the list of malicious image samples, you can view the sample names, number of affected images, first scan time, last scan time, and processing status.
        
    -   **View the details of a malicious image sample**
        
        Find the malicious image sample whose details you want to view and click **Details** in the **Actions** column.
        
    
    ### **Sensitive Image File**
    
    On the **Sensitive Image File** tab, view the detected sensitive image files. You can perform the following operations:
    
    -   **Search for sensitive image files**
        
        In the upper-left corner of the list of sensitive image files, select High Risk, Medium Risk, or Low Risk to query sensitive image files. You can also filter sensitive image files by alert type of sensitive files or type of sensitive information.
        
    -   **View sensitive image files**
        
        In the list of sensitive image files, view the alert types of sensitive files, types of sensitive information, numbers of affected and unhandled images, first scan time, and last scan time.
        
    -   **View the details of a sensitive image file**
        
        To view the images that are affected by a sensitive image file, find the sensitive image file and click **Details** in the Actions column. To view the sensitive image files that affect an image, find the affected image and click **Details** in the Actions column.
        
    
    ### **Image Build Command Risks**
    
    On the **Image Build Command Risks** tab, view the risks of image build commands. You can perform the following operations:
    
    -   **Search for risks of image build commands**
        
        In the upper-left corner of the risks of image build commands, select **High Risk**, **Medium Risk**, or **Low Risk** to query the risks of image build commands. You can also filter risks of image build commands by risk type or category.
        
    -   **View risks of image build commands**
        
        In the list of risks of image build commands, view the risk types, risk categories, numbers of affected and unhandled images, first scan time, and last scan time.
        
    -   **View the details of a risk of image build commands**
        
        To view the images that are affected by a risk of image build commands, find the risk and click **Details** in the Actions column. To view the risks of image build commands that affect an image, find the affected image and click **Details** in the Actions column.
        
    
4.  Optional. On the ********Container Image Scan******** page, click the **Image Vulnerability**, **Image Baseline Check**, or **Malicious Image Sample** tab. In the upper-right corner of the list on the tab, click the ![导出](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7295042561/p425001.png) icon to export the scan results.
    

## **Handle detected image risks**

You can handle vulnerabilities and risks based on the risk details and handling suggestions.

-   **Image Vulnerability**: Fix vulnerabilities in images based on fixing commands and impact descriptions.
    
    Security Center allows you to fix specific image system vulnerabilities with a few clicks. If an image update that can be used to fix the vulnerabilities in the affected image is available, you can perform a quick fix by using the following methods.
    
    **Note**
    
    To check whether an image update is available in the image repository, choose **Assets** > **Container** in the left-side navigation pane. On the Container page, click the **Image** tab. For more information, see the [View image information](/help/en/security-center/user-guide/view-security-information-about-containers#a39fc49009qik) section of the "Manage container assets" topic.
    
    -   Manually fix vulnerabilities: In the system vulnerability list, find the vulnerability that you want to fix and whose **Fix** button is not dimmed, and click **Fix** in the **Actions** column. Click the **Affected Image** tab, find the image whose vulnerability you want to fix, and then click **Fix** in the Actions column.
        
    -   Enable automatic fixing: Specify a fixing period and a fixing scope. For more information, see the [Configure image risk fixing](/help/en/security-center/user-guide/scan-images#a5eb8ad06ekp5) section of the "Scan images" topic.
        
-   **Image Baseline Check**: Manually handle baseline risks in images based on the details of baseline check results.
    
-   **Malicious Image Sample**: We recommend that you manually handle malicious image samples at the earliest opportunity based on the details of malicious image samples, such as the paths of malicious image files.
    
    If you confirm that the image that is affected by the malicious image sample does not have risks, you can find the affected image in the details panel of the malicious image sample and click **Handle** in the **Actions** column to add the type of the alert that is generated for the image to the whitelist. After you add the alert type to the whitelist, the system no longer checks the risks of the malicious image sample corresponding to the alert type in the whitelist.
    
-   **Sensitive Image File** and **Image Build Command Risks**: We recommend that you assess risks based on your business conditions, delete and correct the files and image build commands that may pose security risks, and recreate images.
    
    In the details panel of a sensitive file or build command, click **Handle** in the Actions column and use one of the following handling methods:
    
    -   **Add to Whitelist**: If you confirm that the sensitive image file or image build command does not have risks, you can add the type of the alert that is generated for the sensitive image file or image build command to the whitelist. After you add the alert type to the whitelist, the system no longer checks the risks of the sensitive image file or image build command corresponding to the alert type in the whitelist.
        
    -   **Ignore**: The system ignores the alert that is generated for the risk. If the system rescans the image and the image meets the conditions in the detection policy, the system generates an alert.
        
    -   **Mark as False Positive**: If you confirm that the risk is a false positive, Security Center optimizes the scanning capability based on the feedback.
        

After you handle the risks that are detected in an image, click **Immediate Scan** on the ******Container Image Scan****** page to rescan the image and update the scan results.
