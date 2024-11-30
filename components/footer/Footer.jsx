'use client'
import { useTranslation } from 'react-i18next';
import { logo } from '@/exports/image-exports';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const date = new Date();

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className='p-5 bg-scheme-purpleThree flex flex-col gap-5 bg-opacity-25'>
      <div className="flex gap-2 items-center">
        <Image src={logo} alt='logo' className='w-10'/>
        <p className="text-xl font-semibold">{t('footer.companyName')}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="">{t('footer.aboutUs')}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">{t('footer.quickLinks')}</p>
        <div className="flex gap-3 flex-col">
          <Link href={'/'} className='hover:text-scheme-purple transition-colors duration-300'>{t('footer.home')}</Link>
          <Link href={'/contact'} className='hover:text-scheme-purple transition-colors duration-300'>{t('footer.about')}</Link>
          <Link href={'/about'} className='hover:text-scheme-purple transition-colors duration-300'>{t('footer.contact')}</Link>
          <Link href={'/auth/signup'} className='hover:text-scheme-purple transition-colors duration-300'>{t('footer.login')}</Link>
        </div>
      </div>
      <p className="text-sm">{t(`footer.rightsReserved`, { year: date.getFullYear() })}</p>
    </footer>
  );
};

export default Footer;