module.exports = function (eleventyConfig) {
	eleventyConfig.setTemplateFormats(['ejs', 'md']);

	eleventyConfig.setUseGitIgnore(false);

	eleventyConfig.addPassthroughCopy('images/');
	eleventyConfig.addPassthroughCopy({ 'site/_processed': 'assets/' });

	return {
		dir: {
			input: 'site',
			output: 'dist',
			includes: '_includes',
			layouts: '_layouts',
			data: '_data',
			markdownTemplateEngine: 'ejs',
		},
	};
};
