import React from 'react';

export const FetchApi = async (url, method, jsonBody) => {
    console.log('Method', method, 'body', JSON.stringify(jsonBody))
    if (method === '' || method === 'GET') {
        const site = await fetch(url);
        const data = await site.json();
        return data;
    }
    else if (method !== '' || method !== 'GET'){
        // console.log('url', url)
        const site = await fetch(url, {
        method: `${method}`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(jsonBody)
    });
    console.log('site', site)
        const data = await site.json();
        console.log('DATA', data)
        return data; 
}
}
