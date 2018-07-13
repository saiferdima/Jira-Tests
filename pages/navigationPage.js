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
            this.waitForElementVisible('@flagContainer')
                .click('@createIssueLink');
        }
        return this;

    },
};
const issuesMenuComands = {
    goToSearchForIssue(){
        var menu = this.section.menu;
        var issuesSubMenu = this.section.issuesSubMenu;
        menu.waitForElementVisible('@issuesDropdown')
            .click('@issuesDropdown');
        issuesSubMenu.waitForElementVisible('@searchForIssues')
            .click('@searchForIssues')
    }
};

module.exports = {
    url: function () {
        return this.api.launchUrl;
    },
    commands: [navigationCommands,issuesMenuComands],
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
        issuesSubMenu:{
            selector: 'div[id="find_link-content"]',
            elements:{
                currentSearch:{selector:'a[href="/issues/"'},
                searchForIssues:{selector:'a[href="/issues/?jql="'},
                myOpenIssues:{selector:'li[id="filter_lnk_my"'},
                reportedByMe:{selector:'li[id="filter_lnk_reported"'},
                manageFilters:{selector:'li[id="issues_manage_filters_link"'}
            }
        }

    }
};
