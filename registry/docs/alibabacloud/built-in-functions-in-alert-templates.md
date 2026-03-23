The new alert templates support built-in functions. You can use the built-in functions to configure the formats and styles of alert notifications. This topic describes the syntax of the built-in functions and provides examples on how to use the built-in functions.

## General functions

### Numeric functions

**Function**

**Description**

**Filter**

**Example**

float(value, default=0.0)

Converts an integer or a string to a floating-point number.

By default, if the conversion fails, the function returns 0.0. You can also specify a custom return value in the event of a conversion failure by using the default parameter.

Supported

-   The result returned by `{{ float("123") }}` is 123.0.
-   The result returned by `{{ float("foo") }}` is 0.0.
-   The result returned by `{{ float("foo", default=1.23) }}` is 1.23.

int(value, default=0)

Converts a string or a number to an integer.

By default, if the conversion fails, the function returns 0. You can also specify a custom return value in the event of a conversion failure by using the default parameter.

Supported

-   The result returned by `{{ int(1.23) }}` is 1.
-   The result returned by `{{ int("1.23") }}` is 1.
-   The result returned by `{{ int("foo") }}` is 0.
-   The result returned by `{{ int("foo", default=5) }}` is 5.

length(value)

Obtains the length or number of elements in an object such as a string, list, or tuple.

Supported

-   The result returned by `{{ length("foo") }}` is 3.
-   The result returned by `{{ length([1, 2]) }}` is 2.
-   The result returned by `{{ length({"foo": "bar"}) }}` is 1.

abs(value)

Obtains the absolute value of a number.

Supported

The result returned by `{{ abs(-1) }}` is 1.

min(value)

Obtains the minimum value among the values that you specify.

Supported

The result returned by `{{ min([1, 3, 2]) }}` is 1.

max(value)

Obtains the maximum value among the values that you specify.

Supported

The result returned by `{{ max([1, 3, 2]) }}` is 3.

ceil(value)

Rounds a number up to the nearest integer.

Supported

The result returned by `{{ ceil(1.23) }}` is 2.

floor(value)

Rounds a number down to the nearest integer.

Supported

The result returned by `{{ floor(1.23) }}` is 1.

round(value, 1)

Rounds a number to the nearest integer.

`1` indicates that one decimal place is retained.

Supported

-   The result returned by `{{ round(1.23) }}` is 1.
-   The result returned by `{{ round(1.56) }}` is 2.
-   The result returned by `{{ round(1.56, 1) }}` is 1.6.

sum(value)

Obtains the sum of the values that you specify.

Supported

The result returned by `{{ sum([1, 2, 3]) }}` is 6.

### String functions

**Function**

**Description**

**Filter**

**Example**

string(value)

Converts an object to a string.

Supported

The result returned by `{{ string(1.23) }}` is 1.23.

The value 1.23 is a string.

capitalize(value)

Converts the first letter of a string to an uppercase letter and converts the other letters of the string to lowercase letters.

Supported

The result returned by `{{ capitalize("heLLO World") }}` is Hello world.

lower(value)

Converts the uppercase letters in a string to lowercase letters.

Supported

The result returned by `{{ lower("FOO") }}`is foo.

upper(value)

Converts the lowercase letters in a string to uppercase letters.

Supported

The result returned by `{{ upper("foo") }}` is FOO.

title(value)

Converts a string to title case. In title case, the first letter of each word in a string is in uppercase, whereas the other letters of each word are in lowercase.

Supported

The result returned by `{{ title("hello world") }}` is Hello World.

trim(value)

Deletes the empty characters at the beginning and end of a string.

Supported

The result returned by `{{ trim(" foo\n") }}` is foo.

replace(value, old, new)

Replaces the specified characters of a string with new characters.

Not supported

The result returned by `{{ replace("foo", "oo", "ly") }}` is fly.

wordcount(value)

Counts the number of words in a string.

Supported

The result returned by `{{ wordcount("hello world") }}` is 2.

truncate(value, n, end='')

Truncates a string.

-   The n variable specifies the number of characters that you want to retain in the string.
-   The end variable specifies the substring that you want to add to the string after the string is truncated.

Not supported

-   The result returned by `{{ truncate("foo bar", 5) }}` is foo b.
-   The result returned by `{{ truncate("foo bar", 5, end="...") }}` is foo b...

quote(value)

Encloses a string in a pair of double quotation marks ("").

Supported

-   The result returned by `{{ quote(123) }}` is "123".
-   The result returned by `{{ quote("foo") }}` is "foo".

indent(value, n=4)

Indents each line of strings with a specified number of spaces. By default, each line of strings is indented with four spaces.

You can use the n parameter to specify the number of spaces with which you want to indent each line of strings.

Supported

-   For `{{ "foobar\n" }}{{ indent("foo\nbar") }}`, the following result is returned:
    
    ```
    foobar
        foo
        bar
    ```
    
-   For `{{ "foobar\n" }}{{ indent("foo\nbar", 2) }}`, the following result is returned:
    
    ```
    foobar
      foo
      bar
    ```
    

startswith(value, prefix)

Checks whether a string starts with a specified substring.

Supported

The result returned by `{{ startswith("football", "foo") }}` is true.

endswith(value, suffix)

Checks whether a string ends with a specified substring.

Supported

The result returned by `{{ endswith("football", "all") }}` is true.

removeprefix(value, prefix)

Removes a specified substring from the start of a string.

Supported

The result returned by `{{ removeprefix("football", "foot") }}` is ball.

removesuffix(value, suffix)

Removes a specified substring from the end of a string.

Supported

The result returned by `{{ removesuffix("football", "ball") }}` is foot.

split(value, sep=None, maxsplit=-1)

Splits a string.

-   You can use the sep parameter to specify the delimiter that you want to use to split a string.
-   You can use the maxsplit parameter to specify the maximum number of times that a string can be split.
    
    If you do not configure the maxsplit parameter or if you set the maxsplit parameter to -1, the number of times that a string can be split is not limited.
    

Supported

-   The result returned by `{{ split('a b c ') }}` is \['a', 'b', 'c'\].
-   The result returned by `{{ split('a-b-c', sep='-') }}` is \['a', 'b', 'c'\].
-   The result returned by `{{ split('a-b-c', sep='-', maxsplit=1) }}` is \['a', 'b-c'\].
-   The result returned by `{{ split('a<>b<>c', sep='<>') }}` is \['a', 'b', 'c'\].

### List functions and object functions

**Function**

**Description**

**Filter**

**Example**

enumerate(value)

Converts an iterable object to an indexed sequence and lists the original elements and the subscripts of the original elements.

Not supported

The result returned by `{{ enumerate(["foo", "bar"]) }}` is \[(0, 'foo'), (1, 'bar')\].

list(value)

Converts an iterable object to a list.

Supported

-   The result returned by `{{ list(("foo", "bar")) }}` is \['foo', 'bar'\].
-   The result returned by `{{ list("foo") }}` is \['f', 'o', 'o'\].

dict(value)

Creates a dictionary. The function works in a way similar to the method in which `{}` is used to create a dictionary.

Not supported

The result returned by `{{ dict(foo=1, bar="hello") }}` is {'foo': 1, 'bar': 'hello'}.

first(value)

Returns the first item of a list.

Supported

The result returned by `{{ first([1, 2, 3]) }}` is 1.

last(value)

Returns the last item of a list.

Supported

The result returned by `{{ last([1, 2, 3]) }}` is 3.

sort(value, reverse=true)

Sorts the elements of a list.

If you want to sort the elements of a list in reversed order, specify reverse=true.

Supported

-   The result returned by `{{ sort([3, 1, 2]) }}` is \[1, 2, 3\].
-   The result returned by `{{ sort([3, 1, 2], reverse=true) }}` is \[3, 2, 1\].

dictsort(value)

Sorts the key-value pairs in an object based on keys and returns an array that consists of the sorted key-value pairs.

Supported

-   Example on the alert.labels field:
    
    ```
    {
        "host": "host-1",
        "app": "nginx"
    }
    ```
    
-   Configuration of the function in the alert template:
    
    ```
    {%- for key, val in dictsort(alert.labels) %}
    {{ key }}: {{ val }}
    {%- endfor %}
    ```
    
-   Result:
    
    ```
    app: nginx
    host: host-1
    ```
    

join(value, d='')

Joins the elements of a list by using a specified character.

You can use the d parameter to specify the character that is used to join the elements of the list.

Supported

-   The result returned by `{{ join([1, 2, 3]) }}` is 123.
-   The result returned by `{{ join([1, 2, 3], ',') }}` is 1,2,3.

### Format functions

**Function**

**Description**

**Filter**

**Example**

escape\_markdown(value)

Escapes special characters in Markdown.

Supported

The result returned by `{{ escape_markdown("__a__ **b** #c") }}` is `&#95;&#95;a&#95;&#95; &#42;&#42;b&#42;&#42; &#35;c`.

escape\_html(value)

Escapes special characters in HTML.

Supported

The result returned by `{{ escape_html("<div>") }}` is `&lt;div&gt;`.

to\_json(value)

Converts an object to the JSON format.

Supported

-   The result returned by `{{ to_json("foo") }}` is "foo".
-   The result returned by `{{ to_json(1.23) }}` is 1.23.
-   The result returned by `{{ to_json(True) }}` is true.
-   The result returned by `{{ to_json(alert.labels) }}` is {"host": "host-1", "app": "nginx"}.

parse\_json(value)

Parses a string and returns a value in the JSON format.

Supported

-   The result returned by `{{ parse_json('{"foo": "bar"}').foo }}` is bar.
-   The result returned by `{{ parse_json('[1, 2, 3]')[1] }}` is 2.

### Encoding functions and decoding functions

**Function**

**Description**

**Filter**

**Example**

base64\_encoding(value)

Encodes the input value by using Base64.

Supported

The result returned by `{{ base64_encoding("foo") }}` is Zm9v.

base64\_decoding(value)

Decodes the input value by using Base64.

Supported

The result returned by `{{ base64_decoding("Zm9v") }}` is foo.

md5\_encoding(value)

Encodes the input value by using MD5.

Supported

The result returned by `{{ md5_encoding("foo") }}` is acbd18db4cc2f85cedef654fccc4a4d8.

url\_encoding(value)

Encodes the input value by using URL encoding.

Supported

The result returned by `{{ url_encoding("https://example.com?a=b&c=d") }}` is https%3A%2F%2Fexample.com%3Fa%3Db%26c%3Dd.

url\_decoding(value)

Decodes the input value by using URL decoding.

Supported

The result returned by `{{ url_decoding("https%3A%2F%2Fexample.com%3Fa%3Db%26c%3Dd") }}` is https://example.com?a=b&c=d.

### Date and time functions

**Function**

**Description**

**Filter**

**Example**

parse\_date(value, fmt="%Y-%m-%d %H:%M:%S")

Converts the input value to a datetime expression that can return a timestamp value.

You can use the fmt parameter to specify the format of the datetime expression.

Supported

-   The result returned by `{{ parse_date(1629820800) }}` is 2021-08-25 00:00:00.
-   The result returned by `{{ parse_date("2021|08|25|00|00|00", fmt="%Y|%m|%d|%H|%M|%S") }}` is 2021-08-25 00:00:00.

format\_date(value, tz=None, fmt="%Y-%m-%d %H:%M:%S")

Formats the input value.

You can use the fmt parameter to specify the format of the datetime expression.

If the input value is not a date object, the function converts the input value to a date object before the function formats the input value. For more information about the directives that are used to format date and time strings, see [Date and time formatting directives](/help/en/sls/date-and-time-formatting-directives#concept-1597618). For more information about time zones, see [Time zones](/help/en/sls/time-zones#concept-1597620).

Not supported

-   The result returned by `{{ format_date(1629820800) }}` is 2021-08-25 00:00:00.
-   The result returned by `{{ format_date(1629820800, fmt="%Y/%m/%d %H:%M:%S") }}` is 2021/08/25 00:00:00.
-   The result returned by `{{ format_date(1629820800, tz="UTC", fmt="%Y/%m/%d %H:%M:%S") }}` is 2021/08/24 16:00:00.

timestamp(value)

Converts a date and time string to a UNIX timestamp.

If the input value is not a date object, the function converts the input value to a date object before the function formats the input value.

Supported

-   The result returned by `{{ timestamp("2021-08-25 00:00:00") }}` is 1629820800.
-   The result returned by `{{ timestamp(parse_date("2021-08-25 00:00:00")) }}` is 1629820800.

format\_duration(value, locale='en-US', sep='')

Formats an interval. The unit of value is seconds.

You can use the locale parameter to specify the language in which the text description is written. For more information about the valid values of the locale parameter, see the "[Valid values of the locale parameter in alert functions](#table-gel-dym-32o)" section of this topic.

Supported

-   The result returned by `{{ 10 | format_duration }}` is 10s.
-   The result returned by `{{ 60 | format_duration }}` is 1m.
-   The result returned by `{{ 3600 | format_duration }}` is 1h.
-   The result returned by `{{ 86400 | format_duration }}` is 1d.
-   The result returned by `{{ 100000 | format_duration }}` is 1d3h46m40s.
-   The result returned by `{{ 100000 | format_duration(sep=",") }}` is 1d,3h,46m,40s.

## Alert functions

Alert functions vary based on the alert context and alert template that you configure. These functions can automatically perceive the following information:

**Note** An alert function may return different results in different alert contexts.

-   The alert attributes, such as the severity level and status of the triggered alert.
-   The language of the alert template. For example, the language can be Chinese or English.
-   The notification method, such as DingTalk and email.

**Function**

**Description**

**Filter**

**Example**

format\_type(alert.type, locale=None)

Converts the type of an alert to a text description.

You can use the locale parameter to specify the language in which the text description is written. For more information about the valid values of the locale parameter, see the "[Valid values of the locale parameter in alert functions](#table-gel-dym-32o)" section of this topic.

Supported

-   The type of the alert is `sls_pub`.
-   Configuration of the function in the alert template:
    
    ```
    {{ format_type(alert.type) }}
    ```
    
-   Result:
    -   If the value of the locale parameter is en-US, the type of the alert in the alert notification is `Pub Alert`.

format\_region(alert.region, locale=None)

Converts the region where an alert is triggered to a text description.

You can use the locale parameter to specify the language in which the text description is written. For more information about the valid values of the locale parameter, see the "[Valid values of the locale parameter in alert functions](#table-gel-dym-32o)" section of this topic.

Supported

-   The region of the alert is `cn-hangzhou`.
-   Configuration of the function in the alert template:
    
    ```
    {{ format_region(alert.region) }}
    ```
    
-   Result:
    -   If the value of the locale parameter is en-US, the region of the alert in the alert notification is `China (Hangzhou)`.

format\_severity(alert.severity, locale=None)

Converts the severity level of an alert to a text description. The function supports colored fonts.

**Note** Only DingTalk, Enterprise WeChat, Email, and Message Center support colored fonts.

You can use the locale parameter to specify the language in which the text description is written. For more information about the valid values of the locale parameter, see the "[Valid values of the locale parameter in alert functions](#table-gel-dym-32o)" section of this topic.

Supported

-   The severity level of the alert is `6`
-   Configuration of the function in the alert template:
    
    ```
    {{ format_severity(alert.severity) }}
    ```
    
-   Result:
    -   If the value of the locale parameter is en-US, the severity level of the alert in the alert notification is `Medium` in yellow.

format\_status(alert.status, locale=None)

Converts the status of an alert to a text description. The function supports colored fonts.

**Note** Only DingTalk, Enterprise WeChat, Email, and Message Center support colored fonts. If you use a notification method that does not support colored fonts, the alert notification remains unchanged after the function is invoked.

You can use the locale parameter to specify the language in which the text description is written. For more information about the valid values of the locale parameter, see the "[Valid values of the locale parameter in alert functions](#table-gel-dym-32o)" section of this topic.

Supported

-   The status of the alert is `Firing`.
-   Configuration of the function in the alert template:
    
    ```
    {{ format_status(alert.status) }}
    ```
    
-   Result:
    -   If the value of the locale parameter is en-US, the status of the alert in the alert notification is `Firing` in red.

to\_list(value)

Converts an array or object to a list.

Supported

-   The following alert labels are added:
    
    ```
    {
        "app": "nginx",
        "host": "host-1"
    }
    ```
    
-   Configuration of the function in the alert template:
    
    ```
    {{ to_list(alert.labels) }}
    ```
    
-   Result:
    -   If the alert notification is in the Markdown format, the function returns the following result:
        
        The function can automatically escape characters in the result based on the configuration of the notification method.
        
        ```
        - app: nginx
        - host: host&#45;1
        ```
        
    -   If the alert notification is in the HTML format, the function returns the following result:
        
        ```
        <ul>
          <li>app: nginx</li>
          <li>host: host-1</li>
        </ul>
        ```
        
    -   If the alert notification is in the text format, the function returns the following result:
        
        ```
        [app: nginx][host: host-1]
        ```
        

annotations\_to\_list(alert.annotations, locale=None)

Converts the annotations of an alert to a list. The function is similar to the to\_list(alert.annotations) function. The difference between these two functions lies in that the annotations\_to\_list function can automatically convert a standard name to a text description. For example, the annotations\_to\_list function can convert the title field to `Title`. For more information about standard names, see the "[Annotations in alert functions](#table-og7-qyw-k8f)" section of this topic.

You can use the locale parameter to specify the language in which the text description is written. For more information about the valid values of the locale parameter, see the "[Valid values of the locale parameter in alert functions](#table-gel-dym-32o)" section of this topic.

Supported

-   The following annotations are added:
    
    ```
    {
        "title": "NGINX access error",
        "desc": "80% year-on-year decrease on PVs",
        "cnt": "120"
    }
    ```
    
-   Configuration of the function in the alert template:
    
    ```
    {{ annotations_to_list(alert.annotations) }}
    ```
    
-   Result:
    
    If the alert notification is in the Markdown format, the function returns the following result:
    
    ```
    -Title: NGINX access error
    -Description: 80% year-on-year decrease on PVs
    - cnt: 120
    ```
    

blockquote(value)

Adds a reference style to an alert notification.

-   If the alert notification is in the Markdown format, a closing angle bracket `>` is added to the beginning of each line.
-   If the alert notification is in the HTML format, the `<blockquote>` tag is used to enclose the content of the alert notification.

Supported

-   Configuration of the function in the alert template:
    
    ```
    {{ blockquote("foo\nbar") }}
    ```
    
-   Result:
    -   If the alert notification is in the Markdown format, the function returns the following result:
        
        ```
        > foo
        > bar
        ```
        
    -   If the alert notification is in the HTML format, the function returns the following result:
        
        ```
        <blockquote>
        foo
        bar
        </blockquote>
        ```
        

## References

-   Valid values of the locale parameter in alert functions
    
    **Valid value**
    
    **Description**
    
    None or an empty string
    
    Specifies to use the language that you select when you configure the alert template.
    
    en-US
    
    Specifies to use English.
    
    zh-CN
    
    Specifies to use Chinese.
    
-   Annotations in alert functions
    
    **Annotation**
    
    **Mapping value (English)**
    
    title
    
    Title
    
    desc
    
    Description
    
    anomaly\_score
    
    Anomaly Score
    
    job\_id
    
    Job ID
    
    model\_id
    
    Model ID
    
    severity
    
    Anomaly Severity
    
    \_\_pub\_alert\_app\_\_
    
    Application
    
    \_\_pub\_alert\_protocol\_\_
    
    Protocol
    
    \_\_pub\_alert\_region\_\_
    
    Region
    
    \_\_pub\_alert\_service\_\_
    
    Service
    
    \_\_ensure\_url\_\_
    
    Anomaly Confirmation
    
    \_\_mismatch\_url\_\_
    
    False Positive Confirmation
    
    \_\_plot\_image\_\_
    
    Time Series Chart
    
    \_\_host\_ip\_\_
    
    Machine Address
    
    \_\_host\_group\_name\_\_
    
    Machine Group Name
    
    \_\_cloud\_monitor\_type\_\_
    
    CloudMonitor
