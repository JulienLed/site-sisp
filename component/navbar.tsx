import Link from "next/link";

export default function Navbar() {
  return (
    <div id="navbar" style={{ display: "flex", gap: "10px" }}>
      <Link href={"/"}>Accueil</Link>
      <Link href={"/services"}>Services et infos</Link>
      <Link href={"/contact"}>Contact</Link>
    </div>
  );
}
