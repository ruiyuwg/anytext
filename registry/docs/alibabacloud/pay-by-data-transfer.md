Internet Shared Bandwidth instances support the pay-as-you-go billing method. Pay-as-you-go Internet Shared Bandwidth instances support only the pay-by-data-transfer metering method.

**Important**

-   If you create pay-by-dominant-data-transfer Internet Shared Bandwidth instances after 00:00 (UTC+8) on December 17, 2024, the billing of the instances is managed by Cloud Data Transfer (CDT).
    
    CDT supports tiered pricing for Internet data transfers. The unit price decreases as the amount of data transfers increases. For more information, see [Internet data transfers](/help/en/cdt/internet-data-transfers/).
    
-   Pay-by-dominant-data-transfer Internet Shared Bandwidth instances created before 00:00 (UTC+8) on December 17, 2024 are still billed based on the billing rules of Internet Shared Bandwidth.
    
-   You can [enable CDT](https://cdt.console.alibabacloud.com/cdt/list) for Internet Shared Bandwidth. After you enable CDT, the billing of existing and new Internet Shared Bandwidth instances is managed by CDT.
    

## Billing rules

Pay-by-data-transfer Internet Shared Bandwidth instances are billed based on the following rules:

-   Fees are calculated and bills are generated on an hourly basis. If you own an Internet Shared Bandwidth instance for less than 1 hour, the usage duration is rounded up to 1 hour.
    
-   You are charged for the cumulative outbound data transfer of an Internet Shared Bandwidth instance. You are not charged for inbound data transfer. Outbound data transfer refers to the data transfer from Alibaba Cloud data centers to the Internet.
    

Fees of a pay-by-data-transfer Internet Shared Bandwidth instance in a billing cycle = Unit price of data transfer (USD per GB) × Amount of data transfer usage (GB)

**Note**

We recommend that you set the maximum bandwidth of an Internet Shared Bandwidth instance based on your business requirements to prevent unexpected data transfer charges caused by malicious requests or program errors.

## Unit prices of data transfer

The following table describes the unit prices of data transfer in different regions.

**Note**

The prices and regions described in the following table are for reference only. The actual prices on the [buy page](https://common-buy-intl.alibabacloud.com/?spm=5176.11182184.0.0.11fc488228m3Gz&commodityCode=cbwp_intl&regionId=cn-chengdu) shall prevail.

**Area**

**Region**

**Unit price (USD per GB)**

China

China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), and China (Chengdu)

0.123

China (Qingdao)

0.110

China (Hong Kong)

0.153

Asia Pacific

Singapore, Philippines (Manila), and Thailand (Bangkok)

0.081

Japan (Tokyo)

0.087

South Korea (Seoul)

0.123

Indonesia (Jakarta)

0.090

Malaysia (Kuala Lumpur)

0.077

Europe and Americas

US (Silicon Valley)

0.077

US (Virginia)

0.076

Germany (Frankfurt) and UK (London)

0.070

Middle East

UAE (Dubai)

0.153

SAU (Riyadh - Partner Region)

**Important**

The SAU (Riyadh - Partner Region) region is operated by a partner.

0.097
