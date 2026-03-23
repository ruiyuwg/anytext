**Parameter**

**Type**

**Description**

**Example**

object

Log group

Topic

string

The topic of the log. This is a user-defined field that distinguishes log data with different features.

topic-test

Source

string

The source of the log. For example, the IP address of the machine that generated the log.

192.1.1.1

LogTags

array

The list of tags for the log.

[LogTag](/help/en/sls/developer-reference/api-sls-2020-12-30-struct-logtag)

A tag for the log.

LogItems

array

A list of logs.

[LogItem](/help/en/sls/developer-reference/api-sls-2020-12-30-struct-logitem)

A log.
