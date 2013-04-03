'use strict';

/* Services */

angular.module('tenantService', ['ngResource']).
    factory('Tenant', function($resource){
  return $resource('data/:tenant.json', {}, {
    query: {method:'GET', params:{}, isArray:false}
  });
});


angular.module('productService', ['ngResource']).
    factory('Product', function($resource){
  return $resource('data/:tenant/:product.json', {}, {
    query: {method:'GET', params:{}, isArray:true}
  });
});

angular.module('sharedCartService',[])
	   .factory('addToCartService',function($rootScope){
	   
	   	var cartDataArray={};
	   	cartDataArray.productIndex=[];
	   	cartDataArray.prepareForIdBroadCast=function(PID){
	   		this.productIndex.push(PID);
	   		//console.log("From Service: Products added to cart -- "+this.productIndex);
	   		this.broadcastProduct();
	   	};
	   	cartDataArray.broadcastProduct=function(){
	   		$rootScope.$broadcast('messageChangeEvent');
	   	}
	   	return cartDataArray;
	   })
