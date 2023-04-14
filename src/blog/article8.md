---
layout: article
title: Understanding the Core of CSS Features
date: 2022-08-10
category: "Designs"
---

The basic difference between CSS Grid Layout and CSS Flexbox Layout is that Flexbox was designed for layout in one dimension - either a row or a column. Grid was designed for two-dimensional layout - rows, and columns at the same time. The two specifications share some common features, however, and if you have already learned how to use Flexbox, the similarities should help you get to grips with Grid.

<!-- excerpt -->

## Content out or layout in?

Flexbox works from the content out. An ideal use case for flexbox is when you have a set of items and want to space them out evenly in a container. You let the size of the content decide how much individual space each item takes up. If the items wrap onto a new line, they will work out their spacing based on their size and the available space on that line.

Grid works from the layout in. When you use CSS Grid Layout you create a layout and then you place items into it, or you allow the auto-placement rules to place the items into the grid cells according to that strict grid. It is possible to create tracks that respond to the size of the content, however, they will also change the entire track.

## Box alignment

The feature of flexbox that was most exciting to many of us was that it gave us proper alignment control for the first time. It made it easy to center a box on the page. Flex items can stretch to the height of the flex container, meaning that equal height columns were possible. These were things we have wanted to do for a very long time, and have come up with all kinds of hacks to accomplish, at least visually.

The alignment properties from the flexbox specification have been added to a new specification called Box Alignment Level 3. This means that they can be used in other specifications, including Grid Layout. In the future, they may well apply to other layout methods as well.

## The fr unit and flex-basis

We have already seen how the fr unit works to assign a proportion of available space in the grid container to our grid tracks. The fr unit, when combined with the minmax() function can give us very similar behavior to the flex properties in flexbox while still enabling the creation of a layout in two dimensions.

## Auto-filling grid tracks

We can use grid to create a similar effect to flexbox, while still keeping the content arranged in strict rows and columns, by creating our track listing using repeat notation and the auto-fill and auto-fit properties.

If you are using flexbox and find yourself disabling some of the flexibility, you probably need to use CSS Grid Layout. An example would be if you are setting a percentage width on a flex item to make it line up with other items in a row above. In that case, a grid is likely to be a better choice. Understanding the strength and weaknesses of both layout is essential to produce outstanding results.