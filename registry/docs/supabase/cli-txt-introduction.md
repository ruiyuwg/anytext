Supabase CLI Reference

# CLI Reference

Bootstrap a Supabase project from a starter template

supabase bootstrap \[template] \[flags]

# CLI Reference

Initialize a local project

Initialize configurations for Supabase local development.

A `supabase/config.toml` file is created in your current working directory. This configuration is specific to each local project.

> You may override the directory path by specifying the `SUPABASE_WORKDIR` environment variable or `--workdir` flag.

In addition to `config.toml`, the `supabase` directory may also contain other Supabase objects, such as `migrations`, `functions`, `tests`, etc.

supabase init \[flags]

# CLI Reference

Authenticate using an access token

Connect the Supabase CLI to your Supabase account by logging in with your [personal access token](https://supabase.com/dashboard/account/tokens).

Your access token is stored securely in [native credentials storage](https://github.com/zalando/go-keyring#dependencies). If native credentials storage is unavailable, it will be written to a plain text file at `~/.supabase/access-token`.

> If this behavior is not desired, such as in a CI environment, you may skip login by specifying the `SUPABASE_ACCESS_TOKEN` environment variable in other commands.

The Supabase CLI uses the stored token to access Management APIs for projects, functions, secrets, etc.

supabase login \[flags]

# CLI Reference

Link to a Supabase project

Link your local development project to a hosted Supabase project.

PostgREST configurations are fetched from the Supabase platform and validated against your local configuration file.

Optionally, database settings can be validated if you provide a password. Your database password is saved in native credentials storage if available.

> If you do not want to be prompted for the database password, such as in a CI environment, you may specify it explicitly via the `SUPABASE_DB_PASSWORD` environment variable.

Some commands like `db dump`, `db push`, and `db pull` require your project to be linked first.

supabase link \[flags]

# CLI Reference

Start containers for Supabase local development

Starts the Supabase local development stack.

Requires `supabase/config.toml` to be created in your current working directory by running `supabase init`.

All service containers are started by default. You can exclude those not needed by passing in `-x` flag. To exclude multiple containers, either pass in a comma separated string, such as `-x gotrue,imgproxy`, or specify `-x` flag multiple times.

> It is recommended to have at least 7GB of RAM to start all services.

Health checks are automatically added to verify the started containers. Use `--ignore-health-check` flag to ignore these errors.

supabase start \[flags]

# CLI Reference

Stop all local Supabase containers

Stops the Supabase local development stack.

Requires `supabase/config.toml` to be created in your current working directory by running `supabase init`.

All Docker resources are maintained across restarts.  Use `--no-backup` flag to reset your local development data between restarts.

Use the `--all` flag to stop all local Supabase projects instances on the machine. Use with caution with `--no-backup` as it will delete all supabase local projects data.

supabase stop \[flags]

# CLI Reference

Show status of local Supabase containers

Shows status of the Supabase local development stack.

Requires the local development stack to be started by running `supabase start` or `supabase db start`.

You can export the connection parameters for [initializing supabase-js](https://supabase.com/docs/reference/javascript/initializing) locally by specifying the `-o env` flag. Supported parameters include `JWT_SECRET`, `ANON_KEY`, and `SERVICE_ROLE_KEY`.

supabase status \[flags]

# CLI Reference

Run tests on local Supabase containers

# CLI Reference

Tests local database with pgTAP

Executes pgTAP tests against the local database.

Requires the local development stack to be started by running `supabase start`.

Runs `pg_prove` in a container with unit test files volume mounted from `supabase/tests` directory. The test file can be suffixed by either `.sql` or `.pg` extension.

Since each test is wrapped in its own transaction, it will be individually rolled back regardless of success or failure.

supabase test db \[path] ... \[flags]

# CLI Reference

Create a new test file

supabase test new  \[flags]

# CLI Reference

Run code generation tools

Automatically generates type definitions based on your Postgres database schema.

This command connects to your database (local or remote) and generates typed definitions that match your database tables, views, and stored procedures. By default, it generates TypeScript definitions, but also supports Go and Swift.

Generated types give you type safety and autocompletion when working with your database in code, helping prevent runtime errors and improving developer experience.

The types respect relationships, constraints, and custom types defined in your database schema.

# CLI Reference

Generate a JWT signing key

Securely generate a private JWT signing key for use in the CLI or to import in the dashboard.

Supported algorithms:
ES256 - ECDSA with P-256 curve and SHA-256 (recommended)
RS256 - RSA with SHA-256

supabase gen signing-key \[flags]

# CLI Reference

Generate types from Postgres schema

supabase gen types \[flags]

# CLI Reference

Manage Postgres databases

# CLI Reference

Pull schema from the remote database

Pulls schema changes from a remote database. A new migration file will be created under `supabase/migrations` directory.

Requires your local project to be linked to a remote database by running `supabase link`. For self-hosted databases, you can pass in the connection parameters using `--db-url` flag.

> Note this command requires Docker Desktop (or a running Docker daemon), as it starts a local Postgres container to diff your remote schema.

Optionally, a new row can be inserted into the migration history table to reflect the current state of the remote database.

If no entries exist in the migration history table, `pg_dump` will be used to capture all contents of the remote schemas you have created. Otherwise, this command will only diff schema changes against the remote database, similar to running `db diff --linked`.

supabase db pull \[migration name] \[flags]

# CLI Reference

Push new migrations to the remote database

Pushes all local migrations to a remote database.

Requires your local project to be linked to a remote database by running `supabase link`. For self-hosted databases, you can pass in the connection parameters using `--db-url` flag.

The first time this command is run, a migration history table will be created under `supabase_migrations.schema_migrations`. After successfully applying a migration, a new row will be inserted into the migration history table with timestamp as its unique id. Subsequent pushes will skip migrations that have already been applied.

If you need to mutate the migration history table, such as deleting existing entries or inserting new entries without actually running the migration, use the `migration repair` command.

Use the `--dry-run` flag to view the list of changes before applying.

supabase db push \[flags]

# CLI Reference

Resets the local database to current migrations

Resets the local database to a clean state.

Requires the local development stack to be started by running `supabase start`.

Recreates the local Postgres container and applies all local migrations found in `supabase/migrations` directory. If test data is defined in `supabase/seed.sql`, it will be seeded after the migrations are run. Any other data or schema changes made during local development will be discarded.

When running db reset with `--linked` or `--db-url` flag, a SQL script is executed to identify and drop all user created entities in the remote database. Since Postgres roles are cluster level entities, any custom roles created through the dashboard or `supabase/roles.sql` will not be deleted by remote reset.

supabase db reset \[flags]

# CLI Reference

Dumps data or schemas from the remote database

Dumps contents from a remote database.

Requires your local project to be linked to a remote database by running `supabase link`. For self-hosted databases, you can pass in the connection parameters using `--db-url` flag.

Runs `pg_dump` in a container with additional flags to exclude Supabase managed schemas. The ignored schemas include auth, storage, and those created by extensions.

The default dump does not contain any data or custom roles. To dump those contents explicitly, specify either the `--data-only` and `--role-only` flag.

supabase db dump \[flags]

# CLI Reference

Diffs the local database for schema changes

Diffs schema changes made to the local or remote database.

Requires the local development stack to be running when diffing against the local database. To diff against a remote or self-hosted database, specify the `--linked` or `--db-url` flag respectively.

Runs [djrobstep/migra](https://github.com/djrobstep/migra) in a container to compare schema differences between the target database and a shadow database. The shadow database is created by applying migrations in local `supabase/migrations` directory in a separate container. Output is written to stdout by default. For convenience, you can also save the schema diff as a new migration file by passing in `-f` flag.

By default, all schemas in the target database are diffed. Use the `--schema public,extensions` flag to restrict diffing to a subset of schemas.

While the diff command is able to capture most schema changes, there are cases where it is known to fail. Currently, this could happen if you schema contains:

- Changes to publication
- Changes to storage buckets
- Views with `security_invoker` attributes

supabase db diff \[flags]

# CLI Reference

Checks local database for typing error

Lints local database for schema errors.

Requires the local development stack to be running when linting against the local database. To lint against a remote or self-hosted database, specify the `--linked` or `--db-url` flag respectively.

Runs `plpgsql_check` extension in the local Postgres container to check for errors in all schemas. The default lint level is `warning` and can be raised to error via the `--level` flag.

To lint against specific schemas only, pass in the `--schema` flag.

The `--fail-on` flag can be used to control when the command should exit with a non-zero status code. The possible values are:

- `none` (default): Always exit with a zero status code, regardless of lint results.
- `warning`: Exit with a non-zero status code if any warnings or errors are found.
- `error`: Exit with a non-zero status code only if errors are found.

This flag is particularly useful in CI/CD pipelines where you want to fail the build based on certain lint conditions.

supabase db lint \[flags]

# CLI Reference

Starts local Postgres database

supabase db start \[flags]

# CLI Reference

Manage database migration scripts

# CLI Reference

Create an empty migration script

Creates a new migration file locally.

A `supabase/migrations` directory will be created if it does not already exists in your current `workdir`. All schema migration files must be created in this directory following the pattern `<timestamp>_<name>.sql`.

Outputs from other commands like `db diff` may be piped to `migration new <name>` via stdin.

supabase migration new

# CLI Reference

List local and remote migrations

Lists migration history in both local and remote databases.

Requires your local project to be linked to a remote database by running `supabase link`. For self-hosted databases, you can pass in the connection parameters using `--db-url` flag.

> Note that URL strings must be escaped according to [RFC 3986](https://www.rfc-editor.org/rfc/rfc3986).

Local migrations are stored in `supabase/migrations` directory while remote migrations are tracked in `supabase_migrations.schema_migrations` table. Only the timestamps are compared to identify any differences.

In case of discrepancies between the local and remote migration history, you can resolve them using the `migration repair` command.

supabase migration list \[flags]

# CLI Reference

Fetch migration files from history table

supabase migration fetch \[flags]
