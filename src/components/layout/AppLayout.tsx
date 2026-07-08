import { NavLink, Outlet } from "react-router";
import "./Applayout.css";

export default function AppLayout() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="logo"> StreamGuard</div>
        <nav className="nav-links">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/reports">Reports</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/appeals">Appels</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
