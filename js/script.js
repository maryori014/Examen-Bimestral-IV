let form = document.getElementById("container");
let content= document.getElementById("content");

let figuras =[];

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    let data = new FormData(form);
    figuras.push({
        nombre: data.get("nombre"),
        figura: data.get("figura"),
        color: data.get("color"),
    });
    pintar_figuras();
});
const pintar_figuras = () =>{
    content.innerHTML="";
    figuras.forEach((e) => {
        content.insertAdjacentHTML(
            "beforeend",
          `
          <div
          class="${e.figura}"
          style="background:${e.color};"
          >
          ${e.nombre}
          </div>
        `
        );
    });
}