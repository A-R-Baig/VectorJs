// USAGE: with caution
// TransformationMatrinx = a  b
//                         c  d 

// vector = [x , y]   & not x but is calculated in basis of the later
//                          y
//********************************************************************************************************//

const PI =  3.141592653589793238 ;

function Transform(transformationMatrix , vector ){
    var vResult = [];
    for (let index = 0; index < vector.length; index++) {
        
        vResult[index] = DotProduct(transformationMatrix[index],vector)
    }   
    return vResult; 
}

function Rotate2Dvect(theta , Vector2D ){
    var rotationMatrix = [[Math.cos(theta) , Math.sin(theta)],
                         [-Math.sin(theta) , Math.cos(theta)]];

    return Transform(rotationMatrix, Vector2D);
}


function DotProduct(V1 , V2){
    var Result = 0;
    for (let index = 0; index < V1.length; index++) {
        
        Result += V1[index]*V2[index];
    }

    return Result;
}

module.exports = { Transform , DotProduct , Rotate2Dvect , PI };
