const farmsHelper = require('./irrigations');
exports.handler = async (event, context) => {
  try {
    //const farmsResults = await farmsHelper.getAScheduledIrrigation(7290417)
    //const farmsResults = await farmsHelper.listRealIrrigations(7290417)
    //const farmsResults = await farmsHelper.getARealIrrigations(29110648)


    console.log(farmsResults);
    return true;
  } catch (error) {
    console.error('Error:', error);
    throw new Error(`Handler Error: ${error}`);
  }
};
