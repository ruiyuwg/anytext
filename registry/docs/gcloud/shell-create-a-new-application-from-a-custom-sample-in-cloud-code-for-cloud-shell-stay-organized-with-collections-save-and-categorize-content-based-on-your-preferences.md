-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application development](https://docs.cloud.google.com/docs/application-development)
-   [Cloud Code](https://docs.cloud.google.com/code/docs)
-   [Cloud Code for Cloud Shell](https://docs.cloud.google.com/code/docs/shell)
-   [Guides](https://docs.cloud.google.com/code/docs/shell/quickstart)

Send feedback

# Create a new application from a custom sample in Cloud Code for Cloud Shell Stay organized with collections Save and categorize content based on your preferences.

A sample repository is a Git repository that contains custom samples you can use to develop applications. After you've [set up your sample repository](/code/docs/shell/set-up-sample-repo), you can start creating applications with these samples.

Alternatively, you can import the [Cloud Code custom sample sample repository](https://github.com/GoogleCloudPlatform/cloud-code-custom-samples-example/) to try custom samples. To better understand how custom sample repositories are set up, it is recommended that you try cloning the repository and modifying its structure and content before importing it. You can do this by creating new samples in the repository or modifying the source code to create your own versions of the Hello World or Guestbook apps.

* * *

To follow step-by-step guidance for this task directly in the Cloud Shell Editor, click **Guide me**:

[Guide me](https://ide.cloud.google.com/?walkthrough_tutorial_id=cloud_code_custom_samples)

* * *

## Creating your app from an imported sample

To create a new application using a sample from your sample repository:

1.  Copy the Git URL of the sample repository that you'd like to use. If you're using a Git repository hosted live on your local machine, the `.git` suffix is omitted and the URL is of the form `/path/to/repo`.
    
    **Note:** Using an **HTTPS** Git URL is recommended. To use a SSH URL, you'll need to generate and configure SSH keys. For more information, see the documentation for your Git repository hosting service. For example, [GitHub](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh), [Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/set-up-an-ssh-key/), and [GitLab](https://docs.gitlab.com/ee/user/ssh/).
    
2.  In the Cloud Code status bar, click the active project name.
    
    ![Active project name in status bar](/static/code/docs/vscode/images/cloudcode-status-bar.png)
    
3.  In the Quick Pick menu that appears, select **New Application**.
    
4.  When you're prompted for the type of sample to use, select **Custom application**.
    
5.  Click **Import Sample from Repo**.
    
6.  When you're prompted for the URL, enter the Git URL you copied earlier.
    
    The URL in this example uses the HTTPS GitHub format: `https://github.com/username/repo-name.git`.
    
    **Troubleshooting tip:** If you're having trouble with Git authentication, check to see that your Cloud Shell Git login is set up properly. See [Using version control with Cloud Shell Editor](/shell/docs/version-control) for details.
    
7.  To use the latest version of your samples in Cloud Code, click refresh **Refresh Templates**.
    
8.  Check the terminal window in your IDE to confirm that your repository has been cloned successfully.
    
    The repository's default branch is automatically used. To use another branch:
    
    1.  Edit the branch in use or the repository URL in your `settings.json` file under `cloudcode.customApplications`.
    2.  Click **Custom Application**.
    3.  Click refresh **Refresh**.
    
    If your repository wasn't cloned successfully, you can use the Manage Repositories option to update your sample repository details with a valid Git URL and/or branch.
    
9.  From the updated list of samples, select your custom sample.
    
10.  Enter your project name and location.
     
11.  Click **Create New Application**.
     
     Cloud Code creates your app using your chosen sample and opens your app for use.
     

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
