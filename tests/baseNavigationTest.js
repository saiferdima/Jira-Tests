module.exports = {

    before: function (client) {
        client.maximizeWindow();
    },
    'Jira login': function (client) {
        var loginPage = client.page.loginPage();
        loginPage.navigate();
        loginPage.login('admin', 'admin');

    },

    'Go to Dashboard ': function (client) {
        var navigationPage = client.page.navigationPage();
        navigationPage.goToDashboard();
        navigationPage.expect.element('@dashboardItemHeader').to.be.visible;

    },

    'Create issue ': function (client) {
        var navigationPage = client.page.navigationPage();
        var createIssue = navigationPage.section.issueCreate;
        navigationPage.createIssue('Test summary',true);
        client.pause(1000)
        .end();
    },
};