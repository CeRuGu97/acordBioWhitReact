import React from "react";
import { InstallPWA } from "./InstallPWA";
import '../assets/styles/BtnInstall.css';

export const BtnInstall = () => {
    const { promptInstall, onClick } = InstallPWA();
    const [isVisible, setVisibleState] = React.useState(false);

    const hide = () => setVisibleState(false);

    React.useEffect(
        () => {
            if (promptInstall) {
                setVisibleState(true);
            }
        },
        [promptInstall]
    );

    if (!isVisible) {
        return (
            <div />
            // <div className="CreateTodoButton">
            //     <h4>¿Te gustaria instalar nuestra app?</h4>
            //     <div>
            //         <button  >Add To Home</button>
            //         <button  >CLose</button>
            //     </div>
            // </div>
        )
    }

    return (
        <div className="CreateTodoButton" onClick={hide}>
            <h4>¿Te gustaria instalar nuestra app?</h4>
            <div>
                <button onClick={hide}>Close</button>
                <button onClick={onClick}>Add to homescreen</button>
            </div>
        </div>
    );
}