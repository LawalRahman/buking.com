import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">buking.com</span>
        <div className="navItems">
          <a href="#" className="navLink">
            Register
          </a>
          <a href="#" className="navLink">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
