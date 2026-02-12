# JSON-LD Context Template _(@digitalcredentials/jsonld-context-template)_

Use this template to create a Github repository from which you can publish a JSON-LD context as an NPM package for use with JSON-LD document loaders like [`jsonld-document-loader`](https://github.com/digitalbazaar/jsonld-document-loader).

To get started, simply click the 'Use this template' button on the main Github page of this repo:

<img width="1059" alt="image" src="https://user-images.githubusercontent.com/547165/203641633-5184f95f-921f-4c6a-9fc4-d13523caf96d.png">

NOTE:  this readme explains how to use the template.  Once you've modified the template for your own context, replace the contents of this readme with the contents of [FINAL_README.md](./FINAL_README.md).  You'll need to go through that final readme and replace all instances of YOUR_REPO_NAME with, of course, your repo name.

After creating your new repo from this template, follow these steps to add your own context(s) and publish to NPM:

### Install 

```npm install```

### Confirm the tests run

This will establish that you are starting from a good working copy, i.e, with the right version of node, libraries, etc.

```npm run test```

### Update the following files:

* [package.json](package.json)

Change the references to jsonld-context-template to your repo name.  And change the repo description.

* [js/urls.js](js/urls.js) 

Export all the known urls that json-ld document loaders use to link to your context. Again, follow the example in the file (and of course, remove the example urls).  Essentially, you want to export an object where the properties are well known constants and the values of those properties are the urls.  Note that you can include multiple constants, some of which can point to the same url, or to different urls.

* [js/contexts/](js/contexts)

Add your context files to this folder. One file per version of the context. Name the files according to the version.  This template has two example files:

[js/contexts/context_v1_1.js](js/contexts/context_v1_1.js)

[js/contexts/context_v1_2.js](js/contexts/context_v1_2.js)

Feel free to simply replace the contexts in those example files with your own, but do rename as needed, and delete any unused example files.

* [js/contexts/index.js](js/contexts/index.js)

This file creates and exports:

- a map of the known urls to contexts.
- an object whose properties are constants and values are associated contexts

Adjust accordingly as indicated in the file.

* [js/index.js](js/index.js)

The object exported from this file is effectively the API for the module. It will be available as an import to anyone including your npm package in their code.

You shouldn't actually have to change anything in here.  It just exports what you've put into the other files.

Your final exported object will look something like:

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

### Update the rollup (commonjs) export in [rollup.config.js](rollup.config.js)

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
          'CONTEXT_V1_2', 
          'CONTEXT_URL_V1_1', 
          'CONTEXT_URL_V1_2'
        ]
      }
    })
  ]
```

### Update the tests:

Adjust the tests in [test/context.spec.js](test/context.spec.js) to use the constants/urls/contexts that you're exporting.

## Publish to NPM

Once you've made your changes and your tests are passing (`npm test`), you'll want to publish to NPM.

You should first take the advice given here: 

[creating-and-publishing-scoped-public-packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages).

and try to install your package locally with:

```npm install full-path-to-your-package-directory```

If all goes well, then publish as explained here:

[updating-your-published-package-version-number](https://docs.npmjs.com/updating-your-published-package-version-number)

In short, to publish to npm:

```
cd /path/to/<YOUR_GITHUB_REPO_NAME>
npm publish --access public
```

e.g.,

```
cd /path/to/open-badges-context
npm publish --access public
```

This of course assumes that your npm user is registered to publish to @digitalcredentials

And if you haven't already, you may need to create your npm user account and/or login, as explained [here](https://docs.npmjs.com/creating-a-new-npm-user-account)

Finally, don't forget to replace the copy of this REAMDE with the contents of [FINAL_README.md](./FINAL_README.md).  You'll also need to go through that readme and update references to the context name with your own context name.

Note that the NPM badge at the top of the final README won't show until you've published to NPM.
