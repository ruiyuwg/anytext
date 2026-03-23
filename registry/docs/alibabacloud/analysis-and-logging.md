Edge Security Acceleration (ESA) collects and processes data at points of presence (POPs) through log analysis, real-time monitoring, and intelligent alerting. This enables prompt detection and response to potential security threats, enhancing data visibility and management, while improving operational efficiency and decision-making.

## ESA log analytics versus CDN

ESA data analytics is real-time and more interactive compared to the standard CDN service. Key differences:

**Feature**

**ESA**

**CDN**

Data screening

**Supported**

Not supported

Data latency

**Seconds**

High

Real-time top N ranking

**Supported**

Not supported

You can also run queries in the console to analyze data. Use cases:

-   **Location distribution analysis**: Analyze data distribution by country or region to understand the source of your website traffic and requests. This information helps you optimize localized services and develop marketing strategies.
    
-   **Performance and efficiency assessment**: Analyze metrics, such as page views and error codes, to assess content delivery efficiency and website health. This helps you promptly find and fix problems.
    
-   **Resource optimization and planning**: Plan your bandwidth resources based on traffic and request data, and optimize cache policies to reduce the load on your origin server and improve service performance.
    
-   **Security and compliance monitoring**: Use metrics such as secure encrypted requests to improve security awareness and ensure that your data transmissions are secure.
    

## **Features overview**

-   [Account analytics](/help/en/edge-security-acceleration/esa/user-guide/account-analysis)
    
    This topic explains how ESA account analytics provides visualized analysis of different metrics from all the websites under your account and walks you through how to use it.
    
-   [Traffic analytics](/help/en/edge-security-acceleration/esa/user-guide/flow-analysis)
    
    This topic explains how ESA traffic analytics provides visualized analysis of different metrics from your website and walks you through how to use it.
    
-   [Standard logs](/help/en/edge-security-acceleration/esa/user-guide/offline-log)
    
    ESA offers standard logs that are packaged on an hourly basis. You can download access logs of your website within the last 31 days to your local PC. Standard logs can help you optimize acceleration policies, monitor your website, detect potential risks, and learn user behavior.
    
-   [Real-time logs](/help/en/edge-security-acceleration/esa/user-guide/real-time-log/)
    
    ESA can collect system logs, application logs, or device operation logs of your website in real time. This helps monitor and analyze your business activities and tune related configurations if needed.
    
-   [Instant logs](/help/en/edge-security-acceleration/esa/user-guide/instant-log)
    
    Instant logs are lightweight, easy to use, and do not require any additional configurations. With instant logs, you can view the access logs of specific websites in real time in the ESA console. This helps you pinpoint attacks, troubleshoot system faults, and debug or test network connectivity between clients and websites.
    
-   [Trace](/help/en/edge-security-acceleration/esa/user-guide/trace)
    
    Use Trace to build an HTTP/S request, and ESA will display the matched configurations. Trace requests simulate tests to track configurations on records even if they have not been proxied. The requests support custom conditions, including geographic location, HTTP protocol, and request headers. For websites with security protection enabled, you can choose to skip the security challenge test.
