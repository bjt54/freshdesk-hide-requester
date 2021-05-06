document.addEventListener("DOMContentLoaded", function () {
  // Initialize channel
    app.initialized().then(function (_client) {
        var client = _client;
    // App activate callback
        client.events.on('app.activated', function () {
      // Hide on-screen elements
            client.interface.trigger('hide', { id: 'to'} );
    });
  });
});
