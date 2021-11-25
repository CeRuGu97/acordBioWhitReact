import React from 'react';
import '../assets/styles/Escalas.css'

const Escalas = () => {
    return (
        <div className="fondo">
            <section className="main-info">
                <h1>ESCALAS MAYORES</h1>
                <h2>Esta seccion te ayudará a componer tu propia canción o también sacar canciones de otros artistas,
                    bandas
                    o grupos</h2>
                <p>Cada tono (en color gris) tiene su familia de acordes. Si una canción está en el tono de Sol, mira
                    los
                    acordes que vienen con Sol. Esos acordes se pueden usar en una
                    canción que está en el tono de Sol. Pero recuerda que las canciones no necesariamente usan todos los
                    acordes en la escala.</p>
                <p><span>#</span> = sostenido <span>b</span> = bemol <span>m</span> = menor <span>dim</span> =
                    disminuido <span>7</span> = séptimo</p>
            </section>
            <section className="main-tonos">
                <div className="main-tonos-family">
                    <div className="tonos-header-title">
                        <h3>Tono: Do</h3>
                    </div>
                    <ul>
                        <li>Do</li>
                        <li>ReM</li>
                        <li>Mim</li>
                        <li>Fa</li>
                        <li>Sol o Sol7</li>
                        <li>Am o Am7</li>
                        <li>G/B o Bm</li>
                    </ul>
                </div>
                <div className="main-tonos-family">
                    <div className="tonos-header-title">
                        <h3>Tono: Do#</h3>
                    </div>
                    <ul>
                        <li>Do#</li>
                        <li>Re#M</li>
                        <li>FaM</li>
                        <li>Fa#</li>
                        <li>Sol# o Sol#7</li>
                        <li>SibM o SibM7</li>
                        <li>DoM</li>
                    </ul>
                </div>
                <div className="main-tonos-family">
                    <div className="tonos-header-title">
                        <h3>Tono: Re</h3>
                    </div>
                    <ul>
                        <li>Re</li>
                        <li>Mim</li>
                        <li>Fa#M</li>
                        <li>Sol</li>
                        <li>La o La7</li>
                        <li>SiM o SiM7</li>
                        <li>La/Do# o Do#M</li>
                    </ul>
                </div>
                <div className="main-tonos-family">
                    <div className="tonos-header-title">
                        <h3>Tono: Re# | Mib</h3>
                    </div>
                    <ul>
                        <li>Re#</li>
                        <li>FaM</li>
                        <li>SolM</li>
                        <li>Sol#</li>
                        <li>Sib o Bm7</li>
                        <li>DoM o DoM7</li>
                        <li>ReM</li>
                    </ul>
                </div>
                <div className="main-tonos-family">
                    <div className="tonos-header-title">
                        <h3>Tono: Mi</h3>
                    </div>
                    <ul>
                        <li>Mi</li>
                        <li>Fa#M</li>
                        <li>Sol#M</li>
                        <li>La</li>
                        <li>Si o B7</li>
                        <li>Do#M o Do#M7</li>
                        <li>Re#Dim o Re#M</li>
                    </ul>
                </div>
                <div className="main-tonos-family">
                    <div className="tonos-header-title">
                        <h3>Tono: Fa</h3>
                    </div>
                    <ul>
                        <li>Fa</li>
                        <li>SolM</li>
                        <li>La</li>
                        <li>SiB</li>
                        <li>Do o Do7</li>
                        <li>ReM o ReM7</li>
                        <li>MiDim o MiM</li>
                    </ul>
                </div>
                <div className="main-tonos-family">
                    <div className="tonos-header-title">
                        <h3>Tono: Fa#</h3>
                    </div>
                    <ul>
                        <li>Fa#</li>
                        <li>Sol#M</li>
                        <li>SibM</li>
                        <li>Si</li>
                        <li>Do# o Do#7</li>
                        <li>Re#M o Re#M7</li>
                        <li>FaM</li>
                    </ul>
                </div>
                <div className="main-tonos-family">
                    <div className="tonos-header-title">
                        <h3>Tono: Sol</h3>
                    </div>
                    <ul>
                        <li>Sol</li>
                        <li>LaM</li>
                        <li>SiM</li>
                        <li>Do</li>
                        <li>Re o Re7</li>
                        <li>MiM o MiM7</li>
                        <li>Re/Fa# o Fa#M</li>
                    </ul>
                </div>
                <div className="main-tonos-family">
                    <div className="tonos-header-title">
                        <h3>Tono: Sol#</h3>
                    </div>
                    <ul>
                        <li>Sol#</li>
                        <li>SibM</li>
                        <li>DoM</li>
                        <li>Do#</li>
                        <li>Re# o Re#7</li>
                        <li>FaM o FaM7</li>
                        <li>SolM</li>
                    </ul>
                </div>
                <div className="main-tonos-family">
                    <div className="tonos-header-title">
                        <h3>Tono: La</h3>
                    </div>
                    <ul>
                        <li>La</li>
                        <li>SiM</li>
                        <li>Do#M</li>
                        <li>Re</li>
                        <li>Mi o Mi7</li>
                        <li>Fa#M o Fa#M7</li>
                        <li>Sol#M</li>
                    </ul>
                </div>
                <div className="main-tonos-family">
                    <div className="tonos-header-title">
                        <h3>Tono: La# | Sib</h3>
                    </div>
                    <ul>
                        <li>SiB</li>
                        <li>DoM</li>
                        <li>ReM</li>
                        <li>MiB</li>
                        <li>Fa o Fa7</li>
                        <li>SolM o SolM7</li>
                        <li>La</li>
                    </ul>
                </div>
                <div className="main-tonos-family">
                    <div className="tonos-header-title">
                        <h3>Tono: Si</h3>
                    </div>
                    <ul>
                        <li>Si</li>
                        <li>Do#M</li>
                        <li>Re#M</li>
                        <li>Mi</li>
                        <li>Fa# o Fa#7</li>
                        <li>Sol#M o Sol#M7</li>
                        <li>SibM</li>
                    </ul>
                </div>

            </section>
        </div>
    )
}

export default Escalas;
