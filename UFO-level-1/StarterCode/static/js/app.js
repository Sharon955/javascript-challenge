// from data.js
var tableData = data;

// YOUR CODE HERE!
// Create initial table with all data
var tbody = d3.select("tbody")

data.forEach((datapoint) => {
    var row = tbody.append("tr");
    Object.entries(datapoint).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn"); 

// Select the form
var form = d3.select("#filters");    //may need to change this

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value"); // may need to change this

  console.log(inputValue);

  var filteredData = data.filter(data => data.datetime === inputValue);
  console.log(filteredData);

  //Remove initial table when change filter
  tbody.selectAll("tr").remove();


  //update table with selected date
  filteredData.forEach((dataselected) => {
    var row = tbody.append("tr");
    Object.entries(dataselected).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  d3.event.preventDefault();
};
