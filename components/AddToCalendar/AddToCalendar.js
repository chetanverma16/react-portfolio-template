import { useState } from "react";

/* update calnedar details with your personal information */
const AddToCalendar = () => {
  const [event, setEvent] = useState({
    title: "Chat with (candidate name here) hiring meeting",
    description:
      'Discuss background and upcoming hiring tasks.  email ▶️"yourEmail@live.com" ',
    /* you can import you image from a cdn like Linkedin or Github,  copy paste image url/link */
    image:
      '<img src="https://media.licdn.com/dms/image/D4D03AQEbs4OYFfJNIw/profile-displayphoto-shrink_400_400/0/1677634568239?e=1683763200&v=beta&t=udBxCDJKS54-tRjhmj3RmfMc0h4OZlnqO7iFW53JiPM" width="30" height="30">',
    location: "Online",
    startTime: "2023-03-15T10:00:00-04:00",
    endTime: "2023-03-15T11:00:00-04:00",
  });

  /* outlook */
  const constructOutlookUrl = () => {
    const outlookCalendarBaseUrl =
      "https://outlook.office.com/calendar/0/deeplink/compose";
    const outlookCalendarParams = new URLSearchParams({
      subject: event.title,
      location: event.location,
      body: event.description + event.image,
      startdt: new Date(event.startTime).toISOString(),
      enddt: new Date(event.endTime).toISOString(),
      allday: false,
    });
    return `${outlookCalendarBaseUrl}?${outlookCalendarParams.toString()}`;
  };

  /* apple */
  const constructAppleUrl = () => {
    const appleCalendarBaseUrl =
      "webcal://p25-calendars.icloud.com/published/2/abcdefghijklmno";
    const appleCalendarParams = new URLSearchParams({
      title: event.title,
      location: event.location,
      notes: event.description,
      start: new Date(event.startTime).toISOString().replace(/[:-]/g, ""),
      end: new Date(event.endTime).toISOString().replace(/[:-]/g, ""),
      isAllDay: false,
      url: "",
    });
    return `${appleCalendarBaseUrl}?${appleCalendarParams.toString()}`;
  };

  const openCalendar = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="calendar-footer flex justify-center   mt-0">
      <div className="btn-gradient">
        <button
          className="outlook-btn btn  hover:bg-white hover:text-black opacity-95 hover:opacity-100 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => openCalendar(constructOutlookUrl())}
        >
          <span className="add-to-cal-plus">+</span> Outlook Calendar
        </button>
      </div>
      <button
        className="apple-btn  hover:bg-white hover:text-black opacity-95 hover:opacity-100 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => openCalendar(constructAppleUrl())}
      >
        <span className="add-to-cal-plus">+</span> Apple Calendar
      </button>
    </div>
  );
};

export default AddToCalendar;
