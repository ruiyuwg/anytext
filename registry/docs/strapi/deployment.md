# Deployment

Strapi provides many deployment options for your project or application. Your Strapi applications can be deployed on traditional hosting servers or your preferred hosting provider.

The following documentation covers the basics of how to prepare Strapi for deployment on with several common hosting options.

You can use [Strapi Cloud](/cloud/intro) to quickly deploy and host your project.

If you already created a content structure with the Content-Type Builder and added some data through the Content Manager to your local (development) Strapi instance, you can leverage the [data management system](/cms/features/data-management) to transfer data from a Strapi instance to another one.

Another possible workflow is to first create the content structure locally, push your project to a git-based repository, deploy the changes to production, and only then add content to the production instance.

For self-hosted Kubernetes deployments, we recommend using **npm** rather than **pnpm**. `pnpm` aggressive hoisting of dependencies can break native modules, such as `mysql2`— that your application may rely on. `npm` flatter, more predictable `node_modules` layout helps ensure native packages load correctly.

## General guidelines

### Hardware and software requirements

To provide the best possible environment for Strapi the following requirements apply to development (local) and staging and production workflows.

Run the server with the `production` settings:

We highly recommend using  to manage your process.

If you need a server.js file to be able to run `node server.js` instead of `npm run start` then create a `./server.js` file as follows:

```js title="path: ./server.js"

const strapi = require('@strapi/strapi');
strapi.createStrapi(/* {...} */).start();
```

If you are developing a `TypeScript`-based project you must provide the `distDir` option to start the server.
For more information, consult the [TypeScript documentation](/cms/typescript/development#use-the-createstrapi-factory).

Strapi exposes a lightweight health check route at `/_health` for uptime monitors and load balancers. When the server is ready, it responds with an HTTP `204 No Content` status and a `strapi: You are so French!` header value, which you can use to confirm the application is reachable.

### Advanced configurations

If you want to host the administration on another server than the API, [please take a look at this dedicated section](/cms/configurations/admin-panel#deploy-on-different-servers).

## Additional resources

- Your Strapi project is [created](/cms/installation) and its code is hosted on GitHub.
- You have read the [general deployment guidelines](/cms/deployment#general-guidelines).

The  of the Strapi website include information on how to integrate Strapi with many resources, including how to deploy Strapi on the following 3rd-party platforms:

In addition, community-maintained guides for additional providers are available in the . This includes the following guides:

The following external guide(s), not officially maintained by Strapi, might also help deploy Strapi on various environments:

If you're looking for multi-tenancy options, the Strapi Blog has a .

# Error handling

Source: //cms/error-handling

# Error handling

Strapi is natively handling errors with a standard format.

There are 2 use cases for error handling:

- As a developer querying content through the [REST](/cms/api/rest) or [GraphQL](/cms/api/graphql) APIs, you might [receive errors](#receiving-errors) in response to the requests.
- As a developer customizing the backend of your Strapi application, you could use controllers and services to [throw errors](#throwing-errors).

## Receiving errors

Errors are included in the response object with the `error` key and include information such as the HTTP status code, the name of the error, and additional information.

### REST errors

Errors thrown by the REST API are included in the [response](/cms/api/rest#requests) that has the following format:

```json
{
  "data": null,
  "error": {
    "status": "", // HTTP status
    "name": "", // Strapi error name ('ApplicationError' or 'ValidationError')
    "message": "", // A human readable error message
    "details": {
      // error info specific to the error type
    }
  }
}
```

### GraphQL errors

Errors thrown by the GraphQL API are included in the response that has the following format:

```json
{ "errors": [
    {
      "message": "", // A human reable error message
      "extensions": {
        "error": {
          "name": "", // Strapi error name ('ApplicationError' or 'ValidationError'),
          "message": "", // A human reable error message (same one as above);
          "details": {}, // Error info specific to the error type
        },
        "code": "" // GraphQL error code (ex: BAD_USER_INPUT)
      }
    }
  ],
  "data": {
    "graphQLQueryName": null
  }
}
```

## Throwing errors

### Controllers and middlewares

The recommended way to throw errors when developing any custom logic with Strapi is to have the [controller](/cms/backend-customization/controllers) or [middleware](/cms/backend-customization/middlewares) respond with the correct status and body.

This can be done by calling an error function on the context (i.e. `ctx`). Available error functions are listed in the

### Services and models lifecycles

Once you are working at a deeper layer than the controllers or middlewares there are dedicated error classes that can be used to throw errors. These classes are extensions of

#### Example: Throwing an error in a model lifecycle\*\*

This example shows building a [custom model lifecycle](/cms/backend-customization/models#lifecycle-hooks) and being able to throw an error that stops the request and will return proper error messages to the admin panel. Generally you should only throw an error in `beforeX` lifecycles, not `afterX` lifecycles.

### Policies

[Policies](/cms/backend-customization/policies) are a special type of middleware that are executed before a controller. They are used to check if the user is allowed to perform the action or not. If the user is not allowed to perform the action and a `return false` is used then a generic error will be thrown. As an alternative, you can throw a custom error message using a nested class extensions from the Strapi `ForbiddenError` class, `ApplicationError` class (see [Default error classes](#default-error-classes) for both classes), and finally the
