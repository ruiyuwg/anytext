## **Billing methods**

**Public Zone** supports the following two billing methods:

-   **Subscription:** **Public Zone** instances are **subscription**\-based.
    
-   **Pay-as-you-go:** Advanced services, such as **Traffic Analysis**, are billed on a **pay-as-you-go** basis.
    

## **Billable items**

### **1\.** **Public Zone** **(Subscription)**

For purchase instructions, see [Purchase and attach domain names](/help/en/dns/pubz-instance-purchase-and-domain-name-binding).

#### **Package 1:** `**Personal Edition**` **+ DNS Security (Optional)**

You can add **DNS Security** to the `**Personal Edition**`. The billing formula is: `**Total Fee = (Personal Edition Unit Price + DNS Security Specification Unit Price) × Number of Domain Names**`

**Billable Item**

**Price**

**Description**

`Personal Edition`

7 USD/domain name/year

Personal Edition: 7 USD/domain name/year

Basic Security: 86 USD/domain name/year

Full Security: 429 USD/domain name/year

**Note**

**For purchase and use by individual developers only**

Enterprise users cannot purchase new Personal Edition instances. Existing Personal Edition instances can still be used and renewed.

`Personal Edition` + `DNS Basic Security`

93 USD/domain name/year

`Personal Edition` + `DNS Full Security`

436 USD/domain name/year

#### **Package 2:** `**Enterprise Ultimate Edition**` **+ DNS Security (Required)**

**DNS Security** is required for the `**Enterprise Ultimate Edition**`. The billing formula is: `**Total Fee = (Enterprise Ultimate Edition Unit Price + DNS Security Specification Unit Price) × Number of Domain Names**`

**Billable Item**

**Price**

**Description**

`Enterprise Ultimate Edition` + `DNS Basic Security`

167 USD/domain name/year

Enterprise Ultimate Edition: 81 USD/domain name/year

Basic Security: 86 USD/domain name/year

Full Security: 429 USD/domain name/year

`Enterprise Ultimate Edition` + `DNS Full Security`

510 USD/domain name/year

#### **Package 3:** `**Premium Edition**`

The `Premium Edition` includes **DNS Full Security** by default. The billing formula is: `**Total Fee = Premium Edition Unit Price × Number of Domain Names**`

**Billable Item**

**Price**

`Premium Edition`

4,287 USD/domain name/year

**Expiration**

For more information about instance expiration rules, see [Instance expiration and renewal](/help/en/dns/pubz-instance-expiration-rule-description).

### **2\.** **Traffic Analysis** (Pay-as-you-go)

**Feature**

**Price**

**Billing Cycle**

**Billing Trigger**

**Description**

**Store and analyze by Alibaba Cloud DNS**

0.03 USD/10,000 entries

Daily

Enable **Traffic Analysis** and set the log processing mode to **Store and analyze by Alibaba Cloud DNS**.

-   The **storage and analysis fee** is charged daily based on the number of DNS resolution log entries for domain names that have **Traffic Analysis** enabled.
    
-   You can use a resource plan to offset the costs for this billable item. For more information, see [DNS Traffic Analysis (Subscription resource plan)](#616d66e152b2i).
    

**Delivers to SLS only**

0.0015 USD/10,000 entries

Daily

Enable **Traffic Analysis** and set the log processing mode to **Delivers to SLS only**.

-   The **fee for storing logs in SLS** is charged daily based on the number of DNS resolution log entries for domain names that have **Traffic Analysis** enabled.
    
-   You cannot use a resource plan to offset these costs.
    

**Other fees:** Subsequent storage fees are charged directly by Simple Log Service. For more information, see the SLS billing standards.

**Alibaba Cloud DNS stores, analyzes, and delivers to SLS**

0.0315 USD/10,000 entries

Daily

Enable **Traffic Analysis** and set the log processing mode to **Alibaba Cloud DNS stores, analyzes, and delivers to SLS**.

-   The **storage and analysis fee for Alibaba Cloud DNS** and the **fee for storing logs in SLS** are both charged daily based on the number of DNS resolution log entries for domain names that have **Traffic Analysis** enabled.
    
-   You can use a resource plan to offset the costs for **Store and analyze by Alibaba Cloud DNS**. You cannot use a resource plan to offset the costs for storing logs in SLS. For more information, see [DNS Traffic Analysis (Subscription resource plan)](#616d66e152b2i).
    

**Other fees:** Subsequent storage fees are charged directly by Simple Log Service. For more information, see the SLS billing standards.

**Billing example**:

Assume that Account A processes a total of 1 million authoritative DNS log entries in one day.

The total fee is calculated as follows: 3 USD = 1 million entries × 0.03 USD/10,000 entries.

### **3\.** **Traffic Analysis** **(Subscription resource plan)**

If your domain name receives a high volume of resolution requests, you can purchase a [Public Authoritative DNS Traffic Analysis (Data Plan)](https://common-buy-intl.alibabacloud.com/?commodityCode=dns_authoritative_dp_intl) to cover your pay-as-you-go costs. The data plan takes effect immediately upon purchase and is valid for one year. It automatically offsets your pay-as-you-go bills. Any unused data in the plan expires after one year. The billing rules for the data plan are as follows:

**Data Plan Size (10,000 queries)**

**Validity Period (Months)**

**Data Plan Price**

**Unit Price per 10,000 Queries**

1,000

12

21 USD

0.021 USD

10,000

12

182 USD

0.0182 USD

100,000

12

1,680 USD

0.0168 USD

1,000,000

12

14,000 USD

0.014 USD

**Important**

-   This resource plan can be used to offset the costs for **Store and analyze by Alibaba Cloud DNS** for both **Public Zone** and the **Traffic Analysis** of **Global Traffic Manager 3.0**. It cannot be used to offset the costs for **Delivers to SLS only**.
    
-   **Traffic Analysis** is billed daily. If you have an active data plan during a billing cycle, the plan’s quota automatically offsets your bill.
    
-   A data plan cannot be used to offset bills from a previous billing cycle. It can be used only for billing cycles that start after the purchase.
    
-   After the data plan's quota is used, subsequent queries are billed on a pay-as-you-go basis.
    

**Overdue payments**

Alibaba Cloud DNS lets you continue using cloud services for a specific period or within a certain credit limit after your account becomes overdue. Your existing pay-as-you-go services, purchased resource plans, and subscription resources will continue to function normally. Service suspension procedures are initiated only if you exceed the grace period. For more information, see [Service suspension due to overdue payments](/help/en/user-center/grace-period).
