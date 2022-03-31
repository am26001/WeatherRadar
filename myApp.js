// follow JS guidelines
"use strict";

// execute upon opening burger menu
function openBurgerMenu() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  // upon opening burger menu, form container becomes white
  document.getElementById("change").style.backgroundColor = "rgba(0,0,0,0)";
  // upon opening burger menu, form fields become white
  document.getElementById("fname").style.backgroundColor = "rgba(0,0,0,0)";
  document.getElementById("lname").style.backgroundColor = "rgba(0,0,0,0)";
  document.getElementById("email").style.backgroundColor = "rgba(0,0,0,0)";
  document.getElementById("lname").style.backgroundColor = "rgba(0,0,0,0)";
  document.getElementById("country").style.backgroundColor = "rgba(0,0,0,0)";
  document.getElementById("review").style.backgroundColor = "rgba(0,0,0,0)";
  document.getElementById("submit").style.color = "rgba(0,0,0,0)";
  // upon opening burger menu, about container becomes white
  document.getElementById("aboutContainer").style.backgroundColor = "rgba(0,0,0,0)";
}

// execute upon closing burger menu
function closeBurgerMenu() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
  // upon closing burger menu, form container returns to its original state
  document.getElementById("change").style.backgroundColor = "rgba(0,0,0,0.05)";
  // upon opening burger menu, form fields return to their original state
  document.getElementById("fname").style.backgroundColor = "rgba(255,255,255,255)";
  document.getElementById("lname").style.backgroundColor = "rgba(255,255,255,255)";
  document.getElementById("email").style.backgroundColor = "rgba(255,255,255,255)";
  document.getElementById("lname").style.backgroundColor = "rgba(255,255,255,255)";
  document.getElementById("country").style.backgroundColor = "rgba(255,255,255,255)";
  document.getElementById("review").style.backgroundColor = "rgba(255,255,255,255)";
  document.getElementById("submit").style.color = "rgba(255,255,255,255)";
  // upon opening burger menu, about container returns to its original state
  document.getElementById("aboutContainer").style.backgroundColor = "rgba(0,0,0,0.05)";
}