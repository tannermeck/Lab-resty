import React from 'react';

export const FetchApi = async (url, method, jsonBody) => {
    let arr = []
    
    if (method === ''){
        let prev = localStorage.getItem('STORE');
        let storage = `{method: GET, url: ${url}}`
        if (prev){
            const json = JSON.parse(prev);
            json.push(storage)
            localStorage.setItem('STORE', JSON.stringify(json))
        } else { 
            arr.push(storage)
            localStorage.setItem('STORE', JSON.stringify(arr))
        }
    } else {
        let prev = localStorage.getItem('STORE');
        let storage = `{method: ${method}, url: ${url}}`
        if (prev){
            const json = JSON.parse(prev);
            json.push(storage)
            localStorage.setItem('STORE', JSON.stringify(json))
        } else { 
            arr.push(storage)
            localStorage.setItem('STORE', JSON.stringify(arr))
        }
    }


    if (method === '' || method === 'GET') {
        const site = await fetch(url);
        const data = await site.json();
        return data;
    }
    else if (method !== '' || method !== 'GET'){
        const site = await fetch(url, {
        method: method,
        headers: {
            'Content-type': 'application/json',
        },
        body: jsonBody
    });
        const data = await site.json();
        return data; 
}
}
