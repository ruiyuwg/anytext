Image quality adjustment refers to the process of compressing images while maintaining their formats. Images have two types of qualities: absolute quality and relative quality. You can use the image quality adjustment feature to reduce image sizes and optimize traffic utilization.

## **Parameters**

image\_process=**quality**

The following table describes the parameters.

**Parameter**

**Description**

**Value range**

Q

The absolute quality of the image. Image quality can be represented by an absolute value. You cannot adjust the image quality to a higher value.

The value must be a multiple of 5 between 0 and 100. Other values are not supported.

**Note**

A greater absolute value specifies higher quality and higher clarity. We recommend that you set Q to 95.

q

The relative quality of the image. Image quality can be adjusted based on the original quality and a quality coefficient and represented by a relative value.

The value must be a multiple of 5 between 0 and 100. Other values are not supported.

**Note**

A greater relative value specifies higher quality and higher clarity. We recommend that you set q to 95.

### **Examples**

-   A request URL that changes the absolute quality is `http(s)://example.com/image01.png?image_process=quality,Q_90`. If the current absolute quality is 95, the absolute quality after the conversion is 90. If the current absolute quality is 80, the absolute quality after the conversion is still 80.
    
-   A request URL that changes the relative quality is `http(s)://example.com/image01.png?image_process=quality,q_90`. If the current relative quality is 80, the relative quality after the conversion is 80 × 90% = 72.
