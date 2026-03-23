-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TestableByteArrayInputStream (1.46.3) Stay organized with collections Save and categorize content based on your preferences.

Version 1.46.3keyboard\_arrow\_down

-   [2.1.0 (latest)](/java/docs/reference/google-http-client/latest/com.google.api.client.testing.util.TestableByteArrayInputStream)
-   [2.0.3](/java/docs/reference/google-http-client/2.0.3/com.google.api.client.testing.util.TestableByteArrayInputStream)
-   [1.47.1](/java/docs/reference/google-http-client/1.47.1/com.google.api.client.testing.util.TestableByteArrayInputStream)
-   [1.46.3](/java/docs/reference/google-http-client/1.46.3/com.google.api.client.testing.util.TestableByteArrayInputStream)
-   [1.45.3](/java/docs/reference/google-http-client/1.45.3/com.google.api.client.testing.util.TestableByteArrayInputStream)
-   [1.44.2](/java/docs/reference/google-http-client/1.44.2/com.google.api.client.testing.util.TestableByteArrayInputStream)
-   [1.43.2](/java/docs/reference/google-http-client/1.43.2/com.google.api.client.testing.util.TestableByteArrayInputStream)
-   [1.42.3](/java/docs/reference/google-http-client/1.42.3/com.google.api.client.testing.util.TestableByteArrayInputStream)
-   [1.41.8](/java/docs/reference/google-http-client/1.41.8/com.google.api.client.testing.util.TestableByteArrayInputStream)

```
public class TestableByteArrayInputStream extends ByteArrayInputStream
```

[Beta](/java/docs/reference/google-http-client/1.46.3/com.google.api.client.util.Beta)  
Testable extension for a byte array input stream.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [java.io.InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html) \> [ByteArrayInputStream](https://docs.oracle.com/javase/8/docs/api/java/io/ByteArrayInputStream.html) \> TestableByteArrayInputStream

## Inherited Members

[ByteArrayInputStream.available()](https://docs.oracle.com/javase/8/docs/api/java/io/ByteArrayInputStream.html#available--)

[ByteArrayInputStream.close()](https://docs.oracle.com/javase/8/docs/api/java/io/ByteArrayInputStream.html#close--)

[ByteArrayInputStream.mark(int)](https://docs.oracle.com/javase/8/docs/api/java/io/ByteArrayInputStream.html#mark-int-)

[ByteArrayInputStream.markSupported()](https://docs.oracle.com/javase/8/docs/api/java/io/ByteArrayInputStream.html#markSupported--)

[ByteArrayInputStream.read()](https://docs.oracle.com/javase/8/docs/api/java/io/ByteArrayInputStream.html#read--)

[ByteArrayInputStream.read(byte\[\],int,int)](https://docs.oracle.com/javase/8/docs/api/java/io/ByteArrayInputStream.html#read-byte[]-int-int-)

[ByteArrayInputStream.readAllBytes()](https://docs.oracle.com/javase/8/docs/api/java/io/ByteArrayInputStream.html#readAllBytes--)

[ByteArrayInputStream.readNBytes(byte\[\],int,int)](https://docs.oracle.com/javase/8/docs/api/java/io/ByteArrayInputStream.html#readNBytes-byte[]-int-int-)

[ByteArrayInputStream.reset()](https://docs.oracle.com/javase/8/docs/api/java/io/ByteArrayInputStream.html#reset--)

[ByteArrayInputStream.skip(long)](https://docs.oracle.com/javase/8/docs/api/java/io/ByteArrayInputStream.html#skip-long-)

[ByteArrayInputStream.transferTo(OutputStream)](https://docs.oracle.com/javase/8/docs/api/java/io/ByteArrayInputStream.html#transferTo-java.io.OutputStream-)

[InputStream.nullInputStream()](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html#nullInputStream--)

[InputStream.read(byte\[\])](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html#read-byte[]-)

[InputStream.readNBytes(int)](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html#readNBytes-int-)

[InputStream.skipNBytes(long)](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html#skipNBytes-long-)

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

### TestableByteArrayInputStream(byte\[\] buf)

```
public TestableByteArrayInputStream(byte[] buf)
```

**Parameter**

**Name**

**Description**

`buf`

`[byte](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)[]`  

buffer

### TestableByteArrayInputStream(byte\[\] buf, int offset, int length)

```
public TestableByteArrayInputStream(byte[] buf, int offset, int length)
```

**Parameters**

**Name**

**Description**

`buf`

`[byte](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)[]`  

buffer

`offset`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

offset in the buffer of the first byte to read

`length`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

maximum number of bytes to read from the buffer

## Methods

### close()

```
public void close()
```

Overriding is supported, but overriding method must call the super implementation.

**Overrides**

[ByteArrayInputStream.close()](https://docs.oracle.com/javase/8/docs/api/java/io/ByteArrayInputStream.html#close--)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### getBuffer()

```
public final byte[] getBuffer()
```

Returns the written buffer value as a modifiable byte array.

**Returns**

**Type**

**Description**

`[byte](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)[]`

### isClosed()

```
public final boolean isClosed()
```

Returns whether the output stream has been closed.

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
