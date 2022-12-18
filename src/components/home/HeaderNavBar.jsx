import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import DesoftLogo from '@public/image/desoft_logo_nav_bar.svg';
import styles from '@styles/components/home/HeaderNavBar.module.css';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
//--
export default function HeaderNavBar() {
  return (
    <section className={styles.nav_bar_section}>
      <div className={styles.nav_bar_section__container_all}>
        <div className={styles.nav_bar_section__wrapper_logo}>
          <Link className="nav-bar-section__link-logo" href="/">
            <Image className={styles.nav_bar_section__logo} src={DesoftLogo} alt="Desoft Logo" />
          </Link>
        </div>
        <div className={styles.nav_bar_section__container_sign_up}>
          <div className={styles.nav_bar_section__wrapper_button_sign_up}>
            <Button type="primary" className={styles.nav_bar_section__button_sign_up}>
              Sign up
              <div className={styles.nav_bar_section__wrapper_right_icon}>
                <RightOutlined className={styles.nav_bar_section__right_icon} />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
