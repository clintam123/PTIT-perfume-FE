import React, { FC } from 'react';

import "./Footer.css";

const Footer: FC = () => {
    return (
        <footer className="page-footer p-5 bg-dark text-white">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="footer-left">
                        <h3>Nước hoa</h3>
                        <br />
                        <p>Mở cửa từ 8:00 đến 22:00 vào tất cả các ngày trong tuần</p>
                    </div>
                    <div className="footer-right">
                        <h3>Liên hệ</h3>
                        <p>0123456789</p>
                        <a href="#"><i className="fab fa-facebook-f fa-2x mr-3" style={{ color: "white" }}></i></a>
                        <a href="#"><i className="fab fa-twitter fa-2x mr-3" style={{ color: "white" }}></i></a>
                    </div>
                </div>
                <div className="mx-auto" style={{ width: "200px" }}>
                    <p>© Copy right</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer
