OSS SDK for C# exceptions are classified into two types: OSSException and ClientException. Both are subclasses of RuntimeException.

## ClientException

A ClientException indicates an exception that occurs when a client sends a request or transmit data to OSS. For example, a ClientException is returned when the client fails to send a request due to network disconnection. A ClientException is also returned when an I/O exception occurs during object upload.

## OSSException

OSSException: indicates a server exception that arises from the parsing of a server error message. A ServiceException includes the error code and message returned by OSS so that you can identify and resolve the error.

OSSException involves the following error information:

**Parameter**

**Description**

Code

The error code that is returned by OSS.

Message

The detailed error message returned by OSS.

RequestId

The UUID used to uniquely identify the request. If the problem persists, you can provide the request IDto the OSS development engineers for help.

HostId

The ID of the host in the accessed OSS cluster, which is the same as the host ID specified in the request.

## Common OSS error codes

**Error code**

**Description**

AccessDenied

Access is denied.

BucketAlreadyExists

The bucket already exists.

BucketNotEmpty

The bucket is not empty.

EntityTooLarge

The entity is too large.

EntityTooSmall

The entity is too small.

FileGroupTooLarge

The file group is too large.

FilePartNotExist

The file part does not exist.

FilePartStale

The file part has expired.

InvalidArgument

The format of the parameter is invalid.

InvalidAccessKeyId

The AccessKey ID does not exist.

InvalidBucketName

The name of the bucket is invalid.

InvalidDigest

The digest is invalid.

InvalidObjectName

The object name is invalid.

InvalidPart

The part is invalid.

InvalidPartOrder

The part order is invalid.

InvalidTargetBucketForLogging

The bucket for logging is invalid.

InternalError

An internal OSS error occurred.

MalformedXML

The XML format is invalid.

MethodNotAllowed

The method is not supported.

MissingArgument

Some required parameters are not specified.

MissingContentLength

The content length is missing.

NoSuchBucket

The specified OSS bucket does not exist.

NoSuchKey

The object does not exist.

NoSuchUpload

The specified multipart upload ID does not exist.

NotImplemented

The method cannot be implemented.

PreconditionFailed

An error occurred during preprocessing.

RequestTimeTooSkewed

The time deviation of the OSS client and OSS server exceeds 15 minutes.

RequestTimeout

The request timed out.

SignatureDoesNotMatch

A signature error occurred.

TooManyBuckets

The number of buckets exceeds the limit.
