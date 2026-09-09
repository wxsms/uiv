<p align="center">
<img src="docs/public/assets/image/logo.png" alt="uiv-logo.png">
</p>

<p align="center">
<a href="https://github.com/wxsms/uiv/actions/workflows/main.yml"><img src="https://github.com/wxsms/uiv/actions/workflows/main.yml/badge.svg" alt="Build Status"></a>
<a href="https://codecov.io/gh/wxsms/uiv"> <img src="https://codecov.io/gh/wxsms/uiv/branch/dev/graph/badge.svg" alt="Coverage Status"></a>
<a href="https://www.npmjs.com/package/uiv"><img src="https://badgen.net/npm/dm/uiv" alt="NPM Downloads"></a>
<a href="https://www.npmjs.com/package/uiv"><img src="https://badgen.net/npm/v/uiv" alt="NPM Version"></a>
<a href="https://github.com/wxsms/uiv"><img src="https://badgen.net/github/license/wxsms/uiv" alt="License"></a>
</p>


## Introduction

**uiv** is a Bootstrap 3 component lib implemented by Vue.

* **Lightweight**
  * All components **~20KB** Gziped.
  * No extra CSS file.
  * Individually import supported.
* Vue 3 supported.
* **SSR** (server-side rendering) supported.

If this project has helped you out, please support it with a star :star2:.

## Versions

| uiv version | Vue.js version | document                                                              |
|-------------|----------------|-----------------------------------------------------------------------|
| 2.x         | 3.x            | [https://wxsms.github.io/uiv/](https://wxsms.github.io/uiv/)           |
| 1.x         | 2.x            | [https://wxsms.github.io/uiv-website-v1/](https://wxsms.github.io/uiv-website-v1/) |
| 0.x         | 2.x            | [https://wxsms.github.io/uiv-website-v0/](https://wxsms.github.io/uiv-website-v0/) |

## Quick start

```bash
$ npm i uiv --save
```

```javascript
// main.js
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import * as uiv from 'uiv'

const app = createApp({ ... })

app.use(uiv)

app.mount(...)
```

For more information, pls visit [https://wxsms.github.io/uiv/usage/getting-started](https://wxsms.github.io/uiv/usage/getting-started)

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/wxsms/uiv/releases).

## Special thanks

<p>
<a href="https://www.jetbrains.com/?from=uiv"><img width="250" src="docs/public/assets/image/funding/jetbrains-logo.png" alt="jetbrains-logo.png"></a>
</p>

## Project Stats

![Alt](https://repobeats.axiom.co/api/embed/d61d9b2205de473d16574c9d78d7d067cfa3468f.svg "Repobeats analytics image")


## License

MIT
