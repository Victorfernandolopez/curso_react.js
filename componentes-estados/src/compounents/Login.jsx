import { useEffect, useState } from "react";

const Login = (props) => {
    const { titulo, flag } = props;
    //PROPS SON ESTADOS EXTERNOS QUE VAN A FORZAR EL RE RENDERIZADO DEL COMPONENTE
    //ESTADOS INTERNOS  CUANDO CAMBIAN FUERZAN EL RE RENDERIZADO DEL COMPONENTE
    //USESTATE -> ESTADO INTERNO HOOKS
    const [estado, setEstado] = useState(10);

    //USEEFFECT -> EFECTOS SECUNDARIOS
    // COMPONENTE TIENE CICLO DE VIDA -> MONTAJE, ACTUALIZACION, DESMONTAJE
    //useEffect(() => { }, [])
    useEffect(() => {
        console.log(flag)
        return () => {
            console.log("Desmontaje")
        }
    }, [flag]);

    // useEffect(() => {
    //     console.log(estado)
    // }, [estado, flag]);

    const incrementar = (num) => {
        setEstado(estado + num)
    }

    return (
        <div>
            <h1>{titulo}</h1>
            <p>Este es login</p>
            {flag ? "Flag es true" : "Flag es false"}
            <p>{estado}</p>
            <button onClick={() => { incrementar(10) }}>INCREMENTAR</button>
        </div>
    )
}


export default Login;