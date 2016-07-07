console.log("I am in javascript file loaded before html");

if(null===document.html){
    console.log("TOPJS: html not ready");
} else {
    console.log("TOPJS: html Ready");
}
if(null===document.head){
    console.log("TOPJS: header not ready");
} else {
    console.log("TOPJS: header Ready");
}

if(null===document.body){
    console.log("TOPJS: body not ready");
} else {
    console.log("TOPJS: body Ready");
}