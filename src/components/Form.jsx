import styles from '../css/form.module.css'

const Form = () => {
    return (
        <div className={styles.div__container} >
            <div className={styles.div__image}>
                <img className={styles.div__image} src="https://images.unsplash.com/photo-1544526226-d4568090ffb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
            </div>
            <div className={styles.div__form}>
                <h1 className={styles.title}>title</h1>
                <form className={styles.form__style} action="">
                    <label htmlFor="name">Name</label> <br />
                    <input className={styles.input__style} type="text" id='name' name='name' /> <br />
                    <label htmlFor="email">email address</label> <br />
                    <input className={styles.input__style} type="email" id='email' name='email' /> <br />
                    <label htmlFor="departement">Name</label> <br />
                    <input className={styles.input__style} type="text" id='departement' name='departement' /> <br />
                    <label htmlFor="time">Name</label> <br />
                    <input className={styles.input__style} type="text" id='time' name='time' /> <br />
                </form>
            </div>
        </div>
    );
}

export default Form;