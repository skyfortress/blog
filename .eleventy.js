module.exports = function(eleventyConfig) {
    eleventyConfig.addHandlebarsShortcode("active", function(current, needed) {
        if(needed == '/') {
            return current === needed ? 'active' : '';
        }
        return current.includes(needed) ? 'active' : '';
    });
    eleventyConfig.addPassthroughCopy("assets");
};