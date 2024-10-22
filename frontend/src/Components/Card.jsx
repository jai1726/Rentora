import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ header, content, footer }) {
  return (
    <div className="flex flex-col space-y-4 p-4 border rounded-lg shadow-lg">
      {header && <header className="font-bold text-xl">{header}</header>}
      {content && <main className="text-gray-700">{content}</main>}
      {footer && <footer className="mt-auto">{footer}</footer>}
    </div>
  );
}

Card.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Card.defaultProps = {
  header: null,
  content: null,
  footer: null,
};
