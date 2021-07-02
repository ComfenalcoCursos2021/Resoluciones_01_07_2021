
addEventListener("DOMContentLoaded", function(){
    let screen = this.screen;
    console.log(screen);
    addEventListener("resize", function(){
        console.log(`Respuesta availLeft`,screen.availLeft);
        console.log(`Respuesta availTop`,screen.availTop);
        console.log(`Respuesta availWidth`,screen.availWidth); 
        console.log(`Respuesta availHeight`,screen.availHeight); 
        console.log(`Respuesta width`,screen.width); 
        console.log(`Respuesta height`,screen.height);
    })
})
