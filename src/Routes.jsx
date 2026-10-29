import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppLayout from "./components/appLayout/AppLayout";
import Loading from "./components/loading/Loading";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";

import { blogById, blogLoader, faqLoader, homeLoader } from "./loaders/DataLoaders";
import Login from "./pages/Login";
import ProtectedRoute from "./components/backoffice/protectedRoute/ProtectedRoute";
import Backoffice from "./pages/backoffice/Backoffice";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />} hydrateFallbackElement={<Loading />}>
      <Route index element={<Home />} loader={homeLoader  }/>
      <Route path="blogs" element={<Blog />} loader={blogLoader}/>
      <Route path="blogs/:id" element={<SingleBlog />} loader={blogById} />
      <Route path="faq" element={<Faq />} loader={faqLoader}/>
      <Route path="kontakt" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="backoffice" element={<ProtectedRoute />}>
        <Route index element={<Backoffice />}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
);

export default routes;
