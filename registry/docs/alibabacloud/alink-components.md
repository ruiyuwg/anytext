Alink is a machine learning framework designed for real-time data processing. It streamlines data processing and maximizes resource efficiency through component aggregation and optimization. Its innovative approach allows for batch task execution, minimizing data storage operations and delivering superior performance in real-time computing scenarios.

## Background information

Alink is a new-generation machine learning algorithm framework and component library developed by the Platform for AI (PAI) team based on Realtime Compute for Apache Flink. Alink components not only function as standalone units but can also be aggregated into groups. Grouping Alink nodes and configuring their resources enable batch execution at runtime, which eliminates intermediate data storage and enhances both execution efficiency and resource utilization.

Machine Learning Designer provides various Alink components, distinguished by a purple mark.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7130193371/p865804.png)

## **Usage notes**

Beyond basic usage as independent components, Alink components can be grouped together. When Alink nodes on the canvas are detected as groupable, you can click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7130193371/p865755.png) at the top of the canvas or use Shift+left-click to select multiple nodes. Then, right-click in an empty area and choose **Group Selected Nodes**.

Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7130193371/p865784.png) to configure the resources for the group.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7130193371/p874235.png)

**Note**

The settings for the Alink group takes precedence over the individual settings of each node within the group.

## **References**

-   [Create and manage pipelines](/help/en/pai/user-guide/create-and-manage-pipelines)
    
-   [Deploy a pipeline as an online service](/help/en/pai/user-guide/deploy-a-pipeline-as-an-online-service)
    
-   [Component reference: Overview of all components](/help/en/pai/user-guide/overview-of-all-components)
