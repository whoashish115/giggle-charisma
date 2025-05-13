'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaPaypal, FaCoffee } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
 
  return (
      <footer className="mt-12 py-6  pt-4 text-center text-base text-title">
        <p data-aos="fade-up" >
          &copy; 2025{' '}
          <a   href="https://thedesignerfox.io">
            <span className="hover:underline text-primary transition  font-bold">thedesignerfox.io</span>
          </a>
          . All naps reserved.
        </p>
      </footer>
  );
};

export default Footer;
