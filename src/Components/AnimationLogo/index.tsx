import Lottie from "react-lottie";
import animation from "./animation.json";

interface iAnimationProps{
    height: number;
    width: number;
}

export const AnimationLogo = ({height, width}: iAnimationProps) => {
  const animationLogo = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={animationLogo} height={height} width={width} />
    </>
  );
};