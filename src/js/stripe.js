var handler = StripeCheckout.configure({
  key: 'pk_test_EmVXulr0GFtxqRYKgvFe3sYM',
  image: '../assets/activbookings-logo.png',
  locale: 'auto',
  token: function(token) {
    // You can access the token ID with `token.id`.
    // Get the token ID to your server-side code for use.
  }
});

document.getElementById('customButton').addEventListener('click', function(e) {
  // Open Checkout with further options:
  handler.open({
    name: 'Bluefleet',
    description: 'GROTTO TRIPS',
    currency: 'eur',
    amount: 21750,
    zipCode: true
  });
  e.preventDefault();
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
  handler.close();
});
