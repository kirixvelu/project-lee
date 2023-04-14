---
layout: article
title: Power of Scalable Vector Graphic (SVG) Sprites on User Experience
date: 2022-04-19
category: "Optimizations"
---

Scalable Vector Graphic (SVG) allows us to create icons in a file format that is resolution independent, which is awesome, but due to the limitations of the HTTP protocol we don't want to make another file request for every icon in our website. Thats when we combine the power of SVG with sprites.

<!-- excerpt -->

In order to avoid having to make a separate request for each icon we can go back to our old friend the sprite, except this time in SVG. To create a sprite in SVG we use the <symbol> tag and apply an ID for referencing later and the viewBox attribute for defining the canvas size. Inside of the symbol icon we create our shapes, text and any other elements that make up our icon.

Inside of the symbol tag we can also add additional elements for accessibility, such as the title and desc tags. We create our icons inside of a defs tag in order to define them for later use and to ensure they're not output onto the page. 

There are a number of ways you can create sprites in SVG. They can be created using vector software – such as Adobe Illustrator CC(opens in new tab) or Sketch – by simply placing the icons onto an art board and exporting the file as an SVG. However, the code they produce needs some editing in order to use as an icon system. Another way is to create an icon system manually. 

This isn't too difficult and you have complete control over the markup. SVG sprites can also be incorporated into build systems like gulp or grunt, whereby you choose a folder containing SVG files and configure the build to output a single SVG sprite. For complete guide, see [Creative Blog](https://www.creativebloq.com/features/the-complete-guide-to-svg/6).