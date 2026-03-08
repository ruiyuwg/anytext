# Database configuration

The `/config/database.js|ts` file is used to define database connections that will be used to store the application content.

The following databases are supported by Strapi:

## Configuration in database

Configuration files are not multi-server friendly. To update configurations in production you can use a data store to get and set settings.

### Get settings

- `environment` (string): Sets the environment you want to store the data in. By default it's current environment (can be an empty string if your configuration is environment agnostic).
- `type` (string): Sets if your configuration is for an `api`, `plugin` or `core`. By default it's `core`.
- `name` (string): You have to set the plugin or api name if `type` is `api` or `plugin`.
- `key` (string, required): The name of the key you want to store.

```js
// strapi.store(object).get(object);
// create reusable plugin store variable
const pluginStore = strapi.store({
  environment: strapi.config.environment,
  type: 'plugin',
  name: 'users-permissions',
});
await pluginStore.get({ key: 'grant' });
```

### Set settings

- `value` (any, required): The value you want to store.

```js
// strapi.store(object).set(object);
// create reusable plugin store variable
const pluginStore = strapi.store({
  environment: strapi.config.environment,
  type: 'plugin',
  name: 'users-permissions'
});
await pluginStore.set({
  key: 'grant',
  value: {
    ...
  }
});
```

## Environment variables in database configurations

Strapi version `v4.6.2` and higher includes the database configuration options in the `./config/database.js` or `./config/database.ts` file. When a new project is created the environment variable `DATABASE_CLIENT` with the value `mysql`, `postgres`, or `sqlite` is automatically added to the `.env` file depending on which database you choose during project creation. Additionally, all of the environment variables necessary to connect to your local development database are also added to the `.env` file.  The following is an example of the generated configuration file:

The following are examples of the corresponding `.env` file database-related keys for each of the possible databases:

### Environment variables for Strapi applications before `v4.6.2`

If you started your project with a version prior to `v4.6.2` you can convert your `database.js|database.ts` configuration file following this procedure:

1. Update your application to `v4.6.2` or a later version. See the [upgrades](/cms/upgrades) documentation.
2. Replace the contents of your `./config/database.js` or `./config/database.ts` file with the preceding JavaScript or TypeScript code.
3. Add the environment variables from the preceding code example to your `.env` file.
4. (*optional*) Add additional environment variables such as `DATABASE_URL` and the properties of the `ssl` object.
5. Save the changes and restart your application.
   Do not overwrite the environment variables: `HOST`, `PORT`, `APP_KEYS`, `API_TOKEN_SALT`, and `ADMIN_JWT_SECRET`.

### Database connections using `connectionString`

Many managed database solutions use the property `connectionString` to connect a database to an application. Strapi `v4.6.2` and later versions include the `connectionString` property. The `connectionString` is a concatenation of all the database properties in the `connection.connection` object. The `connectionString`:

- overrides the other `connection.connection` properties such as `host` and `port`,
- can be disabled by setting the property to an empty string: `''`.

### Database management by environment

Development of a Strapi application commonly includes customization in the local development environment with a local development database, such as `SQLite`. When the application is ready for another environment such as production or staging the application is deployed with a different database instance, usually `MySQL`, `MariaDB`, or `PostgreSQL`. Database environment variables allow you to switch the attached database. To switch the database connection:

- set a minimum of the `DATABASE_CLIENT` and `DATABASE_URL` for `MySQL`, `MariaDB`, and `PostgreSQL`,
- or set a minimum of `DATABASE_CLIENT` and `DATABASE_FILENAME` for `SQLite`.

For deployed versions of your application the database environment variables should be stored wherever your other secrets are stored. The following table gives examples of where the database environment variables should be stored:

| Hosting option                                        | environment variable storage    |
|-------------------------------------------------------|---------------------------------|
| Virtual private server/virtual machine (e.g. AWS EC2) | `ecosystem.config.js` or `.env` |
| DigitalOcean App Platform                             | `Environment Variables` table   |
| Heroku                                                | `Config vars` table                   |

## Databases installation

Strapi gives you the option to choose the most appropriate database for your project. Strapi supports PostgreSQL, SQLite, or MySQL.

### SQLite

SQLite is the default (see [Quick Start Guide](/cms/quick-start)) and recommended database to quickly create an application locally.

#### Install SQLite during application creation

Use one of the following commands:

This will create a new project and launch it in the browser.

#### Install SQLite manually

In a terminal, run the following command:

Add the following code to your `/config/database.ts|js` file:

### PostgreSQL

When connecting Strapi to a PostgreSQL database, the database user requires SCHEMA permissions. While the database admin has this permission by default, a new database user explicitly created for the Strapi application will not. This would result in a 500 error when trying to load the admin console.

To create a new PostgreSQL user with the SCHEMA permission, use the following steps:

```shell
# Create a new database user with a secure password
$ CREATE USER my_strapi_db_user WITH PASSWORD 'password';
# Connect to the database as the PostgreSQL admin
$ \c my_strapi_db_name admin_user
# Grant schema privileges to the user
$ GRANT ALL ON SCHEMA public TO my_strapi_db_user;
```

# Environment variables configuration

Source: //cms/configurations/environment
