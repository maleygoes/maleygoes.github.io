/* Fills in the course header and the dropbox link from config.js.
   Each course page sets window.UPLOAD_COURSE before loading this.
   Nothing here needs editing between semesters. */

(function () {
	var code = window.UPLOAD_COURSE;
	var cfg  = window.UPLOAD_CONFIG;
	if (!cfg || !cfg.courses[code]) { return; }

	var course = cfg.courses[code];
	var btn    = document.getElementById("upload-button");
	var alerts = document.getElementById("upload-alerts");

	document.title = course.name + " Exam Upload | Sean P. Maley";
	document.getElementById("course-name").textContent = course.name + " " + course.title;
	document.getElementById("course-term").textContent = cfg.semester + " exam work upload";

	function warn(headline, body) {
		var box = document.createElement("div");
		box.className = "upload-alert";
		var h = document.createElement("strong");
		h.textContent = headline;
		box.appendChild(h);
		box.appendChild(document.createTextNode(body));
		alerts.appendChild(box);
	}

	// Link not filled in yet. Fail loudly here rather than in the exam room.
	if (!course.launch || course.launch.indexOf("PASTE_") === 0) {
		btn.className += " is-disabled";
		btn.removeAttribute("href");
		btn.textContent = "Upload link not set yet";
		warn(
			"This link is not set up yet.",
			"Go to Brightspace, open the exam in OHM, and add your work there. Let me know you hit this page."
		);
		return;
	}

	btn.setAttribute("href", course.launch);

	// Past the expected life of this semester's course shell.
	if (cfg.goodThrough) {
		var expiry = new Date(cfg.goodThrough + "T23:59:59");
		if (!isNaN(expiry) && new Date() > expiry) {
			warn(
				"This link may be out of date.",
				"It points to the " + cfg.semester + " course. If the button takes you somewhere you cannot submit, go to Brightspace directly and open the exam work assignment in your current course."
			);
		}
	}
})();
