# Contributing Guide

## 🛠️ Getting Started
### 1. Install Node.js & npm

This project uses npm as its package manager.

Download and install Node.js (which includes npm) here:
https://nodejs.org

After installing, verify installation:
```bash
node -v
npm -v
```
### 2. Install Dependencies

Run the following command to install all project dependencies:
```bash
npm install
```
## 🚀 Development Workflow
### Start the Development Server

Runs the Next.js dev server with hot reload:
```bash
npm run dev
```

### Build the Production Bundle

Creates the optimized production build:
```bash
npm run build
```
### Start the Production Server

Runs the compiled application:
```bash
npm run start
```
## 🧹 Code Quality & Linting
### ESLint

This project uses ESLint for static analysis and Prettier as the formatting convention.

#### Identify Lint Issues
```bash
npm run lint
```
#### Auto-Fix Issues
```bash
eslint . --fix
```

Make sure to run linting before submitting your pull request to ensure consistency.

## 📝 Commit Message Guidelines

To maintain a clean project history, please follow these conventions:

- Use clear, descriptive commit messages.

- Start with a verb in the imperative mood (e.g., Add, Fix, Update, Refactor).

- Keep the summary under ~50 characters when possible.

- Provide additional details in the commit body if needed.

### Examples:

- `Add API client utilities`

- `Fix layout shift in navbar`

- `Refactor authentication middleware`

## 🔀 Pull Request Guidelines

Before submitting a pull request:

### 1) Create a feature branch

Example:
```bash
git checkout -b feature/add-auth-flow
```

### 2) Ensure your code is linted and formatted
```bash
npm run lint
eslint . --fix
```
### 3) Make sure the app builds successfully
```bash
npm run build
```
### 4) Write a clear pull request description explaining:

- What you changed

- Why you changed it

- Any relevant context or screenshots

- Steps to test the changes

- Request review from maintainers.

## 🎨 Formatting: Prettier

This project uses Prettier as the standard code formatter.
Ensure your editor is configured to use Prettier on save, or run formatting manually before committing.

Thank you for contributing and helping improve this project! If you have any questions, feel free to open an issue or reach out to the maintainers.
