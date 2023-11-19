import "../styles/index.css";

const Header = () => {
  const headerStyle = {
    backgroundImage:
      "url('https://backend.artreview.com/wp-content/uploads/2022/03/heroDn3SrrTeZNNq5x62Rn4bhc.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    className: "bg-image",
  };

  return (
    <div className="text-white p-32" style={headerStyle}>
      <a href="#" className="text-4xl font-extrabold">
        Elden Ring Bosses
      </a>
      <h6>
        For when you're tired of dying to them <span>💀</span>
      </h6>
    </div>
  );
};

export default Header;
