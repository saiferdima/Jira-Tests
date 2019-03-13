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
        navigationPage.createIssue(client.globals.issueSummary, true);
        client.pause(1000)
        

    },

    'Change status ': (client) => {
        let issueDetailsPage = client.page.issueDetailsPage();
        let navigationPage = client.page.navigationPage();
        issueDetailsPage.changeStatus("Done");
        navigationPage.waitForElementNotVisible('@flagContainer');
        client.pause(1000)
    },


    'Delete issue ': (client) => {
        let issueDetailsPage = client.page.issueDetailsPage();
        let navigationPage = client.page.navigationPage();
        let searchPage = client.page.searchPage();
        issueDetailsPage.deleteIssue();
        navigationPage.waitForElementPresent('@flagContainer')
            .getText('@flagContainer', (result) => {
                console.log("result"+result.value);
                let removedIssue = result.value.split(" ")[0];
                console.log("removedIssue "+removedIssue);
                navigationPage.waitForElementNotVisible('@flagContainer');
                navigationPage.goToSearchForIssue();
                searchPage.searchForText(client.globals.issueSummary);
                searchPage.expect.element('@issueIdColumn').to.not.be.present;
                client.pause(1000)
                    .end();
            });
    },


};