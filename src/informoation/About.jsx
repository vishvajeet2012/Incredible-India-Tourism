import styles from "../css/About.module.css";

function About() {

    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.contact_box}>
                    <div className={styles.headingBox}>
                        <h1 className={styles.heading}>Contact Us</h1>
                    </div>
                    <div className={styles.contact_info}>
                        <p><strong>Address:</strong></p>
                        <p>123 Main Street,</p>
                        <p>Bhinmal, Rajasthan, 343029, India</p>

                        <p><strong>Phone:</strong> +91 9876543210</p>

                        <p><strong>Email:</strong> support@vishvajeetwebsite.com</p>

                        <p><strong>Business Hours:</strong></p>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
