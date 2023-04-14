---
layout: article
title: What Makes Eleventy Different From Other Static Site Generators? 
date: 2022-10-22
category: "Architecture"
---

Eleventy is exceptionally fast both during builds and in the browser. This is largely thanks to not requiring the loading of a client-side JavaScript bundle in order to serve content (compared to something like Gatsby). Server-side rendering isn’t even a concern here, since the filesystem page creation defaults to static HTML.

<!-- excerpt -->

What really makes Eleventy unique is the ability to select from and intermix up to ten different templating languages.

Intermixing languages can happen in the same file, or between layouts. For example, I often write my main content with Markdown that feeds into a Nunjucks layout. In some projects, I’ve found it useful to be able to loop over some data using Nunjucks while in the Markdown file. This ability to combine languages is very powerful, and allows you to design a write-and-build workflow that works best for you and your project.

Eleventy includes a --serve flag that uses BrowserSync to enable serving the site locally and with hot-reload upon file changes. This is a great convenience, and is good to keep in mind if you’re not looking for a static site generator but perhaps an upgrade from build tools like Gulp.

As part of being zero-config, all your site files could live in the root of your project. To alter the input and output directories, you can create an Eleventy config, which is expected to be a root file called .eleventy.js. Here’s a quick snippet showing how to make this modification:

As noted earlier, the default behavior is filesystem page creation which is generally of great benefit especially for rapidly getting started. This is easily overrideable by assigning a custom permalink and that can be done per file, for an entire directory, or dynamically for a set of data. Permalinks also offer another superpower which we’ll explore in a bit!

Uniquely, during the build, you can prepare content, data, and transforms on that content and data by using JavaScript and leveraging filters and shortcodes (we’ll talk about those later). Again, this all happens without adding a JavaScript bundle client-side, while still enabling the use of JavaScript as a templating language.

Important Note: You can successfully use Eleventy with no or low JavaScript knowledge.

Unlike other SSGs like Gatsby, or environments like WordPress, most Eleventy sites do not require any plugins. There are some plugins available, but they are not necessary for essential functionality.

When building with Eleventy, you can add on features as you need them. In fact, you could just use HTML and never work with any of the other templating languages. Eleventy is only as complex as your project requires!. Learn more about from the experts at [Smashing Magazine](https://www.smashingmagazine.com/2021/03/eleventy-static-site-generator/).