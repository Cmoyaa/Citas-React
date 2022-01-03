import { useState, useEffect } from "react";
import Error from "./Error";

function Formulario({ pacientes, setPacientes }) {
    const  [nombre, setNombre] = useState('');
    const  [propietario, setPropietario] = useState('');
    const  [correo, setCorreo] = useState('');
    const  [fecha, setFecha] = useState('');
    const  [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    const generarId = () => {
        const random = Math.random().toString(10).substr(2);
        const fecha = Date.now().toString(36)

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validando formulario
        if ([ nombre, propietario, correo, fecha, sintomas ].includes('') ) {
            setError(true)
            return;
        }
        setError(false)

        // Objeto: Tomo todos los datos del formulario
        const objetoPaciente = {
            nombre, 
            propietario, 
            correo, 
            fecha, 
            sintomas,
            id: generarId()
        }

        //... se hace una copia y evita que se reemplacen los datos del objetoPaciente
        setPacientes([...pacientes, objetoPaciente]);

        // Vaciar formulario
        setNombre('')
        setPropietario('')
        setCorreo('')
        setFecha('')
        setSintomas('')
    }
    
    return  (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            
            <h2 className="font-black text-3xl text-center"><span className="text-green-500">Seguimiento</span> Pacientes</h2>
            
            <p className="text-lg mt-5 text-center mb-5">Añade pacientes y <span className="text-green-500 font-bold">Administralos</span></p>

            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg text-center px-5 py-8 mb-10">
                { error && 
                    <Error><p>Todos los campos son obligatorios</p></Error> 
                }
                <div>      
                    <label htmlFor="nombre" className="block font-bold uppercase">Nombre</label>
                    <input 
                        id="nombre" 
                        type="text" 
                        className="border-2 w-full p-2 my-3 rounded-t-md" 
                        placeholder="Nombre de la Mascota" 
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />
                </div>

                <div>
                    <label htmlFor="propietario" className="block font-bold uppercase">Propietario</label>
                    <input 
                        id="propietario"
                        type="text" 
                        className="border-2 w-full p-2 my-3 rounded-md" 
                        placeholder="Nombre del propietario"
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value) }
                    />
                </div>

                <div>
                    <label htmlFor="correo" className="block font-bold uppercase">Correo</label>
                    <input 
                        id="correo"
                        type="email" 
                        className="border-2 w-full p-2 my-3 rounded-md" 
                        placeholder="Correo Electrónico"
                        value={correo}
                        onChange={ (e) => setCorreo(e.target.value) }
                    />
                </div>

                <div>
                    <label htmlFor="fecha" className="block font-bold uppercase">Fecha de Alta</label>
                    <input 
                        id="fecha"
                        type="date" 
                        className="bg-white text-black border-2 w-full p-2 my-3 rounded-md"
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value) }
                    />
                </div>
                
                <div>
                    <label htmlFor="sintomas" className="block font-bold uppercase">Síntomas</label>
                    <textarea className="border-2 w-full p-2 my-3 rounded-lg" name="" id="sintomas" cols="30" rows="5" placeholder="Comente los sintomas" 
                    value={sintomas}
                    onChange={ (e) => setSintomas(e.target.value) }
                    />
                </div>

                <input 
                    type="submit" 
                    className="p-2 w-60 bg-green-500 hover:bg-green-600 rounded-lg text-white cursor-pointer uppercase font-bold transition-all"
                    value="Agregar paciente"
                />
            </form>
        </div>
    )
}

export default Formulario