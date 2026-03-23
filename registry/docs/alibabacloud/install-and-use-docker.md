Install Docker and Docker Compose on various Linux distributions. Package applications and their dependencies into portable containers to standardize deployments and simplify multi-service management.

## **Install Docker**

## Alibaba Cloud Linux 4

Before installing a new version of Docker, uninstall all existing Docker components to prevent potential conflicts and compatibility issues.

**Uninstall older versions of Docker**

1.  Uninstall older Docker versions, related software packages, and repositories.
    
    ```
    #Remove Docker-related sources
    sudo rm -f /etc/yum.repos.d/docker*.repo
    #Uninstall Docker and related packages
    sudo dnf -y remove \  
    docker \
    moby \
    docker-ce \
    containerd.io \
    docker-ce-rootless-extras \
    docker-buildx-plugin \
    docker-ce-cli \
    docker-compose-plugin
    ```
    
2.  Uninstalling Docker does not automatically remove images, containers, persistent volumes (PVs), or networks. This data is stored in the `/var/lib/docker/` directory by default. You must manually delete this directory.
    

1.  Install Docker.
    
    -   Recommended method:
        
        ```
        # Install the Moby runtime
        sudo yum install -y moby
        ```
        
    -   Install Docker Community Edition.
        
        > If you are not using an Alibaba Cloud server, replace `http://mirrors.cloud.aliyuncs.com` with `https://mirrors.aliyun.com`.
        
        ```
        #Add the Docker CE package repository
        sudo wget -O /etc/yum.repos.d/docker-ce.repo http://mirrors.cloud.aliyuncs.com/docker-ce/linux/centos/docker-ce.repo
        sudo sed -i 's|https://mirrors.aliyun.com|http://mirrors.cloud.aliyuncs.com|g' /etc/yum.repos.d/docker-ce.repo
        
        #You must select which CentOS version to install, such as CentOS 9 or CentOS 10, and then replace $releasever with the corresponding version number.
        # To use CentOS 9, run:
        sudo sed -i 's|$releasever|9|' /etc/yum.repos.d/docker-ce.repo
        # To use CentOS 10, run:
        sudo sed -i 's|$releasever|10|' /etc/yum.repos.d/docker-ce.repo
        
        #Install Docker Community Edition, the containerd.io container runtime, and the Docker Buildx and Compose plugins
        sudo dnf -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
        
        #Note: To switch back to the native Moby component provided by Alibaba Cloud Linux 4, first remove the docker-ce components and disable the CentOS repository.
        sudo yum remove -y docker-ce docker-ce-cli
        sudo rm -rf /etc/yum.repos.d/docker-ce.repo
        ```
        
2.  Start Docker and enable it to start on boot.
    
    ```
    # Start the service and enable it to start on boot
    sudo systemctl start docker
    sudo systemctl enable docker
    
    # Verify the installation
    docker --version  # This will display the installed version
    ```
    

**Note**

-   Moby is the default container runtime on this system and will continue to be updated in future versions.
    
-   For forward compatibility, older Docker components can still be used but will no longer receive updates.
    

## Alibaba Cloud Linux 3

Before installing a new version of Docker, uninstall all existing Docker components to prevent potential conflicts and compatibility issues.

**Uninstall older versions of Docker**

1.  Uninstall older Docker versions, related software packages, and repositories.
    
    > You can ignore any messages that indicate a package is not installed.
    
    ```
    #Remove Docker-related sources
    sudo rm -f /etc/yum.repos.d/docker*.repo
    #Uninstall Docker and related packages
    sudo dnf -y remove \
    docker-ce \
    containerd.io \
    docker-ce-rootless-extras \
    docker-buildx-plugin \
    docker-ce-cli \
    docker-compose-plugin
    ```
    
2.  Uninstalling Docker does not automatically remove images, containers, persistent volumes (PVs), or networks. This data is stored in the `/var/lib/docker/` directory by default. You must manually delete this directory.
    

1.  Install Docker Community Edition.
    
    > If you are not using an Alibaba Cloud server, replace `http://mirrors.cloud.aliyuncs.com` with `https://mirrors.aliyun.com`
    
    ```
    #Add the Docker package repository
    sudo wget -O /etc/yum.repos.d/docker-ce.repo http://mirrors.cloud.aliyuncs.com/docker-ce/linux/centos/docker-ce.repo
    sudo sed -i 's|https://mirrors.aliyun.com|http://mirrors.cloud.aliyuncs.com|g' /etc/yum.repos.d/docker-ce.repo
    #Install the dnf repository compatibility plugin for Alibaba Cloud Linux 3
    sudo dnf -y install dnf-plugin-releasever-adapter --repo alinux3-plus
    #Install Docker Community Edition, the containerd.io container runtime, and the Docker Buildx and Compose plugins
    sudo dnf -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    ```
    
2.  Start Docker and enable it to start on boot.
    
    ```
    #Start Docker
    sudo systemctl start docker
    #Set the Docker daemon to start automatically on system boot
    sudo systemctl enable docker
    ```
    

## Ubuntu

Before installing a new version of Docker, uninstall all existing Docker components to prevent potential conflicts and compatibility issues.

**Uninstall older versions of Docker**

1.  Uninstall older Docker versions, related software packages, and repositories.
    
    > You can ignore any messages that indicate a package is not installed.
    
    ```
    #Remove Docker-related sources
    sudo rm -f /etc/apt/sources.list.d/*docker*.list
    #Uninstall Docker and related packages
    for pkg in docker.io docker-buildx-plugin docker-ce-cli docker-ce-rootless-extras docker-compose-plugin docker-doc docker-compose podman-docker containerd runc; do sudo apt-get remove -y $pkg; done
    ```
    
2.  Uninstalling Docker does not automatically remove images, containers, persistent volumes (PVs), or networks. This data is stored in the `/var/lib/docker/` directory by default. You must manually delete this directory.
    

1.  Install Docker Community Edition.
    
    > If you are not using an Alibaba Cloud server, replace `http://mirrors.cloud.aliyuncs.com` with `https://mirrors.aliyun.com`
    
    ```
    #Update the package management tool
    sudo apt-get update
    #Add the Docker package repository
    sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
    sudo curl -fsSL http://mirrors.cloud.aliyuncs.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
    sudo add-apt-repository -y "deb [arch=$(dpkg --print-architecture)] http://mirrors.cloud.aliyuncs.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
    #Install Docker Community Edition, the containerd.io container runtime, and the Docker Buildx and Compose plugins
    sudo apt-get -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    ```
    
2.  Start Docker and enable it to start on boot.
    
    ```
    #Start Docker
    sudo systemctl start docker
    #Set the Docker daemon to start automatically on system boot
    sudo systemctl enable docker
    ```
    

## Debian

Before installing a new version of Docker, uninstall all existing Docker components to prevent potential conflicts and compatibility issues.

**Uninstall older versions of Docker**

1.  Uninstall older Docker versions, related software packages, and repositories.
    
    > You can ignore any messages that indicate a package is not installed.
    
    ```
    #Remove Docker-related sources
    sudo rm -f /etc/apt/sources.list.d/*docker*.list
    #Uninstall Docker and related packages
    for pkg in docker.io docker-buildx-plugin docker-ce-cli docker-ce-rootless-extras docker-compose-plugin docker-doc docker-compose podman-docker containerd runc; do sudo apt-get remove -y $pkg; done
    ```
    
2.  Uninstalling Docker does not automatically remove images, containers, persistent volumes (PVs), or networks. This data is stored in the `/var/lib/docker/` directory by default. You must manually delete this directory.
    

1.  Install Docker Community Edition.
    
    > If you are not using an Alibaba Cloud server, replace `http://mirrors.cloud.aliyuncs.com` with `https://mirrors.aliyun.com`
    
    ```
    #Update the package management tool
    sudo apt-get update
    #Add the Docker package repository
    sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
    sudo curl -fsSL http://mirrors.cloud.aliyuncs.com/docker-ce/linux/debian/gpg | sudo apt-key add -
    sudo add-apt-repository -y "deb [arch=$(dpkg --print-architecture)] http://mirrors.cloud.aliyuncs.com/docker-ce/linux/debian $(lsb_release -cs) stable"
    #Install Docker Community Edition, the containerd.io container runtime, and the Docker Buildx and Compose plugins
    sudo apt-get -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    ```
    
2.  Start Docker and enable it to start on boot.
    
    ```
    #Start Docker
    sudo systemctl start docker
    #Set the Docker daemon to start automatically on system boot
    sudo systemctl enable docker
    ```
    

## Red Hat

Before installing a new version of Docker, uninstall all existing Docker components to prevent potential conflicts and compatibility issues.

**Uninstall older versions of Docker**

1.  Uninstall older Docker versions, related software packages, and repositories.
    
    > You can ignore any messages that indicate a package is not installed.
    
    ```
    #Remove Docker-related sources
    sudo rm -f /etc/yum.repos.d/docker*.repo
    #Uninstall old versions of Docker and related packages
    sudo yum -y remove \
    docker-ce \
    containerd.io \
    docker-ce-rootless-extras \
    docker-buildx-plugin \
    docker-ce-cli \
    docker-compose-plugin
    ```
    
2.  Uninstalling Docker does not automatically remove images, containers, persistent volumes (PVs), or networks. This data is stored in the `/var/lib/docker/` directory by default. You must manually delete this directory.
    

1.  Install Docker Community Edition.
    
    > If you are not using an Alibaba Cloud server, replace `http://mirrors.cloud.aliyuncs.com` with `https://mirrors.aliyun.com`
    
    ```
    #Add the Docker package repository
    sudo wget -O /etc/yum.repos.d/docker-ce.repo http://mirrors.cloud.aliyuncs.com/docker-ce/linux/rhel/docker-ce.repo
    sudo sed -i 's|https://mirrors.aliyun.com|http://mirrors.cloud.aliyuncs.com|g' /etc/yum.repos.d/docker-ce.repo
    #Install Docker Community Edition, the containerd.io container runtime, and the Docker Buildx and Compose plugins
    sudo yum -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    ```
    
2.  Start Docker and enable it to start on boot.
    
    ```
    #Start Docker
    sudo systemctl start docker
    #Set the Docker daemon to start automatically on system boot
    sudo systemctl enable docker
    ```
    

## Fedora

Before installing a new version of Docker, uninstall all existing Docker components to prevent potential conflicts and compatibility issues.

**Uninstall older versions of Docker**

1.  Uninstall older Docker versions, related software packages, and repositories.
    
    > You can ignore any messages that indicate a package is not installed.
    
    ```
    #Remove Docker-related sources
    sudo rm -f /etc/yum.repos.d/docker*.repo
    #Uninstall Docker and related packages
    sudo dnf -y remove \
    docker-ce \
    containerd.io \
    docker-ce-rootless-extras \
    docker-buildx-plugin \
    docker-ce-cli \
    docker-compose-plugin
    ```
    
2.  Uninstalling Docker does not automatically remove images, containers, persistent volumes (PVs), or networks. This data is stored in the `/var/lib/docker/` directory by default. You must manually delete this directory.
    

1.  Install Docker Community Edition.
    
    > If you are not using an Alibaba Cloud server, replace `http://mirrors.cloud.aliyuncs.com` with `https://mirrors.aliyun.com`
    
    ```
    #Add the Docker package repository
    sudo wget -O /etc/yum.repos.d/docker-ce.repo http://mirrors.cloud.aliyuncs.com/docker-ce/linux/fedora/docker-ce.repo
    sudo sed -i 's|https://mirrors.aliyun.com|http://mirrors.cloud.aliyuncs.com|g' /etc/yum.repos.d/docker-ce.repo
    #Install Docker Community Edition, the containerd.io container runtime, and the Docker Buildx and Compose plugins
    sudo dnf -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    ```
    
2.  Start Docker and enable it to start on boot.
    
    ```
    #Start Docker
    sudo systemctl start docker
    #Set the Docker daemon to start automatically on system boot
    sudo systemctl enable docker
    ```
    

## Anolis OS

Before installing a new version of Docker, uninstall all existing Docker components to prevent potential conflicts and compatibility issues.

**Uninstall older versions of Docker**

1.  Uninstall older Docker versions, related software packages, and repositories.
    
    > You can ignore any messages that indicate a package is not installed.
    
    ```
    #Remove Docker-related sources
    sudo rm -f /etc/yum.repos.d/docker*.repo
    #Uninstall old versions of Docker and related packages
    sudo yum -y remove \
    docker-ce \
    containerd.io \
    docker-ce-rootless-extras \
    docker-buildx-plugin \
    docker-ce-cli \
    docker-compose-plugin
    ```
    
2.  Uninstalling Docker does not automatically remove images, containers, persistent volumes (PVs), or networks. This data is stored in the `/var/lib/docker/` directory by default. You must manually delete this directory.
    

1.  Install Docker Community Edition.
    
    > If you are not using an Alibaba Cloud server, replace `http://mirrors.cloud.aliyuncs.com` with `https://mirrors.aliyun.com`
    
    ```
    #Add the Docker package repository
    sudo wget -O /etc/yum.repos.d/docker-ce.repo http://mirrors.cloud.aliyuncs.com/docker-ce/linux/centos/docker-ce.repo
    sudo sed -i 's|https://mirrors.aliyun.com|http://mirrors.cloud.aliyuncs.com|g' /etc/yum.repos.d/docker-ce.repo
    #Install Docker Community Edition, the containerd.io container runtime, and the Docker Buildx and Compose plugins
    sudo yum -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    ```
    
2.  Start Docker and enable it to start on boot.
    
    ```
    #Start Docker
    sudo systemctl start docker
    #Set the Docker daemon to start automatically on system boot
    sudo systemctl enable docker
    ```
    

## Alibaba Cloud Linux 2

Before installing a new version of Docker, uninstall all existing Docker components to prevent potential conflicts and compatibility issues.

**Uninstall older versions of Docker**

1.  Uninstall older Docker versions, related software packages, and repositories.
    
    > You can ignore any messages that indicate a package is not installed.
    
    ```
    #Remove Docker-related sources
    sudo rm -f /etc/yum.repos.d/docker*.repo
    #Uninstall old versions of Docker and related packages
    sudo yum -y remove \
    docker-ce \
    containerd.io \
    docker-ce-rootless-extras \
    docker-buildx-plugin \
    docker-ce-cli \
    docker-compose-plugin
    ```
    
2.  Uninstalling Docker does not automatically remove images, containers, persistent volumes (PVs), or networks. This data is stored in the `/var/lib/docker/` directory by default. You must manually delete this directory.
    

1.  Install Docker Community Edition.
    
    > If you are not using an Alibaba Cloud server, replace `http://mirrors.cloud.aliyuncs.com` with `https://mirrors.aliyun.com`
    
    ```
    #Add the Docker package repository
    sudo wget -O /etc/yum.repos.d/docker-ce.repo http://mirrors.cloud.aliyuncs.com/docker-ce/linux/centos/docker-ce.repo
    sudo sed -i 's|https://mirrors.aliyun.com|http://mirrors.cloud.aliyuncs.com|g' /etc/yum.repos.d/docker-ce.repo
    #Install the yum repository compatibility plugin for Alibaba Cloud Linux 2
    sudo yum install yum-plugin-releasever-adapter --disablerepo=* --enablerepo=plus
    #Install Docker Community Edition, the containerd.io container runtime, and the Docker Buildx and Compose plugins
    sudo yum -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    ```
    
2.  Start Docker and enable it to start on boot.
    
    ```
    #Start Docker
    sudo systemctl start docker
    #Set the Docker daemon to start automatically on system boot
    sudo systemctl enable docker
    ```
    

## CentOS 7.x

Before installing a new version of Docker, uninstall all existing Docker components to prevent potential conflicts and compatibility issues.

**Uninstall older versions of Docker**

1.  Uninstall older Docker versions, related software packages, and repositories.
    
    > You can ignore any messages that indicate a package is not installed.
    
    ```
    #Remove Docker-related sources
    sudo rm -f /etc/yum.repos.d/docker*.repo
    #Uninstall old versions of Docker and related packages
    sudo yum -y remove \
    docker-ce \
    containerd.io \
    docker-ce-rootless-extras \
    docker-buildx-plugin \
    docker-ce-cli \
    docker-compose-plugin
    ```
    
2.  Uninstalling Docker does not automatically remove images, containers, persistent volumes (PVs), or networks. This data is stored in the `/var/lib/docker/` directory by default. You must manually delete this directory.
    

1.  Install Docker Community Edition.
    
    > If you are not using an Alibaba Cloud server, replace `http://mirrors.cloud.aliyuncs.com` with `https://mirrors.aliyun.com`
    
    ```
    #Add the Docker package repository
    sudo wget -O /etc/yum.repos.d/docker-ce.repo http://mirrors.cloud.aliyuncs.com/docker-ce/linux/centos/docker-ce.repo
    sudo sed -i 's|https://mirrors.aliyun.com|http://mirrors.cloud.aliyuncs.com|g' /etc/yum.repos.d/docker-ce.repo
    #Install Docker Community Edition, the containerd.io container runtime, and the Docker Buildx and Compose plugins
    sudo yum -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    ```
    
2.  Start Docker and enable it to start on boot.
    
    ```
    #Start Docker
    sudo systemctl start docker
    #Set the Docker daemon to start automatically on system boot
    sudo systemctl enable docker
    ```
    

## CentOS 8.x

Before installing a new version of Docker, uninstall all existing Docker components to prevent potential conflicts and compatibility issues.

**Uninstall older versions of Docker**

1.  Uninstall older Docker versions, related software packages, and repositories.
    
    > You can ignore any messages that indicate a package is not installed.
    
    ```
    #Remove Docker-related sources
    sudo rm -f /etc/yum.repos.d/docker*.repo
    #Uninstall Docker and related packages
    sudo dnf -y remove \
    docker-ce \
    containerd.io \
    docker-ce-rootless-extras \
    docker-buildx-plugin \
    docker-ce-cli \
    docker-compose-plugin
    ```
    
2.  Uninstalling Docker does not automatically remove images, containers, persistent volumes (PVs), or networks. This data is stored in the `/var/lib/docker/` directory by default. You must manually delete this directory.
    

1.  Install Docker Community Edition.
    
    > If you are not using an Alibaba Cloud server, replace `http://mirrors.cloud.aliyuncs.com` with `https://mirrors.aliyun.com`
    
    ```
    #Add the Docker package repository
    sudo wget -O /etc/yum.repos.d/docker-ce.repo http://mirrors.cloud.aliyuncs.com/docker-ce/linux/centos/docker-ce.repo
    sudo sed -i 's|https://mirrors.aliyun.com|http://mirrors.cloud.aliyuncs.com|g' /etc/yum.repos.d/docker-ce.repo
    #Install Docker Community Edition, the containerd.io container runtime, and the Docker Buildx and Compose plugins
    sudo dnf -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    ```
    
2.  Start Docker and enable it to start on boot.
    
    ```
    #Start Docker
    sudo systemctl start docker
    #Set the Docker daemon to start automatically on system boot
    sudo systemctl enable docker
    ```
    

## Deploy a web application with Docker

1.  Build the web application image.
    
    ```
    #Pull the latest Nginx image
    sudo docker pull nginx:latest
    #Create a Dockerfile that sets Nginx as the base image and creates an index.html file that displays "Hello World!" in the web server's root directory.
    sudo tee Dockerfile <<-'EOF'
    FROM nginx:latest
    RUN echo 'Hello World!' > /usr/share/nginx/html/index.html
    EOF
    #Build the image and name it hello-world
    sudo docker build . -t hello-world:latest
    ```
    
2.  Use the web application image to start a container named `hello-world`.
    
    ```
    sudo docker run -d -p 80:80 --name hello-world hello-world:latest
    ```
    
3.  Run the `curl http://localhost` command to verify that the web application correctly displays `Hello World!`.
    

## **Install Docker Compose**

For applications that consist of multiple services or have specific startup dependencies, use [Docker Compose](https://docs.docker.com/compose/) to define, run, and manage them from a single YAML file.

## Alibaba Cloud Linux, CentOS, Red Hat, Anolis, Fedora

```
sudo yum -y install docker-compose-plugin
```

## Ubuntu, Debian

```
sudo apt-get -y install docker-compose-plugin
```

## Deploy an application with Docker Compose

1.  Create an orchestration file named `docker-compose.yaml`.
    
    ```
    #Create the orchestration file and add MySQL and WordPress services
    sudo tee docker-compose.yaml <<-'EOF'
    version: '3.1'
    
    services:
      wordpress:
        image: wordpress
        restart: always
        ports:
          - "80:80"
        environment:
          #Database host address
          WORDPRESS_DB_HOST: wordpress_db
          #Database username
          WORDPRESS_DB_USER: wordpress
          #Database password
          WORDPRESS_DB_PASSWORD: ${WORDPRESS_DB_PASSWORD}
          #Database name
          WORDPRESS_DB_NAME: wordpress
        volumes:
          - wordpress:/var/www/html
    
      db:
        image: mysql:5.7
        restart: always
        container_name: wordpress_db
        environment:
          #Database name
          MYSQL_DATABASE: wordpress
          #Database username
          MYSQL_USER: wordpress
          #Database password
          MYSQL_PASSWORD: ${WORDPRESS_DB_PASSWORD}
          #Database root user password
          MYSQL_RANDOM_ROOT_PASSWORD: ${WORDPRESS_DB_PASSWORD}
        volumes:
          - db:/var/lib/mysql
    
    volumes:
      wordpress:
      db:
    EOF
    ```
    
2.  Start the WordPress service. Replace `<database_password>` in the command with your MySQL database password.
    
    > Note that the command for Docker Compose V2 does not use a hyphen. For example, use `docker compose version`.
    
    ```
    #Start the service containers.
    sudo env "PATH=$PATH" "WORDPRESS_DB_PASSWORD=<database_password>" docker compose -f docker-compose.yaml up -d
    ```
    
3.  In a browser, enter `http://<Public_IP_address_of_your_ECS_instance>` to access WordPress.
    
    > Ensure that you have added an inbound rule to your [security group](/help/en/ecs/user-guide/start-using-security-groups#233050ea35twy) to allow traffic on port `80`.
    

## FAQ

#### How do I run Docker as a non-root user?

By default, Docker commands require `root` privileges (executed with `sudo`). To avoid using `sudo` for every command and to follow the Principle of Least Privilege, add your current user to the `docker` group.

1.  Add the current user to the `docker` group.
    
    ```
    sudo usermod -aG docker $USER
    ```
    
2.  Run `newgrp docker` to apply the changes to your current shell. You can then use `docker` commands directly without `sudo`. For the change to be permanent, you may need to log out and log back in.
    

#### **Why is http://mirrors.cloud.aliyuncs.com inaccessible?**

-   Symptom: The address `http://mirrors.cloud.aliyuncs.com` is inaccessible.
    
-   Possible cause: Network instability.
    
-   Solution: Replace `http://mirrors.cloud.aliyuncs.com` with `https://mirrors.aliyun.com`.
    
    > To use `https://mirrors.aliyun.com`, your instance must have a public IP address. For instructions, see [Enable Internet access](/help/en/ecs/user-guide/best-practices-for-configuring-public-bandwidth).
    

#### Why does the dnf config-manager command fail?

-   Symptom: When running `dnf config-manager` on a Linux instance, a deprecation warning appears:
    
    ```
    /usr/lib/python3/dist-packages/dnf/const.py:22: DeprecationWarning: The distutils package is deprecated and slated for removal in Python 3.12. Use setuptools or check PEP 632 for potential alternatives.
    ```
    
-   Possible cause: The dnf version is outdated.
    
-   Solution: Update the `dnf` package to the latest version by running `sudo dnf update dnf`, then try installing Docker again.
    

#### Why does the dnf install docker-ce command fail?

-   Symptom: When running `dnf -y install docker-ce` on a Linux instance, the following error occurs, indicating a download failure:
    
    ```
    (8-9/12): docker-ce-24.0.7-1.el8.x86_64.rpm 38% [================- ] 8.2 MB/s | 38 MB 00:07 ETA
    The downloaded packages were saved in cache until the next successful transaction.
    You can remove cached packages by executing 'dnf clean packages'.
    Error: Error downloading packages:
    containerd.io-1.6.26-3.1.el8.x86_64: Cannot download, all mirrors were already tried without success.
    ```
    
-   Possible cause: The package cache is outdated, causing the installation to fail.
    
-   Solution: Clear the package cache by running `sudo dnf clean packages`, then retry the `docker` installation.
    
-   Symptom: When running `dnf -y install docker-ce` on a Linux instance, the following error occurs, indicating a failure to download metadata:
    
    ```
    CentOS- Base                                                                                                                         0.0  B/s |   0  B     00:30    
    Errors during downloading metadata for repository 'base':
      - Curl error (6): Couldn't resolve host name for http://mirror.centos.org/os/BaseOS/x86_64/os/repodata/repomd.xml [Could not resolve host: mirror.aliyuncs.com]
      - Curl error (28): Timeout was reached for http://mirror.centos.org/os/BaseOS/x86_64/os/repodata/repomd.xml [Connection timed out after 30000 milliseconds]
      - Curl error (6): Couldn't resolve host name for http://mirror.centos.org/os/BaseOS/x86_64/os/repodata/repomd.xml [Could not resolve host: mirror.cloud.aliyuncs.com]
    Error: Failed to download metadata for repo 'base': Cannot download repomd.xml: Cannot download repodata/repomd.xml: All mirrors were tried
    ```
    
-   Possible cause: You are using a discontinued `CentOS 8` repository.
    
-   Solution: To resolve this, replace the discontinued `CentOS 8` repository with an available one from Alibaba Cloud by following these steps.
    
    ```
    # Back up the expired software source.
    sudo mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
    # Download the Alibaba Cloud-provided CentOS-Base.repo to /etc/yum.repos.d/.
    wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.cloud.aliyuncs.com/repo/Centos-vault-8.5.2111.repo
    # Replace the software source address in the Alibaba Cloud source with an address accessible to ECS.
    sudo sed -i 's/mirrors.cloud.aliyuncs.com/url_tmp/g' /etc/yum.repos.d/CentOS-Base.repo && sudo sed -i 's/mirrors.aliyun.com/mirrors.cloud.aliyuncs.com/g' /etc/yum.repos.d/CentOS-Base.repo && sudo sed -i 's/url_tmp/mirrors.aliyun.com/g' /etc/yum.repos.d/CentOS-Base.repo
    # Clear the old cache and generate a new one.
    sudo yum clean all && sudo yum makecache
    ```
    
    After completing these steps, retry the `docker` installation.
    

## **References**

-   For more information on using Docker, see the [official Docker documentation](https://docs.docker.com/reference/).
    
-   Alibaba Cloud's [Artifact Center](/help/en/acr/user-guide/artifact-center) provides developers with free, secure, and trusted base container images from Alibaba Cloud and the OpenAnolis community.
    
-   Use the enterprise P2P acceleration feature to improve image pull speeds. For instructions, see [Use P2P acceleration in other container environments](/help/en/acr/use-the-p2p-acceleration-feature-on-hosts-where-docker-is-installed).
    
-   Configure the CLI in Docker to manage Alibaba Cloud resources. For instructions, see [Run Cloud Assistant CLI in a Docker container](/help/en/cli/run-alibaba-cloud-cli-in-a-docker-container).
