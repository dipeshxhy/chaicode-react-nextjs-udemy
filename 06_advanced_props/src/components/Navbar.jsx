import { Button } from './ui/button';
import ThemeToggler from './ThemeToggler';

const Navbar = () => {
  const menus = [
    {
      id: 'basics',
      label: 'Basics Props',
      path: '/basics',
      icon: 'fa-solid fa-house',
    },
    {
      id: 'ref',
      label: 'Ref Props',
      path: '/ref',
      icon: 'fa-solid fa-bolt',
    },
    {
      id: 'children',
      label: 'Children Props',
      path: '/children',
      icon: 'fa-solid fa-clone',
    },
    {
      id: 'complex',
      label: 'Complex Props',
      path: '/complex',
      icon: 'fa-solid fa-cogs',
    },
  ];
  return (
    <nav className="sticky top-0 z-50 items-center w-full bg-background/80 backdrop-blur border-b border-border shadow-md text-foreground p-4 space-y-4">
      <div className="flex items-center justify-between gap-6">
        <div className="flex gap-6">
          {menus.map((menu) => (
            <Button
              onClick={() => {
                const section = document.getElementById(menu.id);
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              key={menu.id}
              className="flex items-center justify-center space-x-2 p-2 hover:bg-muted rounded-md cursor-pointer"
            >
              <i className={`${menu.icon} text-muted-foreground`}></i>
              <span className="text-muted-foreground hover:text-foreground transition">{menu.label}</span>
            </Button>
          ))}
        </div>
        <ThemeToggler />
      </div>
    </nav>
  );
};
export default Navbar;
