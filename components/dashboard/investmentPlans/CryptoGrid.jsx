'use client';
import React from 'react';
import { ton, binance, bitcoin, solana, tether, ethereum, litecoin, ripple } from '@/exports/image-exports';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const CryptoGrid = ({ handleCryptoSelection }) => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 w-full gap-4">
      <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={bitcoin} className="w-20 self-center" alt="crypto" />
        <div className="flex justify-between">
          <label htmlFor='bitcoin' className="font-semibold">{t('cryptoGrid.bitcoin')}</label>
          <input type="radio" name="crypto" value={'bitcoin'} className="" onChange={() => handleCryptoSelection({ name: 'Bitcoin', address: '327smF8PcQXkGkYQezH273bvy6Wn3kkfy4', network: 'BTC' })} />
        </div>
      </div>

      <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={ethereum} className="w-20 self-center" alt="crypto" />
        <div className="flex justify-between">
          <label htmlFor='ethereum' className="font-semibold">{t('cryptoGrid.ethereum')}</label>
          <input type="radio" name='crypto' value={'Ethereum'} className="" onChange={() => handleCryptoSelection({ name: 'Ethereum', address: '0xda0009bc973096582cc82d639e4dd320fe7c5359', network: 'ERC20' })} />
        </div>
      </div>

      <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={tether} className="w-20 self-center" alt="crypto" />
        <div className="flex justify-between">
          <label htmlFor='tether' className="font-semibold">{t('cryptoGrid.tetherERC20')}</label>
          <input type="radio" name="crypto" value={'Tether'} className="" onChange={() => handleCryptoSelection({ name: 'Tether', address: '0xda0009bc973096582cc82d639e4dd320fe7c5359', network: 'ERC20' })} />
        </div>
      </div>

      <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={tether} className="w-20 self-center" alt="crypto" />
        <div className="flex justify-between">
          <label htmlFor='tether' className="font-semibold">{t('cryptoGrid.tetherTRC20')}</label>
          <input type="radio" name="crypto" value={'Tether'} className="" onChange={() => handleCryptoSelection({ name: 'Tether', address: 'TTxP1UHbpv1FKwKk5jqVjnat5eBHxmae5i', network: 'TRC20' })} />
        </div>
      </div>
      <div className="shadow-md rounded-md p-2 flex flex-col justify-between gap-5">
        <Image src={ripple} className="w-20 self-center" alt="crypto" />
        <div className="flex justify-between">
          <label htmlFor='Ripple' className="font-semibold">{t('cryptoGrid.ripple')}</label>
          <input type="radio" name="crypto" value={'Ripple'} className="" onChange={() => handleCryptoSelection({ name: 'Ripple', address: 'rJn2zAPdFA193sixJwuFixRkYDUtx3apQh', network: 'XRP', memo: '500635888' })} />
        </div>
      </div>
    </div>
  );
};

export default CryptoGrid;