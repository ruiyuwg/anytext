This topic describes the remote procedure call (RPC) and resource-oriented architecture (ROA) styles of API operations. Before you construct requests to call Alibaba Cloud API operations, you must check the API style of the service that you want to access. The API style determines the request methods that you can use and how to construct the request headers, query string, and request body.

The API styles of Alibaba Cloud services are RPC and ROA.

## **RPC style**

RPC is a protocol that allows one program to call functions or methods in another program as if they were local.

During API calls in the RPC style, a client and a server communicate with each other based on function or method invocations rather than resource manipulations. When the client sends a request to the server, the client passes the parameters of a function or method, not identifiers of resources. After the server receives the request, the server executes the specified function or method and returns the result.

Methods supported by RPC APIs include GET and POST.

Alibaba Cloud services that provide APIs in the RPC style include Elastic Compute Service (ECS), ApsaraDB RDS, and Content Delivery Network (CDN).

Sample request:

`http://ecs.aliyuncs.com/?SignatureVersion=1.0&Action=DescribeDedicatedHosts&Format=XML&SignatureNonce=3ee8c1b8-xxxx-xxxx-xxxx-xxxxxxxxx&Version=2014-05-26&AccessKeyId=testid&Signature=OLeaidS1JvxuMvnyHOwuJ%2BuX5qY%3D&SignatureMethod=HMAC-SHA1&Timestamp=2016-02-23T12%3A46%3A24Z&RegionId=cn-hangzhou&Status=Available`

## **ROA style**

Representational State Transfer (REST) is an architectural style that is used to design web services. RESTful APIs allow a client to interact with a server by sending HTTP requests and use HTTP methods such as GET, POST, PUT, and DELETE to perform create, read, update, and delete (CRUD) operations.

ROA is a resource-oriented architectural style and an extension of the REST style.

Methods supported by ROA APIs include the following ones:

1.  GET: obtains resources from the server and does not modify resources on the server.
    
2.  POST: sends data to the server to create resources or perform operations on resources.
    
3.  PUT: updates resources on the server. When the client sends a PUT request, the client must provide complete resource data.
    
4.  DELETE: deletes resources from the server.
    

Alibaba Cloud services that provide APIs in the ROA style include Application Real-Time Monitoring Service (ARMS), Batch Compute, Container Service for Kubernetes (ACK), and Elasticsearch. Sample request:

```
POST /clusters/test_cluster_id/triggers HTTP/1.1
{
  "x-acs-action":"CreateTrigger",
  "x-acs-version":"2015-12-15",
  "Accept":"application/json",
  "Authorization": "acs testid:D9uFJAJgLL+dryjBfQK+YeqGtoY=",
  "x-acs-signature-nonce":"15215528852396",
  "Date":"Tue 9 Apr 2022 07:35:29 GMT",
  "x-acs-signature-method":"HMAC-SHA1",
  "Content-MD5":"Gtl/0jNYHf8t9Lq8Xlpaqw=="
  "Host":"cs.aliyuncs.com" 
}
{
 	"cluster_id":"test_cluster_id",
 	"project_id":"default/nginx-test",
 	"action":"redeploy",
 	"type":"deployment"
}
```

## **Check the styles of APIs**

View the API style of a cloud service in the **List of operations by function** topic of the **API Reference** for the service. The following figure show the the [List of operations by function](/help/en/ecs/developer-reference/api-ecs-2014-05-26-overview) topic of ECS.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5555384671/p1031951.png)
