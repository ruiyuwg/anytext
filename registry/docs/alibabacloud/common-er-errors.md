**Fetch requests to the domain name of a routine not allowed**

### **Error message**

```
@Fetch.fetch: fetch authority is same with origin authority, which is forbidden
```

### **Cause**

You cannot initiate a fetch request to the domain name of a routine in the code of the routine. For example, if the domain name of a routine is `1.a.com`, you can initiate a fetch request to a domain name other than `1.a.com` in the code of the routine.

**Internal status codes not allowed**

### Error message

```
HttpBody.constructor: invalid status code
```

### Cause

`596`, `597`, `598`, and `599` are response status codes used in EdgeRoutine (ER). You cannot use these status codes in your code.

**Connection ended by ER**

### Error message

```
io error@: io error(Connection reset by peer)
```

### **Cause**

If the execution time of a routine exceeds the CPU time slice specification, the routine ends the connection. The virtual machine (VM) that runs the routine is stopped, and an error log is generated.

```
2023 0306 16:39:39.611431 115939 JSThread-3() E @tag(JSError) @loc(src/js-instance-inl.h:366)]: <uid: debugger::I::79de2290-d3a3-4f89-81db-6c3ba779b8b2;event: fetch;host: ;path: /;auth: market.wapa.taobao.com;unique_id: ;pip: 127.0.0.1:46174;fetch_uuid: b5f59f33-8f9b-487d-be32-56e3c368f3f0;start_ts: 1678091979098;req: http;milestone: *-*---;><N/A><>: category: Fatal Error; caller: JSInstance; sub-reason: cpu time; description: N/A; message: the virtual machine has been forcebly terminated for user id 'debugger::I::79de2290-d3a3-4f89-81db-6c3ba779b8b2' due to its violation of resource constraints of system!
```

### **Solution**

Increase the CPU time slice specification, such as, from 50 ms to 100 ms.

**No proxy address available**

### **Error message**

```
unhandled error(13485,13477)@: Error: io error@: no available fetch proxy address now\nstacktrace:\nN/A\n
```

### **Cause 1**

The URL in the `cache.put` method starts with `https`. The cache API does not support `https`. Therefore, you need to change `https` to `http`.

### **Cause 2**

You sent a fetch request to a domain name that is not added to Alibaba Cloud CDN, and you have added the `cdnProxy:true` configuration. In this case, you need to add the domain name to Alibaba Cloud CDN or Dynamic Content Delivery Network (DCDN), or delete the `cdnProxy:true` configuration.

**Connection ended**

### **Error message**

```
Error: unhandled error(13486,13505)@: Broken connection, unexpected EOF
```

### **Cause**

When a routine receives the data returned from the upstream service, the upstream service ends the connection.
