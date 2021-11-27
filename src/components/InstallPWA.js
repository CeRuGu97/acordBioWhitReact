import { useEffect, useState } from "react";

export const InstallPWA = () => {
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);

    useEffect(() => {
        const handler = e => {
            e.preventDefault();
            console.log("we are being triggered :D");
            setSupportsPWA(true);
            setPromptInstall(e);
        };
        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("transitionend", handler);
    }, []);

    const onClick = evt => {
        evt.preventDefault();
        if (!promptInstall) {
            console.log('onclcik' + promptInstall);
            return;
        }
        promptInstall.prompt();
    };
    if (!supportsPWA) {
        console.log("No se puede instalar por que no esta registrado como https");
        //return <div>ps no</div>;
    }
    return { promptInstall, onClick };
    // (
    //     <button
    //         className="link-button"
    //         id="setup_button"
    //         aria-label="Install app"
    //         title="Install app"
    //         onClick={onClick}
    //     >
    //         Install
    //     </button>
    // );
};

//export default InstallPWA;