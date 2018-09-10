<script>
// Measure a view of product details. This example assumes the detail view occurs on pageload,
// and also tracks a standard pageview of the details page.
dataLayer.push({
  'ecommerce': {
    'detail': {
      'actionField': {'list': 'Apparel Gallery'},    // 'detail' actions have an optional list property.
      'products': [{
        'name': 'Triblend Android T-Shirt',         // Name or ID is required.
        'id': '12345',
        'price': '15.25',
        'brand': 'Google',
        'category': 'Apparel',
        'variant': 'Gray'
       }]
     }
   }
});
</script>
