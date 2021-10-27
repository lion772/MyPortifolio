import LottieAnimation from "../animation/lottie";
import home from "../animation/space.json";

export default function LottieContact() {
    return (
        <div className="lottie-space">
            <LottieAnimation lotti={home} height={400} width={400} />
        </div>
    );
}
