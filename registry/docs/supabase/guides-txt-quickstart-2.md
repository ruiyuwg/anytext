# Quickstart

Job names are case sensitive and cannot be edited once created.

Attempting to create a second Job with the same name (and case) will overwrite the first Job.

## Schedule a job

````
1.  Go to the [Jobs](/dashboard/project/_/integrations/cron/jobs) section to schedule your first Job.
2.  Click on `Create job` button or navigate to the new Cron Job form [here](/dashboard/project/_/integrations/cron/jobs?new=true).
3.  Name your Cron Job.
4.  Choose a schedule for your Job by inputting cron syntax (refer to the syntax chart in the form) or natural language.
5.  Input SQL snippet or select a Database function, HTTP request, or Supabase Edge Function.



```sql
-- Cron Job name cannot be edited
select cron.schedule('permanent-cron-job-name', '30 seconds', 'CALL do_something()');
```






  ```
  ┌───────────── min (0 - 59)
  │ ┌────────────── hour (0 - 23)
  │ │ ┌─────────────── day of month (1 - 31)
  │ │ │ ┌──────────────── month (1 - 12)
  │ │ │ │ ┌───────────────── day of week (0 - 6) (0 to 6 are Sunday to
  │ │ │ │ │                  Saturday, or use names; 7 is also Sunday)
  │ │ │ │ │
  │ │ │ │ │
  * * * * *
  ```

  You can use \[1-59] seconds (e.g. `30 seconds`) as the cron syntax to schedule sub-minute Jobs.
````

You can input seconds for your Job schedule interval as long as you're on Postgres version 15.1.1.61 or later.

## Edit a job

````
1.  Go to the [Jobs](/dashboard/project/_/integrations/cron/jobs) section and find the Job you'd like to edit.
2.  Click on the three vertical dots menu on the right side of the Job and click `Edit cron job`.
3.  Make your changes and then click `Save cron job`.



```sql
select cron.alter_job(
  job_id := (select jobid from cron.job where jobname = 'permanent-cron-job-name'),
  schedule := '*/5 * * * *'
);
```

Full options for the `cron.alter_job()` function are:

```sql
cron.alter_job(
  job_id bigint,
  schedule text default null,
  command text default null,
  database text default null,
  username text default null,
  active boolean default null
)
```

It is also possible to modify a job by using the `cron.schedule()` function by inputting the same job name. This will replace the existing job via upsert.
````

## Activate/Deactivate a job

````
1.  Go to the [Jobs](/dashboard/project/_/integrations/cron/jobs) section and find the Job you'd like to unschedule.
2.  Toggle the `Active`/`Inactive` switch next to Job name.



```sql
-- Activate Job
select cron.alter_job(
  job_id := (select jobid from cron.job where jobname = 'permanent-cron-job-name'),
  active := true
);

-- Deactivate Job
select cron.alter_job(
  job_id := (select jobid from cron.job where jobname = 'permanent-cron-job-name'),
  active := false
);
```
````

## Unschedule a job

````
1.  Go to the [Jobs](/dashboard/project/_/integrations/cron/jobs) section and find the Job you'd like to delete.
2.  Click on the three vertical dots menu on the right side of the Job and click `Delete cron job`.
3.  Confirm deletion by entering the Job name.



```sql
select cron.unschedule('permanent-cron-job-name');
```


  Unscheduling a Job will permanently delete the Job from `cron.job` table but its run history remain in `cron.job_run_details` table.
````

## Inspecting job runs

````
1.  Go to the [Jobs](/dashboard/project/_/integrations/cron/jobs) section and find the Job you want to see the runs of.
2.  Click on the `History` button next to the Job name.



```sql
select
  *
from cron.job_run_details
where jobid = (select jobid from cron.job where jobname = 'permanent-cron-job-name')
order by start_time desc
limit 10;
```


  The records in the `cron.job_run_details` table are not cleaned up automatically. They are also not removed when jobs are unscheduled, which will take up disk space in your database.
````

## Examples

### Delete data every week

{/\*  \*/}

Delete old data every Saturday at 3:30AM (GMT):

{/\*  \*/}

```sql
select cron.schedule (
  'saturday-cleanup', -- name of the cron job
  '30 3 * * 6', -- Saturday at 3:30AM (GMT)
  $$ delete from events where event_time < now() - interval '1 week' $$
);
```

### Run a vacuum every day

{/\*  \*/}

Vacuum every day at 3:00AM (GMT):

{/\*  \*/}

```sql
select cron.schedule('nightly-vacuum', '0 3 * * *', 'VACUUM');
```

### Call a database function every 5 minutes

Create a [`hello_world()`](/docs/guides/database/functions?language=sql#simple-functions) database function and then call it every 5 minutes:

```sql
select cron.schedule('call-db-function', '*/5 * * * *', 'SELECT hello_world()');
```

### Call a database stored procedure

To use a stored procedure, you can call it like this:

```sql
select cron.schedule('call-db-procedure', '*/5 * * * *', 'CALL my_procedure()');
```

### Invoke Supabase Edge Function every 30 seconds

Make a POST request to a Supabase Edge Function every 30 seconds:

```sql
select
  cron.schedule(
    'invoke-function-every-half-minute',
    '30 seconds',
    $$
    select
      net.http_post(
          url:='https://project-ref.supabase.co/functions/v1/function-name',
          headers:=jsonb_build_object('Content-Type','application/json', 'Authorization', 'Bearer ' || 'YOUR_ANON_KEY'),
          body:=jsonb_build_object('time', now() ),
          timeout_milliseconds:=5000
      ) as request_id;
    $$
  );
```

This requires the [`pg_net` extension](/docs/guides/database/extensions/pg_net) to be enabled.

## Caution: Scheduling system maintenance

Be extremely careful when setting up Jobs for system maintenance tasks as they can have unintended consequences.

For instance, scheduling a command to terminate idle connections with `pg_terminate_backend(pid)` can disrupt critical background processes like nightly backups. Often, there is an existing Postgres setting, such as `idle_session_timeout`, that can perform these common maintenance tasks without the risk.

Reach out to [Supabase Support](/support) if you're unsure if that applies to your use case.
