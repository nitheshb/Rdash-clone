import axios from "axios";
import { toast } from "sonner";

const OfetchOutlookF = async () => {
  try {
    const response = await axios.get("/api/outlook/getMail");
    console.log("The first:", response);
    toast.message("Latest Outlook Fecthed successfully");
    return response.data.body;
  } catch (error: any) {
    toast.error(error.message);
  }
};

const OfetchManyOutlookF = async () => {
  try {
    const response = await axios.get("/api/outlook/getMany");
    console.log("The Second:", response);
    toast.message("Latest 10 mails Fecthed successfully");
    return response.data.body;
  } catch (error: any) {
    toast.error(error.message);
  }
};

const OcreateDraftOutlookF = async (
  generatedDraft: string,
  from: string, // recipient email address
  subject: string
) => {
  console.log("hello there");

  try {
    const response = await axios.post("/api/outlook/createDraft", {
      recipient: from || "ensaraisites@gmail.com",
      subject: subject || "No Subject",
      body: generatedDraft,
    });

    if (response.status === 200) {
      toast.success("Outlook Draft saved successfully");
    } else {
      toast.error("Failed to save draft");
    }
  } catch (error) {
    console.error("Error creating draft:", error);
    toast.error("Failed to save draft");
  }
};

const OgetDraftOutlookF = async () => {
  console.log("Get the draft outlook");
};

const OdeleteDraftOutlookF = async () => {
  console.log("Delete the draft outlook");
};

export {
  OfetchOutlookF,
  OfetchManyOutlookF,
  OcreateDraftOutlookF,
  OgetDraftOutlookF,
  OdeleteDraftOutlookF,
};
