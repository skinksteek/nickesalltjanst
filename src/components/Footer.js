/* eslint-disable no-undef */
import React from 'react';
import '../assets/styles/footer.css'

const Footer = () => {
  return (
    <div className='footer-parent'>
    <footer className="footer-container">
      <div className='footer-info footer-50'>
        <p><strong>Vår vision</strong></p>
        <p>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer
        </p>
      </div>
      <div className='footer-contact footer-25'>
        <p><strong>Kontakta oss</strong></p>
        <p>
          Nickesalltjänst AB
          <br></br>
          Åbyvägen 4B
          <br></br>
          431 62 Mölndal
          <br></br>
          <br></br>
          070-278 58 81
          <br></br>
          info@nickesalltjanst.se
        </p>
      </div>
      <div className='footer-follow footer-25'>
        <ul>
        <p><strong>Följ oss</strong></p>
        <li><a href="#">LinkedIn</a></li>
        <br></br>
        <li><a href="#">Facebook</a></li>
        <br></br>
        <li><a href="#">Instagram</a></li>
      </ul>
      </div>
      

    </footer>
    </div>
  );
};

export default Footer;