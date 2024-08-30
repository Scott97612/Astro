export default function Main(props) {

    // eslint-disable-next-line react/prop-types
    const {data} = props;

  return (
    <div className="imgContainer">
        <img src={data?.hdurl} alt={data?.title} className="bgImg"/>
    </div>
    
    
  )
}
