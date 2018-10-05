// Determine which report needs to be loaded from URL
// query parameters.
// i.e. localhost:8000/report.html?report=transportation means
// to get the report data from transportation.json
// Defaults to communication.json.

const parameters = window.location.search;
const reportName = parameters.split("=")[1] || "communication";

// Fetch data, then feed data into callback function
const reportPath = "/data/" + reportName + ".json";
$.getJSON(reportPath, createReport);

//
// Supporting code
//

// master callback
function createReport(json) {
  createTitle(json.meta);
  createMain(json.data);
}

// create Title section
function createTitle(metadata) {
  $('.Meta__Government').html(metadata.municipal_body);
  $('.Meta__Title').html(metadata.title);
}

// create data section of report
function createMain(rows) {
  for (let i = 0; i < rows.length; i++) {
    const $reportRow = createRow(rows[i]);
    $('.Report').append($reportRow);
  }
}

// create individual items on report
function createRow(data) {
  const $reportRow = $("<div class='Report__Row row'></div>");
  const $label = $("<div class='Report__Label col-6'>" + data.label + ": </div>");
  const $value = $("<div class='Report__Value col-6'><span>" + data.value + "<span></div>");

  $reportRow.append($label, $value);

  return $reportRow;
}
