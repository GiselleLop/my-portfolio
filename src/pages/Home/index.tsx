import style from "./Home.module.css";

export const HomePage = () => {
  return (
    <section id="home" data-route="/" className={style.home_main}>
      <div className={style.home_greeting}>
        <div className={style.home_greeting_text}>
          <h1 className={style.home_hi}>Hi, I'm</h1>
          <h1 className={style.home_name}>Giselle Lopez</h1>
        </div>

        <div className={style.picturte_cont}>
          <img src="..\src\assets\images\star.png" className={`${style.star} ${style.star_big1}`} />
          <img src="..\src\assets\images\star.png" className={`${style.star} ${style.star_small1}`} />
         
          <img src="..\src\assets\images\picture_main.jpg" className={style.home_picture} />

          <img src="..\src\assets\images\star.png" className={`${style.star} ${style.star_small2}`} />
          <img src="..\src\assets\images\star.png" className={`${style.star} ${style.star_big2}`} />
        </div>
      </div>

      <div className={style.home_about_container}>
        <p className={style.home_about_text}>I am a web developer with a great passion for programming. With every line of code I write, I combine my creativity and initiative to design captivating and functional web experiences.</p>
      </div>

      {/* <button className={style.button_arrow}>
        <img src="..\src\assets\images\Arrow.png" className={style.arrow_img} />
      </button> */}
     
    </section>
  );
};
