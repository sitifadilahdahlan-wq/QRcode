/* KODE BACKEND GOOGLE APPS SCRIPT (Code.gs) */

function doGet(e) {
  // Jika diakses langsung via browser, tampilkan UI HTML
    return HtmlService.createHtmlOutputFromFile('index')
          .setTitle('QR Scanner Pro')
                .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
                      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
                      }

                      // Handler untuk integrasi Standalone Web App URL (menggunakan POST)
                      function doPost(e) {
                        try {
                            var params = JSON.parse(e.postData.contents);
                                var qrData = params.qrData;
                                    var timestamp = params.timestamp || new Date();
                                        
                                            var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ScanData") || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
                                                sheet.appendRow([timestamp, qrData]);
                                                    
                                                        return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
                                                                                 .setMimeType(ContentService.MimeType.JSON);
                                                                                   } catch (error) {
                                                                                       return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
                                                                                                                .setMimeType(ContentService.MimeType.JSON);
                                                                                                                  }
                                                                                                                  }

                                                                                                                  // Handler untuk integrasi Native Apps Script Container (via google.script.run)
                                                                                                                  function saveScanToSheet(qrData) {
                                                                                                                    try {
                                                                                                                        var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ScanData") || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
                                                                                                                            sheet.appendRow([new Date(), qrData]);
                                                                                                                                return { success: true };
                                                                                                                                  } catch (error) {
                                                                                                                                      return { success: false, error: error.toString() };
                                                                                                                                        }
                                                                                                                                        }
                                                                                                                                                                    
