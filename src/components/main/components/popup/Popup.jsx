

export default function Popup({children}) {
  return(
    <>
      <div className="popup" id="popupOne">
        {children}
      </div>
    </>
  );
}