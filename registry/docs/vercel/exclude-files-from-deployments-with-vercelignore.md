# Exclude Files from Deployments with .vercelignore

The `.vercelignore` file can be used to specify files and directories that should be excluded from the deployment process when using Vercel. This file works similarly to a `.gitignore` file, but it is specific to Vercel.

The `.vercelignore` file should be placed in the root directory of your project and should contain a list of files and directories, one per line, that should be excluded from deployment. For example, to prevent an `/image` directory and `/private.html` file within a project from being uploaded to Vercel, you would add them to the `.vercelignore` file like this:

```bash filename=".vercelignore"
image
private.html
```

## Allowlist

A typical `.vercelignore` file assumes all files are allowed and each entry is a pattern to ignore. Alternatively, you can ignore all files and each entry is a pattern to allow.

Add a wildcard `/*` as the first line in `.vercelignore` to ensure all directories and files in the **project root** are ignored. The following lines must then start with a `!` to invert the ignore action and ensure the directory or file is allowed.

```bash filename=".vercelignore"
# Ignore everything (folders and files) on root only
/*
!api
!vercel.json
!*.html
```

## Uploaded Files

Aside from the [default exclusions](/docs/deployments/build-features#ignored-files-and-folders), all files within your project are uploaded to Vercel if no source path is specified to be excluded in a `.vercelignore` configuration file

The complete list of files and directories excluded by default can be found in the [ignored files and folders](/docs/deployments/build-features#ignored-files-and-folders) documentation.

## Served Files

The use of a `.vercelignore` configuration file allows you to keep private files safe and also makes your deployment faster by uploading only the essential files. Non-targeted files are prevented from being deployed and served on Vercel.

## Monorepos

If you have a monorepo, a `.vercelignore` in the project root directory always takes precedence over one that is defined at the root level. If there is no `.vercelignore` to be found at the project level, Vercel will use the `.vercelignore` at the root level.

title: "Using the Directory Listing"
description: "The Directory Listing is served when a particular path is a directory and does not contain an index file. Learn how to toggle and disable it in this guide."
last\_updated: "2026-03-23T09:40:08.574Z"
source: "https://vercel.com/docs/directory-listing"

# Using the Directory Listing

The Directory Listing setting enables you to display the contents of a directory when a user visits its path. For example, if you create a directory at the root of your project called `/assets`, then when people visit `https://your-site.com/assets`, they will see the files and folders within that directory, as shown in the example below:

![Image](`/front/docs/projects/directory-listing-page-light.png`)

You can enable or disable Directory Listing from **Advanced** in your project sidebar settings.

![Image](`/front/docs/projects/directory-listing-light.png`)

When enabled, the Directory Listing will be displayed. When disabled, a "Not Found" error will be displayed with status code `404`.

> **💡 Note:** If Directory Listing isn't working, navigate to your deployment in the
> dashboard and open  in the sidebar to view the contents of
> your project. Ensure the expected directory and files are listed.

### Disabling Directory Listing on a specific directory

To prevent Directory Listing for a specific path, you can either:

- Add an index file with any extension except `.css`, such as `index.html`. This file will be displayed instead of the Directory Listing
- Or, [set up a custom 404 error](/kb/guide/custom-404-page)

title: "Directory Sync"
description: "Learn how to configure Directory Sync for your Vercel Team."
last\_updated: "2026-03-23T09:40:08.588Z"
source: "https://vercel.com/docs/directory-sync"
