> **Archived.** Interview exercise, kept for reference, unmaintained.

# Paint Shop Problem TS

A TypeScript solution to the paint shop problem: find a batch of colors that satisfies every customer's preferences, using the fewest matte colors possible.

## Stack

![](https://img.shields.io/badge/node_8+-✓-blue.svg)
![](https://img.shields.io/badge/typescript-✓-blue.svg)
![](https://img.shields.io/badge/mocha-✓-blue.svg)

## Introduction

You can find a description of the problem in [this](https://github.com/murraco/paint-shop-problem-ts/blob/master/PAINT-SHOP-PROBLEM.md) link.

## File structure

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
├── .gitignore                    * Example git ignore file
├── LICENSE                       * MIT License
├── package.json                  * Defines our JavaScript dependencies
├── package-lock.json             * Defines our exact JavaScript dependencies tree
├── README.md                     * This file
├── tsconfig.json                 * Specifies the root files and the compiler options required to compile the project
├── tslint.json                   * Configures which rules get run and each of their options
└── yarn.lock                     * Stores exactly which versions of each dependency were installed
```

## Quick start

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

5. Build the project

  ```
  $ npm run build
  ```

6. Run the `index.js` file inside the just generated `build` folder and use stdin to specify the path to a file with a set of customer requirements (look at the examples folder)

  ```
  $ node build/index < path_to_file
  ```

## Testing

After installing the dependencies, run the following command in order to execute the tests:

  ```
  $ npm run test
  ```

## Contribution

- Report issues
- Open pull request with improvements
- Spread the word
- Reach out to me directly at <mauriurraco@gmail.com>

## License

Released under the [MIT License](LICENSE).

## Support

If this project helped you, consider buying me a coffee ☕️

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/murraco)
