import * as Path from 'path';

export const relativePath = filename => Path.relative('./', Path.resolve('./', filename));
