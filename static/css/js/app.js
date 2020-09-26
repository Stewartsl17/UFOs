// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

    // Building a new function
    function buildTable(data) {
        // Clears out data table
        tbody.html("");
        // Loop through each row of the data
        data.forEach((dataRow) => {
            // Append a row to the table body
            let row = tbody.append("tr");
            // add code to loop through each field
            Object.values(dataRow).forEach((val) => {
                // create a variable to append data to a table
                let cell = row.append("td");
                // add the values
                cell.text(val);
            });
        });
    }

    // Building a new function for adding a button and reacting to click
    function handleClick(){
        // create a variable to hold date data
        let date = d3.select("#datetime").property("value");
        let filteredData = tableData;

        // Checking to see if date was entered
        if (date) {
            // filter the data to show data that matches date that was used
            filteredData = filteredData.filter(row => row.datetime === date);
        };

        // Rebuild the table using the filtered data
        // @NOTE: If no date was entered, then filteredData will
        // just be the original tableData.
        buildTable(filteredData);
    }
  
    // Attach an event to listen for the click
    d3.selectAll("#filter-btn").on("click", handleClick);

    // Build the table when the page loads
    buildTable(tableData);
