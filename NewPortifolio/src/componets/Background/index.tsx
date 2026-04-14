import './background.css'

export default function Background(){
    const faces = 12;
    const angle = 360 / faces;    

    return(
        <div className="bg-3d">
            <div className="scene">

                <div className="cube one">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face right"></div>
                    <div className="face left"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>

                <div className="cube two">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face right"></div>
                    <div className="face left"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>

            </div>
            <div className="cylinder">
                <div className="cylinder">
                    {Array.from({ length: faces }).map((_, i) => (
                        <div
                            key={i}
                            className="cylinder-face"
                            style={{
                            transform: `rotateY(${i * angle}deg) translateZ(180px)`
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="glow-ball"></div>
            <div className="glow-ball-blue"></div>
        </div>
    )
}