When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Verify repository client with certificates

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

In [Running Docker with HTTPS](https://docs.docker.com/engine/security/protect-access/), you learned that, by default, Docker runs via a non-networked Unix socket and TLS must be enabled in order to have the Docker client and the daemon communicate securely over HTTPS. TLS ensures authenticity of the registry endpoint and that traffic to/from registry is encrypted.

This article demonstrates how to ensure the traffic between the Docker registry server and the Docker daemon (a client of the registry server) is encrypted and properly authenticated using certificate-based client-server authentication.

We show you how to install a Certificate Authority (CA) root certificate for the registry and how to set the client TLS certificate for verification.

## [Understand the configuration](#understand-the-configuration)

A custom certificate is configured by creating a directory under `/etc/docker/certs.d` using the same name as the registry's hostname, such as `localhost`. All `*.crt` files are added to this directory as CA roots.

> Note
>
> On Linux any root certificates authorities are merged with the system defaults, including the host's root CA set. If you are running Docker on Windows Server, or Docker Desktop for Windows with Windows containers, the system default certificates are only used when no custom root certificates are configured.

The presence of one or more `<filename>.key/cert` pairs indicates to Docker that there are custom certificates required for access to the desired repository.

> Note
>
> If multiple certificates exist, each is tried in alphabetical order. If there is a 4xx-level or 5xx-level authentication error, Docker continues to try with the next certificate.

The following illustrates a configuration with custom certificates:

```text
    /etc/docker/certs.d/        <-- Certificate directory
    └── localhost:5000          <-- Hostname:port
       ├── client.cert          <-- Client certificate
       ├── client.key           <-- Client key
       └── ca.crt               <-- Root CA that signed
                                    the registry certificate, in PEM
```

The preceding example is operating-system specific and is for illustrative purposes only. You should consult your operating system documentation for creating an os-provided bundled certificate chain.

## [Create the client certificates](#create-the-client-certificates)

Use OpenSSL's `genrsa` and `req` commands to first generate an RSA key and then use the key to create the certificate.

```console
$ openssl genrsa -out client.key 4096
$ openssl req -new -x509 -text -key client.key -out client.cert
```

> Note
>
> These TLS commands only generate a working set of certificates on Linux. The version of OpenSSL in macOS is incompatible with the type of certificate Docker requires.

## [Troubleshooting tips](#troubleshooting-tips)

The Docker daemon interprets `.crt` files as CA certificates and `.cert` files as client certificates. If a CA certificate is accidentally given the extension `.cert` instead of the correct `.crt` extension, the Docker daemon logs the following error message:

```text
Missing key KEY_NAME for client certificate CERT_NAME. CA certificates should use the extension .crt.
```

If the Docker registry is accessed without a port number, do not add the port to the directory name. The following shows the configuration for a registry on default port 443 which is accessed with `docker login my-https.registry.example.com`:

```text
    /etc/docker/certs.d/
    └── my-https.registry.example.com          <-- Hostname without port
       ├── client.cert
       ├── client.key
       └── ca.crt
```

## [Related information](#related-information)

- [Use trusted images](https://docs.docker.com/engine/security/trust/)
- [Protect the Docker daemon socket](https://docs.docker.com/engine/security/protect-access/)

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/engine/security/certificates.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fengine%2fsecurity%2fcertificates%2f\&labels=status%2Ftriage)

Table of contents
