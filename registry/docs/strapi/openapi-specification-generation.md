# OpenAPI specification generation

Strapi provides a command-line tool to generate

You can also path an optional `--output` argument to specify the path and filename, as in the following example:

### Specification structure and content

The generated OpenAPI specification follows the

```
Download an example of a complete specification file
```

The generated OpenAPI specification includes all available API endpoints in your Strapi application, and information about these endpoints, such as the following:

- CRUD operations for all content types
- Custom API routes defined in your application
- Authentication endpoints for user management
- File upload endpoints for media handling
- Plugin endpoints from installed plugins

## Integrating with Swagger UI

With the following steps you can quickly generate a [Swagger UI](https://swagger.io/)-compatible page:

1. Generate a specification:

2. Update [the `/config/middlewares.js` configuration file](/cms/configurations/middlewares) with the following code:

   This will ensure the Swagger UI display from  is not blocked by Strapi's CSP policy handled by the [security middleware](/cms/configurations/middlewares#security).

3. Create a `public/openapi.html` file in your Strapi project to display the Swagger UI, with the following code:

   ```html
   <!DOCTYPE html>

     
       API Documentation
       <link
         rel="stylesheet"
         type="text/css"
         href="https://unpkg.com/swagger-ui-dist@5.0.0/swagger-ui.css"
       />
     
     
       
       
       
       
         window.onload = function () {
           SwaggerUIBundle({
             url: './swagger-spec.json',
             dom_id: '#swagger-ui',
             presets: [
               SwaggerUIBundle.presets.apis,
               SwaggerUIStandalonePreset
             ],
             layout: 'StandaloneLayout',
           });
         };
       
     

   ```

4. Restart the Strapi server with `yarn develop` or `npm run develop` and visit the `/openapi.html` page. The Swagger UI should be displayed:

   ![Swagger UI example with Strapi OpenAPI specification](/img/assets/apis/swagger-open-api.png)

# REST API reference

Source: //cms/api/rest
