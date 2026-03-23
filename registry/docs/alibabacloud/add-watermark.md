You can add watermarks to your images for brand promotion and publicity. This helps protect the copyrights of images and prevent unauthorized use of images. Edge Security Acceleration (ESA) allows you to add text watermarks or image watermarks to specified parts of images and adjust the transparency of the watermarks to ensure that both the watermarks and image content are clearly displayed.

### Parameters

image\_process=**watermark**

-   Basic parameters (watermark positions)
    
    ![水印位置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7129542171/p771693.png)
    

**Parameter**

**Description**

**Value range**

t

The opacity of the text or image watermark.

`[0,100]`

Default value: `100`. A value of 100 specifies that the watermark is opaque.

g

The position of the watermark on the image.

-   nw: upper left
    
-   north: upper middle
    
-   ne: upper right
    
-   west: middle left
    
-   center: center
    
-   east: middle right
    
-   sw: lower left
    
-   south: lower middle
    
-   se: lower right
    

x

The horizontal margin that specifies the horizontal distance between the watermark and the image edge. This parameter takes effect only if the watermark is on the upper left, middle left, lower left, upper right, middle right, or lower right of the image.

`[0,4096]`

Default value: `10`. Unit: `px`.

y

The vertical margin that specifies the vertical distance between the watermark and the image edge. This parameter takes effect only if the watermark is on the upper-left, upper middle, upper right, lower left, lower middle, or lower-right of the image.

`[0,4096]`

Default value: `10`. Unit: `px`.

**Note**

You can use x, y, and offset to adjust the position of a watermark on an image. You can also use these parameters to adjust the watermark layout when the image has multiple watermarks.

-   Image watermark parameters
    

**Parameter**

**Description**

**Value range**

image

The watermark URL that is accessible over the Internet. If authentication or permissions are required to access the specified URL, ESA may fail to retrieve the watermark URL.

Watermark URLs must be Base64-encoded. For more information, see [Encode watermarks](#715e456738l2q).

Base64-encoded strings

-   Text watermark parameters
    

**Parameter**

**Description**

**Value range**

text

The content of the text watermark. The text content must be Base64-encoded. For more information, see [Encode watermarks](#715e456738l2q).

A Base64-encoded string that contains at most 60 characters in length

type

The font of the text watermark. The font name must be Base64-encoded. For more information, see [Encode watermarks](#715e456738l2q).

You can specify up to 10 fonts. For information about fonts and font encoding, see [type settings and encoding](/help/en/cdn/user-guide/manage-image-watermarks#aaab533405cqx).

color

The color of the text watermark. The valid values for this parameter are RGB color values.

For example, 000000 specifies black, and FFFFFF specifies white.

Default value: `000000`.

rotate

The degree by which the text watermark is rotated clockwise.

`[0,360]`

Default value: `0`. A value of 0 specifies that the text watermark is not rotated. Unit: °.

fill

Specifies whether to tile the base image with the text watermark.

Valid values: `0` and `1`. Default value: `0`.

-   0: does not tile the base image with the text watermark.
    
-   1: tiles the base image with the text watermark.
    

size

The size of the text watermark.

`[1,1000]`

Default value: `40`.

Unit: `px`.

**type** settings and encoding

**Text font**

**Description**

**Encoded value**

alihyaihei

A bold font. This is the default font.

YWxpaHlhaWhlaQ

hysong

A Songti font variant.

aHlzb25n

hyhei

A Heiti font variant.

aHloZWk

hyshuangxian

A double line font.

aHlzaHVhbmd4aWFu

fzltzhk

A Heiti font variant.

ZnpsdHpoaw

fzshengsks

A regular script font.

ZnpzaGVuZ3Nrcw

fzqusongjian

A Songti font variant.

ZnpxdXNvbmdqaWFu

zzgfxingyan

An artistic font.

enpnZnhpbmd5YW4

comfortaa

Comfortaa

Y29tZm9ydGFh

notosans

NotoSans

bm90b3NhbnM

**Note**

If you use a font that is not included in the 10 fonts, the font is recognized as the default font `alihyaihei`.

## **Encode watermarks**

When you add watermarks, you must encode the content and fonts of the text images or encode the URLs of the image watermarks in Base64 by using characters that are allowed in URLs. To encode watermarks, perform the following steps:

1.  Encode the watermark content in Base64.
    

**Note**

We recommend that you use [URL-safe Base64 encoding tools](https://simplycalc.com/base64url-encode.php) to encode the content and fonts of text watermarks and URLs of the image watermarks. Base64-encoded watermark content is applicable to only watermark-specific parameters. Do not include Base64-encoded watermark content in signature strings.

2.  Replace characters in the Base64-encoded watermark content based on the following rules:
    
    -   Replace the plus signs (`+`) with hyphens (`-`).
        
    -   Replace the forward slashes (`/`) with underscores (`_`).
        
    -   Omit the equal signs (`=`) at the end of the Base64-encoded watermark content.
        

## **Examples**

-   Add the "Hello World" text watermark.
    

Encode the `Hello World` text watermark in Base64 by using characters that are allowed in URLs. For more information, see [Encode watermarks](#715e456738l2q). The encoding result of the text watermark is `SGVsbG8gV29ybGQ`. The encoding result of the hysong font is `aHlzb25n`. The image processing URL is `http(s)://example.com/image01.png?image_process=watermark,text_SGVsbG8gV29ybGQ,type_aHlzb25n`.

-   Add text and image watermarks.
    
    -   Encode the "Happy New Year" text watermark in Base64 into the `5paw5bm05b-r5LmQ` string by using characters that are allowed in URLs. Set the position of the text watermark to lower right, the horizontal margin to 10 pixels, and the vertical offset from the middle line to 10 pixels by using `g_se,x_10,y_10`.
        
    -   Encode the `http://example-test.oss-ap-southeast-1.aliyuncs.com/image/shuiyin.png` image watermark URL in Base64 into the `aHR0cDovL2V4YW1wbGUtdGVzdC5vc3MtYXAtc291dGhlYXN0LTEuYWxpeXVuY3MuY29tL2ltYWdlL3NodWl5aW4ucG5n` string by using characters that are allowed in URLs. Set the position of the image watermark to upper left, the horizontal margin to 10 pixels, and the vertical offset from the middle line to 10 pixels by using `g_nw,x_10,y_10`.
        
    -   Specify the image processing URL as `http(s)://example.com/image01.png?image_process=watermark,text_5paw5bm05b-r5LmQ,g_se,x_10,y_10/watermark,image_aHR0cDovL2V4YW1wbGUtdGVzdC5vc3MtYXAtc291dGhlYXN0LTEuYWxpeXVuY3MuY29tL2ltYWdlL3NodWl5aW4ucG5n,g_nw,x_10,y_10`.
