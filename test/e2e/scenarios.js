'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

/*describe('PhoneCat App', function() {

  it('should redirect index.html to index.html#/phones', function() {
    browser().navigateTo('../../app/index.html');
    expect(browser().location().url()).toBe('/phones');
  });


  describe('Phone list view', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html#/phones');
    });


    it('should filter the phone list as user types into the search box', function() {
      expect(repeater('.phones li').count()).toBe(20);

      input('query').enter('nexus');
      expect(repeater('.phones li').count()).toBe(1);

      input('query').enter('motorola');
      expect(repeater('.phones li').count()).toBe(8);
    });


    it('should be possible to control phone order via the drop down select box', function() {
      input('query').enter('tablet'); //let's narrow the dataset to make the test assertions shorter

      expect(repeater('.phones li', 'Phone List').column('phone.name')).
          toEqual(["Motorola XOOM\u2122 with Wi-Fi",
                   "MOTOROLA XOOM\u2122"]);

      select('orderProp').option('Alphabetical');

      expect(repeater('.phones li', 'Phone List').column('phone.name')).
          toEqual(["MOTOROLA XOOM\u2122",
                   "Motorola XOOM\u2122 with Wi-Fi"]);
    });


    it('should render phone specific links', function() {
      input('query').enter('nexus');
      element('.phones li a').click();
      expect(browser().location().url()).toBe('/phones/nexus-s');
    });
  });


  describe('Phone detail view', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html#/phones/nexus-s');
    });


    it('should display nexus-s page', function() {
      expect(binding('phone.name')).toBe('Nexus S');
    });


    it('should display the first phone image as the main phone image', function() {
      expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.0.jpg');
    });


    it('should swap main image if a thumbnail image is clicked on', function() {
      element('.phone-thumbs li:nth-child(3) img').click();
      expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.2.jpg');

      element('.phone-thumbs li:nth-child(1) img').click();
      expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.0.jpg');
    });
  });
});

*/

/*===========e2e test cases for shopping cart=========*/
describe('Shopping Cart', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html#/error.html');
  });


  it('should automatically redirect to /error page when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/error.html");
  });
  	

  describe('Flipkart', function() {

    beforeEach(function() {
      browser().navigateTo('#/site/flipkart/cart/order');
    });

   	it('should render tenantA Shopping cart when user navigates to /tenantA', function() {
      expect(element('[ng-view] h2:first').text()).toBe(" < flipkart");
    });
    
    it('should verify text on tenant A', function() {
      expect(element('[ng-view] h4:first').text()).toBe("Shopping Cart : flipkart");
    });
    
    it('should verify the unit quantity, total productQuantity and totalCost',function(){
    	//expect(element('table tr td input').count()).toBe(2);
    	expect(input('product.quantity').val()).toEqual('1');
    	expect(element('#totalQ').text()).toEqual(' 5');
    	expect(element('#totalC').text()).toEqual('$1,101.00');
         	
    });
    it('should accept the quantity from the user and check totalQuantity', function(){
     	input('product.quantity').enter('2')
    	expect(input('product.quantity').val()).toEqual('2');
       	expect(element('tr.productRow td.pc:first').text()).toEqual(" $298.00");
       	expect(element('#totalQ').text()).toEqual(' 10');
    });
	it('should remove the product on clicking remove button',function(){
		//expect(element('td.removeProduct :first').count()).toBe(1);
		element('td.removeProduct :first').click()
		expect(repeater('.productRow').count()).toBe(4);
	});	
		    

  });

  describe('Amazon', function(){
  	  beforeEach(function() {
        browser().navigateTo('#/site/amazon/cart/order');
      });
	  it('should redirect to /cart/amazon when location hash/fragment is /cart/amazon', function() {
	    browser().navigateTo("#/site/amazon/cart/order");
	  });
	  it('should render Amazon Shopping cart when user navigates to /cart/amazon', function() {
        expect(element('[ng-view] h4:first').text()).toBe("Shopping Cart : amazon");
      });
  });
});

