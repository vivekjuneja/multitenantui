/*describe('productlisting controllers', function() {
  
  beforeEach(module('tenantService'));
  describe('PhoneListCtrl', function(){
   var scope, $httpBackend, ctrl;
   beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
   
 	  $routeParams.tenant = 'flipkart';
	  scope = $rootScope.$new();
      ctrl = $controller(PhoneListCtrl, {$scope: scope});
	  
    }));
  
    it('should fetch products', function() {
      expect(scope.products).toBeUndefined();
      // $httpBackend.flush();
 
      //expect(scope.products.length).toBe(2);
    });
  });
  });
  */
  
  
   describe('Tenant Controller', function(){
	//beforeEach(module('shoppingCart'));
	// test for the controller 
	describe('shoppingCartStart',function(){
		var scope, ctrl, httpMock,routeParams;
		
		beforeEach(inject(function($httpBackend,$rootScope,$controller, $routeParams){
			httpMock = $httpBackend;
			scope=$rootScope.$new();
			//routeParams=$routeParams.tenant;
			httpMock.expectGET('data/.json').respond(
			 { "products":[
					{
						"id" : 1,
						"name" : "HTC Desire C",
						"description" : "Anroid v4 OS, 5MP Camera, 600MHz Processor, 3.5inch touchscreen",
						"image" :"img/htc-desire.jpg",
						"cost" : 10000,
						"discount" : 5,
						"quantity": 1 
					},
					{
						"id" : 2,
						"name" : "Samsung Galaxy S3",
						"description" : "Anroid v4 OS, 8MP Primary Camera, Secondary Camera, 4.8inch touchscreen",
						"image" :"img/samsung-galaxy.jpg",
						"cost" : 26000,
						"discount" : 0,
						"quantity": 1
					}
				]});	
			ctrl=$controller(shoppingCartStart,{
				$scope:scope
			 });
			httpMock.flush();	
		}));
		
		it('should test the load products',function(){
			expect(scope.totalProducts).toMatch({ products:[
					{
						"id" : 1,
						"name" : "HTC Desire C",
						"description" : "Anroid v4 OS, 5MP Camera, 600MHz Processor, 3.5inch touchscreen",
						"image" :"img/htc-desire.jpg",
						"cost" : 10000,
						"discount" : 5,
						"quantity": 1 
					},
					{
						"id" : 2,
						"name" : "Samsung Galaxy S3",
						"description" : "Anroid v4 OS, 8MP Primary Camera, Secondary Camera, 4.8inch touchscreen",
						"image" :"img/samsung-galaxy.jpg",
						"cost" : 26000,
						"discount" : 0,
						"quantity": 1
					}
				]});
		});

		it('should test the totalCost of Products with given quantity',function(){
			expect(scope.totalCost()).toBe(36000);
		});
		it('should test the totalCost of Products with quantity changed',function(){
			scope.totalProducts.products[0].quantity=2;
			expect(scope.totalCost()).toBe(46000);		
		});
		it('should test the total quantity of Products ',function(){
			expect(scope.totalQuantity()).toBe(2);		
		});
		
		it('should remove product',function(){
			scope.remove(0);
			//scope.remove(0);
			expect(scope.totalProducts.products.length).toBe(1);
		});
		
	});
}); 

  
