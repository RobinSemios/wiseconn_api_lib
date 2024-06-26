/* eslint-disable max-len */
const fetch = require('node-fetch');
const WISECONN_API_HOST = process.env.WISECONN_API_HOST;
const WISECONN_API_KEY = process.env.WISECONN_API_KEY;

/**
 * Returns a Zone identified by Id that the user has permission to access
 * @param zoneId
 * @returns 
 */
const getZone = async (zoneId) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/zones/${zoneId}`, {
            method: 'GET',
            headers: {
                api_key: WISECONN_API_KEY,
                Accept: 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error!! Status: ${response.status}`);
        }
        return await response.json();
    } catch (err) {
        console.log('getZone Error!: ', err);
        throw err;
    }
}

/**
 * Returns all Measurements from a zone identified by Id that the user has permission to access
 * @param zoneId
 * @returns 
 */
const listZoneMeasures = async (zoneId) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/zones/${zoneId}/measures`, {
            method: 'GET',
            headers: {
                api_key: WISECONN_API_KEY,
                Accept: 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error!! Status: ${response.status}`);
        }
        return await response.json();
    } catch (err) {
        console.log('listZoneMeasures Error!: ', err);
        throw err;
    }
}

/**
 * List All Scheduled Irrigations of a Zone identified by a Zone Id that start and 
 * end within a time range (60 days maximum)
 * @param zoneId
 * @param initTime
 * @param endTime
 * @returns 
 */
const listZoneScheduledIrrigations = async (zoneId,initTime,endTime) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/zones/${zoneId}/irrigations?initTime=${initTime}&endTime=${endTime}`, {
            method: 'GET',
            headers: {
                api_key: WISECONN_API_KEY,
                Accept: 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error!! Status: ${response.status}`);
        }
        return await response.json();
    } catch (err) {
        console.log('listZoneScheduledIrrigations Error!: ', err);
        throw err;
    }
}

/**
 * Returns a list of Valves associated with a zoneId that the user has permission to access
 * @param zoneId
 * @returns 
 */
const getZoneHydraulics = async (zoneId) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/zones/${zoneId}/hydraulics`, {
            method: 'GET',
            headers: {
                api_key: WISECONN_API_KEY,
                Accept: 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error!! Status: ${response.status}`);
        }
        return await response.json();
    } catch (err) {
        console.log('getZoneHydraulics Error!: ', err);
        throw err;
    }
}

/**
 * Returns all historical soil moisture associated with a zoneId that the user has permission to access
 * @param zoneId
 * @param initTime
 * @param endTime
 * @returns 
 */
const getZoneSoilHistoricalSetting = async (zoneId,initTime,endTime) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/zones/${zoneId}/soilSettings?initTime=${initTime}&endTime=${endTime}`, {
            method: 'GET',
            headers: {
                api_key: WISECONN_API_KEY,
                Accept: 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error!! Status: ${response.status}`);
        }
        return await response.json();
    } catch (err) {
        console.log('getZoneSoilHistoricalSetting Error!: ', err);
        throw err;
    }
}

/**
 * Returns all Alarms triggered in a Zone identified by a Zone Id that start and end within a time range
 * @param zoneId
 * @param initTime
 * @param endTime
 * @returns 
 */
const listZoneTriggeredAlarms = async (zoneId, initTime, endTime) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/zones/${zoneId}/alarms/triggered?endTime=${endTime}&initTime=${initTime}`, {
            method: 'GET',
            headers: {
                api_key: WISECONN_API_KEY,
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            // Handle HTTP errors
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();

    } catch (err) {
        console.log('listZoneTriggeredAlarms Error: ', err);
        throw err;
    }
}

/**
 * List All Irrigation Events of a Zone identified by a Zone Id 
 * that start and end within a time range (60 days maximum)
 * @param zoneId
 * @param initTime
 * @param endTime
 * @returns 
 */
const listZoneIrrigations = async (zoneId, initTime, endTime) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/zones/${zoneId}/realIrrigations?initTime=${initTime}&endTime=${endTime}`, {
            method: 'GET',
            headers: {
                api_key: WISECONN_API_KEY,
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            // Handle HTTP errors
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();

    } catch (err) {
        console.log('listZoneIrrigations Error: ', err);
        throw err;
    }
} 

/**
 * Return all alerts from one zone identified by Id that the user have permission
 * @param zoneId
 * @param initTime
 * @param endTime
 * @returns 
 */
const listtriggeredZoneAlerts = async (zoneId,initTime,endTime) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/zones/${zoneId}/alerts/triggered?endTime=${endTime}&initTime=${initTime}`, {
            method: 'GET',
            headers: {
                api_key: WISECONN_API_KEY,
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            // Handle HTTP errors
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();

    } catch (err) {
        console.log('listtriggeredZoneAlerts Error: ', err);
        throw err;
    }
}

module.exports = {
    getZone,
    listZoneMeasures,
    listZoneScheduledIrrigations,
    getZoneHydraulics,
    getZoneSoilHistoricalSetting,
    listZoneTriggeredAlarms,
    listZoneIrrigations,
    listtriggeredZoneAlerts
  }


  