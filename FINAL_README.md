TEMPLATE USERS:  REPLACE ALL INSTANCES OF 'YOUR_REPO_NAME' WITH YOUR REPO NAME.

# YOUR_REPO_NAME Context _(@digitalcredentials/YOUR_REPO_NAME)_

[![Node.js CI](https://github.com/digitalcredentials/YOUR_REPO_NAME/workflows/Node.js%20CI/badge.svg)](https://github.com/digitalcredentials/YOUR_REPO_NAME/actions?query=workflow%3A%22Node.js+CI%22)
[![NPM Version](https://img.shields.io/npm/v/@digitalcredentials/YOUR_REPO_NAME.svg)](https://npm.im/@digitalcredentials/YOUR_REPO_NAME)

> NPM package for the YOUR_REPO_NAME JSON-LD context.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Developing](#developing)
- [Publishing to NPM](#publish-to-npm)
- [License](#license)

## Background

For use with JSON-LD document loaders (such as [`jsonld-document-loader`](https://github.com/digitalbazaar/jsonld-document-loader)).

## Install

Requires Node.js 14+

```
npm install @digitalcredentials/YOUR_REPO_NAME
```

## Usage

```js
import ctx from '@digitalcredentials/YOUR_REPO_NAME';
// or
const ctx = require('@digitalcredentials/YOUR_REPO_NAME');
const {contexts, constants} = ctx;

ctx.CONTEXT_URL_V1_1
// e.g., 'https://some.org/contexts/somecontext/'

// get context data for a specific version of the context
ctx.CONTEXT_V1_1
// full context object
```

This package can be used with bundlers, such as [webpack](https://webpack.js.org/), 
in browser applications.

### API

The library exports an object with the following properties:

- `constants`: A Object that maps constants to well-known context URLs. 
- `contexts`: A `Map` that maps URLs to full context data.

TEMPLATE USERS:  LIST ALL THE URLS AND CONTEXTS THAT YOU EXPORT, E.G.,
- `CONTEXT_URL_V1_1`: the url for THEcontext
- `CONTEXT_V1_1`: the full context object
- `CONTEXT_URL_V1_2`: the url for THEcontext
- `CONTEXT_V1_2`: the full context object

The exported object looks like:

TEMPLATE USERS:  ADJUST ACCORDINGLY:

```
{
  constants: { 
    CONTEXT_URL_V1_1: 'https://some.org/contexts/cats/v1_1',
    CONTEXT_URL_V1_2: 'https://some.org/contexts/cats/v1_2 
  },
  contexts: Map(1) {
    'https://some.org/contexts/cats/v1_1' => { '@context': THE REST OF VERSION 1.1 OF YOUR CONTEXT OBJECT },
    'https://some.org/contexts/cats/v1_2' => { '@context': THE REST OF VERSION 1.2 OF YOUR CONTEXT OBJECT }
  },
  CONTEXT_URL_V1_1: 'https://some.org/contexts/cats/v1_1',
  CONTEXT_URL_V1_2: 'https://some.org/contexts/cats/v1_2,
  CONTEXT_V1_1: { '@context': THE REST OF VERSION 1.1 OF YOUR CONTEXT OBJECT },
  CONTEXT_V1_1: { '@context': THE REST OF VERSION 1.2 OF YOUR CONTEXT OBJECT }
}
```

## Developing

You may want to edit the existing context, add a new version of the context, or add another URL-to-context mapping.

### Edit existing context

The context files are in the [js/contexts directory](js/contexts/).

Be careful, though, because if someone has used your old context to sign an LD-proof, updating the context will break verification if the verifier uses the updated context.

You may want to instead add a new *version* of the context.  

### Add a new version of the context

Add a new context file to the [js/contexts directory](js/contexts/). Follow the naming convention used with the existing context file(s).  So, for example, to add v1.2, add a context file called context_v1_2.js.  You'll also want to another url-to-context mapping for your new version

### Add another URL-to-context mapping

Anytime you add a new version of your context file you'll want to add a new url for your context.  You may also want to add an additional URL or URLs for an existing context version.

Either way, add another property (for each new url-to-context mapping) to the exported object of the ['js/urls.js'](js/urls.js) file.  Follow the example of the existing properties.

### Update the tests:

Adjust the tests in [context.spec.js](context.spec.js) to use the constants that you're exporting.

### Update the rollup (commonjs) export in rollup.config.js

Make sure the 'namedExports' section in [rollup.config.js](rollup.config.js) lists everything (and nothing more) that you are exporting from [js/index.js](js/index.js), like this example:

```
plugins: [
    commonjs({
      // explicitly list exports otherwise only have 'default'
      namedExports: {
        'dist/context.js': [
          'contexts', 
          'constants', 
          'CONTEXT_V1_1', 
          'CONTEXT_V1_2, 
          'CONTEXT_URL_V1_1', 
          'CONTEXT_URL_V1_2'
        ]
      }
    })
  ]
```

## Publish to NPM

Once your made your changes and your tests are passing (`npm test`), you'll want to publish to NPM.

You should first take the advice given here: [creating-and-publishing-scoped-public-packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages).

and try to install your package locally with:

```npm install full-path-to-your-repo-directory```

If all goes well, then bump the version number as explained here:

[updating-your-published-package-version-number](https://docs.npmjs.com/updating-your-published-package-version-number)

Like so:

```
cd /path/to/YOUR_REPO_NAME
npm version <update_type>  
```

NOTE: replace <update_type> with one of the [semantic versioning release types](https://docs.npmjs.com/about-semantic-versioning) - patch, major, or minor.

And publish:

```
cd /path/to/YOUR_REPO_NAME
npm publish --access public
```

This of course assumes that your npm user is registered to publish to @digitalcredentials or to @digitalcredentials/YOUR_REPO_NAME

And if you haven't already, you may need to create your npm user account and/or login, as explained [here](https://docs.npmjs.com/creating-a-new-npm-user-account)

## License

* [MIT License](./LICENSE)


