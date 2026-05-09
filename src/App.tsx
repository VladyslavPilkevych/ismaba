import Header from "./components/Header";
import Footer from "./components/Footer";
import BuildingJourney from "./components/BuildingJourney/BuildingJourney";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-ink-900">
      <Header />
      <main className="flex-1">
        <BuildingJourney />
      </main>
      <Footer />
    </div>
  );
}
