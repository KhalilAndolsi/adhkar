import Link from "next/link";

const Error = () => {
  return (
    <section>
      <p className="fetch-msg">
        <Link href="/" className="underline">
          500 | Something Is Wrong 💀
        </Link>
      </p>
    </section>
  );
};

export default Error;
