## Human-in-the-loop

Handle interrupts when the agent requires human approval for tool execution. Learn more in the [How to handle interrupts](/oss/javascript/langgraph/interrupts#pause-using-interrupt) guide.

```tsx Chat.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useState } from "react";
import { useStream } from "@langchain/langgraph-sdk/react";
import type { HITLRequest, HITLResponse } from "langchain";
import type { agent } from "./agent";
import { MessageBubble } from "./MessageBubble";

function HumanInTheLoopChat() {
  const stream = useStream({
    assistantId: "human-in-the-loop",
    apiUrl: "http://localhost:2024",
  });

  const [isProcessing, setIsProcessing] = useState(false);

  // Type assertion for interrupt value
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
        command: {
          resume: { decisions } as HITLResponse,
        },
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
        command: {
          resume: { decisions } as HITLResponse,
        },
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    
      {/* Render messages */}
      {stream.messages.map((message, idx) => (
        
      ))}

      {/* Render approval UI when interrupted */}
      {hitlRequest && hitlRequest.actionRequests.length > 0 && (
        
          
            Action requires approval
          

          {hitlRequest.actionRequests.map((action, idx) => (
            <div
              key={idx}
              className="bg-neutral-900 rounded-lg p-4 mb-4 last:mb-0"
            >
              
                
                  {action.name}
                
              

              
                {JSON.stringify(action.args, null, 2)}
              

              
                <button
                  onClick={() => handleApprove(idx)}
                  disabled={isProcessing}
                  className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm rounded disabled:opacity-50"
                >
                  Approve
                
                <button
                  onClick={() => handleReject(idx, "User rejected")}
                  disabled={isProcessing}
                  className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm rounded disabled:opacity-50"
                >
                  Reject
                
              
            
          ))}
        
      )}
    
  );
}
```

```typescript agent.ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, tool, humanInTheLoopMiddleware } from "langchain";
import { ChatOpenAI } from "@langchain/openai";
import { MemorySaver } from "@langchain/langgraph";
import { z } from "zod";

const model = new ChatOpenAI({ model: "gpt-4.1-mini" });

// Tool that requires human approval
const sendEmail = tool(
  async ({ to, subject, body }) => {
    return {
      status: "success",
      content: `Email sent to ${to} with subject "${subject}"`,
    };
  },
  {
    name: "send_email",
    description: "Send an email. Requires human approval.",
    schema: z.object({
      to: z.string().describe("Recipient email address"),
      subject: z.string().describe("Email subject"),
      body: z.string().describe("Email body"),
    }),
  }
);

// Tool that requires approval with limited options
const deleteFile = tool(
  async ({ path }) => {
    return { status: "success", content: `File "${path}" deleted` };
  },
  {
    name: "delete_file",
    description: "Delete a file. Requires human approval.",
    schema: z.object({
      path: z.string().describe("File path to delete"),
    }),
  }
);

// Safe tool - no approval needed
const readFile = tool(
  async ({ path }) => {
    return { status: "success", content: `Contents of ${path}...` };
  },
  {
    name: "read_file",
    description: "Read file contents. No approval needed.",
    schema: z.object({
      path: z.string().describe("File path to read"),
    }),
  }
);

// Create agent with HITL middleware
export const agent = createAgent({
  model,
  tools: [sendEmail, deleteFile, readFile],
  middleware: [
    humanInTheLoopMiddleware({
      interruptOn: {
        // Email requires all decision types
        send_email: {
          allowedDecisions: ["approve", "edit", "reject"],
          description: "📧 Review email before sending",
        },
        // Deletion only allows approve/reject
        delete_file: {
          allowedDecisions: ["approve", "reject"],
          description: "🗑️ Confirm file deletion",
        },
        // Reading is safe - auto-approved
        read_file: false,
      },
    }),
  ],
  // Required for HITL - persists state across interrupts
  checkpointer: new MemorySaver(),
});
```

See a complete implementation of approval workflows with approve, reject, and edit actions in the `human-in-the-loop` example.
