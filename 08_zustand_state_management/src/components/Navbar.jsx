import { useAppStore } from '../store/appStore';
import { Button } from './ui/button';

const Navbar = () => {
  const user = useAppStore((state) => state.user);
  const theme = useAppStore((state) => state.theme);
  const logout = useAppStore((state) => state.logout);
  const login = useAppStore((state) => state.login);
  const toggleTheme = useAppStore((state) => state.toggleTheme);

  return (
    <nav>
      <div>Navbar</div>
      <div>User: {user ? user.name : 'Guest'}</div>
      <div>Theme: {theme}</div>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      {!user && <Button onClick={() => login({ name: 'John Doe' })}>Login</Button>}
      {user && <Button onClick={logout}>Logout</Button>}
    </nav>
  );
};
export default Navbar;
