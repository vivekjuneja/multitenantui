'use strict';

/* Services */

angular.module('tenantService', ['ngResource']).
    factory('Tenant', function($resource){
  return $resource('data/:tenant.json', {}, {
    query: {method:'GET', params:{}, isArray:false}
  });
});

/*angular.module('tenantService', ['ngResource']).
    factory('Tenant', function($resource){
  		var Tenant=$resource('data/:tenant.json',{},{
  			 		query : {
  			 					method:'GET',
  			 					params:{q:""}, 
  			 					isArray:false
  			 				  }
  			});
  		Tenant.prototype.getProductJsonData = function(shopSelectedQuery , successCb, failCb){
  			var queryObj = { tenant:shopSelectedQuery };
  			var queryO = JSON.stringify(queryObj); 
  			
  			return Tenant.query({q:queryO}, successCb, failCb ); // refer ng-resource for this
  		}
   });
*/

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
/*

angular.module('tenantService', []).factory('Tenant', ['$http',
function($http) {
	return {
		get : function(callback) {
			var config = {
				headers : {
					tenant : 'gsshop.gsplatform.com'
				}
			};
			$http.jsonp("http://ec2-175-41-196-144.ap-northeast-1.compute.amazonaws.com:8080/sel/rest/products?callback=angular.callbacks._0", config).success(function(data) {
				callback(data);
				alert(data);
			});
		}
	};

}]);
*/