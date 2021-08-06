import data from './data.js';

const arrOfPeople = data.results;
const imagesDiv = document.querySelector("#imgOnLeft");

//Load img to the left
for(const person of arrOfPeople){
    let newImg = document.createElement("img");
    newImg.id = person.email;
    newImg.src = person.picture.large;
    imagesDiv.appendChild(newImg);
}

//give the imgs an event listener
for(const person of arrOfPeople){
    let img = document.getElementById(person.email);
    img.addEventListener("click", onClickImg);
}

function onClickImg(event){
    let currentUser;
    for(const person of arrOfPeople){
        if(event.currentTarget.id == person.email){
            currentUser = person;
        }
    }

    //set user image
    let userPfp = document.querySelector("#userPfp");
    userPfp.src = currentUser.picture.large;

    //display name
    let userName = document.querySelector("#name");
    userName.innerHTML = currentUser.name.title + ". " + currentUser.name.first + " " + currentUser.name.last;

    //give class
    document.querySelector("#email").className = "navContent " + currentUser.email;
    document.querySelector("#dob").className = "navContent " + currentUser.email;
    document.querySelector("#timeZone").className = "navContent " + currentUser.email;
    document.querySelector("#phoneNumber").className = "navContent " + currentUser.email;

    //clear description
    document.querySelector("#content").innerHTML = "";
}

let navBar = document.querySelectorAll(".navContent");
for(const element of navBar){
    element.addEventListener("click", onClickNavBar);
}

function onClickNavBar(event){
    let currentUser;
    for(const person of arrOfPeople){
        if(event.currentTarget.className == "navContent " + person.email){
            currentUser = person;
        }
    }

    if(event.currentTarget.id == "email"){
        document.querySelector("#content").innerHTML = currentUser.email;
    }
    else if(event.currentTarget.id == "timeZone"){
        document.querySelector("#content").innerHTML = currentUser.location.timezone.description;
    }
    else if(event.currentTarget.id == "phoneNumber"){
        document.querySelector("#content").innerHTML = currentUser.phone;
    }
    else if(event.currentTarget.id == "dob"){
        document.querySelector("#content").innerHTML = currentUser.dob.date;
    }
}
