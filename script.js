$(function () {

  renderToDo()

  var currentDay = dayjs().format('dddd');
  var dateContainer = document.getElementById('currentDay');
  
  dateContainer.textContent = 'Today is ' + currentDay;

  function timeblockColoring() {
    var currentHour = dayjs().hour();

    // Iterate through time blocks
    var timeBlocks = document.querySelectorAll('.time-block');
    timeBlocks.forEach(function (timeBlock) {
      // Extract the hour from the time block's ID
      var blockHour = parseInt(timeBlock.id.split('-')[1]);

      // Compare the block hour with the current hour
      if (blockHour < currentHour) {
        timeBlock.classList.add('past');
        timeBlock.classList.remove('present', 'future');
      } else if (blockHour === currentHour) {
        timeBlock.classList.add('present');
        timeBlock.classList.remove('past', 'future');
      } else {
        timeBlock.classList.add('future');
        timeBlock.classList.remove('past', 'present');
      }
    }); 
  }

  // Call the timeblockColoring function
  timeblockColoring();

  function saveClick(event) {
    var timeBlock = event.target.previousElementSibling
    console.log(timeBlock)
    if (timeBlock) {
      var hourId = timeBlock.id;
      var userInput = timeBlock.value;

      // Save to local storage using the hourId as the key
      localStorage.setItem(hourId, userInput);
    }
  }

  function renderToDo() {

    for (var i = 9; i <= 17; i++) {

    
    var hourId = 'hour-' + i;
    console.log(hourId)
    
    var div = document.getElementById(hourId)
    var textarea = div.children[1]

     // Retrieve saved to-do from local storage using the hourId as the key
    var savedToDo = localStorage.getItem(hourId);

     // Update the textarea with the retrieved to-do
     if (savedToDo) {
       textarea.value = savedToDo;
     }
    }
  }

  // Add click event listener to all save buttons
  var saveButtons = document.querySelectorAll('.saveBtn');
  saveButtons.forEach(function (event) {
    event.addEventListener('click', saveClick);
  });
});


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

