import Message from "../../models/Message";
const Mutation = {
  createMessage: async (_, { title, content, author }) => {
    const newMessage = new Message({
      title,
      content,
      author,
    });
    return await newMessage.save();
  },
  deleteMessage: async (_, { _id }) => {
    try {
      await Message.findByIdAndDelete(_id);
    } catch {}
    return await Message.find();
  },
};

export default Mutation;
