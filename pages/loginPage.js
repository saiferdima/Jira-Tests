const loginComands = {
    login(login, password) {
        this.waitForElementVisible('@submitButton', 3000)
            .setValue('@loginInput', login)
            .setValue('@passwordInput', password)
            .click('@submitButton');
        this.waitForElementVisible('@settingsButton', 2000);

        return this; // Return page object for chaining
    }
};

module.exports = {
    url: function() {
        return this.api.launchUrl;
    },
    commands: [loginComands],
    elements: {
        loginInput: {selector: 'input[id="login-form-username"]'},
        passwordInput: {selector: 'input[id="login-form-password"'},
        submitButton: {selector: 'input[id="login"]'},
        settingsButton: {selector: 'span[class="aui-icon aui-icon-small aui-iconfont-configure"'}
    }
};
