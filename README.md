# Microfinance GraphQL Backend

A lightweight GraphQL API designed to efficiently serve data for a microfinance mobile application. This backend is built with Apollo Server and integrates seamlessly with an existing REST API to provide optimized, offline-capable data access.

---

## Features

- **GraphQL API**: Flexible and efficient querying of critical data entities:
  - `Clients`
  - `Loans`
  - `Branches`
  - `LoanGroups`
- **Seamless Integration**: Reuses existing REST API methods for business logic.
- **Offline-First Support**: Designed to handle data syncing for mobile applications.
- **Lightweight Database**: Connects to a slimmed-down database synchronized with the main SQL database using SymmetricDS.

---

## Project Structure

microfinance-gql/
├── src/
│   ├── resolvers/       # GraphQL resolvers
│   ├── typeDefs/        # GraphQL schema definitions
│   ├── services/        # REST API integrations
│   ├── database/        # Database queries and models
│   ├── index.ts         # Entry point
├── package.json
├── tsconfig.json
├── README.md

---

## Requirements

- **Node.js**: v16+
- **TypeScript**
- **Apollo Server**
- **SymmetricDS** (for database syncing)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-organization/microfinance-gql.git
