import styles from "@/styles/components/messageModal.module.css";
import { useState } from "react";

export default function MessageModal({ open, text }) {
  return (
    <dialog className={styles.modal} open={open}>
      <h2>{text}</h2>
    </dialog>
  )
}