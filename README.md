# GAecommerce
## Google Analytics Enhanced Ecommerce v 092018

This guide describes how to implement Universal Analytics Enhanced Ecommerce features using Google Tag Manager on a website.

### Overview

Google Analytics Enhanced Ecommerce enables product impression, promotion, and sales data to be sent with any of your Google Analytics pageviews and events. Use pageviews to track product impressions and product purchases; and use events to track checkout steps and product clicks.

### Before you Begin

We recommend reviewing the [Enhanced Ecommerce Data Types and Actions](https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#ecommerce-data) section of the [Enhanced Ecommerce Dev Guide](https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce) to help you plan your implementation. The guide will help you understand which fields are required and optional for each of the ecommerce interactions you want to measure.

### Enabling Enhanced Ecommerce

In most implementations, you should enable Enhanced Ecommerce on each of your Universal Analytics pageview or event tags. You have two options for enabling Enhanced Ecommerce in the tag editor screen of the web interface:

- **Implement using the Data Layer (Recommended)**
- Implement using a Custom JavaScript Macro

Although both methods provide equivalent ecommerce functionality, we recommend all websites that support a data layer use the Data Layer method. This guide presents the Data Layer method as the default, while [Using a Custom JavaScript Macro](https://developers.google.com/tag-manager/enhanced-ecommerce#macro) is documented at the end of this guide.

### Using the Data Layer

The following sections will show you how to use the data layer to measure the following enhanced ecommerce activities:

- [Product Impressions](https://developers.google.com/tag-manager/enhanced-ecommerce#product-impressions)
- [Product Clicks](https://developers.google.com/tag-manager/enhanced-ecommerce#product-clicks)
- [Product Detail Impressions](https://developers.google.com/tag-manager/enhanced-ecommerce#details)
- [Add / Remove from Cart](https://developers.google.com/tag-manager/enhanced-ecommerce#cart)
- [Promotion Impressions](https://developers.google.com/tag-manager/enhanced-ecommerce#promo-impressions)
- [Promotion Clicks](https://developers.google.com/tag-manager/enhanced-ecommerce#promo-clicks)
- [Checkout](https://developers.google.com/tag-manager/enhanced-ecommerce#checkout)
- [Purchases](https://developers.google.com/tag-manager/enhanced-ecommerce#purchases)
- [Refunds](https://developers.google.com/tag-manager/enhanced-ecommerce#refunds)



### Measuring Product Impressions

- Ecommerce Measurement: 

impressions
- Accepts Data: array of 

impressionFieldObjects

Measure product impressions by using the 

impression action and one or more 

impressionFieldObjects. The following example assumes details about the products displayed on a page are known at the time the page loads:

- [JS FILE](https://github.com/marcusRB/GAecommerce/blob/master/productimpressionsdetails.js)


### Measuring Product Clicks

### 

- Ecommerce Measurement: 

click
- Accepts Data: 

list, array of 

productFieldObjects

Measure clicks on product links by pushing a 

click action to the data layer, along with a 

productFieldObjectto represent the clicked product, as in this example:

- [JS FILE](https://github.com/marcusRB/GAecommerce/blob/master/productclickanddetails-gtm.js)

### Measuring Views of Product Details

### 

- Ecommerce Measurement: 

detail
- Accepts Data: 

list, array of 

productFieldObjects

Measure a view of product details by pushing a 

detail action to the data layer, along with one or more 

productFieldObjects representing the products being viewed:

- [JS FILE](https://github.com/marcusRB/GAecommerce/blob/master/productDetails_measuringView.js)

### Measuring Promotions

### 

You can measure both impressions and clicks on internal site promotions, such as banners displayed on the site itself advertising a sale on a particular subset of products, or an offer for free shipping.

#### Measuring Promotion Impressions

### 

- Ecommerce Measurement: 

promoView
- Accepts Data: array of 

promoFieldObjects

To measure a promotion impression, set the 

promoView key in your ecommerce data layer var to a 

promoFieldObject that describes the promotions displayed to users on the page:

- [JS FILE](https://github.com/marcusRB/GAecommerce/blob/master/impresionPromo.js)
