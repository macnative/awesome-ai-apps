import {readFileSync, writeFileSync} from 'node:fs';
import {platforms, platformBadge} from './platforms.mjs';
const apps = JSON.parse(readFileSync('data/apps.json', 'utf8'));
const categories = [...new Set(apps.map(app => app.category))];
const slug = text => text.toLowerCase().replaceAll(' ', '-');
let readme = `# Awesome AI Desktop Apps [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Curated AI-powered desktop apps for macOS, Windows, and Linux.

Find installable AI desktop software for chat, coding, writing, image and video generation, voice, local LLMs, agents, and everyday productivity. Every entry has a standalone desktop application for at least one supported operating system. Each product appears once, under its primary use case; entries are alphabetical, not ranked.

**Build an AI desktop app? [Submit it for review](#contributing).** Independent developers and product teams are welcome. Inclusion is earned through usefulness, availability, and maintenance; there are no paid placements or affiliate links.

Platform badges: ${Object.keys(platforms).map(platformBadge).join(' ')}

Badges identify verified desktop app availability. Native and cross-platform desktop apps are welcome, including apps that use cloud AI services. A desktop app does not have to run its models offline. Hardware, operating-system versions, and plan requirements vary by product.

Latest entry review: **${apps.map(app => app.verified).sort().at(-1)}** · **${apps.length} desktop apps** · **${apps.filter(app => app.platforms.includes('macos')).length} with macOS support** · [Verification sources](VERIFICATION.md). Verification checks public availability and documented capabilities; it is not a hands-on test, security audit, or product endorsement. Features, access, and pricing can change.

## Contents

${[...categories, 'Inclusion Criteria', 'Keeping the List Useful'].map(cat => `- [${cat}](#${slug(cat)})`).join('\n')}
`;
const escapeHtml = text => text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
for (const category of categories) {
 readme += `\n## ${category}\n\n`;
 readme += '<table>\n';
 readme += apps.filter(app => app.category === category).map(app => `<tr>
<td width="64"><img src="${app.icon}" width="48" height="48" alt="${escapeHtml(app.name)} icon"></td>
<td><strong><a href="${app.url}">${escapeHtml(app.name)}</a></strong><br><sub>${escapeHtml(app.description)}. ${app.platforms.map(platformBadge).join(' ')}</sub></td>
</tr>`).join('\n')+'\n';
 readme += '</table>\n';
}
readme += `
## Inclusion Criteria

Products must provide a useful AI capability through an installable desktop application for macOS, Windows, or Linux. Reviewers look for:

- Desktop availability: An official desktop installer, desktop app-store listing, or documented desktop application package. Web-only services, mobile-only apps, browser or IDE extensions without a standalone app, CLI-only tools, and browser-only self-hosted interfaces are outside scope. Public betas qualify only when usable without an invitation; waitlists and concept demos do not.
- Maintenance: Evidence of a release, changelog update, support response, or meaningful repository activity within the past six months. Stable tools may qualify with a documented support and compatibility check.
- Real use: Public user discussions, customer examples, app-store reviews, or meaningful adoption of a public repository. A landing page or star count alone is insufficient.
- Distinct value: A clear workflow or capability beyond a generic model wrapper. Explain why a reader would choose the product.
- Transparency: Identifiable maintainers, accessible documentation, understandable pricing or access terms, and a privacy policy for hosted products. Source availability and open-source licensing are separate facts.
- Editorial independence: Neutral descriptions, direct official links, and disclosed contributor affiliations. No referral codes, keyword stuffing, paid priority, or promised acceptance.

Model weights, research papers, prompt collections, generic SDKs, and other directories are outside scope. Developer tools, AI browsers, and agent builders qualify when they include a standalone desktop app. Maintainers may reject duplicates or remove discontinued, misleading, or unsupported products.

## Keeping the List Useful

Report broken links or changed availability through an issue, or open a correction PR with a source. Review dates record the last public-source check, not continuous monitoring. The maintenance process and release checks are in [MAINTAINING.md](MAINTAINING.md).

## Contributing

Read the [submission guide](CONTRIBUTING.md) and use the pull request template. Submit one product per PR, explain its distinctive value, and include evidence for maintenance and real use. A submission is a request for editorial review, not a guarantee of inclusion.

The list and repository content are dedicated to the public domain under [CC0 1.0](LICENSE). Product names and trademarks belong to their respective owners.
`;
let verification = `# Verification log\n\nThe current desktop list was checked against official public product pages, download pages, and repositories on 2026-10-03. The earlier [Mac coverage review](MAC_REVIEW.md) records candidate research; this log contains only entries retained under the desktop-only scope. These are source checks, not claims that every app was installed or purchased. Platform badges are limited to verified desktop applications; consult the vendor for hardware, region, plan, and version requirements.\n\nEach row records the source and the availability evidence used for inclusion. The initial pass establishes a discoverable, available product and documented AI functionality. It does not independently audit vendor adoption claims. New entries from the Mac coverage review include dated maintenance evidence and concrete public usage signals. Future submissions must supply the same evidence under the contribution checklist.\n\nPricing and license claims are omitted from short entries to avoid implying that a free tier, public repository, or local runtime has no conditions. Reviewers must check those details before accepting new submissions. Desktop apps may use local models or paid cloud providers.\n\n| App | Checked | Official evidence | Review note |\n| --- | --- | --- | --- |\n`;
for (const app of apps) verification += `| ${app.name} | ${app.verified} | [Source](${app.source}) | ${app.evidence} |\n`;
verification += '\n## Deferred candidates\n\nContinue was excluded from the seed list because its official site now announces acquisition by Cursor; a separate entry needs confirmation of its ongoing independent product status. Additional Mac candidates and reasons for deferral are recorded in [MAC_REVIEW.md](MAC_REVIEW.md).\n';
for (const [filename, content] of [['README.md',readme],['VERIFICATION.md',verification]]) {
 if (process.argv.includes('--check')) {
  if (readFileSync(filename,'utf8') !== content) throw new Error(`${filename} is stale; run npm run build`);
 } else writeFileSync(filename,content);
}
console.log(`${apps.length} entries across ${categories.length} categories; generated files ${process.argv.includes('--check') ? 'match' : 'updated'}.`);
