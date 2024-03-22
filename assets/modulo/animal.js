class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    };
    get nombre(){
        return this.nombre
    };
    get edad(){
        return this.edad
    };
    get img(){
        return this.img
    };
    get sonido(){
        return this.sonido
    };
    get comentarios(){
        return this.comentarios
    }
    set comentarios(nuevoComentario) {
        this._comentarios = nuevoComentario
    }
};

export default Animal