import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';

const ButtonContent = ({ icon, text }) => (
  <div className="button__content">
    {icon && <span className={`icon-${icon}`} />}
    {text && <span>{text}</span>}
  </div>
);

const Button = ({ className, empty, icon, link, onClick = () => {}, text, download }) => {
  if (download) {
    return (
      <a href={link} download className={classNames('btn', className, { empty })}>
        <ButtonContent icon={icon} text={text} />
      </a>
    );
  }
  if (!link) {
    return (
      <button type="button" className={classNames('btn', className, { empty })} onClick={onClick}>
        <ButtonContent icon={icon} text={text} />
      </button>
    );
  }
  if ('/' === link.substring(0, 1)) {
    return (
      <Link to={link} className={classNames('btn', className, { empty })}>
        <ButtonContent icon={icon} text={text} />
      </Link>
    );
  }
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={classNames('btn', className, { empty })}>
      <ButtonContent icon={icon} text={text} />
    </a>
  );
};

ButtonContent.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};

ButtonContent.defaultProps = {
  icon: null,
  text: null,
};

Button.propTypes = {
  className: PropTypes.string,
  empty: PropTypes.bool,
  icon: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  download: PropTypes.bool,
};

Button.defaultProps = {
  className: 'btn',
  empty: false,
  icon: null,
  link: null,
  onClick: null,
  text: null,
  download: false,
};

export default Button;
