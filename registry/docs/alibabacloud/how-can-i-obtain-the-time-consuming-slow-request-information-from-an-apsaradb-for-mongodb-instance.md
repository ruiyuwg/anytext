## Overview

This article describes how to obtain time-consuming slow request information for an apsaradb for MongoDB instance.

## Description

> Alibaba Cloud reminds you that:
> 
> -   Before you perform operations that may cause risks, such as modifying instance configurations or data, we recommend that you check the disaster recovery and fault tolerance capabilities of the instances to ensure data security.
> -   You can modify the configurations and data of instances including but not limited to Elastic Compute Service (ECS) and Relational Database Service (RDS) instances. Before the modification, we recommend that you create snapshots or enable RDS log backup.
> -   If you have authorized or submitted sensitive information such as the logon account and password in the Alibaba Cloud Management Console, we recommend that you modify such information in a timely manner.

Apsaradb for MongoDB records the details of slow requests in the system.profile collection of each Database. It enables slow request analysis by default. You can check the system.profile collection to obtain information about slow requests. For more information, see [analyze slow requests in apsaradb for MongoDB](/help/en/mongodb/use-cases/troubleshoot-the-high-cpu-utilization-of-apsaradb-for-mongodb#section-n2c-ltv-1gb).

## Application scope

-   ApsaraDB for MongoDB
