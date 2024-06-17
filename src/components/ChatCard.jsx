import { useForm } from "react-hook-form";
import { v4 as uid } from "uuid";
import Messages from "./Messages";
import { useAppDispatch } from "../store/hooks";
import { addMessage } from "../store/messagesSlice";

export const ChatCard = ({ user }) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm();

  const postMessage = (data) => {
    const message = data.message.trim();
    if (message !== "") {
      const date = new Date();
      const newMessage = {
        id: uid(),
        message,
        userId: user.id,
        userName: user.name,
        time: `${date.getHours()}:${date.getMinutes()}`,
      };
      dispatch(addMessage(newMessage));
      reset();
    }
  };

  const randomImageUrl = `https://i.pravatar.cc/150?img=${
    Math.floor(Math.random() * 70) + 1
  }`;

  return (
    <div className="w-full bg-white shadow-md rounded-md overflow-hidden p-20">
      <div className="p-4 bg-blue-50 h-96 overflow-y-auto mr-[-15px]">
        <Messages userId={user.id} imageUrl={randomImageUrl} />
      </div>
      <div className="flex items-center p-4 bg-gray-50">
        <form
          onSubmit={handleSubmit(postMessage)}
          className="flex items-center w-full"
        >
          <img
            src={randomImageUrl}
            alt="user avatar"
            className="w-10 h-10 rounded-full mr-4"
          />
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md resize-none"
            placeholder="Message"
            {...register("message", { required: true })}
          />
          <button
            type="submit"
            className="ml-2 p-2 bg-violet-500 text-white rounded-md"
            aria-label="send-message"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
