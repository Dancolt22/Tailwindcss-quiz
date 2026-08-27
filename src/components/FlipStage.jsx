export default function FlipStage({ rotation, transitionOn, children }) {
  return (
    <div style={{ perspective: "1600px" }} className="w-full">
      <div
        style={{
          transform: `rotateY(${rotation}deg)`,
          transition: transitionOn ? "transform 260ms ease-in-out" : "none",
          transformStyle: "preserve-3d",
        }}
        className="w-full"
      >
        {children}
      </div>
    </div>
  );
}
