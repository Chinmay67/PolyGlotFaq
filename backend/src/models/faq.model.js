import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    translations: {
        en: { type: String },
        hi: { type: String },
        bn: { type: String }
    }
}, { timestamps: true });

export default mongoose.model("FAQ", faqSchema);
