To batch deploy application environments or quickly replicate servers, you can create Elastic Compute Service (ECS) instances directly from a custom or shared image. This streamlines configuration, ensures environment consistency, and improves O&M efficiency.

## Region limitation

The instance must be created in the same region as the image.

## Procedure

## Console

1.  Go to the [ECS console - Images](https://ecs.console.alibabacloud.com/image) page. In the top-left corner, select the target resource group and region.
    
2.  On the **Custom Images** or **Shared Images** tab, locate the image you want to use and click **Create Instance** in the **Actions** column.
    
3.  On the custom purchase page, the system automatically populates the Region and Image information. Follow the on-screen prompts to complete the remaining [configuration items](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#a76e4b20ea11c), and then click **Create Order**.
    

## CLI

When you create an instance by using the [RunInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runinstances) or [CreateInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createinstance) operation, set the `ImageId` parameter to the ID of the custom image that you want to use.

> This command creates an instance using the custom image `m-bp1******pi`.

```
aliyun ecs RunInstances \
--region cn-hangzhou \
--RegionId 'cn-hangzhou' \
--ImageId 'm-bp1******pi' \
--InstanceType 'ecs.g7.large' \
--VSwitchId 'vsw-bp1******trg' \
--SecurityGroupId 'sg-bp1******dgl' \
--SystemDisk.Size 40 \
--SystemDisk.Category cloud_essd \
```

## API

When calling the [RunInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runinstances) or [CreateInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createinstance) operation to create an instance, set the `ImageId` parameter to the ID of the custom image you want to use.

## What to do next

-   If you increased the size of a **data disk** when creating the instance, log on to the ECS instance to extend the partition and file system to use the new capacity. For more information, see [Linux instance guide](/help/en/ecs/user-guide/resize-linux-cloud-disks#bb3b1f02e51pj) and [Windows instance guide](/help/en/ecs/user-guide/resize-windows-cloud-disks#a9f9b78f3fujb).
    
    > If you increased the size of the **system disk**, it is automatically resized. If this process fails, manually extend the partition and file system to use the new capacity. For more information, see [Linux instance guide](/help/en/ecs/user-guide/resize-linux-cloud-disks#bb3b1f02e51pj) and [Windows instance guide](/help/en/ecs/user-guide/resize-windows-cloud-disks#a9f9b78f3fujb).
    
-   If you added a new data disk when creating the instance, first [initialize the data disk](/help/en/ecs/user-guide/initialize-a-data-disk/) before you can use it.
    

## **Billing**

When you create an ECS instance from a custom image or shared image that is based on a paid image, you may incur [image software license fees](/help/en/ecs/images).

## FAQ

#### What should I do if my custom image is in a different account or region?

**Scenario**

**Solution**

The custom image is on a local device.

[Import](/help/en/ecs/user-guide/import-an-image#concept-1375343) the local image as an Alibaba Cloud custom image.

The custom image is in another region.

[Copy](/help/en/ecs/user-guide/copy-an-image#concept-a3m-5dm-xdb) the custom image to the target region.

The custom image is in another Alibaba Cloud account.

[Share](/help/en/ecs/user-guide/share-a-custom-image/#concept-e1j-jgm-xdb) the custom image with the target account.
