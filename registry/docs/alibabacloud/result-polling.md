The return results of specific API operations of Alibaba Cloud services can change over time. You can use the result polling feature to poll return results and return data when a parameter changes to a specific value.

## Description of the \--waiter option

You can poll return results by using the `--waiter` option. The following table describes the parameters of this option.

**Parameter**

**Description**

expr

The [JMESPath](http://jmespath.org/) expression that specifies the parameter to be polled in the returned JSON data.

to

The expected value of the polled parameter.

## Example

-   Scenario
    
    After you run the command to create an Elastic Compute Service (ECS) instance, you call the `DescribeInstances` operation to query the details of the instance. After you use the `--waiter` option, Alibaba Cloud CLI polls the instance status at regular intervals. When the instance is created and started, the instance enters the `Running` state at which point Alibaba Cloud CLI stops polling results and returns the response of the `DescribeInstances` operation.
    
-   Sample command
    
    Run the following command to poll the instance status until the instance is in the `Running` state and then return results.
    
    ```
    aliyun ecs DescribeInstances --InstanceIds '["i-12345678912345678123"]' --waiter expr='Instances.Instance[0].Status' to='Running'
    ```
