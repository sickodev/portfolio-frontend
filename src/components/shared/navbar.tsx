import { Link } from "wouter";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-[40%] p-2 bg-neutral-900 space-y-2 rounded-r-lg flex flex-col z-20">
      <Link
        href="/profile"
        className="p-2 hover:bg-neutral-800 transition-all duration-200 ease-linear group"
      >
        <i className="fa-solid fa-user-astronaut" />
      </Link>
      <hr />
      <Link
        href="/education"
        className="p-2 hover:bg-neutral-800 transition-all duration-200 ease-linear group"
      >
        <i className="fa-solid fa-building-columns" />
      </Link>
      <hr />
      <Link
        href="/experience"
        className="p-2 hover:bg-neutral-800 transition-all duration-200 ease-linear"
      >
        <i className="fa-solid fa-briefcase" />
      </Link>
      <hr />
      <Link
        href="/projects"
        className="p-2 hover:bg-neutral-800 transition-all duration-200 ease-linear"
      >
        <i className="fa-solid fa-bars-progress" />
      </Link>
      <hr />
      <Link
        href="/blogs"
        className="p-2 hover:bg-neutral-800 transition-all duration-200 ease-linear"
      >
        <i className="fa-solid fa-blog"></i>
      </Link>
    </nav>
  );
};

export default Navbar;
