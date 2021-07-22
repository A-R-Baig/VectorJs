const math = require("mathjs");

class f{
    constructor(expression){
        this.expression=expression
        this.code = math.compile(this.expression)
    }  
    evaluate(scope){
        return this.code.evaluate(scope);
    }

    differentiate(variable){
        return new f(math.derivative(this.expression,variable).toString());
    }
}

module.exports = { f };