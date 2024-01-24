

export async function generateMetadata(props) {
  return {
    title: decodeURIComponent(props.params.title).replaceAll("-", " "),
    discreption: `${decodeURIComponent(props.params.title).replaceAll("-", " ")}`
  };
}

export default function dhikerLayout({ children, params }) {
  return <main>
    <div className="dhiker-title relative">
      
      <h1>{decodeURIComponent(params.title).replaceAll("-", " ")}</h1>
    </div>
    {children}
    </main>;
}
