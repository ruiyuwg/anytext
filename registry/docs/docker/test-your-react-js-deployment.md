When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[React.js language-specific guide](https://docs.docker.com/guides/reactjs/)

This guide explains how to containerize React.js applications using Docker.

![](https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg "JavaScript") JavaScript

20 minutes

[1](https://docs.docker.com/guides/reactjs/containerize/)

[Containerize](https://docs.docker.com/guides/reactjs/containerize/)

[2](https://docs.docker.com/guides/reactjs/develop/)

[Develop your app](https://docs.docker.com/guides/reactjs/develop/)

[3](https://docs.docker.com/guides/reactjs/run-tests/)

[Run your tests](https://docs.docker.com/guides/reactjs/run-tests/)

[4](https://docs.docker.com/guides/reactjs/configure-github-actions/)

[Automate your builds with GitHub Actions](https://docs.docker.com/guides/reactjs/configure-github-actions/)

[5](https://docs.docker.com/guides/reactjs/deploy/)

[Test your deployment](https://docs.docker.com/guides/reactjs/deploy/)

[« Back to all guides](/guides/)

# Test your React.js deployment

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Prerequisites](#prerequisites)

Before you begin, make sure you’ve completed the following:

- Complete all the previous sections of this guide, starting with [Containerize React.js application](https://docs.docker.com/guides/reactjs/containerize/).
- [Enable Kubernetes](https://docs.docker.com/desktop/use-desktop/kubernetes/#enable-kubernetes) in Docker Desktop.

> **New to Kubernetes?**\
> Visit the [Kubernetes basics tutorial](https://kubernetes.io/docs/tutorials/kubernetes-basics/) to get familiar with how clusters, pods, deployments, and services work.

***

## [Overview](#overview)

This section guides you through deploying your containerized React.js application locally using [Docker Desktop’s built-in Kubernetes](/desktop/kubernetes/). Running your app in a local Kubernetes cluster allows you to closely simulate a real production environment, enabling you to test, validate, and debug your workloads with confidence before promoting them to staging or production.

***

## [Create a Kubernetes YAML file](#create-a-kubernetes-yaml-file)

Follow these steps to define your deployment configuration:

1. In the root of your project, create a new file named: reactjs-sample-kubernetes.yaml

2. Open the file in your IDE or preferred text editor.

3. Add the following configuration, and be sure to replace `{DOCKER_USERNAME}` and `{DOCKERHUB_PROJECT_NAME}` with your actual Docker Hub username and repository name from the previous [Automate your builds with GitHub Actions](https://docs.docker.com/guides/reactjs/configure-github-actions/).

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: reactjs-sample
  namespace: default
spec:
  replicas: 1
  selector:
    matchLabels:
      app: reactjs-sample
  template:
    metadata:
      labels:
        app: reactjs-sample
    spec:
      containers:
        - name: reactjs-container
          image: {DOCKER_USERNAME}/{DOCKERHUB_PROJECT_NAME}:latest
          imagePullPolicy: Always
          ports:
            - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name:  reactjs-sample-service
  namespace: default
spec:
  type: NodePort
  selector:
    app:  reactjs-sample
  ports:
    - port: 8080
      targetPort: 8080
      nodePort: 30001
```

This manifest defines two key Kubernetes resources, separated by `---`:

- Deployment Deploys a single replica of your React.js application inside a pod. The pod uses the Docker image built and pushed by your GitHub Actions CI/CD workflow\
  (refer to [Automate your builds with GitHub Actions](https://docs.docker.com/guides/reactjs/configure-github-actions/)).\
  The container listens on port `8080`, which is typically used by [Nginx](https://nginx.org/en/docs/) to serve your production React app.

- Service (NodePort) Exposes the deployed pod to your local machine.\
  It forwards traffic from port `30001` on your host to port `8080` inside the container.\
  This lets you access the application in your browser at <http://localhost:30001>.

> Note
>
> To learn more about Kubernetes objects, see the [Kubernetes documentation](https://kubernetes.io/docs/home/).

***

## [Deploy and check your application](#deploy-and-check-your-application)

Follow these steps to deploy your containerized React.js app into a local Kubernetes cluster and verify that it’s running correctly.

### [Step 1. Apply the Kubernetes configuration](#step-1-apply-the-kubernetes-configuration)

In your terminal, navigate to the directory where your `reactjs-sample-kubernetes.yaml` file is located, then deploy the resources using:

```console
  $ kubectl apply -f reactjs-sample-kubernetes.yaml
```

If everything is configured properly, you’ll see confirmation that both the Deployment and the Service were created:

```shell
  deployment.apps/reactjs-sample created
  service/reactjs-sample-service created
```

This output means that both the Deployment and the Service were successfully created and are now running inside your local cluster.

### [Step 2. Check the Deployment status](#step-2-check-the-deployment-status)

Run the following command to check the status of your deployment:

```console
  $ kubectl get deployments
```

You should see an output similar to:

```shell
  NAME                 READY   UP-TO-DATE   AVAILABLE   AGE
  reactjs-sample       1/1     1            1           14s
```

This confirms that your pod is up and running with one replica available.

### [Step 3. Verify the Service exposure](#step-3-verify-the-service-exposure)

Check if the NodePort service is exposing your app to your local machine:

```console
$ kubectl get services
```

You should see something like:

```shell
NAME                     TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
reactjs-sample-service   NodePort    10.100.244.65    <none>        8080:30001/TCP   1m
```

This output confirms that your app is available via NodePort on port 30001.

### [Step 4. Access your app in the browser](#step-4-access-your-app-in-the-browser)

Open your browser and navigate to <http://localhost:30001>.

You should see your production-ready React.js Sample application running — served by your local Kubernetes cluster.

### [Step 5. Clean up Kubernetes resources](#step-5-clean-up-kubernetes-resources)

Once you're done testing, you can delete the deployment and service using:

```console
  $ kubectl delete -f reactjs-sample-kubernetes.yaml
```

Expected output:

```shell
  deployment.apps "reactjs-sample" deleted
  service "reactjs-sample-service" deleted
```

This ensures your cluster stays clean and ready for the next deployment.

***

## [Summary](#summary)

In this section, you learned how to deploy your React.js application to a local Kubernetes cluster using Docker Desktop. This setup allows you to test and debug your containerized app in a production-like environment before deploying it to the cloud.

What you accomplished:

- Created a Kubernetes Deployment and NodePort Service for your React.js app
- Used `kubectl apply` to deploy the application locally
- Verified the app was running and accessible at `http://localhost:30001`
- Cleaned up your Kubernetes resources after testing

***

## [Related resources](#related-resources)

Explore official references and best practices to sharpen your Kubernetes deployment workflow:

- [Kubernetes documentation](https://kubernetes.io/docs/home/) – Learn about core concepts, workloads, services, and more.
- [Deploy on Kubernetes with Docker Desktop](https://docs.docker.com/desktop/use-desktop/kubernetes/) – Use Docker Desktop’s built-in Kubernetes support for local testing and development.
- [`kubectl` CLI reference](https://kubernetes.io/docs/reference/kubectl/) – Manage Kubernetes clusters from the command line.
- [Kubernetes Deployment resource](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) – Understand how to manage and scale applications using Deployments.
- [Kubernetes Service resource](https://kubernetes.io/docs/concepts/services-networking/service/) – Learn how to expose your application to internal and external traffic.

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/reactjs/deploy.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2freactjs%2fdeploy%2f\&labels=status%2Ftriage)

Table of contents
