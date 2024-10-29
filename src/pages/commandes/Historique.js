import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import TopBarTitle from "../../components/topBar/TopBarTitle";
import PageLayout from "../layout/PageLayout";
import BottomBar from "../../components/bottomBar/BottomBar";

export default function Historique() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHistorique = location.pathname.endsWith('historique');

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (isHistorique) {
        navigate('historiques');
      }
    },
    onSwipedRight: () => {
      if (!isHistorique) {
        navigate('historique');
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <PageLayout className="bg-background" bottomBar={<BottomBar/>} topBar={<TopBarTitle title="Mes commandes"/>}>
      <div className="relative">
        <ul className="flex justify-center items-center gap-6 py-4 mt-10">
          <li className="relative">
            <NavLink 
              to="historique" 
              className={({isActive}) => `nav-link ${isActive ? 'text-black font-bold' : 'text-gray-600'}`}
              aria-label="Voir les commandes d'aujourd'hui"
            >
              Aujourd'hui
              {isHistorique && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  layoutId="underline"
                />
              )}
            </NavLink>
          </li>
          <li className="relative">
            <NavLink 
              to="historiques" 
              className={({isActive}) => `nav-link ${isActive ? 'text-black font-bold' : 'text-gray-600'}`}
              aria-label="Voir l'historique des commandes"
            >
              Historique
              {!isHistorique && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  layoutId="underline"
                />
              )}
            </NavLink>
          </li>
        </ul>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          {...handlers}
          key={location.pathname}
          initial={{ opacity: 0, x: isHistorique ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isHistorique ? -100 : 100 }}
          transition={{ 
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="w-full h-full"
        >
          <Outlet/>
        </motion.div>
      </AnimatePresence>
    </PageLayout>
  )
}
