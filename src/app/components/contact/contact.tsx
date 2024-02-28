interface props {
  contactstyle: {
    element: string;
    inputStyle: string;
    field: string;
  };
  borderBottomStyle: {
    borderBottom: string;
  };
}

const contact: React.FC<props> = (props) => {
  const { contactstyle, borderBottomStyle } = props;
  const { inputStyle, field, element } = contactstyle;

  return (
    <div
      style={{
        // boxShadow: "0px 0px 4px #D3D3D3",
        overflowY: "scroll",
        scrollBehavior: "smooth",
        scrollSnapType: "y mandatory",
        scrollSnapAlign: "start",
      }}
      className={`${element} w-[80%] h-[80%] min-h-full`}
    >
      <div className="flex w-[70%] justify-start mt-20 h-fit">
        <h1 className="text-black font-medium text-xl">Contact Information</h1>
      </div>
      <form className="min-h-full">
        <div className={field}>
          <label className="text-xs font-medium">First name</label>
          <input
            type="text"
            style={borderBottomStyle}
            className={`${inputStyle} pb-1 outline-none placeholder:text-blue-200`}
            placeholder="Jane"
          ></input>
        </div>
        <div className={field}>
          <label className="text-xs font-medium">Last name</label>
          <input
            type="text"
            style={borderBottomStyle}
            className={`${inputStyle} pb-1 outline-none placeholder:text-blue-200`}
            placeholder="Jane "
          ></input>
        </div>
        <div className={field}>
          <label className="text-xs font-medium">Phone name </label>
          <div className="flex">
            <select name="" id="" value="Flag" className="p-2 bg-white">
              <option value="" selected>
                🇺🇸
              </option>
            </select>
            <input
              type="phone"
              style={borderBottomStyle}
              className={`${inputStyle} pb-1 border-b-2 outline-none grow placeholder:text-blue-200`}
              placeholder="Jane"
            ></input>
          </div>
        </div>
        <div className={field}>
          <label className="text-xs font-medium">Email </label>
          <input
            type="text"
            style={borderBottomStyle}
            className={`${inputStyle} pb-1 border-b-2 outline-none placeholder:text-blue-200`}
            placeholder="name@example.com"
          ></input>
        </div>
        <div className={field}>
          <label className="text-xs font-medium">Company </label>
          <input
            type="text"
            style={borderBottomStyle}
            className={`${inputStyle} pb-1 border-b-2 outline-none placeholder:text-blue-200`}
            placeholder="Acme Corporation"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default contact;
