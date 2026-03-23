When you create a rule based on a managed rule or create a custom rule, you can configure custom remediation for the rule to use Function Compute to remediate non-compliant resources. If a resource that is associated with this rule is evaluated as **Non-compliant**, the template takes effect and the resource is remediated quickly.

## **Prerequisites**

Function Compute is activated. For more information, see [Activate Function Compute](/help/en/doc-detail/253972.html).

## Background information

This topic describes how to configure and execute custom remediation. The **ecs-running-instance-no-public-ip** managed rule is used in this example.

You can use the **ecs-running-instance-no-public-ip** managed rule to check whether a public IPv4 address or elastic IP address (EIP) is associated with a running Elastic Compute Service (ECS) instance. If a public IPv4 address or EIP is associated with an ECS instance, the evaluation result is Non-compliant. The ECS instances with which public IPv4 addresses or EIPs are associated are stopped.

## Procedure

1.  Log on to the [Cloud Config console](https://confignew.console.alibabacloud.com).
    
2.  Optional. In the upper-left corner, select an account group.
    
    This operation is required only if you are using a management account of a resource directory. Otherwise, you do not need to perform the operation.
    
3.  In the left-side navigation pane, choose **Compliance & Audit** > **Rules**.
    
4.  On the **Rules** page, click **Create Rule**.
    
5.  In the **Select Create Method** step, select **Based on managed rule**, select **ecs-running-instance-no-public-ip** from the template list, and then click **Next**.
    
6.  In the **Set Basic Properties** step, use the default values for the parameters and click **Next**.
    
7.  In the **Set Effective Scope** step, use the default values for the parameters and click **Next**.
    
8.  In the **Set Remediation** step, turn on **Set Remediation**, select **Function Compute**, set the **Invoke Type** parameter to **Manual Remediation**. Then, specify the remediation function in the **Function ARN** section and click **Submit**.
    
    **Important**
    
    -   If you set Invoke Type to Automatic Remediation, Cloud Config automatically remediates configurations of non-compliant resources based on your settings. This may affect business continuity. Therefore, **Invoke Type** is set to **Manual Remediation** by default. We recommend that you retain the default setting.
        
    -   If the remediation does not affect your business, you can set **Invoke Type** to **Automatic Remediation**. In this case, Cloud Config automatically remediates configurations of non-compliant resources based on your settings.
        
    
    Click **Create New Function** to create a service and a remediation function in the Function Compute console. For more information, see [Quickly create a function](/help/en/functioncompute/fc-2-0/create-a-function-in-the-function-compute-console).
    
    When you create a remediation function, set the **Function Type** parameter to **Event Function** and the **Runtime** parameter to **Python 3**. You can configure other parameters based on your business requirements. Sample code:
    
    ```
    #!/usr/bin/env python
    # -*- encoding: utf-8 -*-
    import json
    from aliyunsdkcore.client import AcsClient
    from aliyunsdkcore.acs_exception.exceptions import ClientException
    from aliyunsdkcore.acs_exception.exceptions import ServerException
    from aliyunsdkcore.auth.credentials import AccessKeyCredential
    from aliyunsdkcore.auth.credentials import StsTokenCredential
    from aliyunsdkecs.request.v20140526.StopInstanceRequest import StopInstanceRequest
    from aliyunsdkcore.auth.credentials import AccessKeyCredential
    from aliyunsdkcore.auth.credentials import StsTokenCredential
    from aliyunsdkkms.request.v20160120.DecryptRequest import DecryptRequest
    
    # -*- coding: utf-8 -*-
    
    import logging
    import json
    
    logger = logging.getLogger()
    
    
    def handler(event, context):
        get_resources_non_compliant(event, context)
    
    
    def get_resources_non_compliant(event, context):
        resources = parse_json(event)
        for resource in resources:
            remediation(resource, context)
    
    
    def parse_json(content):
        """
        Parse string to json object
        :param content: json string content
        :return: Json object
        """
        try:
            return json.loads(content)
        except Exception as e:
            logger.error('Parse content:{} to json error:{}.'.format(content, e))
            return None
    
    
    def remediation(resource, context):
        logger.info(resource)
        region_id = resource['regionId']
        account_id = resource['accountId']
        resource_id = resource['resourceId']
        resource_type = resource['resourceType']
        config_rule_id = resource['configRuleId']
        if resource_type == 'ACS::ECS::Instance' and config_rule_id == 'cr-f8a1626622af005d****':
            print(region_id, account_id, resource_id, resource_type, config_rule_id)
            stop_ecs_instance(context, region_id, resource_id)
    
    def stop_ecs_instance(context, resource_region_id, resource_id):
        logger.info("Note: Start to stop the ECS instance.{}{}".format(resource_region_id, resource_id))
    
        creds = context.credentials
        client = AcsClient(creds.access_key_id, creds.access_key_secret, region_id=resource_region_id)
    
        request = StopInstanceRequest()
        request.set_accept_format('json')
        request.set_InstanceId("i-hp3f6lofgrnml5mt****")
        request.set_StoppedMode("KeepCharging")
        request.add_query_param('SecurityToken', creds.security_token)
    
        response = client.do_action_with_exception(request)
        logger.info(response)
    ```
    
    **Note**
    
    For more information about the latest sample code of the remediation function, see [aliyun-config-remediation.py](https://github.com/aliyun/alibabacloud-config-samples/blob/master/remediation/aliyun-config-remediation.py).
    
    The remediation function contains the following main subfunctions:
    
    -   handler: the default entry to the remediation function. The subfunction is invoked when Cloud Config triggers custom remediation. You must define `handler` when you create the remediation function.
        
    -   `get_resources_non_compliant`: the parser of the non-compliant resource.
        
    -   `remediation`: the entry to the custom remediation setting. You can configure this subfunction based on your business requirements. For example, if an ECS instance is evaluated as non-compliant against the ecs-running-instance-no-public-ip managed rule, the ECS instance is stopped based on the custom remediation setting.
        
9.  Execute remediation manually.
    
    1.  On the **Rules** page, find the rule that you want to manage, and click **Remediation Detail** in the **Remediation Template** column.
        
    2.  On the **Remediation Detail** tab, click **Perform Manual Remediation** next to **Remediation Detail**.
        
        In the **Execution Result List** section, you can view the remediation results. You can also view the reason why a resource fails to be remediated.
        
        **Note**
        
        On the **Remediation Detail** tab, click the function ARN next to **Remediation Template** to go to the **Code** tab of the remediation function in the Function Compute console.
        

## **References**

For more information about the function code and authorization configurations in multi-account scenarios, see [Automatically remediate non-compliant resources across accounts in an enterprise by using a resource directory](/help/en/cloud-config/latest/automatic-correction-of-non-compliant-resources-in-enterprise-multi-account-scenarios).
