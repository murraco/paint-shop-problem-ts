# Paint Shop Problem TS

![](https://img.shields.io/badge/test-success-brightgreen.svg)

# Stack

![](https://img.shields.io/badge/node_8+-✓-blue.svg)
![](https://img.shields.io/badge/typescript-✓-blue.svg)
![](https://img.shields.io/badge/mocha-✓-blue.svg)

# File structure

```
paint-shop-problem-ts/
│
├── examples/
│   └── *.txt                     * Input/output examples
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
│   └── index.ts                  * Entry point of our Node's app
│
├── test/
│   ├── components/
│   │   ├── parser.test.ts
│   │   ├── solver.test.ts
│   │   └── utils.test.ts
│   │
│   ├── models/
│   │   ├── preference.test.ts
│   │   └── request.test.ts
│   │
│   └── index.test.ts
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

# Introduction

You can find a description of the problem in [this](https://github.com/murraco/paint-shop-problem-ts/blob/master/PAINT-SHOP-PROBLEM.md) link.

## How to use this code?

1. Make sure you have [Node.js](https://nodejs.org/en/) v8+ installed

  ```
  $ sudo npm cache clean -f
  $ sudo npm install -g n
  $ sudo n stable
  ```
  
  > NOTE: I recommend you to use [nvm](https://github.com/creationix/nvm) for managing multiple node versions
  
2. Clone this repository
  
  ```
  $ git clone https://github.com/murraco/paint-shop-problem-ts
  ```

3. Navigate into the folder  

  ```
  $ cd paint-shop-problem-ts
  ```
  
4. Install NPM dependencies

  ```
  $ npm install
  ```
  
7. Build the project

  ```
  $ node run build
  ```

8. Run the `index.js` file inside the just generated `build` folder and use stdin to specify the path to a file with a set of customer requirements (look at the examples folder)

  ```
  $ node build/index < path_to_file
  ```

## Test

After installing the dependencies, run the following command in order to execute the tests:

  ```
  $ npm run test
  ```

# Contribution

- Report issues
- Open pull request with improvements
- Spread the word
- Reach out to me directly at <mauriurraco@gmail.com>

# Donate

`btc: 36V7HqqENSKn6iFCBuE4iCdtB29uGoCKzN`

`eth: 0xB419E3E9fa2233383E0877d442e55C34B9C944dD`
