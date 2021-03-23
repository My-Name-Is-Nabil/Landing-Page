# Landing Page Project
## Table Of Contents 
- Introduction
- Building Navigation Bar
- Distinguish Section in View
- Scroll To Section
- Scroll To Top Button

## Introduction

In this project we aim to enhance the user's experience with the landing page by adding a navigation bar dynamically, highlighting the section in view,  allowing the user to scroll to the desired section using the navigation bar and adding a button to scroll to the top of the page.

## Building Navigation Bar

The function "createNavBar()" is a self-invoking function that builds a navigation bar using a document fragment. First, it creates "li" items as much as there are sections and add an appropriate class for them to style them, then it appends each item to the document fragment. After that, the fragment is appended to "ul" element of the navigation bar.

The navigation bar disappears after two seconds using "setTimeout" function, but if the user scrolls or hovers over the bottom of the page the navigation will reappear and the timer will be reset.

## Distinguish Section in View

The section in view will have a distinct class called "active-section", this class will be added by the function "highlightSection()", this function will also add the "active-section-nav" class to highlight the current section in the navigation bar. The "active-section" class will give the section a black background and the "active-section-nav" class will give the active section nav item a yellow color.

## Scroll To Section

Clicking the section nav item will call the function "scrollToSection()", which will scroll
the browser to the required section, the scrolling will be smooth due to the css property "scroll-behaviour".

## Scroll To Top Button

If the browser is scrolled bellow the fold of the page, a scroll to top button will appear at the bottom right of the screen, this is achieved by "showScrollToTopButton()" function.
Clicking on the button will scroll the user to the top of the page using the function "scrollToTop()".