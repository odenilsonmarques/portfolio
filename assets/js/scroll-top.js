function exibeHeader(){
   
    //1ª passa-se a posicão e altura nesse caso é zero, pq volta ao inicio
    // window.scrollTo(0, 0)

    //outra forma de usar, nesse caso scroll fica mais suave
    window:scroll({
        top:0,
        left:0,
        behavior:'smooth'
    })

}