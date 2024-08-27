import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router} from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
    </Provider>
  </StrictMode>
);
