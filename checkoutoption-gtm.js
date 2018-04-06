<script>
/**
 * A function to handle a click leading to a checkout option selection.
 */
function onCheckoutOption(step, checkoutOption) {
  dataLayer.push({
    'event': 'checkoutOption',
    'ecommerce': {
      'checkout_option': {
        'actionField': {'step': step, 'option': checkoutOption}
      }
    }
  });
}
</script>