var bio = {
    "name": "Isaac Parker",
    "role": "Designer/Developer",
    "contacts": {
        "mobile": "347-485-1929",
        "email": "isaac.studio@gmail.com",
        "github": "isaacparker.github.io",
        "twitter": "nothing yet",
        "blog": "nothing yet",
        "location": "New York"
    },
    "welcomeMessage": "Hello my name is",
    "skills": [
        "awesomeness", "delivering things", "cryogenic sleep"
    ],
    "pic": "images/iparker.jpg"
};

var education = {
    "schools": [{
        "name": "University of Hawaii",
        "location": "Honolulu, HI",
        "degree": "MFA",
        "major": "Fine Art",
        "dates": "2005-2008",
        "url": "http://www.uh.edu"
    }, {
        "name": "University of Delaware",
        "location": "Newark, DE",
        "degree": "BA",
        "major": "Photography",
        "dates": "1999-2003",
        "url": "http://www.ud.edu"

    }],

    "onlineCourses": [{
        "title": "Git",
        "school": "Udacity",
        "dates": "2015",
        "url": "www.udacity.com"
    }, {
        "title": "Javascript",
        "school": "Udacity",
        "dates": "2015",
        "url": "www.udacity.com"
    }]
};

var projects = {
    "UX": [{
        "title": "Uncle Fritz",
        "date": "2014",
        "description": "Uncle Fritz is a drawing app for Android, inspired by a childhood game where you write a sentence on a sheet of paper, then pass it on to your friend who has to draw what you just wrote. A friend who had the idea started the coding and I am working on the identity, user experience, and help screen illustrations. This app is currently in development.",
        "images": ["images/spacer.gif", "images/spacer.gif"]
    }, {
        "title": "SlideCam",
        "date": "2014",
        "description": "The SlideCam allows users to easily create complex collages using their own imagery. Essentially you can choose from a variety of geometric pattern overlays to slice through multiple photos from your gallery or camara. The idea for the app was inspired by both Bauhaus graphic design and recent glitch art.",
        "images": ["images/spacer.gif", "images/spacer.gif"]
    }],

    "Web Sites": [{
        "title": "dotask",
        "date": "2014",
        "description": "Dotask is a personal project where I created a to-do list application as a way to learn how to code web applications. The functionality of dotask uses JavaScript alone, without using any third party libraries like jQuery. In this project I got more comfortable with manipulating and traversing the DOM and adding event handlers to page elements. Check it out on GitHub isaacparker.github.io/dotask",
        "images": ["images/spacer.gif", "images/spacer.gif"]
    }, {
        "title": "JC Rolfing",
        "date": "2014",
        "description": "I redesigned Jamie's site to have a bold, welcoming first impression. The concept was to present his essential information in front of a full-page background images that varies from page to page. The minimal design was perfectly suitable to represent Jamie's level of service and qualifications in the field of rolfing.",
        "images": ["images/spacer.gif", "images/spacer.gif"]
    }]

};

var work = {
    "jobs": [{
        "employer": "Crozier Fine Arts",
        "title": "Art Handler",
        "dates": "2014-present",
        "location": "New York, NY",
        "description": "nothing"
    }, {
        "employer": "Brooklyn Museum",
        "title": "Art Handler",
        "dates": "2014",
        "location": "Brooklyn, NY",
        "description": "bla bla."
    }]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts.mobile);
var formattedPicture = HTMLbioPic.replace("%data%", bio.skills.pic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#footerContacts").append(formattedContact);
$("#main").append(formattedPicture);

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

displayWork();