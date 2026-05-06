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

## NVM
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

# Episode 3
- we can use scripts to run commands instead direclty running parcel like this "npm parcel index.html".
- update scripts in package.json: {"scripts":{
    "start" : "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
}}
- now we run as **npm  run start** or **npm start** to run our application. but for other scripts run in mandatory, for only start we can ommit run
- React.Element is very difficult to use for larger web pages because its involves lot of nesting. so we use JSX to make it simple.

## jSX
- JSX is HTML-like syntax
- JSX is not HTML inside javascript
- JSX is HTML/HML-like syntax(but there are some noticeble differences)
- JSX is not part of React

- Ex: const jsx heading=<h1 namasthe jsx </h1
- jsx heading nothing but react element(object)
- Babel is responsible for converting JSX into react elements
- Babel in javascript compiler of transpiler
- JSX will not be understood by js engine
- if there are multiples jsx syntax, we have to keep inside paranthesis().

**JSX => React.createElement => react element(object) => HTML element(renders in browser)**
 
 ## React component
 - Class component and funtional components
 - functional components nothing but normal javascript funtions which return jsx
 - function name should be pascal case
 - functional component can be render using: root.render(<Component />);
 - component composition is nothing but using one component inside another component
 - variables also can be used inside jsx using {}, all the javascript expresstion can be used inside {}, 
 - Ex: {Title()}, {paragraph}
 - JSX is converted to react elements using barbel.

# Episode 4
- props: props are nothing but passing arguments to funtion, we pass props to functional component
- for looping always use map, filter and reduce funtion
- use key when looping anything using list
- ex: list.map((restaurant)=>(<Component key={} object={object}>));
- components are really a good things, we can reuse
-

# Episode 5
Foodie app plan:
/**
 * Header
 * - Logo (H)\
 * - Nav Items (4-5)
 * - Cart Icon
 * Body
 * - Search Bar
 * - RestaurantContainer
 *     - Restaurant Card
 *        - Image
 *        - Name
 *        - Star Rating
 *        - Cusines
 *        - Delivery Time
 * Footer
 * - Links
 * - Copyright
 * - Address
 * - Contact
 */

 ## config driven UI
 Config driven UI is a design approch where the UI structure and behaviour are controlled by external configuration(usually JSON from backend) instead of hardcoded components.

 - The best practise in project is to keep separate files for different folders
 -  we can name components files name with js or ts or jsx or tsx . it doesnot matter. it works same way
 
## Types of exports and imports
1. Default exports and imports
   - default export:
      const Header=()=> {}; export default Header;
   - default import:
      import Header from "path";
2. Named exports and imports
   - named export:
      export const ABC="";
      export const XYX="";
   - named imports:
      import {ABC, XYZ} from "path";

## Hooks
- Hooks are special functions in react that lets you use features like state and lifecycle inside functional components
- UseState:useState is a hook that lets you to add and manage state in a functional component.
- Ex: const[listOfRest, setListOfRest]=useState(<pass default variable for listOfRest>);
- usestate nothing but funtion which returns arrat of 2 (object/variable and funtion to update variable )

# Episode 6
- monolith and microservices architecture
- 2 approches how UI get data from backend
   1. Load page => API call => Render (slow page looks empty till data loads)
   2. Load page => Render => API call => Re- Render ( intial render , when data comes , renders actual data)
- useEffect: takes 2 arguments 1. callback function, and depedencies array.
- useEffect is used to for api calling and side effects, useEffect is executed after component is rendered.
- Watch video about CORS
- we can use Loading... or Spinner image, till data comes from backend but its not good practise.
- Shimmer UI: Shimmer UI resembles the actual UI, so users will understand how quickly the web or mobile app will load even before content has shown up
- when we update any value in any component , whole component re-renders but only changed value is updated in DOM and modified
- implimeneted search funtionality

# Episode 6.1 and 6.2
- Fixing swiggy api issue or updating UI as for new json format returning by swiggy
- fixing CORS issue using "corproxy.io" website
