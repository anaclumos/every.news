## Directory Structure
- `app/` (Next.js App Router)
  - Subfolders for each route, each containing `page.tsx` and optionally `layout.tsx`.
- `components/ui/` (UI Primitives)
  - Reusable React components (Buttons, Dialogs, Inputs).
  - Minimal logic; rely on Tailwind for styling.
  - We are using Tremor (NOT shadcn)
- `data/` (Seed Data & Demo Content)
  - JSON, CSV, or seed scripts for database initialization.
- `lib/` (Custom Hooks & Utilities)
  - Utility functions (e.g., data fetching, mobile detection).
- `prisma/` (Database Schema & Client)
  - Contains `schema.prisma` and Prisma client initialization.
- `public/` (Static Assets)
  - Images, icons, and brand files.
- `next.config.ts`
  - Next.js configuration (e.g., experimental features, prerendering).
## Data Modeling (Prisma)
- Define models in `prisma/schema.prisma`.
- Run `npx prisma migrate dev` for database updates.
- Use `npx prisma generate` to generate the Prisma client.
- Fetch and update data using Prisma in server components.
## Next.js 13+ App Router & React 19
- File-Based Routing
  - Each `app/` subfolder with `page.tsx` defines a route.
- Layouts
  - Use `layout.tsx` to wrap child routes.
- Server Components
  - Default in `app/` directory; import data directly.
- Client Components
  - Add `"use client"` for client-side interactions.
- Metadata
  - Export a `metadata` object in pages and layouts for SEO.
- Partial Prerendering
  - Enable in `next.config.ts` to improve load performance.
- Server Actions
  - Use `"use server"` to handle form submissions in server components.
## Tailwind CSS & Theming
- Setup
  - Install Tailwind and configure `tailwind.config.ts`.
- Dark Mode
  - Use `darkMode: "class"` in Tailwind config.
  - Implement `ThemeProvider` from `next-themes`.
- Utility Classes
  - Use Tailwind for consistent styling (spacing, typography, colors).
## UI Components & Patterns
- `components/ui/` Directory
  - Small, composable UI blocks (Buttons, Inputs, Dialogs).
- Minimal Logic
  - Typed with TypeScript, styled with Tailwind.
- Tremor UI
  - Similar to shadcn, focusing on composability. We are NOT using shadcn.
## Clerk Authentication & Middleware
- Usage
  - Wrap app in `<ClerkProvider>`.
  - Use `<SignIn>`, `<UserButton>`, `<SignedIn>`.
## Scheduling, Subscriptions & Strategies
- Scheduling
  - Store cron expressions in the `Schedule` model.
  - Implement background jobs for execution.
- Subscriptions
  - Define `Subscription` model linking `User` and `Reporter`.
  - Trigger notifications on new stories.
- Strategies
  - Each `Reporter` has a strategy field (e.g., `"HN_BEST_STORIES"`).
  - Implement fetching logic accordingly.
## Testing, Linting & Automation
- Vitest
  - Install and create `.spec.ts` tests.
- Playwright
  - Install and create `.test.ts` tests.
- Biome (Lint & Format)
  - Use `biome check .` and `biome format .`.
- GitHub Actions
  - Automate CI with linting, tests, and builds.
## Implementation Tips
- Keep server logic in server components or actions.
- Use client components only for interactive UI.
- Maintain consistent TypeScript types across codebase.
- Store secrets in environment variables (`.env`).
- Always create tests for new features.
## Tests
- Always add e2e tests and Vitest spec tests at the end. e2e tests are located in the e2e folder, and the Vitest spec test should be colocated with .test.ts
- after the file name.
## Commit Messages
- When everything is done, print what should be a commit message with:
  - :emoji_text: (scope) description
- You should use the ASCII representation of the emoji, not the Unicode itself. For example, :sparkles: is correct, not ✨.
## Special Gotchas
- Use "import { cx } from "@/lib/utils" to combine tailwind classes.
- Use authInterrupts, such as unauthorized() and forbidden() instead of return new Response("Unauthorized", { status: 401 }) or return new Response("Forbidden", { status: 403 })
- Always read Prisma schema files before writing code.

| Emoji | Description |
|-------|-------------|
| 🎨 | Improving structure / format of the code |
| ⚡️ | Improving performance |
| 🔥 | Removing code or files |
| 🐛 | Fixing a bug |
| 🚑 | Critical hotfix |
| ✨ | Introducing new features |
| 📝 | Writing docs |
| 🚀 | Deploying stuff |
| 💄 | Updating the UI and style files |
| 🎉 | Initial commit |
| ✅ | Adding tests |
| 🔒 | Fixing security issues |
| 🍎 | Fixing something on macOS |
| 🐧 | Fixing something on Linux |
| 🏁 | Fixing something on Windows |
| 🤖 | Fixing something on Android |
| 🍏 | Fixing something on iOS |
| 🔖 | Releasing / Version tags |
| 🚨 | Removing linter warnings |
| 🚧 | Work in progress |
| 💚 | Fixing CI Build |
| ⬇️ | Downgrading dependencies |
| ⬆️ | Upgrading dependencies |
| 📌 | Pinning dependencies to specific versions |
| 👷 | Adding CI build system |
| 📈 | Adding analytics or tracking code |
| ♻️ | Refactoring code |
| 🐳 | Work about Docker |
| ➕ | Adding a dependency |
| ➖ | Removing a dependency |
| 🔧 | Changing configuration files |
| 🌐 | Internationalization and localization |
| ✏️ | Fixing typos |
| 💩 | Writing bad code that needs to be improved |
| ⏪ | Reverting changes |
| 🔀 | Merging branches |
| 📦 | Updating compiled files or packages |
| 👽 | Updating code due to external API changes |
| 🚚 | Moving or renaming files |
| 📄 | Adding or updating license |
| 💥 | Introducing breaking changes |
| 🍱 | Adding or updating assets |
| 👌 | Updating code due to code review changes |
| ♿️ | Improving accessibility |
| 💡 | Documenting source code |
| 🍻 | Writing code drunkenly |
| 💬 | Updating text and literals |
| 🗃 | Performing database related changes |
| 🔊 | Adding logs |
| 🔇 | Removing logs |
| 👥 | Adding contributor(s) |
| 🚸 | Improving user experience / usability |
| 🏗 | Making architectural changes |
| 📱 | Working on responsive design |
| 🤡 | Mocking things |
| 🥚 | Adding an easter egg |
| 🙈 | Adding or updating a .gitignore file |
| 📸 | Adding or updating snapshots |
| ⚗ | Experimenting new things |
| 🔍 | Improving SEO |
| ☸️ | Work about Kubernetes |
| 🏷️ | Adding or updating types (Flow, TypeScript) |
| 🌱 | Adding or updating seed files |
| 🚩 | Adding, updating, or removing feature flags |
| 💫 | Adding or updating animations and transitions |
| 🗑️ | Deprecate code that needs to be cleaned up |
| 🛂 | Work on code related to authorization, roles and permissions |
| 🩹 | Simple fix for a non-critical issue |
| 🧐 | Data exploration/inspection |
| ⚰️ | Remove dead code |
| 🧪 | Add a failing test |
| 👔 | Add or update business logic |
| 🩺 | Add or update healthcheck |
| 🧱 | Infrastructure related changes |
| 🧑‍💻 | Improve developer experience |
