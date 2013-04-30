'use strict';
/* jasmine specs for controllers go here */
 describe('Unit test: Testing Controllers ', function(){
 	 beforeEach(module('tenantService'));
 	 beforeEach(module('sharedCartService'));
 	 describe('PhoneListCtrl', function(){
		var scope, ctrl, httpMock,routeParams;
		var tenantname="ditto";
 		// beforeEach(function() {  module('productlisting')  });
 		 
	    beforeEach(inject(function($httpBackend, $rootScope, $controller) {
	      httpMock = $httpBackend;
	      $httpBackend.expectGET('data/.json').respond();
	 
	      scope = $rootScope.$new();
	      ctrl = $controller(PhoneListCtrl, {
	      			$scope: scope,
	      			$routeParams:{
	      					tenant: tenantname
	      			}
	      			});
	      httpMock.flush();
	    })); 	
	     
	    it('should test the load products',function(){	
	    	expect(scope.tenant).toMatch(null)
	    	})
 	 });
});
























