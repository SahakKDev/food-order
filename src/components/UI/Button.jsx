export default function Button({ children, textOnly, className, ...props }) {
  let cssCLasses = textOnly ? "text-button" : "button";
  cssCLasses += ` ${className}`;

  return (
    <button className={cssCLasses} {...props}>
      {children}
    </button>
  );
}
