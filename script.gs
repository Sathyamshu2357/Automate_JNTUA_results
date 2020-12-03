function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Optionss')
      .addItem("Make It Proper", 'makeItProper')
      .addToUi();
}

function getClear(s) {
  s = s.toString();
  var x = [s.substring(16,27), s.substring(47,s.length)]
  return x;
}
  

function makeItProper() {
  var ss  = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('impropersheet');
  var news = ss.insertSheet('propersheet')
  var data = sheet.getDataRange().getValues();
   
  for(var i=0; i<data.length; ) {
    var line = getClear(data[i][0])
    var ls = []
    for(var j=i+3; j<i+12; j++) {
      for(var k=2; k<8; k++) {
        ls.push(data[j][k]);
      }
    }
      
    news.appendRow(line.concat(ls));
    i = i +12;
  }
  
}