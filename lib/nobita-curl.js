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

  try {
    const res = await axios(option);
    return res;
  } catch (error) {
    return {
      code: 500,
      data: error.config.data,
      msg: `error: ${error.config.url}`,
      error
    }
  }

}