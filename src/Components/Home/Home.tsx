import Lists from "../Lists/Lists"
import Navbar from "../Navbar/Navbar"
import Sort from "../Sort buttons/Sort"
import style from "./home.module.scss"

function Home() {
  return (
    <div className={style.container} >
        <div className={style.navbar}>
            <Navbar />
        </div>
        <div className={style.sort}>
          <Sort />
        </div>
        <div className={style.list}>
          <Lists />
        </div>
    </div>
  )
}

export default Home
