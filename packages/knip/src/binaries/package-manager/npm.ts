import parseArgs from 'minimist';
import type { BinaryResolver } from '../../types/config.js';
import { toBinary } from '../../util/input.js';

export const resolve: BinaryResolver = (_binary, args, options) => {
  const { fromArgs } = options;
  const parsed = parseArgs(args);
  const [command] = parsed._;
  return [toBinary(_binary), ...(command !== 'exec' ? [] : fromArgs(parsed._.slice(1)))];
};
