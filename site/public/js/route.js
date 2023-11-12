async function link(href, id, animation) {
 var campo = document.getElementById(id)
 if(campo) {

  campo.className = `container ${animation}`
 }

 await setTimeout(function () {
  window.location.href = href
 }, 2000)

}