const detailsComands = {
    changeStatus (action){
        this.api.useXpath()
            .click( "//div[@id='opsbar-opsbar-transitions']//span[@class='trigger-label'][contains(text(),'"+action+"')]");
        this.api.useCss();
    },

    deleteIssue (){
        this.click('@moreButton').
            waitForElementVisible('@deleteActionButton')
            .click('@deleteActionButton')
            .waitForElementVisible('@deleteActionSubmitButton')
            .click('@deleteActionSubmitButton');
    },
};

module.exports = {
    url: function (issueId) {
        return this.api.launchUrl+'/browse/'+issueId;
    },
    commands: [detailsComands],
    elements: {
        editButton: {selector: 'a[id="edit-issue"]'},
        commentButton: {selector: 'a[id="comment-issue"'},
        assignButton: {selector: 'a[id="assign-issue"]'},
        moreButton: {selector: 'a[id="opsbar-operations_more"]'},
        toDoButton: {selector: "//div[@id='opsbar-opsbar-transitions']//span[@class='trigger-label'][contains(text(),'To Do')]" , locateStrategy: 'xpath'},
        inProgressButton:  {selector: "//div[@id='opsbar-opsbar-transitions']//span[@class='trigger-label'][contains(text(),'In Progress')]" , locateStrategy: 'xpath'},
        doneButton: {selector: "//div[@id='opsbar-opsbar-transitions']//span[@class='trigger-label'][contains(text(),'Done')]" , locateStrategy: 'xpath'},
        adminButton: {selector: 'a[id="opsbar-admin_more"]'},

        deleteActionButton: {selector: 'aui-item-link[id="delete-issue"'},
        deleteActionSubmitButton: {selector: 'input[id="delete-issue-submit"'}
    }
};
