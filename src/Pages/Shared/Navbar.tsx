import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/logo.png"

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeTheme, useGetCurrentMode } from "../../redux/features/themeSlice";
import { useState } from "react";
import { logOut,useGetCurrentUser } from "../../redux/features/authSlice";
import { toast } from "sonner";
import { Drawer, Dropdown, MenuProps } from "antd";
import { CircleUserRound, ListCheckIcon,Menu, LogOut, Moon, SunMoon, User } from "lucide-react";
import BButtonSmall from "../../components/ui/BButtonSmall";
import BButtonSmallWhite from "../../components/ui/BButtonSmallWhite";
// const Navbar = () => {
//   const navOptions = (
//     <>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/about-us">About Us</Link>
//       </li>
//       <li>
//         <Link to="/login">Login</Link>
//       </li>
//       <li>
//         <Link to="/sign-up">Login</Link>
//       </li>
//     </>
//   );
//   return (
//     <div className="navbar fixed z-10 max-w-screen-xl bg-custom-blue  text-white">
//       <div className="navbar-start ">
//         <div className="dropdown ">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             {navOptions}
//           </ul>
//         </div>
//         <Link to="/" className="btn btn-ghost text-xl"><img src={logo} height={50} width={50} alt="" /></Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{navOptions}</ul>
//       </div>
//       <div className="navbar-end">
//         <a className="btn w-28"><ThemeSwitcher/></a>
//         {/* <a className="btn">Button</a> */}
//       </div>
//     </div>
//   );
// };

const menuItems = [
  {
    label: "home",
    link: "/",
  },
  {
    label: "about",
    link: "/about",
  },
  {
    label: "blogs",
    link: "/",
  },
  {
    label: "contact",
    link: "/",
  },
];

const Navbar = () =>{
  const user = useAppSelector(useGetCurrentUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const mode = useAppSelector(useGetCurrentMode);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(logOut());
    toast.success("User logged out successfully!");
    return navigate("/login");
  };

  // drop down options
  const items: MenuProps["items"] = [
    {
      label: (
        <div className="flex items-center gap-2">
          <User size={14} />
          <Link to={`/dashboard/${user?.role}`}>Profile</Link>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="flex items-center gap-2">
          <ListCheckIcon size={14} />
          <Link
            to={
              user?.role === "admin"
                ? `/dashboard/admin/manage-bikes`
                : `/dashboard/user/my-rentals`
            }
          >
            {user?.role === "admin" ? "Manage Rentals" : "My Rentals"}
          </Link>
        </div>
      ),

      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div onClick={handleLogout} className="flex items-center gap-2">
          <LogOut size={14} />
          <button>Log Out</button>
        </div>
      ),

      key: "3",
    },
  ];

  const handleChangeMode = () => {
    dispatch(changeTheme(mode === "light" ? "dark" : "light"));
  };

  return (
    <header className="md:py-6 py-5 absolute top-0 left-0 w-full z-30 myHeader">
      
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-8 items-center justify-between">
          <div className="col-span-1">
            <Link className="inline-block" to={"/"}>
              <h3 className="md:text-3xl text-2xl font-bold uppercase text-white">
                <span className="text-accentColor">Ride</span>flow
              </h3>
            </Link>
          </div>
          <div className="col-span-3 mt-2 lg:block hidden">
            <ul className="flex items-center gap-12 justify-center text-white">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className="capitalize font-medium hover:text-accentColor duration-300 border-b-2 hover:border-b-2 cursor-pointer border-accentColor pb-2 border-opacity-0 hover:border-opacity-100 hover:pb-1"
                >
                  <Link to={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 ml-auto flex items-center md:gap-4 gap-2">
            <div className="col-span-1 mt-1 ml-auto flex items-center md:gap-4 gap-2">
              <div className="text-white">
                <p
                  onClick={handleChangeMode}
                  className="border-2 border-white cursor-pointer bg-accentColor rounded-full p-5 flex items-center justify-center relative"
                >
                  <Moon
                    className={`text-white ${
                      mode === "dark" ? "opacity-0" : "opacity-100"
                    } absolute left-0 top-[9px] w-full duration-300`}
                    size={22}
                  />
                  <SunMoon
                    className={`text-white ${
                      mode === "dark" ? "opacity-100" : "opacity-0"
                    } absolute left-0 top-[9px] w-full duration-300`}
                    size={22}
                  />
                </p>
              </div>
              {user ? (
                <Dropdown
                  placement="bottomRight"
                  menu={{ items }}
                  trigger={["click"]}
                >
                  <a
                    className="rounded-full"
                    onClick={(e) => e.preventDefault()}
                  >
                    <p className="border-2 border-white cursor-pointer bg-accentColor rounded-full p-2">
                      <CircleUserRound className="text-white" size={25} />
                    </p>
                  </a>
                </Dropdown>
              ) : (
                <BButtonSmallWhite link="/login">Login</BButtonSmallWhite>
              )}
            </div>
            <div className="col-span-1 ml-auto lg:hidden block">
              <p className="border-2 border-white cursor-pointer bg-accentColor rounded-full p-[9px] flex items-center justify-center relative text-white">
                <Menu onClick={showDrawer} size={22} />
              </p>
              <Drawer title="Navbar" onClose={onClose} open={open}>
                <ul className="flex flex-col items-end gap-6">
                  {menuItems.map((item) => (
                    <li
                      key={item.label}
                      className="capitalize font-medium hover:text-accentColor duration-300 border-b-2 hover:border-b-2 cursor-pointer border-accentColor pb-2 border-opacity-0 hover:border-opacity-100 hover:pb-1"
                    >
                      <Link to={item.link}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
                <div className="text-right mt-4">
                  <BButtonSmall link="#">Login</BButtonSmall>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      
    </header>
  );
};

export default Navbar;
