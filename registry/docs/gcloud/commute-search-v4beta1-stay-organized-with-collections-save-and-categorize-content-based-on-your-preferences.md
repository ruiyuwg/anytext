-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Industry solutions](https://docs.cloud.google.com/docs/industry)
-   [Cloud Talent Solution](https://docs.cloud.google.com/talent-solution/docs)
-   [Job Search](https://docs.cloud.google.com/talent-solution/job-search/docs)
-   [Job Search v4beta1 (deprecated)](https://docs.cloud.google.com/talent-solution/job-search/v4beta1/docs)

Send feedback

# Commute search (v4beta1) Stay organized with collections Save and categorize content based on your preferences.

Search requests can include a commute time filter that restricts returned jobs to those within a specified travel time from a start point. Results include the estimated commute time in seconds for matched jobs.

## Specific commute time search

To return jobs within a specific commute time, send a [`jobs.search`](/talent-solution/job-search/v4beta1/docs/reference/rest/v4beta1/projects.jobs/search) request and include a `CommuteFilter` object in the `JobQuery.commuteFilter` field. Cloud Talent Solution uses the job's [`address`](/talent-solution/job-search/v4beta1/docs/reference/rest/v4beta1/projects.jobs#Job.FIELDS.addresses) to calculate the commute time to that job. When a detailed address is not provided Cloud Talent Solution attempts to infer the actual street address of the job.

### Java

To learn how to install and use the client library for CTS, see [CTS client libraries](/talent-solution/job-search/docs/libraries). For more information, see the [CTS Java API reference documentation](/java/docs/reference/google-cloud-talent/latest/overview).

To authenticate to CTS, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```

import com.google.cloud.talent.v4beta1.CommuteFilter;
import com.google.cloud.talent.v4beta1.CommuteMethod;
import com.google.cloud.talent.v4beta1.Job;
import com.google.cloud.talent.v4beta1.JobQuery;
import com.google.cloud.talent.v4beta1.JobServiceClient;
import com.google.cloud.talent.v4beta1.RequestMetadata;
import com.google.cloud.talent.v4beta1.SearchJobsRequest;
import com.google.cloud.talent.v4beta1.SearchJobsResponse;
import com.google.cloud.talent.v4beta1.TenantName;
import com.google.protobuf.Duration;
import com.google.type.LatLng;
import java.io.IOException;

public class CommuteSearchJobs {

  public static void searchJobs() throws IOException {
    // TODO(developer): Replace these variables before running the sample.
    String projectId = "your-project-id";
    String tenantId = "your-tenant-id";
    searchJobs(projectId, tenantId);
  }

  // Search Jobs with histogram queries.
  public static void searchJobs(String projectId, String tenantId) throws IOException {
    // Initialize client that will be used to send requests. This client only needs to be created
    // once, and can be reused for multiple requests. After completing all of your requests, call
    // the "close" method on the client to safely clean up any remaining background resources.
    try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
      TenantName parent = TenantName.of(projectId, tenantId);
      String domain = "www.example.com";
      String sessionId = "Hashed session identifier";
      String userId = "Hashed user identifier";
      RequestMetadata requestMetadata =
          RequestMetadata.newBuilder()
              .setDomain(domain)
              .setSessionId(sessionId)
              .setUserId(userId)
              .build();

      CommuteMethod commuteMethod = CommuteMethod.DRIVING;
      long seconds = 3600L;
      Duration travelDuration = Duration.newBuilder().setSeconds(seconds).build();

      double latitude = 37.422408;
      double longitude = -122.084068;
      LatLng startCoordinates =
          LatLng.newBuilder().setLatitude(latitude).setLongitude(longitude).build();

      CommuteFilter commuteFilter =
          CommuteFilter.newBuilder()
              .setCommuteMethod(commuteMethod)
              .setTravelDuration(travelDuration)
              .setStartCoordinates(startCoordinates)
              .build();

      JobQuery jobQuery = JobQuery.newBuilder().setCommuteFilter(commuteFilter).build();
      SearchJobsRequest request =
          SearchJobsRequest.newBuilder()
              .setParent(parent.toString())
              .setRequestMetadata(requestMetadata)
              .setJobQuery(jobQuery)
              .build();

      for (SearchJobsResponse.MatchingJob responseItem :
          jobServiceClient.searchJobs(request).iterateAll()) {
        System.out.format("Job summary: %s%n", responseItem.getJobSummary());
        System.out.format("Job title snippet: %s%n", responseItem.getJobTitleSnippet());
        Job job = responseItem.getJob();
        System.out.format("Job name: %s%n", job.getName());
        System.out.format("Job title: %s%n", job.getTitle());
      }
    }
  }
}
```

### Java

For more on installing and creating a Cloud Talent Solution client, see [Cloud Talent Solution Client Libraries](/talent-solution/job-search/v4beta1/docs/libraries).

```

import com.google.cloud.talent.v4beta1.CommuteFilter;
import com.google.cloud.talent.v4beta1.CommuteMethod;
import com.google.cloud.talent.v4beta1.Job;
import com.google.cloud.talent.v4beta1.JobQuery;
import com.google.cloud.talent.v4beta1.JobServiceClient;
import com.google.cloud.talent.v4beta1.RequestMetadata;
import com.google.cloud.talent.v4beta1.SearchJobsRequest;
import com.google.cloud.talent.v4beta1.SearchJobsResponse;
import com.google.cloud.talent.v4beta1.TenantName;
import com.google.protobuf.Duration;
import com.google.type.LatLng;
import java.io.IOException;

public class CommuteSearchJobs {

  public static void searchJobs() throws IOException {
    // TODO(developer): Replace these variables before running the sample.
    String projectId = "your-project-id";
    String tenantId = "your-tenant-id";
    searchJobs(projectId, tenantId);
  }

  // Search Jobs with histogram queries.
  public static void searchJobs(String projectId, String tenantId) throws IOException {
    // Initialize client that will be used to send requests. This client only needs to be created
    // once, and can be reused for multiple requests. After completing all of your requests, call
    // the "close" method on the client to safely clean up any remaining background resources.
    try (JobServiceClient jobServiceClient = JobServiceClient.create()) {
      TenantName parent = TenantName.of(projectId, tenantId);
      String domain = "www.example.com";
      String sessionId = "Hashed session identifier";
      String userId = "Hashed user identifier";
      RequestMetadata requestMetadata =
          RequestMetadata.newBuilder()
              .setDomain(domain)
              .setSessionId(sessionId)
              .setUserId(userId)
              .build();

      CommuteMethod commuteMethod = CommuteMethod.DRIVING;
      long seconds = 3600L;
      Duration travelDuration = Duration.newBuilder().setSeconds(seconds).build();

      double latitude = 37.422408;
      double longitude = -122.084068;
      LatLng startCoordinates =
          LatLng.newBuilder().setLatitude(latitude).setLongitude(longitude).build();

      CommuteFilter commuteFilter =
          CommuteFilter.newBuilder()
              .setCommuteMethod(commuteMethod)
              .setTravelDuration(travelDuration)
              .setStartCoordinates(startCoordinates)
              .build();

      JobQuery jobQuery = JobQuery.newBuilder().setCommuteFilter(commuteFilter).build();
      SearchJobsRequest request =
          SearchJobsRequest.newBuilder()
              .setParent(parent.toString())
              .setRequestMetadata(requestMetadata)
              .setJobQuery(jobQuery)
              .build();

      for (SearchJobsResponse.MatchingJob responseItem :
          jobServiceClient.searchJobs(request).iterateAll()) {
        System.out.format("Job summary: %s%n", responseItem.getJobSummary());
        System.out.format("Job title snippet: %s%n", responseItem.getJobTitleSnippet());
        Job job = responseItem.getJob();
        System.out.format("Job name: %s%n", job.getName());
        System.out.format("Job title: %s%n", job.getTitle());
      }
    }
  }
}
```

### Python

For more on installing and creating a Cloud Talent Solution client, see [Cloud Talent Solution Client Libraries](/talent-solution/job-search/v4beta1/docs/libraries).

```

from google.cloud import talent


def search_jobs(project_id, tenant_id):
    """Search Jobs using commute distance"""

    client = talent.JobServiceClient()

    # project_id = 'Your Google Cloud Project ID'
    # tenant_id = 'Your Tenant ID (using tenancy is optional)'

    if isinstance(project_id, bytes):
        project_id = project_id.decode("utf-8")
    if isinstance(tenant_id, bytes):
        tenant_id = tenant_id.decode("utf-8")
    parent = f"projects/{project_id}/tenants/{tenant_id}"
    domain = "www.example.com"
    session_id = "Hashed session identifier"
    user_id = "Hashed user identifier"
    request_metadata = talent.RequestMetadata(
        domain=domain, session_id=session_id, user_id=user_id
    )
    commute_method = talent.CommuteMethod.TRANSIT
    seconds = 1800
    travel_duration = {"seconds": seconds}
    latitude = 37.422408
    longitude = -122.084068
    start_coordinates = {"latitude": latitude, "longitude": longitude}
    commute_filter = talent.CommuteFilter(
        commute_method=commute_method,
        travel_duration=travel_duration,
        start_coordinates=start_coordinates,
    )
    job_query = talent.JobQuery(commute_filter=commute_filter)

    # Iterate over all results
    results = []
    request = talent.SearchJobsRequest(
        parent=parent,
        request_metadata=request_metadata,
        job_query=job_query,
    )
    for response_item in client.search_jobs(request=request).matching_jobs:
        print(f"Job summary: {response_item.job_summary}")
        print(f"Job title snippet: {response_item.job_title_snippet}")
        job = response_item.job
        results.append(job.name)
        print(f"Job name: {job.name}")
        print(f"Job title: {job.title}")
    return results

```

## Required fields

-   `commuteMethod`: The method of transportation used to calculate the commute time. Options are `DRIVING`, `TRANSIT`, `WALKING` and `CYCLING` transit modes. **Walking and cycling routes may not reflect real-world conditions such as construction or include clear walking or cycling paths. These responses include `warnings` in the returned result which you must display to your users.**
    
-   `travelDuration`: The maximum travel time in seconds. The maximum allowed value is `3600s` (one hour). The format is `123s`.
    
-   `startCoordinates`: The latitude and longitude of the location from which to calculate the commute time. This field accepts a [`LatLng`](/talent-solution/job-search/v4beta1/docs/reference/rest/v4beta1/Location#LatLng) object.
    
-   Either `roadTraffic` or `departureTime`: Commute search results are based on historical and aggregated data rather than live traffic conditions. Users receive the same commute search results no matter what time of day they send a query.
    
    -   `roadTraffic`: Specifies the traffic density to use when calculating commute time. The `BUSY_HOUR`/`TRAFFIC_FREE` options are the calculated average traffic conditions at morning rush hour and midnight, respectively. This field must not be present if `departureTime` is specified.
        
    -   `departureTime`: The departure hour to use to calculate traffic impact. Accepts an integer between 0 and 23, representing the hour in the timezone of the `startLocation`. Traffic conditions are calculated from average historical traffic conditions at the specified time of day. This field must not be present if `roadTraffic` is specified.
        

## Optional fields

-   `allowImpreciseAddresses`: "Precise" addresses are defined as either street level addresses or GPS coordinates. If `allowImpreciseAddresses` is set to `true`, jobs with "imprecise" addresses (city, state, or country only) might also be returned. For city level and coarser level addresses, the API uses text matching to return results. If this field is set to `false` or is not specified, only jobs that include precise addresses are returned.

**Note:** If `allowImpreciseAddresses` is set to `true`, Job Search is not able to calculate accurate commute times to jobs with city level and coarser address information. Jobs with imprecise addresses return a `travelDuration` time of 0 regardless of their distance from the job seeker.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
