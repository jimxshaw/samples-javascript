var dataService = function () {
    var urlBase = 'http://localhost:38129/api/customers',

    authenticate = function (authToken) {

    },

    getCustomers = function () {
        return $.getJSON(urlBase);
    },

    updateCustomer = function (cust) {
        return $.ajax({
            url: urlBase + '/' + cust.ID,
            data: cust,
            type: 'PUT'
        });
    },

    getCustomer = function (id) {
        return $.getJSON(urlBase + '/' + id);
    },

    getCustomerJSONP = function (id) {
        return $.getJSON(urlBase + '/' + id + '?callback=?');
    },

    insertCustomer = function (cust) {
        return $.ajax({
            url: urlBase,
            data: cust,
            type: 'POST'
        });
    },

    deleteCustomer = function (id) {
        return $.ajax({
            url: urlBase + '/' + id,
            type: 'DELETE'
        });
    },

    getOrders = function (id) {
        return $.getJSON(urlBase + '/' + id + '/orders');
    };

    return {
        getCustomers: getCustomers,
        updateCustomer: updateCustomer,
        authenticate: authenticate,
        getCustomer: getCustomer,
        getCustomerJSONP: getCustomerJSONP,
        insertCustomer: insertCustomer,
        deleteCustomer: deleteCustomer,
        getOrders: getOrders
    };
}();