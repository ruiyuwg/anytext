-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum FaceAnnotation.Landmark.Type (3.12.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

```
public enum FaceAnnotation.Landmark.Type extends Enum<FaceAnnotation.Landmark.Type> implements ProtocolMessageEnum
```

Face landmark (feature) type. Left and right are defined from the vantage of the viewer of the image without considering mirror projections typical of photos. So, `LEFT_EYE`, typically, is the person's right eye.

Protobuf enum `google.cloud.vision.v1p3beta1.FaceAnnotation.Landmark.Type`

## Implements

[ProtocolMessageEnum](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolMessageEnum.html)

## Inherited Members

[Enum.<T>valueOf(Class<T>,String)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#valueOf-java.lang.Class-java.lang.String-)

[Enum.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#clone--)

[Enum.compareTo(E)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#compareTo-E-)

[Enum.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#equals-java.lang.Object-)

[Enum.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#finalize--)

[Enum.getDeclaringClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#getDeclaringClass--)

[Enum.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#hashCode--)

[Enum.name()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#name--)

[Enum.ordinal()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#ordinal--)

[Enum.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#toString--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Fields

**Name**

**Description**

`CHIN_GNATHION`

Chin gnathion.

`CHIN_GNATHION = 32;`

`CHIN_GNATHION_VALUE`

Chin gnathion.

`CHIN_GNATHION = 32;`

`CHIN_LEFT_GONION`

Chin left gonion.

`CHIN_LEFT_GONION = 33;`

`CHIN_LEFT_GONION_VALUE`

Chin left gonion.

`CHIN_LEFT_GONION = 33;`

`CHIN_RIGHT_GONION`

Chin right gonion.

`CHIN_RIGHT_GONION = 34;`

`CHIN_RIGHT_GONION_VALUE`

Chin right gonion.

`CHIN_RIGHT_GONION = 34;`

`FOREHEAD_GLABELLA`

Forehead glabella.

`FOREHEAD_GLABELLA = 31;`

`FOREHEAD_GLABELLA_VALUE`

Forehead glabella.

`FOREHEAD_GLABELLA = 31;`

`LEFT_EAR_TRAGION`

Left ear tragion.

`LEFT_EAR_TRAGION = 27;`

`LEFT_EAR_TRAGION_VALUE`

Left ear tragion.

`LEFT_EAR_TRAGION = 27;`

`LEFT_EYE`

Left eye.

`LEFT_EYE = 1;`

`LEFT_EYEBROW_UPPER_MIDPOINT`

Left eyebrow, upper midpoint.

`LEFT_EYEBROW_UPPER_MIDPOINT = 25;`

`LEFT_EYEBROW_UPPER_MIDPOINT_VALUE`

Left eyebrow, upper midpoint.

`LEFT_EYEBROW_UPPER_MIDPOINT = 25;`

`LEFT_EYE_BOTTOM_BOUNDARY`

Left eye, bottom boundary.

`LEFT_EYE_BOTTOM_BOUNDARY = 19;`

`LEFT_EYE_BOTTOM_BOUNDARY_VALUE`

Left eye, bottom boundary.

`LEFT_EYE_BOTTOM_BOUNDARY = 19;`

`LEFT_EYE_LEFT_CORNER`

Left eye, left corner.

`LEFT_EYE_LEFT_CORNER = 20;`

`LEFT_EYE_LEFT_CORNER_VALUE`

Left eye, left corner.

`LEFT_EYE_LEFT_CORNER = 20;`

`LEFT_EYE_PUPIL`

Left eye pupil.

`LEFT_EYE_PUPIL = 29;`

`LEFT_EYE_PUPIL_VALUE`

Left eye pupil.

`LEFT_EYE_PUPIL = 29;`

`LEFT_EYE_RIGHT_CORNER`

Left eye, right corner.

`LEFT_EYE_RIGHT_CORNER = 18;`

`LEFT_EYE_RIGHT_CORNER_VALUE`

Left eye, right corner.

`LEFT_EYE_RIGHT_CORNER = 18;`

`LEFT_EYE_TOP_BOUNDARY`

Left eye, top boundary.

`LEFT_EYE_TOP_BOUNDARY = 17;`

`LEFT_EYE_TOP_BOUNDARY_VALUE`

Left eye, top boundary.

`LEFT_EYE_TOP_BOUNDARY = 17;`

`LEFT_EYE_VALUE`

Left eye.

`LEFT_EYE = 1;`

`LEFT_OF_LEFT_EYEBROW`

Left of left eyebrow.

`LEFT_OF_LEFT_EYEBROW = 3;`

`LEFT_OF_LEFT_EYEBROW_VALUE`

Left of left eyebrow.

`LEFT_OF_LEFT_EYEBROW = 3;`

`LEFT_OF_RIGHT_EYEBROW`

Left of right eyebrow.

`LEFT_OF_RIGHT_EYEBROW = 5;`

`LEFT_OF_RIGHT_EYEBROW_VALUE`

Left of right eyebrow.

`LEFT_OF_RIGHT_EYEBROW = 5;`

`LOWER_LIP`

Lower lip.

`LOWER_LIP = 10;`

`LOWER_LIP_VALUE`

Lower lip.

`LOWER_LIP = 10;`

`MIDPOINT_BETWEEN_EYES`

Midpoint between eyes.

`MIDPOINT_BETWEEN_EYES = 7;`

`MIDPOINT_BETWEEN_EYES_VALUE`

Midpoint between eyes.

`MIDPOINT_BETWEEN_EYES = 7;`

`MOUTH_CENTER`

Mouth center.

`MOUTH_CENTER = 13;`

`MOUTH_CENTER_VALUE`

Mouth center.

`MOUTH_CENTER = 13;`

`MOUTH_LEFT`

Mouth left.

`MOUTH_LEFT = 11;`

`MOUTH_LEFT_VALUE`

Mouth left.

`MOUTH_LEFT = 11;`

`MOUTH_RIGHT`

Mouth right.

`MOUTH_RIGHT = 12;`

`MOUTH_RIGHT_VALUE`

Mouth right.

`MOUTH_RIGHT = 12;`

`NOSE_BOTTOM_CENTER`

Nose, bottom center.

`NOSE_BOTTOM_CENTER = 16;`

`NOSE_BOTTOM_CENTER_VALUE`

Nose, bottom center.

`NOSE_BOTTOM_CENTER = 16;`

`NOSE_BOTTOM_LEFT`

Nose, bottom left.

`NOSE_BOTTOM_LEFT = 15;`

`NOSE_BOTTOM_LEFT_VALUE`

Nose, bottom left.

`NOSE_BOTTOM_LEFT = 15;`

`NOSE_BOTTOM_RIGHT`

Nose, bottom right.

`NOSE_BOTTOM_RIGHT = 14;`

`NOSE_BOTTOM_RIGHT_VALUE`

Nose, bottom right.

`NOSE_BOTTOM_RIGHT = 14;`

`NOSE_TIP`

Nose tip.

`NOSE_TIP = 8;`

`NOSE_TIP_VALUE`

Nose tip.

`NOSE_TIP = 8;`

`RIGHT_EAR_TRAGION`

Right ear tragion.

`RIGHT_EAR_TRAGION = 28;`

`RIGHT_EAR_TRAGION_VALUE`

Right ear tragion.

`RIGHT_EAR_TRAGION = 28;`

`RIGHT_EYE`

Right eye.

`RIGHT_EYE = 2;`

`RIGHT_EYEBROW_UPPER_MIDPOINT`

Right eyebrow, upper midpoint.

`RIGHT_EYEBROW_UPPER_MIDPOINT = 26;`

`RIGHT_EYEBROW_UPPER_MIDPOINT_VALUE`

Right eyebrow, upper midpoint.

`RIGHT_EYEBROW_UPPER_MIDPOINT = 26;`

`RIGHT_EYE_BOTTOM_BOUNDARY`

Right eye, bottom boundary.

`RIGHT_EYE_BOTTOM_BOUNDARY = 23;`

`RIGHT_EYE_BOTTOM_BOUNDARY_VALUE`

Right eye, bottom boundary.

`RIGHT_EYE_BOTTOM_BOUNDARY = 23;`

`RIGHT_EYE_LEFT_CORNER`

Right eye, left corner.

`RIGHT_EYE_LEFT_CORNER = 24;`

`RIGHT_EYE_LEFT_CORNER_VALUE`

Right eye, left corner.

`RIGHT_EYE_LEFT_CORNER = 24;`

`RIGHT_EYE_PUPIL`

Right eye pupil.

`RIGHT_EYE_PUPIL = 30;`

`RIGHT_EYE_PUPIL_VALUE`

Right eye pupil.

`RIGHT_EYE_PUPIL = 30;`

`RIGHT_EYE_RIGHT_CORNER`

Right eye, right corner.

`RIGHT_EYE_RIGHT_CORNER = 22;`

`RIGHT_EYE_RIGHT_CORNER_VALUE`

Right eye, right corner.

`RIGHT_EYE_RIGHT_CORNER = 22;`

`RIGHT_EYE_TOP_BOUNDARY`

Right eye, top boundary.

`RIGHT_EYE_TOP_BOUNDARY = 21;`

`RIGHT_EYE_TOP_BOUNDARY_VALUE`

Right eye, top boundary.

`RIGHT_EYE_TOP_BOUNDARY = 21;`

`RIGHT_EYE_VALUE`

Right eye.

`RIGHT_EYE = 2;`

`RIGHT_OF_LEFT_EYEBROW`

Right of left eyebrow.

`RIGHT_OF_LEFT_EYEBROW = 4;`

`RIGHT_OF_LEFT_EYEBROW_VALUE`

Right of left eyebrow.

`RIGHT_OF_LEFT_EYEBROW = 4;`

`RIGHT_OF_RIGHT_EYEBROW`

Right of right eyebrow.

`RIGHT_OF_RIGHT_EYEBROW = 6;`

`RIGHT_OF_RIGHT_EYEBROW_VALUE`

Right of right eyebrow.

`RIGHT_OF_RIGHT_EYEBROW = 6;`

`UNKNOWN_LANDMARK`

Unknown face landmark detected. Should not be filled.

`UNKNOWN_LANDMARK = 0;`

`UNKNOWN_LANDMARK_VALUE`

Unknown face landmark detected. Should not be filled.

`UNKNOWN_LANDMARK = 0;`

`UNRECOGNIZED`

`UPPER_LIP`

Upper lip.

`UPPER_LIP = 9;`

`UPPER_LIP_VALUE`

Upper lip.

`UPPER_LIP = 9;`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-vision/3.12.0/com.google.cloud.vision.v1p3beta1.FaceAnnotation.Landmark.Type#com_google_cloud_vision_v1p3beta1_FaceAnnotation_Landmark_Type_forNumber_int_) instead._

`valueOf(String name)`

`values()`

## Methods

**Name**

**Description**

`getDescriptorForType()`

`getNumber()`

`getValueDescriptor()`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
