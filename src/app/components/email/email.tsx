import styles from "./email.module.css";

const email = () => {
  return (
    <div
      className="flex w-[80%] min-h-full max-h-full"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="flex flex-col justify-center w-full">
        <h1 className="text-2xl text-black">Please enter your email?</h1>
        <input
          className={`placeholder:text-2xl py-4 pb-1 border-b-2 outline-none placeholder:text-blue-200`}
          type="text"
          placeholder="Enter your email."
        />
      </div>
    </div>
  );
};

export default email;
