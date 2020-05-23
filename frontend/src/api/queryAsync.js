const fetch = require( 'node-fetch' );
const json = response => {
    if (
        response.status === 203 ||
        response.status === 204 ||
        response.status === 201
    ) {
        return response.json().then( data => data );
    }
    return response.json().then( data => data );
};

const queryAsync = async( path, type, data, queryParams = {} ) => {
    try {
        return fetch( url, {
            method: type,
            headers,
            body: JSON.stringify( data )
        } )
            .then( response => {
                if (
                    response.status === 200 ||
                    response.status === 203 ||
                    response.status === 204 ||
                    response.status === 201
                ) {
                    return Promise.resolve( response );
                }

                return Promise.reject( new Error( response ) );
            } )
            .then( json )
            .catch( err => {
                throw new Error( err );
            } );
    } catch ( e ) {
        console.log( 'Error2', e );
        throw e;
    }
};

export default {
    queryAsync
};
