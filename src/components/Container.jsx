import "../styles/layout.css";

export default function Container({ children }) {
  return (
    <div className="app-wrapper">
      <div className="mobile-frame">{children}</div>
    </div>
  );
}
