## Quick API Reference

[Section titled “Quick API Reference”](#quick-api-reference)

```ts
interface AstroIntegration {
  name: string;
  hooks: {
    'astro:config:setup'?: (options: {
      config: AstroConfig;
      command: 'dev' | 'build' | 'preview' | 'sync';
      isRestart: boolean;
      updateConfig: (newConfig: DeepPartial<AstroConfig>) => AstroConfig;
      addRenderer: (renderer: AstroRenderer) => void;
      addWatchFile: (path: URL | string) => void;
      addClientDirective: (directive: ClientDirectiveConfig) => void;
      addMiddleware: (middleware: AstroIntegrationMiddleware) => void;
      addDevToolbarApp: (entrypoint: DevToolbarAppEntry) => void;
      injectScript: (stage: InjectedScriptStage, content: string) => void;
      injectRoute: (injectedRoute: InjectedRoute) => void;
      createCodegenDir: () => URL;
      logger: AstroIntegrationLogger;
    }) => void | Promise<void>;
    'astro:route:setup'?: (options: {
      route: RouteOptions;
      logger: AstroIntegrationLogger;
    }) => void | Promise<void>;
    'astro:routes:resolved'?: (options: {
      routes: IntegrationResolvedRoute[];
      logger: AstroIntegrationLogger;
    }) => void | Promise<void>;
    'astro:config:done'?: (options: {
      config: AstroConfig;
      setAdapter: (adapter: AstroAdapter) => void;
      injectTypes: (injectedType: InjectedType) => URL;
      logger: AstroIntegrationLogger;
      buildOutput: 'static' | 'server';
    }) => void | Promise<void>;
    'astro:server:setup'?: (options: {
      server: vite.ViteDevServer;
      logger: AstroIntegrationLogger;
      toolbar: ReturnType<typeof getToolbarServerCommunicationHelpers>;
      refreshContent?: (options: RefreshContentOptions) => Promise<void>;
    }) => void | Promise<void>;
    'astro:server:start'?: (options: {
      address: AddressInfo;
      logger: AstroIntegrationLogger;
    }) => void | Promise<void>;
    'astro:server:done'?: (options: {
      logger: AstroIntegrationLogger;
    }) => void | Promise<void>;
    'astro:build:start'?: (options: {
      logger: AstroIntegrationLogger;
    }) => void | Promise<void>;
    'astro:build:setup'?: (options: {
      vite: vite.InlineConfig;
      pages: Map<string, PageBuildData>;
      target: 'client' | 'server';
      updateConfig: (newConfig: vite.InlineConfig) => void;
      logger: AstroIntegrationLogger;
    }) => void | Promise<void>;
    'astro:build:ssr'?: (options: {
      manifest: SerializedSSRManifest;
      entryPoints: Map<IntegrationRouteData, URL>;
      middlewareEntryPoint: URL | undefined;
      logger: AstroIntegrationLogger;
    }) => void | Promise<void>;
    'astro:build:generated'?: (options: {
      dir: URL;
      logger: AstroIntegrationLogger;
    }) => void | Promise<void>;
    'astro:build:done'?: (options: {
      pages: { pathname: string }[];
      dir: URL;
      assets: Map<string, URL[]>;
      logger: AstroIntegrationLogger;
    }) => void | Promise<void>;


    // ... any custom hooks from integrations
  };
}
```

## Hooks

[Section titled “Hooks”](#hooks)

Astro provides hooks that integrations can implement to execute during certain parts of Astro’s lifecycle. Astro hooks are defined in the `IntegrationHooks` interface, which is part of the global `Astro` namespace. Each hook has a [`logger` option](#astrointegrationlogger) that allows you to use the Astro logger to write logs.

The following hooks are built in to Astro:
