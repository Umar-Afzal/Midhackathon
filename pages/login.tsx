import useLogin from "@/Customhooks/useLogin";
import styles from '@/styles/Home.module.css';

export default function Login() {
  const {
    email,
    password,
    loader,
    setLoader,
    setEmail,
    setPassword,
    onSubmitHandler } = useLogin();

  return (
    <>
      <div className={styles.signupForm}>
        <h1 className={styles.heading}> Login form</h1>
        <input className={styles.input} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
        <br />
        <input className={styles.input} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
        <br />
        {loader ? <button className={styles.button} >Loading...</button> : <button className={styles.button} onClick={onSubmitHandler} >Login</button>}
      </div>
    </>
  )
}