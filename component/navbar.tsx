import Link from "next/link";

export default function Navbar() {
  return (
    <div id="navbar" style={{ display: "flex", gap: "10px" }}>
      <Link href={"/"}>Home</Link>
      <Link href={"/contenu"}>Contenu</Link>
      <Link href={"/contact"}>Contact</Link>
    </div>
  );
}
