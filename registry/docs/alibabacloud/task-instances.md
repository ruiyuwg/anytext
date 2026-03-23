A task, such as an SQL task, is the basic compute unit in MaxCompute. This topic describes the basic operations on task instances in PyODPS.

## Basic operations

When a task is triggered, a MaxCompute instance is created for the task. For more information, see [Instance](/help/en/maxcompute/product-overview/task-instance#concept-vpx-s3b-5db). You can perform the following operations on MaxCompute instances:

-   `list_instances()`: obtains all instances in a project.
-   `exist_instance()`: checks whether an instance exists.
-   `get_instance()`: obtains an instance.
-   `stop_instance()`: stops an instance. You can stop only an instance that is running. If you attempt to stop an instance that is not running, an error is returned.
    
    **Note** You can also call the `stop()` method to stop an instance. For example, you can run `o.get_instance('instance id').stop`.
    

**Examples**

-   Obtain the ID of an instance.
    
    ```
    for instance in o.list_instances():
        print(instance.id)
    ```
    
-   Check whether an instance exists.
    
    ```
    print(o.exist_instance('my_instance_id'))
    ```
    

## Obtain the Logview URL of an instance

-   For an SQL task instance, you can call the `get_logview_address` method to obtain the Logview URL of the instance.
    
    ```
    # Execute an SQL statement to obtain an instance. Then, call the get_logview_address() method to obtain the Logview URL of the instance. 
    instance = o.run_sql('desc pyodps_iris')
    print(instance.get_logview_address())
    
    # Obtain the Logview URL of an instance that has the specified ID. 
    instance = o.get_instance('my_instance_id')
    print(instance.get_logview_address())
    ```
    
-   For a Machine Learning Platform for AI (PAI) instance, you must list the sub-instances of the instance and then obtain the Logview URLs of the sub-instances.
    
    ```
    instance = o.run_xflow('AppendID', 'algo_public', {'inputTableName': 'input_table', 'outputTableName': 'output_table'})
    for sub_inst_name, sub_inst in o.get_xflow_sub_instances(instance).items():
        print('%s: %s' % (sub_inst_name, sub_inst.get_logview_address()))
    ```
    

## Obtain the status of an instance

An instance can be in the `Running`, `Suspended`, or `Terminated` state. You can use the following methods to obtain the status of an instance:

-   `status`: obtains the status of an instance.
-   `is_terminated`: checks whether the execution of the current instance is complete.
-   `is_successful`: checks whether the execution of the current instance is successful. If the instance is running or fails, False is returned.

Sample code:

-   Obtain the status of an instance.
    
    ```
    instance=o.get_instance('my_instance_id')
    print(instance.status)
    print(instance.status.value)
    ```
    
    Sample response:
    
    ```
    Status.TERMINATED
    Terminated
    ```
    
-   Check whether the execution of an instance is complete.
    
    ```
    instance=o.get_instance('my_instance_id')
    from odps.models import Instance
    print(instance.status == Instance.Status.TERMINATED)
    ```
    
    If `True` is returned, the execution is complete.

**Note** You can call the `wait_for_completion` method to allow the system to return the status until the execution of the instance is complete. The effect of the `wait_for_success` method is similar to the effect of the wait\_for\_completion method. However, if you call the wait\_for\_success method, an error is returned if the instance fails.

## Perform operations on sub-instances

A running instance may contain one or more sub-instances. You can call the following methods to perform operations on sub-instances:

-   `get_task_names`: obtains all sub-instances. This method returns the names of all sub-instances.
    
    ```
    instance=o.get_instance('my_instance_id')
    instance.get_task_names()
    ```
    
    Sample response:
    
    ```
    ['jdbc_sql_task']
    ```
    
-   `get_task_result`: obtains the execution result of a sub-instance. This method returns the execution result of each sub-instance in the form of a dictionary. Sample code:
    -   Obtain the names of all sub-instances.
        
        ```
        instance=o.execute_sql('select*frompyodps_irislimit1')
        print(instance.get_task_names())
        ```
        
        Sample response:
        
        ```
        ['AnonymousSQLTask']
        ```
        
    -   Obtain the execution result of a sub-instance.
        
        ```
        print(instance.get_task_result('AnonymousSQLTask'))
        ```
        
        Sample response:
        
        ```
        "sepallength","sepalwidth","petallength","petalwidth","name"
        4.9,3.0,1.4,0.2,"Iris-setosa"
        ```
        
    -   Obtain the execution results of sub-instances.
        
        ```
        print(instance.get_task_results())
        ```
        
        Sample response:
        
        ```
        OrderedDict([('AnonymousSQLTask', '"sepallength","sepalwidth","petallength","petalwidth","name"\n4.9,3.0,1.4,0.2,"Iris-setosa"\n')])
        ```
        
-   `get_task_progress`: obtains the current progress of a sub-instance when the instance is running.
    
    ```
    instance=o.get_instance('20160519101349613gzbzufck2')
    while not instance.is_terminated():
        for task_name in instance.get_task_names():
            print(instance.id, instance.get_task_progress(task_name).get_stage_progress_formatted_string())
            time.sleep(10)
    ```
    
    Sample response:
    
    ```
    20160519101349613gzbzufck2 2016-05-19 18:14:03 M1_Stg1_job0:0/1/1[100%]
    ```
