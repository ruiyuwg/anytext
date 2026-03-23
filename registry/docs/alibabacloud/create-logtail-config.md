Creates a Logtail configuration.

## Request syntax

```
aliyunlog log create_logtail_config --project_name=<value> --config_detail=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the create\_logtail\_config command.

**Parameter**

**Type**

**Required**

**Example**

**Description**

\--project\_name

String

Yes

test

The name of the project.

\--config\_detail

String

Yes

file://./logtailconfig.json

The path of the Logtail configuration file. For more information, see [Logtail configurations](/help/en/sls/developer-reference/logtail-configurations#concept-f3n-s5q-12b).

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

1.  Create the logtailconfig.json file in which the Logtail configuration is named config\_name2. The following example shows the content of the createshipper.json file:
    
    ```
    {
      "config_name": "config_name2",
      "logstore_name": "logstore-a",
      "file_pattern": "file_pattern",
      "time_format": "time_format",
      "log_path": "/log_path",
      "endpoint": "endpoint",
      "log_parse_regex": "xxx ([\\w\\-]+\\s[\\d\\:]+)\\s+(.*)",
      "log_begin_regex": "xxx.*",
      "reg_keys": [
        "time",
        "value"
      ],
      "topic_format": "none",
      "filter_keys": [
        "time",
        "value"
      ],
      "filter_keys_reg": [
        "time",
        "value"
      ],
      "logSample": "xxx 2017-11-11 11:11:11 hello alicloud."
    }
    ```
    
2.  Use the default account to create a Logtail configuration whose name is config\_name2.
    
    ```
    aliyunlog log create_logtail_config --project_name="aliyun-test-project" --config_detail="file://./logtailconfig.json"
    ```
    
3.  Query the created Logtail configuration. Run the following command:
    
    ```
    aliyunlog log get_logtail_config --project_name="aliyun-test-project" --config_name="config_name2"
    ```
    
    The following output is returned:
    
    ```
    { "configName": "config_name2",
      "createTime": 1622118681,
      "inputDetail": {
        "adjustTimezone": false,
        "delayAlarmBytes": 0,
        "delaySkipBytes": 0,
        "discardNonUtf8": false,
        "discardUnmatch": true,
        "dockerFile": false,
        "enableRawLog": false,
        "enableTag": false,
        "fileEncoding": "utf8",
        "filePattern": "file_pattern",
        "filterKey": [
          "time",
          "value"
        ],
        "filterRegex": [
          "time",
          "value"
        ],
        "key": [
          "time",
          "value"
        ],
        "localStorage": true,
        "logBeginRegex": "xxx.*",
        "logPath": "/log_path",
        "logTimezone": "",
        "logType": "common_reg_log",
        "maxDepth": 1000,
        "maxSendRate": -1,
        "mergeType": "topic",
        "preserve": true,
        "preserveDepth": 0,
        "priority": 0,
        "regex": "xxx ([\\w\\-]+\\s[\\d\\:]+)\\s+(.*)",
        "sendRateExpire": 0,
        "sensitive_keys": [],
        "tailExisted": false,
        "timeFormat": "time_format",
        "topicFormat": "none"
      },
      "inputType": "file",
      "lastModifyTime": 1622118681,
      "logSample": "xxx 2017-11-11 11:11:11 hello alicloud.",
      "outputDetail": {
        "endpoint": "cn-hangzhou-b-intranet.log.aliyuncs.com",
        "logstoreName": "logstore-a",
        "region": "cn-hangzhou-b"
      },
      "outputType": "LogService"
    }
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-createconfig#api-detail-45).

## API reference

[CreateConfig](/help/en/sls/developer-reference/api-sls-2020-12-30-createconfig)
