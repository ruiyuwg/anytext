-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Compute V1 Client - Class ReservationAffinity (1.24.0) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.1 2.0.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.1 1.21.0 1.20.0 1.19.0 1.18.1 1.17.0 1.16.2 1.14.0 1.13.0 1.12.1 1.11.1 1.10.1 1.9.1 1.8.3 1.7.1 1.6.1 1.5.0

Reference documentation and code samples for the Compute V1 Client class ReservationAffinity.

Specifies the reservations that this instance can consume from.

Generated from protobuf message `google.cloud.compute.v1.ReservationAffinity`

## Namespace

Google \\ Cloud \\ Compute \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ consume_reservation_type`

`string`  

Specifies the type of reservation from which this instance can consume resources: ANY\_RESERVATION (default), SPECIFIC\_RESERVATION, or NO\_RESERVATION. See Consuming reserved instances for examples. Check the ConsumeReservationType enum for the list of possible values.

`↳ key`

`string`  

Corresponds to the label key of a reservation resource. To target a SPECIFIC\_RESERVATION by name, specify googleapis.com/reservation-name as the key and specify the name of your reservation as its value.

`↳ values`

`array`  

Corresponds to the label values of a reservation resource. This can be either a name to a reservation in the same project or "projects/different-project/reservations/some-reservation-name" to target a shared reservation in the same zone but in a different project.

### getConsumeReservationType

Specifies the type of reservation from which this instance can consume resources: ANY\_RESERVATION (default), SPECIFIC\_RESERVATION, or NO\_RESERVATION. See Consuming reserved instances for examples.

Check the ConsumeReservationType enum for the list of possible values.

**Returns**

**Type**

**Description**

`string`

### hasConsumeReservationType

### clearConsumeReservationType

### setConsumeReservationType

Specifies the type of reservation from which this instance can consume resources: ANY\_RESERVATION (default), SPECIFIC\_RESERVATION, or NO\_RESERVATION. See Consuming reserved instances for examples.

Check the ConsumeReservationType enum for the list of possible values.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getKey

Corresponds to the label key of a reservation resource. To target a SPECIFIC\_RESERVATION by name, specify googleapis.com/reservation-name as the key and specify the name of your reservation as its value.

**Returns**

**Type**

**Description**

`string`

### hasKey

### clearKey

### setKey

Corresponds to the label key of a reservation resource. To target a SPECIFIC\_RESERVATION by name, specify googleapis.com/reservation-name as the key and specify the name of your reservation as its value.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getValues

Corresponds to the label values of a reservation resource. This can be either a name to a reservation in the same project or "projects/different-project/reservations/some-reservation-name" to target a shared reservation in the same zone but in a different project.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setValues

Corresponds to the label values of a reservation resource. This can be either a name to a reservation in the same project or "projects/different-project/reservations/some-reservation-name" to target a shared reservation in the same zone but in a different project.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
