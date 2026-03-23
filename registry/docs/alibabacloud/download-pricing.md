This topic describes the billing rules for downloading data from MaxCompute.

MaxCompute charges for data downloaded over the public network on a pay-as-you-go basis. A bill for your download fees is generated on the following day. You can view the bill in the [My Bill](https://usercenter2-intl.console.alibabacloud.com/billing#/account/overview). The billing rules for downloads are as follows.

**Billing formula**

**Price**

**Description**

Fee per download = Data volume of the download × Price per download

The unit prices are as follows:

Public cloud: 0.1166 USD/GB

Data volume of the download refers to the size of the HTTP body in a single download request. The HTTP body that carries the data uses ProtoBuffer encoding. Therefore, its size is typically smaller than the data's actual storage usage but larger than the volume of the data after it is compressed and stored in MaxCompute.

**Note**

-   Data downloads are free of charge if you access the Alibaba Cloud VPC network from another cloud platform over a leased line. For more information about the Endpoints for different regions and network connectivity types, see [Endpoint](/help/en/maxcompute/user-guide/endpoints#concept-m2j-h1y-5db).
    
-   If you have further questions about MaxCompute billing, you can fill out the [DingTalk group application form](https://wx-in-i.dingtalk.com/yydy/yq.html?encodeDeptId=null&corpId=dingb682fb31ec15e09f35c2f4657eb6378f&inviterUid=null&scene=allMemberConversationDetail-copyLink&cid=6465538762&inviteCode=GKO5lWJbFEZkWl7&origin=2&originMeta=globalGroup&method=copyLink) to join our DingTalk group for assistance.
