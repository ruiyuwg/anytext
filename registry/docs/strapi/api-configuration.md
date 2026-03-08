# API configuration

General settings for API calls can be set in the `./config/api.js` (or `./config/api.ts`) file. Both `rest` and `documents` options live in this single config file.

| Property                      | Description                                                                                                                                                                                                                                          | Type         | Default |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------- |
| `responses`                   | Global API response configuration                                                                                                                                                                                                                    | Object       | -       |
| `responses.privateAttributes` | Set of globally defined attributes to be treated as private.                                                                                                                                                                                         | String array | `[]`    |
| `rest`                        | REST API configuration                                                                                                                                                                                                                               | Object       | -       |
| `rest.prefix`                 | The API prefix                       | String      | `/api`   |
| `rest.defaultLimit`           | Default `limit` parameter used in API calls (see [REST API documentation](/cms/api/rest/sort-pagination#pagination-by-offset))                                                                      | Integer      | `25`    |
| `rest.maxLimit`               | Maximum allowed number that can be requested as `limit` (see [REST API documentation](/cms/api/rest/sort-pagination#pagination-by-offset)). | Integer      | `100`   |
| `rest.strictParams`           | When `true`, only allowed query and body parameters are accepted on Content API routes; unknown top-level keys are rejected. Add allowed parameters via [Custom Content API parameters](/cms/backend-customization/routes#custom-content-api-parameters) in `register`. | Boolean      | -       |
| `documents`                   | Document Service configuration                                                                                                                                                                                                                        | Object       | -       |
| `documents.strictParams`      | When `true`, Document Service methods reject parameters with unrecognized root-level keys (e.g., invalid `status`, `locale`). When `false` or unset, unknown parameters are ignored. See [Document Service API](/cms/api/document-service#configuration). | Boolean      | -       |

If the `rest.maxLimit` value is less than the `rest.defaultLimit` value, `maxLimit` will be the limit used.

`rest.strictParams` applies to incoming REST Content API requests (query and body). `documents.strictParams` applies to parameters passed to `strapi.documents()` in server-side code. You can enable one or both in the same config file.

**Example:**

# CRON jobs

Source: //cms/configurations/cron
