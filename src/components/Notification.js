import React from 'react';
import icon from '../assets/static/iconPage2.png';

export const Notificationt = () => {

    const start = () => {
        console.log('Notification start');
        if (!('Notification' in window) || !('serviceWorker' in navigator)) {
            return alert('Tu browser no soporta notificaciones');
        }
        if (Notification.permission === 'default') {
            Notification.requestPermission();
        }
        if (Notification.permission === 'denied') {
            return alert("Bloqueaste las notificaciones :(")
        }
        if (Notification.permission !== 'granted') {
            return; //return ranNot();
        }
        showNotification();
        //ranNot();
    }

    const showNotification = async () => {
        const registrationt = await navigator.serviceWorker.getRegistration();
        console.log(registrationt);
        console.log('showNotification');
        if (!registrationt) return alert("No hay un service worker");
        navigator.serviceWorker.ready.then(function (registration) {
            registration.showNotification('Prueba de notificacion', {
                body: 'Btn de notificación',
                icon,
                image: { icon },
            });
        });
    }

    return (
        <React.Fragment>
            <button onClick={start}>Notification</button>
        </React.Fragment>
    )
}
