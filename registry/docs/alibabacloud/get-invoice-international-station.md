Alibaba Cloud provides **real-time invoices** or **monthly invoices** based on your payment method. This topic describes how to download them from the Expenses and Costs console.

## Download a real-time or monthly invoice

If you pay by credit card or PayPal, you can download a **real-time invoice**. A **real-time invoice** is automatically generated after each payment and can be downloaded at any time.

## New console

1.  Log on to the **Expenses and Costs** console and select [Invoices](https://billing-cost.console.alibabacloud.com/invoice/home/intl/record).
    
2.  On the **Download Invoice** tab, download the **real-time invoice** for a paid bill.
    

## Legacy console

1.  Log on to the **Expenses and Costs** console and choose [Payment Details](https://usercenter2-intl.console.alibabacloud.com/billing/).
    
2.  On the **Paid** tab, download the **real-time invoice** for a paid bill.
    

If you use **credit-based payments**, a **monthly invoice** is automatically generated after all your charges for the month are billed. The invoice for the previous month is generated on the 6th of each month. The system automatically sends it to your registered email address. You can also download it from the **Invoices** page.

## New console

1.  Log on to the **Expenses and Costs** console and select [Invoices](https://billing-cost.console.alibabacloud.com/invoice/home/intl/record).
    
2.  On the **Download Invoice** tab, download the **monthly invoice**.
    

## Legacy console

1.  Log on to the Expenses and Costs console and go to [Account Overview](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview).
    
2.  In the **Recent Documents** section in the lower-right corner of the page, view and download **monthly invoices** for the last three months.
    
3.  You can also go to the [Overview of Monthly Bill](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/overview) page to download invoices for paid monthly bills.
    

**Note**

-   If you receive a refund during the month, the system generates a corresponding **negative invoice**.
    
-   To have an invoice reissued or credited, submit a **ticket** for support.
    

To send the **monthly invoice** to a different email address, configure the settings in the **Message Center**.

1.  Log on to the **Message Center** and click [Common Settings](https://notifications2.console.alibabacloud.com/subscribeMsg).
    
2.  In the upper-right corner, select **Manage Contacts**. Your registered email address is displayed in the list by default.
    
3.  Click **Add Receiver**. In the dialog box that appears, enter the name, email address, and other information, then select the message types you want to receive. The system automatically sends a verification message to the specified email address. The new contact can be used after they complete verification.
    
4.  You can also return to the [Common Settings](https://notifications2.console.alibabacloud.com/subscribeMsg) page, switch to the **Service Message** tab, find the invoice-related notification in the list, and click **Modify** on the right to add a new contact.
    

## **Add tax ID information**

In most countries or regions, businesses and individuals use one of the following four types of **Tax Identification Numbers (Tax IDs)**:

**Type**

**Description**

Business Registration Number

An identification number assigned by the business registration authority when a company is established.

National Identification Number

An identification number used by an individual.

Tax Identification Number (TIN)

An identification number assigned by the tax authority after a business or individual registers for income tax.

SST/GST/VAT Registration Number

An identification number assigned by the tax authority after a business registers for indirect taxes, such as Sales and Service Tax (SST), Goods and Services Tax (GST), or Value-added Tax (VAT).

If your country or region has consumption tax requirements, go to the [Tax ID Management](https://billing-cost.console.alibabacloud.com/invoice/home/intl/duty) page. Confirm your country/region and company name, enter your company's **Tax ID**, upload your tax certificate, and wait for approval. To add this information for the **Legacy console**, log in to the [Tax ID Management](https://usercenter2-intl.console.alibabacloud.com/billing/#/index/invoiceNoEdit) page.

**Important**

-   Tax processing strictly depends on the tax information you provide. An incorrect **Tax ID** may result in additional taxes, penalties, or interest charges for Alibaba Cloud. Alibaba Cloud reserves the right to recover these costs from you.
    
-   If you do not provide a **Tax ID**, your purchases may be treated as **B2C (Business-to-Consumer) transactions** and may be subject to charges such as Value-added Tax (VAT).
    

## **How tax is calculated**

If you are using the **legacy console**, go to the [**Billing Details**](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail) page to view the **tax** for each prepaid order and postpaid bill. If you are using the **new console**, you can go to the [**My Orders**](https://billing-cost.console.alibabacloud.com/order/list) or [**Overview of Monthly Bill**](https://billing-cost.console.alibabacloud.com/finance/month-bill/account) page to view your **tax** information.

Alibaba Cloud calculates the **tax** for each order or bill amount, rounds it to two decimal places, then sums these individual tax amounts to get the total **tax**. As a result, if you calculate the **tax** by multiplying the pre-tax amount on your invoice by the **tax rate**, there may be a slight difference compared to the total **tax** calculated by Alibaba Cloud.

For example, consider the bill in the following figure. The customer's registered country has a **tax rate** of 9%. To calculate the total **tax**, the **Amount due** for each line item is multiplied by the **tax rate** and rounded to two decimal places. These individual amounts are then added together.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2698919571/p1013672.png)

The detailed calculation is shown in the table below. The total **tax** on the customer's invoice for this month is 0.81 + 0.81 = 1.62.

Amount due

Tax rate

Amount due × Tax rate

Rounded amount

Tax

9

0.09

0.81

0

0.81

9

0.09

0.81

0

0.81

**Legacy console display**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9879263671/p1028078.png)

The total **tax** on the customer's invoice for this month is 0.89 + 3.85 = 4.74.

Amount due

Tax rate

Amount due × Tax rate

Rounded amount

Tax

9.9

0.09

0.891

0.001

0.89

42.83

0.09

3.8547

0.0047

3.85

For more information, see the following topics:

-   [Tax exemption application template for Malaysian customers](/help/en/user-center/malaysia-customer-tax-exemption-application-template)
    
-   [Notice on providing required information for invoicing in Malaysia](/help/en/user-center/product-overview/my-tax)
    
-   [Notice on changes to tax regulations in Tanzania](/help/en/user-center/product-overview/tz-tax)
