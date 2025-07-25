"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/Logo ABC.png";
import styles from "./navbar.module.css";

export default function Navbar() {
  type Visibility = "visible" | "hidden";
  type Appear = {
    about: Visibility;
    patrimoine: Visibility;
    locataire: Visibility;
    candidat: Visibility;
  };
  type Section = "about" | "patrimoine" | "locataire" | "condidat";
  const [appear, setAppear] = useState<Appear>({
    about: "hidden",
    patrimoine: "hidden",
    locataire: "hidden",
    candidat: "hidden",
  });

  return (
    <div className={styles.navbar}>
      <div>
        <Link href={"/"}>
          <Image alt="Logo ABC" src={logo} width={238} height={150} />
        </Link>
      </div>
      <div className={styles.navbar_links}>
        <div
          onMouseEnter={() =>
            setAppear((prev) => ({ ...prev, about: "visible" }))
          }
          onMouseLeave={() =>
            setAppear((prev) => ({ ...prev, about: "hidden" }))
          }
        >
          <Link href={"/a_propos"}>A propos</Link>
          <div
            className={styles.navbar_links_services}
            style={{ visibility: appear.about }}
          >
            <Link href={"/a_propos/cooperative"}>Coopérative</Link>
            <Link href={"/a_propos/patrimoine"}>Patrimoine</Link>
            <Link href={"/a_propos/gouvernance"}>Gouvernance</Link>
          </div>
        </div>
        <div
          onMouseEnter={() =>
            setAppear((prev) => ({ ...prev, locataire: "visible" }))
          }
          onMouseLeave={() =>
            setAppear((prev) => ({ ...prev, locataire: "hidden" }))
          }
        >
          <Link href={"/locataire"}>Locataire</Link>
          <div
            className={styles.navbar_links_services}
            style={{ visibility: appear.locataire }}
          >
            <Link href={"/locataire/services/service_locatif"}>
              Service locatif
            </Link>
            <Link href={"/locataire/services/service_technique"}>
              Service technique
            </Link>
            <Link href={"/locataire/services/service_social"}>
              Service social
            </Link>
          </div>
        </div>
        <div
          onMouseEnter={() =>
            setAppear((prev) => ({ ...prev, candidat: "visible" }))
          }
          onMouseLeave={() =>
            setAppear((prev) => ({ ...prev, candidat: "hidden" }))
          }
        >
          <Link href={"/candidat"}>Candidat</Link>
          <div
            className={styles.navbar_links_services}
            style={{ visibility: appear.candidat }}
          >
            <Link href={"/candidat/inscription"}>Inscription</Link>
            <Link href={"/candidat/suivi"}>Suivi</Link>
          </div>
        </div>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </div>
  );
}
