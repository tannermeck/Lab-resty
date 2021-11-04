import React from 'react';

export const FetchApi = async (url) => {
    const site = await fetch(url);
    const data = await site.json();
    return data; 
}