ALB Ingress supports custom forwarding rules. A forwarding rule consists of forwarding conditions and forwarding actions. You can define custom forwarding conditions based on the domain name, path, request header, query string, request method, cookie, or source IP of a request. You can also define custom forwarding actions, such as returning a fixed response, creating a redirection, inserting or deleting a request header, mirroring traffic, forwarding requests to multiple backend server groups, or rewriting requests. You can configure these custom forwarding rules in the console or by adding annotations to an Ingress resource.

## **Scenario index**

**Custom rule**

**Scenarios**

**Forwarding conditions**

-   [Scenario 1: Distribute traffic based on source IP and header](#p-8j7-fug-ddj)
    
-   [Scenario 2: Distribute traffic based on domain name, request method, and cookie](#p-gpa-u9v-p4w)
    
-   [Scenario 3: Distribute traffic based on a query string, multiple headers, and multiple paths](#p-hec-c2c-cru)
    

**Forwarding actions**

-   [Scenario 1: Set a fixed response with a 503 status code and content](#p-6vf-g4g-dj3)
    
-   [Scenario 2: Use an HTTP 301 status code to redirect to an HTTPS port](#p-dz6-ps7-ju6)
    
-   [Scenario 3: Insert the source: alibaba request header](#p-8t2-enh-9sw)
    
-   [Scenario 4: Mirror traffic to a server group](#p-7km-5yl-wnc)
    
-   [Scenario 5: Forward requests to multiple backend server groups](#p-cm1-vog-eao)
    
-   [Scenario 6: Rewrite request configurations](#p-834-udg-okh)
    
-   [Scenario 7: Modify the request header in the response based on ResponseHeader](#BiPOs)
    
-   [Scenario 8: Modify the request header in the response based on the response status code](#aa12584048t5c)
    

**Practice with forwarding conditions and actions**

[Scenario 1: Forward traffic to a specific service based on domain name conditions and actions](#d9930cd5bdi7f)

## Prerequisites

The ALB Ingress Controller component is installed. The component version must be v2.5.0 or later. For more information, see [Manage components](/help/en/ack/manage-system-components#task-z3j-tvk-2gb).

## Forwarding conditions

**Important**

-   A forwarding rule can have a maximum of 10 conditions.
    
-   The \`ResponseHeader\` and \`ResponseStatusCode\` forwarding conditions are valid only for custom response forwarding rules.
    

### Introduction to forwarding conditions

You can configure forwarding conditions in the `alb.ingress.kubernetes.io/conditions.<service-name>` annotation for an ALB Ingress. Different condition blocks are joined by an AND logical operator. Values within the same condition block are joined by an OR logical operator. For example, if you configure two different \`Header\` condition blocks, they are joined by an AND logical operator. However, the values specified within a single \`Header\` condition block are joined by an OR logical operator. The following table describes the forwarding conditions.

**Forwarding condition**

**Description**

Domain name

Matches the request domain name. Only requests with a matching domain name can access the service. The following code provides an example.

```
alb.ingress.kubernetes.io/conditions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding conditions configured in the annotation apply to the corresponding backend service.
  [{
      "type": "Host",
      "hostConfig": {
        "values": [
          "anno.example.com"
        ]
      }
  }]
```

-   type: The match type. Set this to Host to match the domain name.
    
-   HostConfig: The specific domain name to match. If you specify multiple domain names, they have an OR relationship.
    

Path

Matches the request path. Only requests with a matching path can access the service. The following code provides an example.

```
alb.ingress.kubernetes.io/conditions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding conditions configured in the annotation apply to the corresponding backend service.
  [{
    "type": "Path",
    "pathConfig": {
      "values": [
        "/pathvalue1",
        "/pathvalue2"
      ]
    }
  }]
```

-   type: The match type. Set this to Path to match the request path.
    
-   pathConfig: The specific path to match. If you specify multiple paths, they have an OR relationship.
    

Header

Matches the request header. Only requests with a matching header can access the service. The following code provides an example.

```
alb.ingress.kubernetes.io/conditions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding conditions configured in the annotation apply to the corresponding backend service.
  [{
    "type": "Header",
    "headerConfig": {
      "key": "headername",
      "values": [
        "headervalue1",
        "headervalue2"
      ]
     }
  }]
```

-   type: The match type. Set this to Header to match a header in the request.
    
-   headerConfig: The key-value pair of the header. If you specify multiple header values, they have an OR relationship.
    

Query string

Matches the query string. Only requests that contain a matching query string can access the service. The following code provides an example.

```
alb.ingress.kubernetes.io/conditions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding conditions configured in the annotation apply to the corresponding backend service.
  [{
    "type": "QueryString",
    "queryStringConfig": {
      "values": [
        {
           "key":"querystringkey1",
           "value":"querystringvalue2"
        }
      ]
    }
  }]
```

-   type: The match type. Set this to QueryString to match the query string of the request.
    
-   queryStringConfig: The key-value pair of the query string. The key can be 1 to 100 characters in length. The value can be 1 to 100 characters in length. The key and value can contain lowercase letters, visible characters, and the wildcard characters asterisk (\*) and question mark (?). They cannot contain spaces or the following characters: `#[]{}\|<>&`. If you specify multiple query strings, they have an OR relationship.
    

Request method

Matches the request method. Only requests with a matching method can access the service. The following code provides an example.

```
alb.ingress.kubernetes.io/conditions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding conditions configured in the annotation apply to the corresponding backend service.
  [{
    "type": "Method",
    "methodConfig": {
      "values": [
        "GET",
        "HEAD"
      ]
    }
  }]
```

-   type: The match type. Set this to Method to match the request method.
    
-   methodConfig: The specific request method. Valid values are GET, POST, PUT, DELETE, HEAD, OPTIONS, and PATCH. If you specify multiple request methods, they have an OR relationship.
    

Cookie

Matches the cookie. Only requests that contain a matching cookie can access the service. The following code provides an example.

```
alb.ingress.kubernetes.io/conditions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding conditions configured in the annotation apply to the corresponding backend service.
  [{
    "type": "Cookie",
    "cookieConfig": {
      "values": [
        {
           "key":"cookiekey1",
           "value":"cookievalue2"
        }
      ]
     }
  }]
```

-   type: The match type. Set this to Cookie to match the cookie.
    
-   cookieConfig: The key-value pair of the cookie. The key can be 1 to 100 characters in length. The value can be 1 to 100 characters in length. The key and value can contain lowercase letters, visible characters, and the wildcard characters asterisk (\*) and question mark (?). They cannot contain spaces or the following characters: `#[]{}\|<>&`. If you specify multiple cookies, they have an OR relationship.
    

Source IP

Matches the source IP address of the request. Only requests from a matching source IP address can access the service. The following code provides an example.

```
alb.ingress.kubernetes.io/conditions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding conditions configured in the annotation apply to the corresponding backend service.
  [{
    "type": "SourceIp",
    "sourceIpConfig": {
      "values": [
        "192.168.0.0/16",
        "172.16.0.0/16"
      ]
    }
  }]
```

-   type: The match type. Set this to SourceIP to match the source IP address of the request.
    
-   sourceIpConfig: The IP address of the request. If you specify multiple IP addresses, they have an OR relationship.
    

ResponseHeader

Matches the response header. The forwarding action is performed only on responses that carry a matching header. Note that this must be used with a response forwarding action and the `alb.ingress.kubernetes.io/rule-direction.<service-name>: Response` annotation. The following code provides an example.

```
alb.ingress.kubernetes.io/conditions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding conditions configured in the annotation apply to the corresponding backend service.
  [{
    "type": "ResponseHeader",
    "headerConfig": {
      "key": "headername",
      "values": [
        "headervalue1",
        "headervalue2"
      ]
     }
  }]
```

-   **type**: The match type. Set this to ResponseHeader to match a header in the response.
    
-   **headerConfig**: The key-value pair of the header. If you specify multiple header values, they have an OR relationship.
    

ResponseStatusCode

Matches the response status code. Only responses that return a matching status code can access the service. Note that this must be used with a response forwarding action and the `alb.ingress.kubernetes.io/rule-direction.<service-name>: Response` annotation. The following code provides an example.

```
alb.ingress.kubernetes.io/conditions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding conditions configured in the annotation apply to the corresponding backend service.
  [{
    "type": "ResponseStatusCode",
    "responseStatusCodeConfig": {
      "values": [
        "statuscode1",
        "statuscode2"
      ]
    }
  }]
```

-   **type**: The match type. Set this to `ResponseStatusCode` to match the response status code.
    
-   **responseStatusCodeConfig**: The specific response status code. If you specify multiple response status codes, they have an OR relationship.
    

### Scenario 1: Distribute traffic based on source IP and header

**Important**

You can specify a maximum of five source IP addresses for the custom conditions of a forwarding rule.

The following code block defines a rule that forwards traffic to the target only when the request's source IP, header, and path match the configuration.

If the source IP address of a request is in the 192.168.0.0/16 or 172.16.0.0/16 CIDR block, the request header contains gray-hello with a value of value1 or value2, and the request path is /hello, the request is forwarded to the gray-hello-svc service. Otherwise, the request is forwarded to other services.

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
   alb.ingress.kubernetes.io/order: "1"
   alb.ingress.kubernetes.io/conditions.gray-hello-svc: | # Note: The "gray-hello-svc" in this annotation must match the backend service name configured in spec.rules. The forwarding conditions configured in the annotation apply to the corresponding backend service.
     [{
       "type": "Header",
       "headerConfig": {
          "key":"gray-hello",
           "values": [
              "value1",
              "value2"
           ]
       }
      },
      {
         "type": "SourceIp",
         "sourceIpConfig": {
           "values": [
             "192.168.0.0/16",
             "172.16.0.0/16"
           ]
         }
     }]
  name: gray-hello-ingress
spec:
  ingressClassName: alb
  rules:
   - http:
      paths:
      - path: /hello
        pathType: ImplementationSpecific
        backend:
          service:
            name: gray-hello-svc # Note: The backend service name configured here must match "gray-hello-svc" in the custom forwarding condition annotation. The forwarding conditions configured in the annotation apply to this backend service.
            port:
              number: 88
```

alb.ingress.kubernetes.io/order: Specifies the priority of the Ingress. A smaller number indicates a higher priority.

### Scenario 2: Distribute traffic based on domain name, request method, and cookie

The following code block defines a rule that forwards traffic to the target only when the request's domain name, request method, and request cookie match the configuration.

If the request method is GET or HEAD, the request domain name is example.com or \*.edu, the request cookie has the key cookiekey1 with the value cookievalue1, and the request path is /test, the request is forwarded to the service-a service. Otherwise, the request is forwarded to the service-b service.

**Note**

Forwarding rules based on domain names support wildcard domain names.

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
   alb.ingress.kubernetes.io/conditions.service-a: | # Note: The "service-a" in this annotation must match the backend service name configured in spec.rules. The forwarding conditions configured in the annotation apply to the corresponding backend service.
     [{
       "type": "Cookie",
       "cookieConfig": {
         "values": [
           {
             "key":"cookiekey1",
             "value":"cookievalue1"
           }
        ]
       }
      },
      {
       "type": "Method",
       "methodConfig": {
         "values": [
           "GET",
           "HEAD"
         ]
       }
      },
     {
       "type": "Host",
       "hostConfig": {
           "values": [
              "example.com",
              "*.edu" 
           ]
       }
      }]
  name: ingress-example
spec:
  ingressClassName: alb
  rules:
   - http:
      paths:
      - path: /test
        pathType: ImplementationSpecific
        backend:
          service:
            name: service-a # Note: The backend service name configured here must match "service-a" in the custom forwarding condition annotation. The forwarding conditions configured in the annotation apply to this backend service.
            port:
              number: 88
      - path: /test
        pathType: ImplementationSpecific
        backend:
          service:
            name: service-b
            port:
              number: 88
```

### Scenario 3: Distribute traffic based on a query string, multiple headers, and multiple paths

The following code block defines a rule that forwards traffic to the target only when the request's query string, headers, and path match the configuration.

If the request path is /pathvalue1, /pathvalue2, or /test, the query string has the key querystringkey1 with the value querystringvalue2, the request header contains both the headerkey1 and headerkey2 headers, the headerkey1 header has a value of headervalue1 or headervalue2, and the headerkey2 header has a value of headervalue3 or headervalue4, the request is forwarded to the service-a service. Otherwise, the request is forwarded to the service-b service.

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
   alb.ingress.kubernetes.io/conditions.service-a: | # Note: The "service-a" in this annotation must match the backend service name configured in spec.rules. The forwarding conditions configured in the annotation apply to the corresponding backend service.
     [{
       "type": "Path",
       "pathConfig": {
           "values": [
              "/pathvalue1",
              "/pathvalue2"
           ]
       }
      },
      {
       "type": "QueryString",
       "queryStringConfig": {
         "values": [
           {
             "key":"querystringkey1",
             "value":"querystringvalue2"
           }
        ]
       }
      },
     {
       "type": "Header",
       "headerConfig": {
          "key":"headerkey1",
           "values": [
              "headervalue1",
              "headervalue2"
           ]
       }
     },
     {
       "type": "Header",
       "headerConfig": {
          "key":"headerkey2",
           "values": [
              "headervalue3",
              "headervalue4"
           ]
       }
     }]
  name: ingress-example
spec:
  ingressClassName: alb
  rules:
   - http:
      paths:
      - path: /test
        pathType: ImplementationSpecific
        backend:
          service:
            name: service-a # Note: The backend service name configured here must match "service-a" in the custom forwarding condition annotation. The forwarding conditions configured in the annotation apply to this backend service.
            port:
              number: 88
      - path: /test
        pathType: ImplementationSpecific
        backend:
          service:
            name: service-b
            port:
              number: 88
```

## Forwarding actions

### Introduction to forwarding actions

You can configure forwarding actions for requests and responses using the `alb.ingress.kubernetes.io/actions.<service-name>` annotation. Supported actions include returning a fixed response, creating a redirection, inserting or deleting a request header, traffic mirroring, forwarding requests to multiple backend server groups, and rewriting requests.

**Important**

-   For the `alb.ingress.kubernetes.io/actions.<service-name>` annotation, make sure that the service name in the annotation matches the service name under `backend` in the `rule` field.
    
-   In the same forwarding rule, you can use only one terminal forwarding action, such as redirection, a fixed response, or forwarding to multiple server groups.
    

-   When you configure redirection, a fixed response, or forwarding to multiple server groups, you must set `backend.service.port.name` to `use-annotation`.
    

#### **Request forwarding actions**

**Forwarding action**

**Description**

Fixed response

Returns a fixed response to the client through the ALB. You can set the response status code, content, and content type. The following code provides an example.

```
alb.ingress.kubernetes.io/actions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding action configured in the annotation applies to the corresponding backend service.
  [{
      "type": "FixedResponse",
      "FixedResponseConfig": {
          "contentType": "text/plain",
          "httpCode": "503",
          "content": "503 error text"
      }
  }]
```

-   type: The type of forwarding action. Set this to FixedResponse to configure a fixed response.
    
-   contentType: The content type of the response body.
    
-   httpCode: The response status code.
    
-   content: The response body.
    

Redirection

Uses an HTTP 3xx status code to direct the client to another address to access the service. The following code provides an example.

**Important**

Except for httpCode, other redirection parameters cannot all be set to their default values.

```
alb.ingress.kubernetes.io/actions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding action configured in the annotation applies to the corresponding backend service.
  [{
      "type": "Redirect",
      "RedirectConfig": {
          "host": "${host}",
          "path": "${path}",
          "port": "443",
          "protocol": "${protocol}",
          "query": "${query}",
          "httpCode": "301"
      }
  }]
```

-   type: The type of forwarding action. Set this to Redirect to configure a redirection.
    
-   host: The domain name to which the request is redirected.
    
-   path: The path to which the request is redirected.
    
-   port: The port to which the request is redirected.
    
-   protocol: The protocol to which the request is redirected.
    
-   query: The query string to which the request is redirected.
    
-   httpCode: The status code.
    

Traffic mirroring

Sets the ID of the server group for traffic mirroring. This copies the request and forwards it to the traffic mirroring server group. The following code provides an example.

**Important**

-   The traffic mirroring action can only be used with forwarding, inserting a header, deleting a header, and traffic throttling. It cannot be used with rewrite, fixed response, or redirection.
    
-   A traffic mirroring server group can only be attached using ServerGroupID.
    

```
alb.ingress.kubernetes.io/actions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding action configured in the annotation applies to the corresponding backend service.
      [{
          "type": "TrafficMirror",
          "TrafficMirrorConfig": {
              "TargetType" : "ForwardGroupMirror",
              "MirrorGroupConfig": {
                  "ServerGroupTuples" : [{
                      "ServerGroupID": "sgp-2auud2fxj1r46*****"
                  }]
              }
           }
      }]
```

-   type: The type of forwarding action. Set this to TrafficMirror to configure traffic mirroring.
    
-   TargetType: The target type for mirroring. Currently, only ForwardGroupMirror is supported, which mirrors requests to a server group.
    
-   ServerGroupID: The ID of the traffic mirroring server group.
    

Forward to multiple backend server groups

Forwards ALB requests to multiple backend server groups. You can specify the backend server groups using ServerGroupID, or create or attach server groups using ServiceName+ServicePort. You can set the weight for request forwarding to each backend server group and enable session persistence between server groups.

**Important**

-   A Standard Edition ALB instance can be attached to a maximum of five server groups.
    
-   If you attach server groups using both ServerGroupID and ServiceName+ServicePort, the backend server group is matched based on ServerGroupID with priority.
    
-   After you enable session persistence between server groups, ALB Ingress forwards requests from the same session to the same backend.
    

```
alb.ingress.kubernetes.io/actions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding action configured in the annotation applies to the corresponding backend service.
       [{
           "type": "ForwardGroup",
           "ForwardConfig": {
             "ServerGroups" : [{
               "ServiceName": "tea-svc",
               "Weight": 30,
               "ServicePort": 80
             },
             {
               "ServiceName": "coffee-svc",
               "Weight": 20,
               "ServicePort": 80
             },
             {
               "ServerGroupID": "sgp-71aexb9y93ypo*****",
               "Weight": 20
             },
             {
               "ServerGroupID": "sgp-slygpbvm2cydo*****",
               "Weight": 30
             }],
             "ServerGroupStickySession": {
              "Enabled": true,
              "Timeout": 80
             }
           }
       }]
```

-   type: The type of forwarding action. Set this to ForwardGroup to configure forwarding to multiple backend server groups.
    
-   ForwardConfig: The specific parameters for the backend forwarding server groups. If you set multiple server groups, requests are forwarded to each server group based on their weights.
    
-   ServerGroupID: The ID of the server group.
    
-   ServiceName: The name of the service.
    
-   ServicePort: The port of the service.
    
-   Weight: The weight for forwarding requests to each server group.
    
-   Enabled: Specifies whether to enable session persistence between server groups.
    
-   Timeout: The timeout period for session persistence between server groups.
    

Rewrite

Enables the rewrite feature for the ALB, which overwrites the request's domain name, path, and query string. The following code provides an example.

**Important**

-   The rewrite forwarding action conflicts with the `rewrite-target` annotation. Do not use them together.
    
-   The rewrite action cannot be used with the fixed response or redirection forwarding actions.
    

```
alb.ingress.kubernetes.io/actions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding action configured in the annotation applies to the corresponding backend service.
       [{
           "type": "Rewrite",
           "RewriteConfig": {
               "Host": "demo.domain.ingress.top",
               "Path": "/test",
               "Query": "querystring"
           }
       }]
```

-   type: The type of forwarding action. When set to Rewrite, this indicates that the current ALB supports the rewrite feature.
    
-   RewriteConfig: The specific parameters for the rewrite.
    
-   Host: The specific domain name to match for the rewrite.
    
-   Path: The specific path to match for the rewrite.
    
-   Query: The specific query string to match for the rewrite.
    

For more information about rewrite rules, see [Support for rewrite](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/advanced-alb-ingress-configurations#section-a8h-6m8-1vx).

Insert request header

Sets the header field name and content. This overwrites any existing header variables in the request. The following code provides an example.

```
alb.ingress.kubernetes.io/actions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding action configured in the annotation applies to the corresponding backend service.
  [{
      "type": "InsertHeader",
      "InsertHeaderConfig": {
          "key": "key",
          "value": "value",
          "valueType": "UserDefined"
      }
  }]
```

-   type: The type of forwarding action. Set this to InsertHeader to configure inserting a request header.
    
-   key: The field name of the request header.
    
-   value: The field content of the request header.
    
-   valueType: The value type.
    

Remove request header

Removes the header field name and content. The following code provides an example.

```
alb.ingress.kubernetes.io/actions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding action configured in the annotation applies to the corresponding backend service.
     [{
         "type": "RemoveHeader",
         "RemoveHeaderConfig": {
             "key": "key"
         }
     }]
```

type: The type of forwarding action. Set this to RemoveHeader to configure removing a request header.

key: The field name of the request header.

QPS throttling

When setting forwarding rules for an ALB, you can configure both an overall request rate limit and a request rate limit based on the client source IP.

The following code provides a configuration example:

**Important**

-   The QPS throttling forwarding action must be used together with forwarding to a server group.
    
-   When the X-Forwarded-For request header contains multiple IP addresses, such as X-Forwarded-For: <client-ip-address>, <proxy1>, <proxy2>, ..., the leftmost address is the real client IP. To use throttling based on the client source IP, you must enable the feature to find the real client source IP on the listener. This allows the ALB to find the real client source IP from the X-Forwarded-For header field. For more information, see [XForwardedForConfig](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alb-ingress-configuration-dictionary#TGIVT).
    

```
 annotations:
    alb.ingress.kubernetes.io/actions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding action configured in the annotation applies to the corresponding backend service.
      [{
          "type": "TrafficLimit",
          "TrafficLimitConfig": {
              "QPS": "1000",
              "QPSPerIp": "100"
          }
      }]
```

-   `type`: Specifies the type of forwarding action. Here, it is set to `TrafficLimit`, indicating a throttling configuration.
    
-   `QPS`: The overall request rate limit, which is the number of requests that can be processed per second. The value must be in the range of \[1, 1000000\]. If the request rate exceeds the specified limit, new connection requests that exceed the limit are rejected, and the client receives an HTTP 503 status code.
    
-   `QPSPerIp`: The request rate limit based on each client source IP. The value must be in the range of \[1, 1000000\]. If both `QPS` (overall limit) and `QPSPerIp` (limit based on client source IP) are set, the value of the latter must be smaller than the former. If the request rate exceeds the specified limit, requests that exceed the limit are rejected, and the client receives an HTTP 503 status code.
    

#### **Response forwarding actions**

**Forwarding action**

**Description**

Insert request header

Sets the header field name and content. This overwrites any existing header variables in the request. The following code provides an example.

```
alb.ingress.kubernetes.io/actions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding action configured in the annotation applies to the corresponding backend service.
  [{
      "type": "InsertHeader",
      "InsertHeaderConfig": {
          "key": "key",
          "value": "value",
          "valueType": "UserDefined"
      }
  }]
```

-   type: The type of forwarding action. Set this to InsertHeader to configure inserting a request header.
    
-   key: The field name of the request header.
    
-   value: The field content of the request header.
    
-   valueType: The value type.
    

Remove request header

Removes the header field name and content. The following code provides an example.

```
alb.ingress.kubernetes.io/actions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding action configured in the annotation applies to the corresponding backend service.
     [{
         "type": "RemoveHeader",
         "RemoveHeaderConfig": {
             "key": "key"
         }
     }]
```

type: The type of forwarding action. Set this to `RemoveHeader` to configure removing a request header.

key: The field name of the request header.

### Scenario 1: Set a fixed response with a 503 status code and content

## Console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Network** > **Ingresses**.
    
3.  On the **Ingresses** page, click **Create Ingress**. In the **Create Ingress** dialog box, configure the Ingress.
    
    **Configuration item**
    
    **Description**
    
    **Example**
    
    **Gateway Type**
    
    You can select **ALB Ingress**, **MSE Ingress**, or **Nginx Ingress**.
    
    For more information about the differences between these gateway types, see [Comparison of Nginx Ingresses, ALB Ingresses, and MSE Ingresses](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-among-nginx-ingresses-alb-ingresses-and-mse-ingresses-1#task-2273852).
    
    **ALB**
    
    **Name**
    
    The custom name of the Ingress.
    
    ingress
    
    **Ingress Class**
    
    Specify the class of the Ingress that is associated with the AlbConfig.
    
    alb
    
    **Rules**
    
    Click **\+ Add Rule** to add an Ingress rule.
    
    -   **Domain Name**: Specify a custom domain name.
        
    -   **Mappings**: Configure the following parameters:
        
        -   **Path**: Specify the URL path of the backend Service.
            
        -   **Rule**:
            
            -   **Prefix (Prefix-based Match)**: matches the prefix of the requested URL path.
                
            -   **Exact (Exact Match)**: exactly matches the requested URL path.
                
            -   **ImplementationSpecific (Default Value)**: depends on the logic implemented by the ALB Ingress controller.
                
            
            For more information, see [Forward requests based on URL paths](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/advanced-alb-ingress-configurations#title-b0x-mn4-smu).
            
        -   **Service**: Select the backend Service.
            
        -   **Port**: Specify the Service port that you want to expose.
            
    -   You can configure multiple paths for a domain name. Click **\+ Add** to add a path.
        
    
    -   **Domain Name**: Leave empty
        
    -   **Mappings:**
        
        -   **Path**: /
            
        -   **Rule**: ImplementationSpecific (Prefix)
            
        -   **Service**: response-503
            
        -   **Port**: 80
            
    
    **Custom Forwarding Rules**
    
    Enable custom forwarding rules to manage inbound traffic with fine-grained control.
    
    **Note**
    
    A forwarding rule can have a maximum of 10 conditions.
    
    -   From the **Add Condition** drop-down list, select one of the following:
        
        -   **Host**:
            
            Matches the request domain name. If you specify multiple domain names, they have an OR relationship. After setting this, the `alb.ingress.kubernetes.io/conditions.host-example` annotation is added.
            
        -   **Path**:
            
            Matches the request path. If you specify multiple paths, they have an OR relationship. After setting this, the `alb.ingress.kubernetes.io/conditions.path-example` annotation is added.
            
        -   **HTTP Header**:
            
            Matches the request header information in a key-value pair format. For example, **Key**: `headername` and **Value**: `headervalue1`. If you specify multiple header values, they have an OR relationship. After setting this, the `alb.ingress.kubernetes.io/conditions.http-header-example` annotation is added.
            
        
    -   From the **Action** drop-down list, select the following:
        
        **Return Fixed Response**
        
        Returns a fixed response to the client through the ALB. You can set the response status code, content, and content type. Configure **Response Status Code**, **Response Content Type (Optional)**, and **Response Content (Optional)** as needed.
        
        **Response Content Type**:
        
        -   **text/plain**: Plain text content type.
            
        -   **text/css**: Indicates CSS content.
            
        -   **text/html**: HTML content type.
            
        -   **application/javascript**: JavaScript content type.
            
        -   **application/json**: JSON content type.
            
        
    
    -   **Condition**: Select **Path**. (Keep the default)
        
    -   **Action**: **Return Fixed Response**
        
        -   **Response Status Code**: 503
            
        -   **Response Content Type (Optional)**: **text/plain**
            
        -   **Response Content (Optional)**: error
            
    
    Keep the default values for other configurations.
    
4.  After the configuration is complete, click **OK**.
    

## kubectl

The following code block shows an example of how to return a 503 status code and the text `503 error text` when a request is made to the service.

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  namespace: default
  name: ingress
  annotations:
    alb.ingress.kubernetes.io/actions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding action configured in the annotation applies to the corresponding backend service.
      [{
          "type": "FixedResponse",
          "FixedResponseConfig": {
              "contentType": "text/plain",
              "httpCode": "503",
              "content": "503 error text"
          }
      }]
spec:
  ingressClassName: alb
  rules:
    - http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: service-name  # Note: The backend service name configured here must match "service-name" in the custom forwarding action annotation alb.ingress.kubernetes.io/actions.service-name. The forwarding action configured in the annotation applies to this backend service.
                port:
                  name: use-annotation # The name of the servicePort must be use-annotation.
```

### Scenario 2: Use an HTTP 301 status code to redirect to an HTTPS port

The following code block shows an example of how to redirect a request to the service's HTTPS port.

## Redirection

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  namespace: default
  name: ingress
  annotations:
    alb.ingress.kubernetes.io/actions.redirect: | # Note: The "redirect" in this annotation must match the backend service name configured in spec.rules. The forwarding action configured in the annotation applies to the corresponding backend service.
      [{
          "type": "Redirect",
          "RedirectConfig": {
              "host": "${host}",
              "path": "${path}",
              "port": "443",
              "protocol": "https",
              "query": "${query}",
              "httpCode": "301"
          }
      }]
spec:
  ingressClassName: alb
  rules:
    - http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: redirect # Note: The backend service name configured here must match "redirect" in the custom forwarding action annotation alb.ingress.kubernetes.io/actions.redirect. The forwarding action configured in the annotation applies to this backend service.
                port:
                  name: use-annotation # The name of the servicePort must be use-annotation.
```

## Multiple redirections

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  namespace: default
  name: ingress
  annotations:
    alb.ingress.kubernetes.io/actions.redirect-1: |
      [{
          "type": "Redirect",
          "RedirectConfig": {
              "host": "${host}",
              "path": "${path}",
              "port": "443",
              "protocol": "https",
              "query": "${query}",
              "httpCode": "301"
          }
      }]
    alb.ingress.kubernetes.io/actions.redirect-2: |
      [{
          "type": "Redirect",
          "RedirectConfig": {
          "host": "${host}",
          "path": "${path}",
          "port": "443",
          "protocol": "https",
          "httpCode": "301"
          }
      }]
spec:
  ingressClassName: alb
  rules:
    - http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: redirect
                port:
                  name: use-annotation # The name of the servicePort must be use-annotation.
```

### Scenario 3: Insert the source: alibaba request header

The following code block shows an example of how to overwrite the original request header with source: alibaba when a request is made to the service.

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  namespace: default
  name: ingress
  annotations:
    alb.ingress.kubernetes.io/actions.insert-header: | # Note: The "insert-header" in this annotation must match the backend service name configured in spec.rules. The forwarding action configured in the annotation applies to the corresponding backend service.
      [{
          "type": "InsertHeader",
          "InsertHeaderConfig": {
              "key": "source",
              "value": "alibaba",
              "valueType": "UserDefined"
          }
      }]
spec:
  ingressClassName: alb
  rules:
    - http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: insert-header # Note: The backend service name configured here must match "insert-header" in the custom forwarding action annotation alb.ingress.kubernetes.io/actions.insert-header. The forwarding action configured in the annotation applies to this backend service.
                port:
                  number: 80
```

### Scenario 4: Mirror traffic to a server group

The following code block shows an example of how to mirror a request to a traffic mirroring server group.

Log on to the [Application Load Balancer (ALB) console](https://slb.console.alibabacloud.com/alb). In the navigation pane on the left, choose **ALB** > **Server Groups**. On the **Server Groups** page, obtain the server group ID.![服务器组](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3452921861/p571268.png)

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: traffic-mirror-ingress
  annotations:
  # mirror-svc must be one of the backend.services entered below.
  # ALB Ingress mirrors traffic forwarded to mirror-svc to the backend server specified in "ServerGroupID".
  # To configure traffic mirroring for multiple Services, add a separate annotation for each Service.
   alb.ingress.kubernetes.io/actions.mirror-svc: | # Note: The "mirror-svc" in this annotation must match the backend service name configured in spec.rules. The forwarding action configured in the annotation applies to the corresponding backend service.
       [{
           "type": "TrafficMirror",
           "TrafficMirrorConfig": {
              "TargetType" : "ForwardGroupMirror",
              "MirrorGroupConfig": {
                  "ServerGroupTuples" : [{
                      "ServerGroupID": "sgp-2auud2fxj1r46*****"
                  }]
              }
           }
       }]
spec:
  ingressClassName: alb
  rules:
   - host: demo.domain.ingress.top
     http:
      paths:
      - path: /test
        pathType: Prefix
        backend:
          service:
            name: mirror-svc # Note: The backend service name configured here must match "mirror-svc" in the custom forwarding action annotation alb.ingress.kubernetes.io/actions.mirror-svc. The forwarding action configured in the annotation applies to this backend service.
            port:
              number: 80
```

### Scenario 5: Forward requests to multiple backend server groups

## Console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Network** > **Ingresses**.
    
3.  On the **Ingresses** page, click **Create Ingress**. In the **Create Ingress** dialog box, configure the Ingress.
    
    **Configuration item**
    
    **Description**
    
    **Example**
    
    **Gateway Type**
    
    You can select **ALB Ingress**, **MSE Ingress**, or **Nginx Ingress**.
    
    For more information about the differences between these gateway types, see [Comparison of Nginx Ingresses, ALB Ingresses, and MSE Ingresses](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-among-nginx-ingresses-alb-ingresses-and-mse-ingresses-1#task-2273852).
    
    **Application Load Balancer (ALB)**
    
    **Name**
    
    The custom name of the Ingress.
    
    forward-ingress
    
    **Ingress Class**
    
    Specify the class of the Ingress that is associated with the AlbConfig.
    
    alb
    
    **Rules**
    
    Click **\+ Add Rule** to add an Ingress rule.
    
    -   **Domain Name**: Specify a custom domain name.
        
    -   **Mappings**: Configure the following parameters:
        
        -   **Path**: Specify the URL path of the backend Service.
            
        -   **Rule**:
            
            -   **Prefix (Prefix-based Match)**: matches the prefix of the requested URL path.
                
            -   **Exact (Exact Match)**: exactly matches the requested URL path.
                
            -   **ImplementationSpecific (Default Value)**: depends on the logic implemented by the ALB Ingress controller.
                
            
            For more information, see [Forward requests based on URL paths](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/advanced-alb-ingress-configurations#title-b0x-mn4-smu).
            
        -   **Service**: Select the backend Service.
            
        -   **Port**: Specify the Service port that you want to expose.
            
    -   You can configure multiple paths for a domain name. Click **\+ Add** to add a path.
        
    
    -   **Domain Name**: demo.domain.ingress.top
        
    -   **Mappings**:
        
        -   **Path**: /path
            
        -   **Rule**: Prefix match (default)
            
        -   **Service**: forward
            
        -   **Port**: 80
            
    
    **Custom Forwarding Rules**
    
    Enable custom forwarding rules to manage inbound traffic with fine-grained control.
    
    **Note**
    
    A forwarding rule can have a maximum of 10 conditions.
    
    -   From the **Add Condition** drop-down list, select one of the following:
        
        -   **Host**:
            
            Matches the request domain name. If you specify multiple domain names, they have an OR relationship. After setting this, the `alb.ingress.kubernetes.io/conditions.host-example` annotation is added.
            
        -   **Path**:
            
            Matches the request path. If you specify multiple paths, they have an OR relationship. After setting this, the `alb.ingress.kubernetes.io/conditions.path-example` annotation is added.
            
        -   **HTTP Header**:
            
            Matches the request header information in a key-value pair format. For example, **Key**: `headername` and **Value**: `headervalue1`. If you specify multiple header values, they have an OR relationship. After setting this, the `alb.ingress.kubernetes.io/conditions.http-header-example` annotation is added.
            
        
    -   From the **Action** drop-down list, select the following:
        
        **Forward To**
        
        Forwards to multiple backend server groups. In **Service Name**, select the target service. In **Port**, select the target port number. Then, configure a custom weight value.
        
        **Note**
        
        -   ClusterIP services are not supported for clusters with the Flannel network plug-in.
            
        -   When you select **Forward To**, you do not need to configure path mapping in the rule.
            
        
    
    -   **Condition**: Select **Domain Name**. Domain Name: demo.domain.ingress.top
        
    -   **Action**: **Forward to**
        
        -   **Service Name:** tea-svc
            
        -   **Port**: 80
            
        -   Configure weight: 80
            
    -   **Add Service**
        
        -   **Service Name:** coffee-svc
            
        -   **Port**: 80
            
        -   Configure weight: 20
            
    
    Keep the default values for other configurations.
    
4.  After the configuration is complete, click **OK**.
    

## kubectl

The following code block shows an example of how to forward a request to multiple services within the cluster.

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: forward-ingress
  annotations:
  # The service in the annotation must exist in the cluster, and its name must match the service name under backend in the rule field.
    alb.ingress.kubernetes.io/actions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding action configured in the annotation applies to the corresponding backend service.
       [{
           "type": "ForwardGroup",
           "ForwardConfig": {
             "ServerGroups" : [{
               "ServiceName": "tea-svc",
               "Weight": 80,
               "ServicePort": 80
             },
             {
               "ServiceName": "coffee-svc",
               "Weight": 20,
               "ServicePort": 80
             }]
           }
       }]
spec:
  ingressClassName: alb
  rules:
   - host: demo.domain.ingress.top
     http:
      paths:
      - path: /path
        pathType: Prefix
        backend:
          service:
            name: service-name # Note: The backend service name configured here must match "service-name" in the custom forwarding action annotation alb.ingress.kubernetes.io/actions.service-name. The forwarding action configured in the annotation applies to this backend service.
            port:
              name: use-annotation # The name of the servicePort must be use-annotation.
```

### Scenario 6: Rewrite request configurations

The following code block shows an example of how to rewrite the domain name, path, and query string of a request.

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  namespace: default
  name: rewrite-ingress
  annotations:
    alb.ingress.kubernetes.io/actions.service-name: | # Note: The "service-name" in this annotation must match the backend service name configured in spec.rules. The forwarding action configured in the annotation applies to the corresponding backend service.
       [{
           "type": "Rewrite",
           "RewriteConfig": {
               "Host": "demo.domain.ingress.top",
               "Path": "/test",
               "Query": "querystring"
           }
       }]
spec:
  ingressClassName: alb
  rules:
    - http:
        paths:
          - path: /path
            pathType: Prefix
            backend:
              service:
                name: service-name # Note: The backend service name configured here must match "service-name" in the custom forwarding action annotation alb.ingress.kubernetes.io/actions.service-name. The forwarding action configured in the annotation applies to this backend service.
                port: 
                  number: 80
```

### Scenario 7: Modify the request header in the response based on ResponseHeader

**Important**

-   By default, custom ALB Ingress forwarding rules apply to requests. To create a forwarding rule for responses, you must set the `alb.ingress.kubernetes.io/rule-direction.<service-name>` annotation to Response. The default value is Request.
    
-   When you create a forwarding rule for responses, you must set `backend.service.port.name` to `use-annotation`.
    

The following code block shows an example of how to insert a new request header (`source: alibaba`) if the `ResponseHeader` condition is met. The condition is met if the header contains `response-hello` with a value of `value1` or `value2`.

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
   alb.ingress.kubernetes.io/rule-direction.response-header: Response
   alb.ingress.kubernetes.io/conditions.response-header: | # Note: The "response-header" in this annotation must match the backend service name configured in spec.rules. The forwarding conditions configured in the annotation apply to the corresponding backend service.
     [{
         "type": "ResponseHeader",
         "responseHeaderConfig": {
            "key": "response-hello",
            "values": [
               "value1",
               "value2"
            ]
         }
     }]
   alb.ingress.kubernetes.io/actions.response-header: | # Note: The "response-header" in this annotation must match the backend service name configured in spec.rules. The forwarding action configured in the annotation applies to the corresponding backend service.
     [{
         "type": "InsertHeader",
         "InsertHeaderConfig": {
             "key": "source",
             "value": "alibaba",
             "valueType": "UserDefined"
         }
     }]
  name: response-header
spec:
  ingressClassName: alb
  rules:
   - http:
      paths:
      - path: /
        pathType: ImplementationSpecific
        backend:
          service:
            name: response-header # Note: The backend service name configured here must match "response-header" in the custom forwarding condition/action annotations. The forwarding conditions/actions configured in the annotations apply to this backend service.
            port:
              name: use-annotation # The name of the servicePort must be use-annotation.
```

### **Scenario 8: Modify the request header in the response based on the response status code**

**Important**

-   By default, custom ALB Ingress forwarding rules apply to requests. To create a forwarding rule for responses, you must set the `alb.ingress.kubernetes.io/rule-direction.<service-name>` annotation to Response. The default value is Request.
    
-   When you create a forwarding rule for responses, you must set `backend.service.port.name` to `use-annotation`.
    

The following code block shows an example of how to remove the `response-hello` header from the request header if the response status code is 200 or 300.

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
   alb.ingress.kubernetes.io/rule-direction.response-hello: Response
   alb.ingress.kubernetes.io/conditions.response-hello: | # Note: The "response-hello" in this annotation must match the backend service name configured in spec.rules. The forwarding conditions configured in the annotation apply to the corresponding backend service.
     [{
       "type": "ResponseStatusCode",
       "responseStatusCodeConfig": {
         "values": [
             "200",
             "300"
         ]
       }
     }]
   alb.ingress.kubernetes.io/actions.response-hello: | # Note: The "response-hello" in this annotation must match the backend service name configured in spec.rules. The forwarding action configured in the annotation applies to the corresponding backend service.
     [{
         "type": "RemoveHeader",
         "RemoveHeaderConfig": {
             "key": "response-hello"
         }
     }]
  name: response-hello
spec:
  ingressClassName: alb
  rules:
   - http:
      paths:
      - path: /*
        pathType: ImplementationSpecific
        backend:
          service:
            name: response-hello # Note: The backend service name configured here must match "response-hello" in the custom forwarding condition/action annotations. The forwarding conditions/actions configured in the annotations apply to this backend service.
            port:
              name: use-annotation # The name of the servicePort must be use-annotation.
```

## **Practice with forwarding conditions and actions**

### **Scenario 1:** Forward traffic to a specific service based on domain name conditions and actions

This section describes how to forward traffic to a specific service by configuring domain name-based forwarding conditions and corresponding forwarding actions in the ACK console.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Network** > **Ingresses**.
    
3.  On the **Ingresses** page, click **Create Ingress**. In the **Create Ingress** dialog box, configure the Ingress.
    
    **Configuration item**
    
    **Description**
    
    **Example**
    
    **Gateway Type**
    
    You can select **ALB Ingress**, **MSE Ingress**, or **Nginx Ingress**.
    
    For more information about the differences between these gateway types, see [Comparison of Nginx Ingresses, ALB Ingresses, and MSE Ingresses](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-among-nginx-ingresses-alb-ingresses-and-mse-ingresses-1#task-2273852).
    
    **ALB Ingress**
    
    **Name**
    
    The custom name of the Ingress.
    
    alb\_ingress
    
    **Ingress Class**
    
    Specify the class of the Ingress that is associated with the AlbConfig.
    
    alb
    
    **Rules**
    
    Click **\+ Add Rule** to add an Ingress rule.
    
    -   **Domain Name**: Specify a custom domain name.
        
    -   **Mappings**: Configure the following parameters:
        
        -   **Path**: Specify the URL path of the backend Service.
            
        -   **Rule**:
            
            -   **Prefix (Prefix-based Match)**: matches the prefix of the requested URL path.
                
            -   **Exact (Exact Match)**: exactly matches the requested URL path.
                
            -   **ImplementationSpecific (Default Value)**: depends on the logic implemented by the ALB Ingress controller.
                
            
            For more information, see [Forward requests based on URL paths](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/advanced-alb-ingress-configurations#title-b0x-mn4-smu).
            
        -   **Service**: Select the backend Service.
            
        -   **Port**: Specify the Service port that you want to expose.
            
    -   You can configure multiple paths for a domain name. Click **\+ Add** to add a path.
        
    
    -   **Domain Name**: \*.example.com
        
    -   **Mappings**:
        
        -   **Path**: /tes
            
        -   **Rule**: ImplementationSpecific
            
        -   **Service**: tea-svc
            
        -   **Port**: 80
            
    
    **Custom Forwarding Rules**
    
    Enable custom forwarding rules to manage inbound traffic with fine-grained control.
    
    **Note**
    
    A forwarding rule can have a maximum of 10 conditions.
    
    -   From the **Add Condition** drop-down list, select one of the following:
        
        -   **Host**:
            
        -   Matches the request domain name. If you specify multiple domain names, they have an OR relationship. After setting this, the `alb.ingress.kubernetes.io/conditions.host-example` annotation is added.
            
        -   **Path**:
            
            Matches the request path. If you specify multiple paths, they have an OR relationship. After setting this, the `alb.ingress.kubernetes.io/conditions.path-example` annotation is added.
            
            **Important**
            
            After you set a path forwarding condition, the console automatically adds a forwarding rule with the path `/created-by-<ALB-ID>` to the Ingress.
            
        -   **HTTP Header**:
            
            Matches the request header information in a key-value pair format. For example, **Key**: `headername` and **Value**: `headervalue1`. If you specify multiple header values, they have an OR relationship. After setting this, the `alb.ingress.kubernetes.io/conditions.http-header-example` annotation is added.
            
        
    -   From the **Action** drop-down list, select the following:
        
        -   **Forward To**
            
            Forwards to multiple backend server groups. In **Service Name**, select the target service. In **Port**, select the target port number. Then, configure a custom weight value.
            
            **Note**
            
            -   ClusterIP services are not supported for clusters with the Flannel network plug-in.
                
            -   When you select **Forward To**, you do not need to configure the [Path Mapping](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-and-use-alb-ingress-to-expose-services-to-the-public#uicontrol-bw1-af3-xct) in the rule.
                
            
        
    
    -   **Condition**: Select **Domain Name**, **Path**, and **HTTP Header**.
        
        -   **Host**: example.com.
            
    -   **Action**: Select **Forward To**.
        
        -   **Service Name**: tea-svc
            
        -   **Port**: 80
            
        -   **Weight**: 100
            
    
    Keep the default values for other configurations.
    
4.  After the configuration is complete, click **OK**.
