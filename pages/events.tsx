import styles from '@/styles/Home.module.css'
const Events = () => {
    return ( 
        <>
    <div className={styles.body}>
        <div className={styles.header}>
          <div className={styles.container}>
            <div className={styles.branding}>
              <h1>Event Planner Application</h1>
            </div>
            <nav>
              <ul>
                <li className={styles.current}><a href="/">Home</a></li>
                <li><a href="events">Event</a></li>
                <li><a href="login">Login</a></li>
                <li><a href="signUp">SignUp</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
        </>
     );
}
 
export default Events;