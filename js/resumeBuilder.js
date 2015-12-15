// THE ME OBJECT
var bio = {
  "firstName": "Wilbur",
  "lastName": "Donovan",
  "age": 24,
  "contact": {
    "email": "dev@example.com",
    "mobile": "777444125000",
    "github": "github.com/developer",
    "twitter": "@webdeveloper",
    "facebook": "developerX",
    "location": "Townsville, Australia"
  },
  "role": "Computer Science Student",
  "skills": ["Front End Web Development", "Object-oriented programming", "Software Development", "Business Analysis"],
  "greeting": "Welcome to my portfolio. Please feel free to have a look at my work.",
  "bioPic": "images/fry.jpg",
  "displayHeader": function () {
    var headStr = "";
    headStr += "<h1 class='name'>" + this.firstName + ' ' + this.lastName + "</h1> ";
    headStr += " <span class='white-text'>" + this.role + "</span><hr id='hr1'/>";
    for (var i in this.contact) {
      headStr += "<div class='col-md-2 contact-entry'><span class='flex-item orange-text'>" + i + '</span>: ' + "<span class='flex-item white-text'>" + this.contact[i] + "</span></div>";
    }
    headStr += "<div class='col-md-12'><hr id='hr2'/></div>";
    headStr += "<div class='col-md-3'><img src='" + this.bioPic + "' alt='A pic of me' class='biopic'/></div>"
    headStr += "<div class='col-md-9 welcome-message'>" + this.greeting + "</div>";
    $('#header').prepend(headStr);
    // Post Skills to WebPage
    if (this.skills != undefined) {
      $("#header").append(HTMLskillsStart);
      var skillsStr = '';
      for (var i = 0; i < this.skills.length; i++) {
        skillsStr += "<li class='flex-item'><span class='white-text'>" + this.skills[i] + "</span></li>";
      }
    $("#skills").html(skillsStr);
    }
  },
  "displayFooter": function () {
    var footStr = '';
    for (var i in this.contact) {
      footStr += "<div class='col-md-2 contact-entry'><span class='flex-item orange-text'>" + i + '</span>: ' + "<span class='flex-item white-text'>" + this.contact[i] + "</span></div>";
    }
    $("#footerContacts").append(footStr);
  }
};

// Education Object
var education = {
  "quals": [
    {
      "qualification": "Bachelor of IT (Applied Computer Science)",
      "institution": "University of Southern Qld",
      "completion": "In progress, due end 2017",
      "location": "Toowoomba, Australia"
    },
    {
      "qualification": "Bachelor of  Business (Accounting)",
      "institution": "Swinburne University of Technology",
      "completion": "2015",
      "location": "Melbourne, Australia"
    },
    {
      "qualification": "Diploma of Project Management",
      "institution": "Open Training & Education Network",
      "completion": "2012",
      "location": "Sydney, Australia"
    },
    {
      "qualification": "Front-End Web Development Nanodegree",
      "institution": "Udacity.com",
      "completion": "2016",
      "location": "Sydney, Australia"
    }
  ],
  "displayEd": function () {
    var edStr = '';
    for (var i in this.quals) {
      edStr += '<div class="education-entry col-md-3">';
      edStr += '<a href="#">' + this.quals[i].qualification + '</a>';
      edStr += '<div class="format-school">' + this.quals[i].institution + '</div><br>';
      edStr += '<div class="date-text">' + this.quals[i].completion + '</div>';
      edStr += '</div>';
    }
    $("#education").append(edStr);
  }
};

//Work Object
var work = {
  'jobs': [
  {
    "position": "Fake Job 1",
    "employer": "The Avengers",
    "dates": "2011-2015",
    "description": "The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog."
  },
  {
    "position": "Fake Job 2",
    "employer": "S.H.I.E.L.D",
    "dates": "2005-2009",
    "description": "The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog."
  }
  ]
};

// Projects Object
var projects = {
  "project": [
    {
      "name": "Fake1",
      "link": "github.com/fake1",
      "date": "2016-2017",
      "img": "images/holder.gif",
      "description": "fake project 1",
      "category": "Business Analysis"
    },
    {
      "name": "Fake3",
      "link": "github.com/fake3",
      "date": "2014-2016",
      "img": "images/holder.gif",
      "description": "fake project 3",
      "category": "Business Analysis"
    },
    {
      "name": "Fake2",
      "link": "github.com/fake2",
      "date": "2015-2016",
      "img": "images/holder.gif",
      "description": "fake project 2",
      "category": "Business Analysis"
    }
  ],
  "display": function () {
    var projectStr = '';
    for (var i in this.project) {
      projectStr += '<div class="project-entry col-md-4">';
      projectStr += '<a href="#">' + this.project[i].name + '</a>';
      projectStr += '<div class="date-text">' + this.project[i].date + '</div>';
      projectStr += '<p><br>' + this.project[i].description + '</p>';
      projectStr += '<img src="' + this.project[i].img + '">';
      projectStr += '</div>';
    }
    $("#projects").append(projectStr);
  }
};



// Post Work Data to WebPage
work.display = function () {
  var workStr = '';
  for (i in work.jobs) {
    workStr += '<div class="work-entry">';
    workStr += '<a href="#">' + work.jobs[i].employer + ' - ' + work.jobs[i].position + '</a>';
    workStr += '<div class="date-text">' + work.jobs[i].dates + '</div>';
    workStr += '<p><br>' + work.jobs[i].description + '</p>';
    workStr += '</div>';
  }
  $("#workExperience").append(workStr);
}

/*
 * Activity to Internationalise name from Intro to JS
 * Leaving function in but not tying it to my name
 * Works only in console
 */
// Append Button for internationalise name
$("#main").append("<button id='intButton'>Click</button>");
// function for internationalise name
function intName (name) {
  var tempArr = name.split(' ');
  for (var i in tempArr) {
    tempArr[i] = tempArr[i].slice(0,1).toUpperCase() + tempArr[i].slice(1,tempArr[i].length+1);
  }
  tempArr[tempArr.length-1] = tempArr[tempArr.length-1].toUpperCase();
  var newName = tempArr.join(' ');
  return newName;
};
// Tie the internationalise function and button
$('#intButton').on('click', function () {
  console.log(intName('albus percival brian wulfric dumbledore'));
});


// Updating display
projects.display();
bio.displayHeader();
bio.displayFooter();
education.displayEd();
work.display();

// Map
$("#mapDiv").append(googleMap);




