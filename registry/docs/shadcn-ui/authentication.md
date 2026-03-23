Sections

- [Introduction](/docs)
- [Components](/docs/components)
- [Installation](/docs/installation)
- [Theming](/docs/theming)
- [CLI](/docs/cli)
- [RTL](/docs/rtl)
- [Skills](/docs/skills)
- [MCP Server](/docs/mcp)
- [Registry](/docs/registry)
- [Forms](/docs/forms)
- [Changelog](/docs/changelog)

Components

- [Accordion](/docs/components/radix/accordion)
- [Alert](/docs/components/radix/alert)
- [Alert Dialog](/docs/components/radix/alert-dialog)
- [Aspect Ratio](/docs/components/radix/aspect-ratio)
- [Avatar](/docs/components/radix/avatar)
- [Badge](/docs/components/radix/badge)
- [Breadcrumb](/docs/components/radix/breadcrumb)
- [Button](/docs/components/radix/button)
- [Button Group](/docs/components/radix/button-group)
- [Calendar](/docs/components/radix/calendar)
- [Card](/docs/components/radix/card)
- [Carousel](/docs/components/radix/carousel)
- [Chart](/docs/components/radix/chart)
- [Checkbox](/docs/components/radix/checkbox)
- [Collapsible](/docs/components/radix/collapsible)
- [Combobox](/docs/components/radix/combobox)
- [Command](/docs/components/radix/command)
- [Context Menu](/docs/components/radix/context-menu)
- [Data Table](/docs/components/radix/data-table)
- [Date Picker](/docs/components/radix/date-picker)
- [Dialog](/docs/components/radix/dialog)
- [Direction](/docs/components/radix/direction)
- [Drawer](/docs/components/radix/drawer)
- [Dropdown Menu](/docs/components/radix/dropdown-menu)
- [Empty](/docs/components/radix/empty)
- [Field](/docs/components/radix/field)
- [Hover Card](/docs/components/radix/hover-card)
- [Input](/docs/components/radix/input)
- [Input Group](/docs/components/radix/input-group)
- [Input OTP](/docs/components/radix/input-otp)
- [Item](/docs/components/radix/item)
- [Kbd](/docs/components/radix/kbd)
- [Label](/docs/components/radix/label)
- [Menubar](/docs/components/radix/menubar)
- [Native Select](/docs/components/radix/native-select)
- [Navigation Menu](/docs/components/radix/navigation-menu)
- [Pagination](/docs/components/radix/pagination)
- [Popover](/docs/components/radix/popover)
- [Progress](/docs/components/radix/progress)
- [Radio Group](/docs/components/radix/radio-group)
- [Resizable](/docs/components/radix/resizable)
- [Scroll Area](/docs/components/radix/scroll-area)
- [Select](/docs/components/radix/select)
- [Separator](/docs/components/radix/separator)
- [Sheet](/docs/components/radix/sheet)
- [Sidebar](/docs/components/radix/sidebar)
- [Skeleton](/docs/components/radix/skeleton)
- [Slider](/docs/components/radix/slider)
- [Sonner](/docs/components/radix/sonner)
- [Spinner](/docs/components/radix/spinner)
- [Switch](/docs/components/radix/switch)
- [Table](/docs/components/radix/table)
- [Tabs](/docs/components/radix/tabs)
- [Textarea](/docs/components/radix/textarea)
- [Toast](/docs/components/radix/toast)
- [Toggle](/docs/components/radix/toggle)
- [Toggle Group](/docs/components/radix/toggle-group)
- [Tooltip](/docs/components/radix/tooltip)
- [Typography](/docs/components/radix/typography)

Get Started

- [Installation](/docs/installation)
- [components.json](/docs/components-json)
- [Theming](/docs/theming)
- [Dark Mode](/docs/dark-mode)
- [CLI](/docs/cli)
- [Monorepo](/docs/monorepo)
- [Skills](/docs/skills)
- [Open in v0](/docs/v0)
- [JavaScript](/docs/javascript)
- [Figma](/docs/figma)
- [llms.txt](/llms.txt)
- [Legacy Docs](/docs/legacy)

Forms

- [React Hook Form](/docs/forms/react-hook-form)
- [TanStack Form](/docs/forms/tanstack-form)

Registry

- [Introduction](/docs/registry)
- [Getting Started](/docs/registry/getting-started)
- [Namespaces](/docs/registry/namespace)
- [Authentication](/docs/registry/authentication)
- [Examples](/docs/registry/examples)
- [MCP Server](/docs/registry/mcp)
- [Add a Registry](/docs/registry/registry-index)
- [Open in v0](/docs/registry/open-in-v0)
- [registry.json](/docs/registry/registry-json)
- [registry-item.json](/docs/registry/registry-item-json)

# Authentication

Copy Page

[Previous](/docs/registry/namespace)[Next](/docs/registry/examples)

Secure your registry with authentication for private and personalized components.

Authentication lets you run private registries, control who can access your components, and give different teams or users different content. This guide shows common authentication patterns and how to set them up.

Authentication enables these use cases:

- **Private Components**: Keep your business logic and internal components secure
- **Team-Specific Resources**: Give different teams different components
- **Access Control**: Limit who can see sensitive or experimental components
- **Usage Analytics**: See who's using which components in your organization
- **Licensing**: Control who gets premium or licensed components

## Common Authentication Patterns

### Token-Based Authentication

The most common approach uses Bearer tokens or API keys:

components.json

Copy`{   "registries": {     "@private": {       "url": "https://registry.company.com/{name}.json",       "headers": {         "Authorization": "Bearer ${REGISTRY_TOKEN}"       }     }   } }`

Set your token in environment variables:

.env.local

Copy`REGISTRY_TOKEN=your_secret_token_here`

### API Key Authentication

Some registries use API keys in headers:

components.json

Copy`{   "registries": {     "@company": {       "url": "https://api.company.com/registry/{name}.json",       "headers": {         "X-API-Key": "${API_KEY}",         "X-Workspace-Id": "${WORKSPACE_ID}"       }     }   } }`

### Query Parameter Authentication

For simpler setups, use query parameters:

components.json

Copy`{   "registries": {     "@internal": {       "url": "https://registry.company.com/{name}.json",       "params": {         "token": "${ACCESS_TOKEN}"       }     }   } }`

This creates: `https://registry.company.com/button.json?token=your_token`

## Server-Side Implementation

Here's how to add authentication to your registry server:

### Next.js API Route Example

app/api/registry/\[name]/route.ts

Copy`import { NextRequest, NextResponse } from "next/server"   export async function GET(   request: NextRequest,   { params }: { params: { name: string } } ) {   // Get token from Authorization header.   const authHeader = request.headers.get("authorization")   const token = authHeader?.replace("Bearer ", "")     // Or from query parameters.   const queryToken = request.nextUrl.searchParams.get("token")     // Check if token is valid.   if (!isValidToken(token || queryToken)) {     return NextResponse.json({ error: "Unauthorized" }, { status: 401 })   }     // Check if token can access this component.   if (!hasAccessToComponent(token, params.name)) {     return NextResponse.json({ error: "Forbidden" }, { status: 403 })   }     // Return the component.   const component = await getComponent(params.name)   return NextResponse.json(component) }   function isValidToken(token: string | null) {   // Add your token validation logic here.   // Check against database, JWT validation, etc.   return token === process.env.VALID_TOKEN }   function hasAccessToComponent(token: string, componentName: string) {   // Add role-based access control here.   // Check if token can access specific component.   return true // Your logic here. }`

### Express.js Example

server.js

Copy`app.get("/registry/:name.json", (req, res) => {   const token = req.headers.authorization?.replace("Bearer ", "")     if (!isValidToken(token)) {     return res.status(401).json({ error: "Unauthorized" })   }     const component = getComponent(req.params.name)   if (!component) {     return res.status(404).json({ error: "Component not found" })   }     res.json(component) })`

## Advanced Authentication Patterns

### Team-Based Access

Give different teams different components:

api/registry/route.ts

Copy`async function GET(request: NextRequest) {   const token = extractToken(request)   const team = await getTeamFromToken(token)     // Get components for this team.   const components = await getComponentsForTeam(team)   return NextResponse.json(components) }`

### User-Personalized Registries

Give users components based on their preferences:

Copy`async function GET(request: NextRequest) {   const user = await authenticateUser(request)     // Get user's style and framework preferences.   const preferences = await getUserPreferences(user.id)     // Get personalized component version.   const component = await getPersonalizedComponent(params.name, preferences)     return NextResponse.json(component) }`

### Temporary Access Tokens

Use expiring tokens for better security:

Copy`interface TemporaryToken {   token: string   expiresAt: Date   scope: string[] }   async function validateTemporaryToken(token: string) {   const tokenData = await getTokenData(token)     if (!tokenData) return false   if (new Date() > tokenData.expiresAt) return false     return true }`

## Multi-Registry Authentication

With [namespaced registries](/docs/registry/namespace), you can set up multiple registries with different authentication:

components.json

Copy`{   "registries": {     "@public": "https://public.company.com/{name}.json",     "@internal": {       "url": "https://internal.company.com/{name}.json",       "headers": {         "Authorization": "Bearer ${INTERNAL_TOKEN}"       }     },     "@premium": {       "url": "https://premium.company.com/{name}.json",       "headers": {         "X-License-Key": "${LICENSE_KEY}"       }     }   } }`

This lets you:

- Mix public and private registries
- Use different authentication per registry
- Organize components by access level

## Security Best Practices

### Use Environment Variables

Never commit tokens to version control. Always use environment variables:

.env.local

Copy`REGISTRY_TOKEN=your_secret_token_here API_KEY=your_api_key_here`

Then reference them in `components.json`:

Copy`{   "registries": {     "@private": {       "url": "https://registry.company.com/{name}.json",       "headers": {         "Authorization": "Bearer ${REGISTRY_TOKEN}"       }     }   } }`

### Use HTTPS

Always use HTTPS URLs for registries to protect your tokens in transit:

Copy`{   "@secure": "https://registry.company.com/{name}.json" // ✅   "@insecure": "http://registry.company.com/{name}.json" // ❌ }`

### Add Rate Limiting

Protect your registry from abuse:

Copy`import rateLimit from "express-rate-limit"   const limiter = rateLimit({   windowMs: 15 * 60 * 1000, // 15 minutes   max: 100, // limit each IP to 100 requests per windowMs })   app.use("/registry", limiter)`

### Rotate Tokens

Change access tokens regularly:

Copy`// Create new token with expiration. function generateToken() {   const token = crypto.randomBytes(32).toString("hex")   const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days.     return { token, expiresAt } }`

### Log Access

Track registry access for security and analytics:

Copy`async function logAccess(request: Request, component: string, userId: string) {   await db.accessLog.create({     timestamp: new Date(),     userId,     component,     ip: request.ip,     userAgent: request.headers["user-agent"],   }) }`

## Testing Authentication

Test your authenticated registry locally:

Copy`# Test with curl. curl -H "Authorization: Bearer your_token" \   https://registry.company.com/button.json   # Test with the CLI. REGISTRY_TOKEN=your_token npx shadcn@latest add @private/button`

## Error Handling

The shadcn CLI handles authentication errors gracefully:

- **401 Unauthorized**: Token is invalid or missing
- **403 Forbidden**: Token lacks permission for this resource
- **429 Too Many Requests**: Rate limit exceeded

### Custom Error Messages

Your registry server can return custom error messages in the response body, and the CLI will display them to users:

Copy`// Registry server returns custom error return NextResponse.json(   {     error: "Unauthorized",     message:       "Your subscription has expired. Please renew at company.com/billing",   },   { status: 403 } )`

The user will see:

Copy`Your subscription has expired. Please renew at company.com/billing`

This helps provide context-specific guidance:

Copy``// Different error messages for different scenarios if (!token) {   return NextResponse.json(     {       error: "Unauthorized",       message:         "Authentication required. Set REGISTRY_TOKEN in your .env.local file",     },     { status: 401 }   ) }   if (isExpiredToken(token)) {   return NextResponse.json(     {       error: "Unauthorized",       message: "Token expired. Request a new token at company.com/tokens",     },     { status: 401 }   ) }   if (!hasTeamAccess(token, component)) {   return NextResponse.json(     {       error: "Forbidden",       message: `Component '${component}' is restricted to the Design team`,     },     { status: 403 }   ) }``

## Next Steps

To set up authentication with multiple registries and advanced patterns, see the [Namespaced Registries](/docs/registry/namespace) documentation. It covers:

- Setting up multiple authenticated registries
- Using different authentication per namespace
- Cross-registry dependency resolution
- Advanced authentication patterns

[Namespaces](/docs/registry/namespace)[Examples](/docs/registry/examples)

On This Page

[Common Authentication Patterns](#common-authentication-patterns)[Token-Based Authentication](#token-based-authentication)[API Key Authentication](#api-key-authentication)[Query Parameter Authentication](#query-parameter-authentication)[Server-Side Implementation](#server-side-implementation)[Next.js API Route Example](#nextjs-api-route-example)[Express.js Example](#expressjs-example)[Advanced Authentication Patterns](#advanced-authentication-patterns)[Team-Based Access](#team-based-access)[User-Personalized Registries](#user-personalized-registries)[Temporary Access Tokens](#temporary-access-tokens)[Multi-Registry Authentication](#multi-registry-authentication)[Security Best Practices](#security-best-practices)[Use Environment Variables](#use-environment-variables)[Use HTTPS](#use-https)[Add Rate Limiting](#add-rate-limiting)[Rotate Tokens](#rotate-tokens)[Log Access](#log-access)[Testing Authentication](#testing-authentication)[Error Handling](#error-handling)[Custom Error Messages](#custom-error-messages)[Next Steps](#next-steps)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
