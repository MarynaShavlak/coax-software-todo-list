import PropTypes from 'prop-types';
import { SectionStyled } from './Section.styled';

export function Section({ title, children }) {
  return (
    <SectionStyled>
      {title && <h2 className="section__title">{title}</h2>}
      {children}
    </SectionStyled>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
