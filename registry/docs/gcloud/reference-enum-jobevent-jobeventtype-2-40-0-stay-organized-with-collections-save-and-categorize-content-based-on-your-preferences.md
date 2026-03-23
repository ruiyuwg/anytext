-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum JobEvent.JobEventType (2.40.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.6 2.2.9

```
public enum JobEvent.JobEventType extends Enum<JobEvent.JobEventType> implements ProtocolMessageEnum
```

An enumeration of an event attributed to the behavior of the end user, such as a job seeker.

Protobuf enum `google.cloud.talent.v4.JobEvent.JobEventType`

## Implements

[ProtocolMessageEnum](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolMessageEnum.html)

## Inherited Members

[Enum.<T>valueOf(Class<T>,String)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#valueOf-java.lang.Class-java.lang.String-)

[Enum.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#clone--)

[Enum.compareTo(E)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#compareTo-E-)

[Enum.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#equals-java.lang.Object-)

[Enum.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#finalize--)

[Enum.getDeclaringClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#getDeclaringClass--)

[Enum.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#hashCode--)

[Enum.name()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#name--)

[Enum.ordinal()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#ordinal--)

[Enum.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#toString--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Fields

**Name**

**Description**

`APPLICATION_COMPANY_SUBMIT`

This event should be used when a company submits an application on behalf of a job seeker. This event is intended for use by staffing agencies attempting to place candidates.

`APPLICATION_COMPANY_SUBMIT = 10;`

`APPLICATION_COMPANY_SUBMIT_VALUE`

This event should be used when a company submits an application on behalf of a job seeker. This event is intended for use by staffing agencies attempting to place candidates.

`APPLICATION_COMPANY_SUBMIT = 10;`

`APPLICATION_FINISH`

The job seeker or other entity interacting with the service submitted an application for a job.

`APPLICATION_FINISH = 5;`

`APPLICATION_FINISH_VALUE`

The job seeker or other entity interacting with the service submitted an application for a job.

`APPLICATION_FINISH = 5;`

`APPLICATION_QUICK_SUBMISSION`

The job seeker or other entity interacting with the service submitted an application for a job with a single click without entering information. If a job seeker performs this action, send only this event to the service. Do not also send JobEventType.APPLICATION\_START or JobEventType.APPLICATION\_FINISH events.

`APPLICATION_QUICK_SUBMISSION = 6;`

`APPLICATION_QUICK_SUBMISSION_VALUE`

The job seeker or other entity interacting with the service submitted an application for a job with a single click without entering information. If a job seeker performs this action, send only this event to the service. Do not also send JobEventType.APPLICATION\_START or JobEventType.APPLICATION\_FINISH events.

`APPLICATION_QUICK_SUBMISSION = 6;`

`APPLICATION_REDIRECT`

The job seeker or other entity interacting with the service performed an action to apply to a job and was redirected to a different website to complete the application.

`APPLICATION_REDIRECT = 7;`

`APPLICATION_REDIRECT_FROM_SEARCH`

The job seeker, or other entity interacting with the service, performs an action with a single click from the search results page to apply to a job (without viewing the details of the job posting), and is redirected to a different website to complete the application. If a candidate performs this action, send only this event to the service. Do not also send JobEventType.APPLICATION\_START, JobEventType.APPLICATION\_FINISH or JobEventType.VIEW events.

`APPLICATION_REDIRECT_FROM_SEARCH = 9;`

`APPLICATION_REDIRECT_FROM_SEARCH_VALUE`

The job seeker, or other entity interacting with the service, performs an action with a single click from the search results page to apply to a job (without viewing the details of the job posting), and is redirected to a different website to complete the application. If a candidate performs this action, send only this event to the service. Do not also send JobEventType.APPLICATION\_START, JobEventType.APPLICATION\_FINISH or JobEventType.VIEW events.

`APPLICATION_REDIRECT_FROM_SEARCH = 9;`

`APPLICATION_REDIRECT_VALUE`

The job seeker or other entity interacting with the service performed an action to apply to a job and was redirected to a different website to complete the application.

`APPLICATION_REDIRECT = 7;`

`APPLICATION_START`

The job seeker or other entity interacting with the service began the process or demonstrated the intention of applying for a job.

`APPLICATION_START = 4;`

`APPLICATION_START_FROM_SEARCH`

The job seeker or other entity interacting with the service began the process or demonstrated the intention of applying for a job from the search results page without viewing the details of the job posting. If sending this event, JobEventType.VIEW event shouldn't be sent.

`APPLICATION_START_FROM_SEARCH = 8;`

`APPLICATION_START_FROM_SEARCH_VALUE`

The job seeker or other entity interacting with the service began the process or demonstrated the intention of applying for a job from the search results page without viewing the details of the job posting. If sending this event, JobEventType.VIEW event shouldn't be sent.

`APPLICATION_START_FROM_SEARCH = 8;`

`APPLICATION_START_VALUE`

The job seeker or other entity interacting with the service began the process or demonstrated the intention of applying for a job.

`APPLICATION_START = 4;`

`BOOKMARK`

The job seeker or other entity interacting with the service demonstrated an interest in a job by bookmarking or saving it.

`BOOKMARK = 11;`

`BOOKMARK_VALUE`

The job seeker or other entity interacting with the service demonstrated an interest in a job by bookmarking or saving it.

`BOOKMARK = 11;`

`HIRED`

The job seeker or other entity interacting with the service was employed by the hiring entity (employer). Send this event only if the job seeker was hired through an application that was initiated by a search conducted through the Cloud Talent Solution service.

`HIRED = 13;`

`HIRED_VALUE`

The job seeker or other entity interacting with the service was employed by the hiring entity (employer). Send this event only if the job seeker was hired through an application that was initiated by a search conducted through the Cloud Talent Solution service.

`HIRED = 13;`

`IMPRESSION`

The job seeker or other entity interacting with the service has had a job rendered in their view, such as in a list of search results in a compressed or clipped format. This event is typically associated with the viewing of a jobs list on a single page by a job seeker.

`IMPRESSION = 1;`

`IMPRESSION_VALUE`

The job seeker or other entity interacting with the service has had a job rendered in their view, such as in a list of search results in a compressed or clipped format. This event is typically associated with the viewing of a jobs list on a single page by a job seeker.

`IMPRESSION = 1;`

`INTERVIEW_GRANTED`

The entity interacting with the service (for example, the job seeker), was granted an initial interview by the hiring entity (employer). This event should only be sent if the job seeker was granted an interview as part of an application that was initiated by a search conducted through / recommendation provided by the Cloud Talent Solution service.

`INTERVIEW_GRANTED = 15;`

`INTERVIEW_GRANTED_VALUE`

The entity interacting with the service (for example, the job seeker), was granted an initial interview by the hiring entity (employer). This event should only be sent if the job seeker was granted an interview as part of an application that was initiated by a search conducted through / recommendation provided by the Cloud Talent Solution service.

`INTERVIEW_GRANTED = 15;`

`JOB_EVENT_TYPE_UNSPECIFIED`

The event is unspecified by other provided values.

`JOB_EVENT_TYPE_UNSPECIFIED = 0;`

`JOB_EVENT_TYPE_UNSPECIFIED_VALUE`

The event is unspecified by other provided values.

`JOB_EVENT_TYPE_UNSPECIFIED = 0;`

`NOTIFICATION`

The job seeker or other entity interacting with the service was sent a notification, such as an email alert or device notification, containing one or more jobs listings generated by the service.

`NOTIFICATION = 12;`

`NOTIFICATION_VALUE`

The job seeker or other entity interacting with the service was sent a notification, such as an email alert or device notification, containing one or more jobs listings generated by the service.

`NOTIFICATION = 12;`

`SENT_CV`

A recruiter or staffing agency submitted an application on behalf of the candidate after interacting with the service to identify a suitable job posting.

`SENT_CV = 14;`

`SENT_CV_VALUE`

A recruiter or staffing agency submitted an application on behalf of the candidate after interacting with the service to identify a suitable job posting.

`SENT_CV = 14;`

`UNRECOGNIZED`

`VIEW`

The job seeker, or other entity interacting with the service, has viewed the details of a job, including the full description. This event doesn't apply to the viewing a snippet of a job appearing as a part of the job search results. Viewing a snippet is associated with an impression).

`VIEW = 2;`

`VIEW_REDIRECT`

The job seeker or other entity interacting with the service performed an action to view a job and was redirected to a different website for job.

`VIEW_REDIRECT = 3;`

`VIEW_REDIRECT_VALUE`

The job seeker or other entity interacting with the service performed an action to view a job and was redirected to a different website for job.

`VIEW_REDIRECT = 3;`

`VIEW_VALUE`

The job seeker, or other entity interacting with the service, has viewed the details of a job, including the full description. This event doesn't apply to the viewing a snippet of a job appearing as a part of the job search results. Viewing a snippet is associated with an impression).

`VIEW = 2;`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-talent/2.40.0/com.google.cloud.talent.v4.JobEvent.JobEventType#com_google_cloud_talent_v4_JobEvent_JobEventType_forNumber_int_) instead._

`valueOf(String name)`

`values()`

## Methods

**Name**

**Description**

`getDescriptorForType()`

`getNumber()`

`getValueDescriptor()`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
