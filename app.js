
var contenido =document.querySelector('#contenido');
                 function traer(){
                fetch('https://randomuser.me/api/')
                .then(respuesta => respuesta.json())
                  
                  .then(data =>{
                      console.log(data.results['0'])

                      contenido.innerHTML = `
                       <img src= "${data.results['0'].picture.medium}" width="100px" class="img-fluid rounded-circle">
                       <p> nombre: "${data.results['0'].name.last}"</p>
                       `
                       
                  })
            


            }
        