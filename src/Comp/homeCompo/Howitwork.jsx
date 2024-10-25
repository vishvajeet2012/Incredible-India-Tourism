import stylee from './css/Howitwork.module.css'

function Howitwork (){
    return (
        <>
            <div className={stylee.mainContainer} >
                        <div className={stylee.headingBox}>
                    <h1 className={stylee.heading}>How it work</h1>
                        </div>
            <div className={stylee.subheadingBox}>
                <h1 className={stylee.subheading}>We make sightseeing easy</h1>
            </div>
            <div className={stylee.infoContainer}>
                    <div className={stylee.infomationBox}>
                    <div className={stylee.buyBox}>
                    <i class="bi bi-ticket-detailed-fill"></i>
                    </div>


                    </div>


            </div>

            </div>


        </>
    )
}

export default Howitwork