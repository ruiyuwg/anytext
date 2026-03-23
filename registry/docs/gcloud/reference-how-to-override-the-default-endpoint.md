-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

# How to Override the Default Endpoint

In some cases, you may need to override the default endpoint used by the client library. Use the [EndpointOption](https://cloud.google.com/cpp/docs/reference/common/latest/structgoogle_1_1cloud_1_1EndpointOption.html) when initializing the client library to change this default.

For example, this will override the default endpoint for `video_livestream_v1::LivestreamServiceClient`:

  ```
  // This configuration is common with Private Google Access:
  //     https://cloud.google.com/vpc/docs/private-google-access
  auto options = google::cloud::Options{}.set<google::cloud::EndpointOption>(
      "private.googleapis.com");
  auto client = google::cloud::video_livestream_v1::LivestreamServiceClient(
      google::cloud::video_livestream_v1::MakeLivestreamServiceConnection(
          options));
```

Follow these links to find examples for other `*Client` classes:

-   [`video_livestream_v1::LivestreamServiceClient`](/cpp/docs/reference/video/2.20.0/video_livestream_v1_1_1LivestreamServiceClient-endpoint-snippet)
-   [`video_stitcher_v1::VideoStitcherServiceClient`](/cpp/docs/reference/video/2.20.0/video_stitcher_v1_1_1VideoStitcherServiceClient-endpoint-snippet)
-   [`video_transcoder_v1::TranscoderServiceClient`](/cpp/docs/reference/video/2.20.0/video_transcoder_v1_1_1TranscoderServiceClient-endpoint-snippet)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
