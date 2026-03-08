# PRD: Cloud Provider Documentation Support

## Introduction

Add documentation for major cloud providers (AWS, Azure, Google Cloud, Alibaba Cloud, Cloudflare) to the anytext registry. Cloud providers differ fundamentally from framework/library docs: they are platforms with hundreds of services, each with its own doc structure. This requires new adapter capabilities, a scalable topic organization strategy, and infrastructure to handle 10,000+ topics per provider.

Each provider is treated as a single library (e.g., `aws`, `cloudflare`) with services as topic groups, using compound topic IDs like `lambda-creating-functions` or `workers-routing`. This keeps the registry organized without requiring CLI changes for hierarchical navigation.

## Goals

- Support all 5 cloud providers as first-class libraries in anytext
- Handle 10,000+ topics per provider without degrading CLI performance
- Create reusable adapter infrastructure for two-level llms.txt indices and sitemap indices
- Maintain 100% test coverage across all new code
- Preserve existing scraper architecture (pipeline: fetch → clean → split → stage → commit)

## User Stories

### US-001: Create `llms-index` adapter for two-level llms.txt structures
**Description:** As a developer adding cloud providers, I need an adapter that follows a root llms.txt index to per-service llms.txt/llms-full.txt files, so that I can ingest AWS (~600 services) and Cloudflare (~170 products) from their published LLM documentation indices.

**Acceptance Criteria:**
- [ ] New adapter type `"llms-index"` added to the adapter union in `types.ts`
- [ ] New `LlmsIndexConfig` type with fields: `servicePattern` (regex to extract service URLs from root index), `contentType` (`"llms-txt"` or `"llms-full"` — whether linked files are indices of pages or single large docs), `include`/`exclude` (regex patterns to filter discovered services), `maxServices` (safety limit, default 1000)
- [ ] Adapter fetches root URL, extracts per-service URLs via regex pattern matching
- [ ] For `contentType: "llms-full"`: fetches each service URL, cleans, splits into topics; prefixes all topic IDs with the service slug (e.g., `workers-routing`)
- [ ] For `contentType: "llms-txt"`: fetches each service URL, parses as llms.txt index, follows linked pages, cleans each page; prefixes topic IDs with service slug
- [ ] Concurrent service processing: batch of 4 services at a time (each service may have internal concurrency for page fetches)
- [ ] Graceful degradation: individual service failures logged and skipped, processing continues
- [ ] Empty/tiny services (< 2 topics) are skipped with a warning
- [ ] Console output: progress logging showing `Processing service X/Y: {serviceName}`
- [ ] All existing pipeline steps apply: configurable preprocessing, staging writes, incremental hashing
- [ ] Typecheck and lint pass
- [ ] Unit tests with 100% coverage: mock `fetch`, test service discovery, test both content types, test error handling, test include/exclude filtering, test maxServices limit

### US-002: Add sitemap index support to sitemap adapter
**Description:** As a developer adding Google Cloud docs, I need the sitemap adapter to handle sitemap index files (a sitemap that lists other sitemaps), so that I can ingest docs from providers that split their sitemaps across many sub-files.

**Acceptance Criteria:**
- [ ] Sitemap adapter detects sitemap index files (XML containing `<sitemapindex>` and `<sitemap><loc>` elements)
- [ ] When a sitemap index is detected: fetch each sub-sitemap URL, parse URLs from each, combine into a single URL list
- [ ] `include`/`exclude` patterns apply to the final combined URL list (not to sub-sitemap URLs)
- [ ] New optional config field `maxPages` (default 10000) — safety limit to prevent runaway crawling
- [ ] When `maxPages` is reached, log a warning and stop adding URLs
- [ ] Existing single-sitemap behavior unchanged (backwards compatible)
- [ ] Typecheck and lint pass
- [ ] Unit tests with 100% coverage: test sitemap index detection, sub-sitemap fetching, maxPages limit, backwards compatibility with simple sitemaps

### US-003: Enhance GitHub adapter for large repositories
**Description:** As a developer adding Azure docs, I need the GitHub adapter to handle very large repositories (26.7GB, 146 service directories) efficiently, so that I can ingest Azure documentation from `MicrosoftDocs/azure-docs`.

**Acceptance Criteria:**
- [ ] New optional config field `subDirs` (string array) — when set, only fetch files within these subdirectories of `docsPath` (e.g., `["azure-functions", "app-service", "cosmos-db"]`)
- [ ] When `subDirs` is not set, existing behavior (fetch all files under `docsPath`) is preserved
- [ ] Topic IDs are prefixed with the subdirectory name (e.g., `azure-functions-overview`, `cosmos-db-introduction`)
- [ ] New optional config field `maxFiles` (default 10000) — safety limit
- [ ] Handle GitHub API tree response truncation: if `truncated: true` in response, log a warning; fall back to per-directory Contents API calls for each subDir
- [ ] Typecheck and lint pass
- [ ] Unit tests with 100% coverage: test subDirs filtering, topic ID prefixing, maxFiles limit, tree truncation handling, backwards compatibility

### US-004: Add Cloudflare documentation
**Description:** As a coding agent user, I want to access Cloudflare documentation so that I can get accurate API references for Workers, Pages, R2, D1, and all other Cloudflare products.

**Acceptance Criteria:**
- [ ] New source entry in `sources.json` with `id: "cloudflare"`, `adapter: "llms-index"`
- [ ] Root URL: `https://developers.cloudflare.com/llms.txt`
- [ ] `contentType: "llms-full"` — each per-product link is an llms-full.txt file
- [ ] No `include`/`exclude` — ingest all ~170 products
- [ ] Scraper runs successfully: `node dist/index.js --library cloudflare`
- [ ] Generated topics are well-formed: each has valid id, title, description, content
- [ ] Topic IDs follow pattern: `{product}-{topic}` (e.g., `workers-routing`, `r2-api`)
- [ ] Registry docs written to `registry/docs/cloudflare/`
- [ ] `registry/manifest.json` updated with Cloudflare entry
- [ ] Topic count is reasonable (500+ expected)

### US-005: Add AWS documentation
**Description:** As a coding agent user, I want to access AWS documentation so that I can get accurate references for Lambda, S3, EC2, DynamoDB, and all other AWS services.

**Acceptance Criteria:**
- [ ] New source entry in `sources.json` with `id: "aws"`, `adapter: "llms-index"`
- [ ] Root URL: `https://docs.aws.amazon.com/llms.txt`
- [ ] `contentType: "llms-txt"` — each per-service link is an llms.txt index of pages
- [ ] No `include`/`exclude` — ingest all available services
- [ ] Scraper runs successfully: `node dist/index.js --library aws`
- [ ] Generated topics are well-formed: each has valid id, title, description, content
- [ ] Topic IDs follow pattern: `{service}-{topic}` (e.g., `lambda-creating-functions`, `s3-bucket-operations`)
- [ ] Registry docs written to `registry/docs/aws/`
- [ ] `registry/manifest.json` updated with AWS entry
- [ ] Topic count is reasonable (5000+ expected given ~600 services)

### US-006: Add Azure documentation
**Description:** As a coding agent user, I want to access Azure documentation so that I can get accurate references for Azure Functions, App Service, Cosmos DB, and all other Azure services.

**Acceptance Criteria:**
- [ ] New source entry in `sources.json` with `id: "azure"`, `adapter: "github"`
- [ ] GitHub config: `repo: "MicrosoftDocs/azure-docs"`, `docsPath: "articles"`, `branch: "main"`
- [ ] No `subDirs` filter — ingest all 146 service directories
- [ ] Scraper runs successfully: `node dist/index.js --library azure`
- [ ] Generated topics follow pattern: `{service-dir}-{topic}` (e.g., `azure-functions-overview`)
- [ ] Registry docs written to `registry/docs/azure/`
- [ ] `registry/manifest.json` updated with Azure entry
- [ ] Topic count is reasonable (2000+ expected)

### US-007: Add Google Cloud documentation
**Description:** As a coding agent user, I want to access Google Cloud documentation so that I can get accurate references for Cloud Functions, Cloud Storage, BigQuery, and all other GCP services.

**Acceptance Criteria:**
- [ ] New source entry in `sources.json` with `id: "gcloud"`, `adapter: "sitemap"`
- [ ] URL: `https://cloud.google.com/sitemap.xml` (sitemap index)
- [ ] `include` pattern to scope to `/docs/` URLs
- [ ] `exclude` pattern to skip `/docs/release-notes/`, changelogs, and non-English locales
- [ ] `contentSelector` targeting `.devsite-article-body` or equivalent
- [ ] `maxPages` set to a reasonable limit (e.g., 10000)
- [ ] Scraper runs successfully: `node dist/index.js --library gcloud`
- [ ] Generated topics are well-formed with valid content extracted from HTML
- [ ] Registry docs written to `registry/docs/gcloud/`
- [ ] `registry/manifest.json` updated with Google Cloud entry

### US-008: Add Alibaba Cloud documentation
**Description:** As a coding agent user, I want to access Alibaba Cloud documentation so that I can get accurate references for ECS, OSS, Function Compute, and other Alibaba Cloud services.

**Acceptance Criteria:**
- [ ] Research `AlibabaCloudDocs` GitHub org for any usable documentation repos
- [ ] If GitHub repos found: use `github` adapter with appropriate config
- [ ] If no GitHub repos: use `html` adapter with `startPaths` pointing to top service doc pages on `alibabacloud.com/help/en/`
- [ ] Source entry added to `sources.json` with `id: "alibabacloud"`
- [ ] `include`/`exclude` patterns to scope to English documentation
- [ ] Scraper runs successfully: `node dist/index.js --library alibabacloud`
- [ ] Registry docs written to `registry/docs/alibabacloud/`
- [ ] `registry/manifest.json` updated with Alibaba Cloud entry

### US-009: Service-prefixed topic IDs across all adapters
**Description:** As a developer, I need adapters to support prefixing topic IDs with a service/directory name, so that topics from different services within the same cloud provider don't collide.

**Acceptance Criteria:**
- [ ] New optional config field `topicPrefix` strategy in `SourceConfig`: `"none"` (default, current behavior), `"directory"` (use parent directory name), `"auto"` (adapter decides based on structure)
- [ ] `llms-index` adapter: automatically prefixes with discovered service slug
- [ ] `github` adapter: when `subDirs` is set or `docsPath` has subdirectories, prefixes with subdirectory name
- [ ] `sitemap` adapter: derives prefix from URL path segments (e.g., `/docs/functions/overview` → `functions-overview`)
- [ ] Existing non-cloud sources unaffected (no prefix by default)
- [ ] Typecheck and lint pass
- [ ] Unit tests with 100% coverage

### US-010: CLI performance with large libraries
**Description:** As a CLI user, I want `anytext list`, `anytext search`, and `anytext read` to remain fast even when the manifest contains 50,000+ topics across cloud providers.

**Acceptance Criteria:**
- [ ] `anytext list` without arguments completes in < 200ms with a 50K-topic manifest
- [ ] `anytext list {library}` shows topic count and service groups, not individual topics (for libraries with > 100 topics, show service summary)
- [ ] `anytext list {library} {service}` lists topics within a specific service (new command variant)
- [ ] `anytext search` still works across all topics; results grouped by library
- [ ] `anytext read` unchanged — reads specific topic by ID
- [ ] Manifest size stays reasonable: test that a 50K-topic manifest is < 10MB JSON
- [ ] Typecheck and lint pass
- [ ] Unit tests with 100% coverage for new list behavior

### US-011: Scraper rate limiting and politeness
**Description:** As a responsible scraper, the system must respect rate limits and avoid overwhelming documentation servers.

**Acceptance Criteria:**
- [ ] Configurable per-host rate limiting: new `rateLimit` field in source config (requests per second, default 10)
- [ ] Delay between requests to the same host (1000ms / rateLimit)
- [ ] GitHub adapter respects GitHub API rate limits: check `X-RateLimit-Remaining` header, pause when approaching limit
- [ ] Sitemap/HTML adapters respect `Crawl-delay` from robots.txt (best effort — fetch robots.txt once per host)
- [ ] Console warning when rate limit is hit, with ETA to resume
- [ ] Typecheck and lint pass
- [ ] Unit tests with 100% coverage

### US-012: Update README and documentation
**Description:** As a user or contributor, I want the README and CLAUDE.md to accurately reflect the new cloud provider support.

**Acceptance Criteria:**
- [ ] README Supported Libraries table updated with all 5 cloud providers
- [ ] README updated with cloud provider usage examples: `anytext list aws`, `anytext list aws lambda`, `anytext read aws lambda-creating-functions`
- [ ] CLAUDE.md updated with new adapter type (`llms-index`) and new config fields
- [ ] `sources.json` examples in README updated
- [ ] Typecheck and lint pass

## Functional Requirements

### Adapter Infrastructure

- FR-1: New `llms-index` adapter type that discovers services from a root llms.txt index and processes each service's documentation (either as llms-full.txt or llms.txt)
- FR-2: Sitemap adapter must detect and expand sitemap index files (`<sitemapindex>` XML) into a combined URL list from all sub-sitemaps
- FR-3: GitHub adapter must support `subDirs` config to scope to specific subdirectories within a large repo's `docsPath`
- FR-4: GitHub adapter must handle tree API truncation by falling back to per-directory Contents API calls
- FR-5: All adapters must support a `maxPages`/`maxFiles`/`maxServices` safety limit to prevent runaway processing

### Topic Organization

- FR-6: Cloud provider topics must use compound IDs: `{service-slug}-{topic-slug}` (e.g., `workers-routing`, `lambda-handler`)
- FR-7: Topic titles must include service context (e.g., "Workers: Routing" or "Lambda: Creating Functions")
- FR-8: Each provider is a single library entry in the manifest (one source config in `sources.json`)

### Rate Limiting & Politeness

- FR-9: Per-host rate limiting with configurable requests-per-second
- FR-10: GitHub adapter must monitor `X-RateLimit-Remaining` and pause when approaching the limit
- FR-11: Fetch failures due to rate limiting (HTTP 429) must trigger automatic backoff and retry

### CLI Enhancements

- FR-12: `anytext list {library}` for libraries with > 100 topics must show grouped summary by service prefix (e.g., "workers (45 topics), pages (23 topics)") rather than listing all topics
- FR-13: `anytext list {library} {service}` must list topics within a specific service group
- FR-14: All CLI commands must perform adequately with a 50K+ topic manifest (< 500ms for any operation)

### Source Configurations

- FR-15: Cloudflare source uses `llms-index` adapter with root `https://developers.cloudflare.com/llms.txt`, `contentType: "llms-full"`
- FR-16: AWS source uses `llms-index` adapter with root `https://docs.aws.amazon.com/llms.txt`, `contentType: "llms-txt"`
- FR-17: Azure source uses `github` adapter with `MicrosoftDocs/azure-docs` repo, `docsPath: "articles"`
- FR-18: Google Cloud source uses `sitemap` adapter with `https://cloud.google.com/sitemap.xml`, `include: ["/docs/"]`
- FR-19: Alibaba Cloud source uses `github` adapter (preferred) or `html` adapter, targeting English documentation

## Non-Goals

- No support for Tencent Cloud (client-side SPA, requires headless browser)
- No real-time documentation updates — weekly CI refresh is sufficient
- No authentication-gated documentation (all sources must be publicly accessible)
- No documentation translation — English only (or international English site for Chinese providers)
- No custom headless browser / Puppeteer / Playwright integration
- No per-service caching granularity — incremental hashing remains per-provider
- No interactive service browsing in CLI (just list/search/read)

## Technical Considerations

### New Dependencies
- None expected for the `llms-index` adapter (reuses existing fetch, clean, split pipeline)
- Sitemap index parsing reuses existing regex-based `<loc>` extraction
- May need to evaluate XML parser if regex proves insufficient for complex sitemap indices

### Performance & Scale
- AWS could produce 5,000-10,000+ topics; Cloudflare ~1,000-2,000; Azure ~3,000-5,000; GCP variable
- Total registry could grow from 2,740 topics to 15,000-25,000+ topics
- Manifest JSON size: ~5-15MB at scale — may need to evaluate lazy loading or split manifests in future
- GitHub raw file fetches at scale: need `GITHUB_TOKEN` for Azure (5000 req/hr vs 60/hr unauthenticated)
- Scraper full run time will increase significantly — incremental hashing becomes critical

### Existing Infrastructure Reuse
- `fetchContent()` with retries and timeout — all adapters
- `cleanMarkdown()` with configurable preprocessing — llms-index, github
- `splitTopics()` with offset-based splitting — llms-index (for llms-full content type)
- Staging writes and atomic commits — all adapters
- Incremental hashing — all providers (hash the root index content to detect changes)

### Risk Areas
- **GitHub tree API truncation**: Azure's repo is 26.7GB; the recursive tree endpoint may return `truncated: true`. Fallback to Contents API needed.
- **AWS llms.txt link format**: Need to verify the exact regex pattern for extracting per-service URLs from the root index. Format may vary.
- **Cloudflare per-product llms-full.txt size**: Some products may have very large files (> 1MB). The existing split pipeline handles this but processing time adds up across 170 products.
- **Google Cloud sitemap scale**: 180 sub-sitemaps could yield 50,000+ URLs. The `maxPages` limit and include/exclude filtering are essential.
- **Alibaba Cloud docs structure**: May require significant trial-and-error to find the right adapter config.

### CI Impact
- Weekly update workflow will take significantly longer (hours vs minutes)
- Consider splitting CI into per-provider jobs for parallelism
- `GITHUB_TOKEN` must be available in CI for Azure doc fetching
- May need to increase CI timeout limits

## Success Metrics

- All 5 cloud providers available via `anytext list`
- Each provider has a reasonable topic count (Cloudflare 500+, AWS 5000+, Azure 2000+, GCP 1000+, Alibaba 200+)
- `anytext read aws lambda-creating-functions` returns clean, useful markdown
- `anytext search "serverless function"` returns relevant results across providers
- Full scraper run completes within 2 hours (with concurrency)
- No regression in existing library quality or CLI performance
- 100% test coverage maintained across all new and modified code

## Open Questions

1. **AWS llms.txt link format**: What exact format do per-service links use in the root llms.txt? Need to verify regex for service URL extraction.
2. **Manifest size at scale**: Should we consider splitting the manifest per-library or implementing lazy loading when the manifest exceeds ~10MB?
3. **Alibaba Cloud GitHub repos**: Are any repos in `AlibabaCloudDocs` org usable for documentation, or do they only contain supplementary resources?
4. **Google Cloud URL structure**: Do `/docs/` URLs follow a consistent pattern that maps cleanly to service names for topic ID prefixing?
5. **CI strategy**: Should cloud provider updates run on a separate schedule (e.g., monthly) given the processing time, or stay on the weekly schedule?
6. **Service discovery freshness**: When a cloud provider adds a new service, it appears in their index automatically. Should we have a mechanism to alert on newly discovered services?
