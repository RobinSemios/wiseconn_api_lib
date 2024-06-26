const farmsHelper = require('./zones');
exports.handler = async (event, context) => {
  try {
    //const farmsResults = await farmsHelper.getZone(111605)
    //const farmsResults = await farmsHelper.listZoneMeasures(111605)
    const farmsResults = await farmsHelper.listZoneScheduledIrrigations(111605,"2023-12-20","2023-12-21");
    //const farmsResults = await farmsHelper.getZoneHydraulics(111605)
    //const farmsResults = await farmsHelper.getZoneSoilHistoricalSetting(111605,"2023-12-20","2023-12-21");
    //farmsResults = await farmsHelper.listZoneTriggeredAlarms(111605,"2023-12-01","2023-12-21")
    //farmsResults = await farmsHelper.listZoneIrrigations(111605,"2023-12-20","2023-12-21")
    //farmsResults = await farmsHelper.listtriggeredZoneAlerts(111605,"2023-12-20","2023-12-21")

    console.log(farmsResults);
    return true;
  } catch (error) {
    console.error('Error:', error);
    throw new Error(`Handler Error: ${error}`);
  }
};
