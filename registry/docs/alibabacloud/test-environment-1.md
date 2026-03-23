This test compares the performance of an open source self-built HBase cluster with the performance of a Lindorm cluster in multiple scenarios.

## Environment configuration

-   The ECS instance on which the test client runs, Lindorm cluster, and the self-built HBase cluster are deployed in the same zone within the virtual private cloud (VPC).
    

-   The version of the self-managed HBase cluster is 1.4.9.
    
-   The version of LindormTable is 2.5.3.7.
    

## Configuration of the self-built HBase cluster

**Configuration item**

**Value**

Core node specification

16 cores, 32 GB of memory (ecs.c5.4xlarge)

Number of core nodes

3

Disk size per core node

3.2TB

Disk type of core nodes

Ultra disk

Primary node specification

4c8g

## Configuration of the Lindorm cluster

**Configuration item**

**Value**

Node Spec of Wide Table Engine (HBase/Cassandra APIs)

16-Core CPU, 32 GB Memory (Dedicated)

Wide Table Nodes

3

Storage Space

4800 GB

Storage Type

Standard

## Configuration of the ECS instance on which the test client runs

**Configuration item**

**Value**

Instance Type

ecs.c5.4xlarge

Quantity

1
