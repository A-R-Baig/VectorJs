const vector = require( './vector3D');

class Vector2D {

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.length = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
        this.theta = Math.atan(y/x);
    }

    toArray(){
        return ([this.x, this.y])
    }

    unitVector(){
        return new Vector2D(this.x/this.length,this.y/this.length)
    }

    projectOn(v){
        var a = DotProduct(this,v);
        return new Vector2D( a*v.x, a*v.y)
    }

    to3Dvec(){
        return new vector.Vector3D(this.x, this.y, 0);
    }
}

function Add(V1 , V2){

    var x = V1.x + V2.x;
    var y = V1.y + V2.y;
    return new Vector2D(x ,y)

}

function Subtract(V1 , V2){

    var x = V1.x - V2.x;
    var y = V1.y - V2.y;
    return new Vector2D(x ,y)

}

function convertFromThetaNotation(theta , length){
    var x = length*Math.cos(theta);
    var y = length*Math.sin(theta);
    return new Vector2D(x , y); 
}

function DotProduct(V1 , V2){
    return  V1.x*V2.x + V1.y*V2.y
}

function CrossProduct(V1 , V2){
    let v1 = V1.to3Dvec();
    let v2 = V2.to3Dvec();

    return vector.CrossProduct(v1, v2);
}

module.exports = { Vector2D , Add , Subtract , DotProduct , convertFromThetaNotation , CrossProduct};
