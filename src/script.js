// // GET DATA FROM TABLE TO DETERMINE IF TO SHOW TABLE OR NOT
// function showOrHideTable() {
//   //gets table
//   let ourTable = document.getElementById("myTable");
//   //gets rows of table
//   let rowLength = ourTable.rows.length;
//   // condition to display table or not based off rows length
//   if (rowLength <= 1) {
//     document.getElementById("defaultContainer").style.display = "block";
//   } else {
//     document.getElementById("tableContainer").style.display = "block";
//   }
// }

// // call the show or hide function
// showOrHideTable();

// // INSERT FORM DATA INTO TABLE AS ROWS
// function insertData() {
//   // get form data value using id
//   let campaignName = document.getElementById("campaignName").value;
//   let campaignStartDate = document.getElementById("campaignStartDate").value;
//   let campaignType = document.getElementById("campaignType").value;

//   // get campaignStopDate and today's date
//   let campaignStopDate = document.getElementById("campaignStopDate").value;
//   campaignStopDate = new Date(campaignStopDate);
//   let today = new Date();
//   let campaignStatus = null;
//   let campaignColor = null;

//   // if campaignStopDate is before today -> completed
//   // if campaignStopDate is today or beyond -> ongoing

//   if (today > campaignStopDate) {
//     // campaignStopDate is before today -> completed
//     campaignStatus = "Completed";
//     campaignColor = "green";
//   } else {
//     // campaignStopDate is today or beyond -> ongoing
//     campaignStatus = "Ongoing";
//     campaignColor = "yellow";
//   }

//   // customize the table row content
//   let myHtmlContent = `<td><a href="#"><input class="radio" type="radio">${campaignName} - ${campaignStartDate}</a></td><td>${campaignType}</td><td class="${campaignColor}">${campaignStatus}</td>`;

//   // inserts the row content into the table
//   let tableRef = document
//     .getElementById("myTable")
//     .getElementsByTagName("tbody")[0];
//   let newRow = tableRef.insertRow(tableRef.rows.length);
//   newRow.innerHTML = myHtmlContent;

//   // show the table and hide the default page/form
//   document.getElementById("tableContainer").style.display = "block";
//   document.getElementById("defaultContainer").style.display = "none";
//   document.getElementById("formContainer").style.display = "none";

//   // clear previous input
//   document.getElementById("campaignName").value = null;
//   document.getElementById("campaignStartDate").value = null;
//   document.getElementById("campaignType").value = null;
// }

// function showForm() {
//   // shows the form div and hides everything else
//   document.getElementById("defaultContainer").style.display = "none";
//   document.getElementById("tableContainer").style.display = "none";
//   document.getElementById("formContainer").style.display = "block";
// }

// function hideForm() {
//   // decide if to show table or not
//   showOrHideTable();
//   // hides the form
//   document.getElementById("formContainer").style.display = "none";
// }

// // let failed = document.getElementsByClassName('red');
// // failed[0].style.color = "red";
// // failed[1].style.color = "red";

// // let ongoing = document.getElementsByClassName('yellow');
// // ongoing[0].style.color = "yellow";
// // ongoing[1].style.color = "yellow";

// // let success = document.getElementsByClassName('green');
// // success[0].style.color = "green";
// // success[1].style.color = "green";

window.onload = function () {
  info();
};

var data = [
  // { CAMPAIGN_NAME: "Kano", TYPE: "Routine", STATUS: "Completed" },
  // { CAMPAIGN_NAME: "Borno", TYPE: "Covid", STATUS: "Ongoing" },
];

function savedata() {
  //check if the form has the data we require

  const cname = document.getElementById("cname").value;
  const ctype = document.getElementById("ctype").value;
  const cduration_start_date = document.getElementById(
    "cduration_start_date"
  ).value;
  const cduration_end_date =
    document.getElementById("cduration_end_date").value;
  const cstate = document.getElementById("cstate").value;
  const clga = document.getElementById("clga").value;
  const cward = document.getElementById("cward").value;
  const cstrategy = document.getElementById("cstrategy").value;

  // if (cname == "" && ctype == "" && cduration_start_date == "" && cduration_end_date == "") {
  //   alert('This field is required');
  // }

  let startDate = new Date(cduration_start_date).getMonth();
  let endDate = new Date(cduration_end_date).getMonth();
  let status;
  let statusColor;
  let today = new Date().getMonth();
  console.log("today date", today - startDate);

  if (startDate < today) {
    status = "Completed";
    statusColor = "text-success";
  } else if (startDate >= 2 && endDate <= 8) {
    status = "Ongoing";
    statusColor = "text-warning";
  } else {
    status = "failed";
    statusColor = "text-danger";
  }
  //comparisons should be made between start date and current date or end date and current date
  //add getcurrent function
  let dataobject = {
    campaign_name: cname,
    type: ctype,
    status: status,
    startDate: cduration_start_date,
    endDate: cduration_end_date,
    state: cstate,
    ward: cward,
    strategy: cstrategy,
    statusColor: statusColor,
  };

  data.push(dataobject);
  
  info();

  console.log("dataobject", dataobject);
}
//call this function when ever the page loads
function info() {
  //check if data is available
  if (data.length <= 0) {
    // document.getElementById("emptydata").style.display = "block";
    document.getElementById("data_available").style.display = "none";
  } else {
    document.getElementById("emptydata").style.display = "none";
    document.getElementById("data_available").style.display = "block";
  }
  var table = "";

  for (var i in data) {
    table += "<tr>";
    table +=
      `<td><a href='#' onclick='dDisplay(${i})'><input class='radio' type='radio'/>` +
      data[i].campaign_name +
      " " +
      data[i]?.startDate +
      "</td></a>" +
      "<td>" +
      data[i].type +
      "</td>" +
      `<td class='${data[i].statusColor}'>` +
      data[i].status;
    ("</td>");
    table += "</tr>";
  }

  document.getElementById("info").innerHTML = table;
}

function dDisplay(i) {
  console.log("id display ", i);
}
