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

