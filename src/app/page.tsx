import Contact from "./components/contact/contact";
import contactstyle from "./components/contact/contact.module.css";
import Opinion from "./components/opinion/opinion";
import Email from "./components/email/email";
import Rating from "./components/rating/rating";

const borderBottomStyle = {
  borderBottom: "1px solid #98ABEE",
};

export default function Home() {
  return (
    <div>
      <div
        className={`h-screen flex items-center justify-center bg-white text-blue-600 outflow-auto`}
      >
        <div
          style={{
            boxShadow: "0px 0px 4px #D3D3D3",
            overflowY: "scroll",
            scrollBehavior: "smooth",
            scrollSnapType: "y mandatory",
            scrollbarWidth: "thin",
          }}
          className="element flex w-[60%] h-[70%] flex-col items-center border shadow-black-500/50 rounded-md"
        >
          <Contact
            contactstyle={contactstyle}
            borderBottomStyle={borderBottomStyle}
          />
          <Opinion />
          <Email />
          <Rating />
        </div>
      </div>
    </div>
  );
}
