// ============================================================
// PASTE THIS INTO GOOGLE APPS SCRIPT
// ============================================================
//
// 1. Open: https://docs.google.com/spreadsheets/d/1TsG76B-Zc7HQ2D88vHrIDISrodlYHByveQgy1YbPgUY/edit
// 2. Click Extensions → Apps Script
// 3. Delete any code and paste everything below
// 4. Click Deploy → Manage deployments → Edit (pencil icon)
//    → Version: New version → Deploy
// ============================================================

function doGet() {
    return ContentService
        .createTextOutput(JSON.stringify({ result: "ok", message: "Newsletter webhook is live" }))
        .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([data.email, new Date().toISOString()]);
    return ContentService
        .createTextOutput(JSON.stringify({ result: "success" }))
        .setMimeType(ContentService.MimeType.JSON);
}
