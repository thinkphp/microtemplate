(function(context, name) {

  var template = function(tmp, ob) {

      return tmp.replace((RegExp("{([^{}]*)}","gi")), function(tag, prop){

             return ob[prop]
      })
  }

  context[ name ] = template

})(this, "template");

