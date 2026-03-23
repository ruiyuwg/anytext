## Use skills

Skills are reusable agent capabilities that provide specialized workflows and domain knowledge.
You can use [skills](/oss/python/deepagents/skills) to provide your deep agent with new capabilities and expertise.
Deep agent skills follow the [Agent Skills standard](https://agentskills.io/).
Once you have added skills your deep agent will automatically make use of them and update them as you use the agent and provide it with additional information.

Use `/remember` to explicitly prompt the agent to update skills and memory from the current conversation.

````
1. Create a skill:

   ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   # User skill (stored in ~/.deepagents/<agent_name>/skills/)
   deepagents skills create test-skill

   # Project skill (stored in .deepagents/skills/)
   deepagents skills create test-skill --project
   ```

   This generates:

   ```plaintext theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   skills/
   └── test-skill
       └── SKILL.md
   ```

2. Open the generated `SKILL.md` and edit the file to include your instructions.

3. Optionally add additional scripts or other resources to the `test-skill` folder. For more information, see [Examples](/oss/python/deepagents/skills#example).

You can also copy existing skills directly to the agent's folder:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
mkdir -p ~/.deepagents/<agent_name>/skills
cp -r examples/skills/web-research ~/.deepagents/<agent_name>/skills/
```



You can use tools like Vercel's [Skills CLI](https://github.com/vercel-labs/skills) to install community [Agent Skills](https://agentskills.io/) in your environment and make them available to your deep agents:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Install a skill globally
npx skills add vercel-labs/agent-skills --skill web-design-guidelines -a deepagents -g -y

# List installed skills
npx skills ls -a deepagents -g
```

Global installs (`-g`) symlink skills into `~/.deepagents/agent/skills/` — the default agent's user-level skills directory. Project-level installs (omit `-g`) place skills in `.deepagents/skills/` relative to the current directory, making them available to any agent running in that project regardless of agent name.


  Global installs target the default `agent` directory only. If you use a custom-named agent, either use project-level installs or manually symlink the skill into `~/.deepagents/{your-agent}/skills/`.




At startup, the CLI discovers skills from both Deep Agents and shared alias directories:

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
`~/.deepagents/<agent_name>/skills/`
`~/.agents/skills/`
`.deepagents/skills/`
`.agents/skills/`.
```

When duplicate skill names exist, later-precedence directories override earlier ones (see [App data](/oss/python/deepagents/data-locations#skills)).

For project-specific skills, the project's root folder must have a `.git` folder.
When you start the CLI from anywhere within the project's folder, the CLI will find the project's root folder by checking for a containing `.git` folder.

For each skill, the CLI reads the name and the description from the `SKILL.md` file's frontmatter.
As you use the CLI, if a task matches the skill's description, the agent will read the skill file and follow its instructions.



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# List all user skills
deepagents skills list

# List project skills
deepagents skills list --project

# Get detailed info about a specific skill
deepagents skills info test-skill
deepagents skills info test-skill --project
```
````
