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

//Selecting all the feilds first
const form = document.querySelector("form")
const email = document.querySelector("#exampleInputEmail1");
const username = document.querySelector("#example-text-input");
const describeYouself = document.querySelector("#exampleTextarea");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    checkInputs();
})

//geting all the input values
const emailValue = email.value.trim();
const usernameValue = username.value.trim();
const describeValue = describeYouself.value.trim();
const symbolCheckInEmail = emailValue.includes("@")

function checkInputs(){

  if(emailValue === "" && symbolCheckInEmail == false){
      //show error
      setErrorFor(email, "Email cannot be blanked")
      email.style.backgroundColor  = "red"
      
    }else{
         //add success
         setSuccess(email);
         email.style.backgroundColor = "green"
}
}

function setErrorFor(someinput,message){
    const formControl = someinput.parentElement;
    const small = document.querySelector("small")

    small.innerText = message;

    //adding classes
    formControl.className = "form-control error"
}

function setSuccess(someinput){
    const formControl = someinput.parentElement;
    formControl.className = "form-control success"
}

//Adding second function for username
// function checkUsername(){

//     if(username === ""){
//         //show error
//         setError(username, "Email cannot be blanked")
//         email.style.backgroundColor  = "red"
        
//       }else{
//            //add success
//            setSuccess(username);
//            email.style.backgroundColor = "green"
//   }
//   }
  
//   function setErrorFor(someinput,message){
//       const formControl = someinput.parentElement;
//       const small = document.querySelector("small")
  
//       small.innerText = message;
  
//       //adding classes
//       formControl.className = "form-control error"
//   }
  
//   function setSuccess(someinput){
//       const formControl = someinput.parentElement;
//       formControl.className = "form-control success"
//   }