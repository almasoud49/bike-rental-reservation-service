import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router} from "./routes/Routes";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";



createRoot(document.getElementById("root")!).render(
  
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
    </PersistGate>
    </Provider>
  </StrictMode>
);
