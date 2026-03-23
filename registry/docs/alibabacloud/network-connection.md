This document introduces how to access TSDB instances through VPC networks and public networks.

## Access through VPC networks

The default network type supported by TSDB is VPC network. Alibaba Cloud provides a VPC access link for each TSDB instance created.

To protect the instance security, you must set an IP address whitelist first to obtain the VPC network address. For details about how to set the whitelist, see [Set the IP address whitelist](/help/en/time-series-database/latest/set-a-ip-address-whitelist).

Go to the instance’s **Instance Details** page, and in the **Basic Information** section view the VPC network address for the instance.

## Access through public networks

### Create a public access link

TSDB also supports accesses through public networks. To protect the instance security, you must first [Set the IP address whitelist](/help/en/time-series-database/latest/set-a-ip-address-whitelist) as well before to obtain the instance’s public network access link.

To access an TSDB instance through a public network (Internet), follow the steps below:

1.  Go to the **Basic Information** section of the **Instance Details** page, and in the **Public Network Address** field, click **Apply for Public Network Address**.
    
2.  On the whitelist settings page, enter the public IP addresses that are allowed to access the TSDB instance. If the whitelist is already set up, confirm the setting at this time.
    

**Note:** It takes two to three minutes to obtain the public access link. Before the link is shown, do not refresh the page.

### Release a public access link

If you do not need to access the TSDB instance through the public network, you are recommended to release the public access link to reduce the security maintenance cost, such as the cost of maintaining the public IP address whitelist.

In the **Public Network Address** field, click **Release Public Network Address** to release the public access link.
