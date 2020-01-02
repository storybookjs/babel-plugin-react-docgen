import * as Path from 'path';

// Separated into its own file for jest mocking
export const relativePath = filename => Path.relative('./', Path.resolve('./', filename));
