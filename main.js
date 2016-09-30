   var AppView = Backbone.View.extend({
      // It's the first function called when this view is instantiated.
      initialize: function(){
        this.render();
      },
      // $el - it's a cached jQuery object (el), in which you can use jQuery functions to push content. Like the Hello TutorialsPoint in this case.
      render: function(){
        
		var template = _.template( $("#search_template").html(), {} );
		this.$el.html(template);
      },
	  events: {
		"click input[type='button']":"doSearch"
	  },
	  doSearch: function(event){
		alert("do search for " + $("#search_input").val());
	  }
		
    });
	
    var appView = new AppView( {el: $('#container')});
	
	
	var Person = Backbone.Model.extend({
		initialize: function(){
			this.bind("change name", function(){
				var name = this.get("name");
				alert("name is changed to " + name);
			});
		},
		replaceName: function(newName){
			this.set({name: newName});
		}
	});
	
	var person = new Person({name:"Jank", age:35, children:["dhanvi"]});
	person.replaceName("dhanvi");
    
