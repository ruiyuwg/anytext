# Server configuration

The `/config/server.js` file is used to define the server configuration for a Strapi application.

Changes to the `server.js` file require rebuilding the admin panel. After saving the modified file run either `yarn build` or `npm run build` in the terminal to implement the changes.

## Available options

The `./config/server.js` file can include the following parameters:

| Parameter                           | Description                                                                                                                                                                                                                                                                                                                                                                 | Type                                                                                              | Default             |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------- |
| `host`❗️ *Mandatory*     | Host name                                                                                                                                                                                                                                                                                                                                                                   | string                                                                                            | `localhost`         |
| `port`❗️ *Mandatory*     | Port on which the server should be running.                                                                                                                                                                                                                                                                                                                                 | integer                                                                                           | `1337`              |
| `app.keys`❗️ *Mandatory* | Declare session keys (based on

# TypeScript configuration

Source: //cms/configurations/typescript
