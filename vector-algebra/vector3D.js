class Vector3D {

    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z; 
        this.length = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2) + Math.pow(this.z,2));
    }

    toArray(){
        return ([this.x, this.y , this.z])
    }

    unitVector(){
        return new Vector3D(this.x/this.length, this.y/this.length, this.z/this.length)
    }

    projectOn(v){
        var vector;
       
        if ( v.z === undefined ){
            vector = v.to3Dvec();
        }

        else{
            vector = v
        }
        var a = DotProduct(this,vector);
        return new Vector3D( a*vector.x, a*vector.y, a*vector.z)
    }

    toSphericalCoordinates(){
        var r = this.length;
        var theta = Math.atan(this.y/this.x);
        var phi = Math.atan(this.z/this.length);

        var sphericalCoordinates = {
            radius: r,
            theta: theta,
            phi: phi
        }

        return sphericalCoordinates;
    }

}

function Add(V1 , V2){

    var x = V1.x + V2.x 
    var y = V1.y + V2.y 
    var z = V1.z + V2.z 

    return new Vector3D(x ,y ,z)

}

function DotProduct(V1 , V2 ){
    return  V1.x*V2.x + V1.y*V2.y + V1.z*V2.z ;
}

function CrossProduct(v1 , v2){

   let a1 = v1.toArray()[0];
   let a2 = v1.toArray()[1];
   let a3 = v1.toArray()[2];

   let b1 = v2.toArray()[0];
   let b2 = v2.toArray()[1];
   let b3 = v2.toArray()[2];

   let x = a2*b3 - a3*b2;
   let y = a1*b3 - a3*b1;
   let z = a1*b2 - a2*b1;

   return new Vector3D (x , y, z);
   
}

function FromSphericalToCartesianCoordinates(r, theta, phi){ // radial ,azimuthal ,polar

    var x = r*Math.cos(theta)*Math.sin(phi);
    var y = r*Math.sin(theta)*Math.cos(phi);
    var z = r*Math.cos(phi);

    return new Vector3D(x, y, z);
}

module.exports = { Vector3D , Add  , DotProduct , CrossProduct ,FromSphericalToCartesianCoordinates};
