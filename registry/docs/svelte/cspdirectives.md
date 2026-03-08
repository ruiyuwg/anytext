## CspDirectives

```dts
interface CspDirectives {/*…*/}
```

```dts
'child-src'?: Csp.Sources;
```

```dts
'default-src'?: Array<Csp.Source | Csp.ActionSource>;
```

```dts
'frame-src'?: Csp.Sources;
```

```dts
'worker-src'?: Csp.Sources;
```

```dts
'connect-src'?: Csp.Sources;
```

```dts
'font-src'?: Csp.Sources;
```

```dts
'img-src'?: Csp.Sources;
```

```dts
'manifest-src'?: Csp.Sources;
```

```dts
'media-src'?: Csp.Sources;
```

```dts
'object-src'?: Csp.Sources;
```

```dts
'prefetch-src'?: Csp.Sources;
```

```dts
'script-src'?: Array<Csp.Source | Csp.ActionSource>;
```

```dts
'script-src-elem'?: Csp.Sources;
```

```dts
'script-src-attr'?: Csp.Sources;
```

```dts
'style-src'?: Array<Csp.Source | Csp.ActionSource>;
```

```dts
'style-src-elem'?: Csp.Sources;
```

```dts
'style-src-attr'?: Csp.Sources;
```

```dts
'base-uri'?: Array<Csp.Source | Csp.ActionSource>;
```

```dts
sandbox?: Array<
| 'allow-downloads-without-user-activation'
| 'allow-forms'
| 'allow-modals'
| 'allow-orientation-lock'
| 'allow-pointer-lock'
| 'allow-popups'
| 'allow-popups-to-escape-sandbox'
| 'allow-presentation'
| 'allow-same-origin'
| 'allow-scripts'
| 'allow-storage-access-by-user-activation'
| 'allow-top-navigation'
| 'allow-top-navigation-by-user-activation'
>;
```

```dts
'form-action'?: Array<Csp.Source | Csp.ActionSource>;
```

```dts
'frame-ancestors'?: Array<Csp.HostSource | Csp.SchemeSource | Csp.FrameSource>;
```

```dts
'navigate-to'?: Array<Csp.Source | Csp.ActionSource>;
```

```dts
'report-uri'?: string[];
```

```dts
'report-to'?: string[];
```

```dts
'require-trusted-types-for'?: Array<'script'>;
```

```dts
'trusted-types'?: Array<'none' | 'allow-duplicates' | '*' | string>;
```

```dts
'upgrade-insecure-requests'?: boolean;
```

```dts
'require-sri-for'?: Array<'script' | 'style' | 'script style'>;
```

- deprecated

```dts
'block-all-mixed-content'?: boolean;
```

- deprecated

```dts
'plugin-types'?: Array<`${string}/${string}` | 'none'>;
```

- deprecated

```dts
referrer?: Array<
| 'no-referrer'
| 'no-referrer-when-downgrade'
| 'origin'
| 'origin-when-cross-origin'
| 'same-origin'
| 'strict-origin'
| 'strict-origin-when-cross-origin'
| 'unsafe-url'
| 'none'
>;
```

- deprecated

## DeepPartial

```dts
type DeepPartial<T> = T extends
	| Record<PropertyKey, unknown>
	| unknown[]
	? {
			[K in keyof T]?: T[K] extends
				| Record<PropertyKey, unknown>
				| unknown[]
				? DeepPartial<T[K]>
				: T[K];
		}
	: T | undefined;
```

## HttpMethod

```dts
type HttpMethod =
	| 'GET'
	| 'HEAD'
	| 'POST'
	| 'PUT'
	| 'DELETE'
	| 'PATCH'
	| 'OPTIONS';
```

## IsAny

```dts
type IsAny<T> = 0 extends 1 & T ? true : false;
```

## Logger

```dts
interface Logger {/*…*/}
```

```dts
(msg: string): void;
```

```dts
success(msg: string): void;
```

```dts
error(msg: string): void;
```

```dts
warn(msg: string): void;
```

```dts
minor(msg: string): void;
```

```dts
info(msg: string): void;
```

## MaybePromise

```dts
type MaybePromise<T> = T | Promise<T>;
```

## PrerenderEntryGeneratorMismatchHandler

```dts
interface PrerenderEntryGeneratorMismatchHandler {/*…*/}
```

```dts
(details: { generatedFromId: string; entry: string; matchedId: string; message: string }): void;
```

## PrerenderEntryGeneratorMismatchHandlerValue

```dts
type PrerenderEntryGeneratorMismatchHandlerValue =
	| 'fail'
	| 'warn'
	| 'ignore'
	| PrerenderEntryGeneratorMismatchHandler;
```

## PrerenderHttpErrorHandler

```dts
interface PrerenderHttpErrorHandler {/*…*/}
```

```dts
(details: {
status: number;
path: string;
referrer: string | null;
referenceType: 'linked' | 'fetched';
message: string;
}): void;
```

## PrerenderHttpErrorHandlerValue

```dts
type PrerenderHttpErrorHandlerValue =
	| 'fail'
	| 'warn'
	| 'ignore'
	| PrerenderHttpErrorHandler;
```

## PrerenderMap

```dts
type PrerenderMap = Map<string, PrerenderOption>;
```

## PrerenderMissingIdHandler

```dts
interface PrerenderMissingIdHandler {/*…*/}
```

```dts
(details: { path: string; id: string; referrers: string[]; message: string }): void;
```

## PrerenderMissingIdHandlerValue

```dts
type PrerenderMissingIdHandlerValue =
	| 'fail'
	| 'warn'
	| 'ignore'
	| PrerenderMissingIdHandler;
```

## PrerenderOption

```dts
type PrerenderOption = boolean | 'auto';
```

## PrerenderUnseenRoutesHandler

```dts
interface PrerenderUnseenRoutesHandler {/*…*/}
```

```dts
(details: { routes: string[]; message: string }): void;
```

## PrerenderUnseenRoutesHandlerValue

```dts
type PrerenderUnseenRoutesHandlerValue =
	| 'fail'
	| 'warn'
	| 'ignore'
	| PrerenderUnseenRoutesHandler;
```

## Prerendered

```dts
interface Prerendered {/*…*/}
```

```dts
pages: Map<
string,
{
	/** The location of the .html file relative to the output directory */
	file: string;
}
>;
```

A map of `path` to `{ file }` objects, where a path like `/foo` corresponds to `foo.html` and a path like `/bar/` corresponds to `bar/index.html`.

```dts
assets: Map<
string,
{
	/** The MIME type of the asset */
	type: string;
}
>;
```

A map of `path` to `{ type }` objects.

```dts
redirects: Map<
string,
{
	status: number;
	location: string;
}
>;
```

A map of redirects encountered during prerendering.

```dts
paths: string[];
```

An array of prerendered paths (without trailing slashes, regardless of the trailingSlash config)

## RequestOptions

```dts
interface RequestOptions {/*…*/}
```

```dts
getClientAddress(): string;
```

```dts
platform?: App.Platform;
```

## RouteSegment

```dts
interface RouteSegment {/*…*/}
```

```dts
content: string;
```

```dts
dynamic: boolean;
```

```dts
rest: boolean;
```

## TrailingSlash

```dts
type TrailingSlash = 'never' | 'always' | 'ignore';
```
