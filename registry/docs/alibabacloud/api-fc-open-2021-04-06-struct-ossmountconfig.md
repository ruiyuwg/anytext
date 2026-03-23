Parameter

Type

Description

Example

object

The Object Storage Service (OSS) mounting configurations.

mountPoints

array<object>

The configurations of the OSS mount points.

object

The configurations of the OSS mount point.

bucketName

string

The OSS bucket that you want to mount.

my-bucket

mountDir

string

The mount directory.

/mnt/dir

readOnly

boolean

Specifies whether the mounted directory is read-only after the OSS bucket is mounted. Valid values:

-   true: read-only
-   false: read and write

true

endpoint

string

The OSS endpoint.

http://oss-cn-shanghai.aliyuncs.com

bucketPath

string

The path of the mounted OSS bucket.

/my-dir
