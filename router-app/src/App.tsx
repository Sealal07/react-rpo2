import { NavLink, Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { RoomsPage } from "./pages/RoomsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RoomDetailPage } from "./pages/RoomDetailPage";

export function App(){
  return (
    <>
      <header>
        <nav aria-label="Основная навигация">
          {/* NavLink умеет определять активен ли маршрут */}
          <NavLink to='/' end style={({isActive})=> ({
            color: isActive ? 'red' : 'gray'
          })}>
            Обзор
          </NavLink>
          <NavLink to='/rooms' style={({isActive})=> ({
            color: isActive ? 'red' : 'gray'
          })}>
            Помещения
          </NavLink>   
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/rooms/:roomId" element={<RoomDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}
export default App;