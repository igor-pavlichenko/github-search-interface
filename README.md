# Github Search Interface

## Prerequisites

- latest stable Node.js (v20+)
- pnpm (you can install it by running `npm i -g pnpm`)

## Running the app

- clone the repo or download zip and extract it
- in your terminal navigate to repo's folder
- run the following commands

```
pnpm i
pnpm start
```

- the app uses my GitHub token to query GitHub's GraphQL api, but if it expires and you start seeing a 401 error - you'll need to generate a basic token without any specific permissions here [https://github.com/settings/tokens?type=beta](https://github.com/settings/tokens?type=beta) and then use it to replace the expired token in `.env.development` file
