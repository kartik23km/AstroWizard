import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import StarryBackground from "@/components/atoms/StarryBackground";
import Footer from "./pages/home/_components/home/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-space-dark text-soft-white overflow-x-hidden">
        <StarryBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <AppRoutes />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
