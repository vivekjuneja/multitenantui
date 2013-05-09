'use strict';

/* Controllers */
//Renders the Product Listing based on the theme selected
/*function PhoneListThemeCtrl($scope, $routeParams, Tenant) {
	/* Load all tenants *---/
	$scope.tenantselected = $routeParams.tenant;
	$scope.tenant = Tenant.get({ tenant:$routeParams.tenant});
      //Render Tenant Name
	dust.render("test", {name: $routeParams.tenant}, function(err, out) {
			$scope.tenantName = out;
	});
  

}*/
function PhoneListCtrl($scope, $routeParams, Tenant, addToCartService,$location,$rootScope,$route) {
	/* Load all tenants */
	$scope.tenantselected = $routeParams.tenant;
	$scope.categoryText = $routeParams["category"];
	if($scope.tenantselected=="ditto"|| $scope.tenantselected=="gsshop") {
		//alert($routeParams["category"]);
		if($routeParams["category"]=="Electronics" || $routeParams["category"]=="Computers")
		{
			$scope.category="laptop";
		}
		else if($routeParams["category"]=="Mobiles")
		{
			$scope.category="mobile";
		}
		else
		{
			$scope.category="Select Category!";
		}
		//alert($routeParams["category"]);

	}
	
	//error handling for not proper selection of categories
	if(Object.keys($routeParams).length > 1){
	    for( var param in $routeParams){
	       // console.log("param----"+ param +" : "+$routeParams[param]);
	        if(param == 'category' && $routeParams[param]=="" ){
	            //alert("no category selected");
	            $location.path("/error");
	        }
	        else if( param == 'category' &&
	        		 $routeParams[param] != "Electronics" &&
	        		 $routeParams[param] != "Computers" &&
	        		 $routeParams[param] != "Mobiles" ){
	            //alert("not selected proper cat")
	             $location.path("/error");
	        }
	   	 }
	}

    
	//$scope.tenant = Tenant.get({ tenant:$routeParams.tenant}); 
	$scope.tenant = Tenant.query({tenant:$routeParams.tenant}, function(successData){
		console.log("Success json request for tenant");
		return successData;
	},function(errData){
		if(errData.status == 404 || errData.status == 403){
			$location.path("/404");
		}
	});
	var tenantId = $scope.tenantselected;
    //Render Tenant Name
	//dust.render("test", {name: $routeParams.tenant}, function(err, out) {
		$scope.tenantName = $routeParams.tenant;
	//});
	//----------var self = this;
	//console.log("PhonelistController :  get the products from service ---"+ addToCartService.productIndex);
	$scope.calladdToCart=function(productId){
		addToCartService.prepareForIdBroadCast(productId);
	   	$scope.addedtocart=true;
	   	$scope.isdisabled=true;
	}
	$scope.addedtocart=false;
	$scope.isdisabled=false;
	/*$scope.$on('messageChangeEvent',function(){
		console.log("from $on")
		//this is called twice which should not the case
	});*/
	$scope.moveToCartPage = function(){
		$location.path("/site/"+$routeParams.tenant+"/cart/order");
	}
}
//test resolve and routing

PhoneListCtrl.resolve={
	tenantSelectedJsonData: function( $q,$route,Tenant ,$timeout){
		var deferred = $q.defer;
		var shopSelected= $route.current.params.tenant;
		//alert(shopSelected);
		return Tenant.query({ tenant:shopSelected},function(successData){
		 		console.log("success----"+successData);
		 		//return successData;
		 		$timeout(function(){
		 		return deferred.resolve(successData);
		 		},2000)
		 	},function(){
		 	//alert("Invalid tenant selected ");
		 		//deferred.reject("No tenant found");
		 	})
		 	//return deferred.promise;
	 		//deferred.resolve(dataJSON);
		}
}
//ends
/*var renderMenus = function(jsonReceived) {
	alert("jsonreceived " + jsonReceived);
	dust.render("menulisting",jsonReceived, function(err, out) {
				self.menulist = out;
				self.menusavailable = true;
				alert(self.menulist);
		
 	});
			
}*/
function PhoneDetailCtrl($scope, $routeParams, Tenant, addToCartService, $location) {
	$scope.tenantselected = $routeParams.tenant;
	$scope.tenant = Tenant.get({ tenant:$routeParams.tenant}); 
	if($routeParams.productId==undefined)
		alert("Wrong Product Code !");
	$scope.product = Product.get({product: $routeParams.productId, tenant:$routeParams.tenant}, function(product) {
   		 $scope.mainImageUrl = product.images[0];
  	});
	$scope.setImage = function(imageUrl) {
    	$scope.mainImageUrl = imageUrl;
  	}
  	$scope.calladdToCart=function(productId){
  		//console.log("click add to cart----"+ productId);
  		//var pi=productId.substring(productId.length-1)-1;
  		var pi=productId.split("_");
  		addToCartService.prepareForIdBroadCast(pi[1]-1);
	   	$scope.addedtocart=true;
	   	$scope.isdisabled=true;
	}
	$scope.addedtocart=false;
	$scope.isdisabled=false;
  	$scope.moveToCartPage = function(){
  		
		$location.path("/site/"+$routeParams.tenant+"/cart/order");
	}
	
}

/*function ProductInfoCtrl($scope, $routeParams, Product) {
	if($routeParams.productId==undefined)
	 alert("Hola");
	$scope.product = Product.get({product: $routeParams.productId, tenant:$routeParams.tenant}, function(product) {
    	$scope.mainImageUrl = phone.images[0];
 	});
	$scope.setImage = function(imageUrl) {
    	$scope.mainImageUrl = imageUrl;
  	}
}/*---? is it needed-----*/
function shoppingCartStart($scope, $location, $http, addToCartService){
	$scope.title="Shopping Cart";
	var locPath = $location.path();
	//TODO: This is a technical debt :) We are finding out the position the tenant name (enclosed in the url). need to fix this
	var locPathIdx = locPath.indexOf('/site/');
	var endPathIdx = locPath.indexOf('/cart/');

	var tenantSelected = locPath.substring(locPathIdx+6, endPathIdx);
	$scope.tenantName = tenantSelected;
	//$scope.totalProducts={};
	var tenantJson = "data/" +  tenantSelected  + ".json";
	$http.get(tenantJson).success(function(data){
		$scope.totalProducts=data;
		$scope.template = $scope.totalProducts.shoppingtemplate;
		
		console.log("Get the selected products from service --- "+ addToCartService.productIndex);
				
		var selectedProductsIndex=addToCartService.productIndex;
		var jsonP=$scope.totalProducts.products;
		
		var AddedP=[];
		for(var i=0; i < selectedProductsIndex.length; i++){
			var pindex=selectedProductsIndex[i];
			AddedP[i]=jsonP[pindex];
		
		}
		/*while(selectedProductsIndex.length>0){
			
			 AddedP.push(jsonP[selectedProductsIndex.pop()]);
		}*/
		//console.log("AddedP---"+AddedP)
		$scope.totalProducts.products=AddedP;
	}); 

	$scope.$on('messageChangeEvent', function() {
			console.log("I am from handleIdBroadcast of shoppingCartStart---"+addToCartService.productIndex);
	});		
	// console.log($scope.totalProducts.products.length);-- doesnt print because we are making jsonp request
														//for which the data exceutes only in function
	$scope.totalCost=function(){
		var d=$scope.totalProducts.products;
		var len=$scope.totalProducts.products.length;
		var s=0;
	   			for(var i=0;i<len;i++){
	   				var pCost=$scope.totalProducts.products[i];
	   				s = s+ pCost.cost*pCost.quantity;
	   			}
		return s;
	}
	$scope.totalQuantity=function(){
		var len=$scope.totalProducts.products.length;
		var q=0;
	   			for(var i=0;i<len;i++){
	   				var pCost=$scope.totalProducts.products[i];
	   				q = q+ pCost.quantity;
	   			}
		return q;
	}
	$scope.remove=function(i){
		$scope.totalProducts.products.splice(i,1);
	}
}
PhoneListCtrl.$inject=['$scope','$routeParams','Tenant','addToCartService','$location'];
shoppingCartStart.$inject=['$scope','$location', '$http','addToCartService'];
PhoneDetailCtrl.$inject=['$scope', '$routeParams', 'Product', 'Tenant','addToCartService', '$location'];



