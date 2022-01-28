import "./App.css";

export default function App() {
  const names = [
    {
      name: "Sachin",
      img: "https://i.ytimg.com/vi/uOA25BRgSic/maxresdefault.jpg"
    },
    {
      name: "MSD",
      img:
        "https://i.pinimg.com/564x/33/ef/93/33ef93bb6f3103cc335da102b333650f.jpg"
    },
    {
      name: "Kohli",
      img:"https://newsin.co.in/wp-content/uploads/2020/11/Virat-kohli6.jpg"
    }
  ];
  return (
    <div className="App">
      {names.map((user) => (
        <Welcome name={user.name} img={user.img} />
      ))}
    </div>
  );
}

function Welcome({ name, img }) {
  return (
    <div>
      <img src={img} id="res" alt="pics" />
      <h1>Hello, {name}❤🙌😎</h1>
    </div>
  );
}
