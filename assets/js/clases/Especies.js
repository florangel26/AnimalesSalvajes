import {Animal} from "./Animales.js";

const playSonido = document.getElementById('player');

class Leon extends Animal{
   constructor(nombre,edad,img,comentario,sonido){
      super(nombre,edad,img,comentario,sonido);
   }
   Rugir(){
      playSonido.setAttribute('src', `./assets/sounds/${this.Sonido}`)
   }
}

class Lobo extends Animal{
   constructor(nombre,edad,img,comentario,sonido){
      super(nombre,edad,img,comentario,sonido);
   }
   Aullar(){
      playSonido.setAttribute('src', `./assets/sounds/${this.Sonido}`)
   }
}

class Oso extends Animal{
   constructor(nombre,edad,img,comentario,sonido){
      super(nombre,edad,img,comentario,sonido);
   }
   Grunir(){
      playSonido.setAttribute('src', `./assets/sounds/${this.Sonido}`)  
   }
}

class Serpiente extends Animal{
   constructor(nombre,edad,img,comentario,sonido){
      super(nombre,edad,img,comentario,sonido);
   }
   Sisear(){
      playSonido.setAttribute('src', `./assets/sounds/${this.Sonido}`)  
   }
}

class Aguila extends Animal{
   constructor(nombre,edad,img,comentario,sonido){
      super(nombre,edad,img,comentario,sonido);
   }
   Chillar(){
      playSonido.setAttribute('src', `./assets/sounds/${this.Sonido}`)  
   }
}

export {Leon, Lobo, Oso, Serpiente, Aguila};