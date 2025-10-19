function generateGrid(size) {

    let grid = document.querySelector(".grid");
    
    for(i=1;i<=size;i++) {

        let row = document.createElement("div");
        row.className = "row";
        grid.appendChild(row);

        for(j=1;j<=size;j++) {

            let tile = document.createElement("div");
            tile.className = "tile";
            row.appendChild(tile);

        }
    }
}

generateGrid(16);