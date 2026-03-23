## Problem description

Before using M, when you use ongoDB, you can only use SCRAM-SHA-1 authentication, not MONGODB-CR authentication. Modify a configuration `schema.currentVersion=3` when, the following error occurs.

```
WriteResult({
        "writeError" : {
                "code" : 13,
                "errmsg" : "not authorized on admin to execute command { 
                            update: \"system.version\", updates: [ { q: { _id: \"authSchema\" }, 
                            u: { _id: \"authSchema\", currentVersion: 3 }, 
                            multi: false, upsert: true } ], ordered: true }"
        }
})
```

## Cause

MONGODB-CR authentication method has a security risk. Apsaradb for MongoDB does not support this authentication method and only supports the default SCRAM-SHA-1 authentication method.

## Solution

There is no solution to this problem, which is limited by product design.

## References

SCRAM-SHA-1 is the currently recommended authentication method, the following is the SCRAM-SHA-1 authentication process:

1.  The client initiates a SCRAM authentication request.
    
2.  The server sends a response to a challenge.
    
3.  The client responds with an attestation data and a combined string.
    
4.  The server uses the stored key and random parameters to generate a signature and verify the attestation data on the client.
    
5.  The client verifies the server signature data.
    

Compared with SCRAM-SHA-1, MONGODB-CR authentication has the following advantages:

-   Safety factor that can be flexibly adjusted.
    
-   Each user has an independent random coefficient.
    
-   A more secure HASH function.
    
-   Supports two-way authentication.
    

## Application scope

-   Metrics for ApsaraDB for MongoDB
