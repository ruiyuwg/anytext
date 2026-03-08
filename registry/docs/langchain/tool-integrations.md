# Tool integrations

Source: https://docs.langchain.com/langsmith/agent-builder-tools

Give your agents access to a wide range of tools and services.

You can access a variety of tools in Agent Builder. Use tool integrations and [MCP servers](/langsmith/agent-builder-remote-mcp-servers) to give your agents access to email, calendars, chat, project management, code hosting, spreadsheets/BI, search, social, and general web utilities.

To view a comprehensive list of all tool integrations, navigate to the [Agent Builder > Integrations tab](https://smith.langchain.com/agents/tools).

```
Math and logic


  Math operations
  Generate random numbers




Analytics


  Execute SQL queries




Search Deep Wiki


  Read wiki structure and contents
  Ask questions




Search our documentation



PRs, issues, and content


  List pull requests
  Get pull request details
  Create issues and pull requests
  Comment on issues and pull requests
  Read repository files and list directories




Read and send email


  Read emails (optionally include body, filter with search)
  Send email or reply to an existing message
  Create draft emails
  Mark messages as read
  Get a conversation thread
  Apply or create labels
  List mailbox labels




Manage events


  List events for a date
  Get event details
  Create new events
  Update events
  Delete events




Manage docs


  Create new docs
  Read docs
  Append text
  Replace text




Spreadsheets


  Get spreadsheets
  Create spreadsheets
  Read ranges
  Write ranges
  Append rows
  Clear ranges




Manage issues and teams


  List teams and team members
  List issues with filters
  Get issue details
  List labels
  Create, update, or delete issues




Post to profile


  Publish a post with optional image or link




Manage incidents


  List alert group settings and get details
  List incidents and get details
  Get outlier incidents, past incidents, and related incidents
  List services and get details
  List teams, members, schedules, and users, and get details
  List oncalls
  Manage team members
  Manage schedules
  Manage event orchestration routers




Issue management


  List issues
  Get issue details
  Update issues





  
    Exa web search (optionally fetch page contents)
    Exa LinkedIn profile search
    Tavily web search
  



  
    
  




Send and read messages


  Send a direct message to a user
  Post a message to a channel
  Reply in a thread
  Read channel history
  Read thread messages




Manage payments


  Create and list customers, products, payments, and prices
  Create, list, and finalize invoices
  List, update, and delete subscriptions
  Create and list coupons
  Create list, and update disputes
  Search and fetch Stripe resources
  Search documentation





  
    Read a tweet by ID
    Read recent posts from a list
  



  
    
  





  Read webpage text content
  Extract image URLs and metadata
  Notify user (for confirmations/updates)
```

You can also connect to remote MCP servers to give your agents access to additional tools. See [Remote MCP servers](/langsmith/agent-builder-remote-mcp-servers) for more information.

## Disconnect a tool

To remove a tool from your agent:

```
In the [LangSmith UI](https://smith.langchain.com), hover over **My Agents** in the left sidebar and click the  settings icon.



In the integrations section, locate the connected app you want to remove.



Click **Disconnect** for that integration.
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/agent-builder-tools.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
