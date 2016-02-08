 var doc = DocumentApp.create("CAOAPR Annual Report Feedback-" + program); 
  var body = doc.getBody(); 
  body.appendParagraph(reportContent); 
  doc.saveAndClose();  
  var newReport = doc.getAs("application/pdf"); 