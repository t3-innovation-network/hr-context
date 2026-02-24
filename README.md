# Resume and HR Context _(hr-context)_

[![Node.js CI](https://github.com/t3-innovation-network/hr-context/workflows/Node.js%20CI/badge.svg)](https://github.com/t3-innovation-network/hr-context/actions?query=workflow%3A%22Node.js+CI%22)
[![NPM Version](https://img.shields.io/npm/v/hr-context.svg)](https://npm.im/package/hr-context)

> NPM package for the Resume and HR JSON-LD context.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Developing](#developing)
- [Publishing to NPM](#publish-to-npm)
- [License](#license)

## Background

For use with JSON-LD document loaders (such as [`jsonld-document-loader`](https://github.com/digitalcredentials/jsonld-document-loader)).

## Install

Requires Node.js 18+

```
npm install hr-context
```

## Usage

### Using the exported Typescript types

```ts
import type { ISkillClaimCredential } from 'hr-context'

const vc: ISkillClaimCredential = {
  '@context': [
    'https://www.w3.org/ns/credentials/v2',
    'https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json',
    'https://t3-innovation-network.github.io/hr-context/contexts/v1.jsonld'
  ],
  id: 'urn:uuid:64979aba-f1d2-45b4-8b6c-2008440503dd',
  type: ['VerifiableCredential', 'SkillClaimCredential', 'SelfIssuedCredential'],
  issuer: 'did:key:z6Mkfeco2NSEPeFV3DkjNSabaCza1EoS3CmqLb1eJ5BriiaR',
  credentialSubject: {
    type: ['SkillClaim'],
    person: {
      type: ['Person'],
      id: 'did:key:z6Mkfeco2NSEPeFV3DkjNSabaCza1EoS3CmqLb1eJ5BriiaR',
      name: 'Alice Smith',
      email: 'alice@example.com'
    },
    narrative: 'I led the end-to-end UX redesign of a healthcare mobile app. ' +
      'I conducted user research interviews, synthesized findings into journey ' +
      'maps, created low- and high-fidelity wireframes in Figma, built ' +
      'interactive prototypes, and ran usability testing sessions. I ' +
      'collaborated closely with engineers to refine implementation and improve ' +
      'accessibility compliance.',
    skill: [
      {
        id: 'urn:uuid:384cd575-ceab-4804-b7fb-afa37394b706',
        name: 'UX Design',
        description: 'Designs user-centered digital interfaces and experiences.',
        source: 'ollama',
        confidence: 0.94,
        alignment: [
          {
            type: ['Alignment'],
            targetFramework: 'O*Net',
            targetCode: '15-1255.00',
            targetName: 'Web and Digital Interface Designers'
          }
        ]
      },
      {
        id: 'urn:uuid:bc87542b-c044-47d7-afbf-0a5bce0e262d',
        name: 'Wireframing',
        description: 'Creates low and high-fidelity wireframes to communicate design intent.',
        source: 'ollama',
        confidence: 0.89,
        alignment: [
          {
            type: ['Alignment'],
            targetFramework: 'O*Net',
            targetCode: '15-1255.00-TASK',
            targetName: 'Develop design mockups and wireframes'
          }
        ]
      }
    ]
  },
  evidence: [
    {
      id: 'https://files.example/design.webp',
      name: 'Sample UX Design Diagram'
    }
  ]
}
```

### Using the `@context` for Document Loaders

```js
import ctx from 'hr-context'
// or
const ctx = require('hr-context')
const { contexts, constants } = ctx

ctx.CONTEXT_URL_V1
// e.g., 'https://w3id.org/hr'

// get context data for a specific version of the context
ctx.CONTEXT_V1
// full context object
```

This package can be used with bundlers, such as [webpack](https://webpack.js.org/), 
in browser applications.

### API

The library exports an object with the following properties:

- `constants`: A Object that maps constants to well-known context URLs. 
- `contexts`: A `Map` that maps URLs to full context data.

TEMPLATE USERS:  LIST ALL THE URLS AND CONTEXTS THAT YOU EXPORT, E.G.,
- `CONTEXT_URL_V1`: the url for the context
- `CONTEXT_V1`: the full context object

The exported object looks like:

TEMPLATE USERS:  ADJUST ACCORDINGLY:

```
{
  constants: { 
    CONTEXT_URL_V1: 'https://w3id.org/hr'
  },
  contexts: Map(1) {
    'hhttps://w3id.org/hr' => { '@context': ... }
  },
  CONTEXT_URL_V1: 'https://w3id.org/hr',
  CONTEXT_V1: { '@context': ... }
}
```

## Developing

You may want to edit the existing context, add a new version of the context, or
add another URL-to-context mapping.

### Edit existing context

The context files are in the [js/contexts directory](js/contexts/).

Be careful, though, because if someone has used your old context to sign an LD-proof,
updating the context will break verification if the verifier uses the updated context.

You may want to instead add a new *version* of the context.  

### Add a new version of the context

Add a new context file to the [js/contexts directory](js/contexts/). Follow the
naming convention used with the existing context file(s).  So, for example, to
add v1.2, add a context file called context_v1.js.  You'll also want to
another url-to-context mapping for your new version

### Add another URL-to-context mapping

Anytime you add a new version of your context file you'll want to add a new url
for your context.  You may also want to add an additional URL or URLs for an
existing context version.

Either way, add another property (for each new url-to-context mapping) to the
exported object of the ['js/urls.js'](js/urls.js) file.
Follow the example of the existing properties.

### Update the tests:

Adjust the tests in [context.spec.js](context.spec.js) to use the constants that
you're exporting.

### Update the rollup (commonjs) export in rollup.config.js

Make sure the 'namedExports' section in [rollup.config.js](rollup.config.js)
lists everything (and nothing more) that you are exporting from [js/index.js](js/index.js),
like this example:

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

Once your made your changes and your tests are passing (`npm test`), you'll want
to publish to NPM.

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

## License

* [MIT License](./LICENSE)


