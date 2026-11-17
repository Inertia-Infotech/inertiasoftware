import React from 'react';

// Splits a heading into masked words for the rise-in reveal.
// Wrap a word in *asterisks* to set it in the italic serif accent: "keeps you *moving*."
const ACCENT = /^\*(.+?)\*([.,!?:;’']*)$/;

export function Words({ text, as: Tag = 'h2', className = '', delay, ...rest }) {
  const plain = text.replace(/\*/g, '');
  const tokens = text.split(' ');

  return (
    <Tag className={className} data-split="" data-delay={delay} {...rest}>
      <span className="sr-only">{plain}</span>
      <span aria-hidden="true">
        {tokens.map((token, i) => {
          if (token === '/') return <span key={i} className="br-desk" />;
          const m = token.match(ACCENT);
          const content = m ? (
            <>
              <em className="accent">{m[1]}</em>
              {m[2]}
            </>
          ) : (
            token
          );
          return (
            <React.Fragment key={i}>
              <span className="w">
                <span>{content}</span>
              </span>{' '}
            </React.Fragment>
          );
        })}
      </span>
    </Tag>
  );
}

// Paragraph whose words light up as it scrolls through the viewport.
export function ScrubText({ text, as: Tag = 'p', className = '' }) {
  return (
    <Tag className={className} data-scrub="">
      <span className="sr-only">{text.replace(/\*/g, '')}</span>
      <span aria-hidden="true">
        {text.split(' ').map((token, i) => {
          const m = token.match(ACCENT);
          return (
            <React.Fragment key={i}>
              <span className="sw">{m ? <em className="accent">{m[1]}</em> : token}{m ? m[2] : ''}</span>{' '}
            </React.Fragment>
          );
        })}
      </span>
    </Tag>
  );
}
