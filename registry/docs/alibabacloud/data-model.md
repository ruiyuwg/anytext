This topic describes the data model of logs that are sent to Simple Log Service.

The following sections describe the basic terms in Simple Log Service.

## Region

A region is a service node of Alibaba Cloud. Alibaba Cloud deploys services in multiple regions. You can select a region closest to you. This reduces access latency and allows you to have better user experience.

## Project

A project is a basic management unit in Simple Log Service. It is used to isolate and control resources. You can use a project to manage all logs and log sources of an application.

## Logstore

A Logstore is the unit for log collection, storage, and consumption. Each Logstore belongs to a single project. Each project can have multiple Logstores. You can create multiple Logstores for a project. We recommend that you create a Logstore for each type of logs in an application. For example, you have a gaming application named big-game. Three types of logs are generated on the server: operational logs, application logs, and access logs. In this case, you can create a project named big-game and then create a Logstore for each of the three types of logs in this project. Then you can use the Logstores to store and consume the logs.

## Log entry

A log entry is the basic unit of data that is processed in Simple Log Service. Simple Log Service uses a semi-structured data model to define a log entry. The following table describes the model.

**Field**

**Description**

**Requirement**

time

The time when a log entry is generated. This field is a reserved field. In most cases, the field value is generated based on the time information in the log entry.

The value is a UNIX timestamp. It represents the number of seconds that have elapsed since 00:00:00 on January 1, 1970, 00:00:00 UTC.

topic

The user-defined field in a log entry. This field can be used to mark a group of logs. For example, you can specify topics for access logs based on sites.

The field value can be a string of up to 128 bytes in length, including an empty string. The default value of this field is an empty string.

source

The source of a log entry. For example, the value of this parameter can be the IP address of the server where the log entry is generated.

The field value is a UTF-8 encoded string of up to 128 bytes in length. The default value of this field is an empty string.

content

The specific content of a log entry. The content consists of one or more content items. Each content item is a key-value pair.

The key is a UTF-8 encoded string of up to 128 bytes in length. It can contain letters, digits, and underscores (\_). The key cannot start with a digit and cannot contain the following keywords:

-   `__time__`
    
-   `__source__`
    
-   `__topic__`
    
-   `__partition_time__`
    
-   `__extract_others__`
    
-   `__extract_others__`
    

A value is a UTF-8 encoded string of up to 1024 × 1024 bytes in length.

tags

Log tags include:

-   Custom tags: the tags that you add when you call the [PutLogs](/help/en/sls/putlogs#reference-a5t-kxr-zdb) operation to write data.
    
-   System tags: the tags that are added by Simple Log Service, including `__client_ip__` and `__receive_time__`.
    

The field value is a dictionary. Both keys and values are strings. The field name is prefixed in the format of `__tag__:`.

## Topic

Logs in a Logstore can be grouped by topic. You can specify a topic for logs that are written to Simple Log Service. Then, you can specify the topic when you query the logs. For example, you can use your user ID as the log topic when you write logs to Simple Log Service. In this way, you can view only your own logs when you query logs by topic. If you do not need to classify logs in a Logstore, use the same topic for all logs.

**Note**

The default log topic is an empty string. If you do not specify a log topic when you write or query logs, you can use the empty string as the default topic.

Logs that are generated in different scenarios may have different formats. The following example describes how to convert a raw NGINX access log entry into the data model that is required by Simple Log Service. In this example, the IP address of your NGINX server is 10.10.10.1. The following sample is a raw log entry on this server:

```
10.1.1.1 - - [01/Mar/2012:16:12:07 +0800] "GET /Send? AccessKeyId=82251054** HTTP/1.1" 200 5 "-" "Mozilla/5.0 (X11; Linux i686 on x86_64; rv:10.0.2) Gecko/20100101 Firefox/10.0.2"
```

The following table describes how to convert the raw log entry into the data model that is required by Simple Log Service.

**Field**

**Field value**

**Description**

topic

None

The default value (empty string) is used.

time

1330589527

The time when the log entry is generated. The time is converted from the timestamp of the raw log entry. Unit: seconds.

source

10.10.10.1

The IP address of the server where the log entry is collected.

content

Key-value pairs

The content of the log entry.

You can decide how to extract the raw log content and combine the extracted content into key-value pairs. The following table describes custom key-value pairs.

**key**

**value**

ip

10.1.1.1

method

GET

status

200

length

5

ref\_url

\-

browser

Mozilla/5.0 (X11; Linux i686 on x86\_64; rv:10.0.2) Gecko/20100101 Firefox/10.0.2

## Logs

A collection of log entries.

## LogGroup

A group of log entries.

## LogGroupList

A collection of log groups that are used to return results.

## Encoding rule

The following table lists the content encoding method that the system supports. More encoding methods will be available in the future. The supported encoding methods are specified in the Content-Type field in the RESTful API.

**Description**

**Description**

**Content-Type**

Protobuf

The data model is encoded by Protocol Buffer (Protobuf).

application/x-protobuf

For more information about the Protobuf format, see [Data encoding](/help/en/sls/developer-reference/data-encoding#reference-uvb-r5q-12b).

**Note**

Protobuf does not require the key-value pair to be unique. However, you cannot use the same key. Otherwise, an error that indicates undefined behavior will occur.

Protobuf must follow the order of field number to encode fields in a log entry. Otherwise, data may fail to be parsed.
