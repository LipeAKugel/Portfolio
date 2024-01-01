import Image from "next/image";
import styles from "../styles/components/project.module.css";
import Link from "next/link";

export default function Project({ name, description, img, projecturl}) {
  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      { img && 
        (<div className={styles.image_container}>
          <Image src={img} alt=""/>
        </div>)
      }
      <Link href={projecturl}>{projecturl}</Link>
      <p>{description}</p>
    </div>
  )
}