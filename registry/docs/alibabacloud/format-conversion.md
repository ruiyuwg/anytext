You can convert image formats based on your business requirements. For example, you can convert the format of an image if the image size is excessively large due to its format. You can also convert the format of an image if the platform on which you want to use the image has specific requirements on image formats.

## **Parameters**

image\_process=**format**

**Format**

**Description**

jpeg

Converts base images into the JPG or JPEG format.

png

Converts base images into the PNG format.

webp

Converts base images into the WebP format.

bmp

Converts base images into the BMP format.

gif

Saves base images in the GIF format. If base images are not in the GIF format, they are saved in the original format.

tiff

Converts base images into the TIFF format.

jp2

Converts base images into the JPEG 2000 format. The suffix of a JPEG 2000 image name is JP2.

## **Examples**

If you want to convert a base image into the BMP format, the request URL is `http(s)://example.com/image_01.png?image_process=format,bmp`.
