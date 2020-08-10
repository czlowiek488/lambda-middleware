---
to: packages/<%= h.inflection.dasherize(name.toLowerCase()) %>/.gitignore
---
# See https://help.github.com/ignore-files/ for more about ignoring files.

# IDEs
.idea

# dependencies
/node_modules

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
package-lock.json
yarn-debug.log*
yarn-error.log*
yarn.lock

# Built library
lib
