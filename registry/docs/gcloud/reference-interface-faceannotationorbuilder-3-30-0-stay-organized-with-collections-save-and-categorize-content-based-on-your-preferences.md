-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface FaceAnnotationOrBuilder (3.30.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

```
public interface FaceAnnotationOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAngerLikelihood()

```
public abstract Likelihood getAngerLikelihood()
```

Anger likelihood.

`.google.cloud.vision.v1p1beta1.Likelihood anger_likelihood = 11;`

**Returns**

**Type**

**Description**

`[Likelihood](/java/docs/reference/google-cloud-vision/3.30.0/com.google.cloud.vision.v1p1beta1.Likelihood)`

The angerLikelihood.

### getAngerLikelihoodValue()

```
public abstract int getAngerLikelihoodValue()
```

Anger likelihood.

`.google.cloud.vision.v1p1beta1.Likelihood anger_likelihood = 11;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for angerLikelihood.

### getBlurredLikelihood()

```
public abstract Likelihood getBlurredLikelihood()
```

Blurred likelihood.

`.google.cloud.vision.v1p1beta1.Likelihood blurred_likelihood = 14;`

**Returns**

**Type**

**Description**

`[Likelihood](/java/docs/reference/google-cloud-vision/3.30.0/com.google.cloud.vision.v1p1beta1.Likelihood)`

The blurredLikelihood.

### getBlurredLikelihoodValue()

```
public abstract int getBlurredLikelihoodValue()
```

Blurred likelihood.

`.google.cloud.vision.v1p1beta1.Likelihood blurred_likelihood = 14;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for blurredLikelihood.

### getBoundingPoly()

```
public abstract BoundingPoly getBoundingPoly()
```

The bounding polygon around the face. The coordinates of the bounding box are in the original image's scale, as returned in `ImageParams`. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated.

`.google.cloud.vision.v1p1beta1.BoundingPoly bounding_poly = 1;`

**Returns**

**Type**

**Description**

`[BoundingPoly](/java/docs/reference/google-cloud-vision/3.30.0/com.google.cloud.vision.v1p1beta1.BoundingPoly)`

The boundingPoly.

### getBoundingPolyOrBuilder()

```
public abstract BoundingPolyOrBuilder getBoundingPolyOrBuilder()
```

The bounding polygon around the face. The coordinates of the bounding box are in the original image's scale, as returned in `ImageParams`. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated.

`.google.cloud.vision.v1p1beta1.BoundingPoly bounding_poly = 1;`

**Returns**

**Type**

**Description**

`[BoundingPolyOrBuilder](/java/docs/reference/google-cloud-vision/3.30.0/com.google.cloud.vision.v1p1beta1.BoundingPolyOrBuilder)`

### getDetectionConfidence()

```
public abstract float getDetectionConfidence()
```

Detection confidence. Range \[0, 1\].

`float detection_confidence = 7;`

**Returns**

**Type**

**Description**

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The detectionConfidence.

### getFdBoundingPoly()

```
public abstract BoundingPoly getFdBoundingPoly()
```

The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the <code>fd</code> (face detection) prefix.

`.google.cloud.vision.v1p1beta1.BoundingPoly fd_bounding_poly = 2;`

**Returns**

**Type**

**Description**

`[BoundingPoly](/java/docs/reference/google-cloud-vision/3.30.0/com.google.cloud.vision.v1p1beta1.BoundingPoly)`

The fdBoundingPoly.

### getFdBoundingPolyOrBuilder()

```
public abstract BoundingPolyOrBuilder getFdBoundingPolyOrBuilder()
```

The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the <code>fd</code> (face detection) prefix.

`.google.cloud.vision.v1p1beta1.BoundingPoly fd_bounding_poly = 2;`

**Returns**

**Type**

**Description**

`[BoundingPolyOrBuilder](/java/docs/reference/google-cloud-vision/3.30.0/com.google.cloud.vision.v1p1beta1.BoundingPolyOrBuilder)`

### getHeadwearLikelihood()

```
public abstract Likelihood getHeadwearLikelihood()
```

Headwear likelihood.

`.google.cloud.vision.v1p1beta1.Likelihood headwear_likelihood = 15;`

**Returns**

**Type**

**Description**

`[Likelihood](/java/docs/reference/google-cloud-vision/3.30.0/com.google.cloud.vision.v1p1beta1.Likelihood)`

The headwearLikelihood.

### getHeadwearLikelihoodValue()

```
public abstract int getHeadwearLikelihoodValue()
```

Headwear likelihood.

`.google.cloud.vision.v1p1beta1.Likelihood headwear_likelihood = 15;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for headwearLikelihood.

### getJoyLikelihood()

```
public abstract Likelihood getJoyLikelihood()
```

Joy likelihood.

`.google.cloud.vision.v1p1beta1.Likelihood joy_likelihood = 9;`

**Returns**

**Type**

**Description**

`[Likelihood](/java/docs/reference/google-cloud-vision/3.30.0/com.google.cloud.vision.v1p1beta1.Likelihood)`

The joyLikelihood.

### getJoyLikelihoodValue()

```
public abstract int getJoyLikelihoodValue()
```

Joy likelihood.

`.google.cloud.vision.v1p1beta1.Likelihood joy_likelihood = 9;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for joyLikelihood.

### getLandmarkingConfidence()

```
public abstract float getLandmarkingConfidence()
```

Face landmarking confidence. Range \[0, 1\].

`float landmarking_confidence = 8;`

**Returns**

**Type**

**Description**

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The landmarkingConfidence.

### getLandmarks(int index)

```
public abstract FaceAnnotation.Landmark getLandmarks(int index)
```

Detected face landmarks.

`repeated .google.cloud.vision.v1p1beta1.FaceAnnotation.Landmark landmarks = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[FaceAnnotation.Landmark](/java/docs/reference/google-cloud-vision/3.30.0/com.google.cloud.vision.v1p1beta1.FaceAnnotation.Landmark)`

### getLandmarksCount()

```
public abstract int getLandmarksCount()
```

Detected face landmarks.

`repeated .google.cloud.vision.v1p1beta1.FaceAnnotation.Landmark landmarks = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLandmarksList()

```
public abstract List<FaceAnnotation.Landmark> getLandmarksList()
```

Detected face landmarks.

`repeated .google.cloud.vision.v1p1beta1.FaceAnnotation.Landmark landmarks = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Landmark](/java/docs/reference/google-cloud-vision/3.30.0/com.google.cloud.vision.v1p1beta1.FaceAnnotation.Landmark)>`

### getLandmarksOrBuilder(int index)

```
public abstract FaceAnnotation.LandmarkOrBuilder getLandmarksOrBuilder(int index)
```

Detected face landmarks.

`repeated .google.cloud.vision.v1p1beta1.FaceAnnotation.Landmark landmarks = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[FaceAnnotation.LandmarkOrBuilder](/java/docs/reference/google-cloud-vision/3.30.0/com.google.cloud.vision.v1p1beta1.FaceAnnotation.LandmarkOrBuilder)`

### getLandmarksOrBuilderList()

```
public abstract List<? extends FaceAnnotation.LandmarkOrBuilder> getLandmarksOrBuilderList()
```

Detected face landmarks.

`repeated .google.cloud.vision.v1p1beta1.FaceAnnotation.Landmark landmarks = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1p1beta1.FaceAnnotation.LandmarkOrBuilder>`

### getPanAngle()

```
public abstract float getPanAngle()
```

Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range \[-180,180\].

`float pan_angle = 5;`

**Returns**

**Type**

**Description**

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The panAngle.

### getRollAngle()

```
public abstract float getRollAngle()
```

Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range \[-180,180\].

`float roll_angle = 4;`

**Returns**

**Type**

**Description**

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The rollAngle.

### getSorrowLikelihood()

```
public abstract Likelihood getSorrowLikelihood()
```

Sorrow likelihood.

`.google.cloud.vision.v1p1beta1.Likelihood sorrow_likelihood = 10;`

**Returns**

**Type**

**Description**

`[Likelihood](/java/docs/reference/google-cloud-vision/3.30.0/com.google.cloud.vision.v1p1beta1.Likelihood)`

The sorrowLikelihood.

### getSorrowLikelihoodValue()

```
public abstract int getSorrowLikelihoodValue()
```

Sorrow likelihood.

`.google.cloud.vision.v1p1beta1.Likelihood sorrow_likelihood = 10;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for sorrowLikelihood.

### getSurpriseLikelihood()

```
public abstract Likelihood getSurpriseLikelihood()
```

Surprise likelihood.

`.google.cloud.vision.v1p1beta1.Likelihood surprise_likelihood = 12;`

**Returns**

**Type**

**Description**

`[Likelihood](/java/docs/reference/google-cloud-vision/3.30.0/com.google.cloud.vision.v1p1beta1.Likelihood)`

The surpriseLikelihood.

### getSurpriseLikelihoodValue()

```
public abstract int getSurpriseLikelihoodValue()
```

Surprise likelihood.

`.google.cloud.vision.v1p1beta1.Likelihood surprise_likelihood = 12;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for surpriseLikelihood.

### getTiltAngle()

```
public abstract float getTiltAngle()
```

Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range \[-180,180\].

`float tilt_angle = 6;`

**Returns**

**Type**

**Description**

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The tiltAngle.

### getUnderExposedLikelihood()

```
public abstract Likelihood getUnderExposedLikelihood()
```

Under-exposed likelihood.

`.google.cloud.vision.v1p1beta1.Likelihood under_exposed_likelihood = 13;`

**Returns**

**Type**

**Description**

`[Likelihood](/java/docs/reference/google-cloud-vision/3.30.0/com.google.cloud.vision.v1p1beta1.Likelihood)`

The underExposedLikelihood.

### getUnderExposedLikelihoodValue()

```
public abstract int getUnderExposedLikelihoodValue()
```

Under-exposed likelihood.

`.google.cloud.vision.v1p1beta1.Likelihood under_exposed_likelihood = 13;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for underExposedLikelihood.

### hasBoundingPoly()

```
public abstract boolean hasBoundingPoly()
```

The bounding polygon around the face. The coordinates of the bounding box are in the original image's scale, as returned in `ImageParams`. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated.

`.google.cloud.vision.v1p1beta1.BoundingPoly bounding_poly = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the boundingPoly field is set.

### hasFdBoundingPoly()

```
public abstract boolean hasFdBoundingPoly()
```

The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the <code>fd</code> (face detection) prefix.

`.google.cloud.vision.v1p1beta1.BoundingPoly fd_bounding_poly = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the fdBoundingPoly field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
