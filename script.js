// global variables
const schedule = document.querySelector('.schedule')
const currentDay = document.querySelector('#currentDay')
//gets current day and time
const today = dayjs()
currentDay.innerHTML = dayjs().format('dddd [of] MM-DD-YYYY')
//sets hour to military time
const currentHourAm = dayjs().format('HH')
const currentHourPm = dayjs().format('h')
console.log(currentHourAm)
const Btn = document.querySelector('.saveBtn')
// array of html in object form
const workDayArray = [
  {
    
    time: "9",
    milTime: "09",
    span:"am",
    chore: `<textarea id="nineAm" data-chore="9am" class="col-8 col-md-10 description " rows="3"> </textarea>`,
    button: `<button data-time="9am" id="save-btn" class="saveBtn btn col-2 col-md-1"><i class="fas fa-save" aria-hidden="true"></i></button>`
  },
  {
    
    time: "10",
    milTime: "10",
    span:"am",
    chore: `<textarea id="tenAm" data-chore="10am" class="col-8 col-md-10 description" rows="3"> </textarea>`,
    button: `<button data-time="10am" id="save-btn" class="saveBtn btn col-2 col-md-1"><i class="fas fa-save" aria-hidden="true"></i></button>`
  },
  {
    
    time: "11",
    milTime: "11",
    span:"am",
    chore: `<textarea id="elevenAm" data-chore="11am" class="col-8 col-md-10 description" rows="3"> </textarea>`,
    button: `<button data-time="11am" id="save-btn" class="saveBtn btn col-2 col-md-1"><i class="fas fa-save" aria-hidden="true"></i></button>`
  },
  {

    time: "12",
    milTime: "12",
    span:"pm",
    chore: `<textarea id="twelvePm" data-chore="12pm" class="col-8 col-md-10 description" rows="3"> </textarea>`,
    button: `<button data-time="12pm" id="save-btn" class="saveBtn btn col-2 col-md-1"><i class="fas fa-save" aria-hidden="true"></i></button>`
  },
  {
    time: "1",
    milTime: "13",
    span:"pm",
    chore: `<textarea id="onePm" data-chore="1pm" class="col-8 col-md-10 description" rows="3"> </textarea>`,
    button: `<button data-time="1pm" id="save-btn" class="saveBtn btn col-2 col-md-1"><i class="fas fa-save" aria-hidden="true"></i></button>`
  },
  {
    time: "2",
    milTime: "14",
    span:"pm",
    chore: `<textarea id="twoPm" data-chore="2" class="col-8 col-md-10 description" rows="3"> </textarea>`,
    button: `<button data-time="2" id="save-btn" class="saveBtn btn col-2 col-md-1"><i class="fas fa-save" aria-hidden="true"></i></button>`
  },
  {
    time: "3",
    milTime: "15",
    span:"pm",
    chore: `<textarea id="threePm" data-chore="3pm" class="col-8 col-md-10 description" rows="3"> </textarea>`,
    button: `<button data-time="3pm" id="save-btn" class="saveBtn btn col-2 col-md-1"><i class="fas fa-save" aria-hidden="true"></i></button>`
  },
  {
    time: "4",
    milTime: "16",
    span:"pm",
    chore: `<textarea id="fourPm" data-chore="4pm" class="col-8 col-md-10 description" rows="3"> </textarea>`,
    button: `<button data-time="4pm" id="save-btn" class="saveBtn btn col-2 col-md-1"><i class="fas fa-save" aria-hidden="true"></i></button>`
  },
  {
    time: "5",
    milTime: "17",
    span:"pm",
    chore: `<textarea id="fivePm" data-chore="5pm" class="col-8 col-md-10 description" rows="3"> </textarea>`,
    button: `<button data-time="5pm" id="save-btn" class="saveBtn btn col-2 col-md-1"><i class="fas fa-save" aria-hidden="true"></i></button>`
  },
  {
    time: "6",
    milTime: "18",
    span:"pm",
    chore: `<textarea id="sixPm" data-chore="6pm" class="col-8 col-md-10 description" rows="3"> </textarea>`,
    button: `<button data-time="6pm" id="save-btn" class="saveBtn btn col-2 col-md-1"><i class="fas fa-save" aria-hidden="true"></i></button>`
  },
]
//mapping the workDayArray to be displayed
const map = workDayArray.map((info, index) => {
  return (`<div id="${info.milTime}" data-index=${index} class="chore-wrapper row time-block   ">
  <div class="col-2 col-md-1 hour text-center py-3">${info.time}${info.span}</div>
  ${info.chore}
  ${info.button}
  </div>`)
}).join("")
// displays the mapped objects to the user
function showMap () {
  
schedule.innerHTML = map

}
showMap()
//saves the inputted chores into local storage.
function saveChore () {
  // variables of each attribute to read values and ids
  const textArea = document.querySelectorAll('.description')
  const saveBtn = document.querySelectorAll('#save-btn') 
  const nineAm = document.querySelector('#nineAm') 
  const nineAtt = nineAm.getAttribute('data-chore')
  const elevenAm = document.querySelector('#elevenAm') 
  const elevenAtt = elevenAm.getAttribute('data-chore')
  const twelvePm = document.querySelector('#twelvePm') 
  const twelveAtt = twelvePm.getAttribute('data-chore')
  const onePm = document.querySelector('#onePm') 
  const oneAtt = onePm.getAttribute('data-chore')
  const twoPm = document.querySelector('#twoPm') 
  const twoAtt = twoPm.getAttribute('data-chore')
  const threePm = document.querySelector('#threePm') 
  const threeAtt = threePm.getAttribute('data-chore')
  const fourPm = document.querySelector('#fourPm') 
  const fourAtt = fourPm.getAttribute('data-chore')
  const fivePm = document.querySelector('#fivePm') 
  const fiveAtt = fivePm.getAttribute('data-chore')
  const sixPm = document.querySelector('#sixPm') 
  const sixAtt = sixPm.getAttribute('data-chore')
  const tenAm = document.querySelector('#tenAm') 
  const tenAtt = tenAm.getAttribute('data-chore')
  console.log(twoAtt)
  // for each loop to listen for click on each button that is clicked to store value in local storage.
saveBtn.forEach(each => {
  
 const saveAtt = each.getAttribute("data-time")
 console.log(saveAtt)
  each.addEventListener("click", (event) => {
    const item = event.target
   if (saveAtt == nineAtt){
    console.log(nineAm.value)
    localStorage.setItem("9am", JSON.stringify(nineAm.value))
   } else if (saveAtt == tenAtt) {
    console.log(tenAm.value)
    localStorage.setItem("10am", JSON.stringify(tenAm.value))
   } else if (saveAtt == elevenAtt) {
    console.log(elevenAm.value)
    localStorage.setItem("11am", JSON.stringify(elevenAm.value))
   } else if (saveAtt == twelveAtt) {
    console.log(twelvePm.value)
    localStorage.setItem("12pm", JSON.stringify(twelvePm.value))
   } else if (saveAtt == oneAtt) {
    console.log(onePm.value)
    localStorage.setItem("1pm", JSON.stringify(onePm.value))
   } else if (saveAtt == twoAtt) {
    console.log(twoPm.value)
    console.log("button works")
    localStorage.setItem("2pm", JSON.stringify(twoPm.value))
   } else if (saveAtt == threeAtt) {
    console.log(threePm.value)
    localStorage.setItem("3pm", JSON.stringify(threePm.value))
   } else if (saveAtt == fourAtt) {
    console.log(fourPm.value)
    localStorage.setItem("4pm", JSON.stringify(fourPm.value))
   } else if (saveAtt == fiveAtt) {
    console.log(fivePm.value)
    localStorage.setItem("5pm", JSON.stringify(fivePm.value))
   } else if (saveAtt == sixAtt) {
    console.log(sixPm.value)
    localStorage.setItem("6pm", JSON.stringify(sixPm.value))
   }
    
   

  })
})
console.log("function runs")
console.log(saveBtn)

}
saveChore()
//shows the inputted chores onto the screen. pulling from local storage.
function showChore () {
  const nineAm = document.querySelector('#nineAm')
  const tenAm = document.querySelector('#tenAm') 
  const elevenAm = document.querySelector('#elevenAm') 
  const twelvePm = document.querySelector('#twelvePm') 
  const onePm = document.querySelector('#onePm') 
  const twoPm = document.querySelector('#twoPm')
  const threePm = document.querySelector('#threePm') 
  const fourPm = document.querySelector('#fourPm')
  const fivePm = document.querySelector('#fivePm')
  const sixPm = document.querySelector('#sixPm') 
  const storage = document.querySelectorAll('.description')
   
  // pulls from local storage and displays it to screen in correct time slots.
  nineAm.innerHTML = JSON.parse(localStorage.getItem("9am"))
  tenAm.innerHTML = JSON.parse(localStorage.getItem("10am"))
  elevenAm.innerHTML = JSON.parse(localStorage.getItem("11am"))
  twelvePm.innerHTML = JSON.parse(localStorage.getItem("12pm"))
  onePm.innerHTML = JSON.parse(localStorage.getItem("1pm"))
  twoPm.innerHTML = JSON.parse(localStorage.getItem("2pm"))
  threePm.innerHTML = JSON.parse(localStorage.getItem("3pm"))
  fourPm.innerHTML = JSON.parse(localStorage.getItem("4pm"))
  fivePm.innerHTML = JSON.parse(localStorage.getItem("5pm"))
  sixPm.innerHTML = JSON.parse(localStorage.getItem("6pm"))
  
}
showChore()
//changes the past future presnt classes of the time slots based on the time of day.
function changeColor () {
  const timeSlot = document.querySelectorAll('.chore-wrapper')
  
timeSlot.forEach(each => {
  const item = each.getAttribute('id')
  
  if (item == currentHourAm) {
    each.classList.add('present')
    each.classList.remove('past')
    each.classList.remove('future')
    
  } else if (item < currentHourAm) {
    each.classList.add('past')
    each.classList.remove('future')
    each.classList.remove('present')
  } else if (item > currentHourAm ) {
    each.classList.add('future')
    each.classList.remove('past')
    each.classList.remove('present')
  } 
}

)
if (currentHourAm > 18) {
  localStorage.clear()
}
}
changeColor()
//clears the local storage once it hits 7pm to refresh the tasks for the next day.
currentHourAm.addEventListener('change', () => {
  location.reload()
})
