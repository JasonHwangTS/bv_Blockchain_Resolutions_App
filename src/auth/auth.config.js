// auth0 config parameters to connect to TSPL Auth0

const config = {
  domain: 'login.board.vision',
  clientID: 'OP0Wh7ZWxs14XuhhU1ZLG1A9w1jHB5Zd',
  redirectUri: 'http://localhost:3000/callback',
  audience: 'https://dev.board.vision.com',
  responseType: 'token id_token',
  scope: 'openid'
};

export default config;