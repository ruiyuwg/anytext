-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Grafeas v1 API - Class Signature (3.2.0) Stay organized with collections Save and categorize content based on your preferences.

3.15.0 (latest) 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.4.0 2.3.0 2.2.0

```
public sealed class Signature : IMessage<Signature>, IEquatable<Signature>, IDeepCloneable<Signature>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Grafeas v1 API class Signature.

Verifiers (e.g. Kritis implementations) MUST verify signatures with respect to the trust anchors defined in policy (e.g. a Kritis policy). Typically this means that the verifier has been configured with a map from `public_key_id` to public key material (and any required parameters, e.g. signing algorithm).

In particular, verification implementations MUST NOT treat the signature `public_key_id` as anything more than a key lookup hint. The `public_key_id` DOES NOT validate or authenticate a public key; it only provides a mechanism for quickly selecting a public key ALREADY CONFIGURED on the verifier through a trusted channel. Verification implementations MUST reject signatures in any of the following circumstances:

-   The `public_key_id` is not recognized by the verifier.
-   The public key that `public_key_id` refers to does not verify the signature with respect to the payload.

The `signature` contents SHOULD NOT be "attached" (where the payload is included with the serialized `signature` bytes). Verifiers MUST ignore any "attached" payload and only verify signatures with respect to explicitly provided payload (e.g. a `payload` field on the proto message that holds this Signature, or the canonical serialization of the proto message that holds this signature).

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Signature

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[Signature](/dotnet/docs/reference/Grafeas.V1/3.2.0/Grafeas.V1.Signature), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[Signature](/dotnet/docs/reference/Grafeas.V1/3.2.0/Grafeas.V1.Signature), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[Signature](/dotnet/docs/reference/Grafeas.V1/3.2.0/Grafeas.V1.Signature), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

Grafeas[V1](/dotnet/docs/reference/Grafeas.V1/3.2.0/Grafeas.V1)

## Assembly

Grafeas.V1.dll

## Constructors

### Signature()

```
public Signature()
```

### Signature(Signature)

```
public Signature(Signature other)
```

**Parameter**

**Name**

**Description**

`other`

`[Signature](/dotnet/docs/reference/Grafeas.V1/3.2.0/Grafeas.V1.Signature)`  

## Properties

### PublicKeyId

```
public string PublicKeyId { get; set; }
```

The identifier for the public key that verifies this signature.

-   The `public_key_id` is required.
-   The `public_key_id` SHOULD be an RFC3986 conformant URI.
-   When possible, the `public_key_id` SHOULD be an immutable reference, such as a cryptographic digest.

Examples of valid `public_key_id`s:

OpenPGP V4 public key fingerprint:

-   "openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA" See [https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr](https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr) for more details on this scheme.

RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization):

-   "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi\_vdjJGecm\_iXkbqVoScViaU"
-   "nih:///sha-256;703f68f42aba2c6de30f488a5ea122fef76324679c9bf89791ba95a1271589a5"

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Signature\_

```
public ByteString Signature_ { get; set; }
```

The content of the signature, an opaque bytestring. The payload that this signature verifies MUST be unambiguously provided with the Signature during verification. A wrapper message might provide the payload explicitly. Alternatively, a message might have a canonical serialization that can always be unambiguously computed to derive the payload.

**Property Value**

**Type**

**Description**

`[ByteString](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.ByteString.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
