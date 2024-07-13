import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <ul className="d-flex justify-content-between p-2 footer w-100">
        <li className="text-center">
          <ul className="d-flex">
            <li className="me-2">
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "rgba(135,139,140,255)", fontSize: "12px" }}
              >
                Trademarks
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "rgba(135,139,140,255)", fontSize: "12px" }}
              >
                privacy & cookies
              </a>
            </li>
          </ul>
        </li>
        <div className="me-5">
          <a
            href="www.microsoft.com"
            className="text-decoration-none"
            style={{ color: "rgba(229, 230, 231, 255)", fontSize: "14px" }}
          >
            Microsoft
          </a>
          <br />
          <span>
            <a
              href="#"
              className="text-decoration-none"
              style={{ color: "rgba(135,139,140,255)" }}
            >
              &copy;2016 Microsoft
            </a>
          </span>
        </div>
      </ul>
    </footer>
  );
}
