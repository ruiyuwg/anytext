This topic lists all the functions for data transformation tasks.

## Global processing functions

**Function Classification**

**Function Name**

**Description**

[Flow control functions](/help/en/sls/flow-control-functions#concept-1597668)

e\_if

Performs an operation if a specified condition is met. You can specify multiple condition-operation pairs.

-   If a condition is met, the function performs the operation that corresponds to the condition. If the condition is not met, the function does not perform the operation, but evaluates the next condition.
    
-   If the function performs an operation that deletes a log, the function no longer performs other operations on the log.
    

e\_if\_else

Performs an operation based on the evaluation result of a condition.

e\_switch

A combination of conditions and operations.

-   If a condition is met, the function performs the operation that corresponds to the condition and returns the result. If the condition is not met, the function does not perform the operation, but evaluates the next condition.
    
-   If no specified conditions are met and the default parameter is configured, the function performs the operation that is specified by the default parameter and returns the result.
    
-   If an operation deletes a log, no subsequent operations are executed.
    

e\_compose

Combines multiple operations.

-   The function is commonly used in the e\_if, e\_switch, or e\_if\_else function.
    
-   The function performs specified operations on a log in sequence and returns the result.
    
-   If the function performs an operation that deletes a log, the function no longer performs other operations on the log.
    

[Event operation functions](/help/en/sls/event-processing-functions#concept-1180783)

e\_drop

Discards a log if a specified condition is met.

e\_keep

Retains a log if a specified condition is met.

e\_split

Splits a log into multiple logs based on the value of a specified field. You can also use the JMESPath expression to extract the value of the field, and then split the log.

e\_output

Outputs logs to a specified Logstore. Configure the topic, source, tag, and shard hash information for output. After output, subsequent transformation rules are not executed for the log.

e\_coutput

Outputs logs to a specified Logstore. Configure the topic, source, tag, and shard hash information for output. After output, subsequent transformation rules continue to be executed.

e\_to\_metric

Converts logs to metrics that can be stored in a Metricstore.

[Field operation functions](/help/en/sls/field-processing-functions#concept-1180785)

v

Extracts the value of a field from a log. If you specify the names of multiple fields for the function, the function returns the value of the first field that exists in the log.

e\_set

Adds a field or specifies a new value for an existing field.

e\_drop\_fields

Deletes the log fields that meet a specified condition.

e\_keep\_fields

Retains the log fields that meet a specified condition.

e\_pack\_fields

Encapsulates log fields and assigns the log fields as a value to a new field.

e\_rename

Renames the log fields that meet a specified condition.

[Value extraction functions](/help/en/sls/value-extraction-functions#concept-1180789)

e\_regex

Extracts the value of a field based on a regular expression and assigns the value to other fields.

e\_json

Manages JSON objects in a specified field in a log. You can configure the parameters to expand JSON data, extract JSON data using the JMESPath expression, or expand the extracted JSON data.

e\_kv

Extracts key-value pairs from multiple input fields using a specified quote.

e\_kv\_delimit

Extracts key-value pairs from input fields using a specified delimiter.

e\_csv

Extracts multiple fields from a specified field using a specified delimiter and predefined field names. The default delimiter is a comma (,).

e\_tsv

Extracts multiple fields from a specific field using a custom delimiter and predefined field names. The default delimiter is `\t`.

e\_psv

Extracts multiple fields from a specified source field using a specified delimiter and predefined field names. The default delimiter is a vertical bar (|).

e\_syslogrfc

According to the Syslog protocol, the facility and severity values are derived from the priority value, and the corresponding log level is determined.

e\_anchor

Extracts strings using the rules specified by anchor\_rules.

[Mapping and enrichment functions](/help/en/sls/mapping-and-enrichment-functions#concept-1180791)

e\_dict\_map

The field mapping dictionary maps an input field to a new field.

e\_table\_map

You can look up the corresponding row in the mapping table and return the field value based on the input field.

e\_tablestore\_map

Enriches a raw log using a data table in Tablestore as the dimension table.

e\_redis\_map

Enriches a raw log using a data table in ApsaraDB for Redis as the dimension table.

## Expression functions

**Function classification**

**Function name**

**Description**

[Event check functions](/help/en/sls/event-check-functions#concept-1130505)

e\_has

Checks whether a field exists.

e\_not\_has

Checks whether a field does not exist.

e\_search

Searches for a log using a query syntax that is similar to Lucene.

e\_match, e\_match\_all, and e\_match\_any

Checks whether the value of a log field meets the conditions specified in a regular expression.

[Operator functions](/help/en/sls/operator-functions#concept-1130508)

op\_if

Returns the value of an expression based on a specified condition.

op\_ifnull

Returns the value of the first expression whose value is not None.

op\_coalesce

Returns the value of the first expression whose value is not None.

op\_nullif

Returns none if the value of Expression 1 is equal to the value of Expression 2. If the values of Expression 1 and Expression 2 are different, the value of Expression 1 is returned.

op\_and

Evaluates the specified expressions using the logical AND operator and returns True if all specified expressions evaluate to true. The value of each expression can be of an arbitrary data type.

op\_not

Evaluates a specified expression using the logical NOT operator and returns the inverse Boolean value of the specified expression. The value of the expression can be of an arbitrary data type.

op\_or

Evaluates the specified expressions using the logical OR operator, and returns True if a specified expression evaluates to true or returns False if all specified expressions evaluate to false. The value of each expression can be of an arbitrary data type.

op\_eq

Calculates based on the `a==b` condition, returning True or False.

op\_ge

Calculates based on the `a>=b` condition, returning True or False.

op\_gt

Calculates based on the `a>b` condition, returning True or False.

op\_le

Calculates based on the `a<=b` condition, returning True or False.

op\_lt

Calculates based on the `a<b` condition, returning True or False.

op\_ne

Calculates based on the `a!=b` condition, returning True or False.

op\_len

Calculates the number of characters in a text string. This function applies to strings or expressions that return tuples, lists, or dictionaries.

op\_in

Checks whether a string, tuple, list, or dictionary contains a specified element and returns True or False.

op\_not\_in

Checks whether a string, tuple, list, or dictionary does not contain a specified element and returns True or False.

op\_slice

Truncates the specified string, array, or tuple.

op\_index

Returns the element that corresponds to the index of a specified string, array, or tuple.

op\_add

Calculates the sum of multiple values. The values can be strings or numbers.

op\_max

Returns the largest value among the values of multiple fields or expressions.

op\_min

Returns the smallest value among the values of multiple fields or expressions.

[Conversion functions](/help/en/sls/conversion-functions#concept-1130510)

ct\_int

Converts the value of a field or an expression to an integer.

ct\_float

Converts the value of a field or an expression to a floating-point number.

ct\_str

Converts the value of a field or an expression to a string.

ct\_bool

Converts the value of a field or an expression to a Boolean value.

ct\_chr

Converts the ANSI or Unicode value of a field or an expression to a character.

ct\_ord

Converts the characters in a field or expression to their corresponding ANSI or Unicode values.

ct\_hex

Converts the value of a field or an expression to a hexadecimal number.

ct\_oct

Converts the value of a field or an expression to an octal number.

ct\_bin

Converts the value of a field or an expression to a binary number.

bin2oct

Converts a binary byte string to an octal string.

bin2hex

Converts a binary byte string to a hexadecimal string.

[Arithmetic functions](/help/en/sls/arithmetic-functions#concept-1130512)

op\_abs

Returns the absolute value of an input value.

op\_div\_floor

Calculates the integer division of the input value.

op\_div\_true

Divides the input value.

op\_pow

Returns an input value raised to a specified power.

op\_mul

Multiplies an input value.

op\_neg

Returns the opposite number of an input value.

op\_mod

Performs a modulo calculation on the input value.

op\_sub

Applies a subtraction to the input value.

op\_round

Rounds the incoming value.

op\_sum

Returns the sum of input values.

mat\_ceil

Rounds an input value rounded up to the nearest integer.

mat\_exp

Represents the exponential function with base e.

mat\_fabs

Returns the absolute value of an input value.

mat\_floor

Rounds an input value down to the nearest integer.

mat\_log

Calculates the logarithm of the input value.

mat\_log10

Returns the base-10 logarithm of an input value.

mat\_sqrt

Returns the square root of an input value.

mat\_degrees

Converts radians to degrees.

mat\_radians

Converts degrees to radians.

mat\_sin

Returns the sine of an input value in radians.

mat\_cos

Returns the cosine of an input value in radians.

mat\_tan

Returns the tangent of an input value in radians.

mat\_acos

Returns the arc cosine of an input value in radians.

mat\_asin

Returns the arc sine of an input value in radians.

mat\_atan

Returns the arc tangent of an input value in radians.

mat\_atan2

Returns the arc tangent of X and Y coordinates.

mat\_atanh

Returns the inverse hyperbolic tangent of an input value.

mat\_hypot

Compute the Euclidean norm of the input value.

[String functions](/help/en/sls/string-functions#concept-1130517)

str\_format

You can format the string using the specified format.

str\_join

Concatenates input strings to generate a new string using a specified connector.

str\_zip

Concurrently splits two values or strings that are returned by expressions and combines the results into one string.

str\_encode

Encodes a string using a specified encoding format.

str\_decode

Decodes an input value using a specified encoding format.

str\_hex\_escape\_encode

Escapes special characters. The function can escape hexadecimal characters to Chinese characters.

str\_sort

Sorts a specified object.

str\_reverse

Reverses a string.

str\_replace

Replaces an existing string with a specified string based on a specified rule.

str\_logtash\_config\_normalize

Converts data in the Logstash configuration language to the JSON format.

str\_translate

Replaces specified characters in a string with mapping characters.

str\_strip

Deletes specified characters from a string.

str\_lstrip

Deletes specified characters from the start of a string.

str\_rstrip

Deletes specified characters from the end of a string.

str\_lower

Converts all uppercase letters in a string to lowercase letters.

str\_upper

Converts all lowercase letters in a string to uppercase letters.

str\_title

Capitalizes the first letter of each word in a string and converts the other letters in the string to lowercase letters.

str\_capitalize

Capitalizes the first letter of a string and converts the other letters in the string to lowercase letters.

str\_swapcase

Converts the uppercase letters in a string to lowercase letters and lowercase letters to uppercase letters.

str\_count

Counts the number of occurrences of a character in a string.

str\_find

Checks whether a string contains a specified substring.

str\_rfind

Returns the position of the last occurrence of a specified character in a string.

str\_endswith

Checks whether a string ends with a specified suffix.

str\_startswith

Checks whether a string starts with a specified string.

str\_split

Splits a string using a specified delimiter.

str\_splitlines

Splits a string using a line feed.

str\_partition

Splits a string into three parts from left to right using a specified delimiter.

str\_rpartition

Splits a string into three parts from right to left using a specified delimiter.

str\_center

Pads a string to a specified length using a specified character.

str\_ljust

Pads a string to a specified length using a specified character from the end of the string.

str\_rjust

Pads a string to a specified length using a specified character from the start of the string.

str\_zfill

Pads a string to a specified length using 0 from the start of the string.

str\_expandtabs

Converts `\t` characters in a string to spaces.

str\_isalnum

Checks whether a string contains only letters and digits.

str\_isalpha

Checks whether a string contains only letters.

str\_isascii

Checks whether a string is in the ASCII table.

str\_isdecimal

Checks whether a string contains only decimal characters.

str\_isdigit

Checks whether a string contains only digits.

str\_isidentifier

Checks whether a string is a valid Python identifier or checks whether a variable name is valid.

str\_islower

Determines whether a string contains only lowercase letters.

str\_isnumeric

Checks if the string contains only digits.

str\_isprintable

Checks whether all characters in a string are printable characters.

str\_isspace

Checks whether a string contains only spaces.

str\_istitle

Checks whether the first letter of each word in a string is in uppercase and the other letters in the string are in lowercase.

str\_isupper

Checks whether all letters in a string are in uppercase.

str\_uuid

Generates a random universally unique identifier (UUID).

[Date and time functions](/help/en/sls/date-and-time-functions#concept-1130519)

dt\_parse

Converts a value or the value of a time expression to a datetime object.

dt\_str

Converts a value or the value of a time expression to a string.

dt\_parsetimestamp

Converts a value or the value of a time expression to a UNIX timestamp.

dt\_prop

Returns a specific attribute of a value, or returns a specific attribute of the value of a time expression. The attribute can be day or year.

dt\_now

Returns the current date and time.

dt\_today

Return only the current date.

dt\_utcnow

Returns the current datetime object in the current time zone.

dt\_fromtimestamp

Converts a UNIX timestamp to a datetime object.

dt\_utcfromtimestamp

Converts a UNIX timestamp to a datetime object in the current time zone.

dt\_strptime

Parses a time string into a datetime object.

dt\_currentstamp

Returns the current UNIX timestamp.

dt\_totimestamp

Converts a datetime object to a UNIX timestamp.

dt\_strftime

Converts a datetime object to a string in a specified format.

dt\_strftimestamp

Converts a UNIX timestamp to a string in a specified format.

dt\_truncate

Extracts a time value from a value or the value of a time expression based on a specified time granularity.

dt\_add

Changes a value or the value of a time expression based on a specified time granularity.

dt\_MO

The value passed to the `weekday` parameter in the `dt_add` function, representing the offset for a specific Monday.

dt\_TU

The value passed to the `weekday` parameter in the `dt_add` function, representing the offset for a specific Tuesday.

dt\_WE

The value passed to the `weekday` parameter in the `dt_add` function, representing the offset for a specific Wednesday.

dt\_TH

The value passed to the `weekday` parameter in the `dt_add` function, representing the offset for a specific Thursday.

dt\_FR

The value passed to the `weekday` parameter in the `dt_add` function, representing the offset for a specific Friday.

dt\_SA

The value passed to the `weekday` parameter in the `dt_add` function, representing the offset for a specific Saturday.

dt\_SU

The value passed to the `weekday` parameter in the `dt_add` function, representing the offset for a specific Sunday.

dt\_astimezone

Converts a value or the value of a time expression to a datetime object in a specified time zone.

dt\_diff

Returns the difference between two values or between the values of two time expressions based on a specified time granularity.

[Regular expression functions](/help/en/sls/regular-expression-functions#concept-1130521)

regex\_select

Extracts a value that matches a regular expression.

regex\_findall

Extracts all values that match a regular expression.

regex\_match

Checks whether a value matches a regular expression.

regex\_replace

Replaces the characters that match a regular expression in a string.

regex\_split

Splits a string into an array of strings.

[Grok function](/help/en/sls/grok-function#concept-1180778)

grok

Extracts a value that matches a regular expression.

[Specific structured data functions](/help/en/sls/structured-data-functions#concept-1130524)

json\_select

Extracts or calculates specific values from a JSON expression using JMESPath.

json\_parse

Parses a value into a JSON object.

xml\_to\_json

Converts XML data to JSON data, and then expands the converted data.

[IP address parsing functions](/help/en/sls/ip-address-parsing-functions#concept-1130524)

geo\_parse

Identifies the city, province, and country based on an IP address.

ip\_cidrmatch

Checks whether an IP address belongs to a Classless Inter-Domain Routing (CIDR) block.

ip\_version

Checks whether the version of an IP address is IPv4 or IPv6.

ip\_type

Identifies the type of an IP address and checks whether the type of the IP address is private or public.

ip\_makenet

Converts an IP address to a CIDR block.

ip\_to\_format

Converts the format of a CIDR block to a format that specifies the netmask or prefix length of the CIDR block.

ip\_overlaps

Checks whether two CIDR blocks overlap.

ip2long

Converts an IP address to a value of the long type.

long2ip

Converts a value of the long type to an IP address.

[Encoding and decoding functions](/help/en/sls/encoding-and-decoding-functions#concept-1130525)

url\_encoding

Performs URL encoding on data.

url\_decoding

Performs URL decoding on data.

protobuf\_decoding

Parses data into the JSON format using a specified Protobuf template.

str\_encode

Encodes a string using a specified encoding format.

str\_decode

Decodes an input value using a specified encoding format.

base64\_encoding

Encodes data using the Base64 algorithm.

base64\_decoding

Decodes data using the Base64 algorithm.

html\_encoding

Encodes data in the HTML format.

html\_decoding

Decodes HTML-encoded data.

md5\_encoding

Encodes data using the MD5 algorithm.

sha1\_encoding

Encodes data using the SHA1 algorithm.

crc32\_encoding

Calculates a cyclic redundancy check (CRC) code for data.

gzip\_compress

Compresses and encodes data.

gzip\_decompress

Decompresses compressed data.

zlib\_compress

Compresses and encodes data.

zlib\_decompress

Decompresses compressed data.

aes\_encrypt

Encrypts data using the AES algorithm.

aes\_decrypt

Decrypts data using the AES algorithm.

jwt\_encoding

Encodes JSON data based on the JSON Web Token (JWT) standard.

jwt\_decoding

Decodes data to raw JSON data based on the JWT standard.

hashids\_encoding

Encodes data using the Hashids library.

hashids\_decoding

Decodes data that is encoded using the Hashids library.

[Parsing functions](/help/en/sls/parsing-functions#concept-2503772)

ua\_parse\_device

Parses User-Agent and returns the device information.

ua\_parse\_os

Parses User-Agent and returns the operating system information.

ua\_parse\_agent

Parses User-Agent and returns the browser information.

ua\_parse\_all

Parses User-Agent and returns all information.

url\_parse

Parses a URL and returns the components of the URL.

url\_parse\_qs

Parses the query string of a URL and returns the components of the query string.

[List functions](/help/en/sls/list-functions#concept-1597679)

lst\_make

Constructs a list.

lst\_insert

Inserts elements to a specified position in a list.

lst\_append

Appends elements to a list.

lst\_delete\_at

Deletes the element at a specified position from a list.

lst\_reverse

Reverses the order of elements in a list.

lst\_get

Returns the element at a specified position in a list or a tuple.

[Dictionary functions](/help/en/sls/dictionary-functions#concept-1597680)

dct\_make

Constructs a dictionary.

dct\_update

Updates a dictionary.

dct\_delete

Deletes key-value pairs from a dictionary.

dct\_keys

Returns the keys of a dictionary.

dct\_values

Returns the values of a dictionary.

dct\_get

Returns the value that corresponds to a specified key in a dictionary.

[Table functions](/help/en/sls/table-functions#concept-1597681)

tab\_parse\_csv

Constructs a table from comma-separated values (CSV) text.

tab\_to\_dict

Constructs a dictionary from a table.

[Resource functions](/help/en/sls/resource-functions#concept-1597682)

res\_local

Pulls the values of advanced parameters from the current data transformation job.

res\_rds\_mysql

Pulls data from a specified table in a database that is created on an ApsaraDB RDS for MySQL instance or obtains the execution result of an SQL statement. The data and result can be updated at regular intervals.

res\_log\_LogStore\_pull

Pulls data from another Logstore. Supports continuous data pulling.

res\_oss\_file

Pulls data from an object in a specified Object Storage Service (OSS) bucket. The data can be updated at regular intervals.
