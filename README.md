# STANDARD DEVIANT BREWING

Super basic business page for Standard Deviant Brewing in San Francisco

## Usage
1. `npm install`
2. `npm run dist` - the built site will be put into the `/docs` folder
    because we have no better place to host it right now than github pages

### Trivia
Style should be linted by [stylelint](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md)..
I would have preferred [CSSLint](https://github.com/CSSLint/csslint/) because it's not managed by Facebook but it chokes on css variables right now

### todo:
- uncomment news articles at some point?
- add photos page, when we get photos
- dev mode with HMR would be rad!
- make your own postcss plugin to remove overridden rules
- sort news by formatted date
- deal with double-autoprefixer better than disabling "warnForDuplicates"
