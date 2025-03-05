import style from "./Home.module.css";

export const HomePage = () => {
  return (
    <section id="home" data-route="/" className={style.home_main}>
      <div className={style.home_greeting}>
        <div className={style.home_greeting_text}>
          <h1 className={style.home_hi}>Hi, I'm</h1>
          <h1 className={style.home_name}>Giselle Lopez</h1>
        </div>
        <img src="..\src\assets\images\imageHome.png" className={style.home_picture} />
      </div>

      <div className={style.home_about_container}>
        <p className={style.home_about_text}>I am a web developer with a great passion for programming. With every line of code I write, I combine my creativity and initiative to design captivating and functional web experiences.</p>
      </div>

    </section>
  );
};
