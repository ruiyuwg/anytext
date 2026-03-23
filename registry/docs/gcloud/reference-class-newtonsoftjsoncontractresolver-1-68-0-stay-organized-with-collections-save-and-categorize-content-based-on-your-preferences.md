-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class NewtonsoftJsonContractResolver (1.68.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.68.0keyboard\_arrow\_down

-   [1.73.0 (latest)](/dotnet/docs/reference/Google.Apis/latest/Google.Apis.Json.NewtonsoftJsonContractResolver)
-   [1.69.0](/dotnet/docs/reference/Google.Apis/1.69.0/Google.Apis.Json.NewtonsoftJsonContractResolver)
-   [1.68.0](/dotnet/docs/reference/Google.Apis/1.68.0/Google.Apis.Json.NewtonsoftJsonContractResolver)
-   [1.60.0](/dotnet/docs/reference/Google.Apis/1.60.0/Google.Apis.Json.NewtonsoftJsonContractResolver)
-   [1.59.0](/dotnet/docs/reference/Google.Apis/1.59.0/Google.Apis.Json.NewtonsoftJsonContractResolver)
-   [1.55.0](/dotnet/docs/reference/Google.Apis/1.55.0/Google.Apis.Json.NewtonsoftJsonContractResolver)
-   [1.50.0](/dotnet/docs/reference/Google.Apis/1.50.0/Google.Apis.Json.NewtonsoftJsonContractResolver)

```
public class NewtonsoftJsonContractResolver : DefaultContractResolver, IContractResolver
```

A JSON contract resolver to apply [RFC3339DateTimeConverter](/dotnet/docs/reference/Google.Apis/1.68.0/Google.Apis.Json.RFC3339DateTimeConverter) and [ExplicitNullConverter](/dotnet/docs/reference/Google.Apis/1.68.0/Google.Apis.Json.NewtonsoftJsonContractResolver#Google_Apis_Json_NewtonsoftJsonContractResolver_ExplicitNullConverter) as necessary.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Newtonsoft.Json.Serialization.DefaultContractResolver \> NewtonsoftJsonContractResolver

## Implements

Newtonsoft.Json.Serialization.IContractResolver

## Inherited Members

[DefaultContractResolver.ResolveContract(Type)](https://learn.microsoft.com/dotnet/api/system.type)

[DefaultContractResolver.GetSerializableMembers(Type)](https://learn.microsoft.com/dotnet/api/system.type)

[DefaultContractResolver.CreateObjectContract(Type)](https://learn.microsoft.com/dotnet/api/system.type)

[DefaultContractResolver.CreateConstructorParameters(ConstructorInfo, JsonPropertyCollection)](https://learn.microsoft.com/dotnet/api/system.reflection.constructorinfo)

[DefaultContractResolver.CreatePropertyFromConstructorParameter(JsonProperty, ParameterInfo)](https://learn.microsoft.com/dotnet/api/system.reflection.parameterinfo)

[DefaultContractResolver.ResolveContractConverter(Type)](https://learn.microsoft.com/dotnet/api/system.type)

[DefaultContractResolver.CreateDictionaryContract(Type)](https://learn.microsoft.com/dotnet/api/system.type)

[DefaultContractResolver.CreateArrayContract(Type)](https://learn.microsoft.com/dotnet/api/system.type)

[DefaultContractResolver.CreatePrimitiveContract(Type)](https://learn.microsoft.com/dotnet/api/system.type)

[DefaultContractResolver.CreateLinqContract(Type)](https://learn.microsoft.com/dotnet/api/system.type)

[DefaultContractResolver.CreateISerializableContract(Type)](https://learn.microsoft.com/dotnet/api/system.type)

[DefaultContractResolver.CreateDynamicContract(Type)](https://learn.microsoft.com/dotnet/api/system.type)

[DefaultContractResolver.CreateStringContract(Type)](https://learn.microsoft.com/dotnet/api/system.type)

[DefaultContractResolver.CreateProperties(Type, MemberSerialization)](https://learn.microsoft.com/dotnet/api/system.type)

[DefaultContractResolver.CreateMemberValueProvider(MemberInfo)](https://learn.microsoft.com/dotnet/api/system.reflection.memberinfo)

[DefaultContractResolver.CreateProperty(MemberInfo, MemberSerialization)](https://learn.microsoft.com/dotnet/api/system.reflection.memberinfo)

[DefaultContractResolver.ResolvePropertyName(string)](https://learn.microsoft.com/dotnet/api/system.string)

[DefaultContractResolver.ResolveExtensionDataName(string)](https://learn.microsoft.com/dotnet/api/system.string)

[DefaultContractResolver.ResolveDictionaryKey(string)](https://learn.microsoft.com/dotnet/api/system.string)

[DefaultContractResolver.GetResolvedPropertyName(string)](https://learn.microsoft.com/dotnet/api/system.string)

Newtonsoft.Json.Serialization.DefaultContractResolver.DynamicCodeGeneration

Newtonsoft.Json.Serialization.DefaultContractResolver.DefaultMembersSearchFlags

Newtonsoft.Json.Serialization.DefaultContractResolver.SerializeCompilerGeneratedMembers

Newtonsoft.Json.Serialization.DefaultContractResolver.IgnoreSerializableInterface

Newtonsoft.Json.Serialization.DefaultContractResolver.IgnoreSerializableAttribute

Newtonsoft.Json.Serialization.DefaultContractResolver.IgnoreIsSpecifiedMembers

Newtonsoft.Json.Serialization.DefaultContractResolver.IgnoreShouldSerializeMembers

Newtonsoft.Json.Serialization.DefaultContractResolver.NamingStrategy

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals\(system-object\))

[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals\(system-object-system-object\))

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Apis.Json](/dotnet/docs/reference/Google.Apis/1.68.0/Google.Apis.Json)

## Assembly

Google.Apis.Core.dll

## Remarks

Using a contract resolver is recommended in the Json.NET performance tips: [https://www.newtonsoft.com/json/help/html/Performance.htm#JsonConverters](https://www.newtonsoft.com/json/help/html/Performance.htm#JsonConverters)

## Methods

### CreateContract(Type)

```
protected override JsonContract CreateContract(Type objectType)
```

Determines which contract type is created for the given type.

**Parameter**

**Name**

**Description**

`objectType`

`[Type](https://learn.microsoft.com/dotnet/api/system.type)`  

Type of the object.

**Returns**

**Type**

**Description**

`Newtonsoft.Json.Serialization.JsonContract`

A Newtonsoft.Json.Serialization.JsonContract for the given type.

**Overrides**

[DefaultContractResolver.CreateContract(Type)](https://learn.microsoft.com/dotnet/api/system.type)

## Extension Method

[Utilities.ThrowIfNull<T>(T, string)](/dotnet/docs/reference/Google.Apis/1.68.0/Google.Apis.Util.Utilities#Google_Apis_Util_Utilities_ThrowIfNull__1___0_System_String_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
