import Paciente from "./Paciente"

function ListadoPacientes({ pacientes}) {
    return (
        <div className="md:w-1/2 lg:w-3/5">
            <h2 className="font-black text-3xl text-center"><span className="text-green-500">Listado</span> Pacientes</h2>
            
            <p className="text-xl my-5 text-center">Administra tus <span className="text-green-500 font-bold">Citas</span></p>
            
            
            { pacientes.map( (paciente) => { 
                return (
                    <Paciente
                        key={paciente.id}
                        paciente={paciente}
                    />
                )
            })}
        </div>
    )
}

export default ListadoPacientes
