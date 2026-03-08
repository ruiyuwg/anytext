# Introduction

Source: https://resend.com/docs/dashboard/logs/introduction

Learn how to view and troubleshoot API logs in the Resend Dashboard.

## Overview

The Logs page provides detailed information about every API request made to Resend, helping you monitor activity and troubleshoot issues quickly.

## Viewing logs

Access your logs from the [Logs page](https://resend.com/logs) in the dashboard.

Each log entry shows:

- **Endpoint** - The API endpoint called (e.g., `/domains`, `/api-keys`, `/contacts`)
- **Status** - The HTTP response status code (200, 201, etc.)
- **Method** - The HTTP method used (GET, POST, DELETE, etc.)
- **Created** - When the request was made (displayed as relative time)

## Searching Logs

Use the search bar to find specific logs. This is useful when tracking down a particular request or debugging an issue.

## Filtering Logs

Filter logs by response status to quickly identify issues:

- **All Statuses** - View all logs
- **Successes** - Show only successful requests (2xx status codes)
- **Errors** - Show only failed requests (4xx and 5xx status codes)
- **Specific codes** - Select one or more specific HTTP status codes (200, 201, 403, 429, etc.)

You can select multiple status codes to create custom filters.

- **Date range** - Adjust the time period for logs (e.g., Last 15 days)
- **User Agents** - Filter by SDK or client
- **API Keys** - Filter by specific API key

## Log details

Click any log entry to view complete details.

### Request information

- **Request body** - The full JSON payload sent to the API (with copyable code blocks)
- **HTTP method** - GET, POST, etc.
- **Endpoint** - The API endpoint called
- **User-Agent** - The client or SDK used, with automatic SDK detection showing name and version

### Response information

- **Response body** - The complete API response (with copyable code blocks)
- **Status code** - The HTTP status code returned
- **Timestamp** - When the request was processed

### SDK detection

The dashboard automatically detects and displays Resend SDK information from the User-Agent header, showing:

- SDK name (e.g., "Resend Node.js")
- Version number

## Troubleshooting errors

For supported error types, click the **Help me fix** button to open a troubleshooting drawer.

The drawer includes:

- **Raw response** - The complete API response
- **Detailed guidance** - Step-by-step instructions to resolve the issue
- **Relevant links** - Documentation and knowledge base articles
- **Contextual information** - Your current rate limits, verified domains, and other relevant data

### Copy for AI

For error logs (4xx and 5xx status codes), use the **Copy for AI** dropdown to get help debugging:

- **Copy log** - Copy the log details as Markdown formatted for AI tools
- **Open in ChatGPT** - Open ChatGPT with the log prefilled for analysis
- **Open in Claude** - Open Claude with the log prefilled for analysis

The copied content includes the request method, endpoint, request body, response status, and response body to help AI assistants understand and troubleshoot the issue.

View a comprehensive list of error codes and their meanings in the [Resend API
Reference](/api-reference/errors).

## Export your data

Admins can download your data in CSV format for the following resources:

- Emails
- Broadcasts
- Contacts
- Segments
- Domains
- Logs
- API keys

Currently, exports are limited to admin users of your team.

To start, apply filters to your data and click on the "Export" button. Confirm your filters before exporting your data.

If your exported data includes 1,000 items or less, the export will download immediately. For larger exports, you'll receive an email with a link to download your data.

All admins on your team can securely access the export for 7 days. Unavailable exports are marked as "Expired."

All exports your team creates are listed in the
[Exports](https://resend.com/exports) page under **Settings** > **Team** >
**Exports**. Select any export to view its details page. All members of your
team can view your exports, but only admins can download the data.
