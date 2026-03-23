-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# NetApp V1 API - Class Google::Protobuf::Any (v2.0.2) Stay organized with collections Save and categorize content based on your preferences.

Version 2.0.2keyboard\_arrow\_down

-   [2.8.0 (latest)](/ruby/docs/reference/google-cloud-netapp-v1/latest/Google-Protobuf-Any)
-   [2.7.0](/ruby/docs/reference/google-cloud-netapp-v1/2.7.0/Google-Protobuf-Any)
-   [2.6.1](/ruby/docs/reference/google-cloud-netapp-v1/2.6.1/Google-Protobuf-Any)
-   [2.5.0](/ruby/docs/reference/google-cloud-netapp-v1/2.5.0/Google-Protobuf-Any)
-   [2.4.0](/ruby/docs/reference/google-cloud-netapp-v1/2.4.0/Google-Protobuf-Any)
-   [2.3.0](/ruby/docs/reference/google-cloud-netapp-v1/2.3.0/Google-Protobuf-Any)
-   [2.2.0](/ruby/docs/reference/google-cloud-netapp-v1/2.2.0/Google-Protobuf-Any)
-   [2.1.0](/ruby/docs/reference/google-cloud-netapp-v1/2.1.0/Google-Protobuf-Any)
-   [2.0.2](/ruby/docs/reference/google-cloud-netapp-v1/2.0.2/Google-Protobuf-Any)
-   [1.6.0](/ruby/docs/reference/google-cloud-netapp-v1/1.6.0/Google-Protobuf-Any)
-   [1.5.0](/ruby/docs/reference/google-cloud-netapp-v1/1.5.0/Google-Protobuf-Any)
-   [1.4.0](/ruby/docs/reference/google-cloud-netapp-v1/1.4.0/Google-Protobuf-Any)
-   [1.3.0](/ruby/docs/reference/google-cloud-netapp-v1/1.3.0/Google-Protobuf-Any)
-   [1.2.0](/ruby/docs/reference/google-cloud-netapp-v1/1.2.0/Google-Protobuf-Any)
-   [1.1.1](/ruby/docs/reference/google-cloud-netapp-v1/1.1.1/Google-Protobuf-Any)
-   [1.0.0](/ruby/docs/reference/google-cloud-netapp-v1/1.0.0/Google-Protobuf-Any)
-   [0.6.0](/ruby/docs/reference/google-cloud-netapp-v1/0.6.0/Google-Protobuf-Any)
-   [0.5.2](/ruby/docs/reference/google-cloud-netapp-v1/0.5.2/Google-Protobuf-Any)
-   [0.4.2](/ruby/docs/reference/google-cloud-netapp-v1/0.4.2/Google-Protobuf-Any)
-   [0.3.0](/ruby/docs/reference/google-cloud-netapp-v1/0.3.0/Google-Protobuf-Any)
-   [0.2.0](/ruby/docs/reference/google-cloud-netapp-v1/0.2.0/Google-Protobuf-Any)
-   [0.1.0](/ruby/docs/reference/google-cloud-netapp-v1/0.1.0/Google-Protobuf-Any)

Reference documentation and code samples for the NetApp V1 API class Google::Protobuf::Any.

`Any` contains an arbitrary serialized protocol buffer message along with a URL that describes the type of the serialized message.

Protobuf library provides support to pack/unpack Any values in the form of utility functions or additional generated methods of the Any type.

Example 1: Pack and unpack a message in C++.

```
Foo foo = ...;
Any any;
any.PackFrom(foo);
...
if (any.UnpackTo(&foo)) {
  ...
}
```

Example 2: Pack and unpack a message in Java.

```
Foo foo = ...;
Any any = Any.pack(foo);
...
if (any.is(Foo.class)) {
  foo = any.unpack(Foo.class);
}
// or ...
if (any.isSameTypeAs(Foo.getDefaultInstance())) {
  foo = any.unpack(Foo.getDefaultInstance());
}
```

Example 3: Pack and unpack a message in Python.

```
foo = Foo(...)
any = Any()
any.Pack(foo)
...
if any.Is(Foo.DESCRIPTOR):
  any.Unpack(foo)
  ...
```

Example 4: Pack and unpack a message in Go

 ```
 foo := &pb.Foo{...}
 any, err := anypb.New(foo)
 if err != nil {
   ...
 }
 ...
 foo := &pb.Foo{}
 if err := any.UnmarshalTo(foo); err != nil {
   ...
 }
```

The pack methods provided by protobuf library will by default use 'type.googleapis.com/full.type.name' as the type URL and the unpack methods only use the fully qualified type name after the last '/' in the type URL, for example "foo.bar.com/x/y.z" will yield type name "y.z".

## JSON

The JSON representation of an `Any` value uses the regular representation of the deserialized, embedded message, with an additional field `@type` which contains the type URL. Example:

```
package google.profile;
message Person {
  string first_name = 1;
  string last_name = 2;
}

{
  "@type": "type.googleapis.com/google.profile.Person",
  "firstName": <string>,
  "lastName": <string>
}
```

If the embedded message type is well-known and has a custom JSON representation, that representation will be embedded adding a field `value` which holds the custom JSON in addition to the `@type` field. Example (for message \[google.protobuf.Duration\]\[\]):

```
{
  "@type": "type.googleapis.com/google.protobuf.Duration",
  "value": "1.212s"
}
```

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #type\_url

```
def type_url() -> ::String
```

**Returns**

-   (::String) — A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one "/" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading "." is not accepted).
    
    In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows:
    
    -   If no scheme is provided, `https` is assumed.
    -   An HTTP GET on the URL must yield a \[google.protobuf.Type\]\[\] value in binary format, or produce an error.
    -   Applications are allowed to cache lookup results based on the URL, or have them precompiled into a binary to avoid any lookup. Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.)
    
    Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. As of May 2023, there are no widely used type server implementations and no plans to implement one.
    
    Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics.
    

### #type\_url=

```
def type_url=(value) -> ::String
```

**Parameter**

-   **value** (::String) — A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one "/" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading "." is not accepted).
    
    In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows:
    
    -   If no scheme is provided, `https` is assumed.
    -   An HTTP GET on the URL must yield a \[google.protobuf.Type\]\[\] value in binary format, or produce an error.
    -   Applications are allowed to cache lookup results based on the URL, or have them precompiled into a binary to avoid any lookup. Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.)
    
    Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. As of May 2023, there are no widely used type server implementations and no plans to implement one.
    
    Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics.
    

**Returns**

-   (::String) — A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one "/" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading "." is not accepted).
    
    In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows:
    
    -   If no scheme is provided, `https` is assumed.
    -   An HTTP GET on the URL must yield a \[google.protobuf.Type\]\[\] value in binary format, or produce an error.
    -   Applications are allowed to cache lookup results based on the URL, or have them precompiled into a binary to avoid any lookup. Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.)
    
    Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. As of May 2023, there are no widely used type server implementations and no plans to implement one.
    
    Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics.
    

### #value

```
def value() -> ::String
```

**Returns**

-   (::String) — Must be a valid serialized protocol buffer of the above specified type.

### #value=

```
def value=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Must be a valid serialized protocol buffer of the above specified type.

**Returns**

-   (::String) — Must be a valid serialized protocol buffer of the above specified type.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
