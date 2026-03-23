Logtail provides plug-ins for data processing to parse raw logs into structured data.

## **Background information**

Logtail plug-ins for data processing are classified into native plug-ins and extended plug-ins.

-   Native plug-ins provide high performance and are suitable for most business scenarios. We recommend that you use native plug-ins.
    
-   Extended plug-ins provide more features. If you cannot process complex business logs by using native plug-ins, you can use extended plug-ins to parse the logs. However, system performance may be compromised in this case.
    

## Limits

-   **Limits on performance**
    
    -   If you use extended plug-ins to process logs, Logtail consumes more resources. Most of the resources are CPU resources. You can modify the Logtail parameter settings based on your business requirements. For more information, see [Configure the startup parameters of Logtail](/help/en/sls/configure-the-startup-parameters-of-logtail#concept-sdg-czb-wdb).
        
    -   If raw logs are generated at a speed that exceeds 5 MB/s, we recommend that you do not use complicated combinations of plug-ins to process logs. You can use extended plug-ins to preliminarily process logs, and then use the data transformation feature to further process the logs. For more information, see [Data transformation](/help/en/sls/data-transformation-overview#concept-1130481).
        
-   **Limits on log collection**
    
    -   Extended plug-ins use the line mode to process text logs. In this mode, the metadata of files such as the `__tag__:__path__` and `__topic__` fields, is stored in each log.
        
    -   If you add extended plug-ins to process logs, the following limits apply to tag-related features:
        
        -   The contextual query and LiveTail features are unavailable. If you want to use the features, you must add the aggregators configuration.
            
        -   The `__topic__` field is renamed to `__log_topic__`. After you add the aggregators configuration, logs contain the `__topic__` and `__log_topic__` fields. If you do not require the `__log_topic__` field, you can use the processor\_drop plug-in to delete the field. For more information, see [processor\_drop](/help/en/sls/drop-fields#concept-2010732).
            
        -   For tag fields such as `__tag__:__path__`, the original field indexes no longer take effect. You must recreate indexes for the fields. For more information, see [Create indexes](/help/en/sls/create-indexes).
            
-   **Limits on plug-in combinations**
    
    -   For plug-ins of Logtail earlier than V2.0:
        
        -   You cannot add native plug-ins and extended plug-ins at the same time.
            
        -   You can use native plug-ins only to collect text logs. When you add native plug-ins, take note of the following items:
            
            -   You must add one of the following Logtail plug-ins for data processing as the first plug-in: Data Parsing (Regex Mode), Data Parsing (Delimiter Mode), Data Parsing (JSON Mode), Data Parsing (NGINX Mode), Data Parsing (Apache Mode), and Data Parsing (IIS Mode).
                
            -   After you add the first plug-in, you can add one Time Parsing plug-in, one Data Filtering plug-in, and multiple Data Masking plug-ins.
                
    -   For plug-ins of Logtail V2.0: You can add extended plug-ins only after you add native plug-ins.
        
-   **Limits on native plug-in-related parameter combinations**
    
    For native plug-ins of Logtail **earlier than V2.0**, we recommend that you use only the following parameter combinations. The plug-ins refer to Data Parsing (Regex Mode), Data Parsing (JSON Mode), Data Parsing (Delimiter Mode), Data Parsing (NGINX Mode), Data Parsing (Apache Mode), and Data Parsing (IIS Mode). For other parameter combinations, Simple Log Service does not ensure configuration effects.
    
    -   Upload logs that are parsed.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1304240271/p801939.png)
        
    -   Upload logs that are obtained after successful parsing, and raw ones if the parsing fails.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1304240271/p801942.png)
        
    -   Upload logs obtained after parsing. Add a raw log field to the logs if the parsing succeeds, and raw logs if it fails.
        
        For example, if a raw log is `"content": "{"request_method":"GET", "request_time":"200"}"` and it's successfully parsed, the system adds a raw log field, which is specified by the **New Name of Original Field** parameter. If you do not configure the parameter, the original field name is used. The field value is `{"request_method":"GET", "request_time":"200"}`.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1304240271/p801943.png)
        

## **Add plug-ins**

### Add plug-ins when you modify a Logtail configuration

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the one you want to manage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  Choose **Log Storage** > **Logstores**. Click **\>** of the required Logstore. Then, choose **Data Collection** > **Logtail Configurations**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1304240271/p786647.png)
    
4.  In the **Logtail Configuration** list, find the required Logtail configuration, and then click **Manage Logtail Configuration** in the **Actions** column.
    
5.  Click **Edit** in the upper-left corner of the page. In the **Processor Configurations** section, add Logtail plug-ins, and then click **Save**.
    

### Add plug-ins when you create a Logtail configuration

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  On the right side of the page that appears, click the **Quick Data Import** card.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1304240271/p786689.png)
    
3.  In the **Import Data** dialog box, click a card, follow the instructions to configure parameters in the wizard, and then add Logtail plug-ins in the **Logtail Configuration** step of the wizard. For more information, see [Collect text logs from servers](/help/en/sls/collect-host-logs).
    
    **Note**
    
    The Logtail plug-in configuration that you add when you create a Logtail configuration works in the same manner as the Logtail plug-in configuration that you add when you modify the Logtail configuration.
    

## Logtail plug-ins for data processing

### **Native plug-ins**

**Plug-in**

**Description**

Data Parsing (Regex Mode)

[Native plug-in: Data Parsing (Regex Mode)](/help/en/sls/regular-parsing)

Data Parsing (JSON Mode)

[Native plug-in: Data Parsing (JSON Mode)](/help/en/sls/json-parsing)

Data Parsing (Delimiter Mode)

[Native plug-in: Data Parsing (Delimiter Mode)](/help/en/sls/separator-pattern-resolution)

Data Parsing (NGINX Mode)

[Native plug-in: Data Parsing (NGINX Mode)](/help/en/sls/nginx-schema-parsing)

Data Parsing (Apache Mode)

[Native plug-in: Data Parsing (Apache Mode)](/help/en/sls/apache-pattern-parsing)

Data Parsing (IIS Mode)

[Native plug-in: Data Parsing (IIS Mode)](/help/en/sls/iis-schema-parsing)

Time Parsing

[Native plug-in: Time Parsing](/help/en/sls/time-parsing)

Data Filtering

[Native plug-in: Data Filtering](/help/en/sls/filtration-treatment)

Data Masking

[Native plug-in: Data Masking](/help/en/sls/desensitization-treatment)

### **Extended plug-ins**

**Operation**

**Description**

Extract fields

[Regex mode](/help/en/sls/extract-content-from-log-fields#section-0ep-ioy-sy9)

[Anchor mode](/help/en/sls/extract-content-from-log-fields#section-z12-grj-9sp)

[CSV mode](/help/en/sls/extract-content-from-log-fields#section-xa7-r2y-zuo)

[Single-character delimiter mode](/help/en/sls/extract-content-from-log-fields#section-dan-hh1-4ps)

[Multi-character delimiter mode](/help/en/sls/extract-content-from-log-fields#section-3zc-g8s-zuw)

[Key-value pair mode](/help/en/sls/extract-content-from-log-fields#section-tji-pwi-7m5)

[Grok mode](/help/en/sls/extract-content-from-log-fields#section-67d-dzp-uga)

Add fields

[Extended plug-in: Add Field](/help/en/sls/add-fields#concept-2010731)

Drop fields

[Extended plug-in: Drop Field](/help/en/sls/drop-fields#concept-2010732)

Rename fields

[Extended plug-in: Rename Fields](/help/en/sls/rename-fields#concept-2010739)

Encapsulate fields

Encapsulates one or more fields into a JSON object-formatted field. For more information, see [Extended plug-in: Encapsulate Fields](/help/en/sls/encapsulate-fields#concept-2010738).

Expand JSON fields

[Extended plug-in: Expand JSON Field](/help/en/sls/expand-json-fields#concept-2010735)

Filter logs

Uses regular expressions to match the values of log fields and filter logs. For more information, see [processor\_filter\_regex](/help/en/sls/filter-logs#section-qxi-2gh-kk6).

Uses regular expressions to match the names of log fields and filter logs. For more information, see [processor\_filter\_key\_regex](/help/en/sls/filter-logs#section-hri-qy7-h56).

Extract log time

Parses the time field in raw logs and specifies the parsing result as the log time. For more information, see [Go language time format](/help/en/sls/extract-log-time#section-xxl-q69-w5q).

Convert IP addresses

Converts IP addresses in logs to geographical locations. A geographical location includes the following information: country, province, city, longitude, and latitude. For more information, see [Extended plug-in: Convert IP Addresses](/help/en/sls/convert-ip-addresses#concept-2010729).

Mask sensitive data

Replaces sensitive data in logs with specified strings or MD5 hash values. For more information, see [Extended plug-in: Data Masking](/help/en/sls/desensitization-plug-in#db09c59087exo).

Map field values

[Extended plug-in: Field Value Mapping](/help/en/sls/map-field-values#concept-2293488)

Encrypt fields

[Extended plug-in: Field Encryption](/help/en/sls/encrypt-fields#concept-2293532)

Encode and decode data

[Extended plug-in: BASE64 (Decoding),](/help/en/sls/encode-and-decode-data#section-1x2-yk0-g4l)

[Extended plug-in: BASE64 (Encoding)](/help/en/sls/encode-and-decode-data#section-5bw-71r-bxp)

[Extended plug-in: MD5](/help/en/sls/encode-and-decode-data#section-2ym-k1j-gba)

Convert logs to metrics

Converts the collected logs to Simple Log Service metrics. For more information, see [Extended plug-in: Log to Metric](/help/en/sls/log-to-metric).

Convert logs to traces

Converts the collected logs to Simple Log Service traces. For more information, see [Extended plug-in: Log to Trace](/help/en/sls/log-to-trace).
