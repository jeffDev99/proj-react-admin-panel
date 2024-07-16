import React from "react";
import { Outlet } from "react-router-dom";
import { ArrowLeft } from "iconsax-react";
import "./AuthLayout.css";

export default function AuthLayout() {
  return (
    <>
      <header className="authLayout-header">
        <a href="#" className="authLayout-header__link">
          <ArrowLeft variant="Outline" className="authLayout-header__icon" />
        </a>
      </header>
      <main className="authLayout-main">{<Outlet />}</main>
    </>
  );
}
