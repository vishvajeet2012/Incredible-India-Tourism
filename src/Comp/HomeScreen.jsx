
import { Box } from "@mui/material"
import homeImg from "../media/slider/India Tourism .jpg"


function HomeScreen(){
    return (
        <Box>
            <div className="main-container">
    <div style={{   width:"100%", height:'500px' }} className="image-Container">
    <div className="text-box">
          <h1>The India Pass® | Save big on all your must-sees</h1>
          <p>The best London attractions and activities, all for one low price.</p>
        </div>
          <img style={{    alignContent:"center", height:"480px", width:'100%'}} src={homeImg}/>
        </div>
      

    </div>


        </Box>
    )
}

export default HomeScreen