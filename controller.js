// Fetch data, then feed data into callback function



//
$.getJSON("/data/communication.json", callback);

//
// Supporting code
//

// master callback
function callback(json) {
  createTitle(json.meta);
  createMain(json.data);
}

// create Title section
function createTitle(data) {
  $('.MunicipalBody').html(data.municipal_body);
  $('.DocumentTitle').html(data.title);
}

// create report section
function createMain(data) {
  for (let i = 0; i < data.length; i++) {
    const $reportItem = createReportItem(data[i]);
    $('.Report').append($reportItem);
  }
}

// create individual items on report
function createReportItem(data) {
  const $reportItem = $("<div class='ReportItem'></div>");
  const $label = $("<div class='ReportItem__Label'>" + data.label + ": </div>");
  const $value = $("<div class='ReportItem__Value'>" + data.value + "</div>");

  $reportItem.append($label, $value);

  return $reportItem;
}
