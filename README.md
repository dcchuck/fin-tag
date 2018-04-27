# Fin Tag

## Overview

Give anchor tags to your web application the ability to launch the OpenFin powered version of your app.

## Usage

Load the javascript file either as a module or script tag. Then add a `data-manifest` attribute to your anchor elements
```html
<a href="http://yourwebapp.com" data-manifest="http://app.json">Launch</a>
```

#### Node Module
```js
const enableFinTags = require('fin-tags');
enableFinTags();
```

#### As A Script Tag
```bash
git clone https://github.com/dcchuck/fin-tag.git
npm install
npm run build
```

The hostable javascript file will be in the `dist` directory.

For your convenience, the file is hosted via [gh-pages](http://dcchuck.github.io/fin-tag/dist/fin-tag.js)
