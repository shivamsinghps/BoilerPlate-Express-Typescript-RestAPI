# BoilerPlate-Express-Typescript-RestAPI
it is a boilerplate for express typescript restapi to head-start backend dev

## Key implementations:
- alias or module loader imports
- injected custom type user in Request type of express.

# Project Structure

```
tsBoiler
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc.js
├─ build
│  ├─ app.js
│  ├─ index.js
│  ├─ middleware
│  │  ├─ authenticated.middleware.js
│  │  ├─ error.middleware.js
│  │  └─ validate.middleware.js
│  ├─ resources
│  │  └─ user
│  │     ├─ user.controller.js
│  │     ├─ user.interface.js
│  │     ├─ user.model.js
│  │     ├─ user.services.js
│  │     └─ user.validation.js
│  └─ utils
│     ├─ exceptions
│     │  └─ http.exceptions.js
│     ├─ interfaces
│     │  ├─ controller.interface.js
│     │  └─ token.interface.js
│     ├─ token.js
│     └─ validateEnv.js
├─ package-lock.json
├─ package.json
├─ src
│  ├─ app.ts
│  ├─ index.ts
│  ├─ middleware
│  │  ├─ authenticated.middleware.ts
│  │  ├─ error.middleware.ts
│  │  └─ validate.middleware.ts
│  ├─ resources
│  │  └─ user
│  │     ├─ user.controller.ts
│  │     ├─ user.interface.ts
│  │     ├─ user.model.ts
│  │     ├─ user.services.ts
│  │     └─ user.validation.ts
│  └─ utils
│     ├─ definitions
│     │  └─ custom.d.ts
│     ├─ exceptions
│     │  └─ http.exceptions.ts
│     ├─ interfaces
│     │  ├─ controller.interface.ts
│     │  └─ token.interface.ts
│     ├─ token.ts
│     └─ validateEnv.ts
└─ tsconfig.json

```
