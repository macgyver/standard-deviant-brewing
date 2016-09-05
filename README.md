# STANDARD DEVIANT BREWING

Super basic business page for Standard Deviant Brewing in San Francisco

## Usage
1. `brew install watchman`  # it's not actually used yet, but you should have this ;)
2. `npm install`
3. `npm run dist`
4. style should be linted by [stylelint](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md)
   I would have preferred `css-lint` because it's not managed by Facebook but it chokes on css variables

### todo:
- uncomment news articles at some point?
- add photos page, when we get photos
- dev mode with HMR would be rad!
- postcss remove overridden rules
- sort news by formatted date
- deal with double-autoprefier better than disabling "warnForDuplicates"
