module.exports = {
    before: function (client) {
        client.maximizeWindow();
    },
    'Demo test jira login': function (client) {

        var loginPage = client.page.loginPage();
        loginPage.navigate();
        loginPage.login('admin', 'admin');
        client.end();
    }
};