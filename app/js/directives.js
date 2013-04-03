'use strict';

/* Directives */
angular.module('removeProducts',[])
       .directive('remove',function(){
       	return function(scope,element,attr){
       		//console.log(element);
       		//console.log(attr);
       		element.bind('click', function(){
       			scope.$apply(function(){
       				scope.$eval(attr.remove)
       			});
       		});
       	};
       });
angular.module('showText',[])
       .directive('show',function(){
       	return {
       		
       		//console.log("Scope---"+scope.$eval(attr.show));
       		link: function(scope, element,attr){
       			var buttonElement= angular.element(element.children()[0]);
       			var spanElement=angular.element(element.children()[1]);
                            //var currentCartCount = $parent.query;
                            //console.log(currentCartCount);
                            //scope.parent.query="";
                          //  currentCartCount+=1;
       			buttonElement.bind('click',function(){
	       			spanElement.removeClass('hideText');
	       			spanElement.addClass('showText');
	       			buttonElement.attr("disabled","true");
	       			spanElement.bind('click', function() {
                                          spanElement.addClass('hideText');
                                   });
	       			
	       			
	       		});	
       		}
       	}
      });
       		
       			
       	