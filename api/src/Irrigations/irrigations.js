/* eslint-disable max-len */
const fetch = require('node-fetch');
const WISECONN_API_HOST = process.env.WISECONN_API_HOST;
const WISECONN_API_KEY = process.env.WISECONN_API_KEY;

/**
 * Return a Scheduled Irrigation identified by Id
 * @param irrigationId
 * @returns 
 */
const getAScheduledIrrigation = async (irrigationId) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/irrigations/${irrigationId}`, {
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
        console.log('getAScheduledIrrigation Error!: ', err);
        throw err;
    }
}

/**
 * Return all irrigations events associated to a scheduled irrigation identified by Id

 * @param irrigationId
 * @returns 
 */
const listRealIrrigations = async (irrigationId) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/irrigations/${irrigationId}/realIrrigations`, {
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
        console.log('listRealIrrigations Error!: ', err);
        throw err;
    }
}


/**
 * Return a irrigation event identified by Id
 * @param realirrigationId
 * @returns 
 */
const getARealIrrigations = async (realirrigationId) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/realIrrigations/${realirrigationId}`, {
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
        console.log('getARealIrrigations Error!: ', err);
        throw err;
    }
}
module.exports = {
    getAScheduledIrrigation,
    listRealIrrigations,
    getARealIrrigations
  }


  