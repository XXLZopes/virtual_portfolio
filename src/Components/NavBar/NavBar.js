import "./NavBar.css";

function NavBar({ isAboutOpen, setIsAboutOpen }) {
  return (
    <nav>
      <ul>
        <li
          onClick={() => {
            setIsAboutOpen(false);
            // document.body.style.overflow = '';
          }}
        >
          <a className={!isAboutOpen && "focusedColor"} href="#portfolio">
            Portfolio
          </a>
        </li>
        <li
          onClick={() => {
            setIsAboutOpen(true);
            // document.body.style.overflow = 'hidden';
          }}
        >
          <a className={isAboutOpen && "focusedColor"} href="#">
            About Me
          </a>
        </li>
        <li>
          <a href="mailto:aidan1meyer1@gmail.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
