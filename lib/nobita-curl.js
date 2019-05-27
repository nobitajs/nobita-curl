const axios = require('axios');
const _ = require('lodash');

module.exports = async (option) => {
  let ctx = this;
  option = _.merge({
    headers: {
      Cookie: ctx.headers ? ctx.headers.cookie : '',
      referer: ctx.headers ? ctx.headers.referer : '',
    },
    responseType: 'json',
  }, option);

  try {
    const res = await axios(option);
    return res;
  } catch (error) {
    return {
      status: 500,
      data: {
        code: 500,
        data: error.config,
        msg: `error: ${error.config.url}`
      }
    }
  }

}