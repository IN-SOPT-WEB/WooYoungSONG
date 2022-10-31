import reactDom from "react-dom";

export default function ModalPortal ({ children }) {
    const el = document.getElementById("modal");
    el.style = "display: flex; justify-content: center;";
    return reactDom.createPortal(children, el);
};