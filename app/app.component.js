(function(app) {
    app.AppComponent = ng.core.Component({
        selector: 'my-app',
        template: '<h1>Hello World, Its my First Angular 2 App</h1>'
    })
    .Class({
        constructor: function() {}
    });
})(window.app || (window.app = {}));
