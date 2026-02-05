async function getData() {
  const res = await fetch("https://snowtooth-hotel-api.fly.dev");
  return res.json();
}

function HotelBlock({ name, capacity }) {
  return (
    <div>
      <h2>
        {name}:{capacity}
      </h2>
    </div>
  );
}

export default async function Page() {
  const data = await getData();
  return (
    <main>
      <div>
        <h1>Hotel details</h1>
        <div>
          {data.map((hotel) => (
            <HotelBlock
              key={hotel.id}
              name={hotel.name}
              capacity={hotel.capacity}
            ></HotelBlock>
          ))}
        </div>
      </div>
    </main>
  );
}
