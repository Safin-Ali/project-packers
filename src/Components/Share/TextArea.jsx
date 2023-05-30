import React from 'react';

/**
 * A dynamic input field which can be used all over the site.
 * @param {String} Variant This String to generate the input.
 * @param {String} label The label.
 * @param {Boolean} required Make the input field required with this param.
 * @param {endAdornment} required Make the input field endorment with this param.
 * @param {Boolean} required Make the input field disable/enable with this param.
 * @param {String} className This String carries the design of input fields.
 * @returns It returns the appropriate input field with the params you provided.
 */
export default function TextArea({
  type = 'text',
  className = '',
  label = 'Label',
  placeholder = 'input',
  endAdornment = false,
  required = false,
  disabled = false,
  register,
}) {

  return (
    <textarea
      id={label}
      required={required}
      disabled={disabled}
      type={type}
      {...register}
      placeholder={placeholder}
      className={`w-full bg-white border border-border border-opacity-5 rounded-[0.25rem] box-border py-3.5 px-5 outline-none text-textColor font-medium text-sm ${className}`}
    />
  );
}
