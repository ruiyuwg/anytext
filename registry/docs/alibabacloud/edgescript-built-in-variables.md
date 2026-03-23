This topic describes EdgeScript built-in variables and the corresponding NGINX variables.

**Note**

-   The dollar sign ($) before a variable is used to specify that the variable is a built-in variable. You can remove the dollar sign based on your business requirements.
    
-   Do not assign values to built-in variables in the same way as parameters.
    
-   You can specify at most 200 variables in a script. To use more than 200 variables, [split the function](#8514eac4e9imn).
    

The following table describes the EdgeScript built-in variables.

**Built-in variable**

**Description**

**NGINX variable**

$arg\_{name}

The value of the `name` parameter in the `query string`. The `query string` represents request parameters in an HTTP request.

$arg\_

**Note**

If the `{name}` field contains a hyphen (-), `req_uri_arg` instead of `$arg_` is used to extract the header value. If the request is `http://example.com/1.jpg?example-demo=123`, the header value is extracted based on `req_uri_arg('example-demo')`.

$http\_{name}

The value of the name field in the request header.

$http\_

**Note**

Hyphens (-) in the `{name}` field must be replaced by underscores (\_). For example, `X-USER-ID` must be changed to `$http_x_user_id`.

$cookie\_{name}

The value of the name field in the request cookie header.

$cookie\_

**Note**

If the `{name}` field contains a hyphen (-), `req_cookie` instead of `$cookie_` is used to extract the header value. If the request is `cookie:example-demo=123`, the header value is extracted based on `req_cookie('example-demo'`.

$scheme

The protocol type.

$scheme

$server\_protocol

The protocol version.

$server\_protocol

$host

The original host.

$host

$uri

The original URI.

None

$args

`$args` represents all request parameters in an HTTP request, excluding question marks (`?`). In the request `http://example.aliyundoc.com/1k.file?k1=v1&k2=v2`:

-   `$arg_k1` returns the value of the k1 parameter: `v1`.
    
-   `$args` is used to return the entire query string: `k1=v1&k2=v2`. Question marks (`?`) are excluded.
    

$args

$request\_method

The request method.

$request\_method

$request\_uri

The content of `uri+'?'+args`.

$request\_uri

$remote\_addr

The IP address used by the client to connect to points of presence (POPs).

$remote\_addr

## **Splitting function**

When your rule contains more than 200 variables, split the original function into multiple user-defined functions. Ensure that each user-defined function contains no more than 200 variables.

The following shows an example:

```
#If variables exceed the limit, split them like this:
def judeg_arg() {
  #Parameter judgment related logic
  x
  x
}

def judeg_time() {
  #Time judgment related logic
  x
  x
}

def judeg_token() {
  #Encryption judgment related logic
  x
  x
}

judeg_arg()
judeg_time()
judeg_token()
```
