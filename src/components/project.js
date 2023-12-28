import Image from "next/image";
import styles from "../styles/components/project.module.css";
import Link from "next/link";

export default function Project({ name, description, imgurl, projecturl}) {
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <Link href={projecturl}>{projecturl}</Link>
      <Image src={imgurl} alt=""/>
      <p>{description}</p>
    </div>
  )
}