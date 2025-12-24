import mongoose from 'mongoose';

// MongoDB connection
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

// Post schema
const PostSchema = new mongoose.Schema({
  author: String,
  avatar: String,
  content: String,
  timestamp: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  likedBy: [String],
  comments: [{ author: String, content: String, timestamp: Date }]
});

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'PUT') {
    try {
      const { userId } = req.body;
      const post = await Post.findById(req.query.id);

      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      if (post.likedBy.includes(userId)) {
        post.likedBy = post.likedBy.filter(id => id !== userId);
        post.likes -= 1;
      } else {
        post.likedBy.push(userId);
        post.likes += 1;
      }

      await post.save();
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}