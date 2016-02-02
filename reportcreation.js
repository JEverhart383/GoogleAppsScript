function myFunction(e) {
 
  function checkUndefined(something){
    if( something === undefined){
      something = "N/A"; 
    }
  }
  
  function checkProgram(under, grad) {
    var program; 
    if (under !== undefined){
    program = under; 
    } else if (grad !== undefined){
      program = grad; 
    } else {
      program = "Not Specified"; 
    } 
    return program; 
  }
  
  
  var timestamp = e.values[0];
  
  //Program and Review Cycle Info
  var department = checkUndefined(e.values[1]); 
 
  
  var undergradProgram = e.values[2];
  var gradProgram = e.values[3];
  
  var program = checkProgram(undergradProgram, gradProgram); 
  
  
  var reportYear = checkUndefined(e.values[4]);
  var reviewerEmail = checkUndefined(e.values[5]);
  
  //Misson
  var misson = checkUndefined(e.values[6]); 
  var commentsMission = checkUndefined(e.values[7]);
  
  //SLO
  var slo = checkUndefined(e.values[8]);
  var commentsSLO = checkUndefined(e.values[9]);
  
  //Program Outcomes
  var program = checkUndefined(e.values[10]);
  var commentsProgram = checkUndefined(e.values[11]);
  
  //Measures 
  var measures = checkUndefined(e.values[12]); 
  var commentsMeasures = checkUndefined(e.values[13]);
  
  //Targets
  var targets = checkUndefined(e.values[14])
  var commentsTargets = checkUndefined(e.values[15]);
  
  //Findings
  var findings = checkUndefined(e.values[16]); 
  var commentsFindings = checkUndefined(e.values[17]); 
  
  //Action Plans
  var actionPlan = checkUndefined(e.values[18]); 
  var commentsActionPlan = checkUndefined(e.values[19]); 
  
  
  //Action Plan Focuse
 var actionPlanFocus = checkUndefined(e.values[20]);  
 
  
 var reportContent = "CAOAPR Annual Report Feedback-" 
 + program + "\n\n" + 
   "Completed on: " + timestamp 
   + "\n\n" + "Academic Department: " + department 
   + "\n\n" + "Academic Assessment Report Year: " + reportYear 
   + "\n\n" + "Misson: " + misson
   + "\n\n" + "Reviewer Comments on Mission: " + commentsMission 
   + "\n\n" + "Student Learning Outcomes: " + slo 
   + "\n\n" + "Reviewer Comments on SLO: " + commentsSLO 
   + "\n\n" + "Program: " + program
   + "\n\n" + "Reviewer Comments on Program: " + commentsProgram 
   + "\n\n" + "Measures: " + measures   
   + "\n\n" + "Reviewer Comments on Measures: " + commentsMeasures 
   + "\n\n" + "Targets: " + targets 
   + "\n\n" + "Reviewer Comments on Targets: " + commentsTargets 
   + "\n\n" + "Findings: " + findings 
   + "\n\n" + "Reviewer Comments on Findings: " + commentsFindings 
   + "\n\n" + "Action Plan: " + actionPlan
   + "\n\n" + "Reviewer Comments on Action Plan: " + commentsActionPlan
   + "\n\n" + "Action Plan Focus: " + actionPlanFocus + "\n" ; 
  
  var newReport = DriveApp.createFile("CAOAPR Annual Report Feedback-" + program, reportContent, MimeType.PLAIN_TEXT);

  
  
  MailApp.sendEmail(reviewerEmail, "CAOAPR Report Submitted", "Please find attached a plain text copy of your most recently submitted CAOAPR Report.", {
    name: "CAOAPR Report", 
    attachments: newReport
  }); 
  
}
