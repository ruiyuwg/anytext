OSS SDK for Android throws two types of exceptions: `ClientException` and `ServiceException`.

## ClientException

`ClientException` is thrown when the client fails to send a request or transfer data to OSS. Common causes include:

-   Poor network connectivity causes the request to fail before it reaches OSS.
    
-   An I/O exception occurs during object upload (for example, the local file becomes unreadable mid-transfer).
    

## ServiceException

`ServiceException` is thrown when the request reaches OSS but the server returns an error. The exception carries structured fields that identify the failure.

When you catch a `ServiceException`, print the full exception object — it contains all the information needed to diagnose the problem.

The following table describes the fields in a `ServiceException`.

**Field**

**Description**

`Code`

The error code returned by OSS.

`Message`

The detailed error message returned by OSS.

`RequestId`

The universally unique identifier (UUID) for the request. If you need help, provide this RequestId to troubleshoot the problem.

`HostId`

The ID of the host in the OSS cluster that handled the request. This matches the host specified in the request.

`rawMessage`

The raw body of the HTTP response.

## Common OSS error codes

For more information about common OSS error codes, see [Error responses](/help/en/oss/user-guide/overview-14#concept-dt2-hq3-wdb).
