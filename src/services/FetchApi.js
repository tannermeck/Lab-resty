import React from 'react';

export const FetchApi = async (url, method, jsonBody) => {
    console.log(jsonBody)
    if (method === '') {
        const site = await fetch(url);
        const data = await site.json();
        return data;
    }
    if (method !== '' || 'GET'){
    const site = await fetch(url, {
        method: `"${method}"`,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonBody)
    });
    const data = await site.json();
    return data; 
}
}
