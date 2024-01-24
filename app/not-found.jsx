import Link from "next/link";

const PageNotFound = () => {
  return (
    <section>
      <p className="fetch-msg">
        <Link href="/" className="underline">
          404 | This Page Is Not Found 🤔
        </Link>
      </p>
    </section>
  );
};

export default PageNotFound;
