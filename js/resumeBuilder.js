
// $("#main").append("Ted")

// var firstName = "Ted"
// var age = 38

// var awesomeThoughts = "I am Ted and I am AWESOME!"
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")
// $("#main").append(funThoughts);

var name = "Ted Riss";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#role").append(formattedRole);

var bio = {
  "name" : "Ted Riss",
  "role" : "Web Developer",

  "contacts": {
  "mobile" : "203-867-5309",
  "email" : "ted@example.com",
  "github" : "trhubwork",
  "twitter" : "@trexample",
  "blog" : "trblogyglob",
  "locations" : "Beach or slopes"
},

"welcomeMessage" : "Welcome to my resume.  I'm glad you decided to read it.  Bug OFF!",
"skills" : [
  "javascript", "python", "eating spam", "writing letters"
],
"bioPic": "images/fry.jpg"
}
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedgithub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
$("#topContacts").append(formattedBlog);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.locations);
$("#topContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#topContacts").prepend(formattedBioPic);

var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#topContacts").append(formattedWelcomeMsg);


if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);

}


var work = {
  "jobs": [
    {
      "employer": "Breckline Capital",
      "title": "Managing Director",
      "location": "Denver, CO",
      "dates": "Setptember 2012 - Present",
      "description": "Oversees equity research and portfolio advisory businesses."
    },
    {
      "employer": "ZKC",
      "title": "Equity Analyst",
      "location": "Old Greenwich, CT",
      "dates": "January 2011 - August 2012",
      "description": "Provided equity research on companies in the energy, mining, real estate, resort and transportation industries."
    },
    {
      "employer": "John F. Dillon & Co",
      "title": "Projects / Chartering",
      "location": "Stamford, CT",
      "dates": "December 2008 - November 2010",
      "description": "Oversaw the development of the investment strategy and made recommendations to upper management on how to launch fund.  Developed and implemented marketing plan for the competitive Panamax-Supramax trading desk."
    },
    {
      "employer": "Global Capital Finance",
      "title": "Associate",
      "location": "New York, NY. - Purchase, NY.",
      "dates": "July 2005 - January 2008",
      "description": "Sourced transaction opportunities, analyzed markets and competitive landscape.  Was involved in over $300 million in maritime transactions.  Led valuation process for over two billion worth of maritime and real estate invetment opportunities."
    }
  ]
};

function displayWork() {
for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);

}
}
displayWork();

var education = {
  "schools" : [
  {
      "schoolname" : "University of Kansas Graduate School of Business",
      "degree" : "Masters",
      "dates" : "August 2003 - May 2005",
      "location" : "Lawrence, KS",
      "major" : "Masters of Business Administration",

    },
  {
    "schoolname" : "University of Kansas",
    "degree" : "Bachelor of Arts",
    "dates" : "August 1996 - December 2000",
    "location" : "Lawrence, KS",
    "major" : "Political Science",
    }
  ]
};

function displayEducation() {
  for (edu in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[edu].schoolname);
    $(".education-entry:last").append(formattedschoolName);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
    $(".education-entry:last").append(formattedschoolDegree);
    var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
    $(".education-entry:last").append(formattedschoolDates);
    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
    $(".location-text:last").append(formattedschoolLocation);
    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
    $(".education-entry:last").append(formattedschoolMajor);

  }
}

displayEducation();





$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function locationizer(work_job) {
  var locationArray = [];

  for (job in work.jobs) {
    var newLocation = work.jobs[job].location;
    locationArray.push(newLocation);
  }
  return locationArray;
}
console.log(locationizer(work));


function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] +" "+name[1];
}
$('#main').append(internationalizeButton);

var projects = {
  "projects" : [
    {
      "title" : "Portfolio",
      "dates" : "March 2016",
      "description" : "A wonderful webpage to give clients and employers an opprotunity to examine my work.",
    }
  ]
};

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images) {
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
    }
  }
}
projects.display();

$("#mapDiv").append(googleMap);
