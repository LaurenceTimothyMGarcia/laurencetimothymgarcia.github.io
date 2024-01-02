import Main from "./pages/Main";
import SWEPorfolio from "./pages/SWEPorfolio";


const AppRoutes = [
  {
    index: true,
    element: <Main />
  },
  {
    path: '/swe-portfolio',
    element: <SWEPorfolio />
  }
]

export default AppRoutes;