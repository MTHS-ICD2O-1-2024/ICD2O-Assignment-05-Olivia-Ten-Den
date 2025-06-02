// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: May 24, 2025
// This file contains the JS functions for index.html

"use strict"

function calculate() {
  let startingInteger = parseInt(document.getElementById("starting-integer").value)
  let consecutiveIntegers = parseInt(document.getElementById("consecutive-integers").value)
  let sum = startingInteger
  let nextInteger = startingInteger
  let outputString = "The sum of the consecutive integers is: " + startingInteger.toString()
  let counter = 1

  while (counter < consecutiveIntegers) {
    nextInteger = nextInteger + 1
    sum = sum + nextInteger
    outputString = outputString + " + " + nextInteger.toString()
    counter = counter + 1
  }
  outputString = outputString + " = " + sum.toString()
  document.getElementById('result').innerHTML = "<p>" + outputString + ".</p>"
}
