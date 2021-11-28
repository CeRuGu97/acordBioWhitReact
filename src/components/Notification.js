import React from 'react';
import icon from '../assets/static/iconPage2.png';
import '../assets/styles/Notification.css';

export const Notificationt = () => {

    const start = () => {
        // console.log('Notification start');
        if (!('Notification' in window) || !('serviceWorker' in navigator)) {
            return alert('Tu browser no soporta notificaciones');
        }
        if (Notification.permission === 'default') {
            Notification.requestPermission();
            // OneSignal.init({
            //     appId: "3feaffeb-6d82-497b-90ea-3767f61d0fbf",
            // });
        }
        if (Notification.permission === 'denied') {
            return alert("Bloqueaste las notificaciones :(")
        }
        if (Notification.permission === 'granted') {
            return; //return ranNot();
        }
        showNotification();

        //ranNot();
    }

    const showNotification = async () => {
        const registrationt = await navigator.serviceWorker.getRegistration();
        // console.log(registrationt);
        // console.log('showNotification');
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
            <button className="NotificationB" onClick={start}>
                <i className="fas fa-bell"></i>
            </button>
        </React.Fragment>
    )
}
