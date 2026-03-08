# Roles

You can manage access to content and settings in your Sanity Content Lake by setting roles and permissions for project members. Each member may have different roles for granular access control to your Content Lake. All projects have default roles available, but you can also create **custom roles** that define granular access to datasets and project settings. You can also use GROQ to define custom **content resources**. Content permissions are typically set to either all or individual datasets, but you can use **Tags** to group datasets that should share permissions.

Roles and permissions can be [configured through the API](https://www.sanity.io/docs/http-reference/roles), or through the project settings available at [sanity.io/manage](https://sanity.io/manage). This article will focus mainly on the latter option.

## Default roles per plan

Each plan type has access to specifically defined roles. Custom roles are available for Enterprise customers.

#### Properties

| Property | Description |
| --- | --- |
| Administrator | Read and write access to all datasets, with full access to all project settings. |
| Viewer | Read-only access to all datasets, with no access to project settings. Note: viewers can comment in projects where comments are enabled. |
| Editor | Read and write access to all datasets, with limited access to project settings.

Editors can modify existing datasets, but cannot create new ones. |
| Developer | Read and write access to all datasets, with access to project settings for developers. |
| Contributor | Read and write access to draft content within all datasets, with no access to project settings. Can write but not publish documents. |
| Custom | Fully custom roles and permissions, with custom access to project settings. |

## Assigning roles to members

To assign roles to users, navigate to the Member section in your project settings at [sanity.io/manage](https://sanity.io/manage). You'll see each project member's roles listed by their name and login info.

![Overview of project members in manage](https://cdn.sanity.io/images/3do82whm/next/554f0afe514787948ac29011ff22443a72e91450-796x385.png)

When using Single Sign-On (SSO), roles can be [automatically assigned](https://www.sanity.io/docs/developer-guides/sso-saml) to users using rules that evaluate each user’s group membership in your identity provider. Role assignment can be restricted to be set only through mapping rules, or allow for manual modification. If role assignment is restricted to be set only through mapping rules, you cannot manually change the role of a user in this screen.

![Shgows a popover alerting the user that roles are handled by identity provider and cannot be manually updated](https://cdn.sanity.io/images/3do82whm/next/9a7a942da4941567856316ac1613ac4a72ca57f9-1605x1365.png)

## Creating custom roles

*This is a paid feature, available on the Enterprise plan.*

To define custom roles, navigate to the **Access** tab in your project settings. You will see a list of your currently defined roles with a summary of each role's access privileges. To create a new custom role, click the button in the upper right corner.

![Shows the button indicated above](https://cdn.sanity.io/images/3do82whm/next/ee47a8e618a0fbcae78c8dd451ba40f27eded47e-1041x648.png)

You will be asked to provide some basic details for your role.

![Shows dialog for creating new role](https://cdn.sanity.io/images/3do82whm/next/787e50a9c2ed123cabbc98ed5d57ef0feedb799f-648x516.png)

Once created you'll have the option of adding members to the role or proceeding to define permissions and restrictions. These are divided into two main categories: **Content Permissions** and **Management Permissions**.

### About viewer roles

Users with the "Viewer" role are free and don't count toward a plan's available seats. If a user with the viewer role is assigned an additional role, that user will count as a billable user.

> \[!WARNING]
> Gotcha
> Only the built-in viewer role is consider a "free viewer." Any custom role, even if it only grants read-only access, is billed as a regular user.

## Management Permissions

These settings grant a role access to your project's settings which are typically accessed in the project management console at [sanity.io/manage](https://sanity.io/manage). Access to a project's details and usage statistics, members and roles, API settings, and datasets and tags are currently available for configuration.

> \[!WARNING]
> Gotcha
> In order for a role to have access to the project, **Project Details** should be set to **read**. For content editor roles, also setting **Project Members** to **read** will ensure they get the best studio experience with the full advantage of [Presence](https://www.sanity.io/blog/introducing-presence) features.

## Content permissions

This is where you define the role's access to your Content Lake. You can grant any role wide-reaching privileges that extend to all your datasets or use GROQ filters to set up granular access to only certain content types.

Once you've navigated to the role you want to configure you'll be presented with a list of your datasets that can be individually configured, as well as the opportunity to set some base permissions for *all datasets*.

![Shows overview of permissions for role](https://cdn.sanity.io/images/3do82whm/next/1934bbd28a3ca4b6cc182beed7d3a04b9b9035e3-910x780.png)

By default, all permissions are set to **No access**. Permissions cascade down from more general contexts to more specific ones, so it's generally better to start restrictive and grant privileges on each dataset separately as any permission granted on **All datasets** will override more restrictive settings in the individual datasets.

![Shows default permissions for all datasets set to "No access"](https://cdn.sanity.io/images/3do82whm/next/8d2232e47247037206b615fbac27a3b0bbebcc2a-677x313.png)

> \[!WARNING]
> Gotcha
> Permissions are additive in nature.
> That means you cannot remove a permission that has been granted to a role elsewhere.
> **Example**: If you defined that a role has `publish` rights for all documents in all datasets, it is impossible to define a resource (via GROQ filter) which only grants `read` access to a specific subset of documents.

This hereditary characteristic of permissions is visualized when you go to edit the permission for a single dataset. The dialog shown below demonstrates how the final permissions for the dataset are derived from both the privileges set generally for all datasets and from the privileges set specifically for this dataset.

![Shows permissions on several levels of specificity](https://cdn.sanity.io/images/3do82whm/next/7e324ed31d419d7136c61cdbe4e9b0830d77db16-826x735.png)

The base set of content resources available for access control are general in nature but powerful enough to cover many use-cases. You may grant privileges to read, create and update, and publish each of the widely encompassing options; **All documents**, **Image assets**, and **File assets**.

> \[!WARNING]
> Gotcha
> If your dataset is **public** all project members will have read access to your **published content** *even if their role is set to no access*!

## Content resources

*This is a paid feature, available on the Enterprise plan.*

In addition to the basic set of permission scopes that lets you configure access to **All documents**, **Image assets**, and **File assets,** you may also create custom content resources to control access to particular content types, which you may then control the access to with your custom roles. To create a new content resource, find the **Resources** section in the left column menu, under the **Access** tab.

> \[!WARNING]
> Gotcha
> The filter does not support dereferencing! This will **not** work: `referenceField->`! Instead, check against the `_ref` property when creating custom resources: `referenceField._ref == "my-referenced-doc-id"`.

![Shows the button described below](https://cdn.sanity.io/images/3do82whm/next/4f324593a0373521a2486807bf47e5afa91483b6-683x470.png)

In our example, we'll be working with the default starter template called *Movie Project*. This gives us a prefilled dataset with content types like `movie`, `person`, and *screening*. Click the button in the top right of the section to create a new content resource.

![Shows the setup dialog for new content resource](https://cdn.sanity.io/images/3do82whm/next/4fae04f825f30382264af0e92d97c8db0308ab40-1292x1512.png)

Content resources leverage the power of GROQ to filter which content types are affected by the privileges you choose to grant. In this example, we're using a simple but powerful GROQ expression to return only documents of type movie.

> \[!TIP]
> Protip
> GROQ is Sanity's open-source query language for JSON. Learn more about [GROQ in the docs](https://www.sanity.io/docs/overview-groq)!

Once you hit save, you should see your new content resource added to the list.

![Shows the new content resource in the list of resource definitions](https://cdn.sanity.io/images/3do82whm/next/0707eba5207d5c510e085be4984a7dd6111e73cb-1766x576.png)

Revisiting the **Roles** section in the left column menu, we can now set `movie`-specific privileges on our custom role.

![Shows dialog for specifying permissions on content resource](https://cdn.sanity.io/images/3do82whm/next/926857104bb65dbd336033dadbaf08ef442f51f2-649x728.png)

To test your role, make sure you have actually set the role on a member account and then proceed to log into the studio with the account in question.

![Shows list of project members, one with new role specified](https://cdn.sanity.io/images/3do82whm/next/dd43be021181aa698dcc53d7ed502f17534dd9ee-667x189.png)

Your account should be able to view, create, update and publish any document of the `movie` type, but should be unable to edit documents of any other type.

![Shows a notification stating that current user does not have permissions to update document](https://cdn.sanity.io/images/3do82whm/next/850bcc2e259960e29685bd8742b20f7aab09eaae-640x357.png)

![Shows a notification stating that current user does not have permissions to update document](https://cdn.sanity.io/images/3do82whm/next/2cdd6060d774cc8654bd556f6ef2c79eab88d276-641x287.png)

## Tags

Tags are a useful feature that lets you group datasets with similar characteristics together so that roles and permissions can be conveniently set on multiple datasets in a single operation. You might create tags for different environments, such as `production` and `staging`, or combine tags for different publications and locales, E.g. `elle` `us` or `vogue` `jp`.

*This is a paid feature, available on the Growth plan.*

To create a new tag, navigate to the **Datasets** tab in your project settings and find the **Tags** section in the left column menu.

![Shows the button described above](https://cdn.sanity.io/images/3do82whm/next/55c7e0536da439f29d08e05ec42a4f53e1d56042-1540x466.png)

In the example shown below we'll be creating a tag for staging and production datasets for our movie blog, and then assigning editing privileges in both for our `movie-critic` role.

![Shows setup dialog for new dataset tag](https://cdn.sanity.io/images/3do82whm/next/80c860d3162574acd4c512d218d997eefdafec7b-645x639.png)

Once created, we can add datasets to the tag and define permissions to content resources for our custom roles.

![Shows content permissions for dataset tag](https://cdn.sanity.io/images/3do82whm/next/17b14929387db6f537a1b496a87029d25490f0f7-1546x988.png)

The change is reflected and can be edited in the content permissions for the custom role.

![Shows the permission setting as described above](https://cdn.sanity.io/images/3do82whm/next/552ddfb71be659d716500c07b44cfd7ed3d7e64f-1554x1280.png)

# Setting up your studio

## Create a new Studio with Sanity CLI

![Video](https://stream.mux.com/wIMs3CS7T4pP7hRArpQZsBZ01Be02vCjbK)

Run the command in your Terminal to initialize your project on your local computer.

See the documentation if you are [having issues with the CLI](https://www.sanity.io/docs/help/cli-errors).

**Terminal**

```sh
npm create sanity@latest -- --dataset production --template clean --typescript --output-path studio-hello-world
cd studio-hello-world
```

## Run Sanity Studio locally

Inside the directory of the Studio, start the development server by running the following command.

**Terminal**

```sh
# in studio-hello-world 
npm run dev
```

## Log in to the Studio

**Open** the Studio running locally in your browser from <http://localhost:3333>.

You should now see a screen prompting you to log in to the Studio. Use the same service (Google, GitHub, or email) that you used when you logged in to the CLI.

# Defining a schema

## Create a new document type

![Video](https://stream.mux.com/IfVfAwxfwOKN2khdGCQ3cs5IuF1rYte1)

Create a new file in your Studio’s `schemaTypes` folder called `postType.ts` with the code below which contains a set of fields for a new `post` document type.

**/studio-hello-world/schemaTypes/postType.ts**

```
import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
```

## Register the `post` schema type to the Studio schema

Now you can import this document type into the `schemaTypes` array in the `index.ts` file in the same folder.

**/studio-hello-world/schemaTypes/index.ts**

```
import {postType} from './postType'

export const schemaTypes = [postType]
```

## Publish your first document

When you save these two files, your Studio should automatically reload and show your first document type. Click the `+` symbol at the top left to create and publish a new `post` document.

# Querying content with GROQ

## Write your first GROQ query

![Video](https://stream.mux.com/Mc12Sdeu00ugrGuQyz00Du1G4AQZmT36UV)

Open **Vision** in your Studio's top nav bar and paste this query into the **Query** code block field.

**Vision**

```groq
*[_type == "post"]{
  _id,
  title,
  slug,
  publishedAt
}
```

- `*` represents all documents in a dataset as an array
- `[_type == "post"]` represents a **filter** to only return matching documents
- `{ _id, title, slug, publishedAt }` represents a **projection** which defines the attributes from those documents that you wish to include in the response.

## Run the query

Click **Fetch** to see the JSON output in **Results**. You should see the document you previously published in the results.

Queries run in Vision use your authenticated session, so you will see private documents – which have a `.` in the `_id` key, like `drafts.`. You will not see when queried from your front end in the next step.
