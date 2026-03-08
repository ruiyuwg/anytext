[Getting Started](/getting-started "Getting Started")Database

# Database Adapters

Auth.js integrations save sessions in a cookie by default. Therefore, setting up a database is optional. However, if you want to persist user information in your own database, or you want to implement certain flows, you will need to use a Database Adapter.

**Database Adapters** are the bridge we use to connect Auth.js to your database. For instance, [when implementing magic links](/getting-started/authentication/email), the Email provider will require you to setup a database adapter to be able to store the [verification tokens](/concepts/database-models#verificationtoken) present on the links.

## Official Adapters[](#official-adapters)

Below is a list of official adapters that are distributed as their own packages under the `@auth/` namespace. Their source code is available in the [`nextauthjs/next-auth` monorepo](https://github.com/nextauthjs/next-auth/tree/main/packages). If you’re going to create a database adapter, please make sure you familiarise yourself [with the models](/concepts/database-models) Auth.js expects to be present and check out our “[creating a database adapter](/guides/creating-a-database-adapter)” guide.

[![](/img/adapters/prisma.svg)

Prisma

](/getting-started/adapters/prisma)[![](/img/adapters/drizzle.svg)

Drizzle ORM

](/getting-started/adapters/drizzle)[![](/img/adapters/neon.svg)

Neon

](/getting-started/adapters/neon)[![](/img/adapters/supabase.svg)

Supabase

](/getting-started/adapters/supabase)[![](/img/adapters/firebase.svg)

Firebase

](/getting-started/adapters/firebase)[![](/img/adapters/typeorm.svg)

TypeORM

](/getting-started/adapters/typeorm)[![](/img/adapters/kysely.svg)

Kysely

](/getting-started/adapters/kysely)[![](/img/adapters/upstash-redis.svg)

Upstash Redis

](/getting-started/adapters/upstash-redis)[![](/img/adapters/azure-tables.svg)

Azure Tables Storage

](/getting-started/adapters/azure-tables)[![](/img/adapters/d1.svg)

D1

](/getting-started/adapters/d1)[![](/img/adapters/dgraph.svg)

Dgraph

](/getting-started/adapters/dgraph)[![](/img/adapters/dynamodb.svg)

DynamoDB

](/getting-started/adapters/dynamodb)[![](/img/adapters/edgedb.svg)

EdgeDB

](/getting-started/adapters/edgedb)[![](/img/adapters/fauna.svg)

Fauna

](/getting-started/adapters/fauna)[![](/img/adapters/hasura.svg)

Hasura

](/getting-started/adapters/hasura)[![](/img/adapters/mikro-orm.svg)

Mikro ORM

](/getting-started/adapters/mikro-orm)[![](/img/adapters/mongodb.svg)

MongoDB

](/getting-started/adapters/mongodb)[![](/img/adapters/neo4j.svg)

Neo4j

](/getting-started/adapters/neo4j)[![](/img/adapters/pg.svg)

pg

](/getting-started/adapters/pg)[![](/img/adapters/pouchdb.svg)

PouchDB

](/getting-started/adapters/pouchdb)[![](/img/adapters/sequelize.svg)

Sequelize

](/getting-started/adapters/sequelize)[![](/img/adapters/surrealdb.svg)

SurrealDB

](/getting-started/adapters/surrealdb)[![](/img/adapters/unstorage.svg)

Unstorage

](/getting-started/adapters/unstorage)[![](/img/adapters/xata.svg)

Xata

](/getting-started/adapters/xata)

💡

If you don’t find an adapter for your database or service of choice, you can create one yourself. Have a look at our guide on [how to create a database adapter](/guides/creating-a-database-adapter). If you create a new adapter, we’d love it if you [opened a PR](/guides/creating-a-database-adapter#official-adapter-guidelines) to share it with everyone!

## Models[](#models)

This is a generic ER Diagram of what the full database schema should look like. Your database adapter of choice will include a template schema with more details for applying this schema to the underlying database. For more details, check out our [database models](/concepts/database-models) documentation. Please note, that the entire schema is not required for every use-case, for more details check out our [database adapters guide](/guides/creating-a-database-adapter).

[WebAuthn 🔬](/getting-started/authentication/webauthn "WebAuthn 🔬")[Signin and Signout](/getting-started/session-management/login "Signin and Signout")
