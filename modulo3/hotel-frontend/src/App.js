import React, { useEffect, useState } from 'react';

function App() {
  const [hotels, setHotels] = useState([]); // Estado para almacenar los hoteles
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  // Función para obtener los hoteles
  const fetchHotels = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/hotels'); // Cambia a la URL correcta
      if (!response.ok) {
        throw new Error('Network response was not ok'); // Manejo de errores
      }
      const data = await response.json(); // Parsear la respuesta a JSON
      setHotels(data); // Almacena los datos en el estado
      setLoading(false); // Cambia el estado de carga
    } catch (error) {
      console.error('Error fetching hotels:', error);
      setLoading(false); // Cambia el estado de carga incluso si hay error
    }
  };

  // Llama a fetchHotels cuando el componente se monte
  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cabecera */}
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Enyoi Booking</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Hoteles</a></li>
            <li><a href="#" className="hover:underline">Habitaciones</a></li>
            <li><a href="#" className="hover:underline">Usuarios</a></li>
          </ul>
        </nav>
      </header>

      {/* Cuerpo de la página */}
      <main className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Bienvenido a Booking Enyoi</h2>
        <p>Aquí podrás encontrar los mejores hoteles y habitaciones.</p>

        {/* Lugar donde se mostrarán los datos */}
        <div id="hotel-list" className="mt-8">
          {loading ? (
            <p>Cargando hoteles...</p>
          ) : (
            <ul>
              {hotels.map(hotel => (
                <li key={hotel.id} className="border-b py-2">
                  <h3 className="text-lg font-bold">{hotel.name}</h3>
                  <p>{hotel.description}</p>
                  <p>Ubicación: {hotel.location}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
