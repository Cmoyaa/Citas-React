function Paciente({paciente}) {

    const { nombre, propietario, correo, fecha, sintomas } = paciente
    return (
        <div className="m-5 p-5 w-full bg-white shadow-md rounded-xl">
            <p className="font-bold mb-4">Nombre: <span className="font-normal">{nombre}</span> </p>
            
            <p className="font-bold mb-4">Propietario: <span className="font-normal">{propietario}</span> </p>
            
            <p className="font-bold mb-4">Correo: <span className="font-normal">{correo}</span> </p>
            
            <p className="font-bold mb-4">Fecha de Alta: <span className="font-normal">{fecha}</span> </p>
            
            <p className="font-bold">Sintomas: <span className="font-normal">{sintomas}</span> </p>
        </div>
    )
}

export default Paciente
