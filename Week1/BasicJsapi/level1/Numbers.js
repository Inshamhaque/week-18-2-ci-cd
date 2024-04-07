//parseInt
function explainparseInt(value){
    console.log("Original value:   ", value);
    console.log("After parseInt:   ",parseInt(value));
}

explainparseInt("42");
explainparseInt("78auauhauanun");//some text at end is acceptable and can be converted to integer...
explainparseInt("3.14");