When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[Introduction to ROS 2 Development with Docker](https://docs.docker.com/guides/ros2/)

This guide details how to containerize ROS 2 applications using Docker.

![](https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg "Python") Python Frameworks

30 minutes

[1](https://docs.docker.com/guides/ros2/run-ros2/)

[Run ROS 2](https://docs.docker.com/guides/ros2/run-ros2/)

[2](https://docs.docker.com/guides/ros2/develop/)

[Set Up ROS 2 workspace](https://docs.docker.com/guides/ros2/develop/)

[3](https://docs.docker.com/guides/ros2/turtlesim-example/)

[Turtlesim example](https://docs.docker.com/guides/ros2/turtlesim-example/)

[« Back to all guides](/guides/)

# Run ROS 2 in a container

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Overview](#overview)

In this section, you will run ROS 2 in an isolated Docker container using official ROS 2 images, verify that ROS 2 is working, and install additional ROS 2 packages for development and testing.

***

## [Run ROS 2 in a container](#run-ros-2-in-a-container)

The fastest way to get started with ROS 2 is to use the [official Docker image](https://hub.docker.com/_/ros/). To pull an image, start a container, and open an interactive bash shell:

1. Pull and run the official ROS 2 Docker image:

   ```console
   $ docker run -it ros:humble
   ```

   This guide uses the Humble distribution. You can replace `humble` with another supported distribution such as `rolling`, `jazzy`, or `iron`.

   > Note
   >
   > This environment is temporary and does not maintain persistence. Any files you create or packages you install will be deleted once the container is stopped or removed.

2. Verify ROS 2 is working:

   ```console
   $ echo $ROS_DISTRO
   ```

   You should see output similar to:

   ```text
   humble
   ```

## [Install ROS 2 packages](#install-ros-2-packages)

The official ROS 2 images include core packages. To install additional packages, use the `apt` package manager:

1. Update the package manager:

   ```console
   $ sudo apt update
   ```

2. Install the desired package:

   ```console
   $ sudo apt install $PACKAGE_NAME
   ```

Replace `$PACKAGE_NAME` with any package you want to install.

Some commonly used packages include:

- `ros-humble-turtlesim` - Visualization and simulation tool
- `ros-humble-rviz2` - 3D visualization tool
- `ros-humble-rqt` - Qt-based ROS graphical tools
- `ros-humble-demo-nodes-cpp` - C++ demo nodes
- `ros-humble-demo-nodes-py` - Python demo nodes
- `ros-humble-colcon-common-extensions` - Build system extensions

## [Summary](#summary)

In this section, you pulled an official ROS 2 Docker image, launched an interactive session, and extended the container's capabilities by installing additional ROS 2 packages using apt.

## [Next steps](#next-steps)

In the next section, you will configure a persistent workspace to ensure your code and modifications are saved across sessions.

[Build and develop a ROS 2 workspace »](https://docs.docker.com/guides/ros2/develop/)

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/ros2/run-ros2.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fros2%2frun-ros2%2f\&labels=status%2Ftriage)

Table of contents
