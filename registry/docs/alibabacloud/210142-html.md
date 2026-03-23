Create a custom rule using Function Compute 2.0 to check CPU cores in ECS instances.

## Prerequisites

Activate Function Compute. For more information, see [Activate Function Compute](/help/en/doc-detail/253972.html#task-2076731).

**Note**

For more information about Function Compute billing, see [Billing overview](/help/en/functioncompute/fc-2-0/product-overview/billing-overview#concept-2557114).

## Background information

For more information about concepts, scenarios, and working principles of custom function rules, see [Definition and working principle of custom function rules](/help/en/cloud-config/latest/custom-rule-functions).

## Procedure

This topic shows how to write function code to check CPU cores in an ECS instance. If CPU cores are ≤2, the instance is compliant. Otherwise, it is non-compliant.

1.  Create a service.
    
    1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, click **Services & Functions**.
        
    3.  In the top menu bar, select a region, such as Singapore (Singapore).
        
    4.  On the **Services** page, click **Create Service**.
        
    5.  In the **Create Service** panel, enter a service **Name** and keep default values for other parameters.
        
    6.  Click **OK**.
        
2.  Create a function.
    
    1.  In the service created in [Step 1](#0a80c6d25cq31), click **Create Function**.
        
    2.  On the **Create Function** page, enter a **Function Name**. Set **Handler Type** to **Event Handler** and **Runtime** to **Python 3.10**. Keep default values for other parameters.
        
    3.  Click **Create**.
        
3.  Configure the function code.
    
    1.  Copy and paste the following code into the **index.py** file.
        
        ```
        # # !/usr/bin/env python
        # # -*- encoding: utf-8 -*-
        import json
        import logging
        
        from aliyunsdkcore.client import AcsClient
        from aliyunsdkcore.request import CommonRequest
        
        
        logger = logging.getLogger()
        # Compliance types
        COMPLIANCE_TYPE_COMPLIANT = 'COMPLIANT'
        COMPLIANCE_TYPE_NON_COMPLIANT = 'NON_COMPLIANT'
        COMPLIANCE_TYPE_NOT_APPLICABLE = 'NOT_APPLICABLE'
        # Configuration push types
        CONFIGURATION_TYPE_COMMON = 'COMMON'
        CONFIGURATION_TYPE_OVERSIZE = 'OVERSIZE'
        CONFIGURATION_TYPE_NONE = 'NONE'
        
        
        # Entry function to orchestrate and process business logic.
        def handler(event, context):
            """
            Handler function
            :param event: The event.
            :param context: The context.
            :return: The evaluation result.
            """
            # Function input parameters
            logger.info(f'Print function input parameters:{event}')
        
            # Validate event. You can copy this code.
            evt = validate_event(event)
            if not evt:
                return None
            creds = context.credentials
            rule_parameters = evt.get('ruleParameters')
            result_token = evt.get('resultToken')
            invoking_event = evt.get('invokingEvent')
            ordering_timestamp = evt.get('orderingTimestamp')
        
            # Resource configuration. This parameter has a value when rule is triggered by a configuration change. When you create a rule or manually run it, Cloud Config invokes the function to evaluate all resources one by one. If a resource configuration changes, Cloud Config automatically invokes the function to evaluate the resource based on the change.
            configuration_item = invoking_event.get('configurationItem')
            account_id = configuration_item.get('accountId')
            resource_id = configuration_item.get('resourceId')
            resource_type = configuration_item.get('resourceType')
            region_id = configuration_item.get('regionId')
            resource_name = configuration_item.get('resourceName')
        
            # Check whether pushed resource configuration size exceeds the limit (100 KB). If it does, call the resource details API to query complete data.
            configuration_type = invoking_event.get('configurationType')
            if configuration_type and configuration_type == CONFIGURATION_TYPE_OVERSIZE:
                resource_result = get_discovered_resource(creds, resource_id, resource_type, region_id)
                resource_json = json.loads(resource_result)
                configuration_item["configuration"] = resource_json["DiscoveredResourceDetail"]["Configuration"]
        
            # Evaluate resource. You must implement evaluation logic as needed. The following code is for reference only.
            compliance_type, annotation = evaluate_configuration_item(
                rule_parameters, configuration_item)
        
            # Set evaluation results. Format must comply with this example.
            evaluations = [
                {
                    'accountId': account_id,
                    'complianceResourceId': resource_id,
                    'complianceResourceName': resource_name,
                    'complianceResourceType': resource_type,
                    'complianceRegionId': region_id,
                    'orderingTimestamp': ordering_timestamp,
                    'complianceType': compliance_type,
                    'annotation': annotation
                }
            ]
        
            # Return evaluation results and write them to Cloud Config. You can copy this code.
            put_evaluations(creds, result_token, evaluations)
            return evaluations
        
        
        # Evaluate CPU cores for an ECS instance.
        def evaluate_configuration_item(rule_parameters, configuration_item):
            """
            Evaluation logic
            :param rule_parameters: The rule parameters.
            :param configuration_item: The configuration item.
            :return: The evaluation type.
            """
            # Initialize return value.
            compliance_type = COMPLIANCE_TYPE_COMPLIANT
            annotation = None
        
            # Get complete resource configuration.
            full_configuration = configuration_item['configuration']
            if not full_configuration:
                annotation = 'Configuration is empty.'
                return compliance_type, annotation
        
            # Convert to JSON.
            configuration = parse_json(full_configuration)
            cpu_count = configuration.get('Cpu')
            eq_count = rule_parameters.get('CpuCount')
            if cpu_count and cpu_count <= int(eq_count):
              annotation = json.dumps({"configuration":cpu_count,"desiredValue":eq_count,"operator":"Greater","property":"$.Cpu"})
              compliance_type = COMPLIANCE_TYPE_NON_COMPLIANT
              return compliance_type, annotation
            return compliance_type, annotation
        
        
        def validate_event(event):
            """
            Validate event.
            :param event: The event.
            :return: The JSON object.
            """
            if not event:
                logger.error('Event is empty.')
            evt = parse_json(event)
            logger.info('Loading event: %s .' % json.dumps(evt))
        
            if 'resultToken' not in evt:
                logger.error('ResultToken is empty.')
                return None
            if 'ruleParameters' not in evt:
                logger.error('RuleParameters is empty.')
                return None
            if 'invokingEvent' not in evt:
                logger.error('InvokingEvent is empty.')
                return None
            return evt
        
        
        def parse_json(content):
            """
            JSON type conversion
            :param content: The JSON string.
            :return: The JSON object.
            """
            try:
                return json.loads(content)
            except Exception as e:
                logger.error('Parse content:{} to json error:{}.'.format(content, e))
                return None
        
        
        # Return evaluation results and write them to Cloud Config. You can copy this code.
        def put_evaluations(creds, result_token, evaluations):
            """
            Call an API to return and write evaluation results.
            :param context: The Function Compute context.
            :param result_token: The callback token.
            :param evaluations: The evaluation results.
            :return: None
            """
            # The service role for Function Compute must have the AliyunConfigFullAccess permission.
            client = AcsClient(creds.access_key_id, creds.access_key_secret, region_id='cn-shanghai')
        
            # Create a request and set parameters. The domain is config.cn-shanghai.aliyuncs.com.
            request = CommonRequest()
            request.set_domain('config.cn-shanghai.aliyuncs.com')
            request.set_version('2020-09-07')
            request.set_action_name('PutEvaluations')
            request.add_body_params('ResultToken', result_token)
            request.add_body_params('Evaluations', evaluations)
            request.add_body_params('SecurityToken', creds.security_token)
            request.set_method('POST')
        
            try:
                response = client.do_action_with_exception(request)
                logger.info('PutEvaluations with request: {}, response: {}.'.format(request, response))
            except Exception as e:
                logger.error('PutEvaluations error: %s' % e)
        ```
        
        **Note**
        
        The preceding code checks CPU cores. To obtain parameter names for your rule, view core parameters of resource configuration (`configuration`) in the Cloud Config console. For more information, see [Step 6](/help/en/cloud-config/latest/view-the-information-about-a-resource#cd2dcb8121swf) in [View resource information](/help/en/cloud-config/latest/view-the-information-about-a-resource). For example, in the ****Core Configuration Information**** section of an ECS instance, click **View JSON** to retrieve the parameter for CPU cores, which is `Cpu`. Retrieve the expected value of `CpuCount` from `rule_parameters`.
        
        Function Compute evaluation results are submitted by your function through the [PutEvaluations](https://api.aliyun.com/api/Config/2020-09-07/PutEvaluations) API. Note the `DeleteMode` field. If delete mode is enabled, evaluation results not updated during the current evaluation are automatically deleted.
        
    2.  In the upper-left corner, click **Deploy Code**.
        
4.  Create a custom rule based on Function Compute.
    
    1.  Log on to the [Cloud Config console](https://confignew.console.alibabacloud.com).
        
    2.  Optional. In the upper-left corner, select an account group.
        
        This operation is required only if you are using a management account of a resource directory. Otherwise, you do not need to perform the operation.
        
    3.  In the left-side navigation pane, choose **Compliance & Audit** > **Rules**.
        
    4.  On the **Rules** page, click **Create Rule**.
        
    5.  On the **Select Create Method** page, select **Custom with Function Compute**, select **Function ARN**, and click **Next**.
        
        For **Region** of the function ARN, select **Singapore (Singapore)**. For **Service**, select the service created in [Step 1](#0a80c6d25cq31). For Function, select the function created in [Step 2](#973ac7105cfb1).
        
    6.  On the **Set Basic Properties** page, enter a **Rule Name**, click **Add Rule Parameter**, enter **CpuCount** for **Rule Parameter**, and enter **2** for **Expected Value**. Then set **Trigger** to **Configuration Change** and click **Next**.
        
        **Note**
        
        -   The rule parameter name must match the `rule_parameters` key in code in [Step 3](#09d7c7b05c6jz).
            
        -   When you create a rule, modify a rule, or re-evaluate resources using it, Cloud Config pushes all resource configurations of the specified resource type to Function Compute one by one and triggers the function to evaluate them.
            
        
    7.  On the **Set Scope** page, set **Resource Type** to **ECS Instance** and click **Next**.
        
        **Note**
        
        -   Select only resource types you want to evaluate to avoid triggering unnecessary evaluations.
            
        -   After you associate resources with the rule, it evaluates all resources of the specified type in your account.
            
        
    8.  On the **Set Remediation** page, click **Submit**.
        
        **Note**
        
        You can enable the **Set Remediation** switch and configure a custom remediation as prompted. For more information, see [Set a custom remediation](/help/en/cloud-config/latest/configure-manual-remediation).
        
5.  View the rule's detection result for CPU cores in the ECS instance.
    
    In the **Rules** list, view the number of non-compliant resources detected by the rule.
    
    **Note**
    
    Click the **Rule ID** or **Details** in the **Actions** column to view the **Latest Detection Data** list.
    
    If the **Non-compliant Resources** column for the rule displays **No Data**, but you confirm that resources matching the rule exist in your account, the function failed to be invoked or Function Compute failed to submit evaluation results to Cloud Config. On the **Invocation Log** tab of the function, click **Request Log** in the **Actions** column to identify the cause of failure and correct it. For more information, see [View invocation logs](/help/en/functioncompute/fc-2-0/user-guide/configure-the-logging-feature#section-z06-gdf-7c9).
    

## Related operations

-   [How do I configure a custom rule?](/help/en/cloud-config/latest/how-do-i-configure-a-custom-rule)
    
-   [What is the data structure of a custom rule?](/help/en/cloud-config/latest/what-is-the-data-structure-of-functions-that-can-be-used-to-create-custom-rules)
    
-   [Why is my custom rule function not triggered?](/help/en/cloud-config/latest/why-was-a-function-in-a-custom-rule-not-triggered)
    
-   [Why is the evaluation result still "No Data" after I run a custom rule?](/help/en/cloud-config/latest/why-are-no-evaluation-results-returned-after-i-execute-a-custom-rule)
    
-   [Why are the configured rules not evaluated?](/help/en/cloud-config/latest/why-are-my-resources-not-evaluated-after-i-configure-a-rule)
