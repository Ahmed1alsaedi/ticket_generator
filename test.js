const body = document.getElementsByTagName("body")[0]
function generateTicket() {
  event.preventDefault();
  try {
    const upluadFile = document.getElementById("uploadImg");
    if (((upluadFile.files[0].size) / 1024) > 500) {
      throw new Error("Image size should be lesss then 500KB");
    }
    const fileReader = new FileReader();
    const fullName = document.getElementById("fullName")?.value;
    const email = document.getElementById("userEmail").value;
    const username = document.getElementById("userUsername").value;
    console.log(fullName, email, username);
    if (!fullName || !email || !username) {
      throw new Error("All fields are required");
    }
    fileReader.onload = function(check) {
      const upluadImg = check.target.result;
  if (upluadFile.files[0].type !== 'image/jpeg' && upluadFile.files[0].type !== 'image/png') {
    throw new Error("File type must be JPG or PNG");
  }
      const form = document.querySelector(".form");
      form.style.display = "none";
      greeting(fullName);
      ticketSnder(email);
      ticket(fullName, username, upluadImg);
    };
    fileReader.readAsDataURL(upluadFile.files[0]);
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
function ticket(fullName,username,upluadImg){
    const tDiv = document.createElement("div")
    tDiv.classList.add("ticket")
    // inside ticket
    const LogoImg = document.createElement("img")
    LogoImg.src = "assets/images/logo-full.svg"
    LogoImg.classList.add("Tlogo")
    const newP = document.createElement("p")
    newP.textContent = "Jan 31, 2025 / Riyadh / Saudi Arabia"
    newP.classList.add("smallT")
    tDiv.appendChild(LogoImg)
    tDiv.appendChild(newP)
    // make the information
    const innerDiv = document.createElement("div")
    innerDiv.classList.add("information")
    const avatarImg = document.createElement("img")
    avatarImg.src =upluadImg
    avatarImg.classList.add("Pimg")
    const lastDiv = document.createElement("div")
     const nameP = document.createElement("p") 
     const userP = document.createElement("p")
     nameP.textContent = fullName
     nameP.classList.add("nameIn")
     userP.classList.add("usernameIn")
     userP.innerHTML = `<img src = "assets/images/icon-github.svg" class="gitHub" height="20px"> @${username}`
      lastDiv.appendChild(nameP);
      lastDiv.appendChild(userP);
      innerDiv.appendChild(avatarImg);
      innerDiv.appendChild(lastDiv);
      tDiv.appendChild(innerDiv);
       body.appendChild(tDiv);

     


    
}


