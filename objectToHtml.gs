// シートにメニューを追加
function addMenu() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet(),
      entries = [
        {
          name :"実行",
          functionName : "doExportFile"
        }
      ];
  sheet.addMenu("データファイル出力", entries);
}

// data内の関数を実行してファイルをエクスポート
function doExportFile() {
  
  var html = HtmlService.createTemplateFromFile('data');
  var folder_id = 'フォルダID';
  var drive = DriveApp.getFolderById(folder_id);

  drive.createFile('data.html', html.evaluate().getContent(), "text/plain");

}