-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Cloud Scheduler V1beta1 API - Class Google::Cloud::Scheduler::V1beta1::ListJobsResponse (v0.13.0) Stay organized with collections Save and categorize content based on your preferences.

Version 0.13.0keyboard\_arrow\_down

-   [0.15.0 (latest)](/ruby/docs/reference/google-cloud-scheduler-v1beta1/latest/Google-Cloud-Scheduler-V1beta1-ListJobsResponse)
-   [0.14.0](/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.14.0/Google-Cloud-Scheduler-V1beta1-ListJobsResponse)
-   [0.13.1](/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.13.1/Google-Cloud-Scheduler-V1beta1-ListJobsResponse)
-   [0.12.0](/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.12.0/Google-Cloud-Scheduler-V1beta1-ListJobsResponse)
-   [0.11.1](/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.11.1/Google-Cloud-Scheduler-V1beta1-ListJobsResponse)
-   [0.10.2](/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.10.2/Google-Cloud-Scheduler-V1beta1-ListJobsResponse)
-   [0.9.1](/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.9.1/Google-Cloud-Scheduler-V1beta1-ListJobsResponse)
-   [0.8.1](/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.8.1/Google-Cloud-Scheduler-V1beta1-ListJobsResponse)
-   [0.7.0](/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.7.0/Google-Cloud-Scheduler-V1beta1-ListJobsResponse)
-   [0.6.0](/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.6.0/Google-Cloud-Scheduler-V1beta1-ListJobsResponse)
-   [0.5.0](/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.5.0/Google-Cloud-Scheduler-V1beta1-ListJobsResponse)
-   [0.4.5](/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.4.5/Google-Cloud-Scheduler-V1beta1-ListJobsResponse)

Reference documentation and code samples for the Cloud Scheduler V1beta1 API class Google::Cloud::Scheduler::V1beta1::ListJobsResponse.

Response message for listing jobs using [ListJobs](/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.13.0/Google-Cloud-Scheduler-V1beta1-CloudScheduler-Client#Google__Cloud__Scheduler__V1beta1__CloudScheduler__Client_list_jobs_instance_ "Google::Cloud::Scheduler::V1beta1::CloudScheduler::Client#list_jobs (method)").

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #jobs

```
def jobs() -> ::Array<::Google::Cloud::Scheduler::V1beta1::Job>
```

**Returns**

-   (::Array<[::Google::Cloud::Scheduler::V1beta1::Job](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.13.0/Google-Cloud-Scheduler-V1beta1-Job)\>) — The list of jobs.

### #jobs=

```
def jobs=(value) -> ::Array<::Google::Cloud::Scheduler::V1beta1::Job>
```

**Parameter**

-   **value** (::Array<[::Google::Cloud::Scheduler::V1beta1::Job](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.13.0/Google-Cloud-Scheduler-V1beta1-Job)\>) — The list of jobs.

**Returns**

-   (::Array<[::Google::Cloud::Scheduler::V1beta1::Job](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.13.0/Google-Cloud-Scheduler-V1beta1-Job)\>) — The list of jobs.

### #next\_page\_token

```
def next_page_token() -> ::String
```

**Returns**

-   (::String) — A token to retrieve next page of results. Pass this value in the [page\_token](/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.13.0/Google-Cloud-Scheduler-V1beta1-ListJobsRequest#Google__Cloud__Scheduler__V1beta1__ListJobsRequest_page_token_instance_ "Google::Cloud::Scheduler::V1beta1::ListJobsRequest#page_token (method)") field in the subsequent call to [ListJobs](/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.13.0/Google-Cloud-Scheduler-V1beta1-CloudScheduler-Client#Google__Cloud__Scheduler__V1beta1__CloudScheduler__Client_list_jobs_instance_ "Google::Cloud::Scheduler::V1beta1::CloudScheduler::Client#list_jobs (method)") to retrieve the next page of results. If this is empty it indicates that there are no more results through which to paginate.
    
    The page token is valid for only 2 hours.
    

### #next\_page\_token=

```
def next_page_token=(value) -> ::String
```

**Parameter**

-   **value** (::String) — A token to retrieve next page of results. Pass this value in the [page\_token](/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.13.0/Google-Cloud-Scheduler-V1beta1-ListJobsRequest#Google__Cloud__Scheduler__V1beta1__ListJobsRequest_page_token_instance_ "Google::Cloud::Scheduler::V1beta1::ListJobsRequest#page_token (method)") field in the subsequent call to [ListJobs](/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.13.0/Google-Cloud-Scheduler-V1beta1-CloudScheduler-Client#Google__Cloud__Scheduler__V1beta1__CloudScheduler__Client_list_jobs_instance_ "Google::Cloud::Scheduler::V1beta1::CloudScheduler::Client#list_jobs (method)") to retrieve the next page of results. If this is empty it indicates that there are no more results through which to paginate.
    
    The page token is valid for only 2 hours.
    

**Returns**

-   (::String) — A token to retrieve next page of results. Pass this value in the [page\_token](/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.13.0/Google-Cloud-Scheduler-V1beta1-ListJobsRequest#Google__Cloud__Scheduler__V1beta1__ListJobsRequest_page_token_instance_ "Google::Cloud::Scheduler::V1beta1::ListJobsRequest#page_token (method)") field in the subsequent call to [ListJobs](/ruby/docs/reference/google-cloud-scheduler-v1beta1/0.13.0/Google-Cloud-Scheduler-V1beta1-CloudScheduler-Client#Google__Cloud__Scheduler__V1beta1__CloudScheduler__Client_list_jobs_instance_ "Google::Cloud::Scheduler::V1beta1::CloudScheduler::Client#list_jobs (method)") to retrieve the next page of results. If this is empty it indicates that there are no more results through which to paginate.
    
    The page token is valid for only 2 hours.
    

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
