This topic describes how to view split bills based on cost allocation costs in the Expenses and Costs console or by using the related API operations.

## Prerequisites

-   Tags are added to resources.
    
    For more information, see [Add a custom tag](/help/en/resource-management/add-a-custom-tag#task-2537588).
    
-   The cost allocation tag feature is enabled, and cost allocation tags are specified.
    
    For more information, see [Cost allocation tags](/help/en/user-center/cost-allocation-tags).
    

## (Recommended) View split bills in the Expenses and Costs console

-   **Split Bill page**
    
    In the left-side navigation pane of the [Expenses and Costs console](https://usercenter2-intl.console.alibabacloud.com/finance/split-bill), choose Manage Split > Split Bill. On the Split Bill page, view the split bills of resources by tag. You can also export the split bills in the CSV format and filter the split bills by tag.
    
    To view the split bills of your resources on the Split Bill page, make sure that you have enabled the Split Bill feature and added tags to your resources at least one day ago. For more information, see [Split Bill](/help/en/user-center/split-bills-legacy-console/).
    
-   **Cost Analysis page**
    
    In the left-side navigation pane of the [Expenses and Costs console](https://usercenter2-intl.console.alibabacloud.com/expense-manage/expense-analyze), choose Cost Management > Cost Analysis. On the Cost Analysis page, specify tag filters and view the costs of resources by tag. You can also export the cost details in the CSV format.
    
    To view the costs of your resources on the Cost Analysis page, make sure that you have enabled the cost analysis feature and added tags to your resources at least one day ago. For more information, see [Cost analysis](/help/en/user-center/cost-analysis-intl).
    
-   **Cost Centers page**
    
    In the left-side navigation pane of the [Expenses and Costs console](https://usercenter2-intl.console.alibabacloud.com/finance/finance-unit/list), choose Manage Split > Cost Center. On the Cost Centers page, create cost centers for resources based on your business requirements. Then, allocate resources to these cost centers by tag.
    
    To view the split bills of your resources on the Cost Centers page, make sure that you have enabled the Cost Center feature and added tags to your resources at least one day ago. For more information, see [Cost center](/help/en/user-center/cost-center-overview).
    
    View billing details on the [Split Bill](https://usercenter2-intl.console.alibabacloud.com/finance/split-bill) or [Cost Analysis](https://usercenter2-intl.console.alibabacloud.com/expense-manage/expense-analyze) page by cost center.
    

## View split bills by using the related API operations

After tags are added to resources, you can call the following two API operations to query the bills. The `tags` that are added to your resources are also returned.

-   [DescribeSplitItemBill](/help/en/user-center/developer-reference/api-bssopenapi-2017-12-14-describesplititembill)
    
    Queries split bills. To query the split bills of your resources by calling the operation, make sure that you have enabled the Split Bill feature and added tags to your resources at least one day ago.
    
-   [DescribeInstanceBill](/help/en/user-center/developer-reference/api-bssopenapi-2017-12-14-describeinstancebill)
    
    Queries instance bills. Instance bills are generated after the total bill is split. In most cases, the instance bills do not include data generated on the last day of the specified account period.
