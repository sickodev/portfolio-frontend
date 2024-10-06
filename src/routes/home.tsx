import { ChatBody, ChatFooter, ChatHead } from "../components/shared/chat/chat-page";
import Navbar from "../components/shared/navbar";
import Viewers from "../components/shared/viewers";

function Home() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center relative">
      <Navbar/>
      <Viewers/>
      <div className="w-[75%] lg:w-[40%]">
      <ChatHead/>
      <ChatBody/>
      <ChatFooter/>
      </div>
    </main>
  );
}

export default Home;
