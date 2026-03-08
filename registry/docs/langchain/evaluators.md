## Evaluators

One way to think about different types of RAG evaluators is as a tuple of what is being evaluated X what its being evaluated against:

1. **Correctness**: Response vs reference answer

- `Goal`: Measure "*how similar/correct is the RAG chain answer, relative to a ground-truth answer*"
- `Mode`: Requires a ground truth (reference) answer supplied through a dataset
- `Evaluator`: Use LLM-as-judge to assess answer correctness.

2. **Relevance**: Response vs input

- `Goal`: Measure "*how well does the generated response address the initial user input*"
- `Mode`: Does not require reference answer, because it will compare the answer to the input question
- `Evaluator`: Use LLM-as-judge to assess answer relevance, helpfulness, etc.

3. **Groundedness**: Response vs retrieved docs

- `Goal`: Measure "*to what extent does the generated response agree with the retrieved context*"
- `Mode`: Does not require reference answer, because it will compare the answer to the retrieved context
- `Evaluator`: Use LLM-as-judge to assess faithfulness, hallucinations, etc.

4. **Retrieval relevance**: Retrieved docs vs input

- `Goal`: Measure "*how relevant are my retrieved results for this query*"
- `Mode`: Does not require reference answer, because it will compare the question to the retrieved context
- `Evaluator`: Use LLM-as-judge to assess relevance

### Correctness: Response vs reference answer

```python Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from typing_extensions import Annotated, TypedDict

# Grade output schema
class CorrectnessGrade(TypedDict):
    # Note that the order in the fields are defined is the order in which the model will generate them.
    # It is useful to put explanations before responses because it forces the model to think through
    # its final response before generating it:
    explanation: Annotated[str, ..., "Explain your reasoning for the score"]
    correct: Annotated[bool, ..., "True if the answer is correct, False otherwise."]

# Grade prompt
correctness_instructions = """You are a teacher grading a quiz. You will be given a QUESTION, the GROUND TRUTH (correct) ANSWER, and the STUDENT ANSWER. Here is the grade criteria to follow:
(1) Grade the student answers based ONLY on their factual accuracy relative to the ground truth answer. (2) Ensure that the student answer does not contain any conflicting statements.
(3) It is OK if the student answer contains more information than the ground truth answer, as long as it is factually accurate relative to the  ground truth answer.

Correctness:
A correctness value of True means that the student's answer meets all of the criteria.
A correctness value of False means that the student's answer does not meet all of the criteria.

Explain your reasoning in a step-by-step manner to ensure your reasoning and conclusion are correct. Avoid simply stating the correct answer at the outset."""

# Grader LLM
grader_llm = ChatOpenAI(model="gpt-4.1", temperature=0).with_structured_output(
    CorrectnessGrade, method="json_schema", strict=True
)

def correctness(inputs: dict, outputs: dict, reference_outputs: dict) -> bool:
    """An evaluator for RAG answer accuracy"""
    answers = f"""\
QUESTION: {inputs['question']}
GROUND TRUTH ANSWER: {reference_outputs['answer']}
STUDENT ANSWER: {outputs['answer']}"""
    # Run evaluator
    grade = grader_llm.invoke([
        {"role": "system", "content": correctness_instructions},
        {"role": "user", "content": answers}
    ])
    return grade["correct"]
```

```typescript TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { EvaluationResult } from "langsmith/evaluation";
import { z } from "zod";

// Grade prompt
const correctnessInstructions = `You are a teacher grading a quiz. You will be given a QUESTION, the GROUND TRUTH (correct) ANSWER, and the STUDENT ANSWER. Here is the grade criteria to follow:
(1) Grade the student answers based ONLY on their factual accuracy relative to the ground truth answer. (2) Ensure that the student answer does not contain any conflicting statements.
(3) It is OK if the student answer contains more information than the ground truth answer, as long as it is factually accurate relative to the  ground truth answer.

Correctness:
A correctness value of True means that the student's answer meets all of the criteria.
A correctness value of False means that the student's answer does not meet all of the criteria.

Explain your reasoning in a step-by-step manner to ensure your reasoning and conclusion are correct. Avoid simply stating the correct answer at the outset.`

const graderLLM = new ChatOpenAI({
  model: "gpt-4.1",
  temperature: 0,
}).withStructuredOutput(
  z
    .object({
      explanation: z
        .string()
        .describe("Explain your reasoning for the score"),
      correct: z
        .boolean()
        .describe("True if the answer is correct, False otherwise.")
    })
    .describe("Correctness score for reference answer v.s. generated answer.")
);

async function correctness({
  inputs,
  outputs,
  referenceOutputs,
}: {
  inputs: Record<string, any>;
  outputs: Record<string, any>;
  referenceOutputs?: Record<string, any>;
}): Promise => {
  const answer = `QUESTION: ${inputs.question}
    GROUND TRUTH ANSWER: ${referenceOutputs.answer}
    STUDENT ANSWER: ${outputs.answer}`

  // Run evaluator
  const grade = graderLLM.invoke([{role: "system", content: correctnessInstructions}, {role: "user", content: answer}])
  return grade.score;
};
```

### Relevance: Response vs input

The flow is similar to above, but we simply look at the `inputs` and `outputs` without needing the `reference_outputs`. Without a reference answer we can't grade accuracy, but can still grade relevance—as in, did the model address the user's question or not.

```python Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Grade output schema
class RelevanceGrade(TypedDict):
    explanation: Annotated[str, ..., "Explain your reasoning for the score"]
    relevant: Annotated[
        bool, ..., "Provide the score on whether the answer addresses the question"
    ]

# Grade prompt
relevance_instructions = """You are a teacher grading a quiz. You will be given a QUESTION and a STUDENT ANSWER. Here is the grade criteria to follow:
(1) Ensure the STUDENT ANSWER is concise and relevant to the QUESTION
(2) Ensure the STUDENT ANSWER helps to answer the QUESTION

Relevance:
A relevance value of True means that the student's answer meets all of the criteria.
A relevance value of False means that the student's answer does not meet all of the criteria.

Explain your reasoning in a step-by-step manner to ensure your reasoning and conclusion are correct. Avoid simply stating the correct answer at the outset."""

# Grader LLM
relevance_llm = ChatOpenAI(model="gpt-4.1", temperature=0).with_structured_output(
    RelevanceGrade, method="json_schema", strict=True
)

# Evaluator
def relevance(inputs: dict, outputs: dict) -> bool:
    """A simple evaluator for RAG answer helpfulness."""
    answer = f"QUESTION: {inputs['question']}\nSTUDENT ANSWER: {outputs['answer']}"
    grade = relevance_llm.invoke([
        {"role": "system", "content": relevance_instructions},
        {"role": "user", "content": answer}
    ])
    return grade["relevant"]
```

```typescript TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { EvaluationResult } from "langsmith/evaluation";
import { z } from "zod";

// Grade prompt
const relevanceInstructions = `You are a teacher grading a quiz. You will be given a QUESTION and a STUDENT ANSWER. Here is the grade criteria to follow:
(1) Ensure the STUDENT ANSWER is concise and relevant to the QUESTION
(2) Ensure the STUDENT ANSWER helps to answer the QUESTION

Relevance:
A relevance value of True means that the student's answer meets all of the criteria.
A relevance value of False means that the student's answer does not meet all of the criteria.

Explain your reasoning in a step-by-step manner to ensure your reasoning and conclusion are correct. Avoid simply stating the correct answer at the outset.`

const relevanceLLM = new ChatOpenAI({
  model: "gpt-4.1",
  temperature: 0,
}).withStructuredOutput(
  z
    .object({
      explanation: z
        .string()
        .describe("Explain your reasoning for the score"),
      relevant: z
        .boolean()
        .describe("Provide the score on whether the answer addresses the question")
    })
    .describe("Relevance score for generated answer v.s. input question.")
);

async function relevance({
  inputs,
  outputs,
}: {
  inputs: Record<string, any>;
  outputs: Record<string, any>;
}): Promise => {
  const answer = `QUESTION: ${inputs.question}
STUDENT ANSWER: ${outputs.answer}`

  // Run evaluator
  const grade = relevanceLLM.invoke([{role: "system", content: relevanceInstructions}, {role: "user", content: answer}])
  return grade.relevant;
};
```

### Groundedness: Response vs retrieved docs

Another useful way to evaluate responses without needing reference answers is to check if the response is justified by (or "grounded in") the retrieved documents.

```python Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Grade output schema
class GroundedGrade(TypedDict):
    explanation: Annotated[str, ..., "Explain your reasoning for the score"]
    grounded: Annotated[
        bool, ..., "Provide the score on if the answer hallucinates from the documents"
    ]

# Grade prompt
grounded_instructions = """You are a teacher grading a quiz. You will be given FACTS and a STUDENT ANSWER. Here is the grade criteria to follow:
(1) Ensure the STUDENT ANSWER is grounded in the FACTS. (2) Ensure the STUDENT ANSWER does not contain "hallucinated" information outside the scope of the FACTS.

Grounded:
A grounded value of True means that the student's answer meets all of the criteria.
A grounded value of False means that the student's answer does not meet all of the criteria.

Explain your reasoning in a step-by-step manner to ensure your reasoning and conclusion are correct. Avoid simply stating the correct answer at the outset."""

# Grader LLM
grounded_llm = ChatOpenAI(model="gpt-4.1", temperature=0).with_structured_output(
    GroundedGrade, method="json_schema", strict=True
)

# Evaluator
def groundedness(inputs: dict, outputs: dict) -> bool:
    """A simple evaluator for RAG answer groundedness."""
    doc_string = "\n\n".join(doc.page_content for doc in outputs["documents"])
    answer = f"FACTS: {doc_string}\nSTUDENT ANSWER: {outputs['answer']}"
    grade = grounded_llm.invoke([
        {"role": "system", "content": grounded_instructions},
        {"role": "user", "content": answer}
    ])
    return grade["grounded"]
```

```typescript TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { EvaluationResult } from "langsmith/evaluation";
import { z } from "zod";

// Grade prompt
const groundedInstructions = `You are a teacher grading a quiz. You will be given FACTS and a STUDENT ANSWER. Here is the grade criteria to follow:
(1) Ensure the STUDENT ANSWER is grounded in the FACTS. (2) Ensure the STUDENT ANSWER does not contain "hallucinated" information outside the scope of the FACTS.

Grounded:
A grounded value of True means that the student's answer meets all of the criteria.
A grounded value of False means that the student's answer does not meet all of the criteria.

Explain your reasoning in a step-by-step manner to ensure your reasoning and conclusion are correct. Avoid simply stating the correct answer at the outset.`

const groundedLLM = new ChatOpenAI({
  model: "gpt-4.1",
  temperature: 0,
}).withStructuredOutput(
  z
    .object({
      explanation: z
        .string()
        .describe("Explain your reasoning for the score"),
      grounded: z
        .boolean()
        .describe("Provide the score on if the answer hallucinates from the documents")
    })
    .describe("Grounded score for the answer from the retrieved documents.")
);

async function grounded({
  inputs,
  outputs,
}: {
  inputs: Record<string, any>;
  outputs: Record<string, any>;
}): Promise => {
  const docString = outputs.documents.map((doc) => doc.pageContent).join("");
  const answer = `FACTS: ${docString}
    STUDENT ANSWER: ${outputs.answer}`

  // Run evaluator
  const grade = groundedLLM.invoke([{role: "system", content: groundedInstructions}, {role: "user", content: answer}])
  return grade.grounded;
};
```

### Retrieval relevance: Retrieved docs vs input

```python Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Grade output schema
class RetrievalRelevanceGrade(TypedDict):
    explanation: Annotated[str, ..., "Explain your reasoning for the score"]
    relevant: Annotated[
        bool,
        ...,
        "True if the retrieved documents are relevant to the question, False otherwise",
    ]

# Grade prompt
retrieval_relevance_instructions = """You are a teacher grading a quiz. You will be given a QUESTION and a set of FACTS provided by the student. Here is the grade criteria to follow:
(1) You goal is to identify FACTS that are completely unrelated to the QUESTION
(2) If the facts contain ANY keywords or semantic meaning related to the question, consider them relevant
(3) It is OK if the facts have SOME information that is unrelated to the question as long as (2) is met

Relevance:
A relevance value of True means that the FACTS contain ANY keywords or semantic meaning related to the QUESTION and are therefore relevant.
A relevance value of False means that the FACTS are completely unrelated to the QUESTION.

Explain your reasoning in a step-by-step manner to ensure your reasoning and conclusion are correct. Avoid simply stating the correct answer at the outset."""

# Grader LLM
retrieval_relevance_llm = ChatOpenAI(
    model="gpt-4.1", temperature=0
).with_structured_output(RetrievalRelevanceGrade, method="json_schema", strict=True)

def retrieval_relevance(inputs: dict, outputs: dict) -> bool:
    """An evaluator for document relevance"""
    doc_string = "\n\n".join(doc.page_content for doc in outputs["documents"])
    answer = f"FACTS: {doc_string}\nQUESTION: {inputs['question']}"
    # Run evaluator
    grade = retrieval_relevance_llm.invoke([
        {"role": "system", "content": retrieval_relevance_instructions},
        {"role": "user", "content": answer}
    ])
    return grade["relevant"]
```

```typescript TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { EvaluationResult } from "langsmith/evaluation";
import { z } from "zod";

// Grade prompt
const retrievalRelevanceInstructions = `You are a teacher grading a quiz. You will be given a QUESTION and a set of FACTS provided by the student. Here is the grade criteria to follow:
(1) You goal is to identify FACTS that are completely unrelated to the QUESTION
(2) If the facts contain ANY keywords or semantic meaning related to the question, consider them relevant
(3) It is OK if the facts have SOME information that is unrelated to the question as long as (2) is met

Relevance:
A relevance value of True means that the FACTS contain ANY keywords or semantic meaning related to the QUESTION and are therefore relevant.
A relevance value of False means that the FACTS are completely unrelated to the QUESTION.

Explain your reasoning in a step-by-step manner to ensure your reasoning and conclusion are correct. Avoid simply stating the correct answer at the outset.`

const retrievalRelevanceLLM = new ChatOpenAI({
  model: "gpt-4.1",
  temperature: 0,
}).withStructuredOutput(
  z
    .object({
      explanation: z
        .string()
        .describe("Explain your reasoning for the score"),
      relevant: z
        .boolean()
        .describe("True if the retrieved documents are relevant to the question, False otherwise")
    })
    .describe("Retrieval relevance score for the retrieved documents v.s. the question.")
);

async function retrievalRelevance({
  inputs,
  outputs,
}: {
  inputs: Record<string, any>;
  outputs: Record<string, any>;
}): Promise => {
  const docString = outputs.documents.map((doc) => doc.pageContent).join("");
  const answer = `FACTS: ${docString}
    QUESTION: ${inputs.question}`

  // Run evaluator
  const grade = retrievalRelevanceLLM.invoke([{role: "system", content: retrievalRelevanceInstructions}, {role: "user", content: answer}])
  return grade.relevant;
};
```

## Run evaluation

We can now kick off our evaluation job with all of our different evaluators.

```python Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
def target(inputs: dict) -> dict:
    return rag_bot(inputs["question"])

experiment_results = client.evaluate(
    target,
    data=dataset_name,
    evaluators=[correctness, groundedness, relevance, retrieval_relevance],
    experiment_prefix="rag-doc-relevance",
    metadata={"version": "LCEL context, gpt-4-0125-preview"},
)

# Explore results locally as a dataframe if you have pandas installed
# experiment_results.to_pandas()
```

```typescript TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { evaluate } from "langsmith/evaluation";

const targetFunc = (inputs: Record<string, any>) => {
    return ragBot(inputs.question)
};

const experimentResults = await evaluate(targetFunc, {
    data: datasetName,
    evaluators: [correctness, groundedness, relevance, retrievalRelevance],
    experimentPrefix: "rag-doc-relevance",
    metadata: {version: "LCEL context, gpt-4-0125-preview"},
});
```

You can see an example of what these results look like here: [LangSmith link](https://smith.langchain.com/public/302573e2-20bf-4f8c-bdad-e97c20f33f1b/d)
