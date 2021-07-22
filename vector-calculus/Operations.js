const math = require("mathjs");
const field = require ('./vectorFeild');
const func = require ('./function');

const f = func.f;
const VectorField = field.VectorField;

function Gradient( f , axisOrder ){   // tp specify axis order  ['x','y','z']  will imply df/dxI + df/dyJ + df/dzK
    
    var dxf =  f.differentiate(axisOrder[0]);
    var dyf =  f.differentiate(axisOrder[1]);
    var dzf =  f.differentiate(axisOrder[2]);
    return new VectorField (dxf.expression, dyf.expression, dzf.expression)
}


function Divergence(vectorField, axisOrder){     // ∇.F
    var dPx=vectorField.P.differentiate(axisOrder[0]).expression;
    var dQy=vectorField.Q.differentiate(axisOrder[1]).expression;
    var dRz=vectorField.R.differentiate(axisOrder[2]).expression;

    var div = dPx + '+' + dQy + '+' + dRz ;
    return new f(math.simplify(div).toString());
}

function Curl(vectorField, axisOrder){  // ∇ x F
    
    var dRy = vectorField.R.differentiate(axisOrder[1]).expression;
    var dQz = vectorField.Q.differentiate(axisOrder[2]).expression;
    var P = math.simplify(dRy +'-'+ dQz).toString();
    
 
    var dPz = vectorField.P.differentiate(axisOrder[2]).expression;
    var dRx = vectorField.R.differentiate(axisOrder[0]).expression;
    var Q = math.simplify(dPz +'-'+ dRx).toString();

    var dQx = vectorField.Q.differentiate(axisOrder[0]).expression;
    var dPy = vectorField.P.differentiate(axisOrder[1]).expression;
    var R = math.simplify(dQx +'-'+ dPy).toString();

    return new VectorField(P, Q, R);
}

// function equalityOfMixedDerivates(vectorField, axisOrder){

//     dRy = vectorField.R.differentiate(axisOrder[1]).expression;
//     dQz = vectorField.Q.differentiate(axisOrder[2]).expression;


//     dPz = vectorField.P.differentiate(axisOrder[2]).expression;
//     dRx = vectorField.R.differentiate(axisOrder[0]).expression;

//     dQx = vectorField.Q.differentiate(axisOrder[0]).expression;
//     dPy = vectorField.P.differentiate(axisOrder[1]).expression;

// }


//Useful Formulas
// ∇.(∇ x F) = 0
// ∇x(∇ f) = 0   f is differentiable function
// Given a differentiable function f , its gradient field is irrotational  => 0.
//In order for a vector field to be a gradient field, it must be irrotatio

module.exports = {Gradient, Divergence, Curl};

