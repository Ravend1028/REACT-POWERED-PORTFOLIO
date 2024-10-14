import React from 'react'
import Divider from '../components/Divider'
import completionOne from '../assets/images/DAVID_COC_ASC.PNG'
import completionTwo from '../assets/images/DAVID_COC_LWLI.jpeg'
import courseraOne from '../assets/images/coursera-backend.PNG'
import courseraTwo from '../assets/images/coursera-python.PNG'
import courseraThree from '../assets/images/coursera-py4e.PNG'
import courseraFour from '../assets/images/coursera-tfds.PNG'
import ciscoOne from '../assets/images/cisco-js.PNG'
import ciscoTwo from '../assets/images/cisco-fch.PNG'
import udemyOne from '../assets/images/udemy-python.jpg'
import udemyTwo from '../assets/images/udemy-pyintro.jpg'
import huaweiOne from '../assets/images/huawei-one.PNG'
import huaweiTwo from '../assets/images/huawei-two.PNG'
import othersOne from '../assets/images/others-iot.PNG'
import othersTwo from '../assets/images/others-zuitt.PNG'

const certificateSections = [
  {
    title: 'Coursera',
    images: [
      { src: courseraOne, alt: 'intro-to-backend' },
      { src: courseraTwo, alt: 'programming-python' },
      { src: courseraThree, alt: 'programming-python' },
      { src: courseraFour, alt: 'tools-for-data-science' },
    ],
  },
  {
    title: 'Cisco Networking Academy',
    images: [
      { src: ciscoOne, alt: 'js-essentials' },
      { src: ciscoTwo, alt: 'computer-hardware-basics' },
    ],
  },
  {
    title: 'Udemy',
    images: [
      { src: udemyOne, alt: 'technical-writing-python' },
      { src: udemyTwo, alt: 'python-full-course' },
    ],
  },
  {
    title: 'Huawei',
    images: [
      { src: huaweiOne, alt: 'big-data' },
      { src: huaweiTwo, alt: 'python-basics' },
    ],
  },
  {
    title: 'Internship',
    images: [
      { src: completionOne, alt: 'ascensoft-certificate' },
      { src: completionTwo, alt: 'lwli-certificate' },
    ],
  },
  {
    title: 'Others',
    images: [
      { src: othersOne, alt: 'iot-certificate' },
      { src: othersTwo, alt: 'zuitt-certificate' },
    ],
  },
];

const Certificates = () => {
  return (
    <>
      { certificateSections.map((section, index) => (
        <Divider key={index} title={section.title}>
          <div className="grid place-items-center gap-3 w-2/3 grid-cols-1 lg:grid-cols-2 ">
            {section.images.map((image, idx) => (
              <img key={idx} src={image.src} alt={image.alt} />
            ))}
          </div>
        </Divider>
      )) }
    </>
  )
}

export default Certificates