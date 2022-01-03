function Paciente({ paciente, setPaciente }) {
    const { nombre, propietario, correo, fecha, sintomas } = paciente
    
    return (
        <div className="m-5 p-5 bg-white shadow-md rounded-xl mb-4">
            <p className="font-bold mb-4">Nombre: <span className="font-normal">{nombre}</span> </p>
            
            <p className="font-bold mb-4">Propietario: <span className="font-normal">{propietario}</span> </p>
            
            <p className="font-bold mb-4">Correo: <span className="font-normal">{correo}</span> </p>
            
            <p className="font-bold mb-4">Fecha de Alta: <span className="font-normal">{fecha}</span> </p>
            
            <p className="font-bold">Sintomas: <span className="font-normal">{sintomas}</span> </p>

            <div className="m-5 -mb-1 text-center flex justify-between">
                <button 
                    type="button" 
                    className="bg-green-500 p-2 px-10 mr-2 text-white hover:bg-green-600 font-bold uppercase rounded-xl"
                    onClick={ () => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button type="button" className="bg-red-500 py-2 px-10 mx-2 text-white hover:bg-red-600 font-bold uppercase rounded-xl">
                    Borrar
                </button>
            </div>
        </div>
    )
}

export default Paciente
