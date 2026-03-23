Modifies the information of a machine group.

## Request syntax

```
aliyunlog log update_machine_group --project_name=<value> --group_detail=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the update\_machine\_group command.

**Parameter**

**Type**

**Required**

**Example**

**Description**

\--project\_name

String

Yes

aliyun-test-project

The name of the project.

\--group\_detail

JSON Object

Yes

file://./machinegroup.json

The modified configuration file of the machine group.

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

1.  Modify a file named machinegroup.json in which the machine group name is group\_name2. The following example shows the content of the machinegroup.json file:
    
    ```
    {
      "machine_list": [
        "machine1",
        "machine2"
      ],
      "machine_type": "userdefined",
      "group_name": "group_name2",
      "group_type": "",
      "group_attribute": {
        "groupTopic": "topic x"
      }
    }
    ```
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    machine\_list
    
    The identifiers of the servers in the machine group.
    
    -   If you set the machineIdentifyType parameter to ip, enter the IP addresses of the servers in the machine group.
        
    -   If you set the machineIdentifyType parameter to userdefined, enter custom IDs. For more information about how to configure a custom ID, see [Create a custom ID-based machine group](/help/en/sls/create-a-user-defined-identity-machine-group#concept-gyy-k3q-zdb).
        
    
    machine\_type
    
    The type of the machine group identifier. Valid values:
    
    -   ip: The machine group uses IP addresses as identifiers.
        
    -   userdefined: The machine group uses custom IDs as identifiers.
        
    
    group\_name
    
    The name of the machine group. The name must meet the following requirements:
    
    -   The name must be unique in a project.
        
    -   The name can contain only lowercase letters, digits, hyphens (-), and underscores (\_).
        
    -   The name must start and end with a lowercase letter or a digit.
        
    -   The name must be 3 to 128 characters in length.
        
    
    group\_type
    
    The type of the machine group. Valid values: null.
    
    group\_attribute
    
    The attribute of the machine group. For more information about the group\_attribute parameter, see the following table.
    
    The following table describes the parameters in group\_attribute.
    
    **Parameter**
    
    **Description**
    
    groupTopic
    
    The topic of the machine group.
    
2.  Use the default account to modify the configuration file of a machine group named group\_name2.
    
    ```
    aliyunlog log update_machine_group --project_name="aliyun-test-project" --group_detail="file://./machinegroup.json"
    ```
    
3.  Query the information of the machine group. Run the following command:
    
    ```
    aliyunlog log get_machine_group --project_name="aliyun-test-project" --group_name="group_name2"
    ```
    
    The following output is returned:
    
    ```
    {
      "createTime": 1622105480,
      "groupAttribute": {
        "externalName": "",
        "groupTopic": "topic x",
        "osType": "",
        "policy": "",
        "region": ""
      },
      "groupName": "group_name2",
      "groupType": "",
      "lastModifyTime": 1622105480,
      "machineIdentifyType": "userdefined",
      "machineList": [
        "machine1",
        "machine2"
      ]
    }
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-updatemachinegroup#api-detail-45).

## API reference

[UpdateMachineGroup](/help/en/sls/developer-reference/api-sls-2020-12-30-updatemachinegroup)
