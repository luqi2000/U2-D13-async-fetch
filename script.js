fetch("https://striveschool-api.herokuapp.com/books")
  .then(response => response.json())
  .then(todos => {
    const grid = document.getElementById("todo");
    grid.innerHTML = "";

    todos.forEach(todo => {
      const col = document.createElement("div");
      col.className = "col";
      col.innerHTML = `
        <div class="card";">
            <img src="${todo.img}" style = "height: 400px"; class="card-img-top" alt="copertina del libro">
            <div class="card-body">
                <h5 class="card-title">${todo.title}</h5>
                <p class="card-text">The price is ${todo.price} pound</p>
                <button id = "btn" >Remove</button>
                <button id = "btn-add" >Buy</button>
            </div>
        </div>`;

      const remove = col.querySelector("#btn");
      remove.onclick = () => {
        col.remove();
      };

      /*const add = col.querySelector("#btn-add");
      const title = col.querySelector(".card-title");
      const addTitle = getElementByClass("list-group");
      add.onclick = () => {};*/

      grid.appendChild(col);
    });
  })
  .catch(error => console.log("CATCH", error));
