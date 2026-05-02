# README Generator

A Node.js CLI tool that prompts you for project details and generates a structured, professional `README.md`.

[GitHub Repository](https://github.com/cbushehry/readme-generator)

## Getting Started

```bash
npm install
npm start
```

## Usage

Running `npm start` walks you through a series of prompts:

- GitHub username and email
- Project title and description
- Deployed application URL (optional)
- Credits (optional)
- License — multi-select from 30+ options, rendered as shields.io badges
- Install and test commands
- Usage tips — add as many steps as you want, each with an optional screenshot path

The generated `README.md` is written to `dist/README.md`. A sample output is included at `dist/README.md` for reference.

## Test Mode

Run without prompts using built-in sample data:

```bash
node index.js test
```

## Tech Stack

- Node.js
- Inquirer.js v8

## Contact

Cameron Bushehry — c.bushehry@gmail.com
