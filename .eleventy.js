const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");

const {
  getAllPosts,
  getCategoryList,
  getCategorizedPosts,
} = require("./src/_config/collections");

const { readableDate } = require("./src/_config/filters");

const { imageShortcode } = require("./src/_config/shortcodes");

module.exports = function (eleventyConfig) {
  /*================================*/
  /*   plugins and configurations   */
  /*================================*/
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
    excerpt_alias: "excerpt",
  });

  /*================================*/
  /*  11TY Watch Target   */
  /*================================*/
  eleventyConfig.addWatchTarget("_site/assets/main.css");
  /*===================================================*/
  /* files that need to be copied to the build folder  */
  /*===================================================*/
  // images & css created via scripts
  eleventyConfig.addPassthroughCopy("./src/assets/social-image.jpg");
  eleventyConfig.addPassthroughCopy("./src/assets/sprite.svg");
  eleventyConfig.addPassthroughCopy("./src/assets/icons");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/docs");
  eleventyConfig.addPassthroughCopy("./src/assets/js");

  eleventyConfig.addPassthroughCopy("./src/logo.png");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  eleventyConfig.addPassthroughCopy("./src/yandex_27db36a4cd43970d.html");

  /*=================*/
  /*     Layouts     */
  /*=================*/
  eleventyConfig.addLayoutAlias("home", "layouts/home");
  eleventyConfig.addLayoutAlias("page", "layouts/page");
  eleventyConfig.addLayoutAlias("blog", "layouts/blog");
  eleventyConfig.addLayoutAlias("article", "layouts/article");

  /*=================*/
  /*   Collections   */
  /*=================*/
  eleventyConfig.addCollection("blog", getAllPosts);
  eleventyConfig.addCollection("categoryList", getCategoryList);
  eleventyConfig.addCollection("categorizedPosts", getCategorizedPosts);

  /*=================*/
  /*     Filters     */
  /*=================*/
  eleventyConfig.addFilter("readableDate", readableDate);

  /*=================*/
  /*    shortcodes   */
  /*=================*/
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
  };
};
