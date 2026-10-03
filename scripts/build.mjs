import {readFileSync, writeFileSync} from 'node:fs';
import {platforms, platformBadge} from './platforms.mjs';
const apps = JSON.parse(readFileSync('data/apps.json', 'utf8'));
const categories = [...new Set(apps.map(app => app.category))];
const slug = text => text.toLowerCase().replaceAll(' ', '-');
let readme = `# Awesome AI Apps [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Curated AI-powered apps and tools for macOS, Windows, Linux, web, mobile, terminals, and browsers.

Find AI software for chat, coding, writing, image and video generation, voice, local LLMs, agents, and everyday productivity. Each product appears once, under its primary use case; entries are alphabetical, not ranked.

**Build an AI app? [Submit it for review](#contributing).** Independent developers and product teams are welcome. Inclusion is earned through usefulness, availability, and maintenance; there are no paid placements or affiliate links.

Platform badges: ${Object.keys(platforms).map(platformBadge).join(' ')}

Web means a web interface; Browser and IDE identify integrations; CLI means command-line access; Self-hosted means you can run the service yourself. iOS and Android are labeled separately.

Badges identify verified ways to use a product, not every supported platform. Web access does not imply a native desktop app. Self-hosting does not guarantee offline operation: model providers and integrations may still send data to external services.

Seed review: **2026-10-03** · **${apps.length} apps** · [Verification sources](VERIFICATION.md). Verification checks public availability and documented capabilities; it is not a hands-on test, security audit, or product endorsement. Features, access, and pricing can change.

## Contents

${[...categories, 'Inclusion Criteria', 'Keeping the List Useful'].map(cat => `- [${cat}](#${slug(cat)})`).join('\n')}
`;
for (const category of categories) {
 readme += `\n## ${category}\n\n`;
 readme += apps.filter(app => app.category === category).map(app => `- [${app.name}](${app.url}) - ${app.description}. ${app.platforms.map(platformBadge).join(' ')}`).join('\n')+'\n';
}
readme += `
## Inclusion Criteria

Products must provide a useful AI capability that people can actually access. Reviewers look for:

- Availability: A working download, install command, app-store listing, or usable hosted product. Public betas qualify only when usable without an invitation; waitlists and concept demos do not.
- Maintenance: Evidence of a release, changelog update, support response, or meaningful repository activity within the past six months. Stable tools may qualify with a documented support and compatibility check.
- Real use: Public user discussions, customer examples, app-store reviews, or meaningful adoption of a public repository. A landing page or star count alone is insufficient.
- Distinct value: A clear workflow or capability beyond a generic model wrapper. Explain why a reader would choose the product.
- Transparency: Identifiable maintainers, accessible documentation, understandable pricing or access terms, and a privacy policy for hosted products. Source availability and open-source licensing are separate facts.
- Editorial independence: Neutral descriptions, direct official links, and disclosed contributor affiliations. No referral codes, keyword stuffing, paid priority, or promised acceptance.

Model weights, research papers, prompt collections, generic SDKs, and other directories are outside scope. Runnable developer tools and agent builders are welcome. Maintainers may reject duplicates or remove discontinued, misleading, or unsupported products.

## Keeping the List Useful

Report broken links or changed availability through an issue, or open a correction PR with a source. Review dates record the last public-source check, not continuous monitoring. The maintenance process and release checks are in [MAINTAINING.md](MAINTAINING.md).

## Contributing

Read the [submission guide](CONTRIBUTING.md) and use the pull request template. Submit one product per PR, explain its distinctive value, and include evidence for maintenance and real use. A submission is a request for editorial review, not a guarantee of inclusion.

The list and repository content are dedicated to the public domain under [CC0 1.0](LICENSE). Product names and trademarks belong to their respective owners.
`;
let verification = `# Verification log\n\nThe seed list was checked against official public product pages, download pages, and repositories on 2026-10-03. These are source checks, not claims that every app was installed or purchased. Platform tags are deliberately limited to verified interfaces; consult the vendor for hardware, region, plan, and version requirements.\n\nEach row records the source and the availability evidence used for inclusion. The initial pass establishes a discoverable, available product and documented AI functionality. It does not independently audit vendor adoption claims. Future submissions must additionally supply dated maintenance evidence and a concrete public usage signal under the contribution checklist.\n\nPricing and license claims are omitted from short entries to avoid implying that a free tier, public repository, or local runtime has no conditions. Reviewers must check those details before accepting new submissions. In particular, self-hostable products can have source-available licenses with restrictions.\n\n| App | Checked | Official evidence | Review note |\n| --- | --- | --- | --- |\n`;
for (const app of apps) verification += `| ${app.name} | ${app.verified} | [Source](${app.source}) | ${app.evidence} |\n`;
verification += '\n## Deferred candidates\n\nContinue was excluded from the seed list because its official site now announces acquisition by Cursor; a separate entry needs confirmation of its ongoing independent product status. NotebookLM was deferred because the former official URL now redirects to Gemini Notebook, requiring a fresh product and naming review.\n';
for (const [filename, content] of [['README.md',readme],['VERIFICATION.md',verification]]) {
 if (process.argv.includes('--check')) {
  if (readFileSync(filename,'utf8') !== content) throw new Error(`${filename} is stale; run npm run build`);
 } else writeFileSync(filename,content);
}
console.log(`${apps.length} entries across ${categories.length} categories; generated files ${process.argv.includes('--check') ? 'match' : 'updated'}.`);
