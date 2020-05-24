const fetch = require('node-fetch');
const url = 'http://localhost:3001'
const json = response => {
    if (
        response.status === 203 ||
        response.status === 204 ||
        response.status === 201
    ) {
        return response.json().then(data => data);
    }
    return response.json().then(data => data);
};

const queryAsync = (path, queryParams = {}) => {
    try {
        return fetch(`${url}${path}${queryParams}`, {
            method: 'GET'
        }).then(response => {
            if (response.status === 200 || response.status === 203 || response.status === 204 || response.status === 201) {
                return Promise.resolve(response);
            }
            return Promise.reject(new Error(response));
        }).then(json)
            .catch(err => {
                console.log("Error In Api Call", err)
                throw new Error(err);
            });
    } catch (err) {
        console.log("ERR", err);
    }

    // console.log({ path, type, data, queryParams });
    // try {
    //     return fetch(url, {
    //         method: type,
    //         headers: 'content/json',
    //     })
    // .then(response => {
    //     if (
    //         response.status === 200 ||
    //         response.status === 203 ||
    //         response.status === 204 ||
    //         response.status === 201
    //     ) {
    //         return Promise.resolve(response);
    //     }

    //     return Promise.reject(new Error(response));
    // })
    // .then(json)
    // .catch(err => {
    //     console.log("Error In Api Call", err)
    //     throw new Error(err);
    // });
    // } catch (e) {
    //     console.log('Error2', e);
    //     throw e;
    // }
};

export default queryAsync;
