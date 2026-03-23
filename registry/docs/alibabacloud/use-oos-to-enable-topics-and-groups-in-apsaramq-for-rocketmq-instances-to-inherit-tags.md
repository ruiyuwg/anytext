You can create a custom template in the CloudOps Orchestration Service (OOS) console and execute the template to enable topics and groups in a Message Queue for Apache RocketMQ instance to inherit tags from the instance.

## **Limits**

By default, OOS deployed in a region can be used to manage resources only in this region. For example, OOS deployed in the China (Hangzhou) region can be used to manage ECS instances only in this region. However, OOS provides a method to manage resources deployed in other regions. If you want to call API operations in other regions, specify the region ID in the ACS::ExecuteAPI action. We recommend that you do not use this method. Therefore, in this example, you must make sure that the region in which OOS is deployed is the same as the region in which the Message Queue for Apache RocketMQ instance you want to manage resides. For more information about the limits on OOS, see [Limits](/help/en/oos/product-overview/limits#topic817).

## Procedure

1.  Log on to the [OOS console](https://oos.console.alibabacloud.com/).
    
2.  Create a child template named Ons\_topicExtendInstanceTags.
    
    For information about the sample template, see the [Child template: Update tags of topics in a Message Queue for Apache RocketMQ instance based on the instance ID and other input conditions](#section-udz-m5q-xb1) section in this topic. For information about how to create a template, see [Create a template](/help/en/oos/user-guide/create-a-template#topic-1869776).
    
3.  Create a child template named Ons\_groupExtendInstanceTags.
    
    For information about the sample template, see the [Child template: Update tags of groups in a Message Queue for Apache RocketMQ instance based on the instance ID and other input conditions](#section-as8-7cs-2xt) section in this topic. For information about how to create a template, see [Create a template](/help/en/oos/user-guide/create-a-template#topic-1869776).
    
4.  Create a parent template named RocketMQInstanceTagInherit in which the child templates are nested.
    
    For information about the sample template, see the [Parent template: Update tags of topics and groups in all Message Queue for Apache RocketMQ instances that reside in a specific region based on input conditions](#section-0bu-44z-z0h) section in this topic. For information about how to create a template, see [Create a template](/help/en/oos/user-guide/create-a-template#topic-1869776).
    
5.  Create an execution for the parent template RocketMQInstanceTagInherit.
    
    You must complete the following configurations:
    
    -   Select the region in which tags that need to be inherited reside.
        
    -   Select the tags that need to be inherited.
        
    -   Select the types of resources that need to inherit tags.
        
    -   Specify whether to overwrite the values of existing tags that have the same keys as the tags to be inherited, but different values.
        
    
    For more information about executions, see [Overview](/help/en/oos/user-guide/execution-overview#topic445).
    
6.  Log on to the [Message Queue for Apache RocketMQ console](https://ons.console.alibabacloud.com) and check whether topics and groups in the specified Message Queue for Apache RocketMQ instances inherit the tags of the instances.
    

## Child template: Update tags of topics in a Message Queue for Apache RocketMQ instance based on the instance ID and other input conditions

Template name: Ons\_topicExtendInstanceTags

Template content:

```
FormatVersion: OOS-2019-06-01
Description: A template used for tag inheritance.
Parameters:
  regionId:
    Type: String
    Description:
      en: The id of region
      zh-cn: The region ID.
    Label:
      en: Region
      zh-cn: The region name.
    AssociationProperty: RegionId
    Default: '{{ ACS::RegionId }}'
  instanceId:
    Type: String
    Description:
      en: The id of OnsInstance
      zh-cn: The ID of the Message Queue for Apache RocketMQ instance.
    Label:
      en: InstanceId
      zh-cn: The ID of the Message Queue for Apache RocketMQ instance.
  tagKeys:
    Type: List
    Description: The tag keys.
  isUpdate:
    Type: Boolean
    Description: Specifies whether to overwrite the values of existing tags.
    Default: false
RamRole: ''
Tasks:
  - Name: getOnsInstanceAndTags
    Action: ACS::ExecuteAPI
    Description: ListTagResources
    Properties:
      Service: ONS
      API: ListTagResources
      Parameters:
        RegionId: '{{ regionId }}'
        ResourceId:
          - '{{instanceId}}'
        ResourceType: instance
    Outputs:
      onsTags:
        Type: Json
        ValueSelector: '.TagResources | map(select( .TagKey | test("^(?!acs).*"))) | map(select(.TagKey as $tagKey | {{tagKeys}} | index($tagKey) >=0)) '
  - Name: getTopicAndTags
    Action: ACS::ExecuteAPI
    Description: OnsTopicList
    Properties:
      Service: Ons
      API: OnsTopicList
      Parameters:
        RegionId: '{{ regionId }}'
        InstanceId: '{{instanceId}}'
    Outputs:
      updateTopicAndTags:
        Type: List
        ValueSelector: .Data.PublishInfoDo[] | {"Topic":.Topic, "Tags":.Tags}
  - Name: tagResources
    Action: ACS::ExecuteAPI
    Description: TagTopics
    Properties:
      Service: Ons
      API: TagResources
      Parameters:
        RegionId: '{{ regionId }}'
        ResourceId:
          Fn::Jq:
            - All
            - .Topic
            - '{{ACS::TaskLoopItem}}'
        Tag:
          Fn::If:
            - '{{isUpdate}}'
            - Fn::Jq:
                - All
                - '.[] |{"Key":.TagKey, "Value": .TagValue} '
                - '{{getOnsInstanceAndTags.onsTags}}'
            - Fn::Jq:
                - All
                - '.Tags.Tag as $topicTags | {{getOnsInstanceAndTags.onsTags}} | map(select(.TagKey as $tagKey | [$topicTags[].Key] | index($tagKey) <0)) |.[] |{"Key":.TagKey, "Value": .TagValue}'
                - '{{ACS::TaskLoopItem}}'
        ResourceType: topic
        InstanceId: '{{instanceId}}'
    Outputs:
      reqResult:
        Type: Json
        ValueSelector: .RequestId
    Loop:
      RateControl:
        Mode: Concurrency
        MaxErrors: 100
        Concurrency: 1
      Items: '{{getTopicAndTags.updateTopicAndTags}}'
      Outputs:
        tagResult:
          AggregateType: Fn::ListJoin
          AggregateField: reqResult
```

## Child template: Update tags of groups in a Message Queue for Apache RocketMQ instance based on the instance ID and other input conditions

Template name: Ons\_groupExtendInstanceTags

Template content:

```
FormatVersion: OOS-2019-06-01
Description: A template used for tag inheritance.
Parameters:
  regionId:
    Type: String
    Description:
      en: The id of region
      zh-cn: The region ID.
    Label:
      en: Region
      zh-cn: The region name.
    AssociationProperty: RegionId
    Default: '{{ ACS::RegionId }}'
  instanceId:
    Type: String
    Description:
      en: The id of OnsInstance
      zh-cn: The ID of the Message Queue for Apache RocketMQ instance.
    Label:
      en: InstanceId
      zh-cn: The ID of the Message Queue for Apache RocketMQ instance.
  tagKeys:
    Type: List
    Description: The tag keys.
  isUpdate:
    Type: Boolean
    Description: Specifies whether to overwrite the values of existing tags.
    Default: false
RamRole: ''
Tasks:
  - Name: getOnsInstanceAndTags
    Action: ACS::ExecuteAPI
    Description: ListTagResources
    Properties:
      Service: ONS
      API: ListTagResources
      Parameters:
        RegionId: '{{ regionId }}'
        ResourceId:
          - '{{instanceId}}'
        ResourceType: instance
    Outputs:
      onsTags:
        Type: Json
        ValueSelector: '.TagResources | map(select( .TagKey | test("^(?!acs).*"))) | map(select(.TagKey as $tagKey | {{tagKeys}} | index($tagKey) >=0)) '
  - Name: getGroupAndTags
    Action: ACS::ExecuteAPI
    Description: OnsGroupList
    Properties:
      Service: Ons
      API: OnsGroupList
      Parameters:
        RegionId: '{{ regionId }}'
        InstanceId: '{{instanceId}}'
    Outputs:
      updateGroupAndTags:
        Type: List
        ValueSelector: .Data.SubscribeInfoDo[] | {"Group":.GroupId, "Tags":.Tags}
  - Name: tagResources
    Action: ACS::ExecuteAPI
    Description: TagGroups
    Properties:
      Service: Ons
      API: TagResources
      Parameters:
        RegionId: '{{ regionId }}'
        ResourceId:
          Fn::Jq:
            - All
            - .Group
            - '{{ACS::TaskLoopItem}}'
        Tag:
          Fn::If:
            - '{{isUpdate}}'
            - Fn::Jq:
                - All
                - '.[] |{"Key":.TagKey, "Value": .TagValue} '
                - '{{getOnsInstanceAndTags.onsTags}}'
            - Fn::Jq:
                - All
                - '.Tags.Tag as $groupTags | {{getOnsInstanceAndTags.onsTags}} | map(select(.TagKey as $tagKey | [$groupTags[].Key] | index($tagKey) <0)) |.[] |{"Key":.TagKey, "Value": .TagValue}'
                - '{{ACS::TaskLoopItem}}'
        ResourceType: group
        InstanceId: '{{instanceId}}'
    Outputs:
      reqResult:
        Type: Json
        ValueSelector: .RequestId
    Loop:
      RateControl:
        Mode: Concurrency
        MaxErrors: 100
        Concurrency: 1
      Items: '{{getGroupAndTags.updateGroupAndTags}}'
      Outputs:
        tagResult:
          AggregateType: Fn::ListJoin
          AggregateField: reqResult
```

## Parent template: Update tags of topics and groups in all Message Queue for Apache RocketMQ instances that reside in a specific region based on input conditions

Template name: RocketMQInstanceTagInherit

Template content:

```
FormatVersion: OOS-2019-06-01
Description: A template used for tag inheritance.
Parameters:
  regionIds:
    Type: List
    Description:
      en: The id of region
      zh-cn: The region ID.
    Label:
      en: Region
      zh-cn: The region name.
    AssociationProperty: RegionId
  tags:
    Type: List
    AssociationProperty: Tags
    AssociationPropertyMetadata:
      ResourceType: ALIYUN::MQ::INSTANCE
    Description: The tags that you want topics and groups to inherit from the Message Queue for Apache RocketMQ instances to which the topics and groups belong. 
  resourceTypes:
    Type: List
    Description: The types of resources that need to inherit tags.
    AllowedValues:
      - topic
      - group
  isUpdate:
    Type: Boolean
    Description: Specifies whether to overwrite the values of existing tags that have the same keys as the tags to be inherited, but different values. 
    Default: false
RamRole: ''
Tasks:
  - Name: getOnsInstance
    Action: ACS::ExecuteAPI
    Description: OnsInstanceInServiceList
    Properties:
      Service: ONS
      API: OnsInstanceInServiceList
      Parameters:
        RegionId: '{{ACS::TaskLoopItem}}'
    Outputs:
      onsInstance:
        Type: List
        ValueSelector: '.Data.InstanceVO[] |. + {"RegionId": "{{ACS::TaskLoopItem}}" }'
    Loop:
      RateControl:
        Mode: Concurrency
        MaxErrors: 100
        Concurrency: 1
      Items: '{{regionIds}}'
      Outputs:
        allOnsInstances:
          AggregateType: Fn::ListJoin
          AggregateField: onsInstance
  - Name: isTagTopic
    Action: ACS::Choice
    Description:
      en: Choose next task by resource type
      zh-cn: Select the task that you want to run based on the resource type.
    Properties:
      DefaultTask: isTagGroup
      Choices:
        - When:
            Fn::Equals:
              - true
              - Fn::Jq:
                  - First
                  - contains(["topic"])
                  - '{{resourceTypes}}'
          NextTask: tagTopic
  - Name: tagTopic
    Action: ACS::Template
    Description:
      en: Update topic tags by ons instance tags
      zh-cn: Update tags of topics based on the tags of the Message Queue for Apache RocketMQ instances to which the topics belong.
    Properties:
      TemplateName: Ons_topicExtendInstanceTags
      Parameters:
        regionId:
          Fn::Jq:
            - First
            - .RegionId
            - '{{ACS::TaskLoopItem}}'
        instanceId:
          Fn::Jq:
            - First
            - .InstanceId
            - '{{ACS::TaskLoopItem}}'
        tagKeys:
          Fn::Jq:
            - All
            - .[].Key
            - '{{tags}}'
        isUpdate: '{{isUpdate}}'
    Loop:
      RateControl:
        Mode: Concurrency
        MaxErrors: 100
        Concurrency: 1
      Items:
        Fn::Jq:
          - All
          - .[][]
          - '{{getOnsInstance.allOnsInstances}}'
      Outputs:
        tagResult:
          AggregateType: Fn::ListJoin
          AggregateField: reqResult
  - Name: isTagGroup
    Action: ACS::Choice
    Description:
      en: Choose next task by resource type
      zh-cn: Select the task that you want to run based on the resource type.
    Properties:
      DefaultTask: ACS::END
      Choices:
        - When:
            Fn::Equals:
              - true
              - Fn::Jq:
                  - First
                  - contains(["group"])
                  - '{{resourceTypes}}'
          NextTask: tagGroup
  - Name: tagGroup
    Action: ACS::Template
    Description:
      en: Update snapshot tags by ecs instance tags
      zh-cn: Update tags of groups based on the tags of the Message Queue for Apache RocketMQ instances to which the groups belong.
    Properties:
      TemplateName: Ons_groupExtendInstanceTags
      Parameters:
        regionId:
          Fn::Jq:
            - First
            - .RegionId
            - '{{ACS::TaskLoopItem}}'
        instanceId:
          Fn::Jq:
            - First
            - .InstanceId
            - '{{ACS::TaskLoopItem}}'
        tagKeys:
          Fn::Jq:
            - All
            - .[].Key
            - '{{tags}}'
        isUpdate: '{{isUpdate}}'
    Loop:
      RateControl:
        Mode: Concurrency
        MaxErrors: 100
        Concurrency: 1
      Items:
        Fn::Jq:
          - All
          - .[][]
          - '{{getOnsInstance.allOnsInstances}}'
      Outputs:
        tagResult:
          AggregateType: Fn::ListJoin
          AggregateField: reqResult
```
