const navigationCommands = {
    goToDashboard() {
        this.waitForElementVisible('@jiraLogoButton', 1000)
            .click('@jiraLogoButton');
        this.waitForElementVisible('@settingsButton', 2000);

        return this; // Return page object for chaining
    }
};

module.exports = {
    url: function() {
        return this.api.launchUrl;
    },
    commands: [navigationCommands],
    elements: {
        jiraLogoButton: {selector: 'h1[id="logo"]'},
        dashboardDropdown: {selector: 'a[id="home_link"'},
        projectsDropdown: {selector: 'a[id="browse_link"]'},
        issuesDropdown: {selector: 'a[id="find_link"'},
        boardsDropdown: {selector: 'a[id="greenhopper_menu"'},
        createButton: {selector: 'a[id="create_link"'},
        settingsButton: {selector: 'span[class="aui-icon aui-icon-small aui-iconfont-configure"'},
        dashboardItemHeader: {selector: 'div[class="dashboard-item-header"'}
    }
};
