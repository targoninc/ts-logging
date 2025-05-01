# How to use

## Install

| Package manager | Command                        |
|-----------------|--------------------------------|
| bun             | `bun i @targoninc/ts-logging`  |
| pnpm            | `pnpm i @targoninc/ts-logging` |
| npm             | `npm i @targoninc/ts-logging`  |

## Log

```typescript
import {CLI} from "@targoninc/ts-logging";

// .debug() by default doesn't log to DB, so you'll have to specifically enable it
CLI.debug(`This is a test log`, {
    logToDb: true
});

// You can get a full stack trace in addition to logging objects
CLI.trace({
    userId: -1
});
```
