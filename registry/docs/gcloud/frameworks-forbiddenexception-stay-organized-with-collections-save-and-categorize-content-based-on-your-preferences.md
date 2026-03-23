-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application development](https://docs.cloud.google.com/docs/application-development)
-   [Cloud Endpoints](https://docs.cloud.google.com/endpoints/docs)
-   [Endpoints Frameworks](https://docs.cloud.google.com/endpoints/docs/frameworks/about-cloud-endpoints-frameworks)
-   [Reference](https://docs.cloud.google.com/endpoints/docs/frameworks/ref-endpoints-logs)

Send feedback

# ForbiddenException Stay organized with collections Save and categorize content based on your preferences.

com.google.api.server.spi.response

## Class ForbiddenException

-   java.lang.Object
-   -   ServiceException
    -   -   com.google.api.server.spi.response.ForbiddenException

-   * * *
    
      
    
    public class ForbiddenException
    extends ServiceException
    
    Forbidden exception that is mapped to a 403 response.
    

-   -   ### Constructor Summary
        
        Constructors 
        
        Constructor and Description
        
        `[ForbiddenException](https://docs.cloud.google.com/endpoints/docs/frameworks/java/javadoc/com/google/api/server/spi/response/ForbiddenException.html#ForbiddenException-java.lang.String-)(java.lang.String message)` 
        
        `[ForbiddenException](https://docs.cloud.google.com/endpoints/docs/frameworks/java/javadoc/com/google/api/server/spi/response/ForbiddenException.html#ForbiddenException-java.lang.String-java.lang.String-)(java.lang.String statusMessage, java.lang.String reason)` 
        
        `[ForbiddenException](https://docs.cloud.google.com/endpoints/docs/frameworks/java/javadoc/com/google/api/server/spi/response/ForbiddenException.html#ForbiddenException-java.lang.String-java.lang.String-java.lang.String-)(java.lang.String statusMessage, java.lang.String reason, java.lang.String domain)` 
        
        `[ForbiddenException](https://docs.cloud.google.com/endpoints/docs/frameworks/java/javadoc/com/google/api/server/spi/response/ForbiddenException.html#ForbiddenException-java.lang.String-java.lang.String-java.lang.String-java.lang.Throwable-)(java.lang.String statusMessage, java.lang.String reason, java.lang.String domain, java.lang.Throwable cause)` 
        
        `[ForbiddenException](https://docs.cloud.google.com/endpoints/docs/frameworks/java/javadoc/com/google/api/server/spi/response/ForbiddenException.html#ForbiddenException-java.lang.String-java.lang.String-java.lang.Throwable-)(java.lang.String statusMessage, java.lang.String reason, java.lang.Throwable cause)` 
        
        `[ForbiddenException](https://docs.cloud.google.com/endpoints/docs/frameworks/java/javadoc/com/google/api/server/spi/response/ForbiddenException.html#ForbiddenException-java.lang.String-java.lang.Throwable-)(java.lang.String message, java.lang.Throwable cause)` 
        
        `[ForbiddenException](https://docs.cloud.google.com/endpoints/docs/frameworks/java/javadoc/com/google/api/server/spi/response/ForbiddenException.html#ForbiddenException-java.lang.Throwable-)(java.lang.Throwable cause)` 
        
    
    -   ### Method Summary
        
        -   ### Methods inherited from class java.lang.Object
            
            `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail
        
        -   #### ForbiddenException
            
            public ForbiddenException(java.lang.String message)
            
        
        -   #### ForbiddenException
            
            public ForbiddenException(java.lang.Throwable cause)
            
        
        -   #### ForbiddenException
            
            public ForbiddenException(java.lang.String message,
                                      java.lang.Throwable cause)
            
        
        -   #### ForbiddenException
            
            public ForbiddenException(java.lang.String statusMessage,
                                      java.lang.String reason)
            
        
        -   #### ForbiddenException
            
            public ForbiddenException(java.lang.String statusMessage,
                                      java.lang.String reason,
                                      java.lang.Throwable cause)
            
        
        -   #### ForbiddenException
            
            public ForbiddenException(java.lang.String statusMessage,
                                      java.lang.String reason,
                                      java.lang.String domain)
            
        
        -   #### ForbiddenException
            
            public ForbiddenException(java.lang.String statusMessage,
                                      java.lang.String reason,
                                      java.lang.String domain,
                                      java.lang.Throwable cause)
            

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-07-28 UTC.
