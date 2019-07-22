# twitter ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

Hi reviewer, welcome! :tada:

## Installation

### Requirements
* Linux/Mac/Windows/
* node 10+ (preferably yarn)

```
git clone https://github.com/skyrbe/twitter.git

cd twitter

yarn install
```

## Running the development server
```
yarn start
```

## Tooling and packages used - The important ones.
### Tools
* webpack : For the run and build process.
* babel : ES6 to ES5 transpiler
* eslint : Used to prevent bad JS code from being written.

### Packages
* css-modules : Enforces better CSS writing practices
* bootstrap4 : The latest and the greatest, yet.
* redux : Data layer
* react-redux : Connects the React Views with Redux Data
* react-router : Navigation
* redux-thunk : dispatch functions instead of plain actions. Useful for async actions.

## Modules Explained
The React bit of the project is broken down in the following way.
```
    |-- config (contains the scripts that are responsible for configuring webpack. Do not modify unless you want to add a webpack plugin or a config utility)
    |-- public
        |-- index.html (Do not modify unless you need to add a link to google fonts or 3rd party scripts)
    |-- scripts (contains scripts responsible for building/running the application. Do not modify)
    |-- README.md (The file you are reading right now!)
    |-- package.json (All dependencies go here, so do the build scripts execution)
    |-- src
        |-- assets
            |-- fonts (Fonts and Custom fonts like budicons generated fonts go here)
            |-- images (You know the drill)
        |-- components
            |--common
               |--Header
               |--formElements
                  |--Input
                     |--index.jsx (Contains the JSX for just the TextField and the custom styles applied to it)
            |--..
        |-- containers
            |-- Login
                |-- Login.jsx
                |-- index.jsx(The only purpose is to export out the main file)
                |--Login.module.scss(It's important to name your scss files following the pattern fileName.module.scss )
                |--Login.module.css (This is auto generated)
            |--..
        |-- include
            |-- bootstrap.js (imports the global css files, bootstrap JS and it's dependencies)
            |-- ..
        |-- reducers
            |-- middleware
                |-- clientMiddleware.js (This file is the middleman between the API requests and dispatch. Do not modify)
            |-- index.js (combines all the reducers)
            |-- *.js
        |-- scss
            |-- bootstrap
            |-- bootstrap_ext
            |-- _colors.scss
            |-- _fonts.scss
            |-- _utils.scss
            |-- global.scss

```

### containers
This is the outermost parent that needs to access the data layer (redux store). It uses ```connect``` from ```react-redux``` to let ```react``` access the ```store```.

### components
This is usually a dumb component that receives the data from a container.

### reducers
This boilerplate combines the actions and reducers into file, instead of two separate ones. This gives us the ability to write the reducer level constants in the same file without having to export the same.

### SCSS
This is the directory where are global styles are declared, bootstrap 4 is imported etc.

The subdirectory __bootstrap__ contains
* _config.scss - This is the file where any bootstrap4 theme level customization options should be put. For example,
```
$theme-colors: (
  "primary": #0052CC,
  "danger": #ff4136
);
```
* bootstrap.scss - We have moved away from the usual way of including the entire bootstrap file and adopted scss based approach. This gives us the flexibility of including only the required modules. For example,
```
@import "bootstrap/scss/dropdown";
@import "bootstrap/scss/card";
@import "bootstrap/scss/images";
```

The subdirectory __bootstrap_ext__ contains
* _ext.scss - This is the file where you would include additional bootstrap configuration, such as styling the default ```.btn``` class. For example,
```
.btn {
    $button-border-width: 2px;
    border-width: $button-border-width;

    &.btn-dark {
      background-color: $black;
      border-color: $black;
      color: $white;

      &:hover {
        background-color: $white;
        color: $black;
      }
    }
}
```
The other scss files that are present are
* _fonts.scss : Contains the classes for fontsizes and fontweights. For example,
```
.fs-10 {
    font-size: 0.625rem;
}
```
* _utils.scss : Contains the classes for margins, paddings, line-heights etc. For example,
```
.p-10 {
    padding: 10px;
}
```
* global.scss : This imports all the above mentioned SCSS files.
