# Resources

{/\*  \*/}

```
  {
            [
              {
                title: 'Examples',
                hasLightIcon: true,
                href: '/guides/resources/examples',
                description: 'Official GitHub examples, curated content from the community, and more.',
              },
              {
                title: 'Glossary',
                hasLightIcon: true,
                href: '/guides/resources/glossary',
                description: 'Definitions for terminology and acronyms used in the Supabase documentation.',
              }
            ]
        .map((resource) => {
              return (
                <Link
                  href={`${resource.href}`}
                  key={resource.title}
                  className={'col-span-12 md:col-span-4'}
                  passHref
                >
                  
                    {resource.description}
                  
                
              )

        })}





  ### Migrate to Supabase



  {
            [
              {
                title: 'Auth0',
                icon: '/docs/img/icons/auth0-icon',
                href: '/guides/resources/migrating-to-supabase/auth0',
                description: 'Move your auth users from Auth0 to a Supabase project.',
                hasLightIcon: true,
              },
              {
                title: 'Firebase Auth',
                icon: '/docs/img/icons/firebase-icon',
                href: '/guides/resources/migrating-to-supabase/firebase-auth',
                description: 'Move your auth users from a Firebase project to a Supabase project.',
              },
              {
                title: 'Firestore Data',
                icon: '/docs/img/icons/firebase-icon',
                href: '/guides/resources/migrating-to-supabase/firestore-data',
                description: 'Migrate the contents of a Firestore collection to a single PostgreSQL table.',
              },
              {
                title: 'Firebase Storage',
                icon: '/docs/img/icons/firebase-icon',
                href: '/guides/resources/migrating-to-supabase/firebase-storage',
                description: 'Convert your Firebase Storage files to Supabase Storage.'
              },
              {
                title: 'Heroku',
                icon: '/docs/img/icons/heroku-icon',
                href: '/guides/resources/migrating-to-supabase/heroku',
                description: 'Migrate your Heroku Postgres database to Supabase.'
              },
              {
                title: 'Render',
                icon: '/docs/img/icons/render-icon',
                href: '/guides/resources/migrating-to-supabase/render',
                description: 'Migrate your Render Postgres database to Supabase.'
              },
              {
                title: 'Amazon RDS',
                icon: '/docs/img/icons/aws-rds-icon',
                href: '/guides/resources/migrating-to-supabase/amazon-rds',
                description: 'Migrate your Amazon RDS database to Supabase.'
              },
              {
                title: 'Postgres',
                icon: '/docs/img/icons/postgres-icon',
                href: '/guides/resources/migrating-to-supabase/postgres',
                description: 'Migrate your Postgres database to Supabase.'
              },
              {
                title: 'MySQL',
                icon: '/docs/img/icons/mysql-icon',
                href: '/guides/resources/migrating-to-supabase/mysql',
                description: 'Migrate your MySQL database to Supabase.'
              },
              {
                title: 'Microsoft SQL Server',
                icon: '/docs/img/icons/mssql-icon',
                href: '/guides/resources/migrating-to-supabase/mssql',
                description: 'Migrate your Microsoft SQL Server database to Supabase.'
              }
            ]
        .map((product) => {
              return (
                <Link
                  href={`${product.href}`}
                  key={product.title}
                  className={product.span ?? 'col-span-6 md:col-span-3'}
                  passHref
                >
                  
                    {product.description}
                  
                
              )

        })}





  ### Postgres resources



  {
            [
              {
                title: 'Managing Indexes',
                hasLightIcon: true,
                href: '/guides/database/postgres/indexes',
                description: 'Improve query performance using various index types in Postgres.'
              },
              {
                title: 'Cascade Deletes',
                hasLightIcon: true,
                href: '/guides/database/postgres/cascade-deletes',
                description: 'Understand the types of foreign key constraint deletes.'
              },
              {
                title: 'Drop all tables in schema',
                hasLightIcon: true,
                href: '/guides/database/postgres/dropping-all-tables-in-schema',
                description: 'Delete all tables in a given schema.'
              },
              {
                title: 'Select first row per group',
                hasLightIcon: true,
                href: '/guides/database/postgres/first-row-in-group',
                description: 'Retrieve the first row in each distinct group.'
              },
              {
                title: 'Print PostgreSQL version',
                hasLightIcon: true,
                href: '/guides/database/postgres/which-version-of-postgres',
                description: 'Find out which version of Postgres you are running.'
              }
            ]
        .map((resource) => {
              return (
                <Link
                  href={`${resource.href}`}
                  key={resource.title}
                  className={'col-span-12 md:col-span-4'}
                  passHref
                >
                  
                    {resource.description}
                  
                
              )

        })}
```

{/\* end of container \*/}

# Supabase Security

Supabase is a hosted platform which makes it very simple to get started without needing to manage any infrastructure. The hosted platform comes with many security and compliance controls managed by Supabase.

# Compliance

Supabase is SOC 2 Type 2 compliant and regularly audited. All projects at Supabase are governed by the same set of compliance controls.
The [SOC 2 Compliance Guide](/docs/guides/security/soc-2-compliance) explains Supabase's SOC 2 responsibilities and controls in more detail.

The [HIPAA Compliance Guide](/docs/guides/security/hipaa-compliance) explains Supabase's HIPAA responsibilities. Additional [security and compliance controls](/docs/guides/deployment/shared-responsibility-model#managing-healthcare-data) for projects that deal with electronic Protected Health Information (ePHI) and require HIPAA compliance are available through the HIPAA add-on.

# Platform configuration

As a hosted platform, Supabase provides additional security controls to further enhance the security posture depending on organizations' own requirements or obligations.

These can be found under the [dedicated security page](/dashboard/org/_/security) under organization settings. And are described in greater detail [here](/docs/guides/security/platform-security).

# Product configuration

Each product offered by Supabase comes with customizable security controls and these security controls help ensure that applications built on Supabase are secure, compliant, and resilient against various threats.

The [security configuration guides](/docs/guides/security/product-security) provide detailed information for configuring individual products.
