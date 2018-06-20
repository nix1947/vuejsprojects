## What does development workflow mean ?

- Use the development server, avoid `file protocol`. 
- Use build tools, that can compile es6+
- case-insensitive component selectors
- Use of preprocessors 
- use vue-cli. 

Installation of vue cli
`npm install -g vue-cli`

Choose a development method using vue-cli
**weback-simple** is a workflow type provided by vue-cli.
```
vue init webpack-simple myproject
```

```
cd myproject
npm install // Install all dependencies
npm run dev
```