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

# Episode 7
## useEffect
1. syntax: useEffect(callbackfuntion,[dependency array])
2. useEffect(()=>{},[]), dependency array is optional
3. when we dont pass depedency array, useEffect is called everytime, correspoding component is rendered
4. when we pass empty depedency array, only on first render of component useEffect is called
5. when we pass any values inside depedency array, whenever value inside dependency changes, useEffect is called.

## useState
1. Never create state variable using useState outside functional component
2. use only inside functional component
3. use useState at top , inside functional component
4. never use UseState inside conditional block(if else , while), for loop and functions inside component.

## Routing
- we have to install package "npm install react-router-dom@6", we have latest 7, for practise purpose using v6
- import {createBrowserRouter, RouterProvider} from "react-router-dom";
- createBrowserRouter used to create create configuration. createBrowserRouter method takes array of objects, each object format is: {path:"/", element:<AboutUs/>, errorElememt:<Error/>}
- RouterProvider will be used to render page based on configuration
- for error details for particular url. **useRouteError** Hook to capture details
- **children routing**:  when we want to make header constant and only render particular components within a page, we can use children routing.
- we can make use of Outlet component from react-router-dom.
- React is a single page application, all routes and moments happens inside single page.
- dynamic routing, using Id as dynamic id
- **useParams** hook from react-router-dom to get dynamic Id from url or path
- <Link to={"resturants/"+id}>component or link </Link>, used to create links in react
- import Link from react-router-dom

# Episode 8
 ## class based compnents
 - syntax: class Name Extends React.Component {
   constructor(props){
      super(props);
      this.state={count:0, count2:0};
   }
   render (){
      return(<jsx>)
   }
 }
 - this.state ={count:0,count2:2}: creating state variables in class based components
 - this.setState(), is used to updated state variables, it takes object as argument
 - ex: this.setState({count:this.state.count+1});
## componentDidMount()
- componentDidMount() method is called after successfully mounting/rendering component
- it is used to make API cals, it is similar to useEffect in functional components,that means, it will be called after rendering the component.
- First constructor is called, then render method is called and after loading component successfully, componentDidMount() method is called.
- we can make it async to call apis inside
## componentDidUpdate
- componentDidUpdate is called when setState method is called or new props are came or force update is used
- it is part of updating lifecycle
## componentWillUnmount
- this mehtod is called just before unmounting component,like moving to another page
- this is part of unmounting cycle
- this method is used to clear interval or anyother thing(clearInterval(this.timer))
- we can use return function in useEffect, to unmount the omponent similar way we did for class based components
## react life cycle diagram
- Parent constructor
- Parent Render method is called
    - Child 1 constructor is called
    - child 1 render method is called

    - child 2 constructor is called
    - chiled 2 render method is called

    - child 1 componentDidMount is called
      - we can make api calls here and update state using setState Method
      - once we update state variables, componentDidUpdate Method is called
    - Child 2 ComponentDidMount is called

- Parent componentDidMount method is called
- if we update any state variables, componentDidUpdate inside parent component is called

## Questions
- setInterval vs setTimout
- clearInterval
- why super(props)
- why exaclty is componentwillUnmount method is used 


