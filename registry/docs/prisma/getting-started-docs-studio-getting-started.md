# Getting Started (/docs/studio/getting-started)

Installation \[#installation]

Prisma Studio comes bundled with the Prisma CLI. To get started, make sure you have Node.js installed, then install the Prisma CLI:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install -g prisma
```



```bash
pnpm add -g prisma
```



```bash
yarn global add prisma
```



```bash
bun add --global prisma
```
````

Launching Studio \[#launching-studio]

With a Prisma Project \[#with-a-prisma-project]

If you have an existing Prisma project, navigate to your project directory and run:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma studio
```



```bash
pnpm dlx prisma studio
```



```bash
yarn dlx prisma studio
```



```bash
bunx --bun prisma studio
```
````

This will start the Studio server and open it in your default browser at `http://localhost:5555`.

Without a Prisma Project \[#without-a-prisma-project]

You can also use Studio with any database by providing a connection string:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma studio --url="postgresql://user:password@localhost:5432/yourdb"
```



```bash
pnpm dlx prisma studio --url="postgresql://user:password@localhost:5432/yourdb"
```



```bash
yarn dlx prisma studio --url="postgresql://user:password@localhost:5432/yourdb"
```



```bash
bunx --bun prisma studio --url="postgresql://user:password@localhost:5432/yourdb"
```
````

Connecting to Your Database \[#connecting-to-your-database]

1. **Using environment variables**:
   Create a `.env` file in your project root with your database URL:

   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/yourdb"
   ```

   Then run: `npx prisma studio`

2. **Using command line**:
   ```bash
   npx prisma studio --url="your-database-connection-string"
   ```

Basic Usage \[#basic-usage]

Browsing Data \[#browsing-data]

- The left sidebar lists all your database tables
- Click on a table to view its data
- Use the search bar to quickly find tables or columns

Editing Data \[#editing-data]

- **Edit cells**: Double-click any cell to edit its value
- **Add records**: Click the "+" button to add a new record
- **Delete records**: Select records using checkboxes and click the trash icon

Filtering and Sorting \[#filtering-and-sorting]

- Click the filter icon to add filters
- Click on column headers to sort the table
- Use the search box to filter records by any field

Common Tasks \[#common-tasks]

Viewing Table Relationships \[#viewing-table-relationships]

- Related tables are shown as expandable rows
- Click the "+" icon to view related records

Exporting Data \[#exporting-data]

- Use the export button to download data as CSV or JSON
- Select specific columns to include in the export

Next Steps \[#next-steps]

- Learn how to [embed Studio in your application](/studio/integrations/embedding)
- Discover [VS Code integration](/studio/integrations/vscode-integration) features

# Prisma Studio (/docs/studio)

[Prisma Studio](https://www.prisma.io/studio) works with or without Prisma ORM and supports the following workflows:

- Viewing and editing data in a spreadsheet-like interface
- Real-time schema introspection
- Embedding directly into your Next.js applications
- VS Code integration for in-editor database management

Supported databases \[#supported-databases]

- PostgreSQL
- MySQL
- SQLite

Quick start \[#quick-start]

````
  npm



  pnpm



  yarn



  bun




```bash
# With Prisma project
npx prisma studio

# With direct database connection
npx prisma studio --url="postgresql://user:password@localhost:5432/dbname"
```



```bash
# With Prisma project
pnpm dlx prisma studio

# With direct database connection
pnpm dlx prisma studio --url="postgresql://user:password@localhost:5432/dbname"
```



```bash
# With Prisma project
yarn dlx prisma studio

# With direct database connection
yarn dlx prisma studio --url="postgresql://user:password@localhost:5432/dbname"
```



```bash
# With Prisma project
bun x prisma studio

# With direct database connection
bun x prisma studio --url="postgresql://user:password@localhost:5432/dbname"
```
````

Getting started \[#getting-started]

- [Getting Started](/studio/getting-started) - Learn how to set up and use Prisma Studio to manage your database
- [Embed Studio](/studio/integrations/embedding) - Learn how to embed Prisma Studio in your own applications
- [Studio in VS Code](/studio/integrations/vscode-integration) - Learn how to use Prisma Studio directly in VS Code
