const field = require ('./vectorFeild');
const func = require ('./function');
const operations =require ('./Operations');
const math = require ('mathjs');

const VectorField = field.VectorField;

const Gradient = operations.Gradient;
const Divergence = operations.Divergence;
const Curl = operations.Curl;


let vf1 = new VectorField ('3*x + 2*z^2' , 'x^3*y^2/z' ,'-(z-7*x)')

console.log(Divergence(vf1, ['x', 'y' ,'z']).expression);
console.log(Curl(vf1, ['x', 'y' ,'z']).P.expression);
console.log(Curl(vf1, ['x', 'y' ,'z']).Q.expression);
console.log(Curl(vf1, ['x', 'y' ,'z']).R.evaluate({x:1,y:2,z:3}));


console.log(Divergence(Curl(vf1,['x', 'y' ,'z']),['x', 'y' ,'z']).evaluate({x:1 ,y:2 ,z:5}));



