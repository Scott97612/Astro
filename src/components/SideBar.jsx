export default function SideBar(props) {

const {toggleSideBar, data} = props;

  return (
    <div className="sideBar" onClick={toggleSideBar}>
        <div className="bgOverlay"></div>
        <div className="sideBarContent">

            <p className="descriptionTitle">{data?.title}</p>
            <div className="descriptionContainer">
                <p className="date">{data?.date}</p>
                <br></br>
                <p className="explanation">
                    {data?.explanation}
                </p>
            </div>

            <button onClick={toggleSideBar}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>

        </div>
    </div>
  )
}
