When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[PDF analysis and chat](https://docs.docker.com/guides/genai-pdf-bot/)

Learn how to build a PDF bot for parsing PDF documents and generating responses using Docker and generative AI.

AI

20 minutes

[1](https://docs.docker.com/guides/genai-pdf-bot/containerize/)

[Containerize your app](https://docs.docker.com/guides/genai-pdf-bot/containerize/)

[2](https://docs.docker.com/guides/genai-pdf-bot/develop/)

[Develop your app](https://docs.docker.com/guides/genai-pdf-bot/develop/)

[« Back to all guides](/guides/)

# Containerize a generative AI application

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Prerequisites](#prerequisites)

> Note
>
> GenAI applications can often benefit from GPU acceleration. Currently Docker Desktop supports GPU acceleration only on [Windows with the WSL2 backend](https://docs.docker.com/desktop/features/gpu/#using-nvidia-gpus-with-wsl2). Linux users can also access GPU acceleration using a native installation of the [Docker Engine](https://docs.docker.com/engine/install/).

- You have installed the latest version of [Docker Desktop](https://docs.docker.com/get-started/get-docker/) or, if you are a Linux user and are planning to use GPU acceleration, [Docker Engine](https://docs.docker.com/engine/install/). Docker adds new features regularly and some parts of this guide may work only with the latest version of Docker Desktop.
- You have a [git client](https://git-scm.com/downloads). The examples in this section use a command-line based git client, but you can use any client.

## [Overview](#overview)

This section walks you through containerizing a generative AI (GenAI) application using Docker Desktop.

> Note
>
> You can see more samples of containerized GenAI applications in the [GenAI Stack](https://github.com/docker/genai-stack) demo applications.

## [Get the sample application](#get-the-sample-application)

The sample application used in this guide is a modified version of the PDF Reader application from the [GenAI Stack](https://github.com/docker/genai-stack) demo applications. The application is a full stack Python application that lets you ask questions about a PDF file.

The application uses [LangChain](https://www.langchain.com/) for orchestration, [Streamlit](https://streamlit.io/) for the UI, [Ollama](https://ollama.ai/) to run the LLM, and [Neo4j](https://neo4j.com/) to store vectors.

Clone the sample application. Open a terminal, change directory to a directory that you want to work in, and run the following command to clone the repository:

```console
$ git clone https://github.com/craig-osterhout/docker-genai-sample
```

You should now have the following files in your `docker-genai-sample` directory.

```text
├── docker-genai-sample/
│ ├── .gitignore
│ ├── app.py
│ ├── chains.py
│ ├── env.example
│ ├── requirements.txt
│ ├── util.py
│ ├── LICENSE
│ └── README.md
```

## [Initialize Docker assets](#initialize-docker-assets)

Now that you have an application, you can use `docker init` to create the necessary Docker assets to containerize your application. Inside the `docker-genai-sample` directory, run the `docker init` command. `docker init` provides some default configuration, but you'll need to answer a few questions about your application. For example, this application uses Streamlit to run. Refer to the following `docker init` example and use the same answers for your prompts.

```console
$ docker init
Welcome to the Docker Init CLI!

This utility will walk you through creating the following files with sensible defaults for your project:
  - .dockerignore
  - Dockerfile
  - compose.yaml
  - README.Docker.md

Let's get started!

? What application platform does your project use? Python
? What version of Python do you want to use? 3.11.4
? What port do you want your app to listen on? 8000
? What is the command to run your app? streamlit run app.py --server.address=0.0.0.0 --server.port=8000
```

You should now have the following contents in your `docker-genai-sample` directory.

```text
├── docker-genai-sample/
│ ├── .dockerignore
│ ├── .gitignore
│ ├── app.py
│ ├── chains.py
│ ├── compose.yaml
│ ├── env.example
│ ├── requirements.txt
│ ├── util.py
│ ├── Dockerfile
│ ├── LICENSE
│ ├── README.Docker.md
│ └── README.md
```

To learn more about the files that `docker init` added, see the following:

- [Dockerfile](https://docs.docker.com/reference/dockerfile/)
- [.dockerignore](https://docs.docker.com/reference/dockerfile/#dockerignore-file)
- [compose.yaml](https://docs.docker.com/reference/compose-file/)

## [Run the application](#run-the-application)

Inside the `docker-genai-sample` directory, run the following command in a terminal.

```console
$ docker compose up --build
```

Docker builds and runs your application. Depending on your network connection, it may take several minutes to download all the dependencies. You'll see a message like the following in the terminal when the application is running.

```console
server-1  |   You can now view your Streamlit app in your browser.
server-1  |
server-1  |   URL: http://0.0.0.0:8000
server-1  |
```

Open a browser and view the application at <http://localhost:8000>. You should see a simple Streamlit application. The application may take a few minutes to download the embedding model. While the download is in progress, **Running** appears in the top-right corner.

The application requires a Neo4j database service and an LLM service to function. If you have access to services that you ran outside of Docker, specify the connection information and try it out. If you don't have the services running, continue with this guide to learn how you can run some or all of these services with Docker.

In the terminal, press `ctrl`+`c` to stop the application.

## [Summary](#summary)

In this section, you learned how you can containerize and run your GenAI application using Docker.

Related information:

- [docker init CLI reference](/reference/cli/docker/init/)

## [Next steps](#next-steps)

In the next section, you'll learn how you can run your application, database, and LLM service all locally using Docker.

[Use containers for generative AI development »](https://docs.docker.com/guides/genai-pdf-bot/develop/)

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/genai-pdf-bot/containerize.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fgenai-pdf-bot%2fcontainerize%2f\&labels=status%2Ftriage)

Table of contents
