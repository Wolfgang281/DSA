function starBox(n,m){
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            process.stdout.write("* ")
        }
        console.log()
    }
}

starBox(3,3)


function starBox2(n, m) {
    for (let i = 0; i < n; i++) {
        let row = "";  // Create a string to store the row
        for (let j = 0; j < m; j++) {
            row += "* ";  // Append stars to the row
        }
        console.log(row.trim());  // Print the row and remove extra space
    }
}

starBox2(3, 3);
