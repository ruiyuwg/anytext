This topic provides answers to some frequently asked questions about a dry-run instance.

-   [What is a dry-run instance?](#section-e96-l29-h2g)
-   [Why does a dry-run instance exist?](#section-npr-7ft-fb7)
    1.  [Scenario 1: An instance is scheduled to run on a specific day every week or every month](#section-q20-1gf-d4e)
    2.  [Scenario 2: An instance is generated in real time but is deprecated](#section-nzy-6rz-uyp)
    3.  [Scenario 3: The status of an instance is set to successful](#section-gc7-uvg-qi8)
    4.  [Scenario 4: The property of an instance is dry run](#section-jzc-ll3-mdm)
    5.  [Scenario 5: An instance is not selected for a temporary workflow](#section-7pl-6xy-0rg)
    6.  [Troubleshoot dry runs for nodes that are scheduled on a daily basis](#section-vpb-qbi-rj2)

## What is a dry-run instance?

A dry-run instance refers to an instance that is normally scheduled and successfully run but has no operational logs and execution duration. A dry-run instance does not process data.

## Why does a dry-run instance exist?

## Scenario 1: An instance is scheduled to run on a specific day every week or every month

For a node that is scheduled to run on a specific day every week or on a specific day every month, the scheduling system runs the node only on that day every week or month. On the other days, dry-run instances are generated but the scheduling system does not actually run the node. You must confirm the specific day on which a node is scheduled to run.

**Note** If you want the scheduling system to actually run an auto triggered instance, you must set the scheduled time of the corresponding node to a point in time that is more than 10 minutes after the node is deployed. Alternatively, you can specify yesterday for the data timestamp and use a data backfill node to backfill data. This way, an auto triggered instance can run today as scheduled.

Solution to specifying the data timestamp when you use a data backfill node to backfill data for a node scheduled by week or month to prevent from generating dry-run instances

If a node is scheduled to run on the first day of every month, we recommend that you set the data timestamp of a data backfill node to the end of every month. If a node is scheduled to run on Monday of every week, we recommend that you set the data timestamp of a data backfill node to Sunday of every week.

View the scheduled time and data timestamp of the auto triggered instance on the current day. ![Dry-run instances that are generated after the data backfill operation](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7879014361/p297629.png)

## Scenario 2: An instance is generated in real time but is deprecated

In this example, in the Schedule section on the Properties tab, Start Instantiation is set to Immediately After Deployment to generate auto triggered instances for a node. The scheduling system runs only the instances of the node whose scheduled time is more than 10 minutes after the node is deployed. For the instances of the node whose scheduled time is within 10 minutes after the deployment time of the node, the scheduling system does not actually run these instances but generates dry-run instances. The status of the instances is Deprecated real time generated task. For more information, see [Configure time properties for a node to immediately generate an instance](/help/en/dataworks/user-guide/configure-immediate-instance-generation-for-a-node#concept-w3k-fkw-tfb).

## Scenario 3: The status of an instance is set to successful

After you set the status of a failed instance to successful, the scheduling system does not actually run the instance and continues to run the instances of the descendant node of the current node.Succeeded The status of the instance is Instance Set Successfully.

## Scenario 4: The property of an instance is dry run

In the Schedule section on the Properties tab in DataStudio, check whether Recurrence is set to Dry Run for a node.

## Scenario 5: An instance is not selected for a temporary workflow

In this example, Node C depends on Node B, and Node B depends on Node A. If you want to backfill data for Nodes A and C, the status of Node B is Unselected instance in temporary workflow.

## Troubleshoot dry runs for nodes that are scheduled on a daily basis

If a node is scheduled on a daily basis, check whether Recurrence is set to Dry Run for the node in the Schedule section on the Properties tab.

**Notice** T+1: indicates that the scheduling system runs nodes on the second day by using the data that is generated on the current day.
