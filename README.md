# filament tech test

Assuming the mock server is already running. To run the app run:

```bash
npm i && npm start
```

As a side note the mock server's `package-lock.json` seems to be out of sync with the `package.json`, I had to regenerate it because it was attempting to fetch some filament dependencies and timing out on install.

This simple node app is fundamentally split in 2 parts, the first part deals with calling the mock server and writing a JSON file containing the matched results and the second reads said JSON file and applies some data transformations to it saving the result to a second JSON file.

Although an example "match results" schema was provided in the test readme file I didn't really see the value in applying an intermediary transformation to the matches themselves for the purpose of this test, I just append a `matchType` property to the result returned from the API to specify wether the result was `unique` or `ambiguous` in case of many results. I also currently omit the abmiguous results from the final data transformation. If I had more time the opportunity to discuss the best approach I would consider implementing a solution for either picking the best match.

The search script will also measure the time it takes to complease the search process as well as the number of companies processed, successful matches and failed matches.

The search script takes a naive approach and simply hits the API sequentially as fast as it can. If it receives a `500` or a `429` error it will retry for a number times with an increasing backoff delay. The number of attempts and delay amount can be tweaked easily. If I had more time I'd potentially experiment with libraries other than axios-retry but I feel like the best solution in this case will depend on a number of factors and some knowledge of what API you intend to consume.

If I had more time I'd probably think about how to save progress if retrying ultimately failed in the middle of a batch search.

The second step, the transformation step, currently simply reads the matched results JSON file and does a simple transformation relying on a set of types that I've defined. This is incomplete as I ran out time. If I had more time I'd think about write a function to deal with transforming the financials as well a think about defining the types themselves a bit better. I'd also look at some libraries like zod an try to leverage some of the functionality it provides when dealing with this sort of problem.

Finally I have not really spent any time setting up boilerplate configuration for liting, formatting or testing in the interest of time but that is something I'd normally do.
