function set_random_source(probID) {
  var seed = Math.floor(Math.random() * 10000000000);
  set_source(probID, seed);
}

function set_source(probID, seed) {
  var prob = document.querySelector('wwproblem[probID="' + probID + '"]');
  var fr = prob.querySelector('iframe[probFrameID="embeded-window-' + probID + '"]');
  var wwroot = prob.getAttribute('wwroot');
  var probpath = prob.getAttribute('probpath');
  var course = prob.getAttribute('course');
  var userid = prob.getAttribute('userid');
  var password = prob.getAttribute('password')
  fr.src = wwroot + "/html2xml?&answersSubmitted=0&sourceFilePath=" + probpath + "&displayMode=MathJax&courseID=" + course + "&userID=" + userid + "&course_password=" + password + "&outputformat=simple&problemSeed=" + seed;  
}

var problems = document.getElementsByTagName('wwproblem');
for (var i = 0; i < problems.length; i++) {
  var prob = problems[i];

  var width = prob.getAttribute('width');
  var height = prob.getAttribute('height');
  var seed = prob.getAttribute('seed');
  var wwroot = prob.getAttribute('wwroot');
  var probpath = prob.getAttribute('probpath');
  var course = prob.getAttribute('course');
  var userid = prob.getAttribute('userid');
  var password = prob.getAttribute('password');

  prob.setAttribute("probID", i);
  var probID = prob.getAttribute('probid');

  // randomize button
  var rand = document.createElement('button');
  rand.style = "margin: 0px 10px 10px 0px; font-size: 12px";
  rand.appendChild(document.createTextNode('Randomize'));
  rand.setAttribute('onclick', 'set_random_source("' + probID + '")');
  prob.appendChild(rand);

  // reset button
  var res = document.createElement('button');
  res.style = "margin: 0px 10px 10px 0px; font-size: 12px";
  res.appendChild(document.createTextNode('Reset'));
  var seed = seed == null ? 123456789 : seed;
  res.setAttribute('onclick', 'set_source("' + probID + '", "' + seed + '")');
  prob.appendChild(res);

  prob.append(document.createElement('br'));

  // iframe
  var fr = document.createElement('iframe');
  fr.width =  width == null ? "100%" : width;
  fr.height = height == null ? 500: height;
  fr.setAttribute('probFrameID', "embeded-window-" + probID);
  fr.src = wwroot + "/html2xml?&answersSubmitted=0&sourceFilePath=" + probpath + "&displayMode=MathJax&courseID=" + course + "&userID=" + userid + "&course_password=" + password + "&outputformat=simple&problemSeed=" + seed;
  prob.appendChild(fr);

}