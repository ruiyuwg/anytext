You can create and add tags to Object Storage Service (OSS) buckets. Then, you can query the costs of these buckets by tag on the Split Bill page in the Expenses and Costs console. For example, you can add different tags to the buckets that belong to different departments. Then, query the bucket costs of each department by tag.

## Step 1: Add a tag to a bucket

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, find and click the desired bucket.
    
3.  In the navigation pane on the left, choose **Bucket Settings** > **Bucket Tagging**.
    
4.  On the **Bucket Tagging** page, click **Create Tag**.
    
5.  Click **+Tag**, enter a key and value for the tag, or select an existing tag.
    
    To add multiple tags, click **+Tag**.
    
6.  Click **Save**.
    

You can view the tag on the Cost allocation tags page in the Expenses and Costs console one day after the tag is added to the bucket.

## **Step 2: Enable the cost allocation tag**

You can view a cost allocation tag in a split bill only after you enable the tag.

1.  Go to the [Cost allocation tags](https://usercenter2-intl.console.alibabacloud.com/finance/tags) page in the **Expenses and Costs** console. If you do not enable the cost allocation tag feature, enable the feature as prompted.
    
2.  On the **Cost allocation tags** page, enable the cost allocation tag.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1617365371/p838954.png)
    

## Step 3: Query costs on the Split Bill page

1.  Go to the [Split Bill](https://usercenter2-intl.console.alibabacloud.com/finance/split-bill) page in the **Expenses and Costs** console. If you do not enable the Split Bill feature, enable the feature as prompted.
    
2.  In the **Product** drop-down list, select **Object Storage Service** and click Search. You can also specify other search conditions based on your business requirements.
    
3.  View the costs of your buckets by tag in the **Instance Tag** column.
    
4.  Click Export Billing Overview (CSV) in the upper-right corner to export bills. In the exported CSV file, search for buckets by tag and view their cost details.
    

## **References**

-   [Cost allocation tags](/help/en/user-center/cost-allocation-tags)
    
-   [Split Bill](/help/en/user-center/split-bills-legacy-console/)
