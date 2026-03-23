-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Talent Solution v4 API - Class CompanyService.CompanyServiceBase (2.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.1.0keyboard\_arrow\_down

-   [2.8.0 (latest)](/dotnet/docs/reference/Google.Cloud.Talent.V4/latest/Google.Cloud.Talent.V4.CompanyService.CompanyServiceBase)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.7.0/Google.Cloud.Talent.V4.CompanyService.CompanyServiceBase)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.6.0/Google.Cloud.Talent.V4.CompanyService.CompanyServiceBase)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.5.0/Google.Cloud.Talent.V4.CompanyService.CompanyServiceBase)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.4.0/Google.Cloud.Talent.V4.CompanyService.CompanyServiceBase)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.CompanyService.CompanyServiceBase)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.2.0/Google.Cloud.Talent.V4.CompanyService.CompanyServiceBase)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.CompanyService.CompanyServiceBase)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.0.0/Google.Cloud.Talent.V4.CompanyService.CompanyServiceBase)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.4.0/Google.Cloud.Talent.V4.CompanyService.CompanyServiceBase)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.3.0/Google.Cloud.Talent.V4.CompanyService.CompanyServiceBase)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.2.0/Google.Cloud.Talent.V4.CompanyService.CompanyServiceBase)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.1.0/Google.Cloud.Talent.V4.CompanyService.CompanyServiceBase)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.0.0/Google.Cloud.Talent.V4.CompanyService.CompanyServiceBase)

```
[BindServiceMethod(typeof(CompanyService), "BindService")]
public abstract class CompanyServiceBase
```

Reference documentation and code samples for the Google Cloud Talent Solution v4 API class CompanyService.CompanyServiceBase.

Base class for server-side implementations of CompanyService

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> CompanyService.CompanyServiceBase

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Talent.V4](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4)

## Assembly

Google.Cloud.Talent.V4.dll

## Methods

### CreateCompany(CreateCompanyRequest, ServerCallContext)

```
public virtual Task<Company> CreateCompany(CreateCompanyRequest request, ServerCallContext context)
```

Creates a new company entity.

**Parameters**

**Name**

**Description**

`request`

`[CreateCompanyRequest](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.CreateCompanyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Company](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.Company)>`

The response to send back to the client (wrapped by a task).

### DeleteCompany(DeleteCompanyRequest, ServerCallContext)

```
public virtual Task<Empty> DeleteCompany(DeleteCompanyRequest request, ServerCallContext context)
```

Deletes specified company. Prerequisite: The company has no jobs associated with it.

**Parameters**

**Name**

**Description**

`request`

`[DeleteCompanyRequest](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.DeleteCompanyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Empty](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Empty.html)>`

The response to send back to the client (wrapped by a task).

### GetCompany(GetCompanyRequest, ServerCallContext)

```
public virtual Task<Company> GetCompany(GetCompanyRequest request, ServerCallContext context)
```

Retrieves specified company.

**Parameters**

**Name**

**Description**

`request`

`[GetCompanyRequest](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.GetCompanyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Company](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.Company)>`

The response to send back to the client (wrapped by a task).

### ListCompanies(ListCompaniesRequest, ServerCallContext)

```
public virtual Task<ListCompaniesResponse> ListCompanies(ListCompaniesRequest request, ServerCallContext context)
```

Lists all companies associated with the project.

**Parameters**

**Name**

**Description**

`request`

`[ListCompaniesRequest](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.ListCompaniesRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ListCompaniesResponse](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.ListCompaniesResponse)>`

The response to send back to the client (wrapped by a task).

### UpdateCompany(UpdateCompanyRequest, ServerCallContext)

```
public virtual Task<Company> UpdateCompany(UpdateCompanyRequest request, ServerCallContext context)
```

Updates specified company.

**Parameters**

**Name**

**Description**

`request`

`[UpdateCompanyRequest](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.UpdateCompanyRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Company](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.Company)>`

The response to send back to the client (wrapped by a task).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
