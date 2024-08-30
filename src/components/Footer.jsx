export default function Footer(props) {
    const { toggleSideBar, data } = props;
  return (
    <footer>
        <div className="bgGradient">

        </div>
        <div>
            <h2>Astro</h2>
            <h1>{data?.title}</h1>
            
        </div>
        <button onClick={toggleSideBar}>
            <i className="fa-regular fa-circle-question"></i>
        </button>
    </footer>
  )
}
