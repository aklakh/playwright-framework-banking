# Playwright Automation Framework (Java + TypeScript)

## 🚀 Overview
This repository contains a modular automation framework built with **Playwright**, implemented in both **Java** and **TypeScript**.  
It demonstrates UI and API automation for **banking/payment flows** using the Parabank demo site, with CI/CD integration, Docker support, and reporting.

---

## 📂 Project Structure
playwright-framework/
├── src/main/java/com/banktests/   # Java framework
│   ├── base/                      # Base classes (DriverFactory, Config)
│   ├── pages/                     # Page Object Models
│   ├── tests/                     # Test classes
│   └── utils/                     # Helpers (API client, DB utils)
├── src/main/ts/                   # TypeScript framework
│   ├── pages/                     # Page Object Models
│   ├── tests/                     # Test specs (login, transfer funds, transactions)
│   └── utils/                     # Helpers (API mocks, reporting)
├── reports/                       # Allure/HTML reports
├── docker/                        # Dockerfile + docker-compose.yml
└── .github/workflows/ci.yml       # GitHub Actions pipeline

---

## ⚙️ Setup Instructions

### Java (Maven + TestNG)
```bash
mvn clean test

npm install
npx playwright test

Reporting
Allure Reports: Generates detailed HTML reports with screenshots.

Playwright Traces: Captures execution traces for debugging.

allure serve reports/allure-results
CI/CD Integration
Configured GitHub Actions (ci.yml) to run tests on every push/pull request.

Supports Dockerized execution for cross-browser testing.

🌟 Features
UI + API automation

Page Object Model (POM)

Parallel execution

API mocking

Docker integration

CI/CD pipelines

Allure/HTML reporting

Banking/payment domain examples (Parabank)

Md Aklakh Ahmad – Senior QA Automation Engineer
Specialized in banking automation frameworks, CI/CD, and mentoring teams.

---

✅ Next step:  
- Save this as `README.md` in your repo root.  
- Commit and push:  
  ```bash
  git add README.md
  git commit -m "Added professional README"
  git push
