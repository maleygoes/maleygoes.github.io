var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   example.org   https:\/\/example.org   copyright  "
},
{
  "id": "derivative-rules",
  "level": "1",
  "url": "derivative-rules.html",
  "type": "Section",
  "number": "1.1",
  "title": "Rules For Basic Function Derivatives",
  "body": " Rules For Basic Function Derivatives  One of the major goals, now that we know what the derivative is, is to be able to find the derivative for all the functions we know. We start with some basic ones, using the definition, and we'll unpack them as we go.  We will use the limit definition of the derivative for a general function, and algebraically work them into simpler rules. That's the whole idea.  Here's a 30ish minute lecture video walking through some of these.   What's our aim here  After we generate \"rules\" for each function we know, then we will be able to use them to solve problems without needing the big ugly limit definition anymore   See Module in Brightspace for Critical Practice assignment here.   "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "derivative-rules.html#remark-1",
  "type": "Remark",
  "number": "1.1.1",
  "title": "",
  "body": "We will use the limit definition of the derivative for a general function, and algebraically work them into simpler rules. That's the whole idea. "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
