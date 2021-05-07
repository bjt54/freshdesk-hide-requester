document.addEventListener("DOMContentLoaded", function () {
  // Initialize channel
    app.initialized().then(function (_client) {
        var client = _client;
    // App activate callback
        client.events.on('app.activated', function () {
      // Hide on-screen elements
            client.interface.trigger('hide', {id: 'to'});
            //The following fields can be hidden from certain agents by using Freshdesk's permissioning system
            //client.interface.trigger('hide', {id: 'contact.phone'});
            //client.interface.trigger('hide', {id: 'contact.mobile'});
            //client.interface.trigger('hide', {id: 'contact.email'});
    });
  });
});
