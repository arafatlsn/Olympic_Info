import { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import TableComp from "./Components/TableComp";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async function () {
      const res = await fetch("http://localhost:3001/");
      const data = await res.json();
      setData(data?.data);
    })();
  }, []);
  console.log(data);
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <TableComp data={data} />
    </div>
  );
}

export default App;
