const axios = require('axios');
const merge = require('lodash/merge');

module.exports = async (option) => {
  let ctx = this;
  option = merge({
    headers: {
      Cookie: ctx.headers ? ctx.headers.cookie : '',
      referer: ctx.headers ? ctx.headers.referer : '',
    },
    responseType: 'json',
  }, option);
  return axios(option);
}