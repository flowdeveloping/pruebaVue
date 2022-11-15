//Dentro de la sintaxis de abajo estoy llamando a toda la libreria de vue 
//Dentro de este OBJETO 
//El y data son propios de vue

const app = new Vue({
    el: '#app',
    data:{
        fondo: 'bg-info',
        color: false,
        contador: 0,
        titulo: 'Hola Mundo, Interactuando con Vue.js',
        paises: [
            {nombre: 'Argentina', continente: 'Sudamerica', poblacion:48005156},
            {nombre: 'Francia', continente: 'Europa', poblacion:75853269},
            {nombre: 'Australia', continente: 'Oceania', poblacion:3545298},
            {nombre: 'Rocotrompo', continente: 'Zaracatunga', poblacion:0}
        ],
        nuevoPais:'',
        total: 0
    },
    methods: {
        agregarPais(){
            this.paises.push({
                nombre : this.nuevoPais, continente: "ninguno", poblacion: 0
            });
            this.nuevoPais= '';
        },
    },
    computed: {
        sumarPaises(){
            this.total = 0;
            for(pais of this.paises){
                this.total = this.total + pais.poblacion;
            }
            return this.total;
        },
        colores(){
            return{
                'bg-success' : this.contador <= 10,
                'bg-warning' : this.contador > 10 && this.contador < 20,
                'bg-danger' : this.contador >= 20
            }
        }
    }
})

/* 
    otroMetodo(){

    } */

 

