# NamasteReact - React Learning Repository

# Episode 1:

## Notes
- 1. CDN links for react- used to inject react into our project
- 2.  linking css file- insdie header - <link rel="stylesheet" href="./index.css" 

- linking js file -- inside body- <script src="./App.js"  </script

### Library vs Framework:
 
 - Library
    -predefined funtions stored locally or globally  so that funtions we can use in in our project
    -  we can build full scale application or we can use react to change specific block in webpage
    - React is a Library

- Framework
    - full setup that complete app can be build on top it.
    - frame work has full setup, full of rules and architecture
    - next js and angular js are frameworks

# Episode 2
## npm
- npm: package manager for javascript
- using npm we can install any package/dependencies.
- syntax: npm install packagename"
- npm is standard repo for all packages
- we can add npm to our project by "npm init"
- provide necessary data and at the end it will create **package.json** file
- package.json is configuration file for npm

# NVM
- NVM stands for node version manager
- We can install NVM from its website
- NVM used to install/manage node versions in local
- To install specific node: NVM install verisonname/latest
- To use node: NVM use version


## Bundles
Bundlers will optimise code, combine all files, generates production ready build code, create server and so on. some of the budlers are : parcel, webpack, vite. when we create react app using npx create-react-app, it will automatically chooses webpack.

In this project we are going to use **Parcel**.
- To install parcel package: npm install -D package
    - D stands for dev, there are 2 types of packages dev and normal packages
- when we install parcel package, it will be added to  package.json, new package-lock.json file is created and node_modules folder created with all modules that parcel depends on
- we dont have to push this node_modules into git, we can create one file **.gitignore** and add this folder to file, so it wont go into git

# npx
- npx command to used to execute any package
- like "npx parcel index.html"
- when run this command, our app runs on localhost
- For production we can use "npx parcel build index.html". if we have configured main: "app.js" in package.json, remove it, it will conflict with production build.

CDN links are not best way to bring react into our project, we can directly install react into app using npm install. we can use "npm install react react-dom". react and react-dom modules are installed locally and ready for use. After installing , import thos modules into js file using "import React from react; and import ReactDOM from react-dom/cleint". and also make sure to add **type="module"** attribute to script tag such that we can tell that app.js files uses modules and not plain javascript file.

**Dist folder** contains all the build code(dev or prod). this is the code that gets displayed on browser. it will have main 3 files(html,css,js).


# Parcel- Bundler
- Dev build
- Creates local server
- HMR- Hot module replacement
- file watching algorithm- written in C++
- caching- faster builds
- Image optimization
- Bundling ( to bundle files)
- Compress, code split, diagnostics,error handling
- Consistent Hashing(content hashing)?
- Differential bundling- supports different browsers even old
- Https- host on https
- Tree shaking - remove unused code
- Different Dev build  and prod build