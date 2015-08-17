var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["JST"] = this["JST"] || {};

this["JST"]["src/templates/views/topic-information.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"topic-information-inner-wrapper\">\n	<h2>Information on topic \""
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\"</h2>\n\n	<p>Total mentions: "
    + alias3(((helper = (helper = helpers.sentimentScore || (depth0 != null ? depth0.sentimentScore : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sentimentScore","hash":{},"data":data}) : helper)))
    + "</p>\n\n	<ul>\n		<li>Positive mentions: <span class=\"positive-mention\">"
    + alias3(((helper = (helper = helpers.positive || (depth0 != null ? depth0.positive : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"positive","hash":{},"data":data}) : helper)))
    + "</span></li>\n		<li>Neutral mentions: <span class=\"neutral-mention\">"
    + alias3(((helper = (helper = helpers.neutral || (depth0 != null ? depth0.neutral : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"neutral","hash":{},"data":data}) : helper)))
    + "</span></li>\n		<li>Negative mentions: <span class=\"negative-mention\">"
    + alias3(((helper = (helper = helpers.negative || (depth0 != null ? depth0.negative : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"negative","hash":{},"data":data}) : helper)))
    + "</span></li>\n	</ul>\n</div>";
},"useData":true});

this["JST"]["src/templates/views/topic-item.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li>\n	<a class=\"topic\" href=\"topic/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n		<span class=\"topic-label "
    + alias3(((helper = (helper = helpers.sentimentClass || (depth0 != null ? depth0.sentimentClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sentimentClass","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.sizeClass || (depth0 != null ? depth0.sizeClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sizeClass","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</span>\n	</a>\n</li>";
},"useData":true});

this["JST"]["src/templates/views/wordcloud.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul id=\"wordcloud\" class=\"wordcloud-list\">\n\n</ul>";
},"useData":true});

if (typeof exports === 'object' && exports) {module.exports = this["JST"];}