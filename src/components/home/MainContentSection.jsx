import React from 'react';
import Image from 'next/image';
import ProductRoadmap from '@public/image/content/product-roadmap.png';
import FeaturesBacklog from '@public/image/content/features-backlog.png';
import SprintPlanning from '@public/image/content/sprint-planning.png';
import BugTracking from '@public/image/content/bug-tracking.png';
import Connector_1 from '@public/image/content/connector-1.png';
import Connector_2 from '@public/image/content/connector-2.png';
import Connector_3 from '@public/image/content/connector-3.png';
//--
export default function MainContentSection() {
  return (
    <section className="summary_content_section">
      <div className="summary_content_section__container_all">
        {/*---Product-Roadmap---*/}
        <div className="summary_content_section__container_product_roadmap">
          <div className="summary_content_section__wrapper_product_roadmap">
            <div className="summary_content_section__container_product_roadmap_title">
              <h2 className="summary_content_section__product_roadmap_title">
                <b className="summary_content_section__highlight_title">
                  Create your team's ideal workspace <br />
                </b>
                to get full visibility into your progress
              </h2>
            </div>
            <div className="summary_content_section__container_product_roadmap_paragraph">
              <p className="summary_content_section__product_roadmap_paragraph">
                Build custom roadmaps and Gantt charts so you can see everything from sprint planning to bug tracking
                all on one high-level overview.
              </p>
            </div>
            <div className="summary_content_section__container_product_roadmap_image">
              <Image
                className="summary_content_section__product_roadmap_image"
                src={ProductRoadmap}
                alt="Product Roadmap"
              />
            </div>
          </div>
        </div>
        {/*---Product-Roadmap---*/}
        <div className="summary_content_section__container_connector_1_image">
          <Image className="summary_content_section__connector_1_image" src={Connector_1} alt="Connector 1" />
        </div>
        {/*---Features-Backlog---*/}
        <div className="summary_content_section__container_features_backlog">
          <div className="summary_content_section__wrapper_features_backlog">
            <div className="summary_content_section__container_features_backlog_title">
              <h2 className="summary_content_section__features_backlog_title">
                <b className="summary_content_section__highlight_title">
                  Orchestrate work on new features <br />
                </b>
                with a fully collaborative platform
              </h2>
            </div>
            <div className="summary_content_section__container_features_backlog_paragraph">
              <p className="summary_content_section__features_backlog_paragraph">
                Make it easy for product managers, developers, and designers to assign tasks, report statuses, and post
                updates on shared projects.
              </p>
            </div>
          </div>
          <div className="summary_content_section__container_features_backlog_image">
            <Image
              className="summary_content_section__features_backlog_image"
              src={FeaturesBacklog}
              alt="Features Backlog"
            />
          </div>
        </div>
        {/*---Features-Backlog---*/}
        <div className="connector-2-3">
          <img src={Connector_2} alt="" />
        </div>
        <div className="contents-section-4-wrapper-3">
          <div className="sub-wrapper-3-1">
            <div className="title-4">
              <h2>
                <b>
                  Adapt your sprint planning process
                  <br />
                </b>
                with customizable views
              </h2>
            </div>
            <div className="paragraph-5">
              <p>
                View sprints as a Kanban, table, chart, or Gantt view all at the same time. So, your team can work the
                way that works for them.
              </p>
            </div>
          </div>
          <div className="sub-wrapper-3-2">
            <img src={SprintPlanning} alt="" />
          </div>
        </div>
        <div className="connector-3-4">
          <img src={Connector_3} alt="" />
        </div>
        <div className="contents-section-4-wrapper-4">
          <div className="sub-wrapper-4-1">
            <div className="title-5">
              <h2>
                <b>
                  Streamline bug tracking on <br />
                </b>
                one intuitive board
              </h2>
            </div>
            <div className="paragraph-6">
              <p>Make it simple for all relevant stakeholders to check the status of open requests at any time.</p>
            </div>
          </div>
          <div className="sub-wrapper-4-2">
            <img src={BugTracking} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
