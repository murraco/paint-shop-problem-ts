# Paint Shop Problem TS

![](https://img.shields.io/badge/test-success-brightgreen.svg)

# Stack

![](https://img.shields.io/badge/node_8-✓-blue.svg)
![](https://img.shields.io/badge/typescript-✓-blue.svg)
![](https://img.shields.io/badge/mocha-✓-blue.svg)

# File structure

```
paint-shop-problem-ts/
│
├── src/
│   ├── components/
│   │   ├── parser.ts
│   │   ├── solver.ts
│   │   └── utils.ts
│   │
│   ├── models/
│   │   ├── preference.ts
│   │   └── request.ts
│   │
│   └── index.js                  * Entry point of our Node's app
│
├── test/
│   ├── components/
│   │   ├── parser.ts
│   │   ├── solver.ts
│   │   └── utils.ts
│   │
│   ├── models/
│   │   ├── preference.ts
│   │   └── request.ts
│   │
│   └── index.js
│   
├── .gitignore                    * Git ignore file for Node
├── LICENSE                       * MIT License
├── package-lock.json             * Defines our exact JavaScript dependencies tree
├── package.json                  * Defines our JavaScript dependencies
├── README.md                     * This file
├── tsconfig.json                 * Specifies the root files and the compiler options required to compile the project
├── tslint.json                   * Configures which rules get run and each of their options
└── yarn.lock                     * Stores exactly which versions of each dependency were installed
```