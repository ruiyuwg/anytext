OSS limits a resumable upload to 10,000 parts. If your part size is too small, the total number of parts exceeds this limit and the upload fails with `Too many parts, Please increase part size.`

Increase the part size so that the total object size divided by the part size is less than 10,000.

## Resumable upload limits

**Constraint**

**Value**

Maximum number of parts per upload

10,000

Minimum part size

100 KB

Maximum part size

5 GB

For the full API specification, see [UploadPart](/help/en/oss/developer-reference/uploadpart).
