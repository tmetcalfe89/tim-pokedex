# Purpose

This project is meant to demonstrate how to do a handful of commonly desired tasks in several different ways.

# Theme

In this project, we'll be creating a Pokedex of sorts. If you don't know what Pokemon is, suffice to say it's a video game franchise with monsters that people collect and fight each other with. We'll be making an app that will allow the user to enter the name of a Pokemon, confirm they've caught it by hitting enter, gather available information about the Pokemon (name, image, types), and add that data into a list that gets rendered on the page.

# Tasks

This project will cover:

- Gathering user input.
- Sending a query to an external API.
- Cleaning up data.
- Rendering items in a list.
- Managing items in a list.

# Stages

This project is currently available in one functional stage:

## Stage 1

_Lists and APIs_

Users can type in an input box. When they press `Enter`, their input is submitted, and the `<input>`'s value is cleared. When input is submitted, we submit a request to the API. When the API responds, we clean the response body, and add the item to a list. When the list is changed, we render the changes to the page.

## Stage 2

**WIP**

_Modifications_

Builds on Stage 1. Users can click on a card's `Close` button to delete the entry. Users can click on a card's `Shiny` button to set the entry's shiny status to true, changing the image rendered to the shiny version for that entry.

# Technologies

- [React](https://reactjs.org/)
- HTML
- CSS
- JavaScript

# Branches

This project will cover its tasks using a handful of different methods and combinations. Below is a list of branches on this project, along with the methods they use:

- main - There is no project here, just a README documenting the purpose of this repository.
- [stage1-vanilla](https://github.com/tmetcalfe89/tim-pokedex/tree/stage1-vanilla) - This is an HTML/CSS/JS implementation of Stage 1 of the project.
- [stage1-react](https://github.com/tmetcalfe89/tim-pokedex/tree/stage1-react) - This is a React implementation of Stage 1 of the project.
