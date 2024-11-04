import { useNavigate } from 'react-router-dom';
import homeImg from "../media/slider/India Tourism .jpg";
import styles from "../css/indianpass.module.css";

function HomeScreen() {
  const navigate = useNavigate();

  function viewAll() {
    navigate("/viewallcard");
  }

  return (
    <div className={styles.container}>
      {/* Background Image */}
      <img src={homeImg} alt="India Tourism Background" className={styles.backgroundImage} />

      {/* Overlay Content */}
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <h1 className={styles.mainTitle}>The India Pass® | Save big on all your must-sees</h1>
          <p className={styles.subTitle}>
            The best Indian attractions and activities, all for one low price.
          </p>
          
          {/* Stats Section */}
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h2 className={styles.statValue}>4.3M</h2>
              <p className={styles.statLabel}>purchases</p>
            </div>
            <div className={styles.statItem}>
              <h2 className={styles.statValue}>95+</h2>
              <p className={styles.statLabel}>attractions included</p>
            </div>
            <div className={styles.statItem}>
              <h2 className={styles.statValue}>₹15,000</h2>
              <p className={styles.statLabel}>potential savings per trip</p>
            </div>
          </div>

          {/* Button Section */}
          <div className={styles.buttonGroup}> 
            <button onClick={viewAll} className={styles.viewAttractionsButton}>
            
            </button>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
