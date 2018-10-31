function loadIssue() {
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  for(var i=0, i<issues.length,i+++) {
    var result = template(issue);
    document.getElementsByTagName("main")[0].innerHTML += result;
  }
}
