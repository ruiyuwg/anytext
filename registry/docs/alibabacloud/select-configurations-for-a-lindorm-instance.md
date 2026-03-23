Before you create a Lindorm instance, you must determine the instance configuration that can meet your business requirements based on factors such as scenarios, workloads, and prices. This topic describes how to select an engine, a storage type, a node specification, and the number of nodes for a Lindorm instance.

## Select a storage type

Lindorm uses LindormDFS as the underlying storage to decouple storage resources from computing resources. The storage capacity of a Lindorm instance is shared among multiple engines within the same instance. The latency of your access to data in storage varies with the storage type. For more information, see [Storage types](/help/en/lindorm/product-overview/select-a-storage-type#concept-1940836).

## Select an engine

Lindorm supports multiple engines and is compatible with the standard APIs of various open source software and services. It also supports SQL queries and provides capabilities such as the processing of time series data and text-based data query and analysis. Different engines are suitable for different business scenarios. You can select one or more engines based on your business requirements. For more information, see [Engines](/help/en/lindorm/product-overview/select-data-engines#concept-2555320).

## Select a node specification and the number of nodes

When you select a node specification and the number of nodes for a selected engine, you must consider other factors in addition to the read and write workloads. For more information about how to select the number and specification of nodes, see [Select the number and specification of nodes](/help/en/lindorm/product-overview/select-data-engines#section-o0g-izi-5ik).

**Note**

All node specifications supported by Lindorm are dedicated specifications. A dedicated Lindorm instance exclusively occupies all CPU and memory resources that are allocated to it. The performance of a dedicated Lindorm instance remains stable and is not affected by the other instances that are deployed on the same physical server.

## FAQ

When I purchase a Lindorm instance, do I need to select a higher specification and fewer nodes or a lower specification and more nodes if both options can meet my business requirements?

We recommend that you select a higher specification and fewer nodes for your Lindorm instance. Lindorm supports unlimited horizontal scaling capabilities. If access requests are evenly distributed among nodes, you can add nodes to mitigate issues such as heavy loads, high latency, and service jitters. If a large amount of data is requested or data is frequently accessed in a short period of time, the specification of a single node determines the capability that is required to handle hotspotting issues. In this case, a higher node specification provides strong anti-jitter capabilities and ensures higher overall service stability.
