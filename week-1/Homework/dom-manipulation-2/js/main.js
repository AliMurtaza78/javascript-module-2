//Part 1
//Blue 
//get button
const blueButton = document.querySelector("#bluebtn")

// Adding evenListener

blueButton.addEventListener("click", (e) =>{
    //selecting elements
    const jumbo = document.querySelector(".jumbotron");
    const donateABike = document.querySelector(".btn-primary");
    const volunteer = document.querySelector(".btn-secondary");
    //style
    jumbo.style.backgroundColor = "#588fbd";
    donateABike.style.backgroundColor = "#ffa500";
    volunteer.style.backgroundColor = "black"
    volunteer.style.color = "white"
    

} )
 
//Orange
//get button
const orangeButton = document.querySelector("#orangeBtn")

// Adding evenListener

orangeButton.addEventListener("click", (e) =>{
    //selecting elements
    const jumbo = document.querySelector(".jumbotron");
    const donateABike = document.querySelector(".btn-primary");
    const volunteer = document.querySelector(".btn-secondary");
    //style
    jumbo.style.backgroundColor = `#f0ad4e`
    donateABike.style.backgroundColor = `#5751fd`
    volunteer.style.backgroundColor = `#31b0d5`
    volunteer.style.color = `white`
})

//green

const greenButton = document.querySelector("#greenBtn")

// Adding evenListener

greenButton.addEventListener("click", (e) =>{
    //selecting elements
    const jumbo = document.querySelector(".jumbotron");
    const donateABike = document.querySelector(".btn-primary");
    const volunteer = document.querySelector(".btn-secondary");
    //style
    jumbo.style.backgroundColor = `#87ca8a`
    donateABike.style.backgroundColor = `black`
    volunteer.style.backgroundColor = `#8c9c08`
})

//Part 2

//get button
const sumbitButton = document.querySelector("#D53F041CF95447678F1DF306200C2EE3.btn")

sumbitButton.addEventListener("click", () => {
    const inputInside = document.querySelector(".form-control").value
    const emailCheck = document.querySelector("#exampleInputEmail1")
    if(inputInside.length > 0 && emailCheck.includes("@")){
        console.log()
    }
})

