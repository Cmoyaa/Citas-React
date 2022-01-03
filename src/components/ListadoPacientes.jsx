import Paciente from "./Paciente";
import logo from '../assets/img/no-info.png';

function ListadoPacientes({ pacientes, setPaciente }) {
    return (
        <div className="md:w-1/2 lg:w-3/5">

            { pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center"><span className="text-green-500">Listado</span> Pacientes</h2>
                    
                    <p className="text-xl my-5 text-center">Administra tus <span className="text-green-500 font-bold">Citas</span></p>
                    
                    
                    { pacientes.map( (paciente) => { 
                        return (
                            <Paciente
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                            />
                        )
                    })}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">Aún no hay <span className="text-green-500">Pacientes</span></h2>
                    <p className="text-lg my-5 text-center">Agrega un paciente <span className="text-green-500 font-bold">y se mostrará a continuación</span></p>

                    <img src={logo} className="rounded-2xl w-80 mx-auto" />
                </>
            ) }

        </div>
    )
}

export default ListadoPacientes
