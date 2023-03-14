import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='flex justify-between bg-violet-500 p-4 m-4'>
      <h1>Redux Blog</h1>
      <nav>
        <ul className='flex gap-4'>
          <li className='font-bold'>
            <Link to='/'>Home</Link>
          </li>
          <li className='font-bold'>
            <Link to='post'>Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
