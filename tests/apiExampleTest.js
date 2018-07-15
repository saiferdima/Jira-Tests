module.exports = {
    //TBD
     '@disabled': true,
    'Jira login': (client) => {
        let login = client.globals.adminLogin;
        let password = client.globals.adminPsw;
        let loginPage = client.page.loginPage();
        loginPage.navigate();
        loginPage.login(login, password);
    },

    "Retrieve API (GET)": function (client) {
        var apiUrl = 'http://localhost:8080/rest/api/latest/issue/createmeta';
        client.apiGet(apiUrl, function (response) {
            console.log(response.body);
            var data = JSON.parse(response.body);
            console.log(data.status);
            client.assert.equal(response.statusCode, 200, "200 OK");
        });
    },

    "Retrieve API with speragent (GET)": function (client) {
        var apiUrl = 'http://localhost:8080/rest/api/latest/issue/createmeta';
        client.apiGetSA(apiUrl,function (response) {
            console.log(response.body);
            client.assert.equal(response.statusCode, 200, "200 OK");
            client.end();
        })
    },

    // "Retrieve API (POST)": function (client) {
    //     var apiUrl = 'http://localhost:8080/rest/api/2/issue/';
    //     var postData = {'lorem':'ipsum'};
    //     var postHeaders = {'Content-Type': 'application/json'};
    //     client.apiPost(apiUrl, postData,postHeaders,'', function (response) {
    //         console.log(response.body);
    //         var data = JSON.parse(response.body);
    //         console.log(data.status);
    //         client.assert.equal(response.statusCode, 200, "200 OK");
    //         client.end();
    //     });
    //
    // }

};