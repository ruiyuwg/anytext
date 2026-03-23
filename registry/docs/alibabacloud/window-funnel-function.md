Simple Log Service provides the window funnel function. You can use the function to analyze data, such as user behavior, application traffic, and product goal conversion. This topic describes the syntax of the window funnel function. This topic also provides examples on how to use the function.

The window funnel function supports the following syntax.

**Important** If you want to use strings in analytic statements, you must enclose strings in single quotation marks (''). Strings that are not enclosed or enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.

**Function**

**Syntax**

**Description**

Supported in SQL

Supported in SPL

[window\_funnel function](#section-8mg-51s-lxf)

window\_funnel(_sliding\_window_, _timestamp_, _event\_id_, ARRAY\[_event\_list01_, _event\_list02_...\])

Searches for an event chain in a sliding time window and counts the maximum number of consecutive events in the event chain.

If the value of the event\_id parameter is specified in an event chain, you can use this syntax.

√

×

window\_funnel(_sliding\_window_, _timestamp_, ARRAY\[_event\_id_\=_event\_list01_, _event\_id_\=_event\_list02_...\])

Searches for an event chain in a sliding time window and counts the maximum number of consecutive events in the event chain.

If the value of the event\_id parameter is not specified in an event chain and you want to use a custom value for the event\_id parameter, you can use this syntax, which is more flexible.

√

×

## Implementation

The window funnel function is used to search for an event chain in a sliding time window and count the maximum number of consecutive events in the event chain. The window funnel function starts the count from the first event in the event chain that you specify, check the events in sequence, and then return the maximum number of consecutive events.

The window funnel function works based on the following algorithm:

-   The function starts the count from the first event in the event chain and sets the initial value of the event counter to 1. Then, the sliding time window starts.
    
-   In the sliding time window, if events in the event chain occur in sequence, the event counter is incremented.
    
-   In the sliding time window, if the sequence of events in the event chain is disrupted, the event counter stops. The search stops, and a new search starts. The maximum number of consecutive events is counted until the end of the last search.
    
-   At the end of the last search, if multiple values of the count exist, the function returns the maximum value of the count. The maximum value of the count indicates the maximum number of consecutive events.
    

For example, you specify a sliding time window of 100 seconds and the following pattern for the event chain: Event 1, Event 2, Event 3, Event 4, and Event 5. However, the events in the event chain occur in the following sequence: Event 1, Event 2, Event 4, Event 5, Event 1, and Event 3. In the sliding time window, the maximum number of consecutive events is 2. A value of 2 indicates the sequential relationship between Event 1 and Event 2.

**Important**

-   The function must start the count from the first event in the event chain. For example, if the function starts the count in the sequence of Event 2, Event 3, and Event 4, the function returns 0.
    
-   The function must count all events that occur in the event chain. For example, Event 4 occurs in the sliding time window but Event 3 does not. In this case, this search is not involved in counting the maximum number of consecutive events.
    

![窗口漏斗函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1680621461/p337235.png)

## Syntax

The window funnel function supports the following syntax.

-   If the value of the event\_id parameter is specified in an event chain, you can use the following syntax:
    
    ```
    window_funnel(sliding_window, timestamp, event_id, ARRAY[event_list01, event_list02...])
    ```
    
-   If the value of the event\_id parameter is not specified in an event chain and you want to use a custom value of the event\_id parameter, you can use the following syntax, which is more flexible:
    
    ```
    window_funnel(sliding_window, timestamp, ARRAY[event_id=event_list01, event_id=event_list02...])
    ```
    

## Parameters

**Parameter**

**Description**

_sliding\_window_

The sliding time window. Unit: seconds. The value of this parameter is of the bigint type.

_timestamp_

The timestamp. Unit: seconds. The value of this parameter is of the bigint type. We recommend that you use the built-in \_\_time\_\_ field of Simple Log Service.

_event\_id_

The name of the log field. The value of this parameter is the name of an event. Example: Event A, Event B, or Event C. The value of this parameter is of the varchar type.

_event\_list_

The custom event chain, which can contain up to 32 events. The value of this parameter is of the array type. Examples:

-   ARRAY\['A', 'B', 'C'\]
    
-   ARRAY\[event\_id='A', event\_id='B', event\_id='C'\]
    

## Examples

An e-commerce store hosted a promotional activity and analyzed the conversion performance of the activity by using the window funnel function. The conversion process consists of three steps: browsing information about a commodity, adding the commodity to the online shopping cart, and then purchasing the commodity. The following figure shows a sample log that is collected by Simple Log Service.

![漏斗函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1680621461/p342033.png)

**Log field**

**Description**

behavior\_type

The type of user behavior. Valid values:

-   pv: Browse information about a commodity.
    
-   cart: Add a commodity to the online shopping cart.
    
-   buy: Purchase a commodity.
    

category\_id

The category ID of the commodity.

item\_id

The ID of the commodity.

timestamp

The point in time at which the user behavior occurred.

user\_id

The ID of the user.

### Example 1

Analyze the purchase behavior that users performed within 24 hours.

-   Query statement
    
    ```
    * |
    SELECT
      user_id,
      window_funnel(
        86400,
        timestamp,
        ARRAY [behavior_type='pv', behavior_type='cart',behavior_type='buy']
      ) AS levels
    GROUP BY
      user_id
    ORDER BY
      user_id
    LIMIT
      1000
    ```
    
-   Query and analysis results
    
    -   The value of the levels field is 3 for user 24. The user completes the purchase in the sequence of browsing information about a commodity, adding the commodity to the online shopping cart, and then purchasing the commodity.
        
    -   The value of the levels field is 2 for user 14. The user browses information about a commodity and adds the commodity to the online shopping cart but does not complete the purchase.
        
    
    ![漏斗函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2680621461/p342053.png)
    

### Example 2

Analyze the numbers of users who have different types of user behavior.

-   Query statement
    
    ```
    * |
    SELECT
      levels,
      count,
      sum(count) over(
        ORDER BY
          levels DESC
      ) AS total
    FROM  (
        SELECT
          levels,
          count(1) AS count
        FROM      (
            SELECT
              user_id,
              window_funnel(
                86400,
                timestamp,
                ARRAY [behavior_type='pv', behavior_type='cart',behavior_type='buy']
              ) AS levels
            FROM          log
            GROUP BY
              user_id
          )
        GROUP BY
          levels
        ORDER BY
          levels
      )
    ```
    
-   Query and analysis results
    
    -   The number of users who browse information about a commodity is 513,194. The number of users who do not continue their purchase process after they browse information about the commodity is 138,491.
        
    -   The number of users who add the commodity to the online shopping cart is 374,703. The number of users who do not continue the purchase process after they add the commodity to the online shopping cart is 198,642.
        
    -   The number of users who purchase the commodity is 176,061.
        
    
    ![漏斗函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9847990461/p342122.png)
    

### Example 3

Calculate the conversion rate of this promotional activity.

-   Absolute conversion rate: the proportion of the users who perform a type of user behavior to the total number of users.
    
-   Relative conversion rate: the proportion of the users who perform a type of user behavior to the users who perform a different type of user behavior. The latter type of user behavior occurred before the former type of user behavior.
    

-   Query statement
    
    ```
    * |
    SELECT
      *,
      100.0 * total /(sum(count) over()) AS "Absolute conversion rate",
      if(
        lag(total, 1, 0) over() = 0,
        100,
        (100.0 * total / lag(total, 1, 0) over())
      ) AS "Relative conversion rate"
    FROM  (
        SELECT
          levels,
          count,
          sum(count) over(
            ORDER BY
              levels DESC
          ) AS total
        FROM      (
            SELECT
              levels,
              count(1) AS count
            FROM          (
                SELECT
                  user_id,
                  window_funnel(
                    86400,
                    timestamp,
                    ARRAY [behavior_type='pv', behavior_type='cart',behavior_type='buy']
                  ) AS levels
                FROM              log
                GROUP BY
                  user_id
              )
            GROUP BY
              levels
          )
        ORDER BY
          levels
      )
    ```
    
-   Query and analysis results
    
    -   Query and analysis results in a table![漏斗函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0947990461/p342239.png)
        
    -   Query and analysis results in a funnel chart![漏斗函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2680621461/p342265.png)
