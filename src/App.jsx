import { useEffect, useState} from "react";
import Footer from "../src/components/Footer/footer";
import Navbar from "../src/components/Navbar/navbar";
import { RouteList } from '../src/routes/index'; 
import axios from "axios";

function App() { 

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <div className={`app light}`}>
        <Navbar />
        <main>
        <RouteList />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
