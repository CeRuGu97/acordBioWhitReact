import React from 'react';
import icon from '../assets/static/iconPage2.png';
import '../assets/styles/Notification.css';

export const Notificationt = () => {

    const start = async () => {
        // console.log('Notification start');
        if (!('Notification' in window) || !('serviceWorker' in navigator)) {
            return alert('Tu browser no soporta notificaciones');
        }
        if (Notification.permission === 'default') {
            await Notification.requestPermission();
        }
        if (Notification.permission === 'denied') {
            return alert("Bloqueaste las notificaciones :(")
        }
        if (Notification.permission !== 'granted') {
            return;
        }
        showNotification();
    }
    const showNotification = async () => {
        const registrationt = await navigator.serviceWorker.getRegistration('./custom-service-worker.js');
        if (!registrationt) return alert("No hay un service worker");
        //navigator.serviceWorker.ready.then(function (registration) {
        registrationt.showNotification('Prueba de notificacion', {
            body: 'Btn de notificación',
            icon,
            image: { icon },
        }, 'GET');
        //});
    }

    return (
        <React.Fragment>
            <button className="NotificationB" onClick={start}>
                <i className="fas fa-bell"></i>
            </button>
        </React.Fragment>
    )
}
