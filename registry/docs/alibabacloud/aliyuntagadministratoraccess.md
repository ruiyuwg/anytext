AliyunTagAdministratorAccess is a service system policy that is managed by Alibaba Cloud. You can attach the AliyunTagAdministratorAccess policy to a Resource Access Management (RAM) identity, such as a RAM user, RAM user group, and RAM role. The AliyunTagAdministratorAccess policy: **Manage TAG service and all tags for Alibaba Cloud products.**

## **Policy details**

-   Type: service system policy
    
-   Creation time: 01:52:05 on July 21, 2021
    
-   Update time: 03:59:06 on February 23, 2023
    
-   Current version: v5
    

## **Policy content**

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "tag:*",
        "*:ListTagResources",
        "*:TagResources",
        "*:UntagResources",
        "*:UnTagResources",
        "vod:TagVodResources",
        "vod:UnTagVodResources",
        "dcdn:TagDcdnResources",
        "dcdn:UntagDcdnResources",
        "ecs:DescribeResourceByTags",
        "*:DescribeTags",
        "*:DescribeTagKeys",
        "*:ListTagKeys",
        "*:ListTagValues",
        "ecs:AddTags",
        "ecs:RemoveTags",
        "slb:AddTags",
        "slb:RemoveTags",
        "rds:AddTagsToResource",
        "rds:DescribeDBInstanceByTags",
        "rds:RemoveTagsFromResource",
        "oss:PutBucketTagging",
        "oss:GetBucketTagging",
        "oss:DeleteBucketTagging",
        "live:TagLiveResources",
        "live:ListLiveTagResources",
        "live:UnTagLiveResources",
        "elasticsearch:CreateTags",
        "elasticsearch:RemoveTags",
        "elasticsearch:ListTagResource",
        "vpc:ListTagResourcesForExpressConnect",
        "vpc:TagResourcesForExpressConnect",
        "vpc:UntagResourcesForExpressConnect",
        "vpc:DescribeTagKeysForExpressConnect"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": "ram:CreateServiceLinkedRole",
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "ram:ServiceName": "tag.aliyuncs.com"
        }
      }
    }
  ]
}
```

## **References**

-   [Policy elements](/help/en/ram/policy-elements)
    
-   [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user)
    
-   [Grant permissions to a RAM user group](/help/en/ram/user-guide/grant-permissions-to-a-ram-user-group)
    
-   [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role)
