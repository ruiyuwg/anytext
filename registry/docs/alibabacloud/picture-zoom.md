Image resizing includes resizing by percentage, conditional resizing, adaptive resizing, and resizing to a specific size. If a platform or an application has specific requirements for the size of images, such as a profile picture or thumbnail, you can resize images by dimension or percentage to meet different display requirements.

### Parameters

image\_process=`resize`

The following table describes the parameters.

**Note**

-   If one of the parameters is set to a negative value, the image remains in its original size.
    
-   Currently, the feature only supports decreasing the size of images. If the configuration attempts to enlarge an image, the output remains unchanged.
    

**Parameter**

**Description**

**Value range**

w

Specifies the width to which you want to resize the image.

The default value is 0. The total number of pixels of the image cannot exceed 16,777,216.

h

Specifies the height to which you want to resize the image.

l

Specifies the length of the longer side to which you want to resize the image.

s

Specifies the length of the shorter side to which you want to resize the image.

fw and fh

Specifies the width and height to which you want to resize the image.

p

Specifies that the image is resized based on the original aspect ratio.

\[0,100\]

### **Examples**

The following table describes image resizing examples.

**Method**

**Operation**

**Example**

Based on a specific aspect ratio

Resize an image based on the original aspect ratio.

```
example.com/image01.png?image_process=resize,p_80
```

Based on conditions

Resize an image only if the image is greater than or equal to 1,024,000 bytes in size. Unit: bytes.

**Note:** In this example, the threshold is set to 1,024,000. You can set the threshold based on your business requirements.

```
example.com/image01.png?image_process=resize,l_200/threshold,1024000
```

Based on the longer side

Resize an image based on the specified length of the longer side.

```
example.com/image01.png?image_process=resize,l_200
```

Based on the shorter side

Resize an image based on the specified length of the shorter side.

```
example.com/image01.png?image_process=resize,s_200
```

Based on the width

Resize an image based on the specified width.

```
example.com/image01.png?image_process=resize,w_200
```

Based on the height

Resize an image based on the specified height.

```
example.com/image01.png?image_process=resize,h_200
```

Based on the specified height and width

Resize an image based on the specified height and width.

```
example.com/image01.png?image_process=resize,fw_200,fh_200
```
