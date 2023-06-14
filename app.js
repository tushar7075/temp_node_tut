//npm - global command,comes with node
//npm --version

//local dependency - use it only in this perticular project
//npm i <packageName>

//dlobal dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName>(for mac only) 

//package.json - manifest file(stores imp info about project/package)

//3-ways to install package

//manual approach (create package.json in the root, create properties etc)
//npm init (step by step,press entor to skip)
//npm init -y (everything default)

const _=require('lodash');
const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items)
console.log(newItems);