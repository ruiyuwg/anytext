Parameter

Type

Description

Example

object

The container engine.

name

string

The name of a container runtime. The following types of runtime are supported by Container Service for Kubernetes (ACK).

-   `containerd`: supports all Kubernetes versions. We recommend that you set the parameter to this value.
-   `Sandboxed-Container.runv`: Sandboxed container provides enhanced isolation and supports Kubernetes 1.24 and earlier.
-   `docker`: supports Kubernetes 1.22 and earlier.

Default value: `containerd`.

docker

version

string

The version of the container runtime. By default, the latest version is used.

For more information about the changes to Sandboxed-Container, see [Sandboxed-Container release notes](/help/en/ack/product-overview/release-notes-of-sandboxed-container).

19.03.5
