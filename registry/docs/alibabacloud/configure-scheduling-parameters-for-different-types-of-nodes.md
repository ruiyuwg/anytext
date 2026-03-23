For most node types, you can define and assign values to parameters in the same way as for SQL nodes, such as ODPS SQL nodes. However, general Shell and PyODPS nodes handle scheduling parameters differently. This topic provides configuration examples for various node types.

## SQL nodes and batch synchronization nodes

The method for configuring scheduling parameters is the same for SQL nodes, such as ODPS SQL nodes, and for batch synchronization nodes. This method also applies to most other node types. This topic uses an ODPS SQL node as an example to demonstrate how to assign values to built-in system variables and custom parameters, and how to call them in your code.

**Note**

Some nodes may not support scheduling parameters. To determine if a node supports scheduling parameters, see the documentation for that specific node.

![系统参数和自定义参数赋值](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1599680561/p407198.png)As shown in the figure, assign values to parameters in the parameter assignment area. Then, reference the following variables in the code editing area: the built-in system variables var1 and var3, the custom parameters var2 and var4, and the constant var5. The following are assignment examples:

-   Assign the business time to the built-in system variable var1: `var1=$bizdate`
    
-   Assign the scheduling time to the built-in system variable var3: `var3=$cyctime`
    
-   Assign the business time to the custom parameter var2: `var2=${yyyymmdd}`
    
-   Assign the scheduling time to the custom parameter var4: `var4=$[yyyymmddhh24:mi:ss]`
    
-   Assign the constant 'abc' to the parameter var5: `var5=abc`
    

## PyODPS nodes

To prevent invasive code changes, PyODPS nodes do not support direct string replacement of defined variables using the `${param_name}` format in the code. Instead, before you execute the code, you must retrieve the scheduling parameters from the `args` global variable, which is a \`dict\` (dictionary) object. The method for assigning parameter values is the same as for other nodes.![Pyodps节点示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1599680561/p407200.png)As shown in the figure, assign values to parameters in the parameter assignment area. Then, reference the built-in parameter var1 and custom parameters var2 and var3 in the code editing area. After you add the dictionary object, the parameters are referenced as `args['var1']`, `args['var2']`, and `args['var3']`. The following are assignment examples:

-   Assign the business time to the built-in parameter var1: `var1=$bizdate`
    
-   Assign the business time to the custom parameter var2: `var2=${yyyymmdd}`
    
-   Assign the business time to the custom parameter var3: `var3=$[yyyymmdd]`
    

## General Shell node configuration example

For general Shell nodes, do not use custom names for variables. Instead, name the variables by their ordinal number, such as `$1`, `$2`, and `$3`, in ascending order. If you have 10 or more parameters, declare them using the `${10}` format.![Shell节点示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1599680561/p407203.png)As shown in the figure, assign values to parameters in the parameter assignment area. Then, define the built-in parameter $1 and custom parameters $2 and $3 in the code editing area. The following are assignment examples:

**Note**

For general Shell nodes, assign values to parameters using only expressions. You must separate multiple parameter values with spaces. The values are assigned to the defined parameters in sequential order. For example, in the figure above, the first value in the parameter assignment area, `$bizdate`, is assigned to the first defined parameter, $1.

-   Assign the business time to the built-in parameter $1: `$bizdate`
    
-   Assign the business time to the custom parameter $2: `${yyyymmdd}`
    
-   Assign the scheduling time to the custom parameter $3: `$[yyyymmdd]`
    

For more information about supported formats for scheduling parameter values, see [Supported formats for scheduling parameters](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters#concept-2185254). For the complete procedure to configure and use scheduling parameters, see [Configure and use scheduling parameters](/help/en/dataworks/user-guide/configure-and-use-scheduling-parameters#task-2187092).

## Batch synchronization example

For common application scenarios of scheduling parameters in Data Integration, see [Scenarios: Common application scenarios for scheduling parameters in Data Integration](/help/en/dataworks/user-guide/common-use-scenarios-of-scheduling-parameters#task-2247078).
