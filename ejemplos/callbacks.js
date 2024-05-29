function uno () {
    console.log("uno")
    setTimeout(dos, 2000)
}

function dos () {
    console.log("dos")
}

setTimeout( ()=>uno(dos), 5000)

// setTimeout(uno, 5000)

// const persona= () => console.log("Barbara");
// persona();

// () => console.log();