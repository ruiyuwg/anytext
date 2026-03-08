# Supabase CLI

Develop locally, deploy to the Supabase Platform, and set up CI/CD workflows

The Supabase CLI enables you to run the entire Supabase stack locally, on your machine or in a CI environment. With just two commands, you can set up and start a new local project:

1. `supabase init` to create a new local project
2. `supabase start` to launch the Supabase services

## Installing the Supabase CLI

````
Install the CLI with [Homebrew](https://brew.sh):

```sh
brew install supabase/tap/supabase
```



Install the CLI with [Scoop](https://scoop.sh):

```powershell
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase
```



The CLI is available through [Homebrew](https://brew.sh) and Linux packages.

#### Homebrew

```sh
brew install supabase/tap/supabase
```

#### Linux packages

Linux packages are provided in [Releases](https://github.com/supabase/cli/releases).
To install, download the `.apk`/`.deb`/`.rpm` file depending on your package manager
and run one of the following:

*   `sudo apk add --allow-untrusted <...>.apk`
*   `sudo dpkg -i <...>.deb`
*   `sudo rpm -i <...>.rpm`



Run the CLI by prefixing each command with `npx` or `bunx`:

```sh
npx supabase --help
```


  The Supabase CLI requires **Node.js 20 or later** when run via `npx` or `npm`. Older Node.js versions, such as 16, are not supported and fail to start the CLI.


You can also install the CLI as dev dependency via [npm](https://www.npmjs.com/package/supabase):

```sh
npm install supabase --save-dev
```
````

## Updating the Supabase CLI

When a new [version](https://github.com/supabase/cli/releases) is released, you can update the CLI using the same methods.

````
```sh
brew upgrade supabase
```



```powershell
scoop update supabase
```



#### Homebrew

```sh
brew upgrade supabase
```

#### Linux package manager

1.  Download the latest package from the [Supabase CLI releases page](https://github.com/supabase/cli/releases/latest)
2.  Install the package using the same commands as the [initial installation](#linux-packages):
    *   `sudo apk add --allow-untrusted <...>.apk`
    *   `sudo dpkg -i <...>.deb`
    *   `sudo rpm -i <...>.rpm`



If you have installed the CLI as dev dependency via [npm](https://www.npmjs.com/package/supabase), you can update it with:

```sh
npm update supabase --save-dev
```
````

If you have any Supabase containers running locally, stop them and delete their data volumes before proceeding with the upgrade. This ensures that Supabase managed services can apply new migrations on a clean state of the local database.

Remember to save any local schema and data changes before stopping because the `--no-backup` flag will delete them.

```sh
supabase db diff -f my_schema
supabase db dump --local --data-only > supabase/seed.sql
supabase stop --no-backup
```

## Running Supabase locally

The Supabase CLI uses Docker containers to manage the local development stack. Follow the official guide to install and configure [Docker Desktop](https://docs.docker.com/desktop):

```
<Image
  alt="Docker settings on Mac: Select Integrated, Virtualization Framework, and osxfs"
  src={{
dark: '/docs/img/guides/cli/docker-mac.png',
light: '/docs/img/guides/cli/docker-mac-light.png',
```

}}
width={2880}
height={1800}
/>

```
<Image
  alt="Docker settings on Windows: Select Integrated, Expose Daemon, WSL2, and Add to /etc/hosts file."
  src={{
dark: '/docs/img/guides/cli/docker-win.png',
light: '/docs/img/guides/cli/docker-win-light.png',
```

}}
width={2560}
height={1520}
/>

Alternately, you can use a different container tool that offers Docker compatible APIs.

- [Rancher Desktop](https://rancherdesktop.io/) (macOS, Windows, Linux)
- [Podman](https://podman.io/) (macOS, Windows, Linux)
- [OrbStack](https://orbstack.dev/) (macOS)
- [colima](https://github.com/abiosoft/colima) (macOS)

Inside the folder where you want to create your project, run:

```bash
supabase init
```

This will create a new `supabase` folder. It's safe to commit this folder to your version control system.

Now, to start the Supabase stack, run:

```bash
supabase start
```

This takes time on your first run because the CLI needs to download the Docker images to your local machine. The CLI includes the entire Supabase toolset, and a few additional images that are useful for local development (like a local SMTP server and a database diff tool).

## Access your project's services

Once all of the Supabase services are running, you'll see output containing your local Supabase credentials. It should look like this, with urls and keys that you'll use in your local project:

```

Started supabase local development setup.

         API URL: http://localhost:54321
          DB URL: postgresql://postgres:postgres@localhost:54322/postgres
      Studio URL: http://localhost:54323
     Mailpit URL: http://localhost:54324
        anon key: eyJh......
service_role key: eyJh......

```

````
```sh
# Default URL:
http://localhost:54323
```

The local development environment includes Supabase Studio, a graphical interface for working with your database.

![Local Studio](/docs/img/guides/cli/local-studio.png)



```sh
# Default URL:
postgresql://postgres:postgres@localhost:54322/postgres
```

The local Postgres instance can be accessed through [`psql`](https://www.postgresql.org/docs/current/app-psql.html) or any other Postgres client, such as [pgAdmin](https://www.pgadmin.org/). For example:

```bash
psql 'postgresql://postgres:postgres@localhost:54322/postgres'
```


  To access the database from an edge function in your local Supabase setup, replace `localhost` with `host.docker.internal`.




```sh
# Default URL:
http://localhost:54321
```

If you are accessing these services without the client libraries, you may need to pass the client keys as an `Authorization` header. Learn more about [JWT headers](/docs/learn/auth-deep-dive/auth-deep-dive-jwts).

```sh
curl 'http://localhost:54321/rest/v1/' \
    -H "apikey: " \
    -H "Authorization: Bearer "

http://localhost:54321/rest/v1/           # REST (PostgREST)
http://localhost:54321/realtime/v1/       # Realtime
http://localhost:54321/storage/v1/        # Storage
http://localhost:54321/auth/v1/           # Auth (GoTrue)
```


  `<anon key>` is provided when you run the command `supabase start`.




Local logs rely on the Supabase Analytics Server which accesses the docker logging driver by either volume mounting `/var/run/docker.sock` domain socket on Linux and macOS, or exposing `tcp://localhost:2375` daemon socket on Windows. These settings must be configured manually after [installing](/docs/guides/cli/getting-started#installing-the-supabase-cli) the Supabase CLI.


  For advanced logs analysis using the Logs Explorer, it is advised to use the BigQuery backend instead of the default Postgres backend. Read about the steps [here](/docs/reference/self-hosting-analytics/introduction#bigquery).


All logs will be stored in the local database under the `_analytics` schema.
````

## Stopping local services

When you are finished working on your Supabase project, you can stop the stack (without resetting your local database):

```bash
supabase stop
```

## Learn more

- [CLI configuration](/docs/guides/local-development/cli/config)
- [CLI reference](/docs/reference/cli)
