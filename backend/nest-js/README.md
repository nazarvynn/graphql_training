# Apollo Server

GraphQL based on NestJS.

Code first approach.

## Requirements

- [NodeJS](https://nodejs.org/en) <= v18
- [NPM](https://www.npmjs.com/) or [Yarn](https://classic.yarnpkg.com/en/)
- [Postgres](https://www.postgresql.org/)

Postgres setup could be done by up&running `docker-compose.yml` or by local configuration
```
$ brew update
$ brew doctor
$ brew install postgresql@14
$ brew services start postgresql@14

$ createuser root -s -W
// password: "admin"
$ createdb nest-gql-db

// Verify db connection
$ psql -d nest-gql-db -U root -W

// Stop postgres
$ brew services stop postgresql@14
```

## Technology stack

- Programming language: [Typescript](https://www.typescriptlang.org/)
- [Apollo Server v4](https://www.apollographql.com/docs/apollo-server/getting-started)
- Database [Postgres](https://www.postgresql.org/)


## Commands

- `$ yarn build` - Build sources
- `$ yarn start` - Start w/o watch mode
- `$ yarn start:local` - Start w/ watch mode
- `$ yarn start:debug` - Start in debug mode
- `$ yarn start:prod` - Start in production mode
- `$ yarn lint` - Linting TS files
- `$ yarn format` - Formatting TS files
