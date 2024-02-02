import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages";
import { APIProvider } from "@vis.gl/react-google-maps";

import "atropos/css";
import "swiper/css";

const App = () => {
  const apiKey = import.meta.env.VITE_MAPS_API_KEY;

  return (
    <APIProvider apiKey={apiKey}>
      <RouterProvider router={router} />
    </APIProvider>
  );
};
export default App;
