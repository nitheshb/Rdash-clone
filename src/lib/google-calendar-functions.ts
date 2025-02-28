import axios from "axios";
import { toast } from "sonner";

const GCeventAvailablityCalendarF = async function () {
  const timeMin = "2025-05-07T01:00:00Z";
  const timeMax = "2025-05-07T23:00:00Z";

  try {
    const response = await axios.get("/api/googleCalendar/calendar", {
      params: { timeMin, timeMax },
    });

    const checkAvailability =
      response?.data?.data?.calendars?.primary?.busy?.length > 0;
    toast.success(
      checkAvailability
        ? "No Availability for this time period"
        : response?.data?.message
    );
    return checkAvailability;
  } catch (error) {
    console.error("Error getting availability:", error);
  }
};

const GCcreateEventCalendarF = async function (checkAvailability: any) {
  if (checkAvailability)
    return toast.success(
      "Cannot create an event, no availability for this time period"
    );
  const eventDetails = {
    summary: "Meeting with John",
    description: "Discuss project updates",
    location: "Office",
    startTime: "2025-05-07T08:00:00Z",
    endTime: "2025-05-07T09:00:00Z",
  };

  try {
    const response = await axios.post(
      "/api/googleCalendar/events/createEvent",
      eventDetails
    );
    toast.success(response?.data?.message);

    return response?.data?.event?.id;
  } catch (error) {
    toast.error("Failed to fetch events");
  }
};

const GcgetEventCalendarF = async function (eventId: string) {
  if (!eventId) return toast.success("No event to fetch");
  try {
    const response = await axios.get("/api/googleCalendar/events/getEvent", {
      params: { eventId },
    });
    toast.success(response?.data?.message);
    console.log(
      "Event retrieved here:",
      response?.data?.message,
      response?.data?.event?.id
    );
    return response?.data?.event?.id;
  } catch (error) {
    toast.error("Error getting event");
  }
};

const GCgetManyEventsCalendarF = async function () {
  const timeMin = "2025-05-07T00:00:00Z";
  const timeMax = "2025-05-07T23:59:59Z";

  try {
    const response = await axios.get(
      "/api/googleCalendar/events/getManyEvents",
      {
        params: { timeMin, timeMax },
      }
    );
    console.log(
      "Events retrieved:",
      response?.data?.message,
      response?.data?.events?.items?.at(-1)?.id
    );
    toast.success(response?.data?.message);
    return response?.data?.events?.items?.at(-1)?.id;
  } catch (error) {
    toast.error("Error getting events");
  }
};

const GCupdateEventCalendarF = async function (eventId: string) {
  if (!eventId) return toast.success("No event to update");
  const eventDetails = {
    eventId: eventId,
    summary: "Updated Meeting with john and team",
    description: "Updated description as request from the client",
    startTime: "2025-05-07T14:00:00Z",
    endTime: "2025-05-07T15:00:00Z",
  };

  try {
    const response = await axios.patch(
      "/api/googleCalendar/events/updateEvent",
      eventDetails
    );
    toast.success(response?.data?.message);
    console.log(
      "Event updated:",
      response?.data?.message,
      response?.data?.event?.id
    );
    return response?.data?.event?.id;
  } catch (error) {
    toast.error("Error updating event");
  }
};

const GCdeleteEventCalendarF = async function (eventId: string) {
  if (!eventId) return toast.success("No eventId to delete an event");
  try {
    const response = await axios.delete(
      "/api/googleCalendar/events/deleteEvent",
      {
        data: { eventId },
      }
    );
    console.log("Event deleted:", response.data);
  } catch (error) {
    toast.error("Error deleting event");
  }
};

export {
  GCeventAvailablityCalendarF,
  GCcreateEventCalendarF,
  GcgetEventCalendarF,
  GCgetManyEventsCalendarF,
  GCupdateEventCalendarF,
  GCdeleteEventCalendarF,
};
