import useSignUp from "@/Customhooks/useSignUp";
import styles from '@/styles/Home.module.css';


export default function SignUp() {
  const {
    userName,
    email,
    password,
    loader,
    setLoader,
    setEmail,
    setUserName,
    setPassword,
    onSubmitHandler } = useSignUp();

  return (
    <>

      <div className={styles.signupForm}>
        <h1 className={styles.heading}>Please SignUp</h1>
        <input className={styles.input} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Enter your name" />
        <br />
        <input className={styles.input} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
        <br />
        <input className={styles.input} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
        <br />
        {loader ? <button className={styles.button}>Loading...</button> : <button onClick={onSubmitHandler} className={styles.button} >Signup</button>}
      </div>
    </>
  )
}