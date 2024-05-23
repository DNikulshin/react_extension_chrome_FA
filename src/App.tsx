import { useRef } from "react";
import { useUrl } from "./hooks/useUrl";
import { useData } from "./hooks/useData";

// interface IItem {
//     userId: number,
//         id: number,
//     title: string,
//     completed: boolean
// }

function App() {
  const { copyUrl, typeUrl, typePosition, copyUrlhandler } = useUrl();
  const { sendToServer, items } = useData();
  const refApp = useRef(null);

  console.log(copyUrl, typeUrl, typePosition);

  const toggleVisibleWindow = () => {
    const rootWindow = document.getElementById("ext-app-root");
    if (rootWindow) {
      rootWindow.classList.toggle("active");
    }
  };

  return (
    <div className="app" ref={refApp}>
      <button className="btn" onClick={copyUrlhandler}>
        Copy URL
      </button>

      <button
        className="btn"
        onClick={() => sendToServer({ copyUrl, typeUrl, typePosition })}
      >
        Send to Server
      </button>
      <div>copyUrl : {copyUrl ? "URL copied" : "URL empty"}</div>
      {items.length && (
        <div>
          {typePosition} : {items.length}
        </div>
      )}

      <button className="btn-toggle" onClick={toggleVisibleWindow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
          <path d="M10.205 12.456A.5.5 0 0 0 10.5 12V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4a.5.5 0 0 0 .537.082" />
        </svg>
      </button>
    </div>
  );
}

export default App;
