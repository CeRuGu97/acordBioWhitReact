import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(initialValue);

    //este use Efecte es solo para mostrar una pausa como de cargando contenido para que piensen que existe una api
    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }
                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error)
            }
        }, 1000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    //puente lo que es es guardar el nuevo array de los TODOS que quedan
    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    };

    return {
        item,
        saveItem,
        loading,
        error
    };

}
export { useLocalStorage };