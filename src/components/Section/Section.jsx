import style from '../Section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={style.section}>
      <h4 className={style.sectionTitle}>{title}</h4>
      {children}
    </div>
  );
};

export default Section;
