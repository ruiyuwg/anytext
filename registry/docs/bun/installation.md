# Installation

Source: https://bun.com/docs/installation

Install Bun with npm, Homebrew, Docker, or the official script.

## Overview

Bun ships as a single, dependency-free executable. You can install it via script, package manager, or Docker across macOS, Linux, and Windows.

After installation, verify with `bun --version` and `bun --revision`.

## Installation

````
  ```bash curl icon="globe" theme={"theme":{"light":"github-light","dark":"dracula"}}
  curl -fsSL https://bun.com/install | bash
  ```



  **Linux users**  The `unzip` package is required to install Bun. Use `sudo apt install unzip` to install the unzip package. Kernel version 5.6 or higher is strongly recommended, but the minimum is 5.1. Use `uname -r` to check Kernel version.





  ```powershell PowerShell icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
  powershell -c "irm bun.sh/install.ps1|iex"
  ```



  Bun requires Windows 10 version 1809 or later.


For support and discussion, please join the **#windows** channel on our [Discord](https://bun.com/discord).




  ```bash npm icon="npm" theme={"theme":{"light":"github-light","dark":"dracula"}}
  npm install -g bun # the last `npm` command you'll ever need
  ```

  ```bash Homebrew icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/homebrew.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5c6dc69e5e0d20fb807fba0a9cd45023" theme={"theme":{"light":"github-light","dark":"dracula"}}
  brew install oven-sh/bun/bun
  ```

  ```bash Scoop icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
  scoop install bun
  ```




Bun provides a Docker image that supports both Linux x64 and arm64.

```bash Docker icon="docker" theme={"theme":{"light":"github-light","dark":"dracula"}}
docker pull oven/bun
docker run --rm --init --ulimit memlock=-1:-1 oven/bun
```

### Image Variants

There are also image variants for different operating systems:

```bash Docker icon="docker" theme={"theme":{"light":"github-light","dark":"dracula"}}
docker pull oven/bun:debian
docker pull oven/bun:slim
docker pull oven/bun:distroless
docker pull oven/bun:alpine
```
````

To check that Bun was installed successfully, open a new terminal window and run:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun --version
# Output: 1.x.y

# See the precise commit of `oven-sh/bun` that you're using
bun --revision
# Output: 1.x.y+b7982ac13189
```

If you've installed Bun but are seeing a `command not found` error, you may have to manually add the installation
directory (`~/.bun/bin`) to your `PATH`.

````
      ```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
      echo $SHELL
      # /bin/zsh  or /bin/bash or /bin/fish
      ```
    

    
      * For bash: `~/.bashrc`
      * For zsh: `~/.zshrc`
      * For fish: `~/.config/fish/config.fish`
    

    
      Add this line to your configuration file:

      ```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
      export BUN_INSTALL="$HOME/.bun"
      export PATH="$BUN_INSTALL/bin:$PATH"
      ```
    

    
      ```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
      source ~/.bashrc  # or ~/.zshrc
      ```
    
  



  
    
      ```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
      & "$env:USERPROFILE\.bun\bin\bun" --version
      ```

      If the command runs successfully but `bun --version` is not recognized, it means that bun is not in your system's PATH. To fix this, open a Powershell terminal and run the following command:

      ```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
      [System.Environment]::SetEnvironmentVariable(
        "Path",
        [System.Environment]::GetEnvironmentVariable("Path", "User") + ";$env:USERPROFILE\.bun\bin",
        [System.EnvironmentVariableTarget]::User
      )
      ```
    

    
      After running the command, restart your terminal and test with `bun --version`

      ```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
      bun --version
      ```
    
  
````

***

## Upgrading

Once installed, the binary can upgrade itself:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun upgrade
```

**Homebrew users**
To avoid conflicts with Homebrew, use `brew upgrade bun` instead.

**Scoop users**
To avoid conflicts with Scoop, use `scoop update bun` instead.

***

## Canary Builds

[-> View canary build](https://github.com/oven-sh/bun/releases/tag/canary)

Bun automatically releases an (untested) canary build on every commit to main. To upgrade to the latest canary build:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
# Upgrade to latest canary
bun upgrade --canary

# Switch back to stable
bun upgrade --stable
```

The canary build is useful for testing new features and bug fixes before they're released in a stable build. To help the Bun team fix bugs faster, canary builds automatically upload crash reports to Bun's team.

***

## Installing Older Versions

Since Bun is a single binary, you can install older versions by re-running the installer script with a specific version.

````
To install a specific version, pass the git tag to the install script:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
curl -fsSL https://bun.com/install | bash -s "bun-v1.3.3"
```



On Windows, pass the version number to the PowerShell install script:

```powershell PowerShell icon="windows" theme={"theme":{"light":"github-light","dark":"dracula"}}
iex "& {$(irm https://bun.com/install.ps1)} -Version 1.3.3"
```
````

***

## Direct Downloads

To download Bun binaries directly, visit the [releases page on GitHub](https://github.com/oven-sh/bun/releases).

### Latest Version Downloads

```
Standard Linux x64 binary



For older CPUs without AVX2



Standard Windows binary



For older CPUs without AVX2



Windows on ARM (Snapdragon, etc.)



Apple Silicon (M1/M2/M3)



Intel Macs



ARM64 Linux systems
```

### Musl Binaries

For distributions without `glibc` (Alpine Linux, Void Linux):

- [Linux x64 musl](https://github.com/oven-sh/bun/releases/latest/download/bun-linux-x64-musl.zip)
- [Linux x64 musl baseline](https://github.com/oven-sh/bun/releases/latest/download/bun-linux-x64-musl-baseline.zip)
- [Linux ARM64 musl](https://github.com/oven-sh/bun/releases/latest/download/bun-linux-aarch64-musl.zip)

  If you encounter an error like `bun: /lib/x86_64-linux-gnu/libm.so.6: version GLIBC_2.29 not found`, try using the
  musl binary. Bun's install script automatically chooses the correct binary for your system.

***

## CPU Requirements

Bun has specific CPU requirements based on the binary you're using:

```
**x64 binaries** target the Haswell CPU architecture (AVX and AVX2 instructions required)

| Platform | Intel Requirement               | AMD Requirement    |
| -------- | ------------------------------- | ------------------ |
| x64      | Haswell (4th gen Core) or newer | Excavator or newer |



**x64-baseline binaries** target the Nehalem architecture for older CPUs

| Platform     | Intel Requirement               | AMD Requirement    |
| ------------ | ------------------------------- | ------------------ |
| x64-baseline | Nehalem (1st gen Core) or newer | Bulldozer or newer |


  Baseline builds are slower than regular builds. Use them only if you encounter an "Illegal
  Instruction" error.
```

Bun does not support CPUs older than the baseline target, which mandates the SSE4.2 extension. macOS requires version
13.0 or later.

***

## Uninstall

To remove Bun from your system:

````
```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
rm -rf ~/.bun
```



```powershell PowerShell icon="windows" theme={"theme":{"light":"github-light","dark":"dracula"}}
powershell -c ~\.bun\uninstall.ps1
```




  ```bash npm icon="npm" theme={"theme":{"light":"github-light","dark":"dracula"}}
  npm uninstall -g bun
  ```

  ```bash Homebrew icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/homebrew.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5c6dc69e5e0d20fb807fba0a9cd45023" theme={"theme":{"light":"github-light","dark":"dracula"}}
  brew uninstall bun
  ```

  ```bash Scoop icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
  scoop uninstall bun
  ```
````
