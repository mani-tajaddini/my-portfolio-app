require("dotenv").config();

module.exports = {
  env: {
    SPACE: process.env.SPACE,
    ACCESSTOKEN: process.env.ACCESSTOKEN,
    PREVIEWSECRET: process.env.PREVIEWSECRET,
    PREVIEWTOKEN: process.env.PREVIEWTOKEN,
    MAILCHIMPAPIKEY: process.env.MAILCHIMPAPIKEY,
    GITALKCLIENTID: process.env.GITALKCLIENTID,
    GITALKCLIENTSECRET: process.env.GITALKCLIENTSECRET
  }
};
