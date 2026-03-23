## Order generation process

Alibaba Cloud creates an order record when you purchase a cloud product. Orders can be in one of three states: **Unpaid**, **Paid**, or **Canceled**. Various operations—including new purchases, renewals, upgrades, downgrades, and refunds—generate corresponding order types.

After the initial purchase, any subsequent change to the resource generates a new order. The following diagram illustrates the relationship between orders and the resource lifecycle:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7712574671/CAEQTxiBgIDmruWk0hkiIDkzYWMwNTY2YTQ5MDQ2Mzk5NjEwYjcyNmI4MTk4YmM05187653_20250519114317.939.svg)

## Order operation scenarios

Orders are your purchase records on Alibaba Cloud and contain purchase and payment information. On the **My Orders** page, you can perform the following operations:

-   [View the order list](#bf09179079t8i): View information and details for all purchased or activated resources.
    
-   [Export orders](#efab279079t7m): Export orders to a CSV file.
    
-   [View order details](#ba808f6fdaarp): View product configuration details, quantity, service start time, and service end time.
    
-   View order status: Check if an order is paid, unpaid, or canceled.
    
-   Manage unpaid orders: [Pay for an order](#0426131079fl6) or [cancel an order](#11f429a079med).
    

## Procedure

Log on to Alibaba Cloud and go to the [My Orders](https://billing-cost-intl.aliyun.com/order/list) page.

### **View the order list**

Follow these steps to filter and view your generated orders.

1.  In the upper-left corner of the My Orders page, switch between tabs to view orders for individual products and bundled products.
    
2.  In the left navigation pane, choose **Orders** > **My Orders**. Filter orders under your account by critera such as **product name**, **creation time range** (order placement period), **order ID**, and **asset/resource instance ID**.
    
3.  In the order list area displays the following: resource purchasing account, order ID, product name, asset/resource instance ID, order type, order status, creation time, payment/activation time, official list price, official discounted price, amount payable, , and tax.
    

### **View order details**

On the order list page, find the desired order and click **View Details** in the **Actions** column to view the **Order Details** page.

### **Export orders**

After filtering the orders, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3350846371/p892090.png) icon in the upper-right corner of the order list to export it.

### **Pay for an order**

Filter for pending payment orders, select the order(s) you wish to pay, and click Pay. You will be redirected to the payment page.

**Note**

You can only pay for orders with the Unpaid status.

### **Delete an order**

Filter for pending payment orders, select the target order, click **Delete**, and confirm the action.

**Important**

Once an order is deleted, it cannot be restored. If you require the service, you will need to place a new order.

### **View orders across accounts**

The **My Orders** feature supports multi-account management for enterprises. An enterprise management account (MA) or administrator can view order information for other accounts within the enterprise or organization.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3350846371/p892269.png)

### **Cancel an order**

An order can be canceled, but the specific permissions and procedures depend on the order type, status, and associated product.

**Note**

-   Canceled orders cannot be recovered.
    
-   If a coupon was used for the order, the coupon is not returned.
    

-   **Unpaid orders**: Go to **User Center** > [**My Orders**](https://usercenter2.aliyun.com/order/list), find the unpaid order, and click **Cancel**.
    
-   **Paid orders (unsubscribe)**: You can terminate an order early by [unsubscribing from a resource](/help/en/user-center/initiate-unsubscribe). Note that if you enabled auto-renewal for the service, you must manually disable auto-renewal for the instance when you unsubscribe to avoid extra charges.
    

## FAQ

-   [Why can't I find a recently placed order on the My Orders page?](/help/en/user-center/support/order-manual-q-a#22c449507e8j2)
    
-   [How do I view discount details and payment details for each payment channel in an order?](/help/en/user-center/support/order-manual-q-a#2c0de9307efp1)
    
-   [What do I do if a payment timeout error occurs when I try to pay for an order?](/help/en/user-center/support/order-manual-q-a#h2--1)
    
-   [What do I do if an order status is Unpaid after I have paid for it?](/help/en/user-center/support/order-manual-q-a#h2--5)
    
-   [Can a canceled unpaid order be recovered?](/help/en/user-center/support/order-manual-q-a#h2--7)
