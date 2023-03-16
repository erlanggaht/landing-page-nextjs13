import style from '../../page.module.css'
export default function TryProduct() {
  return (
    <div id='tryProduct' className={style.tryProduct}>
      <span className={style.titleTry}>Ready to try our products? </span>
      <button  className={style.btnRegister}>Learn more</button>
    </div>
  )
}
