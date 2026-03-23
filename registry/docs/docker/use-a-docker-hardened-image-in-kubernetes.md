When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Use a Docker Hardened Image in Kubernetes

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Authentication](#authentication)

To be able to use Docker Hardened Images in Kubernetes, you need to create a Kubernetes secret for pulling images from your mirror or internal registry.

> Note
>
> You need to create this secret in each Kubernetes namespace that uses a DHI.

Create a secret using a Personal Access Token (PAT). Ensure the token has at least read-only access to public repositories. For Docker Hardened Images replace `<registry server>` with `dhi.io`. If you are using a mirrored repository, replace it with your mirror's registry server, such as `docker.io` for Docker Hub.

```console
$ kubectl create -n <kubernetes namespace> secret docker-registry <secret name> --docker-server=<registry server> \
        --docker-username=<registry user> --docker-password=<access token> \
        --docker-email=<registry email>
```

To tests the secrets use the following command:

```console
kubectl apply --wait -f - <<EOF
apiVersion: v1
kind: Pod
metadata:
  name: dhi-test
  namespace: <kubernetes namespace>
spec:
  containers:
  - name: test
    image: bash:5
    command: [ "sh", "-c", "echo 'Hello from DHI in Kubernetes!'" ]
  imagePullSecrets:
  - name: <secret name>
EOF
```

Get the status of the pod by running:

```console
$ kubectl get -n <kubernetes namespace> pods/dhi-test
```

The command should return the following result:

```console
NAME       READY   STATUS      RESTARTS     AGE
dhi-test   0/1     Completed   ...          ...
```

If instead, the result is the following, there might be an issue with your secret.

```console
NAME       READY   STATUS         RESTARTS   AGE
dhi-test   0/1     ErrImagePull   0          ...
```

Verify the output of the pod by running, which should return `Hello from DHI in Kubernetes!`

```console
kubectl logs -n <kubernetes namespace> pods/dhi-test
```

After a successful test, the test pod can be deleted with the following command:

```console
$ kubectl delete -n <kubernetes namespace> pods/dhi-test
```

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/dhi/how-to/k8s.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdhi%2fhow-to%2fk8s%2f\&labels=status%2Ftriage)

Table of contents
