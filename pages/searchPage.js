const searchComands = {
    searchForText(text) {
        this.waitForElementVisible('@searchTextInput')
            .setValue('@searchTextInput', [text,this.api.Keys.ENTER]);
        return this; // Return page object for chaining
    }
};

module.exports = {
    url: function () {
        return this.api.launchUrl+'/issues/?jql=';
    },
    commands: [searchComands],
    elements: {
        searchTextInput:{selector: 'input[id="searcher-query"]'},
        searchButton: {selector: 'button[original-title="Search for issues"]'},
        issueIdColumn: {selector: "//td[@class = 'issuekey']",locateStrategy: 'xpath'},
    }
};
