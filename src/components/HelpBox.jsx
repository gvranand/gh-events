import { string } from 'prop-types';

import './HelpBox.css';

function HelpBox({ title, text, head}) {
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <h3>{head}</h3>
      <p1>{text}</p1>
    </article>
  );
}

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
