When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Deploy with Intune

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

For: Administrators

Learn how to deploy Docker Desktop on Windows and macOS devices using Microsoft Intune. It covers app creation, installer configuration, and assignment to users or devices.

Windows Mac

1. Sign in to your Intune admin center.

2. Add a new app. Select **Apps**, then **Windows**, then **Add**.

3. For the app type, select **Windows app (Win32)**

4. Select the `intunewin` package.

5. Fill in the required details, such as the description, publisher, or app version and then select **Next**.

6. Optional: On the **Program** tab, you can update the **Install command** field to suit your needs. The field is pre-populated with `msiexec /i "DockerDesktop.msi" /qn`. See the [Common installation scenarios](https://docs.docker.com/enterprise/enterprise-deployment/msi-install-and-configure/) for examples on the changes you can make.

   > Tip
   >
   > It's recommended you configure the Intune deployment to schedule a reboot of the machine on successful installs.
   >
   > This is because the Docker Desktop installer installs Windows features depending on your engine selection and also updates the membership of the `docker-users` local group.
   >
   > You may also want to set Intune to determine behaviour based on return codes and watch for a return code of `3010`. Return code 3010 means the installation succeeded but a reboot is required.

7. Complete the remaining tabs, then review and create the app.

First, upload the package:

1. Sign in to your Intune admin center.
2. Add a new app. Select **Apps**, then **macOS**, then **Add**.
3. Select **Line-of-business app** and then **Select**.
4. Upload the `Docker.pkg` file and fill in the required details.

Next, assign the app:

1. Once the app is added, navigate to **Assignments** in Intune.
2. Select **Add group** and choose the user or device groups you want to assign the app to.
3. Select **Save**.

## [Additional resources](#additional-resources)

- [Explore the FAQs](https://docs.docker.com/enterprise/enterprise-deployment/faq/).
- Learn how to [enforce sign-in](https://docs.docker.com/enterprise/security/enforce-sign-in/) for your users.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/enterprise/enterprise-deployment/use-intune.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fenterprise%2fenterprise-deployment%2fuse-intune%2f\&labels=status%2Ftriage)

Table of contents
