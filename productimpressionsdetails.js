<script>
// Measures product impressions and also tracks a standard
// pageview for the tag configuration.
// Product impressions are sent by pushing an impressions object
// containing one or more impressionFieldObjects.
dataLayer.push({
  'ecommerce': {
    'currencyCode': 'EUR',                       // Local currency is optional.
    'impressions': [
     {
       'name': 'Triblend Android T-Shirt',       // Name or ID is required.
       'id': '12345',
       'price': '15.25',
       'brand': 'Google',
       'category': 'Apparel',
       'variant': 'Gray',
       'list': 'Search Results',
       'position': 1
     },
     {
       'name': 'Donut Friday Scented T-Shirt',
       'id': '67890',
       'price': '33.75',
       'brand': 'Google',
       'category': 'Apparel',
       'variant': 'Black',
       'list': 'Search Results',
       'position': 2
     }]
  }
});
</script>