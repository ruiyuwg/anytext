## Human-in-the-loop

Handle interrupts when the agent requires human approval for tool execution. Learn more in the [How to handle interrupts](/oss/python/langgraph/interrupts#pause-using-interrupt) guide.

```python agent.py theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain import create_agent, tool, human_in_the_loop_middleware
from langchain_openai import ChatOpenAI
from langgraph.checkpoint.memory import MemorySaver

model = ChatOpenAI(model="gpt-4.1-mini")

@tool
def send_email(to: str, subject: str, body: str) -> dict:
    """Send an email. Requires human approval."""
    return {
        "status": "success",
        "content": f'Email sent to {to} with subject "{subject}"',
    }

@tool
def delete_file(path: str) -> dict:
    """Delete a file. Requires human approval."""
    return {"status": "success", "content": f'File "{path}" deleted'}

@tool
def read_file(path: str) -> dict:
    """Read file contents. No approval needed."""
    return {"status": "success", "content": f"Contents of {path}..."}

agent = create_agent(
    model=model,
    tools=[send_email, delete_file, read_file],
    middleware=[
        human_in_the_loop_middleware(
            interrupt_on={
                "send_email": {
                    "allowed_decisions": ["approve", "edit", "reject"],
                    "description": "📧 Review email before sending",
                },
                "delete_file": {
                    "allowed_decisions": ["approve", "reject"],
                    "description": "🗑️ Confirm file deletion",
                },
                "read_file": False,  # Safe - auto-approved
            }
        ),
    ],
    checkpointer=MemorySaver(),
)
```

```tsx Chat.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useState } from "react";
import { useStream } from "@langchain/langgraph-sdk/react";
import type { AgentState, HITLRequest, HITLResponse } from "./types";
import { MessageBubble } from "./MessageBubble";

function HumanInTheLoopChat() {
  const stream = useStream<AgentState, { InterruptType: HITLRequest }>({
    assistantId: "human-in-the-loop",
    apiUrl: "http://localhost:2024",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const hitlRequest = stream.interrupt?.value as HITLRequest | undefined;

  const handleApprove = async (index: number) => {
    if (!hitlRequest) return;
    setIsProcessing(true);

    try {
      const decisions: HITLResponse["decisions"] =
        hitlRequest.actionRequests.map((_, i) =>
          i === index ? { type: "approve" } : { type: "approve" }
        );

      await stream.submit(null, {
        command: { resume: { decisions } as HITLResponse },
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReject = async (index: number, reason: string) => {
    if (!hitlRequest) return;
    setIsProcessing(true);

    try {
      const decisions: HITLResponse["decisions"] =
        hitlRequest.actionRequests.map((_, i) =>
          i === index
            ? { type: "reject", message: reason }
            : { type: "reject", message: "Rejected along with other actions" }
        );

      await stream.submit(null, {
        command: { resume: { decisions } as HITLResponse },
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    
      {stream.messages.map((message, idx) => (
        
      ))}

      {hitlRequest && hitlRequest.actionRequests.length > 0 && (
        
          
            Action requires approval
          

          {hitlRequest.actionRequests.map((action, idx) => (
            
              {action.name}
              
                {JSON.stringify(action.args, null, 2)}
              
              
                <button
                  onClick={() => handleApprove(idx)}
                  disabled={isProcessing}
                  className="px-3 py-1.5 bg-green-600 hover:bg-green-500 text-white text-sm rounded-lg"
                >
                  Approve
                
                <button
                  onClick={() => handleReject(idx, "User rejected")}
                  disabled={isProcessing}
                  className="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white text-sm rounded-lg"
                >
                  Reject
                
              
            
          ))}
        
      )}
    
  );
}
```

```typescript types.ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { Message } from "@langchain/langgraph-sdk";

// Tool call types matching your Python agent
export type SendEmailToolCall = {
  name: "send_email";
  args: { to: string; subject: string; body: string };
  id?: string;
};

export type DeleteFileToolCall = {
  name: "delete_file";
  args: { path: string };
  id?: string;
};

export type ReadFileToolCall = {
  name: "read_file";
  args: { path: string };
  id?: string;
};

export type AgentToolCalls = SendEmailToolCall | DeleteFileToolCall | ReadFileToolCall;

export interface AgentState {
  messages: Message[];
}

// HITL types
export interface HITLRequest {
  actionRequests: Array<{
    name: string;
    args: Record<string, unknown>;
  }>;
}

export interface HITLResponse {
  decisions: Array<
    | { type: "approve" }
    | { type: "reject"; message: string }
    | { type: "edit"; newArgs: Record<string, unknown> }
  >;
}
```

See a complete implementation of approval workflows with approve, reject, and edit actions in the `human-in-the-loop` example.
