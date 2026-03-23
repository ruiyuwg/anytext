When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Run Docker Desktop for Windows in a VM or VDI environment

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Docker recommends running Docker Desktop natively on Mac, Linux, or Windows. However, Docker Desktop for Windows can run inside a virtual desktop provided the virtual desktop is properly configured.

To run Docker Desktop in a virtual desktop environment, you have two options, depending on whether nested virtualization is supported:

- If your environment supports nested virtualization, you can run Docker Desktop with its default local Linux VM.
- If nested virtualization is not supported, Docker recommends subscribing to and using Docker Offload.

## [Use Docker Offload](#use-docker-offload)

[Docker Offload](/offload/) lets you offload container workloads to a high-performance, fully hosted cloud environment, enabling a seamless hybrid experience.

Docker Offload is useful in virtual desktop environments where nested virtualization isn't supported. In these environments, Docker Desktop can use Docker Offload to ensure you can still build and run containers without relying on local virtualization.

Docker Offload decouples the Docker Desktop client from the Docker Engine, allowing the Docker CLI and Docker Desktop Dashboard to interact with cloud-based resources as if they were local. When you run a container, Docker provisions a secure, isolated, and ephemeral cloud environment connected to Docker Desktop via an SSH tunnel. Despite running remotely, features like bind mounts and port forwarding continue to work seamlessly, providing a local-like experience. To use Docker Offload:

To get started using Docker Offload, see the [Docker Offload quickstart](/offload/quickstart/).

## [Virtual desktop support when using nested virtualization](#virtual-desktop-support-when-using-nested-virtualization)

> Note
>
> Support for running Docker Desktop on a virtual desktop is available to Docker Business customers, on VMware ESXi or Azure VMs only.

Docker support includes installing and running Docker Desktop within the VM, provided that nested virtualization is correctly enabled. The only hypervisors successfully tested are VMware ESXi and Azure, and there is no support for other VMs. For more information on Docker Desktop support, see [Get support](https://docs.docker.com/support/).

For troubleshooting problems and intermittent failures that are outside of Docker's control, you should contact your hypervisor vendor. Each hypervisor vendor offers different levels of support. For example, Microsoft supports running nested Hyper-V both on-prem and on Azure, with some version constraints. This may not be the case for VMware ESXi.

Docker does not support running multiple instances of Docker Desktop on the same machine in a VM or VDI environment.

> Tip
>
> If you're running Docker Desktop inside a Citrix VDI, note that Citrix can be used with a variety of underlying hypervisors, for example VMware, Hyper-V, Citrix Hypervisor/XenServer. Docker Desktop requires nested virtualization, which is not supported by Citrix Hypervisor/XenServer.
>
> Check with your Citrix administrator or VDI infrastructure team to confirm which hypervisor is being used, and whether nested virtualization is enabled.

## [Turn on nested virtualization](#turn-on-nested-virtualization)

You must turn on nested virtualization before you install Docker Desktop on a virtual machine that will not use Docker Cloud.

### [Turn on nested virtualization on VMware ESXi](#turn-on-nested-virtualization-on-vmware-esxi)

Nested virtualization of other hypervisors like Hyper-V inside a vSphere VM [is not a supported scenario](https://kb.vmware.com/s/article/2009916). However, running Hyper-V VM in a VMware ESXi VM is technically possible and, depending on the version, ESXi includes hardware-assisted virtualization as a supported feature. A VM that had 1 CPU with 4 cores and 12GB of memory was used for internal testing.

For steps on how to expose hardware-assisted virtualization to the guest OS, [see VMware's documentation](https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/vsphere/7-0/expose-hardware-assisted-virtualization.html).

### [Turn on nested virtualization on an Azure Virtual Machine](#turn-on-nested-virtualization-on-an-azure-virtual-machine)

Nested virtualization is supported by Microsoft for running Hyper-V inside an Azure VM.

For Azure virtual machines, [check that the VM size chosen supports nested virtualization](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes). Microsoft provides [a helpful list on Azure VM sizes](https://docs.microsoft.com/en-us/azure/virtual-machines/acu) and highlights the sizes that currently support nested virtualization. D4s\_v5 machines were used for internal testing. Use this specification or above for optimal performance of Docker Desktop.

## [Docker Desktop support on Nutanix-powered VDI](#docker-desktop-support-on-nutanix-powered-vdi)

Docker Desktop can be used within Nutanix-powered VDI environments provided that the underlying Windows environment supports WSL 2 or Windows container mode. Since Nutanix officially supports WSL 2, Docker Desktop should function as expected, as long as WSL 2 operates correctly within the VDI environment.

If using Windows container mode, confirm that the Nutanix environment supports Hyper-V or alternative Windows container backends.

### [Supported configurations](#supported-configurations)

Docker Desktop follows the VDI support definitions outlined [previously](#virtual-desktop-support-when-using-nested-virtualization):

- Persistent VDI environments (Supported): You receive the same virtual desktop instance across sessions, preserving installed software and configurations.

- Non-persistent VDI environments (Not supported): Docker Desktop does not support environments where the OS resets between sessions, requiring re-installation or reconfiguration each time.

### [Support scope and responsibilities](#support-scope-and-responsibilities)

For WSL 2-related issues, contact Nutanix support. For Docker Desktop-specific issues, contact Docker support.

## [Additional resources](#additional-resources)

- [Docker Desktop on Microsoft Dev Box](https://docs.docker.com/enterprise/enterprise-deployment/dev-box/)

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/desktop/setup/vm-vdi.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdesktop%2fsetup%2fvm-vdi%2f\&labels=status%2Ftriage)

Table of contents
