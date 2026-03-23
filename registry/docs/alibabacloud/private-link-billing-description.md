This topic describes the billing rules, billing cycle, payer, and billing examples of PrivateLink.

**Important**

Starting from October 16, 2024, gateway load balancer endpoints (GWLBEs) are available for public preview. **During the public preview, no instance fee or data transfer fee is charged.** For more information about the end date of the public preview, pay close attention to the notice on the Alibaba Cloud international site.

## Billable items and pricing

PrivateLink fees include instance fees and data transfer fees.

-   Instance fees: An instance fee is charged for each zone in which an endpoint is deployed. If an endpoint is deployed in multiple zones, and instance fees are charged for all of the zones. For example, an endpoint is deployed in three zones. In this case, instance fees are charged for three zones.
    
-   Data transfer fees: Fees are charged for the total amount of inbound and outbound data transferred through the elastic network interfaces (ENIs) that are associated with an endpoint. In the following example, fees are charged for the total amount of inbound and outbound data transferred through the three endpoint ENIs that are deployed in three zones.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6698875671/CAEQUBiBgMCbxPKE2RkiIGIxNWQ1NDU3NDgzMTQ2YzI4MWNiNDkyY2QxOTgyNTRi4654747_20241012174049.281.svg)

The following table describes the billable items and pricing of PrivateLink.

**Endpoint type**

**Billing item**

**Unit price**

**Billing method**

**Description**

Endpoint

Instance fee

USD 0.01/hour

Pay-as-you-go

-   Instance fee: Fees are charged for the zones in which an endpoint is deployed. If you use an endpoint for less than 1 hour, the usage duration is rounded up to 1 hour.
    
-   Data transfer fee: Fees are charged for the total amount of inbound and outbound data transferred through an endpoint.
    

Data transfer fee

USD 0.01/GB

GWLBE

Instance fee

USD 0.013/hour

Data transfer fee

USD 0.0035/GB

**Note**

You can specify whether the service consumer or service provider pays the bills of PrivateLink. For more information, see the [Payer](#section-4zx-gat-sg7) section of this topic.

## Billing cycle

You are charged for PrivateLink during the following time period:

The billing starts when an endpoint is connected to an endpoint service.

The billing for data transfers stops when the endpoint is disconnected from the endpoint service. The billing for instances stops when the endpoint is deleted.

**Important**

A disconnected endpoint is considered an idle endpoint. Each Alibaba Cloud account can have at most 10 idle endpoints. If the upper limit is reached, you cannot create more endpoints.

## Payer

The service consumer and service provider can use different Alibaba Cloud accounts. You can specify whether the service consumer or the service provider settles the bills when you create an endpoint service.

-   By default, the Alibaba Cloud account that is used to create the endpoint settles the bills.
    
    For example, a customer creates an endpoint and ENIs in two zones. The endpoint is connected to an endpoint service. The service consumer is specified to settle the bills. The total amount of outbound and inbound data transferred within one month is 100 GB. In this example, one month is equivalent to 30 days. Total fees of the month: USD 14.4 + USD 1 = USD 15.4
    
    -   Instance fees = USD 0.01/hour × 24 hours × 30 days × 2 zones of the endpoint = USD 14.4
        
    -   Data transfer fees = USD 0.01/GB × 100 GB = USD 1
        
    
-   You can also specify that the service provider settles the bills. In this case, the Alibaba Cloud account that creates the endpoint service settles the bills. The bills include the fees of all endpoints that are associated with the endpoint service.
    
    For example, a service provider creates an endpoint service that is associated with 100 endpoints, and each endpoint is deployed in two zones. The total amount of inbound and outbound data transferred through the endpoints within one month is 10,240 GB. In this example, one month is equivalent to 30 days. The service provider is specified to settle the bills. Total fees of the month: USD 1,440 + USD 102.4 = USD 1,542.4
    
    -   Instance fees = USD 0.01/hour × 100 endpoints × 30 days × 24 hours × 2 zones of the endpoints = USD 1,440
        
    -   Data transfer fees = USD 0.01/GB × 10,240 GB = USD 102.4
        
    

**Important**

-   You can specify the Alibaba Cloud account that settles the bills when you create an endpoint service. After you specify the payer account, you cannot change it.
    
-   Whether the service consumer or service provider settles the bills does not affect how the service is billed. When you use the PrivateLink service, you are charged for the endpoints.
    

## Overdue payments

To prevent service disruptions caused by endpoint expiration or overdue payments, we recommend that you renew your endpoints or top up your account at the earliest opportunity.

**Expiration and overdue payments**

**Endpoint renewal and account top-up**

If the endpoints that you created for PrivateLink have an overdue payment, the system sends a text message and email to the account to which the endpoints belong. A payment is considered overdue if the bill is generated but not settled.

-   If the overdue payment does not exceed the overdraft limit, the endpoints are not suspended.
    
-   Otherwise, the endpoints are suspended. After the endpoints are suspended, the billing stops.
    
-   If you do not complete the overdue payment within seven days after the endpoints are suspended, the endpoints are released. A notification is sent to you by text message and email one day before the system releases the endpoints. After the endpoints are released, configurations and data of the endpoints are deleted and cannot be restored.
    

To complete the overdue payments, top up your Alibaba Cloud account.

-   If you top up your Alibaba Cloud account within the service suspension protection period, the endpoints are not suspended.
    
-   If you top up your Alibaba Cloud account within seven days after the endpoints are suspended, the system automatically deducts the overdue payments from your account balance and restarts the endpoints.
    

## **View billing details**

### **View monthly bills**

Log on to the [Expenses and Costs console](https://usercenter2-intl.console.alibabacloud.com/). In the left-side navigation pane, choose **Bills** > **Overview of Monthly Bill** to view your monthly bills over the entire billing cycle. You can also export the bills.

### **View Billing Details**

Log on to the [Expenses and Costs console](https://usercenter2-intl.console.alibabacloud.com/). In the left-side navigation pane, choose **Bills** > **Bill Details** to view the billing details about your clusters and billable items by billing cycle, day, or billing period.
