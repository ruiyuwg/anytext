When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Insights

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Subscription: Business

For: Administrators

Insights helps administrators visualize and understand how Docker is used within their organizations. With Insights, administrators can ensure their teams are fully equipped to utilize Docker to its fullest potential, leading to improved productivity and efficiency across the organization.

Key benefits include:

- Uniform working environment: Establish and maintain standardized configurations across teams.
- Best practices: Promote and enforce usage guidelines to ensure optimal performance.
- Increased visibility: Monitor and drive adoption of organizational configurations and policies.
- Optimized license use: Ensure that developers have access to advanced features provided by a Docker subscription.

## [Prerequisites](#prerequisites)

To use Insights, you must meet the following requirements:

- [Docker Business subscription](https://www.docker.com/pricing?ref=Docs\&refAction=DocsAdminInsights)
- Administrators must [enforce sign-in](/security/for-admins/enforce-sign-in/) for users
- Your Account Executive must turn on Insights for your organization

## [View Insights for organization users](#view-insights-for-organization-users)

To access Insights, contact your Account Executive to have the feature turned on. Once the feature is turned on, access Insights using the following steps:

1. Sign in to [Docker Home](https://app.docker.com/) and choose your organization.
2. Select **Insights**. then select the period of time for the data.

> Note
>
> Insights data is not real-time and is updated daily. At the top-right of the Insights page, view the **Last updated** date to understand when the data was last updated.

Insights data is displayed in the following charts:

- [Docker Desktop users](#docker-desktop-users)
- [Builds](#builds)
- [Containers](#containers)
- [Docker Desktop usage](#docker-desktop-usage)
- [Docker Hub images](#docker-hub-images)
- [Extensions](#extensions)

### [Docker Desktop users](#docker-desktop-users)

Track active Docker Desktop users in your domain, differentiated by license status. This chart helps you understand the engagement levels within your organization, providing insights into how many users are actively using Docker Desktop. Note that users who opt out of analytics aren't included in the active counts.

The chart contains the following data:

Data

Description

Active user

The number of users who have actively used Docker Desktop and either signed in with a Docker account that has a license in your organization or signed in to a Docker account with an email address from a domain associated with your organization.

Users who don’t sign in to an account associated with your organization are not represented in the data. To ensure users sign in with an account associated with your organization, you can [enforce sign-in](/security/for-admins/enforce-sign-in/).

Total organization members

The number of users who have used Docker Desktop, regardless of their Insights activity.

Users opted out of analytics

The number of users who are members of your organization that have opted out of sending analytics.

When users opt out of sending analytics, you won't see any of their data in Insights. To ensure that the data includes all users, you can use [Settings Management](/desktop/hardened-desktop/settings-management/) to set `analyticsEnabled` for all your users.

Active users (graph)

The view over time for total active users.

### [Builds](#builds)

Monitor development efficiency and the time your team invests in builds with this chart. It provides a clear view of the build activity, helping you identify patterns, optimize build times, and enhance overall development productivity.

The chart contains the following data:

Data

Description

Average build per user

The average number of builds per active user. A build includes any time a user runs one of the following commands:

- `docker build`
- `docker buildx b`
- `docker buildx bake`
- `docker buildx build`
- `docker buildx f`
- `docker builder b`
- `docker builder bake`
- `docker builder build`
- `docker builder f`
- `docker compose build`
- `docker compose up --build`
- `docker image build`

Average build time

The average build time per build.

Build success rate

The percentage of builds that were successful out of the total number of builds. A successful build includes any build that exits normally.

Total builds (graph)

The total number of builds separated into successful builds and failed builds. A successful build includes any build that exits normally. A failed build includes any build that exits abnormally.

### [Containers](#containers)

View the total and average number of containers run by users with this chart. It lets you gauge container usage across your organization, helping you understand usage trends and manage resources effectively.

The chart contains the following data:

Data

Description

Total containers run

The total number of containers run by active users. Containers run include those run using the Docker Desktop graphical user interface, `docker run`, or `docker compose`.

Average number of containers run

The average number of containers run per active user.

Containers run by active users (graph)

The number of containers run over time by active users.

### [Docker Desktop usage](#docker-desktop-usage)

Explore Docker Desktop usage patterns with this chart to optimize your team's workflows and ensure compatibility. It provides valuable insights into how Docker Desktop is being utilized, enabling you to streamline processes and improve efficiency.

The chart contains the following data:

Data

Description

Most used version

The most used version of Docker Desktop by users in your organization.

Most used OS

The most used operating system by users.

Versions by active users (graph)

The number of active users using each version of Docker Desktop.

To learn more about each version and release dates, see the [Docker Desktop release notes](/desktop/release-notes/).

Interface by active users (graph)

The number of active users grouped into the type of interface they used to interact with Docker Desktop.

A CLI user is any active user who has run a `docker` command. A GUI user is any active user who has interacted with the Docker Desktop graphical user interface.

### [Docker Hub images](#docker-hub-images)

Analyze image distribution activity with this chart and view the most utilized Docker Hub images within your domain. This information helps you manage image usage, ensuring that the most critical resources are readily available and efficiently used.

> Note
>
> Data for images is only for Docker Hub. Data for third-party registries and mirrors aren't included.

The chart contains the following data:

Data

Description

Total pulled images

The total number of images pulled by users from Docker Hub.

Total pushed images

The total number of images pushed by users to Docker Hub.

Top 10 pulled images

A list of the top 10 images pulled by users from Docker Hub and the number of times each image has been pulled.

### [Extensions](#extensions)

Monitor extension installation activity with this chart. It provides visibility into the Docker Desktop extensions your teams are using, letting you track adoption and identify popular tools that enhance productivity.

The chart contains the following data:

Data

Description

Percentage of org with extensions installed

The percentage of users in your organization with at least one Docker Desktop extension installed.

Top 5 extensions installed in the organization

A list of the top 5 Docker Desktop extensions installed by users in your organization and the number of users who have installed each extension.

## [Export Docker Desktop user data](#export-docker-desktop-user-data)

You can export Docker Desktop user data as a CSV file:

1. Open [Docker Home](https://app.docker.com) and select your organization from the top-left account drop-down.
2. Select **Admin Console** in the left-hand navigation menu.
3. Select **Desktop insights**.
4. Choose a timeframe for your insights data: **1 Week**, **1 Month**, or **3 Months**.
5. Select **Export** and choose **Docker Desktop users** from the drop-down.

Your export will automatically download. Open the file to view the export data.

### [Understanding export data](#understanding-export-data)

A Docker Desktop user export file contains the following data points:

- Name: User's name
- Username: User's Docker ID
- Email: User's email address associated with their Docker ID
- Type: User type
- Role: User [role](https://docs.docker.com/enterprise/security/roles-and-permissions/)
- Teams: Team(s) within your organization the user is a member of
- Date Joined: The date the user joined your organization
- Last Logged-In Date: The last date the user logged into Docker using their web browser (this includes Docker Hub and Docker Home)
- Docker Desktop Version: The version of Docker Desktop the user has installed
- Last Seen Date: The last date the user used the Docker Desktop application
- Opted Out Analytics: Whether the user has opted out of the [Send usage statistics](https://docs.docker.com/enterprise/security/hardened-desktop/settings-management/settings-reference/#send-usage-statistics) setting in Docker Desktop

## [Troubleshoot Insights](#troubleshoot-insights)

If you’re experiencing issues with data in Insights, consider the following solutions to resolve common problems:

- Update users to the latest version of Docker Desktop.

  Data is not shown for users using versions 4.16 or lower of Docker Desktop. In addition, older versions may not provide all data. Ensure all users have installed the latest version of Docker Desktop.

- Turn on **Send usage statistics** in Docker Desktop for all your users.

  If users have opted out of sending usage statistics for Docker Desktop, then their usage data will not be a part of Insights. To manage the setting at scale for all your users, you can use [Settings Management](/desktop/hardened-desktop/settings-management/) and turn on the `analyticsEnabled` setting.

- Ensure users use Docker Desktop and aren't using the standalone version of Docker Engine.

  Only Docker Desktop can provide data for Insights. If a user installs Docker Engine outside of Docker Desktop, Docker Engine won't provide data for that user.

- Make sure users sign in to an account associated with your organization.

  Users who don’t sign in to an account associated with your organization are not represented in the data. To ensure users sign in with an account associated with your organization, you can [enforce sign-in](/security/for-admins/enforce-sign-in/).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/admin/organization/insights.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fadmin%2forganization%2finsights%2f\&labels=status%2Ftriage)

Table of contents
