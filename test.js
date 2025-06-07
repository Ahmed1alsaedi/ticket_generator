const body = document.getElementsByTagName("body")[0]
function generateTicket() {
  event.preventDefault(); 
    try {
        const fullName = document.getElementById("fullName")?.value;
        const email = document.getElementById("userEmail").value;
        const username = document.getElementById("userUsername").value;
        console.log(fullName, email, username);
        if (!fullName || !email || !username) {
            throw new Error("All fields are required");
        }
       const form = document.querySelector(".form");
        form.style.display = "none";
        greeting(fullName)
        ticketSnder(email)
        ticketSnder()
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

function greeting(fullName){
     const newP = document.createElement("p");
     newP.innerHTML=`Congrats, <span id="emailcolor"> ${fullName}!</span>\nYour ticket is ready.`
     newP.id="header";
   
     body.appendChild(newP)
}
function ticketSnder(email){
    const newP = document.createElement("p");
    newP.innerHTML = `We've emailed your ticket to <span id="emailcolor">${email}</span> and will send updates in the run up to the event`;
    newP.id = "smaLL";

    body.appendChild(newP);

}
function ticket(fullName,username){
    
}


