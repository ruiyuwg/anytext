EdgeScript enables you to run JavaScript code on Alibaba Cloud CDN points of presence (POPs) to implement custom request handling logic. You can query EdgeScript monitoring data to check whether scripts are executed as expected and ensure the performance of custom logic.

**Note**

For more information, see [EdgeScript overview](/help/en/cdn/user-guide/edgescript-overview#task-2057648).

## Overview

You can go to the EdgeScript page to query the status of scripts. You can query the monitoring data of scripts and errors within the previous three months. The time range of each query can be up to one month.

**Monitoring item**

**Description**

**Status**

The status of each script. If you configure a script for an accelerated domain name, the script can be in one of the following states after a client request arrives at a POP:

-   NonExecution
    
    The script is not executed. For example, the script is set to be executed at the foot of the pipeline. This indicates that the script is executed only after all other scripts are executed. However, a request may be completed before it reaches the foot of the pipeline. For example, the request may be redirected or blocked by hotlink protection. In this case, the script at the foot of the pipeline is not executed.
    
-   ExecutedAndHit
    
    The script is executed and the execution result is return true. This indicates that the request matches the logic in the script.
    
-   ExecutedButNotHit
    
    The script is executed but the execution result is not return true. This indicates that the request does not match the logic in the script. For example, the script does not contain a return true statement or the script automatically returns a return false result.
    
-   Exception
    
    An error occurred during script execution. In most cases, the error is caused by logical errors in the script or timeouts of script execution. For example, a parameter that is passed to the request is set to an invalid value or the script is executed for more than 50 milliseconds. You can add the **\_es\_dbg** extension to the script and use the debugging tool in the upper-right corner of the EdgeScript page to debug the code. Then, you can use the debugging information to fix the error. For information about how to add the \_es\_dbg extension, see [Use the console to configure scripts](/help/en/cdn/user-guide/use-the-console-to-configure-scripts#task-2058232).
    
    **Note**
    
    You can set \_es\_dbg to any value. Make sure that the same value is included in client requests. For example, if you set \_es\_dbg to 123 in the Alibaba Cloud CDN console, client requests must also contain \_es\_dbg=123.
    

**Exception**

An error occurred during script execution. In this case, an error code is returned. Error codes and descriptions:

-   400: The script contains an unsupported function.
    
-   401: The number of parameters that are expected by the function is invalid.
    
-   402: The string type does not match the type that is specified in the function.
    
-   403: The digit type does not match the type that is specified in the function.
    
-   404: The dictionary type does not match the type that is specified in the function.
    
-   405: The Boolean type does not match the type that is specified in the function.
    
-   406: The function type does not match the type that is specified in the function.
    
-   407: The script timed out.
    
-   408: The script has been executed the maximum number of times allowed.
    
-   409: The script has looped the maximum number of times allowed.
    
-   410: The script has looped the maximum number of times allowed.
    
-   499: An unknown error occurred.
    

## Procedure

1.  Log on to the [Alibaba Cloud CDN](https://cdn.console.alibabacloud.com) console.
    
2.  In the left-side navigation pane, choose **Monitoring & Usage Analytics** > **EdgeScript**.
    
3.  On the **EdgeScript** page, click the **Status** or **Exception** tab.
    
4.  Select a domain name, specify a time range to query, and then click **Search**.
    
    The system returns scripts that are in one of the preceding states or error codes based on the specified query conditions.
    

## Related API operations

**API**

**Description**

[DescribeEsExecuteData](/help/en/cdn/api-describeesexecutedata#doc-api-Cdn-DescribeEsExecuteData)

Queries the execution status of scripts in EdgeScript.

[DescribeEsExceptionData](/help/en/cdn/api-describeesexceptiondata#doc-api-Cdn-DescribeEsExceptionData)

Queries the execution errors of scripts in EdgeScript.
