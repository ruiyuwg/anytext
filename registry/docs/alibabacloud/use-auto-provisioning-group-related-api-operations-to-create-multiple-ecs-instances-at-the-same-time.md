To efficiently create many pay-as-you-go Elastic Compute Service (ECS) instances, you can call the CreateAutoProvisioningGroup API operation. This topic describes how to use Java code to call this API operation to batch create instances. This topic also compares the features, benefits, and drawbacks of the RunInstances and CreateAutoProvisioningGroup API operations.

## Background information

In scenarios that require pay-as-you-go ECS instances, the `RunInstances` API operation is the most frequently used. A single call to the `RunInstances` operation can create a maximum of 100 ECS instances. However, in a production environment, using `RunInstances` to create more than 100 instances at a time can cause technical bottlenecks. For more information, see [Issues when creating instances with RunInstances](#section-6v8-ugx-6ro).

**Note**

If you are familiar with the technical bottlenecks of using the `RunInstances` operation to batch create instances, you can skip the Issues when creating instances with RunInstances section.

To meet the demand for creating many ECS instances, Alibaba Cloud provides auto provisioning groups. You can call the `CreateAutoProvisioningGroup` API operation to create an auto provisioning group. This lets you deploy an instance cluster across multiple billing methods, zones, and instance types with a single action. Compared to `RunInstances`, `CreateAutoProvisioningGroup` is more suitable for scenarios that require creating many ECS instances. For a comparison of their features and an analysis of their benefits, see [Comparison of RunInstances and CreateAutoProvisioningGroup](#section-xtx-q9a-5s3) and [Benefits of auto provisioning groups](#section-1j8-ea0-iyf).

## Comparison of RunInstances and CreateAutoProvisioningGroup

This section compares some features of the [RunInstances](/help/en/ecs/api-runinstances#doc-api-Ecs-RunInstances) and [CreateAutoProvisioningGroup](/help/en/ecs/api-createautoprovisioninggroup#doc-api-Ecs-CreateAutoProvisioningGroup) API operations. This comparison helps you quickly understand their differences and choose the appropriate method to create instances.

**Item**

**RunInstances**

**CreateAutoProvisioningGroup**

Maximum number of instances per batch creation

100

1,000 (up to 10,000 vCPUs)

Capacity delivery method

Number of instances

Number of instances, number of vCPU cores, instance type weights, and more.

Multi-zone support

No

Yes

Multiple instance type support

No

Yes

Multiple disk type support

No

Yes

Instance creation policies

No

Yes. The following policies are provided:

-   For pay-as-you-go instances
    
    -   Cost optimization policy: Creates instances of the lowest-cost instance types among the specified instance types.
        
    -   Priority-based policy: Attempts to create instances based on the specified priority of instance types.
        
-   For spot instances
    
    -   Cost optimization policy: Creates instances of the lowest-cost instance types among the specified instance types.
        
    -   Balanced distribution policy: Evenly creates instances across the specified zones.
        
    -   Capacity-optimized distribution policy: Creates instances from the optimal instance types and zones based on the inventory of spot instances.
        

Delivery stability

Highly affected by resource inventory.

Configurations with multiple zones and instance types effectively reduce the impact of resource inventory.

API response format

Returns the creation result synchronously.

Returns the creation result synchronously.

The following are sample scenarios for switching from the `RunInstances` operation to the `CreateAutoProvisioningGroup` operation to create instances:

-   If you previously used `RunInstances` to batch create instances of a single instance type in a single zone, you can switch to `CreateAutoProvisioningGroup`. After you switch, you only need to configure a combination of instance types and zones to batch create the instances.
    
-   If you previously configured a manual deployment plan when using `RunInstances`, you can switch to `CreateAutoProvisioningGroup`. This operation provides a one-click deployment capability across multiple zones, instance types, and disk configurations. It also offers various instance creation policies for you to choose from.
    
    For example, you may have previously created a plan that traverses multiple instance types and zones when calling `RunInstances` to improve the success rate of instance creation. After you switch to `CreateAutoProvisioningGroup`, you only need to configure multiple combinations of instance types and zones and select a suitable creation policy. The auto provisioning group then automatically batch creates the instances.
    

**Important**

The creation policies of auto provisioning groups have limits. You can create a maximum of 1,000 instances at a time. If you specify weights for instance types (`WeightedCapacity`), the maximum total weighted capacity for each creation is 10,000.

## Issues when creating instances with RunInstances

Due to the limits of the `RunInstances` operation, you may encounter the issues described in the following table when you create many instances.

**Issue**

**Description**

**Solution**

Limited batch creation capability

A single call to the RunInstances operation can create a maximum of 100 ECS instances.

To create more than 100 ECS instances, call this API operation multiple times in a loop or concurrently to meet your business requirements.

Insufficient stability for batch creation

A call to the RunInstances operation supports only a single zone and a single instance type. Therefore, when you batch create ECS instances, issues such as insufficient inventory, sales discontinuation, or usage limits for an instance type may occur. This can lead to the following situations:

-   Batch creation fails due to insufficient inventory of an instance type during a specific period.
    
-   The specified instance type can no longer be created because it is discontinued during a specific period.
    
-   The specified instance type is sold only in some zones.
    
-   The specified instance type can be used only with specific disk types.
    

-   Insufficient inventory is the main reason why batch creation of ECS instances fails. Therefore, Alibaba Cloud recommends that you first call the [DescribeAvailableResource](/help/en/ecs/api-describeavailableresource#doc-api-Ecs-DescribeAvailableResource) API operation to query the inventory of resources for specific instance types and zones. After you manually confirm multiple combinations of zones and instance types with sufficient inventory, you can then batch create the ECS instances. This complex creation method provides higher business delivery stability.
    
    Sample scenario: After you confirm multiple combinations of zones and instance types with sufficient inventory, you also need to build a suitable strategy for creating ECS instances. For example, you can create 100 ECS instances in sequence based on the order of the confirmed combinations. If the resource inventory of the first combination supports the creation of only 50 ECS instances, you need to use the second combination to try to create the remaining 50 instances.
    
-   Instance types have usage limits. You can call [DescribeAvailableResource](/help/en/ecs/api-describeavailableresource#doc-api-Ecs-DescribeAvailableResource) to query the limits and create your own fault tolerance plan to avoid impacts from changes in usage limits.
    
    **Note**
    
    You can also determine the limits based on the attributes of instance types provided in the documentation. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    
    Sample scenario: The `ecs.g6e.large` instance type supports only enterprise SSD (ESSD) disk types, and the `cn-beijing-x` zone does not support ESSD disk types.
    

Creation policy is too simple

The RunInstances operation supports only a single zone and a single instance type. If your business requires multi-zone deployment for disaster recovery or requires creating ECS instances at the lowest cost, you must build your own deployment plan to ensure successful instance deployment. A self-built deployment plan has the following issues:

-   High development costs. A self-built deployment plan needs to handle a series of issues. For example, how to successfully create ECS instances when inventory is insufficient, and how to ensure computing power while obtaining the lowest cost for spot instances during server scale-out.
    
-   Low stability and professionalism. For the resources provided by Alibaba Cloud, it is difficult for you to build a professional deployment plan on your own. You also cannot test the plan, which poses risks to the production environment.
    

Resolve the issues on your own or contact Alibaba Cloud for help.

## Benefits of auto provisioning groups

To address the issues that occur when you use the `RunInstances` API operation to batch create ECS instances, Alibaba Cloud provides auto provisioning groups. An auto provisioning group supports one-click deployment of an instance cluster across multiple billing methods, zones, and instance types. You can use an auto provisioning group to provide stable computing power, mitigate the instability caused by the reclamation mechanism of spot instances, and eliminate the need to manually create instances repeatedly. This section describes the benefits of auto provisioning groups.

**Benefit**

**Description**

Higher maximum number of ECS instances for batch creation

An auto provisioning group supports the creation of up to 1,000 ECS instances at a time.

Support for multiple zones, instance types, and disk types

An auto provisioning group lets you configure up to 10 combinations of instance types or zones and select up to 5 disk types. This helps you achieve high availability when you batch create ECS instances.

Sample scenario:

When you use the balanced distribution policy provided by an auto provisioning group to create ECS instances, you can configure multiple zones and instance types. According to this policy, the number of created instances should be relatively even across the zones. However, if creation fails in one of the zones, the auto provisioning group attempts to create the pending instances in other available zones.

If you specify multiple disk types, the auto provisioning group uses the specified order as the priority for each disk type. If a disk type is unavailable, the auto provisioning group automatically switches to the next one.

**Note**

If all specified disk types are unavailable, the auto provisioning group switches to another creation method and no longer attempts to use the current one.

Support for multiple instance creation policies

The following creation policies are provided for pay-as-you-go instances and spot instances:

-   For pay-as-you-go instances
    
    -   Cost optimization policy: Creates instances of the lowest-cost instance types among the specified instance types.
        
    -   Priority-based policy: Attempts to create instances based on the specified priority of instance types.
        
-   For spot instances
    
    -   Cost optimization policy: Creates instances of the lowest-cost instance types among the specified instance types.
        
    -   Balanced distribution policy: Evenly creates instances across the specified zones.
        
    -   Capacity-optimized distribution policy: Creates instances from the optimal instance types and zones based on the inventory of spot instances.
        

Improved availability of spot instances

Spot instances are increasingly used because of their low price. However, their price instability and the reclamation feature make them difficult to manage. You can use an auto provisioning group to improve the availability of spot instances while keeping costs low. You can do this in the following ways:

-   Select the default cost optimization policy. Each scale-out operation then attempts to create instances in ascending order of instance type price.
    
-   The resource inventories for different combinations of spot instance types and zones are isolated from each other. Configuring multiple instance types and zones reduces the probability that all combinations run out of inventory.
    
-   When you create an auto provisioning group, you can configure multiple alternative disk types to ensure that the auto provisioning group can automatically select suitable disk types during instance creation.
    
-   You can configure the `SpotInstancePoolsToUseCount` parameter to specify that spot instances are created from multiple instance pools with the lowest prices. This prevents an avalanche effect on computing power if instances of a specific type are reclaimed.
    

## Best practices for CreateAutoProvisioningGroup

This section provides a Java code sample for the CreateAutoProvisioningGroup API operation to help you quickly understand how to use it.

1.  Install the ECS SDK for Java and the Alibaba Cloud core library.
    
    For more information, see [SDK overview](/help/en/ecs/developer-reference/ecs-v2-0-sdk-overview).
    
2.  Write the Java code to call the CreateAutoProvisioningGroup API operation.
    
    The following is a code sample:
    
    ```
    import com.aliyun.ecs20140526.Client;
    import com.aliyun.ecs20140526.models.CreateAutoProvisioningGroupRequest;
    import com.aliyun.ecs20140526.models.CreateAutoProvisioningGroupResponse;
    import com.aliyun.teaopenapi.models.Config;
    import com.aliyun.teautil.models.RuntimeOptions;
    import com.google.gson.Gson;
    
    public class Test {
        public static void main(String[] args_) throws Exception {
            Config config = new Config()
                    .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                    .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))
                    .setEndpoint("ecs.cn-heyuan.aliyuncs.com");
            Client client = new Client(config);
    
            CreateAutoProvisioningGroupRequest.CreateAutoProvisioningGroupRequestLaunchTemplateConfig launchTemplateConfig = new CreateAutoProvisioningGroupRequest.CreateAutoProvisioningGroupRequestLaunchTemplateConfig()
                    .setVSwitchId("vsw-f8zadqudz*********")
                    .setInstanceType("ecs.s6-c1m1.small")
                    .setWeightedCapacity(1.0);
    
            CreateAutoProvisioningGroupRequest.CreateAutoProvisioningGroupRequestLaunchConfiguration launchConfiguration = new CreateAutoProvisioningGroupRequest.CreateAutoProvisioningGroupRequestLaunchConfiguration()
                    .setSecurityGroupId("sg-f8zf6vg51*********")
                    .setImageId("aliyun_3_x64_20G_alibase_20250629.vhd")
                    .setSystemDiskCategory("cloud_ssd")
                    .setSystemDiskSize(40);
            CreateAutoProvisioningGroupRequest createAutoProvisioningGroupRequest = new CreateAutoProvisioningGroupRequest()
                    .setAutoProvisioningGroupType("instant")
                    .setRegionId("cn-heyuan")
                    // Set the creation policy for spot instances.
                    .setSpotAllocationStrategy("lowest-price")
                    // Set the creation policy for pay-as-you-go instances.
                    .setPayAsYouGoAllocationStrategy("prioritized")
                    .setTotalTargetCapacity("5")
                    .setPayAsYouGoTargetCapacity("3")
                    .setSpotTargetCapacity("2")
                    .setLaunchConfiguration(launchConfiguration)
                    .setLaunchTemplateConfig(java.util.Arrays.asList(
                            launchTemplateConfig
                    ))
                    .setClientToken("0c593ea1-3bea******************");
            RuntimeOptions runtime = new RuntimeOptions();
            CreateAutoProvisioningGroupResponse response = client.createAutoProvisioningGroupWithOptions(createAutoProvisioningGroupRequest, runtime);
            System.out.println(new Gson().toJson(response.getBody()));
        }
    }
    ```
    
    The following is a sample JSON response:
    
    ```
    {
        "autoProvisioningGroupId": "apg-**************",
        "launchResults": {
            "launchResult": [
                {
                    "amount": 0,
                    "errorCode": "NoInstanceStock",
                    "errorMsg": "The instanceTypes are out of usage",
                    "instanceType": "ecs.s6-c1m1.small",
                    "spotStrategy": "NoSpot",
                    "zoneId": "cn-heyuan-b"
                },
                {
                    "amount": 2,
                    "instanceIds": {
                        "instanceId": [
                            "i-f8z8**************icn5",
                            "i-f8z8**************icn6"
                        ]
                    },
                    "instanceType": "ecs.s6-c1m1.small",
                    "spotStrategy": "SpotAsPriceGo",
                    "zoneId": "cn-heyuan-b"
                }
            ]
        },
        "requestId": "CDA21119-7CFD-5B40-A2D0-******8"
    }
    ```
    
    When you create an auto provisioning group by calling CreateAutoProvisioningGroup, you only need to set the configuration items for the batch instance creation and do not need to manage the creation process. The auto provisioning group creates the instances on a best-effort basis.
    
    **Note**
    
    Best-effort delivery means that if instances cannot be created with some of your configured resource combinations, the auto provisioning group automatically switches to other available resource combinations to continue the creation process. This creation method takes some time and the actual result may have a slight bias from the specified creation policy.
    

## References

-   Auto provisioning is a solution that helps you quickly deploy ECS instance clusters. After a simple configuration, you can automatically create ECS instances in batches. For more information, see [Auto provisioning overview](/help/en/ecs/user-guide/overview-46#concept-287169).
    
-   For more examples of auto provisioning group configurations, see [Auto provisioning group configuration examples](/help/en/ecs/user-guide/configure-an-auto-provisioning-group#concept-744276).
