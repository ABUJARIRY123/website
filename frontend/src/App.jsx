import "./app.scss";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
     
      <section>
        <Services />
      </section>
      <Portfolio />
      
      
    </div>
  );
};

export default App;