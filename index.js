// // two way for clicke
// function saveLead() {
//     console.log("Button clicked from onclick attribute")
// }

// let inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function() {
//     console.log("Button clicked from addEventListener")
// })

// If possible, use const. If not, use let.


let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")


// get the input
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    // Save the myLeads array to localStorage 
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    // To verify that it works:
    console.log( localStorage.getItem("myLeads") )
    render(myLeads)
})

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {    
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})


const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)

// check if localstorage is empty
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// print all the myLeads array
// for (let i = 0; i < myLeads.length; i++) {
    // 1st way
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    
    // 2nd way
    // create element
    // set text content
    // append to ul
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)    
// }

    // 3rd way
    // 1. Create a variable, listItems, to hold all the HTML for the list items
    // Assign it to an empty string to begin with
    // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
    // 3. Render the listItems inside the unordered list using ulEl.innerHTML
    // console.log(myLeads) ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
    // console.log(listItems) <li>www.awesomelead.com</li><li>www.epiclead.com</li><li>www.greatlead.com</li>
    function render(leads){
        let listItems = ""
        for (let i = 0; i < leads.length; i++) {         
            // listItems += "<li>" + myLeads[i] + "</li>"  
            
            // add <a>
            // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
            
            // template strings/literals
            listItems += `
                <li>
                    <a target='_blank' href='${leads[i]}'>
                        ${leads[i]}
                    </a>
                </li>
            `
        }
        ulEl.innerHTML = listItems
    }


// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings


// localStorage.setItem("myName", "Per Harald Borgen")
let name = localStorage.getItem("myName")
console.log(name)
// localStorage.clear()

let myString = `["www.awesomelead.com"]`

myString = JSON.parse(myString) //stirng => array

myString.push("www.epiclead.com")

console.log(myString)

//other way around
let myArray = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
myArray = JSON.stringify(myArray) // array => string
console.log(typeof myArray)


// truthy

// falsy:
// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

// [] is truthy

let currentViewers = null
currentViewers = ["jane", "nick"]
if (currentViewers) {
    console.log("we have viewers")
}

let current 
console.log(current)

// console.log(  Boolean("")   ) // false
// console.log(  Boolean("0")  ) // true
// console.log(  Boolean(100)  ) // true
// console.log(  Boolean(null) ) // false
// console.log(  Boolean([0])  ) // true
// console.log(  Boolean(-0)   ) // false



// function greetUser(greeting, name) {
//     welcomeEl.textContent = greeting + ", " + name + " 👋"
//     // Rewrite the expression using template literals
//     welcomeEl.textContent = `${greeting}, ${name} 👋`
// }
// greetUser("Howdy", "James")


// how do you create a chrome extention
// it's very simple, just add an eventlistener to a botton, then input value, take that value stored in an object and conver to a JSON using JSON.stringify, store it to local storage, no big deal......