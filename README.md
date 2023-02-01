# `@guguponce/streak-counter` - a basic streak counter

This is a basic streak counter - inspired by Joe Previte and his inspiration on Duolingo - written in TypeScript and due to the use of `localStorage`, it is meant for web browsers.

## Install

```shell
yarn add @guguponce/streak-counter
```

npm install @guguponce/streak-counter

Usage
import {streakCounter} from '@guguponce/streak-counter'

const today = new Date()
const streak = streakCounter(localStorage, today)
// streak returns an object:
// {
// currentCount: 1,
// lastLoginDate: "11/11/2021",
// startDate: "11/11/2021",
// }
