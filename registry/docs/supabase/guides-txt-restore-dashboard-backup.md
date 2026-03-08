# Restore Dashboard backup

Learn how to restore your dashboard backup to a new Supabase project

## Before you begin

````
        <StepHikeCompact.Step step={1}>
          <StepHikeCompact.Details title="Install Postgres" fullWidth>
            Download and run the installation file for the latest version from the [Postgres installer download page](https://www.postgresql.org/download/windows/).
          </StepHikeCompact.Details>
        </StepHikeCompact.Step>

        <StepHikeCompact.Step step={2}>
          <StepHikeCompact.Details title="Add Postgres to your system PATH" fullWidth>
            Add the Postgres binary to your system PATH.

            In Control Panel, under the Advanced tab of System Properties, click Environment Variables. Edit the Path variable by adding the path to the SQL binary you just installed.

            The path will look something like this, though it may differ slightly depending on your installed version:

            ```
            C:\Program Files\PostgreSQL\17\bin
            ```
          </StepHikeCompact.Details>
        </StepHikeCompact.Step>

        <StepHikeCompact.Step step={3}>
          <StepHikeCompact.Details title="Verify that psql is working" fullWidth>
            Open your terminal and run the following command:

            ```sh
            psql --version
            ```

            
              If you get an error that psql is not available or cannot be found, check that you have correctly added the binary to your system PATH. Also try restarting your terminal.
            
          </StepHikeCompact.Details>
        </StepHikeCompact.Step>
      
    

    
      
        <StepHikeCompact.Step step={1}>
          <StepHikeCompact.Details title="Install Homebrew" fullWidth>
            Install [Homebrew](https://brew.sh/).
          </StepHikeCompact.Details>
        </StepHikeCompact.Step>

        <StepHikeCompact.Step step={2}>
          <StepHikeCompact.Details title="Install Postgres" fullWidth>
            Install Postgres via Homebrew by running the following command in your terminal:

            ```sh
            brew install postgresql@17
            ```
          </StepHikeCompact.Details>
        </StepHikeCompact.Step>

        <StepHikeCompact.Step step={3}>
          <StepHikeCompact.Details title="Verify that psql is working" fullWidth>
            Restart your terminal and run the following command:

            ```sh
            psql --version
            ```

            If you get an error that psql is not available or cannot be found then the PATH variable is likely either not correctly set or you need to restart your terminal.

            You can add the Postgres installation path to your PATH variable by running the following command:

            ```sh
            brew info postgresql@17
            ```

            The above command will give an output like this:

            ```sh
            If you need to have postgresql@17 first in your PATH, run:

            echo 'export PATH="/opt/homebrew/opt/postgresql@17/bin:$PATH"' >> ~/.zshrc
            ```

            Run the command mentioned and restart the terminal.
          </StepHikeCompact.Details>
        </StepHikeCompact.Step>
      
    
  





  
    <StepHikeCompact.Step step={1}>
      <StepHikeCompact.Details title="Create New project" fullWidth>
        Create a new [Supabase project](https://database.new)
      </StepHikeCompact.Details>
    </StepHikeCompact.Step>

    <StepHikeCompact.Step step={2}>
      <StepHikeCompact.Details title="Configure your new project" fullWidth>
        In your new project:

        *   If you were using Webhooks, enable [Database Webhooks](/dashboard/project/_/database/hooks).
        *   If you were using any extensions, enable the [Extensions](/dashboard/project/_/database/extensions).
        *   If you were using Replication for Realtime, enable [Publication](/dashboard/project/_/database/publications) where needed.
      </StepHikeCompact.Details>
    </StepHikeCompact.Step>
  
````

## Things to keep in mind

Here are some things that are not stored directly in your database and will require you to re-create or setup on the new project:

- Edge Functions
- Auth Settings and API keys
- Realtime settings
- Database extensions and settings
- Read Replicas

## Restore backup

\<StepHikeCompact.Step step={1}>
\<StepHikeCompact.Details title="Get the new database connection string" fullWidth>
On your project dashboard, click [Connect](/dashboard/project/_?showConnect=true).

````
    Use the [Session pooler](/dashboard/project/_?showConnect=true\&method=session) connection string by default. If your ISP supports IPv6 or you have the IPv4 add-on enabled, use the direct connection string.
  

  Session pooler connection string:

  ```bash
    postgresql://postgres.[PROJECT-REF]:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:5432/postgres
  ```

  Direct connection string:

  ```bash
    postgresql://postgres.[PROJECT-REF]:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.com:5432/postgres
  ```
</StepHikeCompact.Details>
````

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={2}>
\<StepHikeCompact.Details title="Get the database password" fullWidth>

```
    It can take a few minutes for the database password reset to take effect. Especially if multiple password resets are done.
  

  Reset the password in the [Database Settings](/dashboard/project/_/database/settings).

  Replace `[YOUR-PASSWORD]` in the connection string with the database password.
</StepHikeCompact.Details>
```

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={3}>
\<StepHikeCompact.Details title="Get the backup file path" fullWidth>
Get the relative file path of the downloaded backup file.

```
  If the restore is done in the same directory as the downloaded backup, the file path would look like this:

  `./backup_name.backup`
</StepHikeCompact.Details>
```

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={4}>
\<StepHikeCompact.Details title="Verify the backup file format" fullWidth>
The backup file will be gzipped with a .gz extension. You will need to unzip the file to look like this:

```
  `backup_name.backup`
</StepHikeCompact.Details>
```

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={5}>
\<StepHikeCompact.Details title="Restore your backup" fullWidth>
\<StepHikeCompact.Code>
`sql
        psql -d [CONNECTION_STRING] -f /file/path
        `
\</StepHikeCompact.Code>

```
  Replace `[CONNECTION_STRING]` with connection string from Steps 1 & 2.

  Replace `/file/path` with the file path from Step 3.

  Run the command with the replaced values to restore the backup to your new project.
</StepHikeCompact.Details>
```

\</StepHikeCompact.Step>

## Migrate storage objects to new project's S3 storage

After restoring the backup, the buckets and files metadata will show up in the dashboard of the new project.
However, the storage files stored in the S3 buckets would not be present.

Use the following Google Colab script provided below to migrate your downloaded storage objects to your new project's S3 buckets.

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/PLyn/supabase-storage-migrate/blob/main/Supabase_Storage_migration.ipynb)

This method requires uploading to Google Colab and then to the S3 buckets. This could add significant upload time if there are large storage objects.

## Common errors with the backup restore process

"**object already exists**"
"**constraint x for relation y already exists**"
"**Many other variations of errors**"

These errors are expected when restoring to a new Supabase project. The backup from the dashboard is a full dump which contains the CREATE commands for all schemas. This is by design as the full dump allows you to rebuild the entire database from scratch even outside of Supabase.

One side effect of this method is that a new Supabase project has these commands already applied to schemas like storage and auth. The errors from this are not an issue because it skips to the next command to run. Another side effect of this is that all triggers will run during the restoration process which is not ideal but generally is not a problem.

There are circumstances where this method can fail and if it does, you should reach out to Supabase support for help.

"**psql: error: connection to server at "aws-0-us-east-1.pooler.supabase.com" (44.216.29.125), port 5432 failed: received invalid response to GSSAPI negotiation:**"

You are possibly using psql and Postgres version 15 or lower. Completely remove the Postgres installation and install the latest version as per the instructions above to resolve this issue.

"**psql: error: connection to server at "aws-0-us-east-1.pooler.supabase.com" (44.216.29.125), port 5432 failed: error received from server in SCRAM exchange: Wrong password**"

If the database password was reset, it may take a few minutes for it to reflect. Try again after a few minutes if you did a password reset.
