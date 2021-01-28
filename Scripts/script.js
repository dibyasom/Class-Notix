const courses = document.querySelectorAll(".course");
const eventField = document.querySelector(".qwiklogin");
const URL = {
  collaborate: [
    "https://learn.upes.ac.in/webapps/blackboard/content/contentWrapper.jsp?course_id=",
    "&displayName=Blackboard%20Collaborate%20Ultra%20UPES-CCE&href=%2Fwebapps%2Fblackboard%2Fexecute%2Fblti%2FlaunchPlacement%3Fblti_placement_id%3D_22_1%26course_id%3D",
    "%26mode%3Dview%26wrapped%3Dtrue",
  ],
};

const courseDetails = {
  algoL: {
    name: "Intelli algo. Lab",
    id: "_49412_1",
  },
  algo: {
    name: "Intelli algo.",
    id: "_49409_1",
  },
  netw: {
    name: "Data Comm",
    id: "_49407_1",
  },
  netwL: {
    name: "Data Comm Lab",
    id: "_49414_1",
  },
  ml: {
    name: "Intro to ML",
    id: "_49410_1",
  },
  mlL: {
    name: "Intro to ML Lab",
    id: "_49413_1",
  },
  oop: {
    name: "OOP",
    id: "_49408_1",
  },
  oopL: {
    name: "OOP Lab",
    id: "_49411_1",
  },
  OE_soc: {
    name: "Sociology",
    id: "_49151_1",
  },
  sepm: {
    name: "SEPM",
    id: "_49406_1",
  },
};

function genUrl(courseId) {
  let url = "";
  URL.collaborate.forEach((link, ind) => {
    if (ind !== URL.collaborate.length - 1) {
      url += link + courseId;
    } else {
      url += link;
      return;
    }
  });
  return url;
}

function init() {
  courses.forEach((course) => {
    const courseCode = course.classList[1];
    course.querySelector(".courseId").innerHTML =
      courseDetails[courseCode].name;

    const loginIcon = document.createElement("em");
    loginIcon.className = `${courseCode} fas fa-external-link-alt`;
    course.appendChild(loginIcon);
  });

  eventField.addEventListener("click", (event) => {
    if (event.target.tagName === "EM") {
      window.open(genUrl(courseDetails[event.target.classList[0]].id));
    }
  });
}

init(); //Driver Function
