import LottieAnimation from "../animation/lottie";
import home from "../animation/contact.json";

export default function LottieContact() {
    return (
        <>
            <LottieAnimation lotti={home} height={300} width={400} />
        </>
    );
}
