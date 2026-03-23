Costs for an EMR Serverless Spark workspace consist of two parts: computing resources and model calls. EMR Serverless Spark supports multiple billing methods, such as pay-as-you-go and subscription. Understanding the billing logic and usage estimation methods for each billing item helps you plan your costs effectively.

## Billing Composition

The billing components of an EMR Serverless Spark workspace and the supported billing methods are as follows:

## Billing Methods

EMR Serverless Spark supports the following billing methods:

**Billing method**

**Description**

[Computing resources (pay-as-you-go)](/help/en/emr/emr-serverless-spark/product-overview/compute-resources-pay-as-you-go)

Pay after use. The system bills you hourly (at the top of each hour, UTC+8) based on actual resource usage in the workspace. Use this method if your workload varies frequently.

[Computing resources (subscription)](/help/en/emr/emr-serverless-spark/product-overview/computing-resources-package-year-and-package-month)

Pay before use. You prepay for a fixed duration at purchase. The system calculates the price per billing cycle based on the subscription duration. Use this method if your resource usage is stable, long-term, and your budget is well defined.

[Computing resources (hybrid billing)](/help/en/emr/emr-serverless-spark/product-overview/compute-resources-mixed-billing)

Add elastic computing resources to your subscription setup. This combines the flexibility of pay-as-you-go with the cost efficiency of subscription.

[Computing resources (resource plan)](/help/en/emr/emr-serverless-spark/product-overview/computing-resources-resource-credit-package)

Purchase a discounted resource plan in advance. During billing, usage is first deducted from your resource plan. You pay pay-as-you-go rates only for usage beyond the plan. Use this method if your workload is relatively stable.

Model calls (pay-as-you-go)

Billed based on actual Token usage of built-in AI Center models in the workspace.

## Billing Item Details

### Computing Resources

You are billed for computing resources based on either your subscription plan or your actual pay-as-you-go usage. The unit of measurement is CU.

1 CU = 1 vCPU + 4 GiB memory. This is the basic unit of computing power for an EMR Serverless Spark workspace. CU usage for a computing task depends on the volume of data processed, computational complexity, data distribution, and whether you enable the [Fusion engine](/help/en/emr/emr-serverless-spark/product-overview/fusion-engine). Enabling the Fusion engine does not increase resource costs. It typically reduces job runtime by more than 30%.

If your vCPU-to-memory ratio is less than 1:4, see [EMR Serverless Spark CU promotions](/help/en/emr/emr-serverless-spark/product-overview/discount-for-emr-serverless-spark-cus) for details on the conversion.

The following table shows the processing capacity of 1 CU.

**Processing scenario**

**Processing capacity (Java Runtime)**

**Processing capacity (Fusion engine)**

Simple data processing, such as filtering and scrubbing.

1 CU processes about 2,000,000 records per second.

1 CU processes about 5,000,000 records per second.

Complex data processing, such as aggregation, joins, and string operations.

1 CU processes about 700,000 records per second.

1 CU processes about 2,000,000 records per second.

### Model Calls

You are billed for model calls based on your actual usage of built-in AI Center model services. The unit of measurement is thousands of Tokens.

Token usage is estimated as follows: • 1 Chinese character ≈ 1.5–2 Tokens • 1 English letter ≈ 0.25 Tokens • 1 English word ≈ 1.3 Tokens

-   `Alibaba Cloud Model Studio`: ≈ 4–5 Tokens
    
-   `Hello World`: ≈ 2 Tokens
    

For example, in a data masking scenario, you process 1,000 text records in a batch. The following is an example SQL statement:

```
select
  ai_query (
    concat(
      'Mask the following text according to these rules:
      1. Chinese names: Detect all Chinese names (2–4 characters). Keep the first and last characters. Replace middle characters with `*`.
      2. Mobile phone numbers: Detect Chinese mainland mobile numbers (11 digits, starting with 1). Keep the first 3 and last 4 digits. Replace the middle 4 digits with `****`.
      3. Physical addresses: Detect specific physical address information, such as province, city, district, street, and building number. Keep only the province, city, and district (county) levels. Replace all detailed street, building number, and community names after the district/county level with `***`.
      Output requirements:
      Return only the following three lines. Do not include explanations, original text, or other content:
      Name: [result]
      Mobile: [result]
      Address: [result]',
      user_info
    )
  )AS masked_text
from
  user_tbl
;
```

For example, a user\_info value can be: “Mr. Li Si lives at No. xxx, Moumou Road, Zhangjiang Hi-Tech Park, Pudong New Area, Shanghai. His mobile number is 159\*\*\*\*\*\*\*\*.”

The estimated token usage for one record is as follows:

**Estimated Token usage**

user\_info input data

≈ 60

prompt

≈ 200

output data

≈ 50

The estimated Token usage for 10,000 records is as follows:

**Estimated usage**

**Calculation formula**

Input Tokens (estimated)

≈ 2,600 thousand Tokens

(60 + 200) Tokens/record × 10,000 records

Output Tokens (estimated)

≈ 500 thousand Tokens

50 Tokens/record × 10,000 records
