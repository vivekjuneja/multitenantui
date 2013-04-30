describe('Product Listing for Tenants', function() {
	beforeEach(function() {
    	browser().navigateTo('../../app/index.html#/error.html');
  	});
   it('should automatically redirect to /error page when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/error.html");
   });
   
   describe('Verify whether all tenant pages land perfectly', function() {
	   	it('should render tenant1:GSShop product listing page when user navigates to the tenant', function() {
	   	  browser().navigateTo('#/site/gsshop/list');
	      expect(element('a.brand').text()).toBe("gsshop");
	    });
	    it('should render tenant2:Ditto product listing page when user navigates to the tenant', function() {
	   	  browser().navigateTo('#/site/ditto/list');
	      expect(element('#logo').text()).toBe("ditto");
	    });
	    it('should render tenant3:DNShop product listing page when user navigates to the tenant', function() {
	   	  browser().navigateTo('#/site/dnshop/list');
	      expect(element('#logo').text()).toMatch("dnshop");
	    });
	    it('should render tenant4:MShop product listing page when user navigates to the tenant', function() {
	   	  browser().navigateTo('#/site/mshop/list');
	      expect(element('#mshoplogo').text()).toMatch("mshop");
	    });
   });
   //--- User Story: 1---
   describe('User Story 1: Get List of Products for a Category', function(){
    	it('Should display category A (ie Computer) products on Shop A (GSShoop)', function(){
    		browser().navigateTo('#/site/gsshop/list');
    		element('.dropdown-toggle').click();
    		element('.dropdown-menu li:first a').click();
    		expect(element('.breadcrumb li:last').text()).toMatch("laptop");
    	});
    	it('Should display category B (ie Electronic) products on Shop B (Ditto)', function(){
    		browser().navigateTo('#/site/ditto/list');
    		expect(element('.sub-menu li:first a').text()).toMatch('Electronics');
    		element('.sub-menu li:first a').click();
    		expect(element('.breadcrumb li:last').text()).toMatch("Electronics");
    	});
    });
    //--- User Story: 2---
 	describe('User Story 2: Search for products', function(){
 		it('Should search for products across all categories on Shop C(DNShop)', function(){
 			browser().navigateTo('#/site/dnshop/list');
 			input('$parent.query').enter("samsung");
 			expect(repeater('.productlist2').count()).toBe(2);
 		});
 		it('Should search for products across under a specified category on ShopB(Ditto)', function(){
 			browser().navigateTo('#/site/ditto/list');
 			element('.sub-menu li:first a').click();
 			input('$parent.query').enter("samsung");
 			expect(repeater('.productlist2 :first').count()).toBe(1);
 		});
 	});
 	//User Story: 3
 	describe('User Story 3: Search for products', function(){
 		it('Should search for products across all categories on Shop C(DNShop)', function(){
 			browser().navigateTo('#/site/dnshop/list');
 			input('$parent.query').enter("samsung");
 			expect(repeater('.productlist2').count()).toBe(2);
 		});
 		it('Should search for products across all category on ShopD(Mshop)', function(){
 			browser().navigateTo('#/site/mshop/list');
 			input('$parent.query').enter("samsung");
 			expect(repeater('.productlist2').count()).toBe(2);
 		});
 	});
 	//User Story: 4
 	describe('User Story 4: View products under Promotion List', function(){
 		it('Should display different products under Best Seller Promotion list for ShopA(GSShop)', function(){
 			browser().navigateTo('#/site/gsshop/list');
 			expect(element('.best-seller h4').text()).toMatch('Best Seller Products');
 			var r = repeater('.best-seller li');
  			expect(r.count()).toBe(3);
  			expect(r.column(0)).toMatch(["Zync C18- C18 Combo","Samsung Galaxy S3","Toshibha"]);
 				
 		});
 		it('Should display different products under Best Seller Promotion list for ShopB(Ditto)', function(){
 			browser().navigateTo('#/site/ditto/list');
 			expect(element('.banner h4').text()).toMatch('Best Seller Products');
 			var r = repeater('.banner-product:first li');
  			expect(r.count()).toBe(3);
  			expect(r.column(0)).toMatch(["HP 2000","HTC Desire C","Toshibha"]);
 		});
  	});
 	//User Story :5
 	describe('User Story 5: View Products under Promotion List',function(){
 		it('Should display products under Best Seller Promotion list for ShopA(GSShop)', function(){
 			browser().navigateTo('#/site/gsshop/list');
 			expect(element('.best-seller h4').text()).toMatch('Best Seller Products');
 		});
 		it('Should display products under New Products and Best Seller Promotion list for ShopB(Ditto)', function(){
 			browser().navigateTo('#/site/ditto/list');
 			expect(element('.banner:first h4').text()).toMatch('Best Seller Products');
 			expect(element('#contentarea .banner h4').text()).toMatch('New Products');
 		});
 	});
 	//User Story :6
 	describe('User Story 6: View Product Rating',function(){
 		it('Should display product rating for ShopB(Ditto)', function(){
 			browser().navigateTo('#/site/ditto/list');
 			element('.sub-menu li:first a').click();
 			expect(element('.productlist2 li .rating').text()).toMatch("Rating");
 		});
 		it('Should not display products rating for ShopA(GSShop)', function(){
 			browser().navigateTo('#/site/gsshop/list');
 			expect(element('.productlist2 li .rating').text()).toMatch("Rating");
 		});
 	});
});

