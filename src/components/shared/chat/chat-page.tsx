import { useAtom } from "jotai";
import { messageAtom } from "../../../atoms";

const ChatHead = () => {
  return (
    <nav className="w-full bg-neutral-900 p-2 rounded-t-xl filter drop-shadow-xl items-center flex justify-between">
      <div className="flex space-x-2 items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1676389281733-aaefab0e7907?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-8 w-8 rounded-full"
        />
        <h2 className="text-3xl font-semibold tracking-tight">Kumar</h2>
      </div>
      <div className="space-x-1 flex items-center">
        <a
          href="https://drive.google.com/file/d/1kXepHSI90abp8XIBw8_E5dvxqS4R7vTy/view?usp=sharing"
          className="p-2 hover:bg-neutral-800 transition-all duration-200 ease-linear border-neutral-700 rounded-lg"
        >
          <i className="fa-regular fa-file"></i>
        </a>
        <a
          href="https://github.com/sickodev"
          className="p-2 hover:bg-neutral-800 transition-all duration-200 ease-linear border-neutral-700 rounded-lg"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/kalyanbishwa"
          className="p-2 hover:bg-neutral-800 transition-all duration-200 ease-linear  border-neutral-700 rounded-lg"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://x.com/_kumaarrr_"
          className="p-2 hover:bg-neutral-800 transition-all duration-200 ease-linear border-neutral-700 rounded-lg"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </div>
    </nav>
  );
};

const ChatBody = () => {
  const [messages, setMessages] = useAtom(messageAtom);

  return (
    <div className="h-[75vh] bg-neutral-900/40 p-1 flex flex-col">
      <div className="h-5/6 overflow-y-scroll p-2 space-y-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`container flex ${
              message.type === "AI" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`p-2 rounded-lg max-w-[70%] ${
                message.type === "AI"
                  ? " bg-neutral-800 rounded-bl-none"
                  : "rounded-br-none bg-blue-800"
              }`}
            >
              <p>{message.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-2 h-1/6 w-full flex justify-between space-x-4 border-t border-neutral-800">
        <textarea
          placeholder="Hey! How are you?"
          className="w-full flex-grow p-2 rounded-lg focus:outline-none focus:border-none active:outline-none focus-within:outline-none focus:ring-2 ring-1 ring-sky-600 transition-all duration-200 ease-linear resize-none h-full"
        />
        <div className="flex flex-col justify-end space-y-2">
          <a
            href="mailto:kalyanbishwa03@gmail.com"
            className="border border-neutral-800 text-white px-4 py-2 rounded-lg hover:bg-neutral-800 transition duration-200 ease-linear group"
          >
            <i className="fa-regular fa-envelope transition-all duration-200 ease-linear group-hover:scale-95 group-hover:rotate-12"></i>
          </a>
          <button className="bg-blue-800 hover:bg-blue-900 transition-all duration-200 ease-linear group text-white px-4 py-2 rounded-lg">
            <i className="fa-regular fa-paper-plane group-hover:rotate-12 group-hover:scale-95 transition-all duration-200 ease-linear"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const ChatFooter = () => {
  return (
    <footer className="w-full bg-neutral-900 p-2 flex justify-between items-center rounded-b-xl filter drop-shadow-xl">
      <p className="text-xs opacity-30 font-light">Shh! Don't shout.</p>
      <a href="">
        <p className="text-xs text-neutral-700 underline hover:text-neutral-400 transition-all duration-200 ease-out">
          Source Code
        </p>
      </a>
      <p className="text-xs text-neutral-600">
        No Copyright. Made with <span className="opacity-90">❤️</span>
      </p>
    </footer>
  );
};

export { ChatHead, ChatBody, ChatFooter };
