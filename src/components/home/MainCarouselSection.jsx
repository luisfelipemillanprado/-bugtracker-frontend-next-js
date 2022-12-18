import React from 'react';
import Image from 'next/image';
import SoftwareDevelopment from '@public/image/carousel/software-development.png';
import Marketing from '@public/image/carousel/marketing.png';
import SalesCRM from '@public/image/carousel/sales-crm.png';
import ProjectManagement from '@public/image/carousel/project-management.png';
import TaskManagement from '@public/image/carousel/task-management.png';
import IT from '@public/image/carousel/it.png';
import HumanResourses from '@public/image/carousel/human-resourses.png';
import CreativeDesing from '@public/image/carousel/creative-desing.png';
import WorkFlows from '@public/image/carousel/work-flows.png';
import styles from '@styles/components/home/MainCarouselSection.module.css';
//--
export default function MainCarouselSection() {
  return (
    <section className={styles.carousel_images_section}>
      <div className={styles.carousel_images_section__container_all}>
        <div id="carousel-id" className={styles.carousel_images_section__slider}>
          <div className={styles.carousel_images_section__container_item}>
            <div className={styles.carousel_images_section__wrapper_image}>
              <Image
                className={styles.carousel_images_section__image}
                src={SoftwareDevelopment}
                alt="Software Development"
              />
            </div>
          </div>
          <div className={styles.carousel_images_section__container_item}>
            <div className={styles.carousel_images_section__wrapper_image}>
              <Image className={styles.carousel_images_section__image} src={Marketing} alt="Marketing" />
            </div>
          </div>
          <div className={styles.carousel_images_section__container_item}>
            <div className={styles.carousel_images_section__wrapper_image}>
              <Image className={styles.carousel_images_section__image} src={SalesCRM} alt="Sales CRM" />
            </div>
          </div>
          <div className={styles.carousel_images_section__container_item}>
            <div className={styles.carousel_images_section__wrapper_image}>
              <Image
                className={styles.carousel_images_section__image}
                src={ProjectManagement}
                alt="Project Management"
              />
            </div>
          </div>
          <div className={styles.carousel_images_section__container_item}>
            <div className={styles.carousel_images_section__wrapper_image}>
              <Image className={styles.carousel_images_section__image} src={TaskManagement} alt="Task Management" />
            </div>
          </div>
          <div className={styles.carousel_images_section__container_item}>
            <div className={styles.carousel_images_section__wrapper_image}>
              <Image className={styles.carousel_images_section__image} src={IT} alt="IT" />
            </div>
          </div>
          <div className={styles.carousel_images_section__container_item}>
            <div className={styles.carousel_images_section__wrapper_image}>
              <Image className={styles.carousel_images_section__image} src={HumanResourses} alt="Human Resourses" />
            </div>
          </div>
          <div className={styles.carousel_images_section__container_item}>
            <div className={styles.carousel_images_section__wrapper_image}>
              <Image className={styles.carousel_images_section__image} src={CreativeDesing} alt="Creative Desing" />
            </div>
          </div>
          <div className={styles.carousel_images_section__container_item}>
            <div className={styles.carousel_images_section__wrapper_image}>
              <Image className={styles.carousel_images_section__image} src={WorkFlows} alt="Work Flows" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
