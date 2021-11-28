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
            //<div />
            <div className="CreateTodoButton">
                <h3> Instala Bibliochords</h3>
                <div>
                    <button className="add"  >Add</button>
                    <button  >CLose</button>
                </div>
            </div>
        )
    }

    return (
        <div className="CreateTodoButton" onClick={hide}>
            <h3>Instala Bibliochords</h3>
            <div>
                <button className="add" onClick={onClick}>Add</button>
                <button onClick={hide}>Close</button>
            </div>
        </div>
    );
}