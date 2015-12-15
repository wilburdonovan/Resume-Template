// THE ME OBJECT
var bio = {
    "name": "Wilbur Donovan",
    "role": "Computer Science Student",
    "contacts": {
        "email": "dev@example.com",
        "mobile": "777444125000",
        "github": "github.com/developer",
        "twitter": "@webdeveloper",
        "facebook": "developerX",
        "location": "Townsville, Australia"
    },
    "welcomeMessage": "Welcome to my portfolio. Please feel free to have a look at my work.",
    "skills": ["Front End Web Development", "Object-oriented programming", "Software Development", "Business Analysis"],
    "biopic": "images/fry.jpg",
    "display": function() {
        var headStr = "";
        headStr += "<h1 class='name'>" + this.name + "</h1> ";
        headStr += " <span class='white-text'>" + this.role + "</span><hr id='hr1'/>";
        for (var i in this.contacts) {
            headStr += "<div class='col-md-2 contact-entry'><span class='flex-item orange-text'>" + i + '</span>: ' + "<span class='flex-item white-text'>" + this.contacts[i] + "</span></div>";
        }
        headStr += "<div class='col-md-12'><hr id='hr2'/></div>";
        headStr += "<div class='col-md-3'><img src='" + this.biopic + "' alt='A pic of me' class='biopic'/></div>";
        headStr += "<div class='col-md-9 welcome-message'>" + this.welcomeMessage + "</div>";
        $('#header').prepend(headStr);
        // Post Skills to WebPage
        if (this.skills !== undefined) {
            $("#header").append(HTMLskillsStart);
            var skillsStr = '';
            for (var i = 0; i < this.skills.length; i++) {
                skillsStr += "<li class='flex-item'><span class='white-text'>" + this.skills[i] + "</span></li>";
            }
            $("#skills").html(skillsStr);
        }
        var footStr = '';
        for (var i in this.contacts) {
            footStr += "<div class='col-md-2 contact-entry'><span class='flex-item orange-text'>" + i + '</span>: ' + "<span class='flex-item white-text'>" + this.contacts[i] + "</span></div>";
        }
        $("#footerContacts").append(footStr);
    }
};

// Education Object
var education = {
    "schools": [{
        "name": "USQ",
        "location": "Toowoomba, Australia",
        "degree": "Bachelor of IT",
        "majors": "Applied Computer Science",
        "dates": 2017,
        "url": "www.usq.edu.au"
    }, {
        "name": "USQ",
        "location": "Toowoomba, Australia",
        "degree": "Bachelor of IT",
        "majors": "Applied Computer Science",
        "dates": 2017,
        "url": "www.usq.edu.au"
    }, {
        "name": "USQ",
        "location": "Toowoomba, Australia",
        "degree": "Bachelor of IT",
        "majors": "Applied Computer Science",
        "dates": 2017,
        "url": "www.usq.edu.au"
    }, {
        "name": "USQ",
        "location": "Toowoomba, Australia",
        "degree": "Bachelor of IT",
        "majors": "Applied Computer Science",
        "dates": 2017,
        "url": "www.usq.edu.au"
    }],
    "onlineCourses": [{
        "title": "Waste of time",
        "school": "Waste of time",
        "date": 2015,
        "url": "Waste of time"
    }],
    "display": function() {
        var edStr = '';
        for (var i in this.schools) {
            edStr += '<div class="education-entry col-md-3">';
            edStr += '<a href="#">' + this.schools[i].degree + ' - ' + this.schools[i].majors + '</a>';
            edStr += '<div class="format-school">' + this.schools[i].name + '</div><br>';
            edStr += '<div class="date-text">' + this.schools[i].dates + '</div>';
            edStr += '</div>';
        }
        $("#education").append(edStr);
    }
};

//Work Object
var work = {
    'jobs': [{
        "employer": "The Avengers",
        "title": "Fake Job 1",
        "location": "Undiscoverable",
        "dates": "2011-2015",
        "description": "The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog."
    }, {
        "employer": "S.H.I.E.L.D",
        "title": "Fake Job 2",
        "location": "Anywhere",
        "dates": "2005-2009",
        "description": "The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog."
    }]
};

// Projects Object
var projects = {
    "projects": [{
        "title": "Fake1",
        "dates": "2016-2017",
        "description": "fake project 1",
        "images": ["images/holder.gif"]
    }, {
        "title": "Fake2",
        "dates": "2014-2016",
        "description": "fake project 2",
        "images": ["images/holder.gif"]
    }, {
        "title": "Fake3",
        "dates": "2015-2016",
        "description": "fake project 3",
        "images": ["images/holder.gif"]
    }],
    "display": function() {
        var projectStr = '';
        for (var i in this.projects) {
            projectStr += '<div class="project-entry col-md-4">';
            projectStr += '<a href="#">' + this.projects[i].title + '</a>';
            projectStr += '<div class="date-text">' + this.projects[i].dates + '</div>';
            projectStr += '<p><br>' + this.projects[i].description + '</p>';
            projectStr += '<img src="' + this.projects[i].images[0] + '">';
            projectStr += '</div>';
        }
        $("#projects").append(projectStr);
    }
};

// Post Work Data to WebPage
work.display = function() {
    var workStr = '';
    for (var i in work.jobs) {
        workStr += '<div class="work-entry">';
        workStr += '<a href="#">' + work.jobs[i].employer + ' - ' + work.jobs[i].title + '</a>';
        workStr += '<div class="date-text">' + work.jobs[i].dates + '</div>';
        workStr += '<p><br>' + work.jobs[i].description + '</p>';
        workStr += '</div>';
    }
    $("#workExperience").append(workStr);
};

/*
 * Activity to Internationalise name from Intro to JS
 * Leaving function in but not tying it to my name
 * Works only in console
 */
// Append Button for internationalise name
$("#main").append("<button id='intButton'>Click</button>");
// function for internationalise name
function intName(name) {
    var tempArr = name.split(' ');
    for (var i in tempArr) {
        tempArr[i] = tempArr[i].slice(0, 1).toUpperCase() + tempArr[i].slice(1, tempArr[i].length + 1);
    }
    tempArr[tempArr.length - 1] = tempArr[tempArr.length - 1].toUpperCase();
    var newName = tempArr.join(' ');
    return newName;
}
// Tie the internationalise function and button
$('#intButton').on('click', function() {
    console.log(intName('albus percival brian wulfric dumbledore'));
});

// Updating display
projects.display();
bio.display();
education.display();
work.display();

// Map
$("#mapDiv").append(googleMap);