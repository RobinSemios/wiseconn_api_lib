/* eslint-disable max-len */
const fetch = require('node-fetch');
const WISECONN_API_HOST = process.env.WISECONN_API_HOST;
const WISECONN_API_KEY = process.env.WISECONN_API_KEY;

/**
 * Returns all Measurements from a Node identified by Id that the user has permission to access
 * @param nodeId
 * @returns 
 */
const listNodeMeasures = async (nodeId) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/nodes/${nodeId}/measures`, {
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
        console.log('listNodeMeasures Error!: ', err);
        throw err;
    }
}

/**
 * Return the Measurement information
 * @param measureId
 * @returns 
 */
const getAMeasure = async (measureId) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/measures/${measureId}`, {
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
        console.log('getAMeasure Error!: ', err);
        throw err;
    }
}

/**
 * Return the all Measurement Data identified by a Measure Id that start 
 * and end within a time range (180 days maximum)
 * @param measureId
 * @param initTime
 * @param endTime
 * @returns 
 */
const listMeasurementsData = async (measureId,initTime,endTime) => {
    try {
        const response = await fetch(`${WISECONN_API_HOST}/measures/${measureId}/data?endTime=${endTime}&initTime=${initTime}`, {
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
        console.log('listMeasurementsData Error!: ', err);
        throw err;
    }
}

module.exports = {
    listNodeMeasures,
    getAMeasure,
    listMeasurementsData
  }


  