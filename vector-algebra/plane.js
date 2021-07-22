const vect2d = require( './vector2D.js');
const vect3d = require('./vector3D.js');



// The line through a given point P and
// in the direction of a given vector L is the set of all points X of the form
// X = P + tL   => parametric form


// The plane through a point P, spanned by the vectors V and W is the set of all points X of the form 
// X= P + sV + tW
// det(X-P , V , w) = 0;    because volume is zero
// also (X-P).(V x W) =0

// ax + by + cz = ax0 + by0 + cz0    V0 = point and V is the Normal