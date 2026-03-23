-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface OpenLinkOrBuilder (2.66.0) Stay organized with collections Save and categorize content based on your preferences.

2.66.0 (latest) 2.65.1 2.64.1 2.63.2 2.62.0 2.61.3 2.60.0 2.59.2 2.58.0 2.57.0 2.56.0 2.54.1 2.53.0 2.52.0 2.51.0 2.50.1 2.49.0 2.48.0 2.46.0 2.45.1 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.1 2.38.0 2.37.1 2.36.0 2.34.0 2.33.0 2.32.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.1 2.22.1 2.21.1 2.15.0 2.14.3 2.13.0 2.12.0 2.11.0 2.10.0 2.9.6 2.8.4 2.7.4

```
public interface OpenLinkOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getOnClose()

```
public abstract OpenLink.OnClose getOnClose()
```

Whether the client forgets about a link after opening it, or observes it until the window closes.

[Google Workspace add-ons](https://developers.google.com/workspace/add-ons):

`.google.apps.card.v1.OpenLink.OnClose on_close = 3;`

**Returns**

**Type**

**Description**

`[OpenLink.OnClose](/java/docs/reference/proto-google-common-protos/latest/com.google.apps.card.v1.OpenLink.OnClose)`

The onClose.

### getOnCloseValue()

```
public abstract int getOnCloseValue()
```

Whether the client forgets about a link after opening it, or observes it until the window closes.

[Google Workspace add-ons](https://developers.google.com/workspace/add-ons):

`.google.apps.card.v1.OpenLink.OnClose on_close = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for onClose.

### getOpenAs()

```
public abstract OpenLink.OpenAs getOpenAs()
```

How to open a link.

[Google Workspace add-ons](https://developers.google.com/workspace/add-ons):

`.google.apps.card.v1.OpenLink.OpenAs open_as = 2;`

**Returns**

**Type**

**Description**

`[OpenLink.OpenAs](/java/docs/reference/proto-google-common-protos/latest/com.google.apps.card.v1.OpenLink.OpenAs)`

The openAs.

### getOpenAsValue()

```
public abstract int getOpenAsValue()
```

How to open a link.

[Google Workspace add-ons](https://developers.google.com/workspace/add-ons):

`.google.apps.card.v1.OpenLink.OpenAs open_as = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for openAs.

### getUrl()

```
public abstract String getUrl()
```

The URL to open.

`string url = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The url.

### getUrlBytes()

```
public abstract ByteString getUrlBytes()
```

The URL to open.

`string url = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for url.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-11 UTC.
