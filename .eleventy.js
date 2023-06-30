module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    return {
        dir: {
            input: ".",
            data: "_data",
            includes: "_includes",
            layouts: "_layouts"
        }
    };
};