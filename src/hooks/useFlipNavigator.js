import { useCallback, useState } from "react";

/**
 * Drives navigation between named "screens" while producing a
 * 3D card-flip transition: the current rotation is animated out
 * to 90deg, the screen is swapped while the card is edge-on
 * (effectively invisible), then rotated back in from -90deg to 0.
 */
export function useFlipNavigator(initialScreen) {
  const [screen, setScreen] = useState(initialScreen);
  const [rotation, setRotation] = useState(0);
  const [transitionOn, setTransitionOn] = useState(true);

  const navigate = useCallback((next) => {
    setTransitionOn(true);
    setRotation(90);
    setTimeout(() => {
      setScreen(next);
      setTransitionOn(false);
      setRotation(-90);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionOn(true);
          setRotation(0);
        });
      });
    }, 260);
  }, []);

  return { screen, rotation, transitionOn, navigate };
}
