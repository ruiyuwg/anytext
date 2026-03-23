MaxCompute Studio allows you to develop Java user-defined functions (UDFs), MapReduce programs, and Graph programs. Before the development, you must create a MaxCompute Java module. This topic describes how to create a MaxCompute Java module.

## Prerequisites

A MaxCompute project is connected. For more information, see [Manage project connections](/help/en/maxcompute/user-guide/manage-project-connections#task-2456405).

## Procedure

1.  In the top navigation bar of IntelliJ IDEA, choose **File** > **New** > **Module**.
    
2.  In the left-side navigation pane of the **New Module** dialog box, click **MaxCompute Java**.
    
3.  Configure the directory of the installed Java Development Kit (JDK) as the directory of the **Module SDK** file and click **Next**.
    
4.  Specify **Module name** and click **Finish**.
    

## Result

After the preceding steps are complete, MaxCompute Studio automatically creates a Maven module and completes the following actions:

-   Introduces MaxCompute-related dependencies. For more information, see the POM file that contains the dependencies.
    
-   Creates the examples folder to store sample code. For more information, see [Module directory](/help/en/maxcompute/user-guide/overview-19#section-zwu-pc2-jhk).
    
-   Creates the warehouse folder to store the data required for local debugging. For more information, see [warehouse directory](/help/en/maxcompute/user-guide/overview-19#section-5mz-uc0-nhs).
    

## What to do next

After you create a MaxCompute Java module, you can develop Java programs. For more information, see the following topics:

-   [Develop a UDF](/help/en/maxcompute/user-guide/develop-a-udf#task-2457023)
    
-   [Develop a MapReduce program](/help/en/maxcompute/user-guide/develop-a-mapreduce-program#task-2457360)
    
-   [Query unstructured data](/help/en/maxcompute/user-guide/query-unstructured-data#task-2457539)
    
-   [Develop Graph](/help/en/maxcompute/user-guide/develop-graph#task-2457636)
