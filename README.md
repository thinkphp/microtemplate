microtemplate
-------------

A micro-template engine on JavaScript.

Syntax
------

* template(tmp, object)


Example
--------

```html
       <p id="title"></p>
```

```js
       <script type="text/javascript" src="src/microtemplate.js"></script>
       <script type="text/javascript">

       var tmp = 'This {project} presents a very {compact} micro-templating {solution} creating for learning purposes';

       var ob = {
             'project': 'MooTools',
             'compact': "extra",
             'solution': "miss"  
       };

       var title = document.getElementById("title");

           title.innerHTML = template(tmp, ob)  
```
