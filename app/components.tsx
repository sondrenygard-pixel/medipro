export function BrandLogo() {
  return (
    <a className="brand" href="/">
      <div className="brandSymbol">
        <span className="brandPulse" />
        <span className="brandCross">+</span>
      </div>
      <div>
        <strong>MediPro</strong>
        <small>Kliniske verktøy</small>
      </div>
    </a>
  )
}

export function ProductVisual({
  type,
}: {
  type: "nurse" | "ambulance" | "doctor"
}) {
  const title =
    type === "nurse"
      ? "SykepleierPro"
      : type === "ambulance"
      ? "AmbulansePro"
      : "LegePro"

  return (
    <div className={`productVisual ${type}`}>
      <div className="visualTop">
        <div className="visualIcon">+</div>
        <span>{title}</span>
      </div>
      <div className="visualLines">
        <span />
        <span />
        <span />
      </div>
      <div className="visualGrid">
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
