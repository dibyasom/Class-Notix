const btn = document.querySelector(".btn");

const URL = {
  collaborate: [
    "https://learn.upes.ac.in/webapps/blackboard/content/contentWrapper.jsp?course_id=",
    "&displayName=Blackboard%20Collaborate%20Ultra%20UPES-CCE&href=%2Fwebapps%2Fblackboard%2Fexecute%2Fblti%2FlaunchPlacement%3Fblti_placement_id%3D_22_1%26course_id%3D",
    "%26mode%3Dview%26wrapped%3Dtrue",
  ],
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

btn.addEventListener("click", function () {
  window.open(genUrl("_49412_1"));
});
