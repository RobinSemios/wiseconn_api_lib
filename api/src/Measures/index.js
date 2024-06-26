const farmsHelper = require('./measures');
exports.handler = async (event, context) => {
  try {
    //const farmsResults = await farmsHelper.listNodeMeasures(84641)1-332555
    //const farmsResults = await farmsHelper.getAMeasure("1-332555")
    //const farmsResults = await farmsHelper.listMeasurementsData("1-332555","2023-12-20","2023-12-21")
    console.log(farmsResults);
    return true;
  } catch (error) {
    console.error('Error:', error);
    throw new Error(`Handler Error: ${error}`);
  }
};
