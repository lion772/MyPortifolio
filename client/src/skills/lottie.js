import LottieAnimation from "../animation/lottie";
import home from "../animation/dev2.json";

export default function Lottie() {
    return (
        <div className="registration-lottie">
            <LottieAnimation lotti={home} height={300} width={400} />
        </div>
    );
}
