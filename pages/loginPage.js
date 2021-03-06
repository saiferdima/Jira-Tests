const loginComands = {
    login(login, password) {
        this.waitForElementVisible('@loginInput');
            this.api.pause(500);
            this.setValue('@loginInput', login)
            .waitForElementVisible('@passwordInput');
            this.api.pause(500);
        this.setValue('@passwordInput', password)
            .click('@submitButton');
        this.waitForElementVisible('@settingsButton');

        return this; // Return page object for chaining
    }
};

module.exports = {
    url: function () {
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
