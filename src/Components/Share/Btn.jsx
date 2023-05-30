import React from 'react';
/**
 * A dynamic button which can be used all over the site.
 * @param {String} type The type of the button.
 * @param {Object} children The Object of the button children.
 * @param {boolean} disbale The boolean enable and disable button
 * @param {string} className The  className This String carries the design of button fields.
 * @returns The proper button with specified params.
 */
export default function Btn({
  type = 'button',
  className = 'bg-secondary',
  children = 'button',
  disabled = false,
  onClick = () => { },
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`bg-primary rounded-[3.125rem] py-3 px-2.5 w-full text-base text-textHeader font-semibold ${className}`}
    >
      {children}
    </button>
  );
}
