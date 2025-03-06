import { runSearch } from './search.js'
import { runTransform } from './transform.js'
import { startSpinner, stopSpinner } from './ui.js'

startSpinner('Finding matching companies...');
await runSearch();

startSpinner('Transforming matched companies...');
await runTransform();

stopSpinner();
