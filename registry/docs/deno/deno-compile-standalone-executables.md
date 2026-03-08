# `deno compile`, standalone executables

> Compile your code into a standalone executable

URL: https://docs.deno.com/runtime/reference/cli/compile

## Flags

As with [`deno install`](/runtime/reference/cli/install/), the runtime flags
used to execute the script must be specified at compilation time. This includes
permission flags.

```sh
deno compile --allow-read --allow-net jsr:@std/http/file-server
```

[Script arguments](/runtime/getting_started/command_line_interface/#passing-script-arguments)
can be partially embedded.

```console
deno compile --allow-read --allow-net jsr:@std/http/file-server -p 8080

./file_server --help
```

## Cross Compilation

You can cross-compile binaries for other platforms by using the `--target` flag.

```
# Cross compile for Apple Silicon
deno compile --target aarch64-apple-darwin main.ts

# Cross compile for Windows with an icon
deno compile --target x86_64-pc-windows-msvc --icon ./icon.ico main.ts
```

### Supported Targets

Deno supports cross compiling to all targets regardless of the host platform.

| OS      | Architecture | Target                      |
| ------- | ------------ | --------------------------- |
| Windows | x86\_64       | `x86_64-pc-windows-msvc`    |
| macOS   | x86\_64       | `x86_64-apple-darwin`       |
| macOS   | ARM64        | `aarch64-apple-darwin`      |
| Linux   | x86\_64       | `x86_64-unknown-linux-gnu`  |
| Linux   | ARM64        | `aarch64-unknown-linux-gnu` |

## Icons

It is possible to add an icon to the executable by using the `--icon` flag when
targeting Windows. The icon must be in the `.ico` format.

```
deno compile --icon icon.ico main.ts

# Cross compilation with icon
deno compile --target x86_64-pc-windows-msvc --icon ./icon.ico main.ts
```

## Dynamic Imports

By default, statically analyzable dynamic imports (imports that have the string
literal within the `import("...")` call expression) will be included in the
output.

```ts
// calculator.ts and its dependencies will be included in the binary
const calculator = await import("./calculator.ts");
```

But non-statically analyzable dynamic imports won't:

```ts
const specifier = condition ? "./calc.ts" : "./better_calc.ts";
const calculator = await import(specifier);
```

To include non-statically analyzable dynamic imports, specify an
`--include <path>` flag.

```shell
deno compile --include calc.ts --include better_calc.ts main.ts
```

## Including Data Files or Directories

Starting in Deno 2.1, you can include files or directories in the executable by
specifying them via the `--include <path>` flag.

```shell
deno compile --include names.csv --include data main.ts
```

Then read the file relative to the directory path of the current module via
`import.meta.dirname`:

```ts
// main.ts
const names = Deno.readTextFileSync(import.meta.dirname + "/names.csv");
const dataFiles = Deno.readDirSync(import.meta.dirname + "/data");

// use names and dataFiles here
```

Note this currently only works for files on the file system and not remote
files.

## Workers

Similarly to non-statically analyzable dynamic imports, code for
[workers](../web_platform_apis/#web-workers) is not included in the compiled
executable by default. There are two ways to include workers:

1. Use the `--include <path>` flag to include the worker code.

```shell
deno compile --include worker.ts main.ts
```

2. Import worker module using a statically analyzable import.

```ts
// main.ts
import "./worker.ts";
```

```shell
deno compile main.ts
```

## Self-Extracting Executables

By default, compiled executables serve embedded files from an in-memory virtual
file system. The `--self-extracting` flag changes this behavior so that the
binary extracts all embedded files to disk on first run and uses real file
system operations at runtime.

```shell
deno compile --self-extracting main.ts
```

This is useful for scenarios where code needs real files on disk, such as native
addons or native code that reads relative files.

The extraction directory is chosen in order of preference:

1. `<exe_dir>/<exe_name>.fs/<hash>/` (next to the compiled binary)
2. Platform data directory fallback:
   - Linux: `$XDG_DATA_HOME/<exe_name>/<hash>` or
     `~/.local/share/<exe_name>/<hash>`
   - macOS: `~/Library/Application Support/<exe_name>/<hash>`
   - Windows: `%LOCALAPPDATA%\<exe_name>\<hash>`

Files are only extracted once — subsequent runs reuse the extracted directory if
it already exists and the hash matches.

### Trade-offs

Self-extracting mode enables broader compatibility, but comes with some
trade-offs:

- **Initial startup cost**: The first run takes longer due to file extraction.
- **Disk usage**: Extracted files take up additional space on disk.
- **Memory usage**: Higher memory usage since embedded content can no longer be
  referenced as static data.
- **Tamper risk**: Users or other code can modify the extracted files on disk.

## Code Signing

### macOS

By default, on macOS, the compiled executable will be signed using an ad-hoc
signature which is the equivalent of running `codesign -s -`:

```shell
$ deno compile -o main main.ts
$ codesign --verify -vv ./main

./main: valid on disk
./main: satisfies its Designated Requirement
```

You can specify a signing identity when code signing the executable just like
you would do with any other macOS executable:

```shell
codesign -s "Developer ID Application: Your Name" ./main
```

Refer to the
[official documentation](https://developer.apple.com/documentation/security/notarizing-macos-software-before-distribution)
for more information on codesigning and notarization on macOS.

### Windows

On Windows, the compiled executable can be signed using the `SignTool.exe`
utility.

```shell
$ deno compile -o main.exe main.ts
$ signtool sign /fd SHA256 main.exe
```

## Unavailable in executables

- [Web Storage API](/runtime/reference/web_platform_apis/#web-storage)
- [Web Cache](/api/web/~/Cache)

***

# deno completions

> Generate shell completions for Deno

URL: https://docs.deno.com/runtime/reference/cli/completions

You can use the output script to configure autocompletion for `deno` commands.
For example: `deno un` -> <kbd>Tab</kbd> -> `deno uninstall`.

## Examples

### Configure Bash shell completion

```bash
deno completions bash > deno.bash

if [ -d "/usr/local/etc/bash_completion.d/" ]; then
  sudo mv deno.bash /usr/local/etc/bash_completion.d/
  source /usr/local/etc/bash_completion.d/deno.bash
elif [ -d "/usr/share/bash-completion/completions/" ]; then
  sudo mv deno.bash /usr/share/bash-completion/completions/
  source /usr/share/bash-completion/completions/deno.bash
else
  echo "Please move deno.bash to the appropriate bash completions directory"
fi
```

### Configure PowerShell shell completion

```bash
deno completions powershell | Out-String | Invoke-Expression
```

### Configure zsh shell completion

First add the following to your `.zshrc` file:

```bash
fpath=(~/.zsh/completion $fpath)
autoload -U compinit
compinit
```

Then run the following commands:

```bash
deno completions zsh > _deno
mv _deno ~/.zsh/completion/_deno
autoload -U compinit && compinit
```

### Configure fish shell completion

```bash
deno completions fish > completions.fish
chmod +x ./completions.fish
```

***
