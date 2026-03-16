# @fozikio/tools-maintenance

Memory maintenance plugin for cortex-engine. Retrieve, fade, deduplicate, and audit memories. Monitor consolidation health and sleep pressure.

## Install

```
npm install @fozikio/tools-maintenance
```

## Tools

| Tool | Description |
|------|-------------|
| `retrieve` | Fetch a memory by ID or perform semantic search with text |
| `forget` | Intentionally reduce a concept's salience via FSRS lapse scheduling (fading, not deletion) |
| `find_duplicates` | Detect near-duplicate memories using embedding similarity above a threshold |
| `sleep_pressure` | Read unconsolidated observation count, last dream time, and hours since last dream |
| `consolidation_status` | Report last dream summary, quality trend, and current consolidation metrics |
| `retrieval_audit` | Analyze retrieval traces to find routing patterns and misfiring heuristics |

## Usage

```yaml
# cortex-engine config
plugins:
  - package: "@fozikio/tools-maintenance"
```

```typescript
import maintenancePlugin from "@fozikio/tools-maintenance";
import { CortexEngine } from "cortex-engine";

const engine = new CortexEngine({
  plugins: [maintenancePlugin],
});
```

## Documentation

- **[Wiki](https://github.com/Fozikio/cortex-engine/wiki)** — Guides, architecture, and full tool reference
- **[Plugin Authoring](https://github.com/Fozikio/cortex-engine/wiki/Plugin-Authoring)** — Build your own plugins
- **[Contributing](https://github.com/Fozikio/.github/blob/main/CONTRIBUTING.md)** — How to contribute

## License

MIT
