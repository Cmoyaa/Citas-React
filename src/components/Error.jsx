import { useState, useEffect } from "react"

function Error({ children }) {
    return (
        <div className="-mt-4 mb-5 p-1.5 font-bold uppercase text-white bg-red-500 mx-auto rounded-lg">
            <p>{children}</p>
        </div>
    )
}

export default Error
