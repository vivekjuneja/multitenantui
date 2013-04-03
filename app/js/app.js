'use strict';

/* App Module */

angular.module('productlisting', ['productFilters',  'tenantService', 'productService','sharedCartService', 'ui.directives', 'ui.bootstrap', 'plunker', 'ui.bootstrap.accordion','removeProducts','showText']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/site/:tenant/list', {templateUrl: 'partials/productlisttemplate.html',   controller: PhoneListCtrl}).
      when('/site/:tenant/products/:productId', {templateUrl: 'partials/productdetailtemplate.html', controller: PhoneDetailCtrl}).
	  when("/site/:tenant/cart/order", {
	   					templateUrl:"partials/loadshoptemplate.html",
	   					controller:shoppingCartStart
	   					
	   				}).		
      otherwise({redirectTo: 'error.html'});
}]);




angular.module('app', ['ng', 'seo']);
