// BEGIN BIO
var bio = {
    "name": "Isaac Parker",
    "role": "Designer/Developer",
    "contacts": {
        "mobile": "347-485-1929",
        "email": "isaac.studio@gmail.com",
        "github": "isaacparker.github.io",
        "blog": "parker-rectangulars.tumblr.com",
        "location": "Brooklyn, NY"
    },
    "welcomeMessage": "Plan your work, then work your plan",
    "skills": [
        "Web Design", "UX Design", "Motion Graphics", "Graphic Design", "Illustration"
    ],
    "pic": "images/iparker.png"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName)


    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedBlog)
        .append(formattedLocation);

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedBlog)
        .append(formattedLocation);

    var formattedPicture = HTMLbioPic.replace("%data%", bio.pic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#message").append(formattedWelcomeMsg);


    $("#picSkills").append(formattedPicture)

    if (bio.skills.length > 0) {
        $("#picSkills").append(HTMLskillsStart);
        // var formattedSkill = HTMLskills.replace("%data%", skill);
        //  $("#skills").append(formattedSkill);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }
};
// END BIO
// BEGIN WORK
var work = {
    "jobs": [{
        "employer": "Freelance Designer",
        "title": "Graphic/UX/Web Designer",
        "dates": "Sep 2011 - Present",
        "location": "New York, NY",
        "description": "For the past three years I have been doing freelance graphic design while building out my portfolio with many self directed projects. My current focus is on Web Development and UX Design."
    }, {
        "employer": "Freelance Art Handler",
        "title": "Art Handler",
        "dates": "Sep 2009 - Jan 2015",
        "location": "New York, NY",
        "description": "I have been lucky to handle and install some of the most valuable art in the world at museums, auction houses, galleries, and private residences throughout the city"
    }, {
        "employer": "Propoint Graphics",
        "title": "Presentation Designer",
        "dates": "Jun 2011 - Sep 2011",
        "location": "New York, NY",
        "description": "At Propoint Graphics I specialized in simple, long form video presentations using the latest motion graphics techniques.  As a temporary contractor I successfully completed five projects at their main office headquarters across from the NY Times building."
    }]
};

work.displayWork = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
};
// END WORK

// BEGIN PROJECTS
var projects = {
    "projects": [{
        "title": "Uncle Fritz",
        "date": "2014",
        "description": "Uncle Fritz is a drawing app for Android, inspired by a childhood game where you write a sentence on a sheet of paper, then pass it on to your friend who has to draw what you just wrote. A friend who had the idea started the coding and I am working on the identity, user experience, and help screen illustrations. This app is currently in development.",
        "images": ["images/UF_inhand.jpg"]
    }, {
        "title": "SlideCam",
        "date": "2014",
        "description": "The SlideCam allows users to easily create complex collages using their own imagery. Essentially you can choose from a variety of geometric pattern overlays to slice through multiple photos from your gallery or camara. The idea for the app was inspired by both Bauhaus graphic design and recent glitch art.",
        "images": ["images/app_slidecam_hand.jpg"]
    }, {
        "title": "dotask",
        "date": "2014",
        "description": "Dotask is a personal project where I created a to-do list application as a way to learn how to code web applications. The functionality of dotask uses JavaScript alone, without using any third party libraries like jQuery. In this project I got more comfortable with manipulating and traversing the DOM and adding event handlers to page elements. Check it out on GitHub isaacparker.github.io/dotask",
        "images": ["images/doatask_scrn.png"]
    }, {
        "title": "JC Rolfing",
        "date": "2014",
        "description": "I redesigned Jamie's site to have a bold, welcoming first impression. The concept was to present his essential information in front of a full-page background images that varies from page to page. The minimal design was perfectly suitable to represent Jamie's level of service and qualifications in the field of rolfing.",
        "images": ["images/JC_thumb.png"]

    }]
};

projects.displayProjects = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var formattedInfo = formattedTitle + formattedDates + formattedDescription;
        $(".project-entry:last").append(formattedProjectImage);
        $(".project-entry:last").append(formattedInfo);
    }
};

// END PROJECTS

// BEING EDUCATION
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

education.display = function(){
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace('#', school.url);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last a").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolMajor);

});

    if (education.onlineCourses.length > 0) {
        $(".onlineCourses-entry").append(HTMLonlineStart);
        education.onlineCourses.forEach(function (course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);

            $(".onlineCourses-entry:last").append(formattedOnlineTitle);
            $(".onlineCourses-entry:last").append(formattedOnlineSchool);
            $(".onlineCourses-entry:last").append(formattedOnlineDates);

        });
    }
};
// END EDUCATION



$("#mapDiv").append(googleMap);

// FUNCTION CALLS
bio.display();
work.displayWork();
projects.displayProjects();
education.display();
// console.log(locationizer(work));



// $(document).click(function(loc) {
//     var x = loc.pageX;
//     var y = loc.pageY;
//     logClicks(x, y);
// });

// function locationizer(work_obj) {
//     var locationArray = [];
//     for (job in work_obj.jobs) {
//         var newLocation = work_obj.jobs[job].location;
//         locationArray.push(newLocation);

//     }
//     return locationArray;
//     //return array of locations in work
//     //might use .push() array method to add values to array

// }

// $("#main").append(internationalizeButton);


// function inName(oldName) {
//     var finName = "oldName";
//     var names = oldName.split(" ");
//     names[1] = names[1].toUpperCase();
//     names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
//     finalName = names.join("");
//     return finalName;

// };

// function nameChanger(oldName) {
//     var finalName = oldName;
//     var names = oldName.split(" ");
//     names[1] = names[1].toUpperCase();
//     names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
//     finalName = names.join(" ");
//     return finalName;
// }
