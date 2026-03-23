-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application development](https://docs.cloud.google.com/docs/application-development)
-   [Cloud Endpoints](https://docs.cloud.google.com/endpoints/docs)
-   [Endpoints Frameworks](https://docs.cloud.google.com/endpoints/docs/frameworks/about-cloud-endpoints-frameworks)
-   [Reference](https://docs.cloud.google.com/endpoints/docs/frameworks/ref-endpoints-logs)

Send feedback

# BadRequestException Stay organized with collections Save and categorize content based on your preferences.

com.google.api.server.spi.response

## Class BadRequestException

-   java.lang.Object
-   -   ServiceException
    -   -   com.google.api.server.spi.response.BadRequestException

-   * * *
    
      
    
    public class BadRequestException
    extends ServiceException
    
    Bad request exception that is mapped to a 400 response.
    

-   -   ### Constructor Summary
        
        Constructors 
        
        Constructor and Description
        
        `[BadRequestException](https://docs.cloud.google.com/endpoints/docs/frameworks/java/javadoc/com/google/api/server/spi/response/BadRequestException.html#BadRequestException-java.lang.String-)(java.lang.String message)` 
        
        `[BadRequestException](https://docs.cloud.google.com/endpoints/docs/frameworks/java/javadoc/com/google/api/server/spi/response/BadRequestException.html#BadRequestException-java.lang.String-java.lang.String-)(java.lang.String statusMessage, java.lang.String reason)` 
        
        `[BadRequestException](https://docs.cloud.google.com/endpoints/docs/frameworks/java/javadoc/com/google/api/server/spi/response/BadRequestException.html#BadRequestException-java.lang.String-java.lang.String-java.lang.String-)(java.lang.String statusMessage, java.lang.String reason, java.lang.String domain)` 
        
        `[BadRequestException](https://docs.cloud.google.com/endpoints/docs/frameworks/java/javadoc/com/google/api/server/spi/response/BadRequestException.html#BadRequestException-java.lang.String-java.lang.String-java.lang.String-java.lang.Throwable-)(java.lang.String statusMessage, java.lang.String reason, java.lang.String domain, java.lang.Throwable cause)` 
        
        `[BadRequestException](https://docs.cloud.google.com/endpoints/docs/frameworks/java/javadoc/com/google/api/server/spi/response/BadRequestException.html#BadRequestException-java.lang.String-java.lang.String-java.lang.Throwable-)(java.lang.String statusMessage, java.lang.String reason, java.lang.Throwable cause)` 
        
        `[BadRequestException](https://docs.cloud.google.com/endpoints/docs/frameworks/java/javadoc/com/google/api/server/spi/response/BadRequestException.html#BadRequestException-java.lang.String-java.lang.Throwable-)(java.lang.String message, java.lang.Throwable cause)` 
        
        `[BadRequestException](https://docs.cloud.google.com/endpoints/docs/frameworks/java/javadoc/com/google/api/server/spi/response/BadRequestException.html#BadRequestException-java.lang.Throwable-)(java.lang.Throwable cause)` 
        
    
    -   ### Method Summary
        
        -   ### Methods inherited from class java.lang.Object
            
            `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

-   -   ### Constructor Detail
        
        -   #### BadRequestException
            
            public BadRequestException(java.lang.String message)
            
        
        -   #### BadRequestException
            
            public BadRequestException(java.lang.Throwable cause)
            
        
        -   #### BadRequestException
            
            public BadRequestException(java.lang.String message,
                                       java.lang.Throwable cause)
            
        
        -   #### BadRequestException
            
            public BadRequestException(java.lang.String statusMessage,
                                       java.lang.String reason)
            
        
        -   #### BadRequestException
            
            public BadRequestException(java.lang.String statusMessage,
                                       java.lang.String reason,
                                       java.lang.Throwable cause)
            
        
        -   #### BadRequestException
            
            public BadRequestException(java.lang.String statusMessage,
                                       java.lang.String reason,
                                       java.lang.String domain)
            
        
        -   #### BadRequestException
            
            public BadRequestException(java.lang.String statusMessage,
                                       java.lang.String reason,
                                       java.lang.String domain,
                                       java.lang.Throwable cause)
            

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-07-28 UTC.
