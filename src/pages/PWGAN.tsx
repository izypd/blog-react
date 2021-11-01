/* eslint-disable jsx-a11y/alt-text */
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import Header from '@/components/Header';

export default function PWGAN() {
  return (
    <>
      <Header />
      <div className='text-center pt-8 text6'>PWGAN 结果展示</div>
      <div className='icon_grid'>
        <ImgComparisonSlider hover className='icon_size'>
          <img
            slot='first'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/C2M/C/ali_taobao.webp'
          />
          <img
            slot='second'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/C2M/M/ali_taobao.webp'
          />
        </ImgComparisonSlider>
        <ImgComparisonSlider hover className='icon_size'>
          <img
            slot='first'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/C2M/C/ctrip.webp'
          />
          <img
            slot='second'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/C2M/M/ctrip.webp'
          />
        </ImgComparisonSlider>
        <ImgComparisonSlider hover className='icon_size'>
          <img
            slot='first'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/C2M/C/whatsapp_messenger.webp'
          />
          <img
            slot='second'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/C2M/M/whatsapp_messenger.webp'
          />
        </ImgComparisonSlider>
        <ImgComparisonSlider hover className='icon_size'>
          <img
            slot='first'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/C2M/C/yuantiku_souti.webp'
          />
          <img
            slot='second'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/C2M/M/yuantiku_souti.webp'
          />
        </ImgComparisonSlider>
        <ImgComparisonSlider hover className='icon_size'>
          <img
            slot='first'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/C2V/C/alipay.webp'
          />
          <img
            slot='second'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/C2V/V/alipay.webp'
          />
        </ImgComparisonSlider>
        <ImgComparisonSlider hover className='icon_size'>
          <img
            slot='first'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/C2V/C/gmail.webp'
          />
          <img
            slot='second'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/C2V/V/gmail.webp'
          />
        </ImgComparisonSlider>
        <ImgComparisonSlider hover className='icon_size'>
          <img
            slot='first'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/C2V/C/mcdonalds.webp'
          />
          <img
            slot='second'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/C2V/V/mcdonalds.webp'
          />
        </ImgComparisonSlider>
        <ImgComparisonSlider hover className='icon_size'>
          <img
            slot='first'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/C2V/C/androdumpper.webp'
          />
          <img
            slot='second'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/C2V/V/androdumpper.webp'
          />
        </ImgComparisonSlider>
        <ImgComparisonSlider hover className='icon_size'>
          <img
            slot='first'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/Y2C/Y/linkedin.webp'
          />
          <img
            slot='second'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/Y2C/C/linkedin.webp'
          />
        </ImgComparisonSlider>
        <ImgComparisonSlider hover className='icon_size'>
          <img
            slot='first'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/Y2C/Y/geometric_weather.webp'
          />
          <img
            slot='second'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/Y2C/C/geometric_weather.webp'
          />
        </ImgComparisonSlider>
        <ImgComparisonSlider hover className='icon_size'>
          <img
            slot='first'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/Y2C/Y/baidu_yuedu.webp'
          />
          <img
            slot='second'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/Y2C/C/baidu_yuedu.webp'
          />
        </ImgComparisonSlider>
        <ImgComparisonSlider hover className='icon_size'>
          <img
            slot='first'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/Y2C/Y/cq_wallet.webp'
          />
          <img
            slot='second'
            src='https://cdn.jsdelivr.net/gh/izypd/Gauss@main/PWGAN/Y2C/C/cq_wallet.webp'
          />
        </ImgComparisonSlider>
      </div>
    </>
  );
}
