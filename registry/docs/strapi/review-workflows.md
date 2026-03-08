# Review Workflows

The Review Workflows feature allows you to create and manage workflows for your various content-types. Each workflow can consist of any review stages for your content, enabling your team to collaborate in the content creation flow from draft to publication.

## Configuration

**Path to configure the feature:**  Settings > Global settings > Review Workflows

For the review workflows to be usable in the [Content Manager](/cms/features/content-manager), the default one should be configured or a new one should be created.

The default workflow is configured to have 4 stages: To do, In progress, Ready to review, and Reviewed. All 4 stages can be edited, reordered or deleted as needed, and it is also possible to add new stages.

### Creating a new workflow

1. Click on the **Create new workflow** button or on the edit button  of a workflow.
2. In the workflow edit interface, configure the new workflow:
   | Setting name   | Instructions                                                             |
   | -------------- | ------------------------------------------------------------------------ |
   | Workflow name  | Write a unique name for the workflow.                                    |
   | Associated to  | (optional) Assign this workflow to one or more existing content-types.   |
   | Stages         | Add review stages (see [Adding a new stage](#adding-a-new-stage)).       |
3. Click on the **Save** button. The new workflow will be displayed in the list view and for every content-type assigned.

The maximum number of .

### Editing a workflow

#### Adding a new stage

1. Click on the **Add new stage** button.
2. Write the *Stage name*.
3. Select a *Color*.
4. Select *Roles* that can change the stage, if the entity is currently in that review stage.
5. Click on the **Save** button.

By default new stages are appended, but they can be reordered anytime using the  button.

To set up roles for each stage, you can either click "Apply to all stages" to apply the current roles to all other stages of the workflow or use "Duplicate stage" of the stage context menu.

#### Duplicating a stage

1. Click **Duplicate Stage** in the context menu of the stage.
2. Change the name of the duplicated stage.
3. Click on the **Save** button.

#### Deleting a stage

To delete a stage, click  in the context menu of the stage, then **Delete**.

If you delete a stage that has pending reviews, the reviews will be moved to first stage in the workflow. Every workflow needs to
contain at least one stage and therefore it is not possible to delete the last stage.

### Deleting a workflow

To delete a workflow click on the delete button  of a workflow in the list view.

It is not possible to delete the last workflow.

## Usage

**Path to use the feature:**  Content Manager

### Changing review stage

As content is created and revised among your team, you can change the review stage of the content to any stage defined in the review workflow.

1. Access the edit view of your content-type.
2. In the *Review Workflows* box on the right side of the interface, click on the *Review stage* drop-down list.
3. Choose the new review stage of your entry. It is automatically saved.

### Defining assignee

Entries of a review workflow content type can be assigned to any admin user in Strapi for review.

1. Access the edit view of your content-type.
2. In the *Review Workflows* box on the right side of the interface, click on the *Assignee* drop-down list.
3. Choose the new assignee of your entry. It is automatically saved.

# Single Sign-On (SSO)

Source: //cms/features/sso

# Single Sign-On (SSO)

The Single Sign-On (SSO) feature can be made available on a Strapi application to allow administrators to authenticate through an identity provider (e.g. Microsoft Azure Active Directory).

## Usage

To access the admin panel using a specific provider instead of logging in with a regular Strapi administrator account:

1. Go to the URL of your Strapi application's admin panel.
2. Click on a chosen provider, which logo should be displayed at the bottom of the login form. If you cannot see your provider, click the  button to access the full list of all available providers.
3. You will be redirected to your provider's own login page where you will be able to authenticate.

# Users & Permissions

Source: //cms/features/users-permissions

# Users & Permissions

The Users & Permissions feature allows the management of the end-users  of a Strapi project. It provides a full authentication process based on JSON Web Tokens (JWT) to protect your API, and an access-control list (ACL) strategy that enables you to manage permissions between groups of users.

## Admin panel configuration

The Users & Permissions feature is configured from both the admin panel settings, and via the code base.
