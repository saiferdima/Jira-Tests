module.exports = {
    'Demo test jira login' : function (client) {
        client
            .url('http://localhost:8080')
            .waitForElementVisible('body', 1000)
            .waitForElementVisible('input[id="login"]', 1000)
            .assert.title('System Dashboard - JIRA')
            .assert.visible('input[id="login-form-username"]')
            .setValue('input[id="login-form-username"]', 'admin')
            .setValue('input[id="login-form-password"', 'admin')

            .click('input[id="login"]')
            .pause(1000)
            .assert.visible('span[class="aui-icon aui-icon-small aui-iconfont-configure"')
            .end()
    }
}