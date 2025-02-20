import axios from "axios";
import { toast } from "sonner";

const OfetchOutlookF = async () => {
  try {
    const response = await axios.get("/api/outlook/mail/getMail");
    toast.message("Latest Outlook Fecthed successfully");
    return {
      message: response?.data?.body,
      subject: response?.data?.subject,
      from: response?.data?.from,
      id: response?.data?.id,
    };
  } catch (error: any) {
    toast.error(error.message);
  }
};

const OfetchManyOutlookF = async () => {
  try {
    const response = await axios.get("/api/outlook/mail/getMany");
    toast.message(
      `Latest ${response?.data?.length} mails Fecthed successfully`
    );
    return {
      message: response?.data[0]?.body,
      from: response?.data[0]?.from,
      subject: response?.data[0]?.subject,
      id: response?.data[0]?.id,
    };
  } catch (error: any) {
    toast.error(error.message);
  }
};

const OdeleteMessageOutlookF = async function (data: any) {
  const { id } = data;
  try {
    const response = await axios.delete("/api/outlook/mail/deleteMessage", {
      params: {
        messageId: id,
      },
    });

    if (response.status === 200) {
      toast.success("Outlook Message deleted successfully");
    } else {
      toast.error("Failed to delete message");
    }
  } catch (error) {
    toast.error("Failed to delete message");
  }
};

const OcreateDraftOutlookF = async (data: any) => {
  const { from, message, subject } = data;
  try {
    const response = await axios.post("/api/outlook/draft/createDraft", {
      recipient: from || "ensaraisites@gmail.com",
      subject: subject || "Draft Subject Example One",
      body:
        message ||
        "Draft example text just to test the flow of the workflow One",
    });

    if (response.status === 200) {
      toast.success("Outlook Draft saved successfully");
      return {
        id: response?.data?.draftId,
        subject: response?.data?.subject,
        message: response?.data?.message,
      };
    } else {
      toast.error("Failed to save draft");
    }
  } catch (error) {
    toast.error("Failed to save draft");
  }
};

const OgetDraftOutlookF = async () => {
  try {
    const response = await axios.get("/api/outlook/draft/getDraft");
    toast.message("Drafts Fecthed successfully");
    return {
      id: response?.data?.id,
      subject: response?.data?.subject,
      message: response?.data?.message,
    };
  } catch (error: any) {
    toast.error(error.message);
  }
};

const OdeleteDraftOutlookF = async (data: any) => {
  const { id: draftId } = data;
  try {
    const response = await axios.delete(`/api/outlook/draft/deleteDraft`, {
      params: { draftId },
    });
    toast.message("Draft deleted successfully");
  } catch (error: any) {
    toast.error(error.message);
  }
};

const OsendMailOutlookF = async (data: any) => {
  const { to = "ensaraisites@gmail.com", subject, message } = data;
  try {
    const response = await axios.post("/api/outlook/mail/sendMail", {
      to,
      subject,
      body: message,
    });

    if (response.status === 200) {
      toast.success("Email sent successfully!");
    } else {
      toast.error("Failed to send email");
    }
  } catch (error: any) {
    toast.error(error.message || "An error occurred while sending email");
  }
};

const OupdateDraftOutlookF = async (data: any) => {
  const { id: draftId, subject, message, from } = data;
  try {
    const response = await axios.patch("/api/outlook/draft/updateDraft", {
      draftId,
      recipient: from || "ensaraisites@gmail.com",
      subject: subject + "Extra Text" || "Updated Subject for workflow test",
      body:
        message + "Extra Text" || "Updated Message to test the workflow Test",
    });

    if (response.status === 200) {
      toast.success("Outlook Draft Updated saved successfully");
      return {
        id: response?.data?.draftId,
        subject: response?.data?.subject,
        message: response?.data?.message,
      };
    } else {
      toast.error("Failed to update draft");
    }
  } catch (error) {
    toast.error("Failed to update draft");
  }
};

const OfolderCreateOutlookF = async function (
  name: string = `New Folder ${Math.floor(Math.random() * 100)}`
) {
  try {
    const response = await axios.post("/api/outlook/folder/createFolder", {
      folderName: name,
    });

    if (response.status === 200) {
      toast.success("Outlook Folder created");
      return response?.data?.folderId;
    } else {
      toast.error("Failed to create folder");
    }
  } catch (error) {
    toast.error("Failed to create folder");
  }
};

const OfolderDeleteOutlookF = async function (folderId: string) {
  if (!folderId) return toast.message("No Folders");
  try {
    const response = await axios.delete(`/api/outlook/folder/deleteFolder`, {
      params: { folderId },
    });
    toast.message("Folder deleted successfully");
  } catch (error: any) {
    toast.error(error.message);
  }
};

const OfolderGetOutlookF = async function (folderId: any) {
  if (!folderId) return toast.message("No Folders");
  try {
    const response = await axios.get("/api/outlook/folder/getFolder", {
      params: { folderId },
    });
    toast.message("Folder Fecthed successfully");
    return response?.data?.folder?.id;
  } catch (error: any) {
    toast.error(error.message);
  }
};
const OfolderGetManyOutlookF = async function () {
  try {
    const response = await axios.get("/api/outlook/folder/getManyFolders");
    toast.message("Folders Fecthed successfully");
    return response?.data?.folders?.value.at(-1).id;
  } catch (error: any) {
    toast.error(error.message);
  }
};

const OfolderUpdateOutlookF = async function (folderId: string) {
  if (!folderId) return toast.message("No Folders");
  try {
    const response = await axios.patch("/api/outlook/folder/updateFolder", {
      folderId,
      newFolderName: `Updated Name ${Math.floor(Math.random() * 200)}`,
    });

    if (response.status === 200) {
      toast.success("Folder Name Updated");
      return response?.data?.updatedFolder?.id;
    } else {
      toast.error("Failed to update folder");
    }
  } catch (error) {
    toast.error("Failed to update folder");
  }
};

const OcontactCreateOutlookF = async function () {
  try {
    const response = await axios.post("/api/outlook/contact/createContact", {
      givenName: "John",
      surname: "Micheal",
      emailAddresses: [
        {
          address: "johnMicheal@example.com",
        },
      ],
    });

    if (response.status === 200) {
      toast.success("Contact created successfully");
      return response?.data?.contactId;
    } else {
      toast.error("Failed to create contact");
    }
  } catch (error) {
    toast.error("Failed to create contact");
  }
};

const OcontactGetOutlookF = async function (contactId: string) {
  if (!contactId) return toast.message("No Contacts");
  try {
    const response = await axios.get("/api/outlook/contact/getContact", {
      params: { contactId },
    });
    toast.message("Contact Fetched successfully");
    return response?.data?.contact?.id;
  } catch (error: any) {
    toast.error(error.message);
  }
};

const OcontactGetAllOutlookF = async function () {
  try {
    const response = await axios.get("/api/outlook/contact/getContacts");
    toast.message("Contacts Fetched successfully");
    return response?.data?.contacts?.value.at(-1).id;
  } catch (error: any) {
    toast.error(error.message);
  }
};

const OcontactUpdateOutlookF = async function (contactId: string) {
  if (!contactId) return toast.message("No Contacts");
  try {
    const response = await axios.patch("/api/outlook/contact/updateContact", {
      contactId,
      givenName: "John",
      surname: "Doe",
      emailAddresses: [
        {
          address: "johnMicheal2.updated@example.com",
        },
      ],
    });

    if (response.status === 200) {
      toast.success("Contact Updated successfully");
      return response?.data?.updatedContact?.id;
    } else {
      toast.error("Failed to update contact");
    }
  } catch (error) {
    toast.error("Failed to update contact");
  }
};

const OcontactDeleteOutlookF = async function (contactId: string) {
  if (!contactId) return toast.message("No Contacts");
  try {
    const response = await axios.delete(`/api/outlook/contact/deleteContact`, {
      params: { contactId },
    });
    toast.message("Contact deleted successfully");
  } catch (error: any) {
    toast.error(error.message);
  }
};

const OcalendarCreateOutlookF = async function () {
  try {
    const response = await axios.post("/api/outlook/calendar/createCalendar", {
      calendarName: "My Daily Calender",
    });

    if (response.status === 200) {
      toast.success("Outlook Calendar created");
      return response?.data?.calendar?.id;
    } else {
      toast.error("Failed to Calendar folder");
    }
  } catch (error) {
    toast.error("Failed to Calendar folder");
  }
};

const OcalendarGetOutlookF = async function (calendarId: string) {
  if (!calendarId) return toast.message("No Calendars");
  try {
    const response = await axios.get("/api/outlook/calendar/getCalendar", {
      params: { calendarId },
    });
    toast.message("Calendar Fetched successfully");
    return response?.data?.calendar?.id;
  } catch (error: any) {
    toast.error(error.message);
  }
};

const OcalendarGetAllOutlookF = async function () {
  try {
    const response = await axios.get("/api/outlook/calendar/getCalendars");
    toast.message("calendars Fetched successfully");
    return response?.data?.calendars?.value?.at(-1).id;
  } catch (error: any) {
    toast.error(error.message);
  }
};

const OcalendarUpdateOutlookF = async function (calendarId: string) {
  if (!calendarId) return toast.message("No Calendars");
  try {
    const response = await axios.patch("/api/outlook/calendar/updateCalendar", {
      calendarId,
      calendarName: "My New Updated Calendar",
    });

    if (response.status === 200) {
      toast.success("Outlook Calendar Updated successfully");
      return response?.data?.updatedCalendar?.id;
    } else {
      toast.error("Failed to update Calendar");
    }
  } catch (error) {
    toast.error("Failed to update Calendar");
  }
};

const OcalendarDeleteOutlookF = async function (calendarId: string) {
  if (!calendarId) return toast.message("No Calendars");
  try {
    const response = await axios.delete(
      `/api/outlook/calendar/deleteCalendar`,
      {
        params: { calendarId },
      }
    );
    toast.message("Calendar deleted successfully");
  } catch (error: any) {
    toast.error(error.message);
  }
};

const OeventCreateOutlookF = async function () {
  const eventData = {
    subject: "Team Meeting",
    body: "This is the agenda for the team meeting: \n- Review project status \n- Discuss upcoming deadlines",
    startDateTime: "2025-02-28T14:00:00",
    endDateTime: "2025-02-28T15:00:00",
    location: "Conference Room 1",
    attendees: [
      {
        emailAddress: {
          address: "john.Smith2.doe@example.com",
          name: "John Doe",
        },
        type: "required",
      },
      {
        emailAddress: {
          address: "jane.Sip2.doe@example.com",
          name: "Jane Doe",
        },
        type: "optional",
      },
    ],
  };
  try {
    const response = await axios.post(
      "/api/outlook/event/createEvent",
      eventData
    );

    if (response.status === 200) {
      toast.success("Outlook Calendar created");
      return response?.data?.eventId;
    } else {
      toast.error("Failed to Calendar folder");
    }
  } catch (error) {
    toast.error("Failed to Calendar folder");
  }
};

const OeventGetOutlookF = async function (eventId: string) {
  if (!eventId) return toast.message("No Events");
  try {
    const response = await axios.get("/api/outlook/event/getEvent", {
      params: { eventId },
    });
    toast.message("Event Fetched successfully");
    return response?.data?.event?.id;
  } catch (error: any) {
    toast.error(error.message);
  }
};

const OeventGetAllOutlookF = async function () {
  try {
    const response = await axios.get("/api/outlook/event/getEvents");
    toast.message("Events Fecthed successfully");
    return response?.data?.events?.value?.at(-1).id;
  } catch (error: any) {
    toast.error(error.message);
  }
};

const OeventUpdateOutlookF = async function (eventId: string) {
  if (!eventId) return toast.message("No Events");
  try {
    const response = await axios.patch("/api/outlook/event/updateEvent", {
      eventId,
      subject: "Updated Event Subject",
      body: "This is the updated body of the event.",
      location: "Updated Meeting Room",
      startDateTime: "2025-02-27T16:00:00",
      endDateTime: "2025-02-27T17:00:00",
      attendees: [
        {
          emailAddress: { address: "jane2.doe@example.com", name: "Jane2 Doe" },
          type: "optional",
        },
      ],
    });

    if (response.status === 200) {
      toast.success("Outlook Event Updated successfully");
      return response?.data?.event?.id;
    } else {
      toast.error("Failed to update Event");
    }
  } catch (error) {
    toast.error("Failed to update Event");
  }
};

const OeventDeleteOutlookF = async function (eventId: string) {
  if (!eventId) return toast.message("No events");
  try {
    const response = await axios.delete(`/api/outlook/event/deleteEvent`, {
      params: { eventId },
    });
    toast.message("event deleted successfully");
  } catch (error: any) {
    toast.error(error.message);
  }
};

const OaddAttachmentOutlookF = async function (data: any) {
  const { id } = data;
  try {
    const response = await axios.post("/api/outlook/attachment/addAttachment", {
      messageId: id,
      fileName: "test_attachment3.pdf",
      fileContent: "Base64FileContentHere",
      contentType: "application/pdf",
    });

    if (response.status === 200) {
      toast.success("Attachment added successfully");
      return response?.data?.attachment?.id;
    } else {
      toast.error("Failed to add attachment");
    }
  } catch (error) {
    toast.error("Failed to add attachment");
  }
};

const OgetAttachmentOutlookF = async function (data: any) {
  const { id: messageId } = data;
  if (!messageId) return toast.message("No Message ID");

  try {
    const response = await axios.get("/api/outlook/attachment/getAttachment", {
      params: {
        messageId,
      },
    });

    console.log("The attachment:", response);

    if (response.status === 200) {
      toast.success("Attachment retrieved successfully");
      return response?.data?.attachmentId;
    } else {
      toast.error("Failed to retrieve attachment");
    }
  } catch (error) {
    toast.error("Failed to retrieve attachment");
  }
};

const OgetAllAttachmentOutlookF = async function (data: any) {
  const { id: messageId } = data;
  if (!messageId) return toast.message("No Attachments");
  try {
    const response = await axios.get("/api/outlook/attachment/getAttachments", {
      params: {
        messageId,
      },
    });

    console.log("The multiple attachments:", response);

    if (response.status === 200) {
      toast.success("Multiple attachments retrieved successfully");
    } else {
      toast.error("Failed to retrieve multiple attachments");
    }
  } catch (error) {
    toast.error("Failed to retrieve multiple attachments");
  }
};

const OdownloadAttachmentOutlookF = async function (data: any) {
  let messageId;
  if (typeof data === "string") {
    messageId = data;
  } else {
    const { id } = data;
    messageId = id;
  }

  if (!messageId) return toast.message("No Message ID");

  try {
    const response = await axios.get(
      "/api/outlook/attachment/downloadAttachment",
      {
        params: {
          messageId,
        },
      }
    );

    console.log("Attachment content:", response.data);

    if (response.status === 200) {
      const base64Content = response.data.content;

      // Convert base64 content to byte array and trigger download
      const byteCharacters = atob(base64Content);
      const byteArrays = [];

      for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
        const slice = byteCharacters.slice(offset, offset + 1024);
        const byteNumbers = new Array(slice.length);

        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      const blob = new Blob(byteArrays, { type: "application/octet-stream" }); // Adjust MIME type if necessary
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "attachment";
      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast.success("Attachment downloaded successfully");
    } else {
      toast.error("Failed to download attachment");
    }
  } catch (error) {
    toast.error("Failed to download attachment");
  }
};

export {
  OfetchOutlookF,
  OfetchManyOutlookF,
  OcreateDraftOutlookF,
  OgetDraftOutlookF,
  OdeleteDraftOutlookF,
  OsendMailOutlookF,
  OupdateDraftOutlookF,
  OfolderCreateOutlookF,
  OfolderDeleteOutlookF,
  OfolderGetOutlookF,
  OfolderGetManyOutlookF,
  OfolderUpdateOutlookF,
  OcontactCreateOutlookF,
  OcontactGetOutlookF,
  OcontactGetAllOutlookF,
  OcontactUpdateOutlookF,
  OcontactDeleteOutlookF,
  OcalendarCreateOutlookF,
  OcalendarGetOutlookF,
  OcalendarGetAllOutlookF,
  OcalendarUpdateOutlookF,
  OcalendarDeleteOutlookF,
  OeventCreateOutlookF,
  OeventGetOutlookF,
  OeventGetAllOutlookF,
  OeventUpdateOutlookF,
  OeventDeleteOutlookF,
  OaddAttachmentOutlookF,
  OgetAttachmentOutlookF,
  OgetAllAttachmentOutlookF,
  OdownloadAttachmentOutlookF,
  OdeleteMessageOutlookF,
};
