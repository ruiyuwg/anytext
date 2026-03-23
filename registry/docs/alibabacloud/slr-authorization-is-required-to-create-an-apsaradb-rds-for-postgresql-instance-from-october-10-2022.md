ApsaraDB RDS for PostgreSQL instances that use the new architecture are available for purchase from October 10, 2022 in phases. The new architecture optimizes RDS instances in terms of O&M efficiency and management and improves service stability.

## Description

RDS instances that are created on and after October 10, 2022 use the new architecture in phases.

If this is the first time you create an RDS instance of the new architecture, you must use your Alibaba Cloud account or a RAM user to which the `AliyunRAMFullAccess` policy is attached to perform SLR authorization. This way, ApsaraDB RDS for PostgreSQL can access Elastic Network Interface (ENI) and allows you to create a managed ENI.![SLR授权](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7586444661/p491804.png)

**Note**

The created ENI allows your RDS instance to access other services in your virtual private cloud (VPC). For more information about ENIs, see [ENI overview](/help/en/ecs/user-guide/eni-overview).

## Effective date

October 10, 2022

## Usage notes

-   You need to perform SLR authorization only once.
    
-   If you call the CreateDBInstance operation to create an RDS instance, you must perform SLR authorization before you create the instance. For more information, see [Service-linked roles](/help/en/rds/developer-reference/service-linked-roles#section-aym-cqw-hty). **If you do not perform SLR authorization, a refund is triggered after you complete the payment.**
