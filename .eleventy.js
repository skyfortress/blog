module.exports = function(eleventyConfig) {
    eleventyConfig.addHandlebarsShortcode("dayFormat", function(date) {
        return new Date(date).getDate();
    });

    eleventyConfig.addHandlebarsShortcode("monthFormat", function(date) {
        return new Date(date).toLocaleString('us', { month: 'short' });
    });

    eleventyConfig.addHandlebarsShortcode("yearFormat", function(date) {
        return new Date(date).getFullYear();
    });

    eleventyConfig.addCollection("sortedPosts", function(collectionApi) {
        return collectionApi.getFilteredByTag('post').reverse();
    });

    eleventyConfig.addPassthroughCopy("assets");
};