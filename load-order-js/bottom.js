console.log("I am in javascript file loaded after body");

if(null===document.html){
    console.log("BOTTOMJS: html not ready");
} else {
    console.log("BOTTOMJS: html Ready");
}
if(null===document.head){
    console.log("BOTTOMJS: header not ready");
} else {
    console.log("BOTTOMJS: header Ready");
}

if(null===document.body){
    console.log("BOTTOMJS: body not ready");
} else {
    console.log("BOTTOMJS: body Ready");
}