function rightTriangle(rows) {
    for (let i = 0; i < rows; i++) {
      for(let j=0;j<=i;j++){
          process.stdout.write("* ")
      }
        console.log()
    }
}

// rightTriangle(3)

function rightTriangle1(rows){
    for (let i = 0; i < rows; i++) {
        let row =""
        for(let j=0;j<=i;j++){
            row+="* "
        }
        console.log(row.trim())
    }
}
rightTriangle1(3)