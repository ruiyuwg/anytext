# Deploy Button Demo

## Demo Title

| Parameter    | Type     | Value                               | Required |
| ------------ | -------- | ----------------------------------- | -------- |
| `demo-title` | `string` | The title of an example deployment. | Yes      |

This parameter allows you to specify the title of an
example of a successful deployment.

The parameter is part of the Demo Card parameters. The Demo Card should
showcase an example of a successful deployment to the user clicking
the Deploy Button and entering the Project creation flow.

> **💡 Note:** The Demo card is displayed only when all `demo-*`
> parameters are provided.

![Image](`/docs-assets/static/docs/deploy-button/deploy-title-light.png`)

*The Demo Title parameter is displayed on the Demo Card.*

The example below shows how to use the `demo-title` parameter in the Deploy Button source URL:

```bash filename="demo title"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&demo-title=APM%20Story
```

## Demo Description

| Parameter          | Type     | Value                                     | Required |
| ------------------ | -------- | ----------------------------------------- | -------- |
| `demo-description` | `string` | The description of an example deployment. | Yes      |

This parameter allows you to specify the description of an
example of a successful deployment.

The parameter is part of the Demo Card parameters. The Demo Card should
showcase an example of a successful deployment to the user clicking
the Deploy Button and entering the Project creation flow.

> **💡 Note:** The Demo card is displayed only when all `demo-*`
> parameters are provided.

![Image](`/docs-assets/static/docs/deploy-button/deploy-description-light.png`)

*The Demo Description is displayed on the Demo Card.*

The example below shows how to use the `demo-description` parameter in the Deploy Button source URL:

```bash filename="demo description"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&demo-description=A%20statically%20generated%20blog%20example%20using%20Next.js%20%and%20DatoCMS
```

## Demo URL

| Parameter  | Type     | Value                             | Required |
| ---------- | -------- | --------------------------------- | -------- |
| `demo-url` | `string` | The URL of an example deployment. | Yes      |

This parameter allows you to specify the URL of an example of a successful deployment.

The parameter is part of the Demo Card parameters. The Demo Card should showcase an example of a successful deployment to the user clicking the Deploy Button and entering the Project creation flow.

> **💡 Note:** The Demo card is displayed only when all `demo-*`
> parameters are provided.

![Image](`/docs-assets/static/docs/deploy-button/deploy-url-light.png`)

*Clicking on the Demo Card will link the user to the URL specified by Demo URL.*

The example below shows how to use the `demo-url` parameter in the Deploy Button source URL:

```bash filename="demo url"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&demo-url=https%3A%2F%2Fnextjs.org
```

## Demo Image

| Parameter    | Type     | Value                                               | Required |
| ------------ | -------- | --------------------------------------------------- | -------- |
| `demo-image` | `string` | The URL of the screenshot of an example deployment. | Yes      |

This parameter allows you to specify the URL of the screenshot of an example of a successful deployment.

The parameter is part of the Demo Card parameters. The Demo Card should showcase an example of a successful deployment to the user clicking the Deploy Button and entering the Project creation flow.

> **💡 Note:** The Demo card is displayed only when all `demo-*`
> parameters are provided.

![Image](`/docs-assets/static/docs/deploy-button/deploy-image-light.png`)

*The image specified by Demo Image is displayed on the Demo Card.*

The example below shows how to use the `demo-image` parameter in the Deploy Button source URL:

```bash filename="demo image"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&demo-image=https%3A%2F%2Fexample.com%2Fimage.png
```

title: "Using Environment Variables with the Deploy Button"
description: "Learn how to use Environment Variables with the Vercel Deploy Button."
last\_updated: "2026-03-23T09:40:08.087Z"
source: "https://vercel.com/docs/deploy-button/environment-variables"
