-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Video Transcoder V1 Client - Class TextMapping (0.6.0) Stay organized with collections Save and categorize content based on your preferences.

1.4.0 (latest) 1.3.2 1.2.0 1.1.0 1.0.3 0.10.5 0.9.1 0.8.2 0.7.1 0.6.0 0.5.3

Reference documentation and code samples for the Google Cloud Video Transcoder V1 Client class TextMapping.

The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.

Generated from protobuf message `google.cloud.video.transcoder.v1.TextStream.TextMapping`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ atom_key`

`string`  

Required. The `EditAtom.key` that references atom with text inputs in the `Job.edit_list`.

`↳ input_key`

`string`  

Required. The `Input.key` that identifies the input file.

`↳ input_track`

`int`  

Required. The zero-based index of the track in the input file.

### getAtomKey

Required. The `EditAtom.key` that references atom with text inputs in the `Job.edit_list`.

**Returns**

**Type**

**Description**

`string`

### setAtomKey

Required. The `EditAtom.key` that references atom with text inputs in the `Job.edit_list`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getInputKey

Required. The `Input.key` that identifies the input file.

**Returns**

**Type**

**Description**

`string`

### setInputKey

Required. The `Input.key` that identifies the input file.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getInputTrack

Required. The zero-based index of the track in the input file.

**Returns**

**Type**

**Description**

`int`

### setInputTrack

Required. The zero-based index of the track in the input file.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
