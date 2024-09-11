class obj{
    frame = 0
    timer = 0 

    constructor(x,y,width,height,imagem){
        this.x = x
        this.y = y
        this.width = width
        this.height = height 
        this.imagem = imagem
    }
    draw(){
        let img = new Image()
        img.src = this.imagem
        canvas.drawImage(img, this.x, this.y, this.width, this.height)
    }
    animacao(vel,limite,nomeImg){
        this.timer ++
        if(this.timer >= vel){
            this.timer = 0
            this.frame ++
        }

        if(this.frame >= limite){
            this.frame = 0
        }

        this.imagem = 'img/'+nomeImg+this.frame+".png"  
        
        
        
    }
}

class Carangueijo extends obj{
    pulo() {
        
    if(this.frame > 1 && this.frame < 6){
        this.y = 80
    }
    else{
        this.y = 100 
    }
    
    if(this.frame < 2 && this.frame > 5){
        this.y = 100
    }
}
}


let fundo = new obj(0,0,700,500, "img/frameF1.png")
let carangueijo = new Carangueijo(200,100,300,300, 'img/Frame1.png')
const canvas = document.getElementById('canvas').getContext('2d')

document.addEventListener("keydown", function(tecla){
    if(tecla.keyCode == 65){
        carangueijo.animacao(7,13,'Frame')
        carangueijo.pulo()
    }
})


function draw(){
    fundo.draw()
    carangueijo.draw()
   
}

function main(){
    canvas.clearRect(0,0,500,900)
    //carangueijo.animacao(7,8,'Frame')
    draw()
    requestAnimationFrame(main)
    console.log(carangueijo.y, carangueijo.frame)
    fundo.animacao(7,9,'FrameF')
}

main()