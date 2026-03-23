When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Deploy a service to the swarm

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

***

After you [create a swarm](https://docs.docker.com/engine/swarm/swarm-tutorial/create-swarm/), you can deploy a service to the swarm. For this tutorial, you also [added worker nodes](https://docs.docker.com/engine/swarm/swarm-tutorial/add-nodes/), but that is not a requirement to deploy a service.

1. Open a terminal and ssh into the machine where you run your manager node. For example, the tutorial uses a machine named `manager1`.

2. Run the following command:

   ```console
   $ docker service create --replicas 1 --name helloworld alpine ping docker.com

   9uk4639qpg7npwf3fn2aasksr
   ```

   - The `docker service create` command creates the service.
   - The `--name` flag names the service `helloworld`.
   - The `--replicas` flag specifies the desired state of 1 running instance.
   - The arguments `alpine ping docker.com` define the service as an Alpine Linux container that executes the command `ping docker.com`.

3. Run `docker service ls` to see the list of running services:

   ```console
   $ docker service ls

   ID            NAME        SCALE  IMAGE   COMMAND
   9uk4639qpg7n  helloworld  1/1    alpine  ping docker.com
   ```

## [Next steps](#next-steps)

Now you're ready to inspect the service.

[Inspect the service](https://docs.docker.com/engine/swarm/swarm-tutorial/inspect-service/)

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/engine/swarm/swarm-tutorial/deploy-service.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fengine%2fswarm%2fswarm-tutorial%2fdeploy-service%2f\&labels=status%2Ftriage)
