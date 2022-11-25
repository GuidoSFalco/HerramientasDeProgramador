import { Component, OnInit } from '@angular/core';
declare let $:any;
let bandera_botones = true
let bandera_inputs = true
let bandera_loaders = true
let bandera_checkboxes = true
let bandera_switches = true
let bandera_tarjetas = true
let bandera_colores = true
let bandera_fondos = true
let bandera_iconos = true
let bandera_practicas = true
let bandera_bibio_herramientas = true
let bandera_herramientas = true

let bandera_img = true

let contador_banderas = 0
let contador_elementos:any = []



@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor() {
    
    $(function () {

      // let lista =[]
      // let elementos = document.querySelectorAll('img')
      // elementos.forEach(elemento => {
      //   elemento.addEventListener('click', () => {
      //     elemento.classList.toggle('open')

      //     if(bandera_img === true) {
      //       $('img').css({
      //         display: 'none'
      //       })
      //       bandera_img = false
      //     } else {
      //       $('img').css({
      //         display: 'block'
      //       })
      //       bandera_img = true
      //     }
          
      //   })
      // })
      
    })
  }
  
  ngOnInit(): void {
  }

  
  public botones() {
    if (bandera_botones === true) {
      
      $('.lista-items--botones').css({
        display: 'flex'
      })
      bandera_botones = false
      contador_banderas += 1
      contador_elementos.push("elemento-botones") // Agregar la palabra "botones" en el array
    } else {
      $('.lista-items--botones').css({
        display: 'none'
      })
      bandera_botones = true
      contador_banderas -= 1
      // Pasa por cada posicion del array en busca de la palabra "botones", una vez lo encuentra, lo elimina
      for (let i = 0; i < contador_elementos.length; i++) { 
        if (contador_elementos[i] == "elemento-botones") {
          contador_elementos.splice(i, 1);
        }
      }
    }

    this.busqueda()
  }

  public inputs() {

    if (bandera_inputs === true) {
      
      $('.lista-items--inputs').css({
        display: 'flex'
      })
      bandera_inputs = false
      contador_banderas += 1
      contador_elementos.push("elemento-inputs")
    } else {
      $('.lista-items--inputs').css({
        display: 'none'
      })
      bandera_inputs = true
      contador_banderas -= 1

      for (let i = 0; i < contador_elementos.length; i++) {
        if (contador_elementos[i] == "elemento-inputs") {
          contador_elementos.splice(i, 1);
        }
      }
    }

    this.busqueda()
  }

  public loaders() {
    if (bandera_loaders === true) {
      
      $('.lista-items--loaders').css({
        display: 'flex'
      })
      bandera_loaders = false
      contador_banderas += 1
      contador_elementos.push("elemento-loaders")
    } else {
      $('.lista-items--loaders').css({
        display: 'none'
      })
      bandera_loaders = true
      contador_banderas -= 1

      for (let i = 0; i < contador_elementos.length; i++) {
        if (contador_elementos[i] == "elemento-loaders") {
          contador_elementos.splice(i, 1);
        }
      }
    }

    this.busqueda()    
  }

  public checkboxes() {
    if (bandera_checkboxes === true) {
      
      $('.lista-items--checkboxes').css({
        display: 'flex'
      })
      bandera_checkboxes = false
      contador_banderas += 1
      contador_elementos.push("elemento-checkboxes")
    } else {
      $('.lista-items--checkboxes').css({
        display: 'none'
      })
      bandera_checkboxes = true
      contador_banderas -= 1
      
      for (let i = 0; i < contador_elementos.length; i++) {
        if (contador_elementos[i] == "elemento-checkboxes") {
          contador_elementos.splice(i, 1);
        }
      }
    }

    this.busqueda()
  }

  public switches() {
    if (bandera_switches === true) {
      
      $('.lista-items--switches').css({
        display: 'flex'
      })
      bandera_switches = false
      contador_banderas += 1
      contador_elementos.push("elemento-switches")
    } else {
      $('.lista-items--switches').css({
        display: 'none'
      })
      bandera_switches = true
      contador_banderas -= 1

      for (let i = 0; i < contador_elementos.length; i++) {
        if (contador_elementos[i] == "elemento-switches") {
          contador_elementos.splice(i, 1);
        }
      }
    }

    this.busqueda()
  }

  public tarjetas() {
    if (bandera_tarjetas === true) {
      
      $('.lista-items--tarjetas').css({
        display: 'flex'
      })
      bandera_tarjetas = false
      contador_banderas += 1
      contador_elementos.push("elemento-tarjetas")
    } else {
      $('.lista-items--tarjetas').css({
        display: 'none'
      })
      bandera_tarjetas = true
      contador_banderas -= 1

      for (let i = 0; i < contador_elementos.length; i++) {
        if (contador_elementos[i] == "elemento-tarjetas") {
          contador_elementos.splice(i, 1);
        }
      }
    }

    this.busqueda()
  }

  public colores() {
    if (bandera_colores === true) {
      
      $('.lista-items--colores').css({
        display: 'flex'
      })
      bandera_colores = false
      contador_banderas += 1
      contador_elementos.push("elemento-colores")
    } else {
      $('.lista-items--colores').css({
        display: 'none'
      })
      bandera_colores = true
      contador_banderas -= 1

      for (let i = 0; i < contador_elementos.length; i++) {
        if (contador_elementos[i] == "elemento-colores") {
          contador_elementos.splice(i, 1);
        }
      }
    }

    this.busqueda()
  }

  public fondos() {
    if (bandera_fondos === true) {
      
      $('.lista-items--fondos').css({
        display: 'flex'
      })
      bandera_fondos = false
      contador_banderas += 1
      contador_elementos.push("elemento-fondos")
    } else {
      $('.lista-items--fondos').css({
        display: 'none'
      })
      bandera_fondos = true
      contador_banderas -= 1

      for (let i = 0; i < contador_elementos.length; i++) {
        if (contador_elementos[i] == "elemento-fondos") {
          contador_elementos.splice(i, 1);
        }
      }
    }

    this.busqueda()
  }

  public iconos() {
    if (bandera_iconos === true) {
      
      $('.lista-items--iconos').css({
        display: 'flex'
      })
      bandera_iconos = false
      contador_banderas += 1
      contador_elementos.push("elemento-iconos")
    } else {
      $('.lista-items--iconos').css({
        display: 'none'
      })
      bandera_iconos = true
      contador_banderas -= 1

      for (let i = 0; i < contador_elementos.length; i++) {
        if (contador_elementos[i] == "elemento-iconos") {
          contador_elementos.splice(i, 1);
        }
      }
    }

    this.busqueda()
  }

  public practicas() {
    if (bandera_practicas === true) {
      
      $('.lista-items--practicas').css({
        display: 'flex'
      })
      bandera_practicas = false
      contador_banderas += 1
      contador_elementos.push("elemento-practicas")
    } else {
      $('.lista-items--practicas').css({
        display: 'none'
      })
      bandera_practicas = true
      contador_banderas -= 1

      for (let i = 0; i < contador_elementos.length; i++) {
        if (contador_elementos[i] == "elemento-practicas") {
          contador_elementos.splice(i, 1);
        }
      }
    }

    this.busqueda()
  }

  public bibio_herramientas() {
    if (bandera_bibio_herramientas === true) {
      
      $('.lista-items--bibio_herramientas').css({
        display: 'flex'
      })
      bandera_bibio_herramientas = false
      contador_banderas += 1
      contador_elementos.push("elemento-bibio_herramientas")
    } else {
      $('.lista-items--bibio_herramientas').css({
        display: 'none'
      })
      bandera_bibio_herramientas = true
      contador_banderas -= 1

      for (let i = 0; i < contador_elementos.length; i++) {
        if (contador_elementos[i] == "elemento-bibio_herramientas") {
          contador_elementos.splice(i, 1);
        }
      }
    }

    this.busqueda()
  }

  public herramientas() {
    if (bandera_herramientas === true) {
      
      $('.lista-items--herramientas').css({
        display: 'flex'
      })
      bandera_herramientas = false
      contador_banderas += 1
      contador_elementos.push("elemento-herramientas")
    } else {
      $('.lista-items--herramientas').css({
        display: 'none'
      })
      bandera_herramientas = true
      contador_banderas -= 1

      for (let i = 0; i < contador_elementos.length; i++) {
        if (contador_elementos[i] == "elemento-herramientas") {
          contador_elementos.splice(i, 1);
        }
      }
    }

    this.busqueda()
  }


  public busqueda() {
    /*
    $('.elemento').css('display','none')
    // let clase = document.querySelector('.elemento-botones')?.getAttribute('class')

    let elementos = document.querySelectorAll('.elemento')


    for (let i = 0; i < elementos.length; i++) {
      let contador_elementos_descarte = []
      // console.log(elementos[i].classList[i])
      for (let j = 0; j < elementos[i].classList.length; j++) {
        // contador elementos seleccionados
        for (let k = 0; k < contador_elementos.length; k++) {
          
          // console.log("+ clase "+j + "del elemento"+ i)
          console.log("prueba elemento: "+i)
          console.log("")
          console.log("clase: "+elementos[i].classList[j])
          console.log("")
          // if (elementos[i].getAttribute('class') == contador_elementos[i]) {
            //   }
            
          // if (elementos[i].classList[j] == contador_elementos[k]) {
          //   // alert("elemento "+elementos[i])
          //   if (contador_elementos[k] == contador_elementos[contador_elementos.length -1]) {
          //     j = elementos[i].classList.length
          //     $(elementos[i]).css('display','block')
          //   } else {
          //     j = elementos[i].classList.length
          //     $(elementos[i]).css('display','none')
          //   }
          // }

          
            if (elementos[i].classList[j] == contador_elementos[k]) {
                j = elementos[i].classList.length
                if (contador_elementos[k] == contador_elementos[contador_elementos.length -1]) {
                  $(elementos[i]).css('display','block')
                }
            } else {
              j = elementos[i].classList.length
              $(elementos[i]).css('display','none')
            }

        }
      }

    }
*/

    

    $('.elemento').css('display','none')

    let elementos = document.querySelectorAll('.elemento')

    for (let i = 0; i < elementos.length; i++) {

      let contador_elementos_coinciden = 0
      for (let k = 0; k < contador_elementos.length; k++) {

        for (let j = 0; j < elementos[i].classList.length; j++) {
          
            if (elementos[i].classList[j] == contador_elementos[k]) {
                j = elementos[i].classList.length
                contador_elementos_coinciden += 1
                // Si es el ultimo elemento, si muestra
                if (contador_elementos[k] == contador_elementos[contador_elementos.length -1]) {

                  if (contador_elementos_coinciden == contador_elementos.length) {
                    
                    $(elementos[i]).css('display','block')
                  } else {
                    $(elementos[i]).css('display','none')
                  }
                  
                }

            } else {
              $(elementos[i]).css('display','none')
            }

        }
      }

    }
    
    if (contador_banderas == 0) {
      $('.elemento').css('display','block')
    }
    
  }


  public busquedaManual() {
    let filtros = ['botones','inputs','loaders','checkboxes','switches','tarjetas','colores','fondos','iconos','biblioteca herramientas','herramientas']
    for (let i = 0; i < filtros.length; i++) {
      
      if ($('input').val() === filtros[i]) {
        switch (i) {
          case 0:
            this.botones()
            break;
          case 1:
            this.inputs()
            break;
          case 2:
            this.loaders()
            break;
          case 3:
            this.checkboxes()
            break;
          case 4:
            this.switches()
            break;
          case 5:
            this.tarjetas()
            break;
          case 6:
            this.colores()
            break;
          case 7:
            this.fondos()
            break;
          case 8:
            this.iconos()
            break;
          case 9:
            this.bibio_herramientas()
            break;
          case 10:
            this.herramientas()
            break;
          default:
            break;
            
        }
        // $('.lista-items--'+filtros[i]).css({
        //   display: 'flex'
        // })
      } 
        // if (filtros[i] === filtros[filtros.length-1]) {
          
          
        // }
      
      }
      $('input').val("")
  }
}
