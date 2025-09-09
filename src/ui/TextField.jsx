function TextField({
  label,
  name,
  type = "text",
  register,
  required,
  validationSchema,
  errors,
}) {
  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        id={name}
        type={type}
        {...register(name, validationSchema)}
        className="text-field--input"
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
