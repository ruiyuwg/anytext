The cropping feature lets you take out unnecessary elements from your images and keep only the highlights. You can also use this feature to adjust image aspect ratios. You can specify cropping-related parameters in request URLs to change the base images on Edge Security Acceleration (ESA) points of presence (POPs) to the specified size.

### Parameters

image\_process=`crop` or `circle`.

The following table describes the parameters.

**Note**

If one of the following parameters is set to a negative value, the image remains in its original size.

**Parameter**

**Description**

**Valid value**

w

The width of the cropped area.

The default value is 0. The total number of pixels of the image cannot exceed 16,777,216.

h

The height of the cropped area.

x

The X coordinate of the cropped area. The default value is the X coordinate of the upper-left point of the image.

y

The Y coordinate of the cropped area. The default value is the Y coordinate of the upper-left point of the image.

g

The position of the area that you want to crop in a 3 by 3 grid. The image is arranged in a 3 by 3 grid, which has 9 tiles. Each tile is positioned by its upper-left point.

-   nw: upper left
    
-   north: upper middle
    
-   ne: upper right
    
-   west: middle left
    
-   center: center
    
-   east: middle right
    
-   sw: lower left
    
-   south: lower middle
    
-   se: lower right
    

For more information, see the following figure that shows the position of each tile in a 3 by 3 grid.

The following figure shows the position of each tile in a 3 by 3 grid.

![图片裁剪](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8710642171/p771668.png)

### **Examples**

The following table describes the image cropping methods and examples.

**Method**

**Description**

**Example**

Crop in a circle shape

You can specify the radius of a circle to crop an image. The radius cannot exceed half the length of the shorter side of the base image.

`http(s)://example.com/image01.png?image_process=circle,200`

Crop in a 3 by 3 grid

An image can be represented by a 3 by 3 grid. You can specify the position of the tile in the grid that you want to crop.

`http(s)://example.com/image01.png?image_process=crop,w_200,h_200,g_se`

Crop based on an X and Y coordinate

You can specify the X coordinate, Y coordinate, width, and height to crop an image. The X and Y coordinates represent the lower-left point of the cropped area. The width and height specify the size of the cropped area.

`http(s)://example.com/image01.png?image_process=crop,x_10,y_10,w_400,h_200`

Crop from the center

You can specify the width and height to crop an image equally on all four sides at a time.

`http(s)://example.com/image01.png?image_process=crop,mid,w_400,h_200`
