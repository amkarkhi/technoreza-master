import layoutStyles from '../styles/Layout.module.scss'
const Layout = ( { children}) => {
  return (
    <div className={layoutStyles.container}>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
