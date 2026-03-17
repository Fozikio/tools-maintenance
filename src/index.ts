/**
 * @fozikio/tools-maintenance — maintenance tools plugin for cortex-engine.
 *
 * Provides 6 tools: retrieve, forget, find_duplicates, sleep_pressure,
 * consolidation_status, retrieval_audit.
 * Uses the generic CortexStore API and engine functions.
 */

import type { ToolPlugin } from '@fozikio/cortex-engine';
import { retrieveTool } from './tools/retrieve.js';
import { forgetTool } from './tools/forget.js';
import { findDuplicatesTool } from './tools/find-duplicates.js';
import { sleepPressureTool } from './tools/sleep-pressure.js';
import { consolidationStatusTool } from './tools/consolidation-status.js';
import { retrievalAuditTool } from './tools/retrieval-audit.js';

const plugin: ToolPlugin = {
  name: '@fozikio/tools-maintenance',
  tools: [
    retrieveTool,
    forgetTool,
    findDuplicatesTool,
    sleepPressureTool,
    consolidationStatusTool,
    retrievalAuditTool,
  ],
};

export default plugin;

// Named re-exports for direct use
export { retrieveTool } from './tools/retrieve.js';
export { forgetTool } from './tools/forget.js';
export { findDuplicatesTool } from './tools/find-duplicates.js';
export { sleepPressureTool } from './tools/sleep-pressure.js';
export { consolidationStatusTool } from './tools/consolidation-status.js';
export { retrievalAuditTool } from './tools/retrieval-audit.js';
