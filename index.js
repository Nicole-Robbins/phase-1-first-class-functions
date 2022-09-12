function receivesAFunction(abc){
    return abc();
}

function returnsANamedFunction(){
    return function hiStormy(){
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return 1 + 1;
    }
}

receivesAFunction(function (){return "Function is received."});
returnsANamedFunction();
returnsAnAnonymousFunction();