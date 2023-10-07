import logo from './assets/toothless.png';

export const Header = () => {
  /* const navigate = useNavigate();

  function returnHome() {
    navigate('/home');
  }

  function login() {
    navigate('/login');
  }

  function logout() {
    navigate('/home');
  }

  function register() {
    navigate('/register');
  } */

  return (
    <nav className='navbar bg-light mb-4 p-0 flex'>
      <div className="container">
        <a className="navbar-brand" >
          <div className="d-flex">
            <img src={logo} alt="logo" className='mr-2' />
            <div>Dragons - Rise of Berk</div>
          </div>
        </a>
        <div className='loginButtons'>
            <button >Register</button>
            <button >Login</button>
            <button >Log out</button>
          </div>
      </div>
    </nav>
  )
}
