EdgeRoutine only supports the pay-as-you-go billing method. This topic describes the billing rules for EdgeRoutine.

## Billing cycle

Pay-by-day: The amount that is due on each day is deducted from your account balance at 00:00 on the next day.

## Pricing

The prices for different routine specifications are slightly different, as shown in the following table.

**Specification (unit: ms)**

**Price per 1,000,000 calls (USD)**

5

0.15

50

0.45

100

0.75

**Note**

-   All requests for domain names associated with EdgeRoutine are processed in EdgeRoutine and billed.
    
-   EdgeRoutine is a value-added service that is billed based on the number of calls. DCDN billable items such as traffic, bandwidth, and real-time logs, or other value-added services continue to be billed based on your original billing methods.
    

## Billing example

You create two routines: Routine A has a specification of 50 ms and Routine B has a specification of 100 ms. On January 1, 2021, Routine A was called and executed 1 million times, and Routine B was called and executed 2 million times.

EdgeRoutine fee on January 1, 2021: USD 0.45/1,000,000 × 1,000,000 + USD 0.75/1,000,000 × 2,000,000 = USD 1.95.

The fee that was incurred on January 1, 2021 was deducted at 00:00:00 on January 2, 2021.
