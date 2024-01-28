import s from './Footer.module.css';

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <p className={s.copyright}>© 2024. Влад Чиков</p>
      </div>
    </footer>
  );
}
