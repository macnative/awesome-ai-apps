# Contributing to Awesome AI Apps

Build something useful with AI? Submit your product for editorial review. Solo makers, open-source maintainers, users, and company teams are equally welcome. You do not need to sponsor the list, buy a placement, or reach a follower threshold.

## Before submitting

Read the [inclusion criteria](README.md#inclusion-criteria). Try the product yourself. Check for an existing entry and choose the single category that best describes its primary use. Disclose whether you make, work for, invest in, or receive compensation from the product.

Submit a working product with a concrete advantage. Waitlists, unreleased features, thin clones, directories, and promotional claims without evidence will be declined. Public betas are eligible when anyone can use them without an invitation; disclose material limitations.

## Make a pull request

1. Fork the repository and create a branch.
2. Add one object to `data/apps.json`, alphabetically within its category, matching the existing fields. Use the canonical official HTTPS URL and a short description of what the app does. Avoid “best,” “revolutionary,” pricing amounts, model version numbers, and repeating the app name.
3. Include only verified platforms in the `platforms` array. Supported values: `macos`, `windows`, `linux`, `web`, `ios`, `android`, `cli`, `browser`, `ide`, `self-hosted`. For example: `["macos", "windows", "web"]`. List `ios` and `android` separately when each is verified. The generator renders these as labeled badges. CLI and self-hosted tools must document installation requirements; do not infer native apps from web availability.
4. Set `verified` to your actual review date, `source` to an official evidence page, and `evidence` to a concrete availability observation. Include additional links in the PR when one source cannot support all claims.
5. Run `npm ci`, `npm run build`, and `npm test`. Commit the data and both generated Markdown files. Do not edit generated README entries directly.
6. Complete the PR template below. One product per PR keeps review focused.

Typo, link, and removal corrections are welcome without a full new-product submission. Explain the change and cite a source.

## Submission template

Copy this into your PR; the repository's PR template includes the same fields.

```text
Name:
Official URL:
One-line description:
Category:
Platform(s), with official download/store/docs links:
Pricing model: free / freemium / paid / usage-based / bring your own key / mixed
Pricing or access-terms URL (state whether a trial expires):
Open-source status: open source / source available / proprietary / mixed
Source repository and license URL (if applicable):
Your relationship to the product:
What makes it useful and different:
How you personally used or tested it:
Availability evidence (download, install command, or live signup):
Maintenance evidence (dated release, changelog, or support activity within six months):
Real-use evidence (user discussion, customer example, or app-store reviews):
Privacy policy URL (for hosted products):
Known access, region, hardware, or plan limitations:
Date verified (YYYY-MM-DD):
```

## Review checklist

- [ ] The app is available now and its core AI feature works.
- [ ] I tried it and explained a concrete use case.
- [ ] Official sources support every platform and capability claimed.
- [ ] I linked dated maintenance evidence and a public usage signal.
- [ ] I stated pricing conditions, including external model/API costs.
- [ ] I checked the license text; public source code alone does not mean open source.
- [ ] I disclosed affiliation and removed referral or tracking parameters.
- [ ] The entry is unique, concise, neutral, and alphabetized.
- [ ] I regenerated the documentation and ran the checks.
- [ ] I understand maintainers may request changes or decline the submission.

## Editorial process

Maintainers check the supplied sources, distinctiveness, and fit. They may request a reproducible example or clarification. Acceptance is discretionary, with no guaranteed response time. Listings can be revised or removed as products change. Corrections supported by evidence take precedence over promotional wording.

By contributing, you agree to dedicate your contribution under [CC0 1.0](LICENSE). Be respectful and discuss the product and evidence, not the contributor.
