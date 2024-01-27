# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Notifications page solution](#frontend-mentor---notifications-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)


## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Landing Page - Notifications Page](/screenshots/Landing%20Page%20-%20Notifications%20Page.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Semantic HTML5 markup
- Mobile-first
- Javascript for DOM manipulation


### What I learned

It was an easier challenge, but its always a good oportunity to learn something new. And I did! Down below you can see what I believe that could be the most interesting thing I've learned while coding.

```css
li[class~="unread"]{
  background-color: blue;
}
```

In this CSS I needed to apply a different background color only while the **li** element have been keeping the **unread class**. Otherwise, the **li** element should'nt apply this background color, so the [CSS Attribute Selectors](https://www.w3schools.com/css/css_attribute_selectors.asp) help me a lot, just like in this case. There are a lot of other cases where you can use them to manage a certain element style if you need.


### Continued development

The progress never stops. This project proved to be very helpful to strengthen my bases and reinforce some very useful knowledgments I have. So, for now, I can say that I learned everything I could with this challenge, despite we always have room for improvements.

### Useful resources

- [CSS Attribute Selectors](https://www.w3schools.com/css/css_attribute_selectors.asp) - Like I said before, these Attribute Selectors could be very handy sometimes.


## Author

- Website - [Eduardo Sant](https://github.com/edusantsouza/)
- Frontend Mentor - [@edusantsouza](https://www.frontendmentor.io/profile/edusantsouza)


