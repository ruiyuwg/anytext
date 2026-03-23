When versioning is enabled or suspended on a bucket, calling `DeleteObject` without a version ID does not remove the object — OSS inserts a 0-byte placeholder called a delete marker and sets it as the current version. Subsequent `GetObject` requests return a 404 error, making the object appear deleted while all previous versions remain intact.

> To permanently remove an object or a delete marker, you must include a version ID in the `DeleteObject` request.

> Versioning prevents permanent deletion of objects. An object with a delete marker can be considered deleted, but its previous versions remain recoverable.

## How delete markers differ from objects

A delete marker shares two attributes with a regular object: a key (object name) and a unique version ID. All other attributes differ:

**Attribute**

**Object**

**Delete marker**

Stores data

Yes

No (0 bytes)

Access control list (ACL)

Configurable

None

`GetObject` response

Returns content

Returns 404

Permission to delete

—

`oss:DeleteObjectVersion`

## How multiple delete markers accumulate

Calling `DeleteObject` without a version ID on an object whose current version is already a delete marker does not remove that marker. OSS adds a new delete marker on top of the existing one, and each marker gets its own unique version ID.

The following figure shows an object with multiple delete markers stacked on top of each other.

![Multiple delete markers stacked on an object](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9595688951/p40364.jpg)

To avoid accumulating markers, always specify the version ID of the marker you want to delete.

## Remove a delete marker to restore a previous version

To permanently delete a delete marker, include its version ID in the `DeleteObject` request.

**Warning**

Calling `DeleteObject` without a version ID does not delete an existing delete marker — it creates another one on top.

For example, to delete the marker with version ID `333333`, include that version ID in the request. The following figure shows the result: the marker with version ID `333333` is deleted, and version `222222` becomes the current version.

![Result after removing delete marker 333333](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9595688951/p40365.jpg)

After deletion, `GetObject` returns the content of version `222222` instead of a 404 error.

## Related operations

**Operation**

**Description**

`DeleteObject` (no version ID)

Creates a delete marker as the current version

`DeleteObject` (with version ID)

Permanently deletes the specified version or delete marker

The following OSS SDKs support deleting a specific object version and its delete marker:

[Java SDK](/help/en/oss/developer-reference/delete-objects-9#concept-265528) | [Python SDK](/help/en/oss/developer-reference/delete-objects-1#concept-265528) | [PHP SDK](/help/en/oss/developer-reference/delete-objects-13#concept-1962181) | [Node.js SDK](/help/en/oss/developer-reference/delete-objects-15#concept-2436244) | [.NET SDK](/help/en/oss/developer-reference/delete-objects-8#concept-2487555) | [Go SDK](/help/en/oss/developer-reference/use-go-sdk-to-delete-objects#concept-265528) | [C++ SDK](/help/en/oss/developer-reference/delete-objects-3#concept-2331899)
