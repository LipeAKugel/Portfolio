import Image from "next/image";
import styles from "../styles/components/project.module.css";
import Link from "next/link";

export default function Project({ name, description, imgurl, projecturl}) {
  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <div className={styles.image_container}>
        <Image src={imgurl} alt=""/>
      </div>
      <Link href={projecturl}>{projecturl}</Link>
      <p>{description}</p>
    </div>
  )
}