const navigationCommands = {

    goToDashboard() {
        var menu = this.section.menu;
        menu.waitForElementVisible('@jiraLogoButton')
            .click('@jiraLogoButton');
        menu.waitForElementVisible('@settingsButton');

        return this; // Return page object for chaining
    },
    createIssue(summary, navigateToDetailFlag) {
        var menu = this.section.menu;
        var createIssue = this.section.issueCreate;
        menu.waitForElementVisible('@jiraLogoButton')
            .click('@createButton');
        createIssue.waitForElementVisible('@createButton')
            .setValue('@summary', summary)
            .click('@createButton')
            .waitForElementNotPresent('@createButton');
        if(navigateToDetailFlag){
            this.waitForElementPresent('@flagContainer')
                .click('@createIssueLink');
        }
        return this;

    }
};

module.exports = {
    url: function () {
        return this.api.launchUrl;
    },
    commands: [navigationCommands],
    elements: {
        dashboardItemHeader: {selector: 'div[class="dashboard-item-header"'},
        flagContainer: {selector: 'div[id="aui-flag-container"]'},
        createIssueLink: {selector: 'a[class="issue-created-key issue-link"]'}
    },
    sections: {
        menu: {
            selector: 'nav[role="navigation"]',
            elements: {
                jiraLogoButton: {selector: 'h1[id="logo"]'},
                dashboardDropdown: {selector: 'a[id="home_link"'},
                projectsDropdown: {selector: 'a[id="browse_link"]'},
                issuesDropdown: {selector: 'a[id="find_link"'},
                boardsDropdown: {selector: 'a[id="greenhopper_menu"'},
                createButton: {selector: 'a[id="create_link"'},
                settingsButton: {selector: 'span[class="aui-icon aui-icon-small aui-iconfont-configure"'},
            },
        },
        issueCreate: {
            selector: 'div[id="create-issue-dialog"]',
            elements: {
                summary: {selector: 'input[id="summary"]'},
                createButton: {selector: 'input[id="create-issue-submit"]'},

            },
        },

    }
};
