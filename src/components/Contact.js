const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          className="border-2 rounded-lg border-black p-2 m-2"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="border-2 rounded-lg border-black  p-2 m-2"
          placeholder="message"
        ></input>
        <button className=" border-black p-2 m-2 rounded-lg border-2 bg-gray-400">
          submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
