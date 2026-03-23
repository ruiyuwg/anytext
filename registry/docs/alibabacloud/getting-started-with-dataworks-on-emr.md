This topic describes how to use the combination of DataWorks and E-MapReduce (EMR) for data warehouse development and analysis. This topic also provides a case study on user profile analysis for you to experience the capabilities of DataWorks services, such as Data Integration, Data Studio, and Operation Center.

## **Experiment introduction**

To develop effective business management strategies, you must obtain basic profile data of website users based on their activities on websites. The basic profile data includes the geographical and social attributes of the website users. You can analyze profile data by time and location, enabling refined operations on website traffic. You can use the combination of DataWorks and EMR to complete data synchronization, data processing, data management, and data consumption.

**Note**

You must read [Experiment introduction](/help/en/emr/emr-on-ecs/getting-started/experimental-introduction) to have a deep understanding of the entire process of a user profile analysis experiment. This ensures that you can complete this tutorial.

## Procedure

1.  Step 1: [Prepare the environment](/help/en/emr/emr-on-ecs/getting-started/prepare-the-environment)
    
    Create an EMR cluster and a DataWorks workspace that are required for the tutorial, and configure the environment.
    
2.  Step 2: [Synchronize data](/help/en/emr/emr-on-ecs/getting-started/synchronize-data)
    
    Configure a data synchronization task in DataWorks to synchronize basic user information and website access logs of the users provided in the tutorial to an Object Storage Service (OSS) data source, and create tables by using EMR Hive nodes to query the synchronized data.
    
3.  Step 3: [Process data](/help/en/emr/emr-on-ecs/getting-started/process-data)
    
    Use EMR Hive nodes in DataWorks to process the data in the basic user information table and access log table that are synchronized to OSS to obtain the desired user profile data.
    
4.  Step 4: [Configure a monitor](/help/en/emr/emr-on-ecs/getting-started/configure-data-quality-monitoring)
    
    In DataWorks Data Quality, configure a monitor for the dwd\_log\_info\_di\_emr table that is generated after the synchronized data is processed.
    

## **FAQ**

**What do I do if I cannot find a cluster when I associate an EMR data source with a DataWorks workspace in the DataWorks console?**

Check whether the type of the cluster that you want to associate with the DataWorks workspace is supported by DataWorks. In addition, learn the limits and prerequisites for associating an EMR data source with a DataWorks workspace in the DataWorks console. For more information, see [Register an EMR cluster to DataWorks](/help/en/dataworks/user-guide/register-emr-cluster-to-dataworks). DataWorks does not allow you to run Flink jobs on EMR nodes, and does not support Dataflow clusters. You can use EMR Workflow to schedule Flink jobs. For information about EMR Workflow and Realtime Compute for Apache Flink, see [What is EMR Workflow?](/help/en/emr/emr-on-ecs/user-guide/what-is-emr-workflow) and [What is Alibaba Cloud Realtime Compute for Apache Flink?](/help/en/flink/realtime-flink/product-overview/what-is-alibaba-cloud-realtime-compute-for-apache-flink)
