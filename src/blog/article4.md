---
layout: article
title: What is Eleventy Static Site Generator in a Nutshell?
date: 2022-10-10
category: "Jamstack"
---

Eleventy (also called 11ty) is a simple yet powerful static site generator. It uses JavaScript to transform data and templates into HTML pages.

<!-- excerpt -->

But first — let’s quickly review what is meant by a “static site” and then what a generator provides. A static site is composed of static content — as in, the HTML, CSS, assets, and all content are already compiled together before pushing to a website host. This is different from a dynamic site that compiles those things from querying a database at run time (like WordPress) or that pulls content from APIs client-side (like JavaScript frameworks without server-side rendering).

A static site generator is an environment and build processor to compile your content into static HTML. They usually offer helpers to provide flexibility in writing your content (like supporting Markdown) and include methods for templating. So instead of writing HTML pages one by one and having to copy and paste the repeated parts, a generator will support breaking those things into components via a certain templating language. Then the generator’s build process will bring everything together and output the final HTML that can be uploaded to a web host to be served as your website. Depending on the web host you use, this build process can even be done by the host.

There are many static site generators available. You may have heard of or even used ones like Jekyll, Hugo, Gatsby, Next and Nuxt. A comprehensive list is provided by Jamstack.org.

It’s beginner-friendly, has fast build times, and generates fast sites by default. It also has a very active and friendly community.

Eleventy excels at content-driven sites and is used by Google, Netlify, MIT, CERN, the A11y Project, ESLint, and more.

Since pages are generated ahead of time, they can be served as fast as possible from a Content Delivery Network (CDN). Eleventy also generates no client-side JavaScript, which helps your site to load faster.

Eleventy (aka 11ty) is rising in the ranks among static site generators. This Node-based builder is attractive due to its zero-config starting point, purely static output, and ease of achieving the coveted top Lighthouse performance score of four perfect 100s.