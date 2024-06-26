const farmsHelper = require('./farms');
exports.handler = async (event, context) => {
  try {
    // Fetch Wiseconn farms related data from Wiseconn API
    //const farmsResults = await farmsHelper.listFarms();
    //const farmsResults = await farmsHelper.getWiseconnFarm(58631);
    //const farmsResults = await farmsHelper.listFarmsZones(58631);
    //const farmsResults = await farmsHelper.getFarmHydraulics(58631);
    //const farmsResults = await farmsHelper.listFarmNodes(58631);
    const farmsResults = await farmsHelper.listFarmPumpSys(58631);
    //const farmsResults = await farmsHelper.listFarmScheduledIrrigations(58631,"2023-12-20","2023-12-21");
    //const farmsResults = await farmsHelper.listFarmTriggeredAlarms(58631,"2023-12-20","2023-12-21");
    //const farmsResults = await farmsHelper.listFarmIrrigations(58631,"2023-12-20","2023-12-21");
    //const farmsResults = await farmsHelper.listFarmMeasures(58631);
    //const farmsResults = await farmsHelper.listtriggeredFarmAlerts(58631,"2023-12-20","2023-12-21");
    //const farmsResults = await farmsHelper.listFarmFlushingStations(58631);

    console.log(farmsResults);
    return true;
  } catch (error) {
    console.error('Error:', error);
    throw new Error(`Handler Error: ${error}`);
  }
};
