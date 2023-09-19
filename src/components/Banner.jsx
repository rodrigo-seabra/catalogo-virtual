import Style from "../style/Banner.module.css";

import img from "../Photos/CARRO.png";

function Banner() {
  return (
    <section className={Style.section}>
      <div className={Style.bgdiv}>
        <div>
          <img src={img} alt="" className={Style.img} />
        </div>
        <div className={Style.divTitle}>
          <h1 className={Style.title}>
            OS MELHORES CARROS NOVOS E USADOS É <span className={Style.span}>AQUI</span>{" "}
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Banner;
