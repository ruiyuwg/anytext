This topic describes how to access instances within an Alibaba Cloud virtual private cloud (VPC) by using Spark on MaxCompute.

## Access instances over VPCs

The ENI-based leased line approach offers enhanced stability and performance, and it also enables Internet access.

Keep in mind the following when utilizing this method:

-   An ENI-based leased line can be connected to a single VPC. If you need to access multiple VPCs simultaneously, establish interconnections among the VPCs.
    
-   The UID of the Alibaba Cloud account associated with the MaxCompute project running the Spark job must match the UID of the account owning the target VPC. If they differ, you will encounter an error during job execution: `You are not allowed to use this vpc - vpc owner and project owner must be the same person`.
    

For instructions on creating a VPC connection, see [Access over a VPC (dedicated connection)](/help/en/maxcompute/user-guide/network-connection-process/#section-tk5-9qp-hj7).
