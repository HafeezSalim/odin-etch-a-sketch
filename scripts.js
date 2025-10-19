function generateGrid(size) {

    let grid = document.querySelector(".grid");
    
    for(i=1;i<=size;i++) {

        let row = document.createElement("div");
        row.className = "row";
        let rowHeight = (1 / size) * 100;
        row.style.height = rowHeight + "%";
        grid.appendChild(row);

        for(j=1;j<=size;j++) {

            let tile = document.createElement("div");
            tile.className = "tile";
            let tileID = "row" + i + "column" + j;
            tile.id = tileID;
            let tileWidth = (1 / size) * 100;
            tile.style.width = tileWidth + "%";
            row.appendChild(tile);

        }
    }
}

//initial grid size
generateGrid(16);

let gridButton = document.querySelector(".gridButton");
let newGrid = document.querySelector(".grid");

//generate new grid size


gridButton.addEventListener("click", (event) => {

    let userInput = prompt("Choose a new grid size (1-100): ") 
    let size = parseInt(userInput);
    if (size>100) {
        size = 100;
    }
    if (size !="" && size>=1 && size<=100) {
        newGrid.replaceChildren();
        generateGrid(size);
    }

})

//hover effect
let grid = document.querySelector(".grid");
grid.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("tile")) {
        let redSetting = Math.floor(Math.random() * 256).toString();
        let greenSetting = Math.floor(Math.random() * 256).toString();
        let blueSetting = Math.floor(Math.random() * 256).toString();
        event.target.style.backgroundColor = "rgb("+redSetting+","+greenSetting+","+blueSetting+")";
    }
})

