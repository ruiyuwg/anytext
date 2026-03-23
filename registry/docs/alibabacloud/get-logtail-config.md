Queries a specified Logtail configuration.

## Request syntax

```
aliyunlog log get_logtail_config --project_name=<value> --config_name=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the get\_logtail\_config command.

**Parameter**

**Type**

**Required**

**Example**

**Description**

\--project\_name

String

Yes

aliyun-test-project

The name of the project.

\--config\_name

String

Yes

config\_name2

The name of the Logtail configuration.

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to query a Logtail configurations named config\_name2.
    
    ```
    aliyunlog log get_logtail_config --project_name="aliyun-test-project" --config_name="config_name2"
    ```
    
    To save the returned Logtail configuration to a specified file, run the following command:
    
    ```
    aliyunlog log get_logtail_config --project_name="aliyun-test-project" --config_name="config_name2" >>export_logtail_config.json
    ```
    
-   Sample responses
    
    ```
    {
      "configName": "config_name2",
      "createTime": 1719370155,
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
        "timeKey": "time",
        "topicFormat": "none"
      },
      "inputType": "file",
      "lastModifyTime": 1719370155,
      "logSample": "xxx 2017-11-11 11:11:11 hello alicloud.",
      "outputDetail": {
        "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
        "logstoreName": "logstore-a",
        "region": "cn-hangzhou",
        "telemetryType": "logs"
      },
      "outputType": "LogService"
    }
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-getconfig#api-detail-45).

## API reference

[GetConfig](/help/en/sls/developer-reference/api-sls-2020-12-30-getconfig)
