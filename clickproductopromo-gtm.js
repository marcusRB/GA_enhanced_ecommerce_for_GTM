<script>
/**
 * Call this function when a user clicks on a promotion. This function uses the eventCallBack
 * datalayer variable to handle navigation after the ecommerce data is sent to Google Analytics.
 *
 * @param {Object} promoObj An object representing an internal site promotion.
 */
function onPromoClick(promoObj) {
  dataLayer.push({
    'event': 'promotionClick',
    'ecommerce': {
      'promoClick': {
        'promotions': [
         {
           'id': promoObj.id,                         // Name or ID is required.
           'name': promoObj.name,
           'creative': promoObj.creative,
           'position': promoObj.pos
         }]
      }
    },
    'eventCallback': function() {
      document.location = promoObj.destinationUrl;
    }
  });
}
</script>