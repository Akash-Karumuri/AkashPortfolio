import "./LoadingScreen.scss";

export default function LoadingScreen({ progress }) {
  return (
    <div className="loading-screen">
      <div className="loading-screen__content">
        <div className="loading-screen__avatar">A</div>
        <div className="loading-screen__name">
          K.N.P.R. <span>Akash</span>
        </div>
        <div className="loading-screen__role">Frontend Developer</div>
      </div>
      <div className="loading-screen__bar-track">
        <div
          className="loading-screen__bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="loading-screen__percent">{progress}%</div>
    </div>
  );
}
