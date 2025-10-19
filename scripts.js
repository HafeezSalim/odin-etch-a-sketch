function generateGrid(size) {

    let grid = document.querySelector(".grid");
    
    for(i=1;i<=size;i++) {

        let row = document.createElement("div");
        row.className = "row";
        grid.appendChild(row);

        for(j=1;j<=size;j++) {

            let tile = document.createElement("div");
            tile.className = "tile";
            let tileID = "row" + i + "column" + j;
            tile.id = tileID;
            row.appendChild(tile);

        }
    }
}

generateGrid(10);

//hover effect
let grid = document.querySelector(".grid");
grid.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("tile")) {
        event.target.style.backgroundColor = "yellow";
    }
})

