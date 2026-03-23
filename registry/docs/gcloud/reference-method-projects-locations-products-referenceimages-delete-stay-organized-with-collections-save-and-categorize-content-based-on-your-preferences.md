-   [Home](https://docs.cloud.google.com/)
-   [Technology areas](https://docs.cloud.google.com/docs)
-   [Vision API Product Search](https://docs.cloud.google.com/vision/product-search)
-   [Reference](https://docs.cloud.google.com/vision/product-search/docs/apis)

# Method: projects.locations.products.referenceImages.delete Stay organized with collections Save and categorize content based on your preferences.

 

Permanently deletes a reference image.

The image metadata will be deleted right away, but search queries against ProductSets containing the image may still work until all related caches are refreshed.

The actual image files are not deleted from Google Cloud Storage.

### HTTP request

`DELETE https://vision.googleapis.com/v1p4beta1/{name=projects/*/locations/*/products/*/referenceImages/*}`

The URL uses [gRPC Transcoding](https://github.com/googleapis/googleapis/blob/master/google/api/http.proto) syntax.

### Path parameters

Parameters

`name`

`string`

The resource name of the reference image to delete.

Format is:

`projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`

### Request body

The request body must be empty.

### Response body

If successful, the response body will be empty.

### Authorization Scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/cloud-platform`
-   `https://www.googleapis.com/auth/cloud-vision`

For more information, see the [Authentication Overview](https://cloud.google.com/docs/authentication/).

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-06-27 UTC.
