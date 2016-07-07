console.log("I am in javascript file loaded asynchronously");

if(null===document.html){
    console.log("ASYNC: html not ready");
} else {
    console.log("ASYNC: html Ready");
}
if(null===document.head){
    console.log("ASYNC: header not ready");
} else {
    console.log("ASYNC: header Ready");
}

if(null===document.body){
    console.log("ASYNC: body not ready");
} else {
    console.log("ASYNC: body Ready");
}