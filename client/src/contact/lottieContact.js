import LottieAnimation from "../animation/lottie";
import home from "../animation/contact.json";

export default function LottieContact() {
    return (
        <div className="lottie-contact">
            <LottieAnimation lotti={home} height={300} width={400} />
        </div>
    );
}
