If your MaxCompute Project is protected by an IP Address Whitelist, you may encounter errors with Data Analysis features like cost calculation, data download, Dimension Table usage, and data upload. To prevent these errors, add the IP addresses for the Data Analysis service to the Project's IP Address Whitelist.

## Usage notes

-   To learn how to check or manage the IP Address Whitelist for your MaxCompute Project, see [Manage IP Address Whitelists](/help/en/maxcompute/security-and-compliance/manage-ip-address-whitelists#section-fc5-b65-nfl).
    
-   [The IP addresses in this document](#section-dgv-d2y-86m) are only for **Data Analysis** features such as cost calculation, data download, Dimension Table usage, and data upload. If you use an **Exclusive Resource Group for Scheduling** to run MaxCompute Nodes in Data Analysis, you must also add the IP addresses of the Exclusive Resource Group for Scheduling to the MaxCompute IP Address Whitelist. For more details on this requirement, see [Appendix: Whitelisting an Exclusive Resource Group for Scheduling](#section-lws-o3l-cmw). For instructions on configuring the IP Address Whitelist, see [Manage IP Address Whitelists](/help/en/maxcompute/security-and-compliance/manage-ip-address-whitelists#task-2330709).
    

## Data analysis IP whitelist

Add the Data Analysis CIDR blocks for your DataWorks Workspace Region to your MaxCompute Project's IP Address Whitelist. The following table maps Regions to their corresponding CIDR blocks for Data Analysis.

**Region**

**IP whitelist**

**China (Hangzhou)**

100.64.0.0/10,11.193.102.0/24,11.193.215.0/24,11.194.110.0/24,11.194.73.0/24,118.31.157.0/24,47.97.53.0/24,11.196.23.0/24,47.99.12.0/24,47.99.13.0/24,114.55.197.0/24,11.197.246.0/24,11.197.247.0/24

**China (Shanghai)**

11.193.109.0/24,11.193.252.0/24,47.101.107.0/24,47.100.129.0/24,106.15.14.0/24,10.117.28.203,10.143.32.0/24,10.152.69.0/24,10.153.136.0/24,10.27.63.15,10.27.63.38,10.27.63.41,10.27.63.60,10.46.64.81,10.46.67.156,11.192.97.0/24,11.192.98.0/24,11.193.102.0/24,11.218.89.0/24,11.218.96.0/24,11.219.217.0/24,11.219.218.0/24,11.219.219.0/24,11.219.233.0/24,11.219.234.0/24,118.178.142.154,118.178.56.228,118.178.59.233,118.178.84.74,120.27.160.26,120.27.160.81,121.43.110.160,121.43.112.137,100.64.0.0/10,10.117.39.238

**China (Shenzhen)**

100.106.46.0/24,100.106.49.0/24,10.152.27.0/24,10.152.28.0/24,11.192.91.0/24,11.192.96.0/24,11.193.103.0/24,100.64.0.0/10,120.76.104.0/24,120.76.91.0/24,120.78.45.0/24,47.106.63.0/26,47.106.63.128/26,47.106.63.192/26,47.106.63.64/26

**China (Chengdu)**

11.195.52.0/24,11.195.55.0/24,47.108.22.0/24,100.64.0.0/10

**China (Zhangjiakou)**

11.193.235.0/24,47.92.22.0/24,100.64.0.0/10

**China (Hong Kong)**

10.152.162.0/24,11.192.196.0/24,11.193.11.0/24,100.64.0.0/10,47.89.61.0/24,47.91.171.0/24,11.193.118.0/24,47.75.228.0/24,47.56.45.0/25,47.244.92.128/25,47.101.109.0/24

**Singapore**

100.106.10.0/24,100.106.35.0/24,10.151.234.0/24,10.151.238.0/24,10.152.248.0/24,11.192.153.0/24,11.192.40.0/24,11.193.8.0/24,100.64.0.0/10,47.88.147.0/24,47.88.235.0/24,11.193.162.0/24,11.193.163.0/24,11.193.220.0/24,11.193.158.0/24,47.74.162.0/24,47.74.203.0/24,47.74.161.0/24,11.197.188.0/24

**China (Beijing)**

100.106.48.0/24,10.152.167.0/24,10.152.168.0/24,11.193.50.0/24,11.193.75.0/24,11.193.82.0/24,11.193.99.0/24,100.64.0.0/10,47.93.110.0/24,47.94.185.0/24,47.95.63.0/24,11.197.231.0/24,11.195.172.0/24,47.94.49.0/24,182.92.144.0/24,39.99.77.0/26,39.99.77.64/26,39.99.77.128/26,39.104.220.192/26,39.107.7.0/26,39.107.7.64/26,182.92.32.128/26,182.92.32.192/26

**US (Silicon Valley)**

10.152.160.0/24,100.64.0.0/10,47.89.224.0/24,11.193.216.0/24,47.88.108.0/24

**US (Virginia)**

47.88.98.0/26,47.88.98.64/26,47.88.98.128/26,47.88.98.192/26,47.252.91.0/26,47.252.91.64/26,47.252.91.128/26,47.252.91.192/26,10.128.134.0/24,11.193.203.0/24,11.194.68.0/24,11.194.69.0/24,100.64.0.0/10

**Malaysia (Kuala Lumpur)**

11.193.188.0/24,11.221.205.0/24,11.221.206.0/24,11.221.207.0/24,100.64.0.0/10,11.214.81.0/24,47.254.212.0/24,11.193.189.0/24

**Germany (Frankfurt)**

11.192.116.0/24,11.192.168.0/24,11.192.169.0/24,11.192.170.0/24,11.193.106.0/24,100.64.0.0/10,11.192.116.14,11.192.116.142,11.192.116.160,11.192.116.75,11.192.170.27,47.91.82.22,47.91.83.74,47.91.83.93,47.91.84.11,47.91.84.110,47.91.84.82,11.193.167.0/24,47.254.138.0/24

**Japan (Tokyo)**

100.105.55.0/24,11.192.147.0/24,11.192.148.0/24,11.192.149.0/24,100.64.0.0/10,47.91.12.0/24,47.91.13.0/24,47.91.9.0/24,11.199.250.0/24,47.91.27.0/24,11.59.59.0/24,47.245.51.128/26,47.245.51.192/26,47.91.0.128/26,47.91.0.192/26

**UAE (Dubai)**

11.192.107.0/24,11.192.127.0/24,11.192.88.0/24,11.193.246.0/24,47.91.116.0/24,100.64.0.0/10

**UK (London)**

11.199.93.0/24,100.64.0.0/10

**Indonesia (Jakarta)**

11.194.49.0/24,11.200.93.0/24,11.200.95.0/24,11.200.97.0/24,100.64.0.0/10,149.129.228.0/24,10.143.32.0/24,11.194.50.0/24,11.59.135.0/24,147.139.156.0/26,147.139.156.128/26,147.139.156.64/26,149.129.230.192/26

**China North 2 Ali Gov 1**

11.194.116.0/24,100.64.0.0/10,39.107.188.202 If adding the CIDR block fails, add the following IP addresses instead: 11.194.116.160,11.194.116.161,11.194.116.162,11.194.116.163,11.194.116.164,11.194.116.165,11.194.116.167,11.194.116.169,11.194.116.170,11.194.116.171,11.194.116.172,11.194.116.173,11.194.116.174,11.194.116.175,39.107.188.0/24

**China East 2 Finance**

140.205.46.128/25,140.205.48.0/25,140.205.48.128/25,140.205.49.0/25,140.205.49.128/25,11.192.156.0/25,11.192.157.0/25,11.192.164.0/25,11.192.165.0/25,11.192.166.0/25,11.192.167.0/25,106.11.245.0/26,106.11.245.128/26,106.11.245.192/26,106.11.245.64/26,140.205.39.0/24,106.11.225.0/24,106.11.226.0/24,106.11.227.0/24,106.11.242.0/24,100.104.8.0/24

## Appendix: Whitelisting an exclusive resource group

If you use an Exclusive Resource Group for Scheduling to run MaxCompute Nodes and your Project uses an IP Address Whitelist, you must add the resource group's IP addresses to the Whitelist. For instructions on configuring the IP Address Whitelist, see [Manage IP Address Whitelists](/help/en/maxcompute/security-and-compliance/manage-ip-address-whitelists#task-2330709).
