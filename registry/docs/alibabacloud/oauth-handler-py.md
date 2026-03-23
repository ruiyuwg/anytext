This topic demonstrates how to connect an agent to an OpenAPI MCP server by using an OAuth 2.0 authorization flow. It provides example code for handling the OAuth callback and integrating with popular agent frameworks.

## **Customize the OAuth authorization flow**

The following sample code, based on the [official MCP source code](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/clients/oauth_client.py), implements an OAuth authorization flow. You can customize the user experience by modifying the code in the `handle_redirect` and `handle_callback` functions.

**Important**

The InMemoryTokenStorage class is provided for demonstration purposes only. In a production environment, you must use a secure, persistent storage mechanism for OAuth tokens to prevent unauthorized access.

```
# oauth_handler.py
import asyncio
import webbrowser
from http.server import BaseHTTPRequestHandler, HTTPServer
import threading
from mcp.client.auth import OAuthClientProvider, TokenStorage
from mcp.shared.auth import OAuthToken, OAuthClientInformationFull
from urllib.parse import parse_qs, urlparse


class InMemoryTokenStorage(TokenStorage):
    """Demo In-memory token storage implementation."""

    def __init__(self):
        self.tokens: OAuthToken | None = None
        self.client_info: OAuthClientInformationFull | None = None

    async def get_tokens(self) -> OAuthToken | None:
        """Get stored tokens."""
        return self.tokens

    async def set_tokens(self, tokens: OAuthToken) -> None:
        """Store tokens."""
        self.tokens = tokens

    async def get_client_info(self) -> OAuthClientInformationFull | None:
        """Get stored client information."""
        return self.client_info

    async def set_client_info(self, client_info: OAuthClientInformationFull) -> None:
        """Store client information."""
        self.client_info = client_info


class CallbackHandler(BaseHTTPRequestHandler):
    """HTTP handler for OAuth callback."""
    
    def __init__(self, callback_server, *args, **kwargs):
        self.callback_server = callback_server
        super().__init__(*args, **kwargs)
    
    def do_GET(self):
        """Handle GET request for OAuth callback."""
        try:
            # Parse parameters from the callback URL.
            parsed_url = urlparse(self.path)
            params = parse_qs(parsed_url.query)
            
            if 'code' in params:
                # Get the authorization code.
                code = params['code'][0]
                state = params.get('state', [None])[0]
                
                # Store the result.
                self.callback_server.auth_code = code
                self.callback_server.auth_state = state
                self.callback_server.auth_received = True
                
                # Return a success page.
                self.send_response(200)
                self.send_header('Content-type', 'text/html; charset=utf-8')
                self.end_headers()
                
                success_html = """<!DOCTYPE html>
                <html lang="zh-CN">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Authorization successful</title>
                </head>
                <body>
                    <h1>Authorization successful.</h1>
                    <p>You can now return to your application. </p>
                    <p>This window will automatically close in <span id="countdown">3</span> seconds. </p>
                    <button onclick="window.close()">Close</button>
                    <script>
                        let count = 3;
                        const el = document.getElementById('countdown');
                        const timer = setInterval(() => {
                            count--;
                            el.textContent = count;
                            if (count <= 0) {
                                clearInterval(timer);
                                window.close();
                            }
                        }, 1000);
                    </script>
                </body>
                </html>
                """
                self.wfile.write(success_html.encode('utf-8'))
                
            elif 'error' in params:
                # Handle the error.
                error = params['error'][0]
                error_description = params.get('error_description', ['Unknown error'])[0]
                
                self.callback_server.auth_error = f"{error}: {error_description}"
                self.callback_server.auth_received = True
                
                # Return an error message.
                self.send_response(400)
                self.send_header('Content-type', 'text/html; charset=utf-8')
                self.end_headers()
                
                error_html = f"""<!DOCTYPE html>
                <html lang=\"zh-CN\">
                <head>
                    <meta charset=\"UTF-8\">
                    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
                    <title>Authorization failed</title>
                </head>
                <body>
                    <h1>Authorization failed</h1>
                    <p>An error occurred during the authorization process. </p>
                    <p><strong>Error code: </strong>{error}</p>
                    <p><strong>Error message: </strong>{error_description}</p>
                    <button onclick="window.close()">Close</button>
                </body>
                </html>
                """
                self.wfile.write(error_html.encode('utf-8'))
            
        except Exception as e:
            self.callback_server.auth_error = str(e)
            self.callback_server.auth_received = True
            
            self.send_response(500)
            self.send_header('Content-type', 'text/html; charset=utf-8')
            self.end_headers()
            
            internal_error_html = f"""<!DOCTYPE html>
            <html lang=\"zh-CN\">
            <head>
                <meta charset=\"UTF-8\">
                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
                <title>Server error</title>
            </head>
            <body>
                <h1>Internal server error</h1>
                <p>The server encountered an internal error and could not complete your request. </p>
                <pre>{str(e)}</pre>
                <button onclick="window.close()">Close</button>
            </body>
            </html>
            """
            self.wfile.write(internal_error_html.encode('utf-8'))
    
    def log_message(self, format, *args):
        """Suppress log output"""
        pass


class CallbackServer:
    """OAuth callback server"""
    
    def __init__(self, port=3000):
        self.port = port
        self.server = None
        self.thread = None
        self.auth_code = None
        self.auth_state = None
        self.auth_error = None
        self.auth_received = False
    
    def start(self):
        """Start the callback server"""
        handler = lambda *args, **kwargs: CallbackHandler(self, *args, **kwargs)
        self.server = HTTPServer(('localhost', self.port), handler)
        self.thread = threading.Thread(target=self.server.serve_forever, daemon=True)
        self.thread.start()
        print(f"OAuth callback server started, listening on port {self.port}")
    
    def stop(self):
        """Stop the callback server"""
        if self.server:
            self.server.shutdown()
            self.server.server_close()
        if self.thread:
            self.thread.join(timeout=1)
        print("OAuth callback server stopped")
    
    async def wait_for_callback(self, timeout=300):
        """Wait for the OAuth callback"""
        start_time = asyncio.get_event_loop().time()
        
        while not self.auth_received:
            if asyncio.get_event_loop().time() - start_time > timeout:
                raise TimeoutError("Timed out waiting for OAuth callback")
            await asyncio.sleep(0.1)
        
        if self.auth_error:
            raise Exception(f"OAuth authorization failed: {self.auth_error}")
        
        return self.auth_code, self.auth_state


# Global callback server instance.
_callback_server = None


async def handle_redirect(auth_url: str) -> None:
    """Automatically open the browser for OAuth authorization""""
    global _callback_server
    
    # Start the callback server.
    if _callback_server is None:
        _callback_server = CallbackServer(port=3000)
        _callback_server.start()
    
    print(f "Opening browser for OAuth authorization...")
    print(f"Authorization URL: {auth_url}")
    
    # Automatically open the browser.
    webbrowser.open(auth_url)


async def handle_callback() -> tuple[str, str | None]:
    """Automatically handle the OAuth callback"""
    global _callback_server
    
    if _callback_server is None:
        raise Exception("Callback server is not started")
    
    print("Waiting for OAuth authorization to complete...")
    
    try:
        # Wait for the callback.
        code, state = await _callback_server.wait_for_callback()
        print("OAuth authorization successful!")
        return code, state
    
    except Exception as e:
        print(f"OAuth authorization failed: {e}")
        raise
    
    finally:
        # Clean up the server state, but keep the server running for reuse.
        _callback_server.auth_code = None
        _callback_server.auth_state = None
        _callback_server.auth_error = None
        _callback_server.auth_received = False
```

## **Integrate the OpenAPI MCP server into an AI agent**

After you have an OAuth handler, you can integrate your MCP server with an agent framework. This section provides examples for AgentScope and LangGraph.

### **AgentScope**

[AgentScope](https://github.com/agentscope-ai/agentscope) is an open-source agent framework from Alibaba. It supports features such as [agent tool management](https://doc.agentscope.io/zh_CN/tutorial/task_tool.html), [agent long-term memory control](https://doc.agentscope.io/zh_CN/tutorial/task_long_term_memory.html), and intelligent retrieval-augmented generation (RAG).

```
# -*- coding: utf-8 -*-
"""The main entry point of the ReAct agent example."""
import asyncio
import os

from agentscope.agent import ReActAgent, UserAgent
from agentscope.formatter import DashScopeChatFormatter
from agentscope.memory import InMemoryMemory
from agentscope.model import DashScopeChatModel
from agentscope.tool import (
    Toolkit,
    execute_shell_command,
    execute_python_code,
    view_text_file,
)
from agentscope.mcp import HttpStatelessClient

from mcp.client.auth import OAuthClientProvider, OAuthClientInformationFull, OAuthClientMetadata, OAuthToken
from pydantic import AnyUrl
from oauth_handler import InMemoryTokenStorage, handle_redirect, handle_callback


# openai base   
# read from .env
load_dotenv()

server_url = "https://openapi-mcp.cn-hangzhou.aliyuncs.com/accounts/14******/custom/****/id/KXy******/mcp"

memory_token_storage = InMemoryTokenStorage()

oauth_provider = OAuthClientProvider(
    server_url=server_url,
    client_metadata=OAuthClientMetadata(
        client_name="AgentScopeExampleClient",
        redirect_uris=[AnyUrl("http://localhost:3000/callback")],
        grant_types=["authorization_code", "refresh_token"],
        response_types=["code"],
        scope=None,
    ),
    storage=memory_token_storage,
    redirect_handler=handle_redirect,
    callback_handler=handle_callback,
)

stateless_client = HttpStatelessClient(
    # The name of the MCP server.
    name="mcp_services_stateless",
    transport="streamable_http",
    url=server_url,
    auth=oauth_provider,
)

async def main() -> None:
    """The main entry point for the ReAct agent example."""
    toolkit = Toolkit()
    # toolkit.register_tool_function(execute_shell_command)
    # toolkit.register_tool_function(execute_python_code)
    # toolkit.register_tool_function(view_text_file)
    await toolkit.register_mcp_client(stateless_client)

    agent = ReActAgent(
        name="AlibabaCloudOpsAgent",
        sys_prompt="You are an Alibaba Cloud O&M assistant. You are skilled at using various Alibaba Cloud services, such as ECS, RDS, and VPC, to fulfill my requests.",
        model=DashScopeChatModel(
            api_key=os.environ.get("DASHSCOPE_API_KEY"),
            model_name="qwen3-max-preview",
            enable_thinking=False,
            stream=True,
        ),
        formatter=DashScopeChatFormatter(),
        toolkit=toolkit,
        memory=InMemoryMemory(),
    )
    user = UserAgent("User")

    msg = None
    while True:
        msg = await user(msg)
        if msg.get_text_content() == "exit":
            break
        msg = await agent(msg)


asyncio.run(main())
```

### **LangGraph**

[LangGraph](https://github.com/langchain-ai/langgraph) is an open-source framework designed to build, deploy, and manage stateful AI agent workflows.

```
import asyncio
import sys
from dotenv import load_dotenv
import os
from langgraph.prebuilt import create_react_agent
from langchain.chat_models import init_chat_model
from langchain_mcp_adapters.client import MultiServerMCPClient
from mcp.client.auth import OAuthClientProvider, OAuthClientInformationFull, OAuthClientMetadata, OAuthToken
from pydantic import AnyUrl 

from oauth_handler import InMemoryTokenStorage, handle_callback, handle_redirect


# openai base   
# read from .env
load_dotenv()

async def make_agent():
    model = init_chat_model(model=os.getenv("OPENAI_MODEL"), api_key=os.getenv("OPENAI_API_KEY"), base_url=os.getenv("OPENAI_BASE_URL"), model_provider='openai')

    # Specify the MCP server URL.
    server_url = "https://openapi-mcp.cn-hangzhou.aliyuncs.com/accounts/1025904068912955/custom/test-ecs/id/1kB196nPAhRIbH1z/mcp"
    
    oauth_provider = OAuthClientProvider(
        server_url=server_url,
        client_metadata=OAuthClientMetadata(
            client_name="Example MCP Client",
            redirect_uris=[AnyUrl("http://localhost:3000/callback")],
            grant_types=["authorization_code", "refresh_token"],
            response_types=["code"],
            scope=None,
        ),
        storage=InMemoryTokenStorage(),
        redirect_handler=handle_redirect,
        callback_handler=handle_callback,
    )

    
    mcp_client = MultiServerMCPClient(
        {
            "resourcecenter": {
                "url": server_url,
                "transport": "streamable_http",
                "auth": oauth_provider
            }
        }
    )
    tools = await mcp_client.get_tools()
    
    agent = create_react_agent(
        model=model,  
        tools=tools,  
        prompt="You are a helpful assistant"  
    )

    return agent

async def chat_loop():
    """Chat loop"""
    # Create the agent.
    print("Initializing AI assistant...")
    agent = await make_agent()
    print("AI assistant is ready! Enter 'quit' or 'exit' to leave.\n")
    
    # Chat history.
    messages = []
    
    while True:
        try:
            # Get user input.
            user_input=input ("User: ").strip()
            
            # Check for exit command.
            if user_input.lower() in ['quit', 'exit', 'leave']:
                print("Goodbye!")
                break
            
            # Skip empty input.
            if not user_input:
                continue
            
            # Add user message to history.
            messages.append({"role": "user", "content": user_input})
            
            print("AI: ", end="", flush=True)
            
            # Invoke the agent.
            response = await agent.ainvoke(
                {"messages": messages},
                {"recursion_limit": 50}
            )
            
            # Extract the AI response.
            ai_response = response["messages"][-1].content
            print(ai_response)
            
            # Add AI response to history.
            messages.append({"role": "assistant", "content": ai_response})
            
            print() # Separate with a blank line.
            
        except KeyboardInterrupt:
            print("\n\nGoodbye！")
            break
        except Exception as e:
            print(f"Error message: {e}")
            print("Please try again...\n")

async def main():
    await chat_loop()

# Run the main function.
if __name__ == "__main__":
    asyncio.run(main())
```
