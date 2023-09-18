import styles from "/app/styles/min/Header.module.css";
import Image from "next/image";
import Link from "next/link"

import {Dancing_Script} from 'next/font/google'
const dancingScript = Dancing_Script({subsets: ["latin"]})

import {BiLogoGithub} from "react-icons/bi"

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image src={"bun.svg"} width={50} height={50} alt="logo" />
        </div>
<div className={styles.txt}><span className={dancingScript.className}>Bun-with-Nextjs</span></div>
    </div>
      <Link className={styles.right} href={"#"} ><BiLogoGithub /></Link>
    </div>
  );
};

export default Header;
