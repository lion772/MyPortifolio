export default function Welcome() {
    return (
        <video
            autoPlay={true}
            disableRemotePlayback={true}
            muted={true}
            width="100%"
        >
            <source src="/Welcome-2.mp4" type="video/mp4" />
        </video>
    );
}
