# STANDARD DEVIANT BREWING

Super basic business page for Standard Deviant Brewing in San Francisco

## Usage
1. `npm install`
2. `npm run dist` - the built site will be put into the `/docs` folder
    because we have no better place to host it right now than github pages
3. `open file://$(pwd)/docs/index.html`

### Trivia
- css should be linted by [stylelint](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md)..
I would have preferred [CSSLint](https://github.com/CSSLint/csslint/) because it's not managed by Facebook but it chokes on css variables right now
- js should be linted by [eslint](http://eslint.org/)
- always a good idea to [test the structured data](https://search.google.com/structured-data/testing-tool#url=standarddeviantbrewing.com) after publishing

### todo:
- add photos page, when we get photos
- provide dynamic content editing and deployment for the bros
- dev mode with HMR would be rad!
- deal with double-autoprefixer better than disabling "warnForDuplicates"
- 301 to remove `www.`
