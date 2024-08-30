import React, { useState ,  useEffect} from 'react';

function Contador() {

    const [count, setCount] = useState(0);

    useEffect(()=> {
        document.title = 'Contador: ${count';
    }, [count]);

    return (
        <div>
            <h3> 🫗Vasos de agua tomados: {count}</h3>
            <button onClick={()=> setCount(count + 1)}>Agregar un registro</button>
        </div>
    );
}

export default Contador;