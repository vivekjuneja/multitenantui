'use strict';

/* App Module */

angular.module('productlisting', ['productFilters',  'tenantService', 'productService','sharedCartService', 'ui.directives', 'ui.bootstrap', 'plunker', 'ui.bootstrap.accordion','removeProducts','showText','showMobiles']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/site/:tenant/list',{
      	 templateUrl: 'partials/productlisttemplate.html',
      	 controller: PhoneListCtrl
       })
      .when('/site/:tenant/products/:productId',{
      	  templateUrl: 'partials/productdetailtemplate.html',
      	  controller: PhoneDetailCtrl
      })
	  .when("/site/:tenant/cart/order",{
	  	  templateUrl:"partials/loadshoptemplate.html",
	   	  controller:shoppingCartStart
	  })
	  .when("/error",{
	  	templateUrl:"error.html"
	  })	
	  .when("/404",{
	  	templateUrl: "error404.html"
	  })	
      .otherwise({redirectTo: '/error'});
}]);

//angular.module('app', ['ng', 'seo']);
