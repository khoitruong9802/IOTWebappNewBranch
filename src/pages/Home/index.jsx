const Home = () => {
  return (
    // <div
    //   style={{
    //     display: "flex",
    //   }}
    // >
    //   <h1
    //     style={{
    //       fontSize: "20px",
    //       color: "green",
    //     }}
    //   >
    //     Trang chu
    //   </h1>
    // </div>
    // <div style={{ display: "flex" }}>
    //   <h1 style={{ fontSize: "20px", color: "red" }}>hihi</h1>
    // </div>
    <body
      style={{
        font: "14px/18px  Arial, Helvetica, sans-serif",
        color: "#666565",
        position: "relative",
        minWidth: "1200px",
        background: "#000",
      }}
    >
      <header
        style={{
          display: "block",
          padding: "13px 0 0",
          position: "relative",
          zIndex: "999",
        }}
      >
        <div>
          <div>
            <div
              style={{
                float: "right",
                fontSize: "14px",
                paddingTop: "65px",
                color: "#bfbebe",
              }}
            >
              Need Help? Call Us +1 (800) 123 4567
            </div>
            <h1>
              <a href="/Home">
                <img src="#" alt="Logo" />
              </a>
            </h1>
          </div>
        </div>

        <div>
          <div>
            <div>
              <div style={{ float: "right", padding: "10px 0 11px 25px" }}>
                <a href="#"></a>
                <a href="#"></a>
              </div>
              <div
                style={{
                  padding: "11px 0 16px",
                  float: "right",
                  fontSize: "14px",
                  color: "#fff",
                  lineHeight: "26px",
                }}
              >
                {" "}
                <a href="#">User Login</a> Social{" "}
              </div>
              <nav>
                <ul>
                  <li style={{}}>
                    <a href="#">Home</a>
                  </li>
                  <li style={{}}>
                    <a href="#">About</a>
                  </li>
                  <li style={{}}>
                    <a href="#">Services</a>
                  </li>

                  <ul>
                    <li style={{}}>
                      <a href="#">Services Lists</a>
                    </li>
                  </ul>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </body>
  );
};

export default Home;
