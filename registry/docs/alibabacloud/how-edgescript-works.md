This topic describes how EdgeScript (ES) works, the model of scripts in ES, positions where the scripts are executed, script priorities, and execution and termination of scripts.

## How EdgeScript works

Scripts created by using ES are the same as the standard configurations specified in the CDN console. They process requests that are sent to CDN points of presence (POPs). The following figure shows the positions where scripts are executed. After a CDN POP receives a request, the POP processes the request based on the configurations in the Alibaba Cloud CDN console and scripts in ES. In a request processing pipeline, you can specify the position where a script is executed. A script can be executed before the configurations in the CDN console are applied (head) or after they are applied (foot).

![CDN](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3624277761/p557043.png)

## Model

Scripts in ES are executed based on the following model:

-   ES executes scripts to achieve different functions. Functions are triggered only when the conditions in scripts are met.
    
-   You can specify the position where a script is executed and the priority of the script in a request processing pipeline.
    
-   Scripts in ES are managed based on domain names.
    

## Positions and priorities

The positions and priorities for executing scripts are:

-   Positions
    
    You can execute a script at the head or foot of a request processing pipeline.
    
    -   Head: for authentication, blocking, and throttling.
        
    -   Foot: for cache settings, back-to-origin authentication, and A/B testing.
        
    
    ![ES](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4522036061/p62071.png)
    
-   Priorities
    
    If you want to execute more than one script at the head or foot of a request processing pipeline, you can assign priorities to these scripts to determine the execution order.
    

## Execution and termination

The execution and termination of scripts are defined based on the following rules:

-   Execution of scripts
    
    -   If the rule contains `if condition {}`, and `condition` is true, the rule model considers the rule as hit.
        
    -   If the rule contains `if condition {}`, and `condition` is false, or if the rule does not contain the `if condition {}` syntax, the rule model considers the rule as not hit.
        
-   Termination of scripts
    
    For scripts that are executed in the same position, you can choose to skip the subsequent scripts when a script is executed.
