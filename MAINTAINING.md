# Maintaining Awesome AI Desktop Apps

## Positioning and GitHub metadata

Use a dedicated `macnative/awesome-ai-apps` repository. The scope is standalone desktop apps for macOS, Windows, and Linux. Cloud-backed desktop clients qualify. Web-only, mobile-only, CLI-only, extension-only, and browser-only self-hosted products do not. Keep the existing repository URL for continuity.

Recommended repository description:

> Awesome AI Desktop Apps — Curated AI-powered desktop software for macOS, Windows and Linux. Chat, coding, writing, media, local LLMs and agents.

Topics: `awesome`, `awesome-list`, `ai`, `ai-apps`, `ai-tools`, `artificial-intelligence`, `generative-ai`, `llm`, `ai-agents`, `coding-assistant`, `productivity`, `macos`, `windows`, `linux`, `desktop-apps`, `desktop-ai`, `cross-platform`.

Clear headings, concise original descriptions, direct product links, contribution instructions, and current evidence are the search strategy. Do not repeat “best AI tools” throughout the README or promise rankings. The list is alphabetical, not a comparative benchmark.

## Local checks

Use Node.js 22 or newer and Git. Install development dependencies with `npm ci --ignore-scripts`. There is no runtime service or production dependency.

- `npm run build` regenerates README.md and VERIFICATION.md from data/apps.json.
- `npm test` checks data integrity, verifies generated files are current, and runs awesome-lint.
- `npm run lint` runs the unmodified awesome-lint 2.3.0 rules.

No linter rules are disabled or overridden locally. Version 2.3.0 does not enable its repository-age rule by default. Passing lint is not acceptance into the upstream Awesome index; follow that project’s current contribution requirements separately. Use full history in CI.

The CI configuration is provided in `maintenance/validate-workflow.yml` and is not active yet. The publishing login lacked GitHub’s `workflow` scope. To activate it, use a login authorized to manage Actions workflows, move this file to `.github/workflows/validate.yml`, and commit and push the change. The same checks already run locally via `npm test`.

## Reviewing submissions

Confirm the product provides an installable standalone desktop app, has a documented AI capability, and contributes a distinct use case. Verify GUI availability separately for each operating-system badge; CLI or server support alone does not qualify. Check the contributor's maintenance, public usage, pricing, license, and privacy-policy sources. Require a dated maintenance signal within six months or record a stable-product exception with supporting evidence in the PR. A live homepage alone is not enough for a new submission.

Use the PR discussion as the durable record for editorial decisions. Keep promotional language, referral links, unsupported privacy guarantees, and unreleased platforms out of the entry. Do not equate open weights, a public repository, source availability, and an open-source application license.

## Periodic review

Aim to review all entries quarterly. This is a maintenance policy, not an assertion that automated monitoring is running. Start with old verification dates and reports of broken links. Open the official product and supporting sources, check download or signup access, maintenance, usage signals, platforms, and renames. Update the date only after reviewing the entry.

For redirects, verify the destination is still the same product before changing the canonical URL. Challenge vendor adoption claims when evidence is unclear. Prefer removal or deferral to an unsupported claim. Record removal reasons in the PR so future submissions can be evaluated consistently.

Re-check suspected outages before removing an otherwise maintained product. Remove confirmed shutdowns, invitation-only replacements, deceptive products, or entries with unresolved eligibility failures. A correction issue should include its evidence and observation date.

## Optional GitHub Pages directory

The initial release focuses on the GitHub list. A Pages version is optional and is not deployed by this repository. If added, generate crawlable HTML from data/apps.json, with visible links and descriptions before JavaScript runs. Add accessible search plus category and platform filters, a canonical URL, descriptive title, meta description, sitemap, and a clear submission link. Keep the README and website on the same data source and avoid fabricated ratings or review counts in structured data.

## Dependency audit

The initial `npm audit` reports high-severity advisories in the linter’s transitive `braces` and `http-cache-semantics` dependencies (including their dependent packages). At launch, npm suggests downgrading awesome-lint to 0.9.1 rather than a compatible patched release. These are development dependencies; there is no deployed app. Keep the current linter pinned, avoid processing untrusted glob patterns, and recheck upstream fixes before updating. The supplied CI template uses read-only permissions and does not run install scripts.
