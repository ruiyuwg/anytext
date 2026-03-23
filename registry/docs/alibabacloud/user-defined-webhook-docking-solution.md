If you use the webhook feature for DataWorks monitoring alerts and your webhook service uses a whitelist for access control, add the public egress IP addresses of DataWorks to the whitelist. This ensures that alert messages can be sent successfully.

## **Applicability**

-   **Network requirements**: Alerts can only be pushed over the public network.
    
-   **Version requirements**: Only DataWorks Enterprise Edition supports custom webhooks.
    

## **Add public IP addresses to the webhook service whitelist**

**Note**

Skip this procedure if your webhook service does not use a whitelist for access control.

If your webhook service uses a whitelist for access control, add the following DataWorks public IP addresses to the IP whitelist of the service.

**Region Name**

**Region ID**

**IP Addresses**

China (Beijing)

cn-beijing

47.93.5.9,47.93.60.157,47.94.111.106,59.110.166.34,60.205.184.153,60.205.227.157,60.205.223.44,123.56.217.46,123.57.155.168,123.57.243.71

China (Zhangjiakou)

cn-zhangjiakou

39.100.0.109,39.100.9.117,39.100.9.121

China (Hangzhou)

cn-hangzhou

47.96.30.97,47.97.175.135,116.62.247.242,120.27.233.168,121.40.70.19,121.199.31.66,121.199.41.143,121.199.61.16

China (Shanghai)

cn-shanghai

47.100.10.242,47.101.166.155,47.101.179.29,47.101.196.116,101.132.179.94,106.14.1.102,106.15.197.122,106.15.202.114

China (Shenzhen)

cn-shenzhen

47.107.81.9,47.112.11.104,47.112.21.108,47.112.22.239,47.112.23.85

Malaysia (Kuala Lumpur)

ap-southeast-3

47.254.198.127,47.254.200.185

Japan (Tokyo)

ap-northeast-1

47.74.22.81,47.74.23.43

China (Chengdu)

cn-chengdu

47.108.64.120,47.108.119.242

Singapore

ap-southeast-1

47.74.209.97,47.74.229.187,47.74.243.124

Indonesia (Jakarta)

ap-southeast-5

149.129.253.151,149.129.253.185

China (Hong Kong)

cn-hongkong

47.52.128.224,47.244.33.205

Germany (Frankfurt)

eu-central-1

47.91.89.154,47.254.153.91

US (Virginia)

us-east-1

47.89.191.99,47.90.253.133

US (Silicon Valley)

us-west-1

47.88.4.25,47.88.6.226

UK (London)

eu-west-1

8.208.12.7,8.208.15.6

SAU (Riyadh - Partner Region)

me-central-1

8.213.30.84,8.213.30.232

## **References**

For more information about the message format for custom webhooks in smart monitoring, see [Custom webhooks for smart monitoring](/help/en/dataworks/intelligent-monitoring-custom-webhook).
