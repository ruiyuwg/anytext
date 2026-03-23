By default, paging operations return the result only on a single page. To obtain the complete results of a paging operation, you can use the `--pager` option to aggregate the paging results.

## Fields and descriptions

You can use the `--pager` option in Alibaba Cloud CLI to aggregate the array results of paging operations. This option contains the following fields:

**Note**

If the field values returned by the operation are different from the default field values, parsing errors may occur. We recommend that you manually map fields based on the returned data struct to ensure data accuracy and stability.

**Field**

**Description**

**Default value**

PageNumber

The number of the page to return.

`PageNumber`

PageSize

The maximum number of entries to return on each page.

`PageSize`

TotalCount

The total number of entries.

`TotalCount`

NextToken

The pagination token that is used in the next request to retrieve a new page of results.

`NextToken`

path

The [JMESPath](http://jmespath.org/) array of the data.

The path is automatically identified. For example, when you call the `DescribeInstances` API operation of Elastic Compute Service (ECS), the default value of `path` is `Instances.Instance`.

## Scenario

**Note**

Some operations support the `maxResult` parameter, which specifies the maximum number of entries to return per query. If you specify a value smaller than expected, the request frequency and processing time may be greatly increased. To optimize the query efficiency, we recommend that you specify a proper value for `maxResult` when you use the `--pager` option in Alibaba Cloud CLI.

1.  The `DescribeInstances` operation of ECS is a paging operation. By default, only the results on the first page of the instance list are returned.
    
    ```
    aliyun ecs DescribeInstances
    ```
    
2.  Sample response (partial):
    
    ```
    {
        "PageNumber": 1,
        "TotalCount": 4,
        "PageSize": 10,
        "RequestId": "6EA82E70-9750-4A97-A738-E021D8A57F07",
        "Instances": {
            "Instance": [
                {    
                    "InstanceId": "i-m5edv0cqkr9hawls****",
                    "ImageId": "win2012r2_64_dtc_9600_zh-cn_40G_alibase_20190318.vhd",
                    "SerialNumber": "f06857e8-7f3c-443a-9f88-8e84eb51****",
                    "Cpu": 1,
                    "Memory": 2048,
                    "DeviceAvailable": true,
                    "SecurityGroupIds": {
                        "SecurityGroupId": [
                            "sg-bp1fgviwol82z8ap****"
                        ]
                    }
                }
            ]
        }
    }
    ```
    
3.  After you enable aggregation for a paging operation, you can obtain the instance information on all pages returned from the operation at a time.
    
    ```
    aliyun ecs DescribeInstances --pager PageNumber=PageNumber PageSize=PageSize TotalCount=TotalCount path=Instances.Instance
    ```
    
    If a field value is the same as the default value, you do not need to specify an explicit value for the field. For example, the preceding command can be simplified:
    
    ```
    aliyun ecs DescribeInstances --pager
    ```
    
4.  After you run the command, aggregate results are returned. The following output shows a part of the result.
    
    **Note**
    
    Only the aggregated fields are returned. If you need to filter specific fields, set the filtering path to the aggregated path in [JMESPath](http://jmespath.org/). For more information, see [Extract parameters and tabulate output](/help/en/cli/filter-results-and-tabulate-output#concept-661998).
    
    ```
    {
        "Instances": {
            "Instance": [
                {    
                    "InstanceId": "i-m5edv0cqkr9hawls****",
                    "ImageId": "win2012r2_64_dtc_9600_zh-cn_40G_alibase_20190318.vhd",
                    "SerialNumber": "f06857e8-7f3c-443a-9f88-8e84eb51****",
                    "Cpu": 1,
                    "Memory": 2048,
                    "DeviceAvailable": true,
                    "SecurityGroupIds": {
                        "SecurityGroupId": [
                            "sg-bp1fgviwol82z8ap****"
                        ]
                    }
                }
            ]
        }
    }
    ```
