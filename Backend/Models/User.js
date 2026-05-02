// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//       unique: true
//     },

//     password: {
//       type: String,
//       required: true
//     }
//   },
//   { timestamps: true }
// );

// export default mongoose.model("User", userSchema);


import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  isVerified: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model("User", userSchema);