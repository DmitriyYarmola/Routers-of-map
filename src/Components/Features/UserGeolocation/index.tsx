import React from 'react'

export const useGeolocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
    });
}