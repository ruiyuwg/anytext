By default, Alibaba Cloud uses US Dollars (USD) for billing and settlement. If you prefer to settle in another currency, this guide explains how to change your settlement currency based on your region and eligibility.

* * *

## Settle in EUR, SGD, or HKD

If you are an **authorized customer** in Europe, Singapore, or Hong Kong (China), and your primary Alibaba Cloud account is registered in one of the following regions, you can manually change your settlement currency from USD to **Euros (EUR)**, **Singapore Dollars (SGD)**, or **Hong Kong Dollars (HKD)**.

**New Currency**

**Account Registration Region**

EUR

European Economic Area (EEA) countries: Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden, Liechtenstein, Iceland, and Norway

SGD

Singapore

HKD

Hong Kong (China)

### Key points:

-   Only **one settlement currency** is supported per billing cycle (calendar month).
    
-   Changes take effect at **00:00 (UTC+8)** on the **first day of the next month**.
    
-   All new orders, invoices, and bills will be issued in the new currency after the change.
    
-   Historical bills and transactions remain in the original currency (for example, USD).
    

### Settlement details by currency

**Feature**

**USD Settlement**

**EUR Settlement**

**SGD Settlement**

**HKD Settlement**

Exchange Rate Source

–

Fair market exchange rate

Fair market exchange rate

Fair market exchange rate

Exchange Rate Frequency

–

Fixed monthly rate

Fixed monthly rate

Fixed monthly rate

Online Payment Methods

Credit/Debit Card, PayPal

Not supported

Not supported

Not supported

Offline Payment Method

Cross-border wire transfer

Bank transfer

Bank transfer

Bank transfer

Remittance Account & Currency

USD, Citibank

EUR, JPMorgan Chase Bank

SGD, Citibank

HKD, JPMorgan Chase Bank

> ⚠️ **Important**: After changing your settlement currency, **cross-currency refunds are not supported**. This includes refunds due to service downgrades or cancellations.

* * *

### How to change your settlement currency

#### Using the new console

1.  Log in to the [**Expenses and Costs**](https://billing-cost.console.alibabacloud.com) console.
    
2.  Go to **Billing Account** **>** [**Billing Account**](https://billing-cost.console.alibabacloud.com/fortune/billing-account).
    
3.  In the **Account Settings** section, click **Edit** next to **Settlement Currency**.
    
4.  Select your desired currency (EUR, SGD, or HKD) and click **OK**.
    
5.  The change takes effect on the first day of the next month.
    
6.  To view historical exchange rates, click **View Exchange Rate** next to **Settlement Currency**.
    

#### Using the legacy console

1.  Log in to the [**Expenses and Costs**](https://billing-cost.console.alibabacloud.com) console.
    
2.  Navigate to **Payment Methods**.
    
3.  Click **Settlement Currency Preference** in the top-right corner, then select **Modify**.
    
4.  Choose your preferred currency and confirm with **OK**.
    
5.  The update will apply at 00:00 (UTC+8) on the first day of the following month.
    
6.  Click **Exchange Rate****s** to review past exchange rates.
    

* * *

### Virtual Account (VA) for top-ups

After switching currencies, Alibaba Cloud automatically creates a **Virtual Account (VA)** in the new currency to facilitate payments and top-ups.

#### Access your remittance details

**New console:**

1.  Go to **Account >** [**Billing Account**](https://billing-cost.console.alibabacloud.com/fortune/billing-account).
    
2.  Under **Asset Information**, click **Top-up/Remittance** next to **Cash Balance**.
    
3.  View the receiving bank details for your current settlement currency and initiate a bank transfer.
    

**Legacy console:**

1.  Go to [**Account Balance**](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/balance).
    
2.  Click the **Top-up** button under your balance.
    
3.  Check the remittance information for your current currency and proceed with payment.
    

For full instructions, see [Make a Payment by Bank Transfer](/help/en/user-center/payment-by-bank-transfer).

* * *

### Notes on USD account and balance

-   Your existing **USD Virtual Account and its balance are retained** and not migrated.
    
-   You can continue paying any **outstanding USD bills** using the original USD account.
    
-   If there are no pending USD obligations, you may **request a refund** of the remaining USD balance to the original payment source.
    

* * *

## Settle in Malaysian Ringgit (MYR) or Thai Baht (THB)

Customers in **Malaysia** and **Thailand** can settle in their **local currency (MYR or THB)** through automatic real-time currency conversion.

> **Action Required**: Contact your **account manager** to enable local currency settlement.

### How it works

-   The system converts all charges using **real-time fair market exchange rates** provided by a third party.
    
-   You view, pay, and receive invoices in your **local currency**.
    
-   No additional accounts or payment methods are required—use your existing card, PayPal, or bank transfer.
    

### Exchange rate application

**Billing**

**Exchange Rate Used**

Subscription orders

Exchange rate on the **payment date**

Pay-as-you-go bills

Exchange rate on the **settlement date**

#### Automatic settlement for Pay-as-you-go (card/PayPal users)

-   When accrued usage reaches about **USD 1,000**, an **interim settlement** occurs.
    
-   The amount is converted using the exchange rate on that day.
    
-   Charges continue to accumulate and are settled again at the **end of the month** using the rate on that final day.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3609007961/p493989.png)

#### Monthly billing (authorized customers)

-   A consolidated bill is issued on the **first day of each month** for the prior month's usage.
    
-   Multiple exchange rates may appear if resources were used or billed on different dates.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2609007961/p493985.png)

### Refunds

-   If a refund is issued after payment in local currency, it will follow standard refund policies and be processed in the same currency.
    

### Shopping & payment experience

When eligible:

-   The **shopping cart** and **checkout pages** display prices in your local currency.
    
-   The **daily exchange rate** is shown alongside the converted amount.
    

![4EBFB89F-44C1-4bc4-959E-63BE112930DD](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2609007961/p494018.png)

* * *

### Example scenarios

**Scenario**

**Explanation**

Pay-as-you-go instance created on Sep 1 and Sep 8

Final bill at month-end uses the exchange rate on **Sep 30**.

Subscription order placed on Sep 5 and Sep 20

Each payment uses the exchange rate on the respective **purchase date**.

Accumulated pay-as-you-go charges reach USD 1,000 on Sep 8

An **automatic interim settlement** occurs using the rate on **Sep 8**; remaining charges are settled on **Sep 30**.

Subscription purchased on Sep 20

Payment is deducted immediately using the exchange rate on **Sep 20**.

* * *

For more information or assistance, contact your Alibaba Cloud account manager or visit the [Alibaba Cloud Help Center](https://www.alibabacloud.com/help/en/).
