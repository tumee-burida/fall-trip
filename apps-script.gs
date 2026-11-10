/**
 * 가을동행 여행 신청 → 구글 시트 저장용 Apps Script
 *
 * 사용법: 구글 시트 > 확장 프로그램 > Apps Script 에 이 코드를 붙여넣고
 *        "웹 앱"으로 배포한 뒤, 나온 URL을 code.html 의 SHEET_WEBAPP_URL 에 넣으세요.
 */

const SPREADSHEET_ID = '1Ze5NlEpQyInmaJQ9rno7jhNmsAoDlgCMUJvxwdJJZnM';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const p = e.parameter;
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheets()[0];
    sheet.appendRow([
      Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss'),
      p.name || '',
      "'" + (p.phone || ''), // 앞자리 0이 사라지지 않도록 텍스트로 저장
      p.destination || '',
      p.schedule || '',
      p.people || '',
      p.memo || ''
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
