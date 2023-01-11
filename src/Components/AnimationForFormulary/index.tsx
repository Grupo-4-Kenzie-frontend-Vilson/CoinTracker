import Lottie from "react-lottie";
import animation from "./animation.json";

interface iAnimationProps {
  height: number;
  width: number;
}

export const AnimationForFormulary = ({ height, width }: iAnimationProps) => {
  const animationForm = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={animationForm} height={height} width={width} />
    </>
  );
};
