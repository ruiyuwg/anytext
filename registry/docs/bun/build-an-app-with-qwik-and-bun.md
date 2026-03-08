# Build an app with Qwik and Bun

Source: https://bun.com/docs/guides/ecosystem/qwik

Initialize a new Qwik app with `bunx create-qwik`.

The `create-qwik` package detects when you are using `bunx` and will automatically install dependencies using `bun`.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun create qwik
```

```txts theme={"theme":{"light":"github-light","dark":"dracula"}}
      ............
    .::: :--------:.
   .::::  .:-------:.
  .:::::.   .:-------.
  ::::::.     .:------.
 ::::::.        :-----:
 ::::::.       .:-----.
  :::::::.     .-----.
   ::::::::..   ---:.
    .:::::::::. :-:.
     ..::::::::::::
             ...::::


┌  Let's create a  Qwik App  ✨ (v1.2.10)
│
◇  Where would you like to create your new project? (Use '.' or './' for current directory)
│  ./my-app
│
●  Creating new project in  /path/to/my-app  ... 🐇
│
◇  Select a starter
│  Basic App
│
◇  Would you like to install bun dependencies?
│  Yes
│
◇  Initialize a new git repository?
│  No
│
◇  Finishing the install. Wanna hear a joke?
│  Yes
│
○  ────────────────────────────────────────────────────────╮
│                                                          │
│  How do you know if there’s an elephant under your bed?  │
│  Your head hits the ceiling!                             │
│                                                          │
├──────────────────────────────────────────────────────────╯
│
◇  App Created 🐰
│
◇  Installed bun dependencies 📋
│
○  Result ─────────────────────────────────────────────╮
│                                                      │
│  Success!  Project created in my-app directory       │
│                                                      │
│  Integrations? Add Netlify, Cloudflare, Tailwind...  │
│  bun qwik add                                        │
│                                                      │
│  Relevant docs:                                      │
│  https://qwik.dev/docs/getting-started/              │
│                                                      │
│  Questions? Start the conversation at:               │
│  https://qwik.dev/chat                               │
│  https://twitter.com/QwikDev                         │
│                                                      │
│  Presentations, Podcasts and Videos:                 │
│  https://qwik.dev/media/                             │
│                                                      │
│  Next steps:                                         │
│  cd my-app                                           │
│  bun start                                           │
│                                                      │
│                                                      │
├──────────────────────────────────────────────────────╯
│
└  Happy coding! 🎉

```

***

Run `bun run dev` to start the development server.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun run dev
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
$ vite--mode ssr

VITE v4.4.7  ready in 1190 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h to show help
```

***

Open <http://localhost:5173> with your browser to see the result. Qwik will hot-reload your app as you edit your source files.

![Qwik screenshot](https://github.com/oven-sh/bun/assets/3084745/ec35f2f7-03dd-4c90-851e-fb4ad150bb28)

***

Refer to the [Qwik docs](https://qwik.dev/docs/getting-started/) for complete documentation.

# Build a React app with Bun

Source: https://bun.com/docs/guides/ecosystem/react

Bun supports `.jsx` and `.tsx` files out of the box. React just works with Bun.

Create a new React app with `bun init --react`. This gives you a template with a simple React app and a simple API server together in one full-stack app.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
# Create a new React app
bun init --react

# Run the app in development mode
bun dev

# Build as a static site for production
bun run build

# Run the server in production
bun start
```

***

### Hot Reloading

Run `bun dev` to start the app in development mode. This will start the API server and the React app with hot reloading.

### Full-Stack App

Run `bun start` to start the API server and frontend together in one process.

### Static Site

Run `bun run build` to build the app as a static site. This will create a `dist` directory with the built app and all the assets.

```txt File Tree icon="folder-tree" theme={"theme":{"light":"github-light","dark":"dracula"}}
├── src/
│   ├── index.tsx       # Server entry point with API routes
│   ├── frontend.tsx    # React app entry point with HMR
│   ├── App.tsx         # Main React component
│   ├── APITester.tsx   # Component for testing API endpoints
│   ├── index.html      # HTML template
│   ├── index.css       # Styles
│   └── *.svg           # Static assets
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── bunfig.toml         # Bun configuration
└── bun.lock            # Lock file
```
