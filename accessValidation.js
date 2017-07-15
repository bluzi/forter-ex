let validTokens = [];

const accessValidation = {
    expirationTime: 1000 * 60 * 10,

    get() {
        let accessToken = {
            guid: guid(),
            expire: new Date() - 0 + this.expirationTime,
        };

        validTokens.push(accessToken);

        return accessToken;
    },

    verify(guid) {
        validTokens = validTokens.filter(t => t.expire > new Date());

        if (!guid) {
            return false;
        }

        if (!guid) {
            return false;
        } const token = validTokens.find(t => t.guid === guid);
        if (!token) {
            return false;
        }

        return true;
    }
};

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

module.exports = accessValidation;