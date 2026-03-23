Alibaba Cloud API operations return responses in JSON format, which can be difficult to read. This topic describes how to use the advanced filtering features of Alibaba Cloud CLI to extract specific fields from JSON responses and display them in a table.

## Description of the --output option

Alibaba Cloud CLI provides the `--output` option to help you extract and visualize specific fields from a response. By default, the output is displayed as a table.

The `--output` option includes the following parameters:

**Parameter**

**Description**

**Example**

cols

The table column names. Separate multiple column names with commas (,).

Format: `cols="<column1>,<column2>"`.

-   For `object` types, the column names must match the keys in the JSON response.
    
-   For `array` types, you can define custom names and must map them to the array index using a colon (:).
    

For example, cols="InstanceId,Status"\` for an `object`, or cols="name:0,type:1" for an `array`.

rows

A [JMESPath](http://jmespath.org/) expression used to query the data source for the table rows from the JSON response.

rows="Instances.Instance\[\]"

num

Specifies whether to display a row number column.

Valid values: `true` and `false`.

Default value: `false`.

The numbering starts from `0`.

num="true"

## Examples

### **Background**

The following examples demonstrate how to extract specific fields from an API operation's JSON response.

1.  Run the following command to query information about all ECS instances:
    
    ```
    aliyun ecs DescribeInstances
    ```
    
2.  Sample response:
    
    ```
    {
      "PageNumber": 1,
      "TotalCount": 2,
      "PageSize": 10,
      "RequestId": "2B76ECBD-A296-407E-BE17-7E668A609DDA",
      "Instances": {
        "Instance": [
          {
            "ImageId": "ubuntu_16_0402_64_20G_alibase_20171227.vhd",
            "InstanceTypeFamily": "ecs.xn4",
            "VlanId": "",
            "InstanceId": "i-1234567891234567****",
            "Status": "Stopped",
            "SecurityGroupIds": {
              "SecurityGroupId": [
                "sg-bp12345678912345****",
                "sg-bp98765432198765****"
              ]
            }
          },
          {
            "ImageId": "ubuntu_16_0402_64_20G_alibase_20171227.vhd",
            "InstanceTypeFamily": "ecs.xn4",
            "VlanId": "",
            "InstanceId": "i-abcdefghijklmnop****",
            "Status": "Running",
            "SecurityGroupIds": {
              "SecurityGroupId": [
                "sg-bp1abcdefghijklm****",
                "sg-bp1zyxwvutsrqpon****"
              ]
            }
          }
        ]
      }
    }
    ```
    

### **Example 1**

1.  Run the following command to extract the `RequestId` parameter from the preceding response. Because this parameter is a root-level element, you do not need to specify the `rows` parameter.
    
    ```
    aliyun ecs DescribeInstances --output cols=RequestId
    ```
    
2.  Sample output:
    
    ```
    RequestId
    ---------
    2B76ECBD-A296-407E-BE17-7E668A609DDA
    ```
    

### **Example 2**

1.  Run the following command to extract the `InstanceId` and `Status` parameters from the preceding response. Set the rows parameter to `Instances.Instance[]`, which is the JMESPath expression for the array containing these parameters. For more information about the JMESPath expressions, see [JMESPath Tutorial](http://jmespath.org/tutorial.html).
    
    ```
    aliyun ecs DescribeInstances --output cols="InstanceId,Status" rows="Instances.Instance[]"
    ```
    
2.  Sample output:
    
    ```
    InstanceId             | Status
    ----------             | ------
    i-12345678912345678123 | Stopped
    i-abcdefghijklmnopqrst | Running
    ```
    
3.  To display a row number column, set the num parameter to `true`. Sample output:
    
    ```
    Num | InstanceId             | Status
    --- | ----------             | ------
    0   | i-12345678912345678123 | Stopped
    1   | i-abcdefghijklmnopqrst | Running
    ```
    

### **Example 3**

1.  Run the following command to extract specific elements from the `SecurityGroupId` array. The JMESPath expression for this array is `Instances.Instance[].SecurityGroupIds.SecurityGroupId`.
    
    ```
    aliyun ecs DescribeInstances --output cols="sg1:0,sg2:1" rows="Instances.Instance[].SecurityGroupIds.SecurityGroupId"
    ```
    
2.  Sample output:
    
    ```
    sg1                     | sg2
    ---                     | ---
    sg-bp11234567891234**** | sg-bp19876543219876****
    sg-bp1abcdefghijklm**** | sg-bp1zyxwvutsrqpon****
    ```
