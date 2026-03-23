-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class JsonFactory (2.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.1.0 (latest)](/java/docs/reference/google-http-client/latest/com.google.api.client.json.JsonFactory)
-   [2.0.3](/java/docs/reference/google-http-client/2.0.3/com.google.api.client.json.JsonFactory)
-   [1.47.1](/java/docs/reference/google-http-client/1.47.1/com.google.api.client.json.JsonFactory)
-   [1.46.3](/java/docs/reference/google-http-client/1.46.3/com.google.api.client.json.JsonFactory)
-   [1.45.3](/java/docs/reference/google-http-client/1.45.3/com.google.api.client.json.JsonFactory)
-   [1.44.2](/java/docs/reference/google-http-client/1.44.2/com.google.api.client.json.JsonFactory)
-   [1.43.2](/java/docs/reference/google-http-client/1.43.2/com.google.api.client.json.JsonFactory)
-   [1.42.3](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.json.JsonFactory)
-   [1.41.8](/java/docs/reference/google-http-client/1.41.8/com.google.api.client.json.JsonFactory)

```
public abstract class JsonFactory
```

Abstract low-level JSON factory.

Implementation is thread-safe, and sub-classes must be thread-safe. For maximum efficiency, applications should use a single globally-shared instance of the JSON factory.

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> JsonFactory

## Inherited Members

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Constructors

### JsonFactory()

```
public JsonFactory()
```

## Methods

### <T>fromInputStream(InputStream inputStream, Class<T> destinationClass)

```
public final T <T>fromInputStream(InputStream inputStream, Class<T> destinationClass)
```

Parse and close an input stream as a JSON object, array, or value into a new instance of the given destination class using <xref uid="com.google.api.client.json.JsonParser.

Tries to detect the charset of the input stream automatically.

**Parameters**

**Name**

**Description**

`inputStream`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

JSON value in an input stream

`destinationClass`

`[Class](https://docs.oracle.com/javase/8/docs/api/java/lang/Class.html)<T>`  

destination class that has an accessible default constructor to use to create a new instance

**Returns**

**Type**

**Description**

`T`

new instance of the parsed destination class

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### <T>fromInputStream(InputStream inputStream, Charset charset, Class<T> destinationClass)

```
public final T <T>fromInputStream(InputStream inputStream, Charset charset, Class<T> destinationClass)
```

Parse and close an input stream as a JSON object, array, or value into a new instance of the given destination class using <xref uid="com.google.api.client.json.JsonParser.

**Parameters**

**Name**

**Description**

`inputStream`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

JSON value in an input stream

`charset`

`[Charset](https://docs.oracle.com/javase/8/docs/api/java/nio/charset/Charset.html)`  

Charset in which the stream is encoded

`destinationClass`

`[Class](https://docs.oracle.com/javase/8/docs/api/java/lang/Class.html)<T>`  

destination class that has an accessible default constructor to use to create a new instance

**Returns**

**Type**

**Description**

`T`

new instance of the parsed destination class

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### <T>fromReader(Reader reader, Class<T> destinationClass)

```
public final T <T>fromReader(Reader reader, Class<T> destinationClass)
```

Parse and close a reader as a JSON object, array, or value into a new instance of the given destination class using <xref uid="com.google.api.client.json.JsonParser.

**Parameters**

**Name**

**Description**

`reader`

`[Reader](https://docs.oracle.com/javase/8/docs/api/java/io/Reader.html)`  

JSON value in a reader

`destinationClass`

`[Class](https://docs.oracle.com/javase/8/docs/api/java/lang/Class.html)<T>`  

destination class that has an accessible default constructor to use to create a new instance

**Returns**

**Type**

**Description**

`T`

new instance of the parsed destination class

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### <T>fromString(String value, Class<T> destinationClass)

```
public final T <T>fromString(String value, Class<T> destinationClass)
```

Parses a string value as a JSON object, array, or value into a new instance of the given destination class using <xref uid="com.google.api.client.json.JsonParser.

**Parameters**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

JSON string value

`destinationClass`

`[Class](https://docs.oracle.com/javase/8/docs/api/java/lang/Class.html)<T>`  

destination class that has an accessible default constructor to use to create a new instance

**Returns**

**Type**

**Description**

`T`

new instance of the parsed destination class

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### createJsonGenerator(OutputStream out, Charset enc)

```
public abstract JsonGenerator createJsonGenerator(OutputStream out, Charset enc)
```

Returns a new instance of a low-level JSON serializer for the given output stream and encoding.

**Parameters**

**Name**

**Description**

`out`

`[OutputStream](https://docs.oracle.com/javase/8/docs/api/java/io/OutputStream.html)`  

output stream

`enc`

`[Charset](https://docs.oracle.com/javase/8/docs/api/java/nio/charset/Charset.html)`  

encoding

**Returns**

**Type**

**Description**

`[JsonGenerator](/java/docs/reference/google-http-client/latest/com.google.api.client.json.JsonGenerator)`

new instance of a low-level JSON serializer

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### createJsonGenerator(Writer writer)

```
public abstract JsonGenerator createJsonGenerator(Writer writer)
```

Returns a new instance of a low-level JSON serializer for the given writer.

**Parameter**

**Name**

**Description**

`writer`

`[Writer](https://docs.oracle.com/javase/8/docs/api/java/io/Writer.html)`  

writer

**Returns**

**Type**

**Description**

`[JsonGenerator](/java/docs/reference/google-http-client/latest/com.google.api.client.json.JsonGenerator)`

new instance of a low-level JSON serializer

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### createJsonObjectParser()

```
public final JsonObjectParser createJsonObjectParser()
```

Creates an object parser which uses this factory to parse JSON data.

**Returns**

**Type**

**Description**

`[JsonObjectParser](/java/docs/reference/google-http-client/latest/com.google.api.client.json.JsonObjectParser)`

### createJsonParser(InputStream in)

```
public abstract JsonParser createJsonParser(InputStream in)
```

Returns a new instance of a low-level JSON parser for the given input stream. The parser tries to detect the charset of the input stream by itself.

**Parameter**

**Name**

**Description**

`in`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

input stream

**Returns**

**Type**

**Description**

`[JsonParser](/java/docs/reference/google-http-client/latest/com.google.api.client.json.JsonParser)`

new instance of a low-level JSON parser

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### createJsonParser(InputStream in, Charset charset)

```
public abstract JsonParser createJsonParser(InputStream in, Charset charset)
```

Returns a new instance of a low-level JSON parser for the given input stream.

**Parameters**

**Name**

**Description**

`in`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

input stream

`charset`

`[Charset](https://docs.oracle.com/javase/8/docs/api/java/nio/charset/Charset.html)`  

charset in which the input stream is encoded or `null` to let the parser detect the charset

**Returns**

**Type**

**Description**

`[JsonParser](/java/docs/reference/google-http-client/latest/com.google.api.client.json.JsonParser)`

new instance of a low-level JSON parser

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### createJsonParser(Reader reader)

```
public abstract JsonParser createJsonParser(Reader reader)
```

Returns a new instance of a low-level JSON parser for the given reader.

**Parameter**

**Name**

**Description**

`reader`

`[Reader](https://docs.oracle.com/javase/8/docs/api/java/io/Reader.html)`  

reader

**Returns**

**Type**

**Description**

`[JsonParser](/java/docs/reference/google-http-client/latest/com.google.api.client.json.JsonParser)`

new instance of a low-level JSON parser

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### createJsonParser(String value)

```
public abstract JsonParser createJsonParser(String value)
```

Returns a new instance of a low-level JSON parser for the given string value.

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

string value

**Returns**

**Type**

**Description**

`[JsonParser](/java/docs/reference/google-http-client/latest/com.google.api.client.json.JsonParser)`

new instance of a low-level JSON parser

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### toByteArray(Object item)

```
public final byte[] toByteArray(Object item)
```

Returns a UTF-8 encoded byte array of the serialized JSON representation for the given item using [JsonGenerator#serialize(Object)](/java/docs/reference/google-http-client/latest/com.google.api.client.json.JsonGenerator#com_google_api_client_json_JsonGenerator_serialize_java_lang_Object_).

**Parameter**

**Name**

**Description**

`item`

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

data key/value pairs

**Returns**

**Type**

**Description**

`[byte](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)[]`

byte array of the serialized JSON representation

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### toPrettyString(Object item)

```
public final String toPrettyString(Object item)
```

Returns a pretty-printed serialized JSON string representation for the given item using [JsonGenerator#serialize(Object)](/java/docs/reference/google-http-client/latest/com.google.api.client.json.JsonGenerator#com_google_api_client_json_JsonGenerator_serialize_java_lang_Object_) with [JsonGenerator#enablePrettyPrint()](/java/docs/reference/google-http-client/latest/com.google.api.client.json.JsonGenerator#com_google_api_client_json_JsonGenerator_enablePrettyPrint__).

The specifics of how the JSON representation is made pretty is implementation dependent, and should not be relied on. However, it is assumed to be legal, and in fact differs from [#toString(Object)](/java/docs/reference/google-http-client/latest/com.google.api.client.json.JsonFactory#com_google_api_client_json_JsonFactory_toString_java_lang_Object_) only by adding whitespace that does not change its meaning.

**Parameter**

**Name**

**Description**

`item`

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

data key/value pairs

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

serialized JSON string representation

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### toString(Object item)

```
public final String toString(Object item)
```

Returns a serialized JSON string representation for the given item using [JsonGenerator#serialize(Object)](/java/docs/reference/google-http-client/latest/com.google.api.client.json.JsonGenerator#com_google_api_client_json_JsonGenerator_serialize_java_lang_Object_).

**Parameter**

**Name**

**Description**

`item`

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

data key/value pairs

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

serialized JSON string representation

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
