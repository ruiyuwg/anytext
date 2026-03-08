# Benchmarking

## Benchmarking[​](#benchmarking "Direct link to Benchmarking")

Benchmarking is important if you want to measure how a change can affect the performance of your application. We provide a simple way to benchmark your application from the point of view of a user and contributor. The setup allows you to automate benchmarks in different branches and on different Node.js versions.

The modules we will use:

- [Autocannon](https://github.com/mcollina/autocannon): A HTTP/1.1 benchmarking tool written in node.
- [Branch-comparer](https://github.com/StarpTech/branch-comparer): Checkout multiple git branches, execute scripts and log the results.
- [Concurrently](https://github.com/kimmobrunfeldt/concurrently): Run commands concurrently.
- [Npx](https://github.com/npm/npx): NPM package runner used to run scripts against different Node.js Versions and execute local binaries. Shipped with npm@5.2.0.

## Simple[​](#simple "Direct link to Simple")

### Run the test in the current branch[​](#run-the-test-in-the-current-branch "Direct link to Run the test in the current branch")

```
npm run benchmark
```

### Run the test against different Node.js versions ✨[​](#run-the-test-against-different-nodejs-versions- "Direct link to Run the test against different Node.js versions ✨")

```
npx -p node@10 -- npm run benchmark
```

## Advanced[​](#advanced "Direct link to Advanced")

### Run the test in different branches[​](#run-the-test-in-different-branches "Direct link to Run the test in different branches")

```
branchcmp --rounds 2 --script "npm run benchmark"
```

### Run the test in different branches against different Node.js versions ✨[​](#run-the-test-in-different-branches-against-different-nodejs-versions- "Direct link to Run the test in different branches against different Node.js versions ✨")

```
branchcmp --rounds 2 --script "npm run benchmark"
```

### Compare current branch with main (Gitflow)[​](#compare-current-branch-with-main-gitflow "Direct link to Compare current branch with main (Gitflow)")

```
branchcmp --rounds 2 --gitflow --script "npm run benchmark"
```

or

```
npm run bench
```

### Run different examples[​](#run-different-examples "Direct link to Run different examples")

```
branchcmp --rounds 2 -s "node ./node_modules/concurrently -k -s first \"node ./examples/asyncawait.js\" \"node ./node_modules/autocannon -c 100 -d 5 -p 10 localhost:3000/\""
```

***
