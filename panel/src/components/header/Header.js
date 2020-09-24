import React, { useState } from "react";
import { Link } from "react-router-dom";
import { history } from "../../routes/AppRouter";
import { BsGear, BsBoxArrowInRight, BsList } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import TopMenuItem from "./TopMenuItem";

const Header = (props) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const [toggleRespMenu, setToggleRespMenu] = useState("none");

  return (
    <div className="w-full bg-gray-800">
      <div className="container mx-auto">
        <div className="flex justify-between items-center font-semibold text-white">
          <div className="mr-5">
            {/* <img
              alt='Int Blog'
              src={require('./../../assets/img/logo-white.png')}
              style={{ maxWidth: '250px' }}
              className='py-2'
            /> */}
            <p className="text-4xl text-white">Logo</p>
          </div>
          <div className="hidden sm:flex items-center justify-center flex-1">
            <TopMenuItem url="/anasayfa" title="Anasayfa" />
            <TopMenuItem url="/haberler" title="Haberler" />
            <TopMenuItem url="/duyurular" title="Duyurular" />
            <TopMenuItem url="/etkinlikler" title="Etkinlikler" />
          </div>

          <div className="text-right flex">
            <div
              className="mr-4 block sm:hidden"
              onClick={() => {
                setToggleRespMenu((prev) =>
                  prev === "flex" ? "none" : "flex"
                );
              }}
            >
              <BsList className="text-2xl" />
            </div>

            <Link to="/ayarlar" className="mr-4">
              <BsGear className="text-2xl  hover:text-red-200" />
            </Link>

            <Link to="/kullanicilar" className="mr-4">
              <FiUsers className="text-2xl   hover:text-red-200" />
            </Link>

            <span className="cursor-pointer" onClick={handleLogout}>
              <BsBoxArrowInRight className="text-2xl  hover:text-red-200" />
            </span>
          </div>
        </div>
        <div
          className="flex-wrap text-white font-semibold"
          style={{ display: toggleRespMenu }}
        >
          <TopMenuItem url="/anasayfa" title="Anasayfa" />
          <TopMenuItem url="/haberler" title="Haberler" />
          <TopMenuItem url="/duyurular" title="Duyurular" />
          <TopMenuItem url="/etkinlikler" title="Etkinlikler" />
        </div>
      </div>
    </div>
  );
};

export default Header;
