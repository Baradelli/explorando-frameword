import Link from "next/link";

export default function Page404() {
  return (
    <div>
      <h1>Você se perdei e caiu na página 404 :0</h1>
      <Link href="/" passHref>
        Ir para HOME
      </Link>
    </div>
  );
}
