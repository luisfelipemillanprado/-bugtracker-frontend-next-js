import React from 'react';
import { CheckOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styles from '@styles/components/home/MainTemplateSection.module.css';
//--
export default function MainTemplateSection() {
  return (
    <section className={styles.selectable_template_section}>
      <div className={styles.selectable_template_section__container_all}>
        <div className={styles.selectable_template_section__container_tags}>
          {/*--1--*/}
          <div className={styles.selectable_template_section__container_tag_1}>
            <div className={styles.selectable_template_section__wrapper_tag_1}>
              <div id="box-1" className={styles.selectable_template_section__tag_1}>
                <CheckOutlined className={styles.selectable_template_section__check_icon} />
              </div>
              <span className={styles.selectable_template_section__span_sp}>Sprint planning</span>
            </div>
          </div>
          {/*--2--*/}
          <div className={styles.selectable_template_section__container_tag_2}>
            <div className={styles.selectable_template_section__wrapper_tag_2}>
              <div id="box-2" className={styles.selectable_template_section__tag_2}>
                <CheckOutlined className={styles.selectable_template_section__check_icon} />
              </div>
              <span className={styles.selectable_template_section__span_bt}>Bug tracking</span>
            </div>
          </div>
          {/*--3--*/}
          <div className={styles.selectable_template_section__container_tag_3}>
            <div className={styles.selectable_template_section__wrapper_tag_3}>
              <div id="box-3" className={styles.selectable_template_section__tag_3}>
                <CheckOutlined className={styles.selectable_template_section__check_icon} />
              </div>
              <span className={styles.selectable_template_section__span_ap}>Agile process</span>
            </div>
          </div>
          {/*--4--*/}
          <div className={styles.selectable_template_section__container_tag_4}>
            <div className={styles.selectable_template_section__wrapper_tag_4}>
              <div id="box-4" className={styles.selectable_template_section__tag_4}>
                <CheckOutlined className={styles.selectable_template_section__check_icon} />
              </div>
              <span className={styles.selectable_template_section__span_fb}>Features backlog</span>
            </div>
          </div>
          {/*--5--*/}
          <div className={styles.selectable_template_section__container_tag_5}>
            <div className={styles.selectable_template_section__wrapper_tag_5}>
              <div id="box-5" className={styles.selectable_template_section__tag_5}>
                <CheckOutlined className={styles.selectable_template_section__check_icon} />
              </div>
              <span className={styles.selectable_template_section__span_pr}>Product roadmap</span>
            </div>
          </div>
          {/*--6--*/}
          <div className={styles.selectable_template_section__container_tag_6}>
            <div className={styles.selectable_template_section__wrapper_tag_6}>
              <div id="box-6" className={styles.selectable_template_section__tag_6}>
                <CheckOutlined className={styles.selectable_template_section__check_icon} />
              </div>
              <span className={styles.selectable_template_section__span_pm}>Project management</span>
            </div>
          </div>
          {/*--7--*/}
          <div className={styles.selectable_template_section__container_tag_7}>
            <div className={styles.selectable_template_section__wrapper_tag_7}>
              <div id="box-7" className={styles.selectable_template_section__tag_7}>
                <CheckOutlined className={styles.selectable_template_section__check_icon} />
              </div>
              <span className={styles.selectable_template_section__span_tm}>Task management</span>
            </div>
          </div>
          {/*--8--*/}
          <div className={styles.selectable_template_section__container_tag_8}>
            <div className={styles.selectable_template_section__wrapper_tag_8}>
              <div id="box-8" className={styles.selectable_template_section__tag_8}>
                <CheckOutlined className={styles.selectable_template_section__check_icon} />
              </div>
              <span className={styles.selectable_template_section__span_dt}>Design tasks</span>
            </div>
          </div>
          {/*--9--*/}
          <div className={styles.selectable_template_section__container_tag_9}>
            <div className={styles.selectable_template_section__wrapper_tag_9}>
              <div id="box-9" className={styles.selectable_template_section__tag_9}>
                <CheckOutlined className={styles.selectable_template_section__check_icon} />
              </div>
              <span className={styles.selectable_template_section__span_os}>+200 Other solutions</span>
            </div>
          </div>
        </div>
        <div className={styles.selectable_template_section__container_action_button}>
          <div className={styles.selectable_template_section__container_button}>
            <div className={styles.selectable_template_section__wrapper_button}>
              <Button type="primary" className={styles.selectable_template_section__button_get_started}>
                Get Started
                <div className={styles.selectable_template_section__wrapper_right_icon}>
                  <RightOutlined className={styles.selectable_template_section__right_icon} />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
