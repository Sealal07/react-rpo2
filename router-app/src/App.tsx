import { NavLink, Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { RoomsPage } from "./pages/RoomsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RoomDetailPage } from "./pages/RoomDetailPage";
import { RoomSensorTab } from "./pages/room/RoomSensorTab";
import { RoomLogsTab } from "./pages/room/RoomLogsTab";
import { RoomScenariosTab } from "./pages/room/RoomScenariosTab";

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
          <Route path="/rooms/:roomId" element={<RoomDetailPage />}>
              <Route index element={<RoomSensorTab />} />
              <Route path="sensors" element={<RoomSensorTab />} />
              <Route path="logs" element={<RoomLogsTab />} />
              <Route path="scenarios" element={<RoomScenariosTab />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}
export default App;