This topic describes how to configure naming rules to generate unique sequential Elastic Compute Service (ECS) instance names or hostnames during scale-outs. You can use the names to manage ECS instances in an efficient manner.

## Background information

-   Auto Scaling can execute scaling rules to create one or more ECS instances at the same time or in different batches. You can configure naming rules for ECS instances that are created during scale-outs in launch templates or scaling configurations.
    
-   The method that is used to configure naming rules varies based on the scenarios. In this topic, the method that is suitable for **Scenario 1** is used to show how to configure naming rules.
    
    **Scenario**
    
    **Method**
    
    **References**
    
    **Scenario 1**: All ECS instances that are created in a scaling group during scale-outs must have unique sequential names or hostnames.
    
    Configure the naming format based on the naming rules in scaling configurations. In this scenario, you cannot use a launch template to configure the naming format for ECS instances.
    
    **Important**
    
    ECS instance names or hostnames are sequentially generated, but not necessarily generated in a consecutive manner. For example, the hostnames of the ECS instances that are created in a scaling group during a scale-out are ess-node-0999, ess-node-1000, and ess-node-1002. The ess-node-1001 ECS instance does not start as expected. Therefore, the instance is considered unhealthy and removed. As a result, Auto Scaling creates another ECS instance named ess-node-1002.
    
    -   [Method 1: Configure the naming rule for ECS instances in the Auto Scaling console](#section-0jb-015-7jn)
        
    -   [Method 2: Configure the naming rule for ECS instances by calling API operations](#section-d02-v2r-b6k)
        
    
    **Scenario 2**: The names or hostnames of the ECS instances that are created in a scaling group during the same scale-out must be sequential and unique. The names or hostnames can be used by ECS instances that are created in another scale-out in the scaling group.
    
    Configure the naming format for ECS instances based on the specified ranking order.
    
    [Batch configure sequential names or hostnames for multiple instances](/help/en/ecs/user-guide/batch-configure-sequential-names-or-hostnames-for-multiple-instances#concept-2004153)
    
    **Scenario 3**: No requirements are imposed on the names or hostnames of ECS instances that are created during scale-outs in a scaling group.
    
    Configure a custom name or hostname for the ECS instances.
    
    For example, you can specify "hostname" as the hostname for all ECS instances that are created during scale-outs.
    
    N/A
    

## Method 1: Configure the naming rule for ECS instances in the Auto Scaling console

1.  Create a scaling group.
    
    For more information, see [Create scaling groups](/help/en/auto-scaling/user-guide/manage-scaling-groups#section-l2v-k5s-gnr).
    
2.  Create and enable a scaling configuration.
    
    For more information, see [Create a scaling configuration of the ECS type](/help/en/auto-scaling/user-guide/create-scaling-configurations-of-the-ecs-type/#concept-25890-zh). In the **Advanced Settings** section of the **Create Scaling Configuration** page, configure the **Instance Name** and **Host Name** parameters to specify the naming format.
    
    In this example, the **Instance Name** parameter is set to `ess-node-(AUTO_INCREMENT)[0,3]` and the **Host Name** parameter is set to `ess-node-(AUTO_INCREMENT)[0,3]-ecshost`.
    
    **Note**
    
    In this example, the ECS instance names or hostnames are sequentially increased. For more information, see [(Recommended) Increment by fixed value](#section-176-bta-c6q). If you want to dynamically generate sequential instance names or hostnames, see [Dynamic sorting by extended sequential value](#section-05e-tib-3s5).
    
3.  Enable the scaling group.
    
    For more information, see [Enable a scaling group](/help/en/auto-scaling/scaling-group-enable-a-scaling-group#task-2118188).
    
4.  Create and execute a scaling rule.
    
    1.  Create a scaling rule.
        
        For more information, see [Create scaling rules](/help/en/auto-scaling/user-guide/manage-scaling-rules#section-bry-qyu-qdr).
        
        In this example, a simple scaling rule is created. Auto Scaling creates three ECS instances when the rule is executed.
        
    2.  Execute the scaling rule.
        
        For more information, see [Execute scaling rules](/help/en/auto-scaling/user-guide/manage-scaling-rules#section-n9s-pdg-o6k).
        
        After the scale-out is complete, three ECS instances that have the following instance names and hostnames are added to the scaling group:
        
        -   Instance names: ess-node-000, ess-node-001, and ess-node-002
            
        -   Hostnames: ess-node-000-ecshost, ess-node-001-ecshost, and ess-node-002-ecshost
            
        

## Method 2: Configure the naming rule for ECS instances by calling API operations

1.  Call the CreateScalingGroup API operation to create a scaling group.
    
    For more information, see [CreateScalingGroup](/help/en/auto-scaling/developer-reference/api-ess-2022-02-22-createscalinggroup#main-107864).
    
2.  Call the CreateScalingConfiguration API operation to create a scaling configuration.
    
    For more information, see [CreateScalingConfiguration](/help/en/auto-scaling/developer-reference/api-ess-2022-02-22-createscalingconfiguration#main-107864). In the **Request parameters** section, configure the InstanceName and HostName parameters.
    
    In this example, the InstanceName parameter is set to `ess-node-(AUTO_INCREMENT)[0,3]` and the HostName parameter is set to `ess-node-(AUTO_INCREMENT)[0,3]-ecshost`.
    
    **Note**
    
    In this example, the ECS instance names or hostnames are sequentially increased. For more information, see [(Recommended) Increment by fixed value](#section-176-bta-c6q). If you want to dynamically generate sequential instance names or hostnames, see [Dynamic sorting by extended sequential value](#section-05e-tib-3s5).
    
3.  Call the EnableScalingGroup API operation to enable the scaling group.
    
    For more information, see [EnableScalingGroup](/help/en/auto-scaling/developer-reference/api-ess-2022-02-22-enablescalinggroup#main-107864).
    
4.  Create and execute a scaling rule.
    
    1.  Call the CreateScalingRule API operation to create a scaling rule.
        
        For more information, see [CreateScalingRule](/help/en/auto-scaling/developer-reference/api-ess-2022-02-22-createscalingrule#main-107864).
        
        In this example, a simple scaling rule is created. Auto Scaling creates three ECS instances when the rule is executed.
        
    2.  Call the ExecuteScalingRule API operation to execute the scaling rule.
        
        For more information, see [ExecuteScalingRule](/help/en/auto-scaling/developer-reference/api-ess-2022-02-22-executescalingrule#main-107864).
        
        After the scale-out is complete, three ECS instances that have the following instance names and hostnames are added to the scaling group:
        
        -   Instance names: ess-node-000, ess-node-001, and ess-node-002
            
        -   Hostnames: ess-node-000-ecshost, ess-node-001-ecshost, and ess-node-002-ecshost
            
        

## (Recommended) Increment by fixed value

Instance names and hostnames must be in the following format: name\_prefix(AUTO\_INCREMENT)\[begin\_number,bits\]name\_suffix.

**Note**

The naming rules for instance names and hostnames follow the same logic. The following table describes only the format of hostnames.

Table 1. Parameters

**Field**

**Required**

**Description**

**Example**

name\_prefix

Yes

The prefix of the hostname.

ess-node-

(AUTO\_INCREMENT)

Yes

The fixed value that specifies the sorting mode.

(AUTO\_INCREMENT)

\[begin\_number,bits\]

Yes

The sequential values of hostnames. After you configure this parameter, the sequential values of hostnames are increased by the specified fixed value.

**Important**

The \[begin\_number,bits\] field cannot contain spaces. By default, the sequential names of hostnames are increased based on a fixed value. If Auto Scaling fails to start an ECS instance in a scaling group during a scale-out, Auto Scaling removes the ECS instance from the scaling group and creates another ECS instance. In this case, the hostnames of the ECS instances in the scaling group may have an intermittent increasing pattern.

-   begin\_number: the start value of the sequential value. Valid values: 0 to 999999.
    
    -   The first time Auto Scaling creates instances in a scaling group, the start value that you specify takes effect. If you do not specify a start value, 0 is used.
        
    -   The next time Auto Scaling creates instances in the scaling group, the start value increases from the maximum sequential value of existing hostnames in the scaling group.
        
-   bits: the number of digits in the sequential value. Valid values: 1 to 6. If the number of digits in the specified begin\_number value is greater than the value of the bits field, the bits field is automatically set to 6.
    

**Note**

We recommend that you set the bits field to 3 or larger. Otherwise, the upper limit of the sequential values may be reached in a short period of time. If Auto Scaling needs to create more ECS instances after the upper limit is reached, an error is reported and the scale-out is stopped. In this case, you must reconfigure the rules for generating hostnames.

\[0,6\]

name\_suffix

No

The suffix of the hostname.

\-ecshost

Table 2. Sample hostnames

**Example**

**Existing hostname with the maximum sequential value**

**Hostnames of three added ECS instances**

**Description**

ess-node-(AUTO\_INCREMENT)\[0,3\]-ecshost

N/A

ess-node-000-ecshost, ess-node-001-ecshost, and ess-node-002-ecshost

The number of digits in all sequential values is the bits value. The first time Auto Scaling creates instances in a scaling group, the sequential value starts from the begin\_number value and sequentially increases based on the number of created instances.

-   ess-node-(AUTO\_INCREMENT)\[\]-ecshost
    
-   ess-node-(AUTO\_INCREMENT)\[,\]-ecshost
    

N/A

ess-node-000000-ecshost, ess-node-000001-ecshost, and ess-node-000002-ecshost

If you do not configure the begin\_number or bits field, the default value of the begin\_number field is 0 and the default value of the bits field is 6.

ess-node-(AUTO\_INCREMENT)\[99,1\]-ecshost

ess-node-000099-ecshost

ess-node-000100-ecshost, ess-node-000101-ecshost, and ess-node-000102-ecshost

-   The next time Auto Scaling creates instances in a scaling group, the sequential value increases from the maximum sequential value of existing hostnames in the scaling group.
    
-   If the number of digits in the specified begin\_number value is greater than the value of the bits field, the bits field is automatically set to 6.
    

ess-node-(AUTO\_INCREMENT)\[0,2\]-ecshost

ess-node-99-ecshost

An error is reported and the scale-out is stopped.

-   The next time Auto Scaling creates instances in a scaling group, the sequential value increases from the maximum sequential value of existing hostnames in the scaling group.
    
-   If Auto Scaling needs to create more ECS instances after the upper limit is reached, an error is reported and the scale-out is stopped. In this case, you must reconfigure the rules for generating hostnames.
    

ess-node-(AUTO\_INCREMENT)\[0,4\]

ess-node-0998-ecshost

ess-node-0999, ess-node-1000, and ess-node-1002

-   The next time Auto Scaling creates instances in a scaling group, the sequential value increases from the maximum sequential value of existing hostnames in the scaling group.
    
-   By default, the sequential value automatically increases. If an ECS instance in a scaling group cannot be started, Auto Scaling removes the instance from the scaling group and creates another instance. Therefore, the hostnames of ECS instances in the scaling group may not be consecutively increased.
    

## Dynamic sorting by extended sequential value

Instance names and hostnames must be in the following format: name\_prefix(AUTO\_INCREMENT)\[begin\_number,bits\]name\_suffix.

**Note**

The naming rules for instance names and hostnames follow the same logic. The following table describes only the format of hostnames.

Table 3. Parameters

**Field**

**Required**

**Description**

**Example**

name\_prefix

Yes

The prefix of the hostname.

ess-node-

(ess\_extend\_begin,ess\_extend\_bits)

Yes

The extended sequential value of the hostname. When the base sequential value of existing hostnames in a scaling group is equal to the maximum sequential value, one value is added to the extended sequential value. Then, the base sequential value increases from 0 again until the upper limit is reached.

-   ess\_extend\_begin: the start value of the extended sequential value. Valid values: 0 to ZZZ. Each valid value ranges from 0 to 9, a to z, and A to Z. For example, if one value is added to 9, a is obtained. If one value is added to z, A is obtained.
    
    -   The first time Auto Scaling creates instances in a scaling group, the start value that you specify takes effect. If you do not specify a start value, 0 is used.
        
    -   The next time Auto Scaling creates instances in a scaling group, the start value increases from the maximum sequential value of existing hostnames in the scaling group.
        
-   ess\_extend\_bits: the number of digits in the extended sequential value. Valid values: 1 to 3. Default value: 3.
    

**Important**

If Auto Scaling needs to create more ECS instances when the upper limits of the base and extended sequential values are reached, an error is returned and the scale-out is stopped. In this case, you must reconfigure the rules for generating hostnames.

The (ess\_extend\_begin,ess\_extend\_bits) field cannot contain spaces. If the number of digits in the specified ess\_extend\_begin value is greater than the bits value, the bits field is automatically set to 3.

(0,3)

\[begin\_number,bits\]

Yes

The base sequential value of the hostname. After you configure this field, the base sequential values of hostnames are increased to the maximum value. Then, one value is added to the extended sequential value and the base sequential value increases from 0 again until the upper limit is reached.

**Important**

By default, hostnames are sequentially increased. If Auto Scaling fails to start an ECS instance in a scaling group during a scale-out, Auto Scaling removes the ECS instance from the scaling group and creates another ECS instance. In this case, the hostnames of the ECS instances in the scaling group may have an intermittent increasing pattern.

-   begin\_number: the start value of the base sequential value. Valid values: 0 to 999999.
    
    -   The first time Auto Scaling creates instances in a scaling group, the start value that you specify takes effect. If you do not specify a start value, 0 is used.
        
    -   The next time Auto Scaling creates instances in a scaling group, the start value increases from the maximum sequential value of existing hostnames in the scaling group.
        
-   bits: the number of digits in the base sequential value. Valid values: 1 to 6. Default value: 6.
    

**Important**

-   If the sum of the maximum base sequential value of existing hostnames and the number of instances that you want to create in a scaling group is greater than or equal to the maximum base sequential value, the hostnames of the ECS instances in the scaling group may have an intermittent increasing pattern. To prevent intermittent increments, we recommend that you specify at least three digits for the base sequential value.
    
-   If Auto Scaling needs to create more ECS instances when the upper limits of base and extended sequential values are reached, an error is returned and the scale-out is stopped. In this case, you must reconfigure the rules for generating hostnames.
    

The \[begin\_number,bits\] field cannot contain spaces. If the number of digits in the specified begin\_number value is greater than the bits value, the bits field is automatically set to 6.

\[0,6\]

name\_suffix

No

The suffix of the hostname.

\-ecshost

Table 4. Sample hostnames

**Example**

**Existing hostname with the maximum sequential value**

**Hostnames of three added ECS instances**

**Description**

ess-node-(0,3)\[0,3\]-ecshost

N/A

ess-node-000000-ecshost, ess-node-000001-ecshost, and ess-node-000002-ecshost

The first time Auto Scaling creates instances in a scaling group, the sequential values of hostnames are specified based on the following rules:

-   Extended sequential value: The number of digits in the extended sequential value is the ess\_extend\_bits value. The start value of the extended sequential value is the ess\_extend\_begin value. If the base sequential value reaches the maximum value, one value is added to the extended sequential value and the base sequential value increases from 0 again.
    
-   Base sequential value: The number of digits in the base sequential value is the bits value. The base sequential value increases from the begin\_number value based on the number of ECS instances that you want to scale out. If the base sequential value reaches the maximum value, one value is added to the extended sequential value and the base sequential value increases from 0 again.
    

-   ess-node-()\[\]-ecshost
    
-   ess-node-(,)\[,\]-ecshost
    

N/A

ess-node-000000000-ecshost, ess-node-000000001-ecshost, and ess-node-000000002-ecshost

-   Extended sequential value: If you do not configure the ess\_extend\_begin or ess\_extend\_bits field, the default value of the ess\_extend\_begin field is 0 and the default value of the ess\_extend\_bits field is 3.
    
-   Base sequential value: If the begin\_number field or the bits field is not specified, the default value of the begin\_number field is 0 and the default value of the bits field is 6.
    

ess-node-(0,1)\[0,1\]-ecshost

ess-node-08-ecshost

ess-node-10-ecshost, ess-node-11-ecshost, and ess-node-12-ecshost

-   The next time Auto Scaling creates instances in a scaling group, the base sequential value increases from the maximum sequential value of existing hostnames in the scaling group.
    
-   If the sum of the maximum base sequential value of existing hostnames and the number of instances that you want to create in a scaling group is greater than or equal to the maximum base sequential value, the hostnames of the ECS instances in the scaling group may have an intermittent increasing pattern. To prevent intermittent increments, we recommend that you specify at least three digits for the base sequential value.
    

ess-node-(0,1)\[0,1\]-ecshost

ess-node-Z9-ecshost

An error is reported and the scale-out is stopped.

-   The next time Auto Scaling creates instances in a scaling group, the base sequential value increases from the maximum sequential value of existing hostnames in the scaling group.
    
-   If Auto Scaling needs to create more ECS instances after the upper limits of extended sequential values and base sequential values are reached, an error is reported and the scale-out is stopped. In this case, you must reconfigure the rules for generating hostnames.
    

ess-node-(0,1)\[0,3\]

ess-node-0099-ecshost

ess-node-0100, ess-node-0101, and ess-node-0103

-   The next time Auto Scaling creates instances in a scaling group, the base sequential value increases from the maximum sequential value of existing hostnames in the scaling group.
    
-   By default, the sequential values of hostnames increase based on an increasing pattern. If an ECS instance in a scaling group cannot be started, Auto Scaling removes the instance from the scaling group and creates another instance. Therefore, the hostnames of ECS instances in the scaling group may not be consecutively increased.
    

ess-node-(0,1)\[99,1\]-ecshost

ess-node-0000099-ecshost

ess-node-0000100-ecshost, ess-node-0000101-ecshost, and ess-node-0000102-ecshost

-   The next time Auto Scaling creates instances in a scaling group, the base sequential value increases from the maximum sequential value of existing hostnames in the scaling group.
    
-   If the number of digits in the specified begin\_number value is greater than the value of the bits field, the bits field is automatically set to 6.
