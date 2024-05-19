import "./style.css";

export const Banner = ({ children }: any) => {
  return (
    <div className="banner">
      <div>{children}</div>
      <div className="blobs" role="presentation">
        <div className="blob-rotate">
          <div className="blob-move">
            <div className="blob"></div>
          </div>
        </div>
        <div className="blob-rotate">
          <div className="blob-move">
            <div className="blob"></div>
          </div>
        </div>
        <div className="blob-rotate">
          <div className="blob-move">
            <div className="blob"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
