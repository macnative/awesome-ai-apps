# Mac AI app coverage review

Historical research conducted on 2026-10-03, before the repository was narrowed to standalone desktop apps. At that time the broader list had 69 entries. The current README and verification log supersede those counts and exclude web-only, CLI-only, and extension-only products. The original candidate findings below are retained as review history.

## Selection method

Searched GitHub repositories and Mac AI topics, inspected canonical repositories, followed project moves, and checked official product and download pages. For additions, checked current availability, meaningful maintenance within six months, and a public usage signal such as release downloads, user reports, app-store reviews, or named customer examples. A star count alone was not enough.

The per-entry [verification log](VERIFICATION.md) links sources and dated releases. Download counts are observations at review time, not unique-user counts. This was a public-source review; the apps were not all installed or personally tested. Commercial product testimonials are vendor-published claims.

## Added apps

| Use case | Additions |
| --- | --- |
| Chat and model workspaces | BoltAI, Chatbox, Cherry Studio, Enchanted, macai, Msty Studio |
| Coding | Claude Code, Cline, Codex CLI, OpenCode |
| Image and video workflows | Comfy Desktop, Draw Things |
| Dictation and transcription | Buzz, Handy, Vibe, VoiceInk, Wispr Flow |
| Local models | Nativ |
| Agents and automation | Enconvo, Goose |
| Meeting knowledge | Granola |

The apps are listed alphabetically within their main README categories, with no paid placements or rank ordering. GitHub-hosted source, downloadable binaries, and a proprietary app's public issue tracker are not interchangeable licensing claims.

## Mac compatibility details

Current badges identify standalone desktop apps only. They do not promise Intel support or compatibility with every macOS version. Claude Code and Codex CLI were removed as standalone entries when scope changed to desktop apps; other apps may still offer optional terminal interfaces.

- Nativ requires Apple Silicon and macOS 26 or later.
- Comfy Desktop's Mac instructions specify Apple Silicon; generation speed depends on hardware and models.
- VoiceInk requires macOS 15 or later and offers a paid prebuilt app with a trial.
- macai documents macOS 14 or later and both Intel and Apple Silicon.
- Enchanted is a client for a separately running Ollama server. Check its issue tracker for local-network compatibility reports before deployment.
- AI clients may require separately billed provider keys. A local client does not mean inference runs locally.
- Wispr Flow and Granola include hosted processing; they are not labeled as offline tools.

## Deferred candidates

These are review decisions, not claims that the products can never be useful. Reconsider when new maintenance or compatibility evidence appears.

| Candidate | Evidence and reason |
| --- | --- |
| Reor | [Canonical repository](https://github.com/reorproject/reor) is archived; last observed release was 2025-04-05. |
| DiffusionBee | [Releases](https://github.com/divamgupta/diffusionbee-stable-diffusion-ui/releases) show latest release 2.5.3 on 2024-08-14; latest repository commit observed was 2023-12-28. Recent maintenance was not established. |
| GPT4All | [Repository](https://github.com/nomic-ai/gpt4all) has a 2025-02-25 latest release and 2025-05-27 latest commit at review time. Recent user issues alone do not establish maintainer support. |
| Upscayl | [Releases](https://github.com/upscayl/upscayl/releases) show 2.15.0 on 2024-12-25; latest commit observed was 2026-03-27. Needs a fresh maintenance and Mac GPU compatibility check before inclusion. |
| Klee | [Repository](https://github.com/signerlabs/Klee) has a 2026-03-19 release and 2026-03-20 latest commit; no qualifying recent maintenance evidence was established. |
| Whispering | [Original repository](https://github.com/braden-w/whispering) is archived and points to [Epicenter](https://github.com/EpicenterHQ/epicenter), whose current README focuses on a different app. A current maintained dictation release needs confirmation. |
| ChatWise | [Release repository](https://github.com/egoist/chatwise-releases) has usable Mac installers, but latest published release is 2026-03-19. Its latest July commit updates CI tooling; that alone does not establish recent product maintenance. |
| Peekaboo | [Repository](https://github.com/openclaw/Peekaboo) describes a 4.7.0 fix for a 4.6.0 startup failure on older macOS runtimes, while the latest stable release API returned 4.6.0. Deferred pending confirmation that the fix is available in the distributed release. |

Comfy Desktop and Goose were added from their current repositories, rather than their archived or renamed predecessors. Unofficial download mirrors and similarly named third-party copies of commercial apps were excluded.
