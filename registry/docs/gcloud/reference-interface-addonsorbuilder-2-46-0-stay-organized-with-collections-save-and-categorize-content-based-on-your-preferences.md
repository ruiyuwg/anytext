-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface AddOnsOrBuilder (2.46.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.6 2.2.1 2.1.12

```
public interface AddOnsOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCalendar()

```
public abstract CalendarAddOnManifest getCalendar()
```

Calendar add-on configuration.

`.google.apps.script.type.calendar.CalendarAddOnManifest calendar = 6;`

**Returns**

**Type**

**Description**

`[CalendarAddOnManifest](/java/docs/reference/google-cloud-gsuite-addons/2.46.0/com.google.apps.script.type.calendar.CalendarAddOnManifest)`

The calendar.

### getCalendarOrBuilder()

```
public abstract CalendarAddOnManifestOrBuilder getCalendarOrBuilder()
```

Calendar add-on configuration.

`.google.apps.script.type.calendar.CalendarAddOnManifest calendar = 6;`

**Returns**

**Type**

**Description**

`[CalendarAddOnManifestOrBuilder](/java/docs/reference/google-cloud-gsuite-addons/2.46.0/com.google.apps.script.type.calendar.CalendarAddOnManifestOrBuilder)`

### getCommon()

```
public abstract CommonAddOnManifest getCommon()
```

Configuration that is common across all Google Workspace Add-ons.

`.google.apps.script.type.CommonAddOnManifest common = 1;`

**Returns**

**Type**

**Description**

`[CommonAddOnManifest](/java/docs/reference/google-cloud-gsuite-addons/2.46.0/com.google.apps.script.type.CommonAddOnManifest)`

The common.

### getCommonOrBuilder()

```
public abstract CommonAddOnManifestOrBuilder getCommonOrBuilder()
```

Configuration that is common across all Google Workspace Add-ons.

`.google.apps.script.type.CommonAddOnManifest common = 1;`

**Returns**

**Type**

**Description**

`[CommonAddOnManifestOrBuilder](/java/docs/reference/google-cloud-gsuite-addons/2.46.0/com.google.apps.script.type.CommonAddOnManifestOrBuilder)`

### getDocs()

```
public abstract DocsAddOnManifest getDocs()
```

Docs add-on configuration.

`.google.apps.script.type.docs.DocsAddOnManifest docs = 7;`

**Returns**

**Type**

**Description**

`[DocsAddOnManifest](/java/docs/reference/google-cloud-gsuite-addons/2.46.0/com.google.apps.script.type.docs.DocsAddOnManifest)`

The docs.

### getDocsOrBuilder()

```
public abstract DocsAddOnManifestOrBuilder getDocsOrBuilder()
```

Docs add-on configuration.

`.google.apps.script.type.docs.DocsAddOnManifest docs = 7;`

**Returns**

**Type**

**Description**

`[DocsAddOnManifestOrBuilder](/java/docs/reference/google-cloud-gsuite-addons/2.46.0/com.google.apps.script.type.docs.DocsAddOnManifestOrBuilder)`

### getDrive()

```
public abstract DriveAddOnManifest getDrive()
```

Drive add-on configuration.

`.google.apps.script.type.drive.DriveAddOnManifest drive = 5;`

**Returns**

**Type**

**Description**

`[DriveAddOnManifest](/java/docs/reference/google-cloud-gsuite-addons/2.46.0/com.google.apps.script.type.drive.DriveAddOnManifest)`

The drive.

### getDriveOrBuilder()

```
public abstract DriveAddOnManifestOrBuilder getDriveOrBuilder()
```

Drive add-on configuration.

`.google.apps.script.type.drive.DriveAddOnManifest drive = 5;`

**Returns**

**Type**

**Description**

`[DriveAddOnManifestOrBuilder](/java/docs/reference/google-cloud-gsuite-addons/2.46.0/com.google.apps.script.type.drive.DriveAddOnManifestOrBuilder)`

### getGmail()

```
public abstract GmailAddOnManifest getGmail()
```

Gmail add-on configuration.

`.google.apps.script.type.gmail.GmailAddOnManifest gmail = 2;`

**Returns**

**Type**

**Description**

`[GmailAddOnManifest](/java/docs/reference/google-cloud-gsuite-addons/2.46.0/com.google.apps.script.type.gmail.GmailAddOnManifest)`

The gmail.

### getGmailOrBuilder()

```
public abstract GmailAddOnManifestOrBuilder getGmailOrBuilder()
```

Gmail add-on configuration.

`.google.apps.script.type.gmail.GmailAddOnManifest gmail = 2;`

**Returns**

**Type**

**Description**

`[GmailAddOnManifestOrBuilder](/java/docs/reference/google-cloud-gsuite-addons/2.46.0/com.google.apps.script.type.gmail.GmailAddOnManifestOrBuilder)`

### getHttpOptions()

```
public abstract HttpOptions getHttpOptions()
```

Options for sending requests to add-on HTTP endpoints

`.google.apps.script.type.HttpOptions http_options = 15;`

**Returns**

**Type**

**Description**

`[HttpOptions](/java/docs/reference/google-cloud-gsuite-addons/2.46.0/com.google.apps.script.type.HttpOptions)`

The httpOptions.

### getHttpOptionsOrBuilder()

```
public abstract HttpOptionsOrBuilder getHttpOptionsOrBuilder()
```

Options for sending requests to add-on HTTP endpoints

`.google.apps.script.type.HttpOptions http_options = 15;`

**Returns**

**Type**

**Description**

`[HttpOptionsOrBuilder](/java/docs/reference/google-cloud-gsuite-addons/2.46.0/com.google.apps.script.type.HttpOptionsOrBuilder)`

### getSheets()

```
public abstract SheetsAddOnManifest getSheets()
```

Sheets add-on configuration.

`.google.apps.script.type.sheets.SheetsAddOnManifest sheets = 8;`

**Returns**

**Type**

**Description**

`[SheetsAddOnManifest](/java/docs/reference/google-cloud-gsuite-addons/2.46.0/com.google.apps.script.type.sheets.SheetsAddOnManifest)`

The sheets.

### getSheetsOrBuilder()

```
public abstract SheetsAddOnManifestOrBuilder getSheetsOrBuilder()
```

Sheets add-on configuration.

`.google.apps.script.type.sheets.SheetsAddOnManifest sheets = 8;`

**Returns**

**Type**

**Description**

`[SheetsAddOnManifestOrBuilder](/java/docs/reference/google-cloud-gsuite-addons/2.46.0/com.google.apps.script.type.sheets.SheetsAddOnManifestOrBuilder)`

### getSlides()

```
public abstract SlidesAddOnManifest getSlides()
```

Slides add-on configuration.

`.google.apps.script.type.slides.SlidesAddOnManifest slides = 10;`

**Returns**

**Type**

**Description**

`[SlidesAddOnManifest](/java/docs/reference/google-cloud-gsuite-addons/2.46.0/com.google.apps.script.type.slides.SlidesAddOnManifest)`

The slides.

### getSlidesOrBuilder()

```
public abstract SlidesAddOnManifestOrBuilder getSlidesOrBuilder()
```

Slides add-on configuration.

`.google.apps.script.type.slides.SlidesAddOnManifest slides = 10;`

**Returns**

**Type**

**Description**

`[SlidesAddOnManifestOrBuilder](/java/docs/reference/google-cloud-gsuite-addons/2.46.0/com.google.apps.script.type.slides.SlidesAddOnManifestOrBuilder)`

### hasCalendar()

```
public abstract boolean hasCalendar()
```

Calendar add-on configuration.

`.google.apps.script.type.calendar.CalendarAddOnManifest calendar = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the calendar field is set.

### hasCommon()

```
public abstract boolean hasCommon()
```

Configuration that is common across all Google Workspace Add-ons.

`.google.apps.script.type.CommonAddOnManifest common = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the common field is set.

### hasDocs()

```
public abstract boolean hasDocs()
```

Docs add-on configuration.

`.google.apps.script.type.docs.DocsAddOnManifest docs = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the docs field is set.

### hasDrive()

```
public abstract boolean hasDrive()
```

Drive add-on configuration.

`.google.apps.script.type.drive.DriveAddOnManifest drive = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the drive field is set.

### hasGmail()

```
public abstract boolean hasGmail()
```

Gmail add-on configuration.

`.google.apps.script.type.gmail.GmailAddOnManifest gmail = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the gmail field is set.

### hasHttpOptions()

```
public abstract boolean hasHttpOptions()
```

Options for sending requests to add-on HTTP endpoints

`.google.apps.script.type.HttpOptions http_options = 15;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the httpOptions field is set.

### hasSheets()

```
public abstract boolean hasSheets()
```

Sheets add-on configuration.

`.google.apps.script.type.sheets.SheetsAddOnManifest sheets = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the sheets field is set.

### hasSlides()

```
public abstract boolean hasSlides()
```

Slides add-on configuration.

`.google.apps.script.type.slides.SlidesAddOnManifest slides = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the slides field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
