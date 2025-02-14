import axios from "axios";
import { toast } from "sonner";

const GfetchGmailF = async () => {
  try {
    const response = await axios.get("/api/gmail/getRecentGmail");
    toast.message("Latest Email Fecthed successfully");
    return response.data.body;
  } catch (error: any) {
    toast.error(error.message);
  }
};

const GdraftGmailF = async function (
  generatedDraft: string,
  from: string,
  subject: string
) {
  try {
    const response = await axios.post("/api/gmail/saveGmailDraft", {
      recipient: from,
      subject: subject || "No Subject",
      body: generatedDraft,
    });

    toast.message("Draft saved successfully");
  } catch (error) {
    toast.error("Failed to save draft");
  }
};

export { GfetchGmailF, GdraftGmailF };
