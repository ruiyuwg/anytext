-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Cloud Scheduler V1 API - Class Google::Cloud::Scheduler::V1::CloudScheduler::Rest::ServiceStub (v1.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.2.0keyboard\_arrow\_down

-   [1.4.0 (latest)](/ruby/docs/reference/google-cloud-scheduler-v1/latest/Google-Cloud-Scheduler-V1-CloudScheduler-Rest-ServiceStub)
-   [1.3.0](/ruby/docs/reference/google-cloud-scheduler-v1/1.3.0/Google-Cloud-Scheduler-V1-CloudScheduler-Rest-ServiceStub)
-   [1.2.1](/ruby/docs/reference/google-cloud-scheduler-v1/1.2.1/Google-Cloud-Scheduler-V1-CloudScheduler-Rest-ServiceStub)
-   [1.1.0](/ruby/docs/reference/google-cloud-scheduler-v1/1.1.0/Google-Cloud-Scheduler-V1-CloudScheduler-Rest-ServiceStub)
-   [1.0.1](/ruby/docs/reference/google-cloud-scheduler-v1/1.0.1/Google-Cloud-Scheduler-V1-CloudScheduler-Rest-ServiceStub)
-   [0.11.0](/ruby/docs/reference/google-cloud-scheduler-v1/0.11.0/Google-Cloud-Scheduler-V1-CloudScheduler-Rest-ServiceStub)
-   [0.10.2](/ruby/docs/reference/google-cloud-scheduler-v1/0.10.2/Google-Cloud-Scheduler-V1-CloudScheduler-Rest-ServiceStub)
-   [0.9.1](/ruby/docs/reference/google-cloud-scheduler-v1/0.9.1/Google-Cloud-Scheduler-V1-CloudScheduler-Rest-ServiceStub)
-   [0.8.1](/ruby/docs/reference/google-cloud-scheduler-v1/0.8.1/Google-Cloud-Scheduler-V1-CloudScheduler-Rest-ServiceStub)
-   [0.7.0](/ruby/docs/reference/google-cloud-scheduler-v1/0.7.0/Google-Cloud-Scheduler-V1-CloudScheduler-Rest-ServiceStub)
-   [0.6.0](/ruby/docs/reference/google-cloud-scheduler-v1/0.6.0/Google-Cloud-Scheduler-V1-CloudScheduler-Rest-ServiceStub)
-   [0.5.0](/ruby/docs/reference/google-cloud-scheduler-v1/0.5.0/Google-Cloud-Scheduler-V1-CloudScheduler-Rest-ServiceStub)
-   [0.4.5](/ruby/docs/reference/google-cloud-scheduler-v1/0.4.5/Google-Cloud-Scheduler-V1-CloudScheduler-Rest-ServiceStub)

Reference documentation and code samples for the Cloud Scheduler V1 API class Google::Cloud::Scheduler::V1::CloudScheduler::Rest::ServiceStub.

REST service stub for the CloudScheduler service. Service stub contains baseline method implementations including transcoding, making the REST call, and deserialing the response.

## Inherits

-   Object

## Methods

### #create\_job

```
def create_job(request_pb, options = nil) { |result, operation| ... } -> ::Google::Cloud::Scheduler::V1::Job
```

Baseline implementation for the create\_job REST call

**Parameters**

-   **request\_pb** ([::Google::Cloud::Scheduler::V1::CreateJobRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-CreateJobRequest)) — A request object representing the call parameters. Required.
-   **options** (::Gapic::CallOptions) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** ([::Google::Cloud::Scheduler::V1::Job](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-Job))
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   ([::Google::Cloud::Scheduler::V1::Job](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-Job)) — A result object deserialized from the server's reply

**Raises**

-   (::ArgumentError)

### #delete\_job

```
def delete_job(request_pb, options = nil) { |result, operation| ... } -> ::Google::Protobuf::Empty
```

Baseline implementation for the delete\_job REST call

**Parameters**

-   **request\_pb** ([::Google::Cloud::Scheduler::V1::DeleteJobRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-DeleteJobRequest)) — A request object representing the call parameters. Required.
-   **options** (::Gapic::CallOptions) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** ([::Google::Protobuf::Empty](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Protobuf-Empty))
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   ([::Google::Protobuf::Empty](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Protobuf-Empty)) — A result object deserialized from the server's reply

**Raises**

-   (::ArgumentError)

### #endpoint

```
def endpoint() -> String
```

The effective endpoint

**Returns**

-   (String)

### #get\_job

```
def get_job(request_pb, options = nil) { |result, operation| ... } -> ::Google::Cloud::Scheduler::V1::Job
```

Baseline implementation for the get\_job REST call

**Parameters**

-   **request\_pb** ([::Google::Cloud::Scheduler::V1::GetJobRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-GetJobRequest)) — A request object representing the call parameters. Required.
-   **options** (::Gapic::CallOptions) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** ([::Google::Cloud::Scheduler::V1::Job](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-Job))
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   ([::Google::Cloud::Scheduler::V1::Job](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-Job)) — A result object deserialized from the server's reply

**Raises**

-   (::ArgumentError)

### #list\_jobs

```
def list_jobs(request_pb, options = nil) { |result, operation| ... } -> ::Google::Cloud::Scheduler::V1::ListJobsResponse
```

Baseline implementation for the list\_jobs REST call

**Parameters**

-   **request\_pb** ([::Google::Cloud::Scheduler::V1::ListJobsRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-ListJobsRequest)) — A request object representing the call parameters. Required.
-   **options** (::Gapic::CallOptions) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** ([::Google::Cloud::Scheduler::V1::ListJobsResponse](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-ListJobsResponse))
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   ([::Google::Cloud::Scheduler::V1::ListJobsResponse](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-ListJobsResponse)) — A result object deserialized from the server's reply

**Raises**

-   (::ArgumentError)

### #logger

```
def logger(stub: false) -> Logger
```

The logger used for request/response debug logging.

**Returns**

-   (Logger)

### #pause\_job

```
def pause_job(request_pb, options = nil) { |result, operation| ... } -> ::Google::Cloud::Scheduler::V1::Job
```

Baseline implementation for the pause\_job REST call

**Parameters**

-   **request\_pb** ([::Google::Cloud::Scheduler::V1::PauseJobRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-PauseJobRequest)) — A request object representing the call parameters. Required.
-   **options** (::Gapic::CallOptions) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** ([::Google::Cloud::Scheduler::V1::Job](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-Job))
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   ([::Google::Cloud::Scheduler::V1::Job](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-Job)) — A result object deserialized from the server's reply

**Raises**

-   (::ArgumentError)

### #resume\_job

```
def resume_job(request_pb, options = nil) { |result, operation| ... } -> ::Google::Cloud::Scheduler::V1::Job
```

Baseline implementation for the resume\_job REST call

**Parameters**

-   **request\_pb** ([::Google::Cloud::Scheduler::V1::ResumeJobRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-ResumeJobRequest)) — A request object representing the call parameters. Required.
-   **options** (::Gapic::CallOptions) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** ([::Google::Cloud::Scheduler::V1::Job](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-Job))
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   ([::Google::Cloud::Scheduler::V1::Job](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-Job)) — A result object deserialized from the server's reply

**Raises**

-   (::ArgumentError)

### #run\_job

```
def run_job(request_pb, options = nil) { |result, operation| ... } -> ::Google::Cloud::Scheduler::V1::Job
```

Baseline implementation for the run\_job REST call

**Parameters**

-   **request\_pb** ([::Google::Cloud::Scheduler::V1::RunJobRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-RunJobRequest)) — A request object representing the call parameters. Required.
-   **options** (::Gapic::CallOptions) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** ([::Google::Cloud::Scheduler::V1::Job](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-Job))
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   ([::Google::Cloud::Scheduler::V1::Job](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-Job)) — A result object deserialized from the server's reply

**Raises**

-   (::ArgumentError)

### #universe\_domain

```
def universe_domain() -> String
```

The effective universe domain

**Returns**

-   (String)

### #update\_job

```
def update_job(request_pb, options = nil) { |result, operation| ... } -> ::Google::Cloud::Scheduler::V1::Job
```

Baseline implementation for the update\_job REST call

**Parameters**

-   **request\_pb** ([::Google::Cloud::Scheduler::V1::UpdateJobRequest](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-UpdateJobRequest)) — A request object representing the call parameters. Required.
-   **options** (::Gapic::CallOptions) — Overrides the default settings for this call, e.g, timeout, retries etc. Optional.

**Yields**

-   (result, operation) — Access the result along with the TransportOperation object

**Yield Parameters**

-   **result** ([::Google::Cloud::Scheduler::V1::Job](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-Job))
-   **operation** (::Gapic::Rest::TransportOperation)

**Returns**

-   ([::Google::Cloud::Scheduler::V1::Job](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-scheduler-v1/1.2.0/Google-Cloud-Scheduler-V1-Job)) — A result object deserialized from the server's reply

**Raises**

-   (::ArgumentError)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
