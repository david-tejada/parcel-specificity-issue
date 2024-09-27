This is a minimal reproduction of an issue where importing the dependency [specificity](https://github.com/keeganstreet/specificity) causes Parcel creates a corrupt bundle that errors with the message:

```
ReferenceError: $c65b14922fc6cad5$exports is not defined
    at /Users/david/Code/parcel-specificity-issue/dist/main.js:3:9585
    at Object.<anonymous> (/Users/david/Code/parcel-specificity-issue/dist/main.js:3:169453)
    at Module._compile (node:internal/modules/cjs/loader:1356:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
    at Module.load (node:internal/modules/cjs/loader:1197:32)
    at Module._load (node:internal/modules/cjs/loader:1013:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    at node:internal/main/run_main_module:28:49
```

Run this to reproduce it:

```bash
npm install
npm run build
npm start
```
