This topic describes the time zone format for the Scheduled SQL feature.

## Time zone format settings

The time zone for Scheduled SQL tasks uses the format `{±offset hours}{minutes}`.

-   Offset hours: A value from -12 to +14.
    
-   Minutes: Valid values are 00, 30, and 45.
    
-   Time zone: A value from -1200 to +1400.
    

**Important**

Both hours and minutes must be two-digit numbers.

When you create a Scheduled SQL task, set **Scheduling Interval** to **Cron** and select a time zone.![Select a time zone](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8534764561/p270335.png)
