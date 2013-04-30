'use strict';
/* jasmine specs for controllers go here */
 describe('Unit test: Testing Controllers ', function(){
 	 beforeEach(function(){
	    this.addMatchers({
	      toEqualData: function(expected) {
	        return angular.equals(this.actual, expected);
	      }
	    });
	  });
 	 beforeEach(module('tenantService'));
 	 beforeEach(module('sharedCartService'));
 	 
 	 describe('PhoneListCtrl', function(){
		var scope, ctrl, httpMock;
		var dittoJsonData=function(){
			return {
				"age": 0, 
		        "id": "ditto", 
		        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
		        "name": "Ditto.com", 
		        "snippet": "This is a sample product from TENANT1 to be listed",
				"menus" : [
				   {"id": "0", "label":"Electronics", "data":"gsshopcomputers"},
				   {"id": "1", "label":"Mobiles", "data":"gsshopmobiles"}
				],
				"categories":[
					{
					   "categoryId": 1,
					   "categoryType":"Electronics",
					   "products":[
					   		{
					   			"type": "laptop",
								"id" : "gsshopproduct_1",
								"name" : "Apple iBook",
								"description" : "800GHz, 0.26GB/30GB, Apple MacOS",
								"image" :"img/gsshop/apple-laptop.jpg",
								"cost" : 149,
								"discount" : 15,
								"quantity": 1 ,
								"rating": 4
							}
						]
					}
				]
			}
		}	
 		 
	    beforeEach(inject(function($httpBackend, $rootScope, $controller, $routeParams) {
	      httpMock = $httpBackend;
	      $httpBackend.expectGET('data/ditto.json').respond(dittoJsonData());
	 	  $routeParams.tenant="ditto";
	 	
	      scope = $rootScope.$new();
	      ctrl = $controller(PhoneListCtrl, {
	      			$scope: scope
	      			});
	     // httpMock.flush();
	    })); 	
	     
	    it('should test the loading of tenant specififc json data',function(){	
	    	expect(scope.tenant).toEqualData({});
	    	httpMock.flush();
	    	expect(scope.tenant).toEqualData(dittoJsonData());
	    });
	    
 	 });
});
























