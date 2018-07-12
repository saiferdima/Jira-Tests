module.exports = {
    'Jira login': (client) => {
        let login = client.globals.adminLogin;
        let password = client.globals.adminPsw;
        let loginPage = client.page.loginPage();
        loginPage.navigate();
        loginPage.login(login, password);

    },

    'Go to Dashboard ': (client) => {
        let navigationPage = client.page.navigationPage();
        navigationPage.goToDashboard();
        navigationPage.expect.element('@dashboardItemHeader').to.be.visible;

    },

    'Create issue ': (client) => {
        let navigationPage = client.page.navigationPage();
        navigationPage.createIssue('Test summary', true);
        client.pause(1000)
            .end();
    },
};