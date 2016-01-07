/**
External API surface for HackMyResume.
@license MIT. See LICENSE.md for details.
@module hackmyapi.js
*/



(function() {



  /**
  The formal HackMyResume API.
  */
  var HackMyAPI = module.exports = {
    verbs: {
      build: require('./verbs/build'),
      analyze: require('./verbs/analyze'),
      validate: require('./verbs/validate'),
      convert: require('./verbs/convert'),
      new: require('./verbs/create')
    },
    alias: {
      generate: require('./verbs/build'),
      create: require('./verbs/create')
    },
    options: require('./core/default-options'),
    formats: require('./core/default-formats'),
    Sheet: require('./core/fresh-resume'),
    FRESHResume: require('./core/fresh-resume'),
    JRSResume: require('./core/jrs-resume'),
    FRESHTheme: require('./core/fresh-theme'),
    JRSTheme: require('./core/jrs-theme'),
    FluentDate: require('./core/fluent-date'),
    HtmlGenerator: require('./gen/html-generator'),
    TextGenerator: require('./gen/text-generator'),
    HtmlPdfGenerator: require('./gen/html-pdf-generator'),
    WordGenerator: require('./gen/word-generator'),
    MarkdownGenerator: require('./gen/markdown-generator'),
    JsonGenerator: require('./gen/json-generator'),
    YamlGenerator: require('./gen/yaml-generator'),
    JsonYamlGenerator: require('./gen/json-yaml-generator'),
    LaTeXGenerator: require('./gen/latex-generator'),
    HtmlPngGenerator: require('./gen/html-png-generator')
  };



}());
