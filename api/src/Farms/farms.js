/* eslint-disable max-len */
const fetch = require('node-fetch');
const WISECONN_API_HOST = process.env.WISECONN_API_HOST;
const WISECONN_API_KEY = process.env.WISECONN_API_KEY;

/**
 * Fetch Wiseconn farms info related data from Wiseconn API
 *
 * @returns 
 */
const listFarms = async () => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/farms`, {
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
        console.log('listFarms Error: ', err);
        throw err;
    }
}

/**
 * Fetch Wiseconn specific farm related data from Wiseconn API
 * @param farmId
 * @returns 
 */
const getWiseconnFarm = async (farmId) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/farms/${farmId}`, {
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
        console.log('getWiseconnFarm Error!: ', err);
        throw err;
    }
}

/**
 * Fetch Wiseconn zone related data from Wiseconn API
 * @param farmId
 * @returns 
 */
const listFarmsZones = async (farmId) => {
    try{
        const response = await fetch(`${WISECONN_API_HOST}/farms/${farmId}/zones`, {
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
    }catch (err) {
        console.log('listFarmsZones Error: ', err);
        throw err;
    }
}

/**
 * Fetch Wiseconn hydraulics related data from Wiseconn API
 * @param farmId
 * @returns 
 */
const getFarmHydraulics = async (farmId) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/farms/${farmId}/hydraulics`, {
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
        console.log('getFarmHydraulics Error: ', err);
        throw err;
    }
}   

/**
 * Fetch Wiseconn all nodes in a farm identified by id
 * @param farmId
 * @returns 
 */
const listFarmNodes = async (farmId) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/farms/${farmId}/nodes`, {
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
        console.log('listFarmNodes Error: ', err);
        throw err;
    }
}

/**
 * Fetch Wiseconn pump systems from one farm identified by Id that the user has permission to access
 * @param farmId
 * @returns 
 */
const listFarmPumpSys = async (farmId) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/farms/${farmId}/pumpSystems`, {
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
        console.log('listFarmPumpSys Error: ', err);
        throw err;
    }
} 

/**
 * Fetch Wiseconn pump systems from one farm identified by Id that the user has permission to access
 * @param farmId
 * @param initTime
 * @param endTime
 * @returns 
 */
const listFarmScheduledIrrigations = async (farmId, initTime, endTime) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/farms/${farmId}/irrigations?endTime=${endTime}&initTime=${initTime}`, {
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
        console.log('listFarmScheduledIrrigations Error: ', err);
        throw err;
    }
} 

/**
 * Fetch Wiseconn Return all triggered alarms identified by a Farm Id that the user has permission 
 * to access that start and end within a time range from one farm
 * @param farmId
 * @param initTime
 * @param endTime
 * @returns 
 */
const listFarmTriggeredAlarms = async (farmId, initTime, endTime) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/farms/${farmId}/alarms/triggered?endTime=${endTime}&initTime=${initTime}`, {
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
        console.log('listFarmTriggeredAlarms Error: ', err);
        throw err;
    }
}

/**
 * List All Irrigation Events of a Farm identified by a Farm Id that start and end 
 * within a time range (30 days maximum)
 * @param farmId
 * @param initTime
 * @param endTime
 * @returns 
 */
const listFarmIrrigations = async (farmId, initTime, endTime) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/farms/${farmId}/realIrrigations?initTime=${initTime}&endTime=${endTime}`, {
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
        console.log('listFarmIrrigations Error: ', err);
        throw err;
    }
} 
/**
 * It will return a list of available Measurements, indicating the Id, location, variable, unit
 * @param farmId
 * @returns 
 */
const listFarmMeasures = async (farmId) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/farms/${farmId}/measures`, {
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
        console.log('listFarmMeasures Error: ', err);
        throw err;
    }
}

/**
 * It will return all alerts from one farm identified by Id that the user have permission
 * @param farmId
 * @param initTime
 * @param endTime
 * @returns 
 */
const listtriggeredFarmAlerts = async (farmId,initTime,endTime) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/farms/${farmId}/alerts/triggered?endTime=${endTime}&initTime=${initTime}`, {
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
        console.log('listtriggeredFarmAlerts Error: ', err);
        throw err;
    }
}

/**
 * It will returns Farm´s flushing stations
 * @param farmId
 * @returns 
 */
/*const listFarmFlushingStations = async (farmId) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/farms/${farmId}/backflushing`, {
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
        console.log('listFarmFlushingStations Error: ', err);
        throw err;
    }
}*/

module.exports = {
    listFarms,
    getWiseconnFarm,
    listFarmsZones,
    getFarmHydraulics,
    listFarmNodes,
    listFarmPumpSys,
    listFarmScheduledIrrigations,
    listFarmTriggeredAlarms,
    listFarmIrrigations,
    listFarmMeasures,
    listtriggeredFarmAlerts
    //listFarmFlushingStations
  }


  