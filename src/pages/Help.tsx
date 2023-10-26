import classes from './Help.module.css'

export const Help = () => {
  return (
    <main className={classes.help}>
      <h1 className={classes.helpHeading}>Welcome to the Help Center</h1>

      <section className={classes.helpList}>
        <article className={classes.helpItem}>
          <h2>Getting Started</h2>
          <p>This is a website that contains all the information and data about the Star War movies</p>
        </article>

        <article className={classes.helpItem}>
          <h2>Troubleshooting</h2>
          <p>Having issues? Find common solutions here or contact our support team for assistance.</p>
        </article>
      </section>
    </main>
  )
}
