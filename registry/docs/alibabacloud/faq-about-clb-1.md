This topic provides answers to some frequently asked questions about Classic Load Balancer (CLB).

## Health checks

-   [What do I do if health checks generate a large number of web logs?](/help/en/slb/health-check-causes-processing-of-a-large-number-of-logs)
    
-   [How do I troubleshoot health check exceptions of a Layer 4 (TCP/UDP) listener?](/help/en/slb/layer-4-tcp-udp-listener-health-check-exception-troubleshooting)
    
-   [How do I troubleshoot health check exceptions of a Layer 7 listener (HTTP/HTTPS)?](/help/en/slb/layer-7-listener-http-https-health-check-exception-troubleshooting)
    
-   [Why do health checks fail even if my website can be accessed?](/help/en/slb/when-slb-is-used-site-access-is-normal-but-site-exception-is-health-check)
    
-   [Why does the "Connection reset by peer" error occur?](/help/en/slb/the-health-check-error-is-displayed-in-the-service-log-after-the-slb-connection-reset-by-peer-is-enabled)
    

## Access to Server Load Balancer (SLB) instances

-   [Why am I unable to access an SLB instance?](/help/en/slb/why-am-i-unable-to-access-an-slb-instance)
    
-   [Why does a timeout error occur when I access the service address of an SLB instance?](/help/en/slb/the-endpoint-of-the-slb-instance-timed-out)
    
-   [Why does a request timeout error occur during stress testing?](/help/en/slb/the-request-for-stress-testing-timed-out-on-the-slb-instance)
    
-   [What do I do if backend database failures cause all websites associated with the same listener of SLB to become inaccessible?](/help/en/slb/backend-database-failures-lead-to-abnormal-access-to-all-sites-in-the-same-listener-of-slb)
    
-   [How do I troubleshoot HTTP 500, 502, and 504 errors?](/help/en/slb/troubleshoot-http-5xx-errors)
    
-   [CLB status codes](/help/en/slb/clb-status-code-description)
    

## Listener configurations

-   [Why do the style sheets fail to load when I access a website over an HTTPS listener even if I can use an HTTP listener to access the website?](/help/en/slb/http-listeners-access-urls-but-https-listeners-do-not-load-styles)
    
-   [Why does an HTTP request to a Layer 7 SLB instance contain the "Transfer-Encoding: chunked" header?](/help/en/slb/note-that-the-transfer-encoding-chunked-field-exists-in-the-http-request-header-of-a-layer-7-slb-instance)
    
-   [Why are response headers removed after I use a Layer 7 SLB instance to forward requests?](/help/en/slb/parameters-in-response-headers-are-deleted-after-requests-are-forwarded-by-a-layer-7-listener-of-clb)
    
-   [What do I do if the "The DomainExtension is related with rules" error occurs when I delete an additional domain name from an SLB instance?](/help/en/slb/the-the-domainextension-is-related-with-rules-error-occurs-when-you-delete-an-extended-domain-name-from-an-slb-instance)
    
-   [What do I do if a listener is inaccessible after I use special characters to configure a URL-based forwarding rule?](/help/en/slb/access-fails-because-slb-uses-special-characters-to-configure-url-based-forwarding-rules)
    

## Backend servers

-   [Why are requests unevenly distributed among backend servers?](/help/en/slb/why-are-requests-unbalanced-among-ecs-instances)
    
-   [How do I troubleshoot backend server exceptions?](/help/en/slb/what-can-i-do-if-my-ecs-instance-is-declared-unhealthy-after-i-enable-health-checks-for-server-load-balancer)
    
-   [How do I remove ECS instances from server groups of SLB?](/help/en/slb/remove-backend-ecs-instances)
    
-   [Why do backend ECS instances frequently receive requests whose User-Agent value is KeepAliveClient?](/help/en/slb/the-backend-ecs-instances-of-the-server-load-balancer-frequently-receive-requests-whose-user-agent-field-value-is-keepaliveclient)
    
-   [What do I do if a large number of connections to backend servers are in the TIME\_WAIT state?](/help/en/ecs/user-guide/a-large-number-of-connections-are-contained-in-the-time-wait-status-of-the-slb-backend-server)
    
-   [How do request packets interact with Layer 4 and Layer 7 listeners of SLB?](/help/en/slb/interaction-of-layer-4-and-layer-7-listener-requests-and-packets)
    

## Session persistence

-   [What do I do if the session persistence feature does not take effect?](/help/en/slb/session-persistence-is-invalid-when-you-use-slb)
    
-   [How do I configure cookies after I enable session persistence and select Rewrite Cookie as the method to handle cookies?](/help/en/slb/configure-cookie-in-the-backend-server)
    
-   [How do I run the curl command to verify session persistence?](/help/en/slb/how-to-use-the-curl-command-to-test-the-validity-of-session-persistence-for-an-slb-instance)
