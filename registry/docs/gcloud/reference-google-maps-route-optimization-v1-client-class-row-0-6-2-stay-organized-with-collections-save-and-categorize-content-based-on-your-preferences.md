-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Maps Route Optimization V1 Client - Class Row (0.6.2) Stay organized with collections Save and categorize content based on your preferences.

0.6.2 (latest) 0.6.1 0.5.1 0.4.1 0.3.3 0.2.0 0.1.0

Reference documentation and code samples for the Google Maps Route Optimization V1 Client class Row.

Specifies a row of the duration and distance matrix.

Generated from protobuf message `google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix.Row`

## Namespace

Google \\ Maps \\ RouteOptimization \\ V1 \\ ShipmentModel \\ DurationDistanceMatrix

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ durations`

`array<[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)>`  

Duration values for a given row. It must have as many elements as [ShipmentModel.duration\_distance\_matrix\_dst\_tags](/php/docs/reference/maps-routeoptimization/latest/V1.ShipmentModel#_Google_Maps_RouteOptimization_V1_ShipmentModel__getDurationDistanceMatrixDstTags__).

`↳ meters`

`float[]`  

Distance values for a given row. If no costs or constraints refer to distances in the model, this can be left empty; otherwise it must have as many elements as `durations`.

### getDurations

Duration values for a given row. It must have as many elements as [ShipmentModel.duration\_distance\_matrix\_dst\_tags](/php/docs/reference/maps-routeoptimization/latest/V1.ShipmentModel#_Google_Maps_RouteOptimization_V1_ShipmentModel__getDurationDistanceMatrixDstTags__).

**Returns**

**Type**

**Description**

`[Google\Protobuf\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/RepeatedField)<[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)>`

### setDurations

Duration values for a given row. It must have as many elements as [ShipmentModel.duration\_distance\_matrix\_dst\_tags](/php/docs/reference/maps-routeoptimization/latest/V1.ShipmentModel#_Google_Maps_RouteOptimization_V1_ShipmentModel__getDurationDistanceMatrixDstTags__).

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Protobuf\Duration](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Duration)>`  

**Returns**

**Type**

**Description**

`$this`

### getMeters

Distance values for a given row. If no costs or constraints refer to distances in the model, this can be left empty; otherwise it must have as many elements as `durations`.

**Returns**

**Type**

**Description**

`[Google\Protobuf\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/RepeatedField)<float>`

### setMeters

Distance values for a given row. If no costs or constraints refer to distances in the model, this can be left empty; otherwise it must have as many elements as `durations`.

**Parameter**

**Name**

**Description**

`var`

`float[]`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
