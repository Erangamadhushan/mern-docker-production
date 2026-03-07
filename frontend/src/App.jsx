import Hero from "./components/Hero";
import Architecture from "./components/Architecture";
import ApiTester from "./components/ApiTester";
import SystemStatus from "./components/SystemStatus";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">

      <Hero />

      <Architecture />

      <ApiTester />

      <SystemStatus />

      <TechStack />

      <Contact />

    </div>
  );
}

export default App;