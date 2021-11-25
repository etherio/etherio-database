# @etherio/database

Utilities for [Firebase](https://firebase.google.com) Realtime Database

## Documentation

- [Installation](#Installation)
- [Usage](#Usage)

## Installation

using `npm`

```
$ npm install @etherio/database --save
```

using `yarn`

```
$ yarn add @etherio/database
```

## Usage 

### Use Provider

#### AxiosProvider

```ts
const provider = new AxiosProvider(
    "https://<your-project-id>-default-rtdb.firebaseio.com",
     "<auth-or-secret>" // [optional]
)
const database = new Database(provider)
```

> {note} `@types/axios` as dev dependencies for typescript support
