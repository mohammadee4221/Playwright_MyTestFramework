# 🎭 Playwright Test Automation Framework

A scalable and maintainable Playwright Test Automation Framework built using TypeScript, following industry-standard best practices such as Page Object Model (POM), reusable utilities, centralized configuration, API testing, and CI/CD integration.

## 🚀 Features

- UI Automation using Playwright
- API Testing using Playwright Request Context
- TypeScript Support
- Page Object Model (POM)
- Cross-Browser Testing
  - Chromium
  - Firefox
  - WebKit
- Parallel Test Execution
- Environment-Based Configuration
- Screenshots on Failure
- Video Recording
- Trace Viewer Support
- HTML Reports
- Allure Reporting
- CI/CD Ready
- GitHub Actions Integration
- Reusable Utilities and Fixtures

---

## 📂 Project Structure

```text
Playwright_MyTestFramework
│
├── tests/
│   ├── ui/
│   ├── api/
│
├── pages/
│   ├── LoginPage.ts
│   ├── HomePage.ts
│
├── fixtures/
│
├── utils/
│
├── test-data/
│
├── config/
│
├── reports/
│
├── playwright.config.ts
│
└── package.json
```

---

## 🛠️ Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- Allure Reports
- HTML Reports

---

## 📋 Prerequisites

Before running the project, install:

- Node.js (v18+ recommended)
- npm

Verify installation:

```bash
node -v
npm -v
```

---

## ⚙️ Installation

Clone repository:

```bash
git clone https://github.com/mohammadee4221/Playwright_MyTestFramework.git
```

Navigate to project:

```bash
cd Playwright_MyTestFramework
```

Install dependencies:

```bash
npm install
```

Install browsers:

```bash
npx playwright install
```

---

## ▶️ Running Tests

Run all tests:

```bash
npx playwright test
```

Run specific test:

```bash
npx playwright test tests/login.spec.ts
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run on Chromium:

```bash
npx playwright test --project=chromium
```

Run on Firefox:

```bash
npx playwright test --project=firefox
```

Run on WebKit:

```bash
npx playwright test --project=webkit
```

---

## ⚡ Parallel Execution

Run tests in parallel:

```bash
npx playwright test --workers=4
```

Playwright executes tests in isolated browser contexts for faster and reliable execution.

---

## 🌍 Environment Configuration

Configure environments using:

```text
.env
.env.qa
.env.stage
.env.prod
```

Example:

```env
BASE_URL=https://example.com
USERNAME=testuser
PASSWORD=password
```

---

## 🔌 API Testing

Example API test:

```typescript
test('Get Users API', async ({ request }) => {
  const response = await request.get('/users');

  expect(response.status()).toBe(200);
});
```

---

## 📊 Reports

Generate HTML Report:

```bash
npx playwright show-report
```

Generate Allure Report:

```bash
allure generate allure-results --clean
allure open
```

---

## 📸 Debugging

Trace Viewer:

```bash
npx playwright show-trace trace.zip
```

Playwright automatically captures:

- Screenshots
- Videos
- Network Logs
- Execution Traces

---

## 🔄 GitHub Actions CI/CD

Example workflow:

```yaml
name: Playwright Tests

on:
  push:
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm ci

      - run: npx playwright install --with-deps

      - run: npx playwright test
```

---

## 🎯 Framework Design Principles

- Maintainability
- Scalability
- Reusability
- Readability
- Minimal Code Duplication
- CI/CD Friendly
- Enterprise Ready

---

## 👨‍💻 Author

**Mohammadee**

Senior SDET | Playwright | Selenium | API Testing | Performance Testing

GitHub:
https://github.com/mohammadee4221

---

## ⭐ Support

If you find this project useful:

- Star the repository
- Fork the project
- Share feedback and suggestions

Happy Testing! 🚀
