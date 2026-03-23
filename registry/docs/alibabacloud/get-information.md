This topic introduces the parameter used in URL to query information about an image and provide an example.

### Parameter

URL parameter: **info**

The image information is returned in JSON format. The information includes the length, height, width, format, quality, and orientation of the specified image.

```
{
 "Length":1055089,
 "Width":1920,
 "Height":1080,
 "Quality":100,
 "Format":"JPEG",
 "Orientation":"UNDEFINED"
}
```

### **Example**

URL used to query image information: `http(s)://example.com/image01.png?image_process=info`
