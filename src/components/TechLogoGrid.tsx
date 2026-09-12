"use client";

import React from "react";
import styles from "./TechLogoGrid.module.css";
import { TECH_ITEMS } from "@/data/techItems";

const halfLength = Math.ceil(TECH_ITEMS.length / 2);
const ROW_1_ITEMS = TECH_ITEMS.slice(0, halfLength);
const ROW_2_ITEMS = TECH_ITEMS.slice(halfLength);

const DUPLICATED_ROW_1 = [...ROW_1_ITEMS, ...ROW_1_ITEMS];
const DUPLICATED_ROW_2 = [...ROW_2_ITEMS, ...ROW_2_ITEMS];

export default function TechLogoGrid() {
  return (
    <section className={styles.techShowcaseSection}>
      <div className={styles.techShowcaseTitle}>Teknologi Premium Yang Kami Gunakan</div>
      
      {/* Row 1: Infinite Horizontal Slider (Scroll Left) */}
      <div className={`swiper swiper-initialized swiper-horizontal logo-swiper ${styles.swiperContainer}`} style={{ marginBottom: "16px" }}>
        <div className={`swiper-wrapper ${styles.swiperWrapperLeft}`}>
          {DUPLICATED_ROW_1.map((item, idx) => (
            <div key={`${item.name}-row1-${idx}`} className={styles.techLogoItem}>
              <span className={styles.techLogoSvg}>{item.svg}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Infinite Horizontal Slider (Scroll Right) */}
      <div className={`swiper swiper-initialized swiper-horizontal logo-swiper ${styles.swiperContainer}`}>
        <div className={`swiper-wrapper ${styles.swiperWrapperRight}`}>
          {DUPLICATED_ROW_2.map((item, idx) => (
            <div key={`${item.name}-row2-${idx}`} className={styles.techLogoItem}>
              <span className={styles.techLogoSvg}>{item.svg}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
