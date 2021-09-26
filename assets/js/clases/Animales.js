//constructor de Animales
export class Animal{
   constructor(nombre,edad,img,comentarios,sonido){
      let Nombre = nombre;
      this.getNombre = () => Nombre;

      let Edad = edad;
      this.getEdad = () => Edad;

      let Img = img;
      this.getImg = () => Img;

      let Comentarios = comentarios;
      this.getComentarios = () => Comentarios;
      this.setComentarios = (newComentario) => Comentarios = newComentario;

      let Sonido = sonido;
      this.getSonido = () => Sonido;
   }
   
   get Nombre(){
      return this.getNombre()
   }

   get Edad(){
      return this.getEdad()
   }

   get Img(){
      return this.getImg();
   }

   get Comentarios(){
      return this.getComentarios();
   } 

   set Comentarios(newComentario){
      return this.setComentarios(newComentario);
   }
   get Sonido(){
      return this.getSonido();
   }
   
}

