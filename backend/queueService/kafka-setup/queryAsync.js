
const fetch = require('node-fetch');
const BASE_HOST = 'http://localhost:3001';

const json = response => {
    if (response.status === 203 || response.status === 204 || response.status === 201) {
        return response.json().then(data => data);
    }
    return response.json().then(data => data);
};

const queryAsync = (path, type, data, queryParams = {}) => {
    return fetch(`${BASE_HOST}/${path}`, { method: type, headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) })
        .then(response => {
            if (response.status === 200 || response.status === 203 || response.status === 204 || response.status === 201) {
                return Promise.resolve(response);
            }
            return Promise.reject(new Error(response));
        })
        .then(json)
        .catch(err => {
            console.log("ERR ", err);
            throw new Error(err);
        });
}

module.exports = { queryAsync }