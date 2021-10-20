// function dis(num){
// let res=document.querySelector("#result");
// res.value=num
// }
 var dis=(num)=>result.value+=num

// function clearBox(){
//     result.value=""
// }
 var clr=()=>result.value=""

 function evaluateExpression(){
    let expr=result.value;
    let out=eval(expr)
     result.value=out;
 }
