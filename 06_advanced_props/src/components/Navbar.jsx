import { Button } from './ui/button';

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
    {
      id: 'theme',
      label: 'Theme Toggler',
      path: '/theme',
      icon: 'fa-solid fa-palette',
    },
  ];
  return (
    <nav className=" sticky top-0 z-50 items-center w-full bg-gray-800 shadow-md text-white p-4 space-y-4">
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
            className="flex items-center justify-center space-x-2 p-2 hover:bg-gray-700 rounded-md cursor-pointer"
          >
            <i className={`${menu.icon} text-gray-400`}></i>
            <span className="text-gray-200">{menu.label}</span>
          </Button>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
