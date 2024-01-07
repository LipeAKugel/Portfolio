import styles from "../styles/components/carousel.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Carousel({ items }) {

  return (
    <div className={styles.carousel_wrapper}>
      {items.map(item => (
        <Link
          key={item.name} 
          className={styles.carousel_item}
          href={item.url}
        >
          <Image src={item.img} alt="project image"/>
          <div className={styles.item_info}>
            <h1 className={styles.item_title}>{item.name}</h1>
            <p className={styles.item_description}>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}