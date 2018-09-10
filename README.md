# GAecommerce
Google Analytics Enhanced Ecommerce v 092018

This guide describes how to implement Universal Analytics Enhanced Ecommerce features using Google Tag Manager on a website.

Overview
Google Analytics Enhanced Ecommerce enables product impression, promotion, and sales data to be sent with any of your Google Analytics pageviews and events. Use pageviews to track product impressions and product purchases; and use events to track checkout steps and product clicks.

Before you Begin
We recommend reviewing the Enhanced Ecommerce Data Types and Actions section of the Enhanced Ecommerce Dev Guide to help you plan your implementation. The guide will help you understand which fields are required and optional for each of the ecommerce interactions you want to measure.

Enabling Enhanced Ecommerce
In most implementations, you should enable Enhanced Ecommerce on each of your Universal Analytics pageview or event tags. You have two options for enabling Enhanced Ecommerce in the tag editor screen of the web interface:

Implement using the Data Layer (Recommended)
Implement using a Custom JavaScript Macro
Although both methods provide equivalent ecommerce functionality, we recommend all websites that support a data layer use the Data Layer method. This guide presents the Data Layer method as the default, while Using a Custom JavaScript Macro is documented at the end of this guide.

Using the Data Layer
The following sections will show you how to use the data layer to measure the following enhanced ecommerce activities:

Product Impressions
Product Clicks
Product Detail Impressions
Add / Remove from Cart
Promotion Impressions
Promotion Clicks
Checkout
Purchases
Refunds
