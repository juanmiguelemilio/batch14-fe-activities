// Global Variables
// Name Variables
var storedName = localStorage.getItem("storedName");
let labelSN = document.querySelector('.savedName');
let nameInput = document.querySelector('.nameInput');

// Goal Variables
var storedGoal = localStorage.getItem("storedGoal");
let goalInput = document.querySelector('.goalInput');
let goalBtn = document.querySelector('.changeGoal');
let span = document.querySelector('.goal');

// Quote Variables
var storedQuote = localStorage.getItem("storedQuote");
let spanQuote = document.querySelector('.quote');
let spanTxt = document.querySelector('.quoteInput');
let spanChange = document.querySelector('.removeQuote');
let mainQuote = document.querySelectorAll('.mainQuote');

// To Do Variables
let toDoConts = document.querySelector('.todoConts');
let toDoTxt = document.querySelector('.toDoTxt');
let toDoCtr = document.querySelector('.toDoCtr');

// Main Functions 
let saveName = () => {
    var Name = document.getElementById("name").value;
    localStorage.setItem("storedName", Name);
    document.getElementById("savedName").textContent = `Welcome ${Name}`;
    document.querySelector('.changeBtn').innerHTML = 'Change Name';
    window.location.reload();
}

    nameInput.addEventListener('click', e => {
        console.log(`Class Named Clicked: ${e.target.className} || ID Named: ${e.target.id} || with Element: ${e.target.tagName}`);
    })
    
    document.querySelector('.changeBtn').addEventListener('click', e => {
        console.log(`Class Named Clicked: ${e.target.className} || ID Named: ${e.target.id} || with Element: ${e.target.tagName}`);
    })

    document.querySelector('.removeBtn').addEventListener('click', e => {
        console.log(`Class Named Clicked: ${e.target.className} || ID Named: ${e.target.id} || with Element: ${e.target.tagName}`);
    })

let getName = () => {
    localStorage.getItem("storedName");
    if (storedName === null) {
        document.getElementById("getName").innerHTML = '';
    }
    else {
        document.getElementById("getName").textContent = `Welcome ${storedName}! What is Your Goal Today?`;
        labelSN.style.display = 'none';
        nameInput.style.display = 'none';
        goalInput.style.display = 'initial';
        goalBtn.style.display = 'initial';
        document.querySelector('.changeBtn').style.display = 'none';
        document.querySelector('.removeBtn').style.display = 'none';
        document.querySelector('.changeName').style.display = 'initial';
        spanQuote.style.display = 'initial';
        toDoTxt.style.display = 'initial';
        toDoConts.style.display = 'initial';
        let elems = document.getElementsByClassName('todoList');
        for (let i = 0; i < elems.length; i++) {
            elems[i].style.display = 'none';
        }
        for (let i = 0; i < mainQuote.length; i++) {
            mainQuote[i].style.display = 'none';
        }

        goalInput.addEventListener('click', e => {
            console.log(`Class Named Clicked: ${e.target.className} || ID Named: ${e.target.id} || with Element: ${e.target.tagName}`);
        })
            
        goalBtn.addEventListener('click', e => {
            console.log(`Class Named Clicked: ${e.target.className} || ID Named: ${e.target.id} || with Element: ${e.target.tagName}`);
        })

        toDoConts.addEventListener('click', e => {
            console.log(`Class Named Clicked: ${e.target.className} || ID Named: ${e.target.id} || with Element: ${e.target.tagName}`);
        })

        getGoal();

        getQuote(); 
    }
}

// Goal Functions
let saveGoal = () => {
    let Goal = document.forms["nForm"]["mGoal"].value;
    (Goal == null || Goal == "") ? `` : (localStorage.setItem("storedGoal", Goal), window.location.reload());
}

let getGoal = () => {
    localStorage.getItem("storedGoal");
    storedGoal == null ? `` : 
        (
            span.style.display = 'initial',
            document.getElementById("goal").textContent = `${storedGoal}`,
            goalInput.style.display = 'none',
            goalBtn.style.display = 'none',
            document.querySelector('.changeBtn').style.display = 'none',
            document.querySelector('.removeBtn').style.display = 'none'
        );
}

let deleteName = () => {
    window.localStorage.removeItem("storedName");
    document.getElementById("getName").innerHTML = '';
    labelSN.style.display = 'initial';
    goalBtn.style.display = 'none';
    document.querySelector('.changeBtn').innerHTML = 'Input Name';
    window.location.reload();
}

let delGoal = () => {
    window.localStorage.removeItem("storedGoal");
    window.location.reload();
}

let start = () => {
    getName();
    initClock();
}

let logOut = () => {
    saveName();
}

let changeName = () => {
    deleteName();
}

