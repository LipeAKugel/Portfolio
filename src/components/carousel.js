"use client";
import styles from "../styles/components/carousel.module.css"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Carousel({ items }) {

  const carousel = useRef(null);

  return (
    <motion.div ref={carousel} className={styles.carousel}>
      <motion.div
        drag="x"
        dragConstraints={carousel}
        className={styles.inner_carousel}
      >
        {items.map(item => (
          <motion.div className={styles.item} key={item.name}>
            <Image src={item.img} alt={item.name} />
            <div className={styles.item_info}>
              <Link href={item.url}>
                <h1>{item.name}</h1>
              </Link>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}