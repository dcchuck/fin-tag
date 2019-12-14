# Fin Tag
[![npm version](https://badge.fury.io/js/fin-tag.svg)](https://badge.fury.io/js/fin-tag)

## Overview

Give anchor tags the ability to launch the OpenFin powered version of your app.

## Usage

`fin-tag` can be used as a node module, or inlcuded as a script tag.

#### Node Module
```bash
npm install --save fin-tag
```

```js
const enableFinTags = require('fin-tag');
enableFinTags();
```

#### Script Tag
```html
// Note: This is the equivalent of the two lines above; the script tag will call enableFinTags
<script src="https://dcchuck.github.io/fin-tag/dist/fin-tag.js"></script>
```

### How
For the relevant anchor tags, add a **data-manifest** attribute targeting your app.json using the `fin` or `fins` protocol.
```
<a href="https://yourwebapp.com" data-manifest="fins://yourapp.json">Launch</a>
```

`enableFinTags()` queries the document for anchor tags that have set the `data-manifest` attribute. It attempts to open the manifest link via the custom protocol handlers provided by OpenFin's RVM. If the protocol is not supported, it will navigate to the href, the default anchor tag behavior. Inlcuding the script tag will make the call to `enableFinTags` for your document.

---

This package is based on [custom-protocol-detection](https://www.npmjs.com/package/custom-protocol-detection)


## Building
```
git clone https://github.com/dcchuck/fin-tag
npm install
npm run build
```

The hostable javascript file will be output as `dist/fin-tag.js`

For your convenience, the minified file is hosted via [gh-pages](http://dcchuck.github.io/fin-tag/dist/fin-tag.js)
