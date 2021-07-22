const vector = require( '../vector-algebra/vector3D');
const func = require('./function');

const Vector3D = vector.Vector3D;
const f = func.f;

class VectorField{

    // P implies P(x,y,z)
    constructor(expression_1 , expression_2 , expression_3) {
        this.P = new f(expression_1);
        this.Q = new f(expression_2);
        this.R = new f(expression_3);
    }

    vectorAt(point){
        return new Vector3D( this.P.evaluate(point), 
                                    this.Q.evaluate(point),
                                    this.R.evaluate(point))
     }
}



module.exports = { VectorField };