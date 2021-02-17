/* Loading screen */
$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});

/* Typed text on frontpage */
$(document).ready(function(){
  var typed = new Typed(".typing", {
    strings: ["Software Developer", "Student", "Web Designer", "Runner", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
});

/* No Direction to formspee.io */

window.addEventListener("DOMContentLoaded", function () {

  // get the form elements defined in your form HTML above

  var form = document.getElementById("test-form");
  var button = document.getElementById("test-form-submit");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add('success');
    status.innerHTML = "Your request was successfully submitted. Thanks!";
  }

  function error() {
    status.classList.add('error');
    status.innerHTML = "Sorry your request couldn't be submitted";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}



/* darkening images in personale preferences */
const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')

portfolioItems.forEach(portfolioItem => {
  portfolioItem.addEventListener('mouseover', () => {
    portfolioItem.childNodes[1].classList.add('img-darken');
  })
  portfolioItem.addEventListener('mouseout', () => {
    portfolioItem.childNodes[1].classList.remove('img-darken');
  })
})
