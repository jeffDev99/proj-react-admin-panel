import React from "react";
import { Link } from "react-router-dom";
import { Notepad2 } from "iconsax-react";
import { Clock } from "iconsax-react";
import { Chart } from "iconsax-react";
import { TickCircle } from "iconsax-react";
import { Chart1 } from "iconsax-react";
import { Book1 } from "iconsax-react";
import "../../var.css";
import "./SideBar.css";

export default function SideBar() {
  return (
    <>
      <aside className="col-12 col-lg-2">
        <div className="aside">
          <div className="aside-header d-none d-lg-flex justify-content-between justify-content-lg-center ">
            <img src="" className="aside-header__open-icon pe-3 d-lg-none" />
            <img src="images/Logo.svg" className="aside-header__img" />
            <span></span>
          </div>
          <nav className="dashboard-aside-nav">
            {/* <div className="dashboard-aside-header-responsive d-flex align-items-center d-lg-none justify-content-between px-4 py-3">
              <img src="wwwroot/img/close.svg" className="dashboard-aside-header-responsive__close-btn pe-3 d-lg-none" />
              <img src="./wwwroot/img/logoHorizontalWhite.svg" className="dashboard-aside-header__img" />
              <span />
            </div> */}
            <ul className="aside-list list-unstyled m-0 p-0 ">
              <li href="#" className="aside-list__item">
                <Link to={"/dashboard/MissingData"} className="aside-list__link d-flex align-items-center text-decoration-none aside-list__link--acitve ">
                  <Notepad2 variant="Outline" className="aside-list__image" />
                  Missing Data
                </Link>
              </li>
              <li href="#" className="aside-list__item">
                <Link to={"/"} className="aside-list__link d-flex align-items-center text-decoration-none">
                  <Clock variant="Outline" className="aside-list__image" />
                  Determine Logs
                </Link>
              </li>
              <li href="#" className="aside-list__item">
                <Link to={"/"} className="aside-list__link d-flex align-items-center text-decoration-none">
                  <Chart variant="Outline" className="aside-list__image" />
                  Matrix Correlation
                </Link>
              </li>
              <li href="#" className="aside-list__item">
                <Link to={"/"} className="aside-list__link d-flex align-items-center text-decoration-none">
                  <TickCircle variant="Outline" className="aside-list__image" />
                  Feature Selection
                </Link>
              </li>
              <li href="#" className="aside-list__item">
                <Link to={"/"} className="aside-list__link d-flex align-items-center text-decoration-none">
                  <Chart1 variant="Outline" className="aside-list__image" />
                  Decomposition Using MVMD
                </Link>
              </li>
              <li href="#" className="aside-list__item">
                <Link to={"/"} className="aside-list__link d-flex align-items-center text-decoration-none">
                  <Book1 variant="Outline" className="aside-list__image" />
                  ML Methods
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
