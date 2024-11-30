'use client'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const SectionFiveText = () => {
  const { t } = useTranslation();

  return (
    <div className="sm:w-[40%] h-full flex flex-col items-center gap-8 self-center">
        <div className="flex flex-col gap-4 items-center self-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left sm:self-start">
         {t('sectionFive.header')}
        </h1>
        <p className="text-gray-600 text-center sm:text-left">
          {t('sectionFive.paragraph')}
        </p>
      </div>
      <Link
              href={"/auth/signup"}
              className={'py-1.5 px-3 rounded-2xl bg-scheme-purple text-white shadow-md shadow-scheme-purpleOne hover:bg-scheme-purpleOne self-center sm:self-start'}
            >
              {t('sectionFive.getStarted')}
            </Link>
            <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:mt-14">
                <div className="flex flex-col items-start">
                    <h3 className="text-2xl font-bold text-scheme-purple">100+</h3>
                    <p className="">{t('sectionFive.uniqueTrading')}</p>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-2xl font-bold text-scheme-purple">17</h3>
                    <p className="">{t('sectionFive.yearsOfReputation')}</p>
                </div>
                <div className="flex flex-col items-start sm:justify-self-center">
                    <h3 className="text-2xl font-bold text-scheme-purple">300K+</h3>
                    <p className="">{t('sectionFive.investors')}</p>
                </div>
            </div>
    </div>
  )
}

export default SectionFiveText